
import React from 'react';
import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="mt-8 text-center text-sm text-[#7b7a7f]">
      <div className="flex items-center justify-center mb-1">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 mx-1" fill="#ef4444" />
        <span>by <span className="text-[#b2a7fb]">kkMihai</span></span>
      </div>
      <div>© 2025 All rights reserved</div>
    </div>
  );
};

export default FooterSection;
