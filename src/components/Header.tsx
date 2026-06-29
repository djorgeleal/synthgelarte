/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, BookOpen, User, Menu, X, ArrowRight, Star } from 'lucide-react';

interface HeaderProps {
  currentView: 'landing' | 'student';
  setView: (view: 'landing' | 'student') => void;
  isUnlocked: boolean;
  onOpenEnroll: () => void;
}

export default function Header({ currentView, setView, isUnlocked, onOpenEnroll }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <img 
              src="https://djorgeleal.github.io/synthgelart/sinfondo.png" 
              alt="SynthGelArt Logo" 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none tracking-wide text-amber-800">
                SYNTHGELART
              </span>
              <span className="font-sans text-[10px] tracking-widest font-semibold text-rose-500 uppercase">
                Gelatinas Transfer
              </span>
            </div>
          </div>

          {/* Desktop Navigation Removed as requested */}


          {/* Action Button for Mobile or Desktop Removed */}
          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>
    </nav>
  );
}
