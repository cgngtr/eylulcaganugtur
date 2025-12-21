import React from 'react';
import { TerminalCard } from '../index';
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat contact.txt" id="contact">
      <div className="space-y-6">
        {/* Contact info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-terminal-command" />
            <div>
              <div className="text-terminal-muted text-xs">email</div>
              <a
                href="mailto:cgngtr5026@gmail.com"
                className="text-terminal-directory hover:text-terminal-command transition-colors"
              >
                cgngtr5026@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-terminal-command" />
            <div>
              <div className="text-terminal-muted text-xs">location</div>
              <span className="text-terminal-output">Ankara, Türkiye</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-terminal-command" />
            <div>
              <div className="text-terminal-muted text-xs">timezone</div>
              <span className="text-terminal-output">UTC+3</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-terminal-border" />

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-terminal-output/80">
            Want to discuss your project? Let's work together to bring your ideas to life.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:cgngtr5026@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-prompt/10 hover:bg-terminal-prompt/20 text-terminal-prompt rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </a>
            <a
              href="/old/client-form"
              className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-bg-light hover:bg-terminal-selection text-terminal-output rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>

        {/* Availability status */}
        <div className="flex items-center gap-2 p-3 bg-terminal-success/5 border border-terminal-success/20 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-terminal-success animate-pulse" />
          <span className="text-terminal-success text-sm">
            Open for Internships
          </span>
        </div>
      </div>
    </TerminalCard>
  );
};

export default ContactTerminal;
