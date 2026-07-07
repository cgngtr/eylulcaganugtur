import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

const designSystemCss = `
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700;800;900&display=swap');

.ds-page {
  --ds-accent-light-h: 316;
  --ds-accent-light-s: 28%;
  --ds-accent-light-l: 58%;
  --ds-accent-h: var(--ds-accent-light-h);
  --ds-accent-s: var(--ds-accent-light-s);
  --ds-accent-l: var(--ds-accent-light-l);
  --ds-bg: #080a10;
  --ds-fg: #e6eaf5;
  --ds-muted-fg: rgba(216, 217, 236, 0.7);
  --ds-soft-fg: rgba(149, 150, 172, 0.55);
  --ds-accent: hsl(var(--ds-accent-h) var(--ds-accent-s) var(--ds-accent-l));
  --ds-accent-strong: #b978a9;
  --ds-surface: hsla(var(--ds-accent-h), var(--ds-accent-s), var(--ds-accent-l), 0.1);
  --ds-surface-2: hsla(var(--ds-accent-h), var(--ds-accent-s), calc(var(--ds-accent-l) + 4%), 0.15);
  --ds-surface-3: hsla(var(--ds-accent-h), var(--ds-accent-s), calc(var(--ds-accent-l) + 8%), 0.22);
  --ds-border: hsla(var(--ds-accent-h), var(--ds-accent-s), calc(var(--ds-accent-l) + 6%), 0.22);
  --ds-edge-highlight: inset 0 0.0625rem 0 rgba(255, 255, 255, 0.1);
  --ds-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.24), 0 0.0625rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.28), 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
  --ds-radius: 0.75rem;
  --ds-radius-sm: 0.48rem;
  --ds-content: 45rem;
  --ds-motion-instant: 120ms;
  --ds-motion-fast: 180ms;
  --ds-motion-base: 280ms;
  --ds-motion-slow: 525ms;
  --ds-ease-soft: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ds-ease-snap: cubic-bezier(0.17, 0.89, 0.32, 1.18);
  --ds-ease-disc: cubic-bezier(0.175, 0.885, 0.32, 1.15);
  min-height: 100vh;
  background:
    radial-gradient(circle at 26% 7%, rgba(185, 120, 169, 0.16), transparent 30rem),
    radial-gradient(circle at 72% 26%, rgba(99, 111, 137, 0.14), transparent 26rem),
    linear-gradient(180deg, #0d1019 0%, var(--ds-bg) 42%, #080a10 100%);
  color: var(--ds-fg);
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  color-scheme: dark;
  overflow-x: hidden;
}

.ds-page::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.19;
  background-image:
    linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(180deg, black, transparent 78%);
}

.ds-page * {
  box-sizing: border-box;
}

.ds-shell {
  min-height: 100vh;
}

.ds-sidebar {
  position: sticky;
  top: 0.75rem;
  z-index: 5;
  width: min(calc(100% - 1rem), 26rem);
  margin: 0.75rem auto 0;
  border: 1px solid rgba(252, 252, 250, 0.07);
  border-radius: var(--ds-radius);
  background: linear-gradient(180deg, rgba(13, 16, 25, 0.92), rgba(13, 16, 25, 0.66));
  padding: 0.85rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(18px);
}

.ds-brand-lockup {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ds-fg);
  text-decoration: none;
}

.ds-brand-mark {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 32% 28%, #e6eaf5 0 10%, transparent 11%),
    conic-gradient(from 220deg, #b978a9, #9596ac, #21232c, #b978a9);
  box-shadow: var(--ds-edge-highlight), 0 0 0 0.2rem rgba(185, 120, 169, 0.1);
  font-weight: 800;
  color: #080a10;
  letter-spacing: -0.08em;
}

.ds-brand-copy strong,
.ds-brand-copy span {
  display: block;
}

.ds-brand-copy strong {
  font-size: 0.8rem;
  line-height: 1.05;
  font-weight: 800;
}

.ds-brand-copy span {
  color: var(--ds-soft-fg);
  font-size: 0.64rem;
  font-weight: 500;
}

.ds-sidebar-menu {
  margin-top: 0.9rem;
  display: grid;
  gap: 0.28rem;
}

.ds-nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.1rem;
  border-radius: var(--ds-radius-sm);
  padding: 0.45rem 0.55rem;
  color: var(--ds-muted-fg);
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 700;
  transition: color 180ms ease, background 180ms ease, transform 180ms ease;
}

.ds-nav-item:hover,
.ds-nav-item.is-active {
  color: var(--ds-fg);
  background: var(--ds-surface-2);
  box-shadow: var(--ds-edge-highlight);
}

.ds-nav-item:hover {
  transform: translateX(0.16rem);
}

.ds-dot-icon {
  width: 1rem;
  height: 1rem;
  border-radius: 0.3rem;
  border: 1px solid var(--ds-border);
  background: rgba(252, 252, 250, 0.06);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}

.ds-sidebar-note {
  margin: 0;
  color: var(--ds-soft-fg);
  font-size: 0.72rem;
  line-height: 1.35;
}

.ds-main {
  width: min(var(--ds-content), calc(100vw - 2rem));
  margin-inline: auto;
  padding: 4.5rem 0 5rem;
}

.ds-topbar {
  position: fixed;
  top: 0.75rem;
  left: 50%;
  z-index: 4;
  transform: translateX(-50%);
  border: 1px solid rgba(252, 252, 250, 0.08);
  border-radius: 999px;
  background: rgba(16, 13, 12, 0.72);
  box-shadow: var(--ds-edge-highlight), 0 1rem 3rem rgba(0,0,0,0.25);
  padding: 0.33rem 0.66rem;
  color: var(--ds-soft-fg);
  font-size: 0.7rem;
  backdrop-filter: blur(16px);
}

.ds-hero {
  min-height: 76vh;
  display: grid;
  align-items: center;
  padding: 6rem 0 3rem;
}

.ds-hero-cluster {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 2.2rem;
}

.ds-kicker {
  color: var(--ds-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ds-pixel-title {
  margin: 0.4rem 0 0.8rem;
  color: #b978a9;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: clamp(2.25rem, 8vw, 4.95rem);
  font-weight: 900;
  letter-spacing: -0.085em;
  line-height: 0.82;
  text-shadow:
    0.045em 0 #151827,
    -0.045em 0 #e6eaf5,
    0 0.045em #151827,
    0.09em 0.09em 0 #5b506a,
    0.13em 0.13em 0 rgba(0, 0, 0, 0.55);
}

.ds-hero p {
  max-width: 30rem;
  color: var(--ds-muted-fg);
  font-size: 0.95rem;
}

.ds-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.ds-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 2.35rem;
  border-radius: 0.62rem;
  border: 1px solid var(--ds-border);
  background: var(--ds-surface-2);
  box-shadow: var(--ds-edge-highlight), var(--ds-shadow);
  color: var(--ds-fg);
  padding: 0.55rem 0.85rem;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 800;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.ds-button:hover {
  transform: translateY(-0.08rem);
  background: var(--ds-surface-3);
  border-color: rgba(185, 120, 169, 0.38);
}

.ds-button.is-primary {
  background: linear-gradient(180deg, #b978a9, #835075);
  border-color: rgba(255, 255, 255, 0.18);
  color: #080a10;
}

.ds-avatar-card {
  width: min(10.8rem, 32vw);
  aspect-ratio: 1;
  border: 0.18rem solid #c7b7d4;
  border-radius: 28% 36% 30% 34%;
  padding: 0.4rem;
  background: linear-gradient(145deg, #21232c, #2f354a);
  box-shadow: var(--ds-edge-highlight), 0 0 0 0.22rem #080a10, 0.5rem 0.6rem 0 #b978a9, 0 1.5rem 4rem rgba(0,0,0,0.52);
  transform: rotate(6deg);
}

.ds-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 24% 32% 26% 30%;
  background:
    radial-gradient(circle at 44% 36%, #d8b0ca 0 7%, transparent 8%),
    radial-gradient(circle at 58% 36%, #0f1118 0 3%, transparent 4%),
    linear-gradient(135deg, transparent 0 38%, rgba(185,120,169,0.65) 39% 45%, transparent 46%),
    radial-gradient(circle at 48% 42%, #5b506a 0 24%, transparent 25%),
    linear-gradient(145deg, #835075, #0f1118 58%, #5b506a);
  position: relative;
  overflow: hidden;
}

.ds-avatar-inner::before,
.ds-avatar-inner::after {
  content: "";
  position: absolute;
  background: #251311;
}

.ds-avatar-inner::before {
  width: 58%;
  height: 31%;
  left: 12%;
  top: 11%;
  border-radius: 58% 42% 60% 20%;
  transform: rotate(-14deg);
}

.ds-avatar-inner::after {
  width: 2.5rem;
  height: 1.4rem;
  right: 10%;
  bottom: 16%;
  border-radius: 50%;
  background: rgba(252,252,250,0.1);
}

.ds-scroll-note {
  justify-self: center;
  margin-top: 4rem;
  color: var(--ds-soft-fg);
  font-size: 0.78rem;
  transform: rotate(-8deg);
}

.ds-scroll-note::before {
  content: "";
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.35rem;
  border-left: 1px solid var(--ds-accent);
  border-bottom: 1px solid var(--ds-accent);
  border-radius: 0 0 0 1.8rem;
  transform: rotate(26deg) translateY(0.5rem);
}

.ds-section {
  margin-top: 3.2rem;
}

.ds-section-heading {
  margin-bottom: 0.85rem;
}

.ds-section-heading h2 {
  margin: 0;
  color: #e8c7c0;
  font-size: clamp(1.45rem, 2.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.ds-section-heading p {
  max-width: 36rem;
  margin-top: 0.3rem;
  color: var(--ds-muted-fg);
  font-size: 0.88rem;
}

.ds-card {
  break-inside: avoid;
  margin-block-end: 0.5rem;
  border: 1px solid rgba(255,255,255,0.035);
  border-radius: var(--ds-radius);
  background: var(--ds-surface);
  box-shadow: var(--ds-edge-highlight), var(--ds-shadow);
  padding: 1rem;
}

.ds-card h3,
.ds-card h4 {
  margin: 0;
  color: #d8d9ec;
  letter-spacing: -0.02em;
}

.ds-card h3 {
  font-size: 1rem;
  font-weight: 800;
}

.ds-card h4 {
  font-size: 0.86rem;
  font-weight: 700;
}

.ds-card p,
.ds-card li {
  color: var(--ds-muted-fg);
  font-size: 0.82rem;
  font-weight: 500;
}

.ds-card p {
  margin: 0.55rem 0 0;
}

.ds-card ul {
  list-style: none;
  display: grid;
  gap: 0.35rem;
  margin: 0.75rem 0 0;
  padding: 0;
}

.ds-card li {
  position: relative;
  padding-left: 0.8rem;
}

.ds-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.58em;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  background: var(--ds-accent-strong);
}

.ds-masonry {
  columns: 2 18rem;
  column-gap: 0.5rem;
}

.ds-token-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.ds-token {
  display: grid;
  grid-template-columns: 3.4rem minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  border-radius: 0.62rem;
  background: rgba(0,0,0,0.18);
  padding: 0.5rem;
}

.ds-swatch {
  min-height: 3.2rem;
  border-radius: 0.45rem;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.12);
}

.ds-token strong,
.ds-token code {
  display: block;
}

.ds-token strong {
  font-size: 0.78rem;
  font-weight: 800;
}

.ds-token code {
  margin-top: 0.12rem;
  color: var(--ds-soft-fg);
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ds-type-specimen {
  display: grid;
  gap: 0.65rem;
}

.ds-type-row {
  border-radius: 0.55rem;
  background: rgba(0,0,0,0.18);
  padding: 0.7rem;
}

.ds-type-row strong {
  display: block;
  color: var(--ds-soft-fg);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ds-type-row span {
  display: block;
  margin-top: 0.18rem;
}

.ds-display-sample {
  color: #b978a9;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: clamp(2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 0.92;
  text-shadow: 0.07em 0.07em 0 rgba(0,0,0,0.55);
}

.ds-body-sample {
  max-width: 27rem;
  color: var(--ds-muted-fg);
  font-size: 0.95rem;
  font-weight: 500;
}

.ds-label-sample {
  color: var(--ds-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ds-component-stack {
  display: grid;
  gap: 0.5rem;
}

.ds-mini-window {
  border: 1px solid #62504e;
  border-radius: 0.55rem;
  overflow: hidden;
  background: #101010;
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.14);
}

.ds-window-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 1.65rem;
  background: linear-gradient(90deg, #d8d9ec, #9596ac);
  color: #080a10;
  padding: 0 0.45rem;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.65rem;
  font-weight: 800;
}

.ds-window-buttons {
  display: flex;
  gap: 0.18rem;
}

.ds-window-buttons span {
  width: 0.55rem;
  height: 0.55rem;
  border: 1px solid #251b1a;
  background: #f6eeee;
}

.ds-window-body {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 0.75rem;
  padding: 0.7rem;
  background:
    linear-gradient(90deg, rgba(185,120,169,0.12) 1px, transparent 1px),
    linear-gradient(rgba(230,234,245,0.08) 1px, transparent 1px),
    #2f354a;
  background-size: 18px 18px;
}

.ds-desktop-icons {
  display: grid;
  gap: 0.55rem;
}

.ds-desktop-icon {
  display: grid;
  gap: 0.18rem;
  justify-items: center;
  color: #f8f7f4;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.55rem;
  text-align: center;
}

.ds-desktop-icon::before {
  content: "";
  width: 1.1rem;
  height: 1.25rem;
  border-radius: 0.12rem;
  background: linear-gradient(135deg, #f8f7f4 0 72%, #d94b4f 73%);
  box-shadow: 0.14rem 0.12rem 0 rgba(0,0,0,0.28);
}

.ds-window-portrait {
  min-height: 7.6rem;
  border: 0.22rem solid #ded3ce;
  background:
    radial-gradient(circle at 45% 34%, #f3c0a8 0 11%, transparent 12%),
    linear-gradient(145deg, #291516, #6e3032 64%, #111);
  position: relative;
}

.ds-window-portrait::before {
  content: "example.jpg";
  position: absolute;
  left: -0.22rem;
  right: -0.22rem;
  bottom: -0.22rem;
  background: #213c83;
  color: #fff;
  padding: 0.18rem 0.3rem;
  font-size: 0.58rem;
  font-weight: 700;
}

.ds-calendar {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  gap: 0.16rem;
  margin-top: 0.7rem;
}

.ds-calendar span {
  aspect-ratio: 1;
  border-radius: 0.08rem;
  background: rgba(90, 198, 112, calc(0.18 + var(--level) * 0.18));
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.12);
}

.ds-list-card {
  border-radius: 0.55rem;
  overflow: hidden;
  background: rgba(0,0,0,0.2);
}

.ds-list-card span {
  display: block;
  border-bottom: 1px solid rgba(252,252,250,0.06);
  padding: 0.45rem 0.58rem;
  color: var(--ds-muted-fg);
  font-size: 0.78rem;
}

.ds-list-card span:last-child {
  border-bottom: 0;
}

.ds-note-card {
  position: relative;
  overflow: hidden;
  min-height: 13rem;
  background:
    radial-gradient(circle at 18% 22%, rgba(242, 105, 105, 0.18), transparent 7rem),
    var(--ds-surface);
}

.ds-note-card::before,
.ds-note-card::after {
  content: "";
  position: absolute;
  width: 4.8rem;
  height: 1.25rem;
  border: 1px solid rgba(255,255,255,0.09);
  background: rgba(244, 213, 208, 0.12);
  transform: rotate(-8deg);
}

.ds-note-card::before {
  top: 0.72rem;
  right: -1rem;
}

.ds-note-card::after {
  left: -1rem;
  bottom: 0.9rem;
  transform: rotate(7deg);
}

.ds-note-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 0.75rem;
  margin-top: 0.85rem;
}

.ds-note-polaroid {
  min-height: 7.2rem;
  border: 0.32rem solid #eee0dc;
  border-bottom-width: 1.05rem;
  border-radius: 0.28rem;
  background:
    radial-gradient(circle at 36% 30%, #8962ff 0 0.35rem, transparent 0.38rem),
    radial-gradient(circle at 62% 44%, #4bc4ff 0 0.28rem, transparent 0.31rem),
    linear-gradient(140deg, #140f2c, #1e1041 42%, #020205);
  box-shadow: 0.35rem 0.38rem 0 rgba(0,0,0,0.28);
  transform: rotate(-2deg);
}

.ds-note-lines {
  display: grid;
  gap: 0.35rem;
  align-content: start;
}

.ds-note-lines span {
  min-height: 0.58rem;
  border-radius: 999px;
  background: rgba(252,252,250,0.12);
}

.ds-song-player {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.85rem;
  border-radius: 1.1rem;
  background: linear-gradient(180deg, rgba(48, 37, 35, 0.96), rgba(38, 30, 28, 0.96));
  box-shadow: var(--ds-edge-highlight), 0 0 0 1px rgba(255,255,255,0.05), 0 1rem 2.8rem rgba(0,0,0,0.28);
  padding: 0.75rem;
}

.ds-song-player:hover .ds-cd {
  transform: translateX(1.05rem) rotate(96deg);
}

.ds-cover-scene {
  position: relative;
  width: 4.45rem;
  height: 4.45rem;
}

.ds-cover-art {
  position: absolute;
  z-index: 2;
  inset: 0;
  border-radius: 0.8rem;
  border: 1px solid rgba(255,255,255,0.13);
  background:
    radial-gradient(circle at 38% 32%, #f3e8de 0 0.45rem, transparent 0.48rem),
    radial-gradient(circle at 45% 50%, #0d0c0b 0 0.78rem, transparent 0.82rem),
    linear-gradient(135deg, #dfd5cf, #6e6966 50%, #111);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.32), 0.25rem 0.28rem 0 rgba(0,0,0,0.38);
}

.ds-cd {
  position: absolute;
  z-index: 1;
  inset: 0.18rem auto 0.18rem 1.6rem;
  width: 4rem;
  border-radius: 50%;
  background:
    radial-gradient(circle, #171414 0 14%, transparent 15%),
    conic-gradient(from 18deg, #e9e0da, #8d908f, #f8f4ed, #2a2929, #e9e0da);
  box-shadow: inset 0 0 0 0.08rem rgba(255,255,255,0.18), inset 0 0 1rem rgba(0,0,0,0.35);
  transition: transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.15);
}

.ds-cd::before {
  content: "";
  position: absolute;
  inset: 38%;
  border-radius: inherit;
  background: #110d0d;
  box-shadow: inset 0 0 0 0.18rem rgba(255,255,255,0.14);
}

.ds-player-info {
  min-width: 0;
}

.ds-player-status {
  display: flex;
  gap: 0.5rem;
  color: var(--ds-soft-fg);
  font-size: 0.74rem;
  font-weight: 700;
}

.ds-track-title,
.ds-track-artist {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ds-track-title {
  margin-top: 0.12rem;
  color: var(--ds-fg);
  font-size: 1.12rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.ds-track-artist {
  color: var(--ds-muted-fg);
  font-size: 0.92rem;
  font-weight: 500;
}

.ds-play-button {
  width: 3.15rem;
  height: 3.15rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(252,252,250,0.05);
  color: rgba(252,252,250,0.72);
  display: grid;
  place-items: center;
  text-decoration: none;
  transition: transform 180ms ease, background 180ms ease;
}

.ds-play-button::before {
  content: "";
  width: 0;
  height: 0;
  border-block: 0.48rem solid transparent;
  border-left: 0.72rem solid currentColor;
  transform: translateX(0.08rem);
}

.ds-play-button:hover {
  transform: scale(1.05);
  background: rgba(185,120,169,0.16);
}

.ds-link-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.46rem;
  margin-top: 0.85rem;
}

.ds-link-tile {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 2.85rem;
  border-radius: 0.62rem;
  background: rgba(252,252,250,0.055);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(0,0,0,0.18);
  color: #b8bed5;
  padding: 0.5rem;
  text-decoration: none;
  font-weight: 900;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease;
}

.ds-link-tile:hover {
  transform: translateY(-0.08rem) rotate(-0.35deg);
  background: rgba(185,120,169,0.12);
  color: var(--ds-fg);
}

.ds-link-icon {
  width: 1.65rem;
  height: 1.65rem;
  display: grid;
  place-items: center;
  border-radius: 0.38rem;
  border: 1px solid rgba(0,0,0,0.38);
  color: #fff;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.78rem;
  font-weight: 900;
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.28), 0.14rem 0.14rem 0 rgba(0,0,0,0.34);
}

.ds-link-icon.is-youtube { background: linear-gradient(180deg, #b978a9, #835075); }
.ds-link-icon.is-twitch { background: linear-gradient(180deg, #c7b7d4, #5b506a); }
.ds-link-icon.is-x { background: linear-gradient(180deg, #636f89, #21232c); }
.ds-link-icon.is-instagram { background: linear-gradient(135deg, #9596ac, #b978a9 52%, #5b506a); }
.ds-link-icon.is-reddit { background: linear-gradient(180deg, #ff845c, #c43816); }
.ds-link-icon.is-blue { background: linear-gradient(180deg, #67c8ff, #2472d7); }
.ds-link-icon.is-github { background: linear-gradient(180deg, #f3f0ea, #59616a); color: #171717; }
.ds-link-icon.is-mail { background: linear-gradient(180deg, #faf0e8, #6d7789); color: #181313; }

.ds-contact-card {
  min-height: 13.5rem;
}

.ds-clock {
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  background: rgba(252,252,250,0.06);
  color: #c7b7d4;
  padding: 0.08rem 0.35rem;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.ds-online-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  background: rgba(155, 210, 102, 0.18);
  color: #bfe98f;
  padding: 0.13rem 0.44rem;
  font-weight: 900;
}

.ds-online-pill::before {
  content: "";
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  border: 0.16rem solid currentColor;
  box-shadow: 0 0 0.8rem rgba(191, 233, 143, 0.35);
}

.ds-contact-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.46rem;
  margin-top: 1rem;
}

.ds-server-card {
  position: relative;
  min-height: 10.5rem;
  overflow: visible;
  background: linear-gradient(180deg, rgba(185, 120, 169, 0.16), rgba(185, 120, 169, 0.1));
  border-color: rgba(185, 120, 169, 0.24);
  transition: transform 0.35s cubic-bezier(0.17, 0.89, 0.32, 1.18), background 180ms ease;
}

.ds-server-card:hover {
  transform: scale(1.02);
  background: linear-gradient(180deg, rgba(185, 120, 169, 0.22), rgba(185, 120, 169, 0.14));
}

.ds-server-card:active {
  transform: scale(0.985);
}

.ds-server-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
}

.ds-server-name {
  color: #b978a9;
  font-size: 1.24rem;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.ds-server-stats {
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  color: #c7b7d4;
  font-size: 0.86rem;
}

.ds-stat-dot {
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 50%;
  background: #9bd266;
}

.ds-stat-dot.is-muted {
  background: #aaa2a0;
}

.ds-discord-glyph {
  position: absolute;
  right: 1rem;
  top: 3.05rem;
  width: 2rem;
  height: 1.35rem;
  border: 0.22rem solid #b978a9;
  border-radius: 0.65rem;
}

.ds-discord-glyph::before,
.ds-discord-glyph::after {
  content: "";
  position: absolute;
  top: 0.35rem;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
  background: #b978a9;
}

.ds-discord-glyph::before { left: 0.43rem; }
.ds-discord-glyph::after { right: 0.43rem; }

.ds-server-avatar {
  position: absolute;
  right: -0.55rem;
  bottom: -0.65rem;
  width: 4.8rem;
  aspect-ratio: 1;
  border-radius: 1.2rem;
  border: 1px solid rgba(255,255,255,0.15);
  background:
    radial-gradient(circle at 46% 35%, #d8b0ca 0 0.54rem, transparent 0.58rem),
    radial-gradient(circle at 60% 36%, #080a10 0 0.18rem, transparent 0.2rem),
    linear-gradient(135deg, #835075 0 30%, #0f1118 31% 62%, #5b506a);
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.45);
  transform: rotate(10deg);
  transition: transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.15);
}

.ds-server-card:hover .ds-server-avatar {
  transform: rotate(-350deg) scale(1.15);
}

.ds-code-forge {
  display: grid;
  gap: 0.55rem;
  margin-top: 0.85rem;
}

.ds-repo-tile {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.6rem;
  min-height: 3.15rem;
  border-radius: 0.62rem;
  background: rgba(252,252,250,0.055);
  color: var(--ds-muted-fg);
  padding: 0.5rem;
  text-decoration: none;
}

.ds-repo-tile strong {
  display: block;
  color: var(--ds-fg);
}

.ds-repo-tile small {
  color: var(--ds-soft-fg);
}

.ds-repo-arrow {
  color: #b978a9;
  font-size: 1.15rem;
}

.ds-hyper-list {
  display: grid;
  gap: 0.42rem;
  margin-top: 0.75rem;
}

.ds-hyper-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-radius: 0.52rem;
  background: rgba(0,0,0,0.2);
  padding: 0.46rem 0.55rem;
  color: var(--ds-muted-fg);
  font-size: 0.78rem;
}

.ds-wave {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: end;
  gap: 0.12rem;
}

.ds-wave i {
  width: 0.16rem;
  height: calc(0.32rem + var(--bar) * 0.15rem);
  border-radius: 999px;
  background: #b978a9;
  opacity: 0.7;
}

.ds-state-board {
  display: grid;
  gap: 0.48rem;
  margin-top: 0.8rem;
}

.ds-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border-radius: 0.62rem;
  background: rgba(252,252,250,0.055);
  padding: 0.55rem;
  color: var(--ds-muted-fg);
}

.ds-switch {
  width: 2.65rem;
  height: 1.35rem;
  border-radius: 999px;
  background: rgba(185,120,169,0.2);
  padding: 0.18rem;
}

.ds-switch::before {
  content: "";
  display: block;
  width: 0.98rem;
  height: 0.98rem;
  border-radius: 50%;
  background: #b978a9;
  transform: translateX(1.25rem);
  box-shadow: 0 0 0.65rem rgba(185,120,169,0.38);
}

.ds-hotkey {
  border-radius: 0.38rem;
  background: #080a10;
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.14), 0 0.12rem 0 rgba(0,0,0,0.4);
  color: #d8d9ec;
  padding: 0.18rem 0.38rem;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.68rem;
}

.ds-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.ds-pill {
  display: inline-flex;
  align-items: center;
  min-height: 1.7rem;
  border-radius: 0.5rem;
  background: rgba(0,0,0,0.2);
  color: var(--ds-muted-fg);
  padding: 0.44rem 0.5rem;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 700;
}

.ds-pill:hover {
  color: var(--ds-fg);
  background: var(--ds-surface-2);
}

.ds-code {
  display: block;
  overflow: auto;
  border-radius: 0.6rem;
  background: #0b0909;
  color: #ead7d2;
  padding: 0.9rem;
  font-family: "Roboto Condensed", system-ui, sans-serif;
  font-size: 0.72rem;
  line-height: 1.65;
}

.ds-principles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
}

.ds-principle {
  border-radius: var(--ds-radius);
  background: var(--ds-surface);
  box-shadow: var(--ds-edge-highlight), var(--ds-shadow);
  padding: 1rem;
}

.ds-principle strong {
  display: block;
  color: #d8d9ec;
  font-size: 0.9rem;
  font-weight: 800;
}

.ds-principle span {
  display: block;
  margin-top: 0.35rem;
  color: var(--ds-muted-fg);
  font-size: 0.78rem;
  font-weight: 500;
}

.ds-footer {
  margin-top: 5rem;
  border-top: 1px solid rgba(252,252,250,0.08);
  padding-top: 1.2rem;
  color: var(--ds-soft-fg);
  font-size: 0.74rem;
  font-weight: 500;
}

@keyframes ds-rise-in {
  from {
    opacity: 0;
    transform: translateY(0.65rem) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes ds-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ds-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-52%);
  }
}

@keyframes ds-scan {
  0%, 100% {
    transform: translateX(-16%);
    opacity: 0.38;
  }
  50% {
    transform: translateX(72%);
    opacity: 0.85;
  }
}

@keyframes ds-eq {
  0%, 100% {
    transform: scaleY(0.35);
  }
  50% {
    transform: scaleY(1);
  }
}

@keyframes ds-appear-up {
  from {
    opacity: 0;
    transform: translateY(1rem) scale(0.985);
    filter: blur(0.35rem);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes ds-stamp-pop {
  0% {
    opacity: 0;
    transform: rotate(-4deg) scale(0.82);
  }
  70% {
    opacity: 1;
    transform: rotate(2deg) scale(1.04);
  }
  100% {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

@keyframes ds-avatar-pop {
  0% {
    opacity: 0;
    transform: rotate(-4deg) scale(0.82);
  }
  70% {
    opacity: 1;
    transform: rotate(9deg) scale(1.04);
  }
  100% {
    opacity: 1;
    transform: rotate(6deg) scale(1);
  }
}

@keyframes ds-polaroid-pop {
  0% {
    opacity: 0;
    transform: rotate(-8deg) scale(0.82);
  }
  70% {
    opacity: 1;
    transform: rotate(1deg) scale(1.04);
  }
  100% {
    opacity: 1;
    transform: rotate(-2deg) scale(1);
  }
}

@keyframes ds-clip-reveal {
  from {
    clip-path: inset(0 100% 0 0 round 0.62rem);
  }
  to {
    clip-path: inset(0 0 0 0 round 0.62rem);
  }
}

@keyframes ds-toast-enter {
  0% {
    opacity: 0;
    transform: translateX(1.15rem) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}

@keyframes ds-modal-pop {
  0% {
    opacity: 0;
    transform: translateY(0.75rem) scale(0.92);
  }
  65% {
    opacity: 1;
    transform: translateY(-0.08rem) scale(1.025);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes ds-cell-pop {
  0% {
    opacity: 0;
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ds-glint {
  from {
    transform: translateX(-120%);
  }
  to {
    transform: translateX(220%);
  }
}

.ds-motion-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 0.5rem;
}

.ds-motion-token-list {
  display: grid;
  gap: 0.45rem;
  margin-top: 0.85rem;
}

.ds-motion-token {
  display: grid;
  grid-template-columns: 5rem 1fr auto;
  align-items: center;
  gap: 0.55rem;
  border-radius: 0.55rem;
  background: rgba(0,0,0,0.2);
  padding: 0.5rem;
}

.ds-motion-token strong {
  color: #d8d9ec;
  font-size: 0.8rem;
  font-weight: 800;
}

.ds-motion-token span {
  color: var(--ds-muted-fg);
  font-size: 0.78rem;
  font-weight: 500;
}

.ds-motion-token code {
  color: var(--ds-soft-fg);
  font-size: 0.7rem;
  font-weight: 700;
}

.ds-motion-bar {
  position: relative;
  height: 0.32rem;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(252,252,250,0.09);
}

.ds-motion-bar::before {
  content: "";
  position: absolute;
  inset-block: 0;
  width: var(--bar-width);
  border-radius: inherit;
  background: linear-gradient(90deg, #b978a9, #9596ac);
}

.ds-motion-stage {
  position: relative;
  min-height: 16rem;
  overflow: hidden;
  border-radius: var(--ds-radius);
  background:
    linear-gradient(90deg, rgba(185,120,169,0.09) 1px, transparent 1px),
    linear-gradient(rgba(252,252,250,0.06) 1px, transparent 1px),
    rgba(0,0,0,0.22);
  background-size: 22px 22px;
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.08);
  padding: 1rem;
}

.ds-motion-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 48%;
  background: linear-gradient(90deg, transparent, rgba(185,120,169,0.16), transparent);
  animation: ds-scan 4.8s var(--ds-ease-soft) infinite;
}

.ds-orbit-demo {
  position: relative;
  width: 8.6rem;
  height: 8.6rem;
  margin: 0.25rem auto 1rem;
  border: 1px dashed rgba(216,217,236,0.24);
  border-radius: 50%;
  animation: ds-orbit 7s linear infinite;
}

.ds-orbit-demo::before,
.ds-orbit-demo::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(185,120,169,0.24);
}

.ds-orbit-demo::before {
  width: 1.55rem;
  height: 1.55rem;
  top: -0.78rem;
  left: calc(50% - 0.78rem);
  background: #b978a9;
}

.ds-orbit-demo::after {
  width: 0.9rem;
  height: 0.9rem;
  right: 0.68rem;
  bottom: 0.68rem;
  background: #9596ac;
}

.ds-orbit-core {
  position: absolute;
  inset: 2.35rem;
  display: grid;
  place-items: center;
  border-radius: 1.1rem;
  background: var(--ds-surface-2);
  color: #d8d9ec;
  font-weight: 900;
  transform: rotate(-12deg);
}

.ds-stagger-demo {
  display: grid;
  gap: 0.42rem;
  position: relative;
  z-index: 1;
}

.ds-stagger-demo span {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.45rem;
  align-items: center;
  border-radius: 0.55rem;
  background: rgba(252,252,250,0.055);
  color: var(--ds-muted-fg);
  padding: 0.48rem 0.55rem;
  font-size: 0.78rem;
  font-weight: 700;
  opacity: 0;
  animation: ds-rise-in var(--ds-motion-slow) var(--ds-ease-snap) forwards;
  animation-delay: var(--delay);
}

.ds-stagger-demo span::before {
  content: "";
  width: 0.58rem;
  height: 0.58rem;
  border-radius: 50%;
  background: #b978a9;
}

.ds-marquee-demo {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 0.62rem;
  background: rgba(0,0,0,0.28);
  margin-top: 0.8rem;
  padding: 0.52rem 0;
  contain: paint;
}

.ds-marquee-demo span {
  display: block;
  width: max-content;
  min-width: 200%;
  color: #d8d9ec;
  font-weight: 900;
  white-space: nowrap;
  animation: ds-marquee 8s linear infinite;
}

.ds-press-demo {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.9rem;
  border-radius: 0.62rem;
  background: linear-gradient(180deg, #b978a9, #835075);
  box-shadow: var(--ds-edge-highlight), 0 0.32rem 0 #3a2437;
  color: #080a10;
  padding: 0.6rem 0.8rem;
  font-weight: 900;
  text-decoration: none;
  transition: transform var(--ds-motion-fast) var(--ds-ease-snap), box-shadow var(--ds-motion-fast) var(--ds-ease-soft);
}

.ds-press-demo:hover {
  transform: translateY(-0.12rem);
}

.ds-press-demo:active {
  transform: translateY(0.24rem) scale(0.98);
  box-shadow: var(--ds-edge-highlight), 0 0.08rem 0 #5f2426;
}

.ds-eq-demo {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: end;
  gap: 0.16rem;
  margin-left: 0.15rem;
}

.ds-eq-demo i {
  width: 0.18rem;
  height: 0.85rem;
  border-radius: 999px;
  background: #180d0d;
  transform-origin: bottom;
  animation: ds-eq 820ms var(--ds-ease-soft) infinite;
  animation-delay: var(--delay);
}

.ds-motion-rule-list {
  display: grid;
  gap: 0.42rem;
  margin-top: 0.75rem;
}

.ds-motion-rule {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem;
  align-items: start;
  border-radius: 0.55rem;
  background: rgba(0,0,0,0.2);
  padding: 0.55rem;
}

.ds-motion-rule strong {
  color: #b978a9;
  font-weight: 900;
}

.ds-motion-rule span {
  color: var(--ds-muted-fg);
  font-size: 0.8rem;
  font-weight: 500;
}

.ds-topbar,
.ds-sidebar,
.ds-hero {
  animation: ds-appear-up var(--ds-motion-slow) var(--ds-ease-soft) both;
}

.ds-topbar {
  animation-delay: 40ms;
}

.ds-sidebar {
  animation-delay: 80ms;
}

.ds-hero {
  animation-delay: 120ms;
}

.ds-section {
  animation-delay: 160ms;
}

.ds-pixel-title {
  animation: ds-appear-up 700ms var(--ds-ease-snap) both;
}

.ds-avatar-card {
  animation: ds-avatar-pop 760ms var(--ds-ease-snap) 180ms both;
}

.ds-page.is-reveal-ready .ds-section,
.ds-page.is-reveal-ready .ds-masonry .ds-card,
.ds-page.is-reveal-ready .ds-principle,
.ds-page.is-reveal-ready .ds-motion-layout > .ds-card {
  opacity: 0;
  transform: translateY(0.9rem) scale(0.96);
}

.ds-page.is-reveal-ready .ds-section.is-visible,
.ds-page.is-reveal-ready .ds-masonry .ds-card.is-visible,
.ds-page.is-reveal-ready .ds-principle.is-visible,
.ds-page.is-reveal-ready .ds-motion-layout > .ds-card.is-visible {
  opacity: 1;
  transform: none;
  animation: ds-modal-pop var(--ds-motion-slow) var(--ds-ease-snap) both;
  animation-delay: calc(var(--appear-delay, 0) * 70ms);
}

.ds-masonry .ds-card:nth-child(1) { --appear-delay: 0; }
.ds-masonry .ds-card:nth-child(2) { --appear-delay: 1; }
.ds-masonry .ds-card:nth-child(3) { --appear-delay: 2; }
.ds-masonry .ds-card:nth-child(4) { --appear-delay: 3; }
.ds-masonry .ds-card:nth-child(5) { --appear-delay: 4; }
.ds-masonry .ds-card:nth-child(6) { --appear-delay: 5; }
.ds-masonry .ds-card:nth-child(7) { --appear-delay: 6; }
.ds-masonry .ds-card:nth-child(8) { --appear-delay: 7; }
.ds-masonry .ds-card:nth-child(9) { --appear-delay: 8; }
.ds-masonry .ds-card:nth-child(10) { --appear-delay: 9; }

.ds-card:not(.ds-server-card) {
  transition: transform var(--ds-motion-fast) var(--ds-ease-snap), background var(--ds-motion-fast) var(--ds-ease-soft), border-color var(--ds-motion-fast) var(--ds-ease-soft);
}

.ds-card:not(.ds-server-card):hover {
  transform: translateY(-0.1rem);
  border-color: rgba(185,120,169,0.18);
  background: var(--ds-surface-2);
}

.ds-link-icon {
  transition: transform var(--ds-motion-fast) var(--ds-ease-snap);
}

.ds-link-tile:hover .ds-link-icon {
  transform: rotate(-6deg) scale(1.08);
}

.ds-note-polaroid {
  animation: ds-polaroid-pop 650ms var(--ds-ease-snap) 180ms both;
}

.ds-calendar span {
  animation: ds-cell-pop 420ms var(--ds-ease-snap) both;
  animation-delay: calc(var(--level) * 55ms);
}

.ds-motion-bar::after {
  content: "";
  position: absolute;
  inset-block: 0;
  width: 32%;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
  animation: ds-glint 2.8s var(--ds-ease-soft) infinite;
}

.ds-appear-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  margin-top: 0.85rem;
}

.ds-appear-demo {
  position: relative;
  min-height: 5.25rem;
  overflow: hidden;
  border-radius: 0.7rem;
  background: rgba(0,0,0,0.22);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.08);
  padding: 0.7rem;
  cursor: default;
  transition: background var(--ds-motion-fast) var(--ds-ease-soft), transform var(--ds-motion-fast) var(--ds-ease-snap), border-color var(--ds-motion-fast) var(--ds-ease-soft);
}

.ds-appear-demo:hover {
  background: rgba(185,120,169,0.12);
  transform: translateY(-0.08rem);
}

.ds-appear-demo.is-selected {
  background: rgba(185,120,169,0.16);
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(185,120,169,0.22);
}

.ds-appear-demo.is-selected::before {
  background: linear-gradient(90deg, #b978a9, #d8d9ec);
}

.ds-appear-demo strong,
.ds-appear-demo span {
  position: relative;
  z-index: 1;
  display: block;
}

.ds-appear-demo strong {
  color: #d8d9ec;
  font-weight: 900;
}

.ds-appear-demo span {
  margin-top: 0.25rem;
  color: var(--ds-muted-fg);
  font-size: 0.78rem;
  font-weight: 500;
}

.ds-appear-demo::before {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 0.22rem;
  background: linear-gradient(90deg, #b978a9, transparent);
}

.ds-appear-demo.is-rise:hover {
  animation: ds-appear-up 680ms var(--ds-ease-snap) both;
}

.ds-appear-demo.is-stamp:hover {
  animation: ds-stamp-pop 720ms var(--ds-ease-snap) both;
}

.ds-appear-demo.is-clip:hover {
  animation: ds-clip-reveal 620ms var(--ds-ease-soft) both;
}

.ds-appear-demo.is-toast:hover {
  animation: ds-toast-enter 520ms var(--ds-ease-snap) both;
}

.ds-appear-demo.is-modal:hover {
  animation: ds-modal-pop 640ms var(--ds-ease-snap) both;
}

.ds-appear-demo.is-glint::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 38%;
  opacity: 0;
  transform: translateX(-120%);
  background: linear-gradient(90deg, transparent, rgba(185,120,169,0.18), transparent);
}

.ds-appear-demo.is-glint:hover::after {
  opacity: 1;
  animation: ds-glint 2.4s var(--ds-ease-soft) infinite;
}


@media (min-width: 1160px) {
  .ds-sidebar {
    position: fixed;
    top: 50%;
    left: clamp(1rem, 2vw, 1.5rem);
    width: clamp(10.5rem, 14vw, 13rem);
    max-height: calc(100vh - 2rem);
    margin: 0;
    translate: 0 -50%;
    overflow-y: auto;
  }
}

@media (max-width: 960px) {
  .ds-shell {
    display: block;
  }

  .ds-sidebar {
    width: min(calc(100% - 1rem), 26rem);
  }

  .ds-sidebar-menu {
    margin-top: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ds-sidebar-note {
    margin-top: 0;
  }

  .ds-topbar {
    display: none;
  }

  .ds-main {
    width: min(calc(100% - 1rem), var(--ds-content));
    padding-top: 2rem;
  }

  .ds-hero {
    min-height: auto;
    padding-top: 2rem;
  }
}

@media (max-width: 700px) {
  .ds-hero-cluster,
  .ds-token-grid,
  .ds-note-grid,
  .ds-link-grid,
  .ds-contact-actions,
  .ds-motion-layout,
  .ds-appear-grid,
  .ds-principles {
    grid-template-columns: 1fr;
  }

  .ds-avatar-card {
    width: 9rem;
    justify-self: center;
  }

  .ds-sidebar-menu {
    grid-template-columns: 1fr;
  }

  .ds-card {
    max-width: 100%;
  }

  .ds-motion-token {
    grid-template-columns: 1fr;
  }

  .ds-marquee-demo span {
    width: auto;
    min-width: 0;
    white-space: normal;
    line-height: 1.45;
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ds-page *,
  .ds-page *::before,
  .ds-page *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
`;

