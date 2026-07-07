import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE"


type ContributionApiLevel = 0 | 1 | 2 | 3 | 4
interface ContributionDay {
  color: string
  contributionCount: number
  contributionLevel: ContributionLevel
  date: string
}

interface GithubContributionData {
  contributions: ContributionDay[]
}

interface GithubApiContribution {
  date: string
  count: number
  level: ContributionApiLevel
}

interface GithubContributionApiData {
  contributions: GithubApiContribution[]
}

interface GithubCalendarProps {
  username: string
  variant?: "default" | "city-lights" | "minimal"
  shape?: "square" | "rounded" | "circle" | "squircle"
  glowIntensity?: number
  className?: string
  showTotal?: boolean
  colorSchema?: "green" | "blue" | "purple" | "orange" | "gray"
}

const colorSchemas = {
  gray: {
    level0: "bg-zinc-800 border-zinc-700/60",
    level1: "bg-zinc-700 border-zinc-600/70",
    level2: "bg-zinc-600 border-zinc-500/70",
    level3: "bg-zinc-400 border-zinc-300/70",
    level4: "bg-zinc-200 border-zinc-100/80",
  },
  green: {
    level0: "bg-terminal-bg-light/50 border-terminal-border/50",
    level1: "bg-emerald-950 border-emerald-800/70",
    level2: "bg-emerald-800 border-emerald-600/70",
    level3: "bg-emerald-600 border-emerald-400/70",
    level4: "bg-emerald-400 border-emerald-200/80",
  },
  blue: {
    level0: "bg-terminal-bg-light/50 border-terminal-border/50",
    level1: "bg-blue-950 border-blue-800/70",
    level2: "bg-blue-800 border-blue-600/70",
    level3: "bg-blue-600 border-blue-400/70",
    level4: "bg-blue-400 border-blue-200/80",
  },
  purple: {
    level0: "bg-terminal-bg-light/50 border-terminal-border/50",
    level1: "bg-purple-950 border-purple-800/70",
    level2: "bg-purple-800 border-purple-600/70",
    level3: "bg-purple-600 border-purple-400/70",
    level4: "bg-purple-400 border-purple-200/80",
  },
  orange: {
    level0: "bg-terminal-bg-light/50 border-terminal-border/50",
    level1: "bg-orange-950 border-orange-800/70",
    level2: "bg-orange-800 border-orange-600/70",
    level3: "bg-orange-600 border-orange-400/70",
    level4: "bg-orange-400 border-orange-200/80",
  },
}

const glowColors: Record<keyof typeof colorSchemas, string> = {
  gray: "rgba(228, 228, 231, 0.38)",
  green: "rgba(52, 211, 153, 0.4)",
  blue: "rgba(96, 165, 250, 0.4)",
  purple: "rgba(192, 132, 252, 0.4)",
  orange: "rgba(251, 146, 60, 0.4)",
}

function getLevelClass(
  level: ContributionLevel,
  schema: keyof typeof colorSchemas = "green"
) {
  const colors = colorSchemas[schema]

  switch (level) {
    case "FIRST_QUARTILE":
      return colors.level1
    case "SECOND_QUARTILE":
      return colors.level2
    case "THIRD_QUARTILE":
      return colors.level3
    case "FOURTH_QUARTILE":
      return colors.level4
    case "NONE":
    default:
      return colors.level0
  }
}

function getShapeClass(shape: GithubCalendarProps["shape"] = "rounded") {
  switch (shape) {
    case "circle":
      return "rounded-full"
    case "square":
      return "rounded-none"
    case "squircle":
      return "rounded-sm"
    case "rounded":
    default:
      return "rounded-[0.08rem]"
  }
}

function getLevelValue(level: ContributionLevel) {
  switch (level) {
    case "FIRST_QUARTILE":
      return 1
    case "SECOND_QUARTILE":
      return 2
    case "THIRD_QUARTILE":
      return 3
    case "FOURTH_QUARTILE":
      return 4
    case "NONE":
    default:
      return 0
  }
}

function formatContributionDate(date: string) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))
}

function getContributionLabel(day: ContributionDay) {
  const count = day.contributionCount
  const contributionText = count === 1 ? "contribution" : "contributions"
  const prefix = count === 0 ? "No" : count.toLocaleString()

  return `${prefix} ${contributionText} on ${formatContributionDate(day.date)}`
}

