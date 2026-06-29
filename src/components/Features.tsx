/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COURSE_MODULES } from '../data';
import { Sparkles, PartyPopper, TrendingUp, HelpCircle, ChevronRight, X } from 'lucide-react';
import { CourseModule } from '../types';
import ImageSlider from './ImageSlider';

const GelatinaIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21h18" />
    <path d="M5 21c0-4 1.5-8 4-10h6c2.5 2 4 6 4 10" />
    <path d="M9 10c0 3 .5 7 1 11" />
    <path d="M12 10v11" />
    <path d="M15 10c0 3-.5 7-1 11" />
    <circle cx="12" cy="5" r="1.5" />
    <path d="M12 6.5v3.5" />
  </svg>
);

export default function Features() {
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);

  // Map icons to render dynamically
  const getIcon = (name: string) => {
    switch (name) {
      case 'Gelatina':
        return <GelatinaIcon className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <HelpCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center mb-12">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3.5 py-1 rounded-full">
          Metodología Paso a Paso
        </span>
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-amber-900 mt-3">
          Lo que vas a aprender
        </h2>
        <p className="font-sans text-gray-600 mt-2 max-w-xl mx-auto text-sm">
          Domina paso a paso la tecnología de transferencia comestible para eventos personalizados y repostería de alta gama.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSE_MODULES.map((module) => {
          const isCertificate = module.id === 'm3';
          const isCommunity = module.id === 'm4';

          const CardContent = (
            <>
              <div>
                <div className={`w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4 ${
                  !isCertificate && !isCommunity ? 'group-hover:bg-amber-500 group-hover:text-white transition-all duration-300' : ''
                }`}>
                  {getIcon(module.icon)}
                </div>
                <h3 className={`font-serif font-bold text-lg transition-colors ${
                  isCertificate ? 'text-amber-900' : isCommunity ? 'text-green-800' : 'text-gray-800 group-hover:text-amber-700'
                }`}>
                  {module.title}
                </h3>
                
                {isCertificate ? (
                  <div className="mt-3 overflow-hidden rounded-xl border border-amber-100 bg-amber-50/10">
                    <img 
                      src="https://djorgeleal.github.io/synthgelart/certificado.png" 
                      alt="Certificado Oficial de Finalización"
                      className="w-full h-auto object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : isCommunity ? (
                  <div className="mt-3 overflow-hidden rounded-xl border border-green-100 bg-green-50/5">
                    <img 
                      src="https://djorgeleal.github.io/synthgelart/whatsapp.jpg" 
                      alt="Únete a la Comunidad Privada de WhatsApp"
                      className="w-full h-auto object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <p className="font-sans text-xs text-gray-500 mt-2 leading-relaxed">
                    {module.description}
                  </p>
                )}
              </div>
              
              {!isCertificate && !isCommunity && (
                <span className="font-sans text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-4 flex items-center gap-1 group-hover:text-amber-700">
                  Ver detalles <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </>
          );

          if (isCommunity) {
            return (
              <a
                key={module.id}
                href="https://chat.whatsapp.com/FYZcOV8M8ZBBTmJVnmrsZV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-rose-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between transition-all duration-300 border-green-100 hover:shadow-md hover:border-green-300 cursor-pointer group hover:-translate-y-1 block"
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div
              key={module.id}
              onClick={() => {
                if (!isCertificate) {
                  setSelectedModule(module);
                }
              }}
              className={`bg-white border border-rose-100 p-6 rounded-2xl shadow-xs flex flex-col justify-between transition-all duration-300 ${
                isCertificate 
                  ? 'border-amber-200' 
                  : 'hover:shadow-md hover:border-amber-300 cursor-pointer group hover:-translate-y-1'
              }`}
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      {/* Module Details Modal Popup */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
          <div className="bg-white border border-rose-100 rounded-3xl max-w-[95vw] sm:max-w-xl md:max-w-2xl w-full p-5 sm:p-6 shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer z-30"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                {getIcon(selectedModule.icon)}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-900 leading-tight">
                  {selectedModule.title}
                </h3>
                <p className="font-sans text-[11px] text-amber-700 font-medium">Diseños exclusivos paso a paso</p>
              </div>
            </div>

            <div className="my-4">
              <ImageSlider />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <p className="font-sans text-xs text-stone-500 leading-relaxed text-center sm:text-left">
                Aprenderás a recrear cada uno de estos espectaculares acabados de manera profesional.
              </p>
              <button
                onClick={() => setSelectedModule(null)}
                className="w-full sm:w-auto px-6 bg-amber-500 hover:bg-amber-600 text-white font-sans font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer shrink-0"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
