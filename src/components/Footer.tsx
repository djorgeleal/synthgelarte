/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-12 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-neutral-950 font-bold text-base">
                S
              </div>
              <span className="font-serif font-extrabold text-lg tracking-wide text-white">
                SYNTHGELART - GELATINAS TRANSFER
              </span>
            </div>
            <p className="font-sans text-xs text-amber-200/60 max-w-sm">
              La academia líder en habla hispana de repostería de gelatinas artísticas con transferencia de diseños comestibles.
            </p>
          </div>

          {/* Links list removed */}
        </div>

        <div className="h-px bg-amber-900/60" />

        {/* Disclaimer for online courses */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-amber-300/40">
          <p className="text-center sm:text-left max-w-xl">
            Descargo de Responsabilidad: Los resultados presentados por nuestros estudiantes pueden variar. El éxito en la repostería y en la venta de gelatinas transfer depende del esfuerzo, práctica y perseverancia individuales.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> por SynthGelArt &copy; {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
