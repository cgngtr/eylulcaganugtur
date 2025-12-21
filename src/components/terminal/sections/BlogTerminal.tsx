import React from 'react';
import { TerminalCard } from '../index';
import { FileText } from 'lucide-react';

const BlogTerminal: React.FC = () => {
  return (
    <TerminalCard command='ls ./blog' directory="~/blog" id="blog">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <FileText className="w-12 h-12 text-terminal-muted mb-4" />
        <p className="text-terminal-output text-lg mb-2">No posts yet</p>
        <p className="text-terminal-muted text-sm">New blogs will be posted soon. Stay tuned!</p>
      </div>
    </TerminalCard>
  );
};

export default BlogTerminal;