const HIDDEN_OLDER_WEEKS = 27
const CONTRIBUTION_CALENDAR_DAYS = 365 * 2 - HIDDEN_OLDER_WEEKS * 7
const CONTRIBUTION_COLORS_BY_LEVEL: Record<ContributionApiLevel, string> = {
  0: "#ebedf0",
  1: "#9be9a8",
  2: "#40c463",
  3: "#30a14e",
  4: "#216e39",
}
const CONTRIBUTION_LEVEL_BY_API_LEVEL: Record<ContributionApiLevel, ContributionLevel> = {
  0: "NONE",
  1: "FIRST_QUARTILE",
  2: "SECOND_QUARTILE",
  3: "THIRD_QUARTILE",
  4: "FOURTH_QUARTILE",
}
const EMPTY_CONTRIBUTION_COLOR = CONTRIBUTION_COLORS_BY_LEVEL[0]

function getContributionCalendarRange() {
  const now = new Date()
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  const endDate = new Date(today)
  endDate.setUTCDate(endDate.getUTCDate() + ((7 - endDate.getUTCDay()) % 7))

  const rangeStart = new Date(endDate)
  rangeStart.setUTCDate(rangeStart.getUTCDate() - (CONTRIBUTION_CALENDAR_DAYS - 1))

  const startDate = new Date(rangeStart)
  startDate.setUTCDate(startDate.getUTCDate() - ((startDate.getUTCDay() + 6) % 7))

  return { startDate, endDate }
}

function getContributionYears() {
  const { startDate, endDate } = getContributionCalendarRange()
  const years: number[] = []

  for (let year = startDate.getUTCFullYear(); year <= endDate.getUTCFullYear(); year++) {
    years.push(year)
  }

  return years
}

function completeContributionCalendar(contributions: ContributionDay[]) {
  const daysByDate = new Map<string, ContributionDay>()

  for (const day of contributions) {
    daysByDate.set(day.date, day)
  }

  const toDateKey = (date: Date) => {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, "0")
    const day = String(date.getUTCDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  }
  const addDays = (date: Date, days: number) => {
    const next = new Date(date)
    next.setUTCDate(next.getUTCDate() + days)

    return next
  }
  const { startDate, endDate } = getContributionCalendarRange()
  const weeks: ContributionDay[][] = []
  let week: ContributionDay[] = []
  let cursor = new Date(startDate)

  while (cursor.getTime() <= endDate.getTime()) {
    const date = toDateKey(cursor)
    week.push(
      daysByDate.get(date) ?? {
        color: EMPTY_CONTRIBUTION_COLOR,
        contributionCount: 0,
        contributionLevel: "NONE",
        date,
      }
    )

    if (week.length === 7) {
      weeks.push(week)
      week = []
    }

    cursor = addDays(cursor, 1)
  }

  if (week.length > 0) {
    weeks.push(week)
  }

  return weeks
}

