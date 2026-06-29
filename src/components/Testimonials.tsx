/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ArrowRight, Check, Quote, Heart, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3.5 py-1 rounded-full">
            Casos de Éxito
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-amber-900 mt-3">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="font-sans text-gray-600 mt-2 max-w-xl mx-auto text-sm">
            Descubre las historias de repostería creativa de personas reales que ya están comercializando y asombrando a sus clientes.
          </p>
        </div>

        {/* Dynamic Testimonials layout with Before / After Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Testimonial slider / cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            <div className="space-y-4">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer text-left relative ${
                    activeTestimonial === idx
                      ? 'border-amber-500 bg-amber-50/30 shadow-xs'
                      : 'border-rose-100 hover:border-amber-200 bg-white/40'
                  }`}
                >
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-rose-200/40 pointer-events-none" />
                  
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-gray-800 text-sm sm:text-base leading-none">
                        {t.name}
                      </h4>
                      <p className="font-sans text-[11px] text-gray-500 mt-1">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500" />
                    ))}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Visual comparison showcase (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-rose-100 p-6 rounded-3xl flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Resultados del Alumno
                </span>
              </div>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Mira el impresionante avance de <strong>{TESTIMONIALS[activeTestimonial].name}</strong>. Desde gelatinas caseras básicas hasta verdaderas obras de arte transfer personalizadas.
              </p>
            </div>

            {/* Before / After side-by-side images wrapper */}
            <div className="grid grid-cols-2 gap-4 my-6">
              {/* Before item */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                <img
                  src={TESTIMONIALS[activeTestimonial].beforeImg}
                  alt="Gelatina básica antes"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-neutral-900/75 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                  Antes (Básica)
                </span>
              </div>

              {/* After item */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/80 bg-rose-50">
                <img
                  src={TESTIMONIALS[activeTestimonial].afterImg}
                  alt="Gelatina transfer después"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-amber-500 text-neutral-950 font-sans text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                  Después (Transfer Pro)
                </span>
              </div>
            </div>

            <div className="bg-rose-50/70 rounded-xl p-3 border border-rose-100/40 text-center">
              <span className="font-sans text-xs font-semibold text-rose-700 block">
                💖 ¡Tú también puedes lograr estos resultados!
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
