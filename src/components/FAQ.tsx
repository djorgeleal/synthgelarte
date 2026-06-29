/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50/20 border-t border-rose-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3.5 py-1 rounded-full">
            Resolución de Dudas
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-amber-900 mt-3">
            Preguntas Frecuentes
          </h2>
          <p className="font-sans text-gray-600 mt-2 max-w-xl mx-auto text-sm">
            Todo lo que necesitas saber antes de dar el salto al arte de las gelatinas transfer comestibles.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white border border-rose-100/60 rounded-2xl overflow-hidden shadow-xs hover:border-amber-200 transition-all"
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-rose-50/10"
                >
                  <div className="flex gap-3 items-center min-w-0">
                    <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base text-gray-800 leading-tight">
                      {item.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {/* Expandable description body */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-rose-50/50' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 bg-amber-50/10 font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
