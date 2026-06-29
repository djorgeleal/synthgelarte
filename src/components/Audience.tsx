/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check } from 'lucide-react';

export default function Audience() {
  const points = [
    {
      title: 'Reposteros que buscan Innovar',
      desc: 'Leva tus postres al siguiente nivel con imágenes que parecen impresas directamente en el cristal de la gelatina, deslumbrando a tus clientes de repostería.'
    },
    {
      title: 'Emprendedores de Regalos',
      desc: 'Crea un catálogo único y de alto margen de gelatinas personalizadas para cumpleaños, aniversarios, baby showers y todo tipo de celebraciones.'
    },
    {
      title: 'Creativos Digitales y Diseñadores',
      desc: 'Combina el diseño gráfico y la repostería para crear obras comestibles sin igual, logrando colaboraciones con marcas locales para eventos corporativos.'
    }
  ];

  return (
    <section className="bg-rose-50/30 py-20 border-y border-rose-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Chef Image container (1/2 wide) */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white bg-white p-2">
            <img 
              src="https://djorgeleal.github.io/synthgelart/1.webp" 
              alt="Pastelero Decorando Gelatina" 
              className="w-full h-[350px] sm:h-[400px] object-cover rounded-2xl"
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -z-10" />
        </div>

        {/* Content list container (1/2 wide) */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3.5 py-1 rounded-full">
              Público Objetivo
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-amber-900 mt-3 leading-tight">
              Para quién es este Entrenamiento
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-800 text-sm sm:text-base">
                    {point.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