export function GithubCalendar({
  username,
  variant = "default",
  shape = "rounded",
  glowIntensity = 3,
  className,
  showTotal = true,
  colorSchema = "green",
}: GithubCalendarProps) {
  const [data, setData] = React.useState<GithubContributionData | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [hoveredDay, setHoveredDay] = React.useState<ContributionDay | null>(null)
  const [tooltipPos, setTooltipPos] = React.useState({ x: 0, y: 0 })
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const calendarRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      if (!username.trim()) {
        setError("GitHub username is required")
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const years = getContributionYears()
        const yearParams = years.map((year) => `y=${year}`).join("&")
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?${yearParams}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub contribution data")
        }

        const jsonData = (await response.json()) as GithubContributionApiData
        const contributions = jsonData.contributions.map((contribution) => ({
          color: CONTRIBUTION_COLORS_BY_LEVEL[contribution.level] ?? EMPTY_CONTRIBUTION_COLOR,
          contributionCount: contribution.count,
          contributionLevel: CONTRIBUTION_LEVEL_BY_API_LEVEL[contribution.level] ?? "NONE",
          date: contribution.date,
        }))

        setData({ contributions })
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => controller.abort()
  }, [username])

  React.useLayoutEffect(() => {
    if (!hoveredDay) return

    const tooltip = tooltipRef.current
    if (!tooltip) return

    const rect = tooltip.getBoundingClientRect()
    const viewportPadding = 8
    let nextX = tooltipPos.x

    if (rect.left < viewportPadding) {
      nextX += viewportPadding - rect.left
    } else if (rect.right > window.innerWidth - viewportPadding) {
      nextX -= rect.right - (window.innerWidth - viewportPadding)
    }

    if (Math.abs(nextX - tooltipPos.x) > 0.5) {
      setTooltipPos((current) => ({ ...current, x: nextX }))
    }
  }, [hoveredDay, tooltipPos.x])

  const weeks = React.useMemo(
    () => completeContributionCalendar(data?.contributions ?? []),
    [data]
  )
  const visibleContributions = weeks.reduce(
    (total, week) =>
      total + week.reduce((weekTotal, day) => weekTotal + day.contributionCount, 0),
    0
  )

  React.useLayoutEffect(() => {
    if (loading || error || weeks.length === 0) return

    const scroller = calendarRef.current?.parentElement
    if (!scroller) return

    scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth
  }, [error, loading, weeks.length])

  function positionTooltip(event: React.MouseEvent<HTMLElement>, day: ContributionDay) {
    const viewportPadding = 8
    const x = Math.min(
      Math.max(event.clientX + 8, viewportPadding),
      window.innerWidth - viewportPadding
    )

    setHoveredDay(day)
    setTooltipPos({
      x,
      y: Math.max(event.clientY - 34, viewportPadding),
    })
  }

  if (error) {
    return (
      <div
        className={cn(
          "rounded-lg border border-terminal-error/40 bg-terminal-error/10 p-4 text-sm text-terminal-error",
          className
        )}
        role="alert"
      >
        Error: {error}
      </div>
    )
  }

  if (loading) {
    return (
      <div
        className={cn(
          "h-32 w-full animate-pulse rounded-xl border border-terminal-border bg-terminal-bg-light/40",
          className
        )}
        aria-label="Loading GitHub contributions"
        role="status"
      />
    )
  }

  const shapeClass = getShapeClass(shape)
  const isMinimal = variant === "minimal"

  const tooltip = typeof document === "undefined"
    ? null
    : createPortal(
        <AnimatePresence>
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.94 }}
              transition={{ duration: 0.16 }}
              ref={tooltipRef}
              className="pointer-events-none fixed z-[9999] max-w-[calc(100vw-1rem)] whitespace-nowrap rounded-md border border-terminal-border bg-terminal-bg-dark px-3 py-1.5 text-xs text-terminal-output shadow-xl"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
              }}
            >
              <span className="mr-1 font-bold text-terminal-command">
                {hoveredDay.contributionCount.toLocaleString()}
              </span>
              <span className="text-terminal-muted">
                contributions on {formatContributionDate(hoveredDay.date)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )

  return (
    <div ref={calendarRef} className={cn("flex min-w-0 max-w-full flex-col gap-4", className)}>
      {tooltip}
      {showTotal && (
        <div className="flex flex-wrap items-center justify-between gap-3 text-terminal-output">
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              className="h-4 w-4 fill-current text-terminal-muted"
              viewBox="0 0 16 16"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            <span className="text-sm font-semibold">@{username}</span>
          </div>
          <span className="text-sm text-terminal-muted">
            {visibleContributions.toLocaleString()} contributions in the shown range
          </span>
        </div>
      )}

      <div
        className="relative mx-auto flex w-max flex-nowrap gap-[0.16rem]"
        onMouseLeave={() => setHoveredDay(null)}
        role="img"
        aria-label={`GitHub contribution calendar for ${username}`}
      >

        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex w-[0.72rem] flex-col gap-[0.16rem]">
            {week.map((day, dayIndex) => {
              const levelValue = getLevelValue(day.contributionLevel)
              const isGlowing =
                variant === "city-lights" && day.contributionCount > 0
              const glowSize =
                day.contributionCount > 3 ? glowIntensity * 1.2 : glowIntensity

              return (
                <motion.div
                  key={day.date}
                  aria-hidden="true"
                  data-date={day.date}
                  data-level={levelValue}
                  className={cn(
                    "github-contribution-day aspect-square w-full border transition-colors duration-200",
                    colorSchema === "green"
                      ? "github-contribution-day-green"
                      : getLevelClass(day.contributionLevel, colorSchema),
                    isGlowing && "relative z-10",
                    shapeClass,
                    isMinimal && "scale-75 rounded-full"
                  )}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onMouseEnter={(event) => positionTooltip(event, day)}
                  style={{
                    "--level": levelValue,
                    ...(isGlowing
                      ? { boxShadow: `0 0 ${glowSize}px ${glowColors[colorSchema]}` }
                      : {}),
                  } as React.CSSProperties}
                  transition={{
                    delay: weekIndex * 0.01 + dayIndex * 0.01,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