const colorTokens = [
  { name: "Background", value: "hsl(229 19% 7%)", note: "Favicon ink-black base" },
  { name: "Foreground", value: "#e6eaf5", note: "Cold code text" },
  { name: "Accent", value: "hsl(316 28% 58%)", note: "Muted avatar magenta" },
  { name: "Accent strong", value: "#b978a9", note: "Pixel title and CTA" },
  { name: "Surface", value: "hsla(316,28%,58%,.10)", note: "Card fill" },
  { name: "Surface raised", value: "hsla(316,28%,62%,.15)", note: "Hover and active state" },
  { name: "Border", value: "hsla(227,22%,24%,.72)", note: "Sampled slate contour" },
  { name: "Muted text", value: "rgba(216,217,236,.70)", note: "Secondary text" },
];

const principles = [
  {
    title: "Warm black base",
    copy: "Brown-black instead of pure black. Cards lift with alpha layers from the same hue.",
  },
  {
    title: "Masonry rhythm",
    copy: "No identical card grid. Varied heights, tight gaps, and a personal archive-board feel.",
  },
  {
    title: "Retro, still readable",
    copy: "Pixel sticker, Win98 window, and compact UI details carry the mood while body text stays plain.",
  },
];

const componentNotes = [
  "Cards should become small objects: player, window, server widget, contact panel.",
  "Icons should feel like pixel tiles or physical-media metaphors, not plain inline text.",
  "Hover states should express the object: a CD slides out, an avatar turns, a tile nudges.",
  "Data and link blocks should behave like small product interfaces, not static lists.",
];

