import React from 'react';
import { TerminalCard } from '../index';
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const istanbulTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
  timeZone: 'Europe/Istanbul',
});

const ContactTerminal: React.FC = () => {
  const [localTime, setLocalTime] = React.useState(() => istanbulTimeFormatter.format(new Date()));

  React.useEffect(() => {
    const interval = window.setInterval(() => setLocalTime(istanbulTimeFormatter.format(new Date())), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <TerminalCard command="cat contact.txt" id="contact">
      <div className="space-y-6">
        {/* Contact info */}
        <div className="grid gap-3 md:grid-cols-3">
          <a href="mailto:cgngtr5026@gmail.com" className="site-link-tile">
            <span className="site-link-icon">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-terminal-muted">email</span>
              <span className="block truncate font-semibold text-terminal-output">cgngtr5026@gmail.com</span>
            </span>
          </a>

          <div className="site-info-tile">
            <span className="site-link-icon">
              <MapPin className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs text-terminal-muted">location</span>
              <span className="font-semibold text-terminal-output">Ankara, Turkey</span>
            </span>
          </div>

          <div className="site-info-tile site-status-tile">
            <span className="site-link-icon">
              <Clock className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-terminal-muted">local time</span>
              <span className="site-status-line" aria-label={`Local time: ${localTime} (UTC+3)`}>
                <span className="site-clock">{localTime}</span>
                <small>(UTC+3)</small>
              </span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-terminal-border" />

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-terminal-output/80">
            Project discussion and scope review are available by email or the intake form.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:cgngtr5026@gmail.com"
              className="site-button is-primary"
            >
              <Mail className="h-4 w-4" />
              Send message
            </a>
            <Link
              to="/client-form"
              className="site-button"
            >
              <MessageSquare className="h-4 w-4" />
              Start a project
            </Link>
          </div>
        </div>

        {/* Availability status */}
        <div className="site-record items-center">
          <span className="h-2 w-2 rounded-full bg-terminal-success" />
          <span className="text-sm text-terminal-success">
            Available for freelance projects, not seeking roles or internships
          </span>
        </div>
      </div>
    </TerminalCard>
  );
};

export default ContactTerminal;