const calendarLevels = [
  1, 3, 2, 4, 1, 0, 2, 3, 4, 1, 2, 0, 3, 4, 2, 1, 3, 2,
  0, 2, 3, 1, 4, 2, 1, 3, 2, 4, 0, 2, 3, 1, 2, 4, 3, 1,
  2, 4, 1, 3, 0, 2, 1, 4, 3, 2, 1, 0, 2, 3, 4, 2, 1, 3,
  3, 1, 2, 4, 2, 0, 3, 1, 4, 2, 1, 3, 0, 2, 4, 3, 1, 2,
];

const tokenSnippet = `:root {
  --accent-h: 10;
  --accent-s: 25%;
  --accent-l: 65%;
  --bg-color: hsl(var(--accent-h) 7.5% 6.5%);
  --fg-color: #fcfcfa;
  --bg-muted-1: hsla(var(--accent-h), var(--accent-s), var(--accent-l), .10);
  --rounded-corner: .75rem;
  --edge-highlight: inset 0 .0625rem 0 rgba(255,255,255,.10);
}`;

const DesignSystemShowcase = () => {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ds-page");

    if (!root) {
      return;
    }

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".ds-section, .ds-masonry .ds-card, .ds-principle, .ds-motion-layout > .ds-card"
      )
    );

    root.classList.add("is-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));

      return () => {
        root.classList.remove("is-reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      root.classList.remove("is-reveal-ready");
    };
  }, []);

  return (
    <div className="ds-page">
      <style>{designSystemCss}</style>
      <div className="ds-topbar">Design system preview - the current route shell now uses these tokens</div>

      <div className="ds-shell">
        <aside className="ds-sidebar" aria-label="Design system navigation">
          <div>
            <Link className="ds-brand-lockup" to="/">
              <span className="ds-brand-mark">e</span>
              <span className="ds-brand-copy">
                <strong>Eylul style</strong>
                <span>indie web kit</span>
              </span>
            </Link>

            <nav className="ds-sidebar-menu" aria-label="Page sections">
              <a className="ds-nav-item is-active" href="#overview"><span className="ds-dot-icon" />Overview</a>
              <a className="ds-nav-item" href="#tokens"><span className="ds-dot-icon" />Tokens</a>
              <a className="ds-nav-item" href="#components"><span className="ds-dot-icon" />Components</a>
              <a className="ds-nav-item" href="#motion"><span className="ds-dot-icon" />Motion</a>
              <a className="ds-nav-item" href="#rules"><span className="ds-dot-icon" />Rules</a>
            </nav>
          </div>

          <p className="ds-sidebar-note">
            Read this page as an isolated style guide; the global route tokens and terminal shell now derive from this language.
          </p>
        </aside>

        <main className="ds-main">
          <section className="ds-hero" id="overview">
            <div>
              <div className="ds-hero-cluster">
                <div>
                  <div className="ds-kicker">New styling direction</div>
                  <h1 className="ds-pixel-title">IndieWeb System</h1>
                  <p>
                    The live portfolio system uses a warm dark base, dusty salmon accent, masonry rhythm, and old-internet texture.
                  </p>
                  <div className="ds-hero-actions">
                    <a className="ds-button is-primary" href="#tokens">View tokens</a>
                    <a className="ds-button" href="#components">Component language</a>
                    <Link className="ds-button" to="/">Back to homepage</Link>
                  </div>
                </div>

                <div className="ds-avatar-card" aria-label="CSS avatar style sample">
                  <div className="ds-avatar-inner" />
                </div>
              </div>

              <div className="ds-scroll-note">First, this is the design DNA.</div>
            </div>
          </section>

          <section className="ds-section" aria-labelledby="dna-title">
            <div className="ds-section-heading">
              <h2 id="dna-title">Extracted design DNA</h2>
              <p>Core decisions extracted into the live portfolio system so future sections keep the same palette, spacing, motion, and terminal-object language.</p>
            </div>
            <div className="ds-principles">
              {principles.map((principle) => (
                <article className="ds-principle" key={principle.title}>
                  <strong>{principle.title}</strong>
                  <span>{principle.copy}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="ds-section" id="tokens" aria-labelledby="tokens-title">
            <div className="ds-section-heading">
              <h2 id="tokens-title">Tokens</h2>
              <p>The CSS variables follow the source logic directly: one hue, alpha surfaces, inset highlights, and a compact radius system.</p>
            </div>

            <div className="ds-masonry">
              <article className="ds-card">
                <h3>Color system</h3>
                <p>The palette is dark-mode first. The accent sets surface hierarchy more than content decoration.</p>
                <div className="ds-token-grid" style={{ marginTop: "0.8rem" }}>
                  {colorTokens.map((token) => (
                    <div className="ds-token" key={token.name}>
                      <span className="ds-swatch" style={{ background: token.value }} />
                      <span>
                        <strong>{token.name}</strong>
                        <code>{token.value}</code>
                        <code>{token.note}</code>
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="ds-card">
                <h3>Typography</h3>
                <p>The page font is Roboto Condensed. Display text is tight, red, and sticker-like; body text stays narrow, compact, and high contrast.</p>
                <div className="ds-type-specimen" style={{ marginTop: "0.8rem" }}>
                  <div className="ds-type-row">
                    <strong>Display</strong>
                    <span className="ds-display-sample">eylul.dev</span>
                  </div>
                  <div className="ds-type-row">
                    <strong>Body</strong>
                    <span className="ds-body-sample">Compact cards, short sentences, and low-distance shadows create a personal archive feel.</span>
                  </div>
                  <div className="ds-type-row">
                    <strong>Label</strong>
                    <span className="ds-label-sample">section label</span>
                  </div>
                </div>
              </article>

              <article className="ds-card">
                <h3>Radius, shadow, edge</h3>
                <ul>
                  <li>Radius: 0.75rem card, 0.48rem compact control.</li>
                  <li>Edge: 1px white inset highlight from the top.</li>
                  <li>Shadow: short distance, black alpha, enough lift to separate cards from the base.</li>
                </ul>
              </article>

              <article className="ds-card">
                <h3>Token recipe</h3>
                <p>A compact variable set for warm surfaces, salmon accents, soft borders, and the inset highlights used across the interface.</p>
                <pre className="ds-code" style={{ marginTop: "0.8rem" }}><code>{tokenSnippet}</code></pre>
              </article>
            </div>
          </section>

          <section className="ds-section" id="components" aria-labelledby="components-title">
            <div className="ds-section-heading">
              <h2 id="components-title">Components</h2>
              <p>Flat cards become small internet objects: a CD player, pixel social tiles, live contact panel, server widget, and mini state board.</p>
            </div>

            <div className="ds-masonry">
              <article className="ds-card ds-note-card">
                <h3>Personal note card</h3>
                <p>Instead of a generic about card: a taped notebook fragment with a visual memory on the left and short archive lines on the right.</p>
                <div className="ds-note-grid">
                  <div className="ds-note-polaroid" aria-hidden="true" />
                  <div className="ds-note-lines" aria-hidden="true">
                    <span style={{ width: "92%" }} />
                    <span style={{ width: "76%" }} />
                    <span style={{ width: "86%" }} />
                    <span style={{ width: "58%" }} />
                  </div>
                </div>
              </article>

              <article className="ds-card">
                <h3>Music player object</h3>
                <div className="ds-song-player" style={{ marginTop: "0.8rem" }}>
                  <span className="ds-cover-scene" aria-hidden="true">
                    <span className="ds-cd" />
                    <span className="ds-cover-art" />
                  </span>
                  <span className="ds-player-info">
                    <span className="ds-player-status">
                      <span>Last Played</span>
                      <span>CD skin</span>
                    </span>
                    <strong className="ds-track-title">My phonk melody 7 )</strong>
                    <span className="ds-track-artist">outheworld</span>
                  </span>
                  <a className="ds-play-button" href="#components" aria-label="Open track sample" />
                </div>
                <p>On hover, the disc slides out of the sleeve. The component behaves like a physical object, not a static information row.</p>
              </article>

              <article className="ds-card">
                <h3>Retro desktop preview</h3>
                <div className="ds-mini-window" style={{ marginTop: "0.8rem" }}>
                  <div className="ds-window-bar">
                    <span>style-guide.exe</span>
                    <span className="ds-window-buttons"><span /><span /><span /></span>
                  </div>
                  <div className="ds-window-body">
                    <div className="ds-desktop-icons">
                      <span className="ds-desktop-icon">tokens</span>
                      <span className="ds-desktop-icon">cards</span>
                      <span className="ds-desktop-icon">motion</span>
                    </div>
                    <div className="ds-window-portrait" />
                  </div>
                </div>
                <p>The old operating-system window is a supporting character. It builds visual story without taking over the main UI.</p>
              </article>

              <article className="ds-card">
                <h3>Social launcher</h3>
                <div className="ds-link-grid">
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-youtube">Y</span>YouTube</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-twitch">T</span>Twitch</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-x">X</span>X / Twitter</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-instagram">I</span>Instagram</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-reddit">R</span>Reddit</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-blue">B</span>Bluesky</a>
                </div>
              </article>

              <article className="ds-card ds-contact-card">
                <h3>Contacts panel</h3>
                <p>
                  Local status: <span className="ds-clock">03:40</span> <small>(UTC+3)</small> · <span className="ds-online-pill">Online</span>.
                </p>
                <p>Contact content is a component too: time, presence, and actions follow the same rhythm.</p>
                <div className="ds-contact-actions">
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-blue">D</span>Discord</a>
                  <a className="ds-link-tile" href="#components"><span className="ds-link-icon is-mail">M</span>Email</a>
                </div>
              </article>

              <article className="ds-card ds-server-card">
                <div className="ds-server-header">
                  <h3 className="ds-server-name">AxLab</h3>
                  <span className="ds-server-stats">
                    <span className="ds-stat-dot" />208
                    <span>/</span>
                    <span className="ds-stat-dot is-muted" />893
                  </span>
                </div>
                <span className="ds-discord-glyph" aria-hidden="true" />
                <p style={{ marginTop: "2.6rem" }}>Built for creation.</p>
                <span className="ds-server-avatar" aria-hidden="true" />
              </article>

              <article className="ds-card">
                <h3>Hyperfixation equalizer</h3>
                <div className="ds-hyper-list">
                  {["Open source", "Astronomy", "Cartoons", "Pixel art", "Small tools"].map((item, index) => (
                    <span className="ds-hyper-item" key={item}>
                      {item}
                      <span className="ds-wave" aria-hidden="true">
                        <i style={{ "--bar": (index % 3) + 1 } as CSSProperties} />
                        <i style={{ "--bar": ((index + 2) % 4) + 1 } as CSSProperties} />
                        <i style={{ "--bar": ((index + 1) % 3) + 2 } as CSSProperties} />
                      </span>
                    </span>
                  ))}
                </div>
              </article>

              <article className="ds-card">
                <h3>Contribution heatmap</h3>
                <p>Small data visuals sit well in the card texture. The green data tone is the only non-accent exception.</p>
                <div className="ds-calendar" aria-hidden="true">
                  {calendarLevels.map((level, index) => (
                    <span key={`${level}-${index}`} style={{ "--level": level } as CSSProperties} />
                  ))}
                </div>
              </article>

              <article className="ds-card">
                <h3>Code forge</h3>
                <div className="ds-code-forge">
                  <a className="ds-repo-tile" href="#components">
                    <span className="ds-link-icon is-github">G</span>
                    <span>
                      <strong>GitHub</strong>
                      <small>source, notes, experiments</small>
                    </span>
                    <span className="ds-repo-arrow">›</span>
                  </a>
                </div>
              </article>

              <article className="ds-card">
                <h3>Controls and states</h3>
                <div className="ds-state-board">
                  <div className="ds-toggle-row">
                    <span>Pixel hover mode</span>
                    <span className="ds-switch" aria-hidden="true" />
                  </div>
                  <div className="ds-toggle-row">
                    <span>Command shortcut</span>
                    <span><span className="ds-hotkey">⌘</span> <span className="ds-hotkey">K</span></span>
                  </div>
                  <div className="ds-pill-row">
                    <span className="ds-pill">new style</span>
                    <span className="ds-pill">dark only</span>
                    <span className="ds-pill">masonry</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="ds-section" id="motion" aria-labelledby="motion-title">
            <div className="ds-section-heading">
              <h2 id="motion-title">Animation system</h2>
              <p>Motion for this style stays small, physical, and readable: transform/opacity first, object-specific hover states, low-frequency ambient motion, and a reduced-motion fallback.</p>
            </div>

            <div className="ds-motion-layout">
              <article className="ds-card">
                <h3>Motion tokens</h3>
                <p>Repeatable duration and easing values. Cards and the current route shell use the same rhythm.</p>
                <div className="ds-motion-token-list">
                  <div className="ds-motion-token">
                    <strong>instant</strong>
                    <span className="ds-motion-bar" style={{ "--bar-width": "22%" } as CSSProperties} />
                    <code>120ms</code>
                  </div>
                  <div className="ds-motion-token">
                    <strong>fast</strong>
                    <span className="ds-motion-bar" style={{ "--bar-width": "36%" } as CSSProperties} />
                    <code>180ms</code>
                  </div>
                  <div className="ds-motion-token">
                    <strong>base</strong>
                    <span className="ds-motion-bar" style={{ "--bar-width": "56%" } as CSSProperties} />
                    <code>280ms</code>
                  </div>
                  <div className="ds-motion-token">
                    <strong>slow</strong>
                    <span className="ds-motion-bar" style={{ "--bar-width": "100%" } as CSSProperties} />
                    <code>525ms</code>
                  </div>
                </div>
              </article>

              <article className="ds-card">
                <h3>Live motion lab</h3>
                <div className="ds-motion-stage" style={{ marginTop: "0.85rem" }}>
                  <div className="ds-orbit-demo" aria-hidden="true">
                    <span className="ds-orbit-core">01</span>
                  </div>
                  <div className="ds-stagger-demo">
                    <span style={{ "--delay": "0ms" } as CSSProperties}>Card enters with small rise</span>
                    <span style={{ "--delay": "90ms" } as CSSProperties}>Links stagger by 90ms</span>
                    <span style={{ "--delay": "180ms" } as CSSProperties}>Object hover keeps personality</span>
                  </div>
                  <div className="ds-marquee-demo" aria-label="Marquee animation sample">
                    <span>motion tokens / hover object / ambient scan / reduced motion / motion tokens / hover object / ambient scan / reduced motion</span>
                  </div>
                  <a className="ds-press-demo" href="#motion">
                    Press sample
                    <span className="ds-eq-demo" aria-hidden="true">
                      <i style={{ "--delay": "0ms" } as CSSProperties} />
                      <i style={{ "--delay": "110ms" } as CSSProperties} />
                      <i style={{ "--delay": "220ms" } as CSSProperties} />
                    </span>
                  </a>
                </div>
              </article>
            </div>

            <div className="ds-masonry" style={{ marginTop: "0.5rem" }}>
              <article className="ds-card">
                <h3>Motion rules</h3>
                <div className="ds-motion-rule-list">
                  <div className="ds-motion-rule">
                    <strong>1</strong>
                    <span>Animate transform and opacity first. Layout-affecting animation stays out.</span>
                  </div>
                  <div className="ds-motion-rule">
                    <strong>2</strong>
                    <span>Hover is tactile: press, lift, rotate, reveal. Decoration without state feedback is avoided.</span>
                  </div>
                  <div className="ds-motion-rule">
                    <strong>3</strong>
                    <span>Ambient loops must be quiet and slow. Reduced-motion disables animation and transition.</span>
                  </div>
                </div>
              </article>

              <article className="ds-card">
                <h3>Interaction mapping</h3>
                <ul>
                  <li>Links: 180ms lift with soft background shift.</li>
                  <li>Object cards: 525ms overshoot for CD and avatar reveal.</li>
                  <li>Lists: staggered 90ms rise for scannable hierarchy.</li>
                  <li>Loading or idle: low contrast scan or equalizer, never layout movement.</li>
                </ul>
              </article>

              <article className="ds-card">
                <h3>Appear patterns</h3>
                <p>Selected default: modal / overshoot scale. Hover the others to preview alternate entrance patterns.</p>
                <div className="ds-appear-grid">
                  <div className="ds-appear-demo is-rise">
                    <strong>Rise</strong>
                    <span>fade + y + blur</span>
                  </div>
                  <div className="ds-appear-demo is-stamp">
                    <strong>Stamp</strong>
                    <span>retro sticker pop</span>
                  </div>
                  <div className="ds-appear-demo is-clip">
                    <strong>Clip</strong>
                    <span>horizontal reveal</span>
                  </div>
                  <div className="ds-appear-demo is-toast">
                    <strong>Toast</strong>
                    <span>right-side enter</span>
                  </div>
                  <div className="ds-appear-demo is-modal is-selected">
                    <strong>Modal</strong>
                    <span>overshoot scale</span>
                  </div>
                  <div className="ds-appear-demo is-glint">
                    <strong>Glint</strong>
                    <span>quiet ambient pass</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="ds-section" id="rules" aria-labelledby="rules-title">
            <div className="ds-section-heading">
              <h2 id="rules-title">Implementation rules</h2>
              <p>Boundaries to keep if this system moves further into the live site.</p>
            </div>

            <div className="ds-masonry">
              <article className="ds-card">
                <h3>Do</h3>
                <ul>
                  {componentNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>

              <article className="ds-card">
                <h3>Do not</h3>
                <ul>
                  <li>Do not break terminal behavior; move visual tokens through the shared source.</li>
                  <li>Do not leave utility routes or the 404 screen outside the route shell update.</li>
                  <li>Do not add generic glassmorphism or purple gradients.</li>
                  <li>Do not pack long copy into small cards.</li>
                </ul>
              </article>

              <article className="ds-card">
                <h3>Consistent objects</h3>
                <p>The same terminal cards, compact controls, and object-style accents can support dense sections without making them look like separate products.</p>
              </article>
            </div>
          </section>

          <footer className="ds-footer">
            Live portfolio system reference. Scope: shared tokens, component language, motion rules, and responsive behavior.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
