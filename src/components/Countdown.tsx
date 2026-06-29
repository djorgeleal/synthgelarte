/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    // Get saved countdown target from localStorage or set new one (15 mins from now)
    const storageKey = 'synthgelart_countdown_target';
    let targetTime = localStorage.getItem(storageKey);
    
    if (!targetTime) {
      const now = new Date().getTime();
      const fifteenMinutes = 15 * 60 * 1000;
      targetTime = String(now + fifteenMinutes);
      localStorage.setItem(storageKey, targetTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = parseInt(targetTime || '0') - now;

      if (distance < 0) {
        // Reset countdown to another 15 minutes when it hits zero to keep demo live
        const nextTarget = now + 15 * 60 * 1000;
        localStorage.setItem(storageKey, String(nextTarget));
        targetTime = String(nextTarget);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-amber-50 py-8 border-y border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <p className="font-serif font-bold text-lg sm:text-xl text-amber-900 text-center md:text-left">
          ⏱️ ¡Oferta disponible por tiempo limitado!
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-rose-600 bg-white px-3.5 py-2 rounded-xl shadow-xs min-w-[54px] text-center border border-rose-100">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] font-bold mt-1 text-gray-500 uppercase tracking-widest">Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-rose-600 bg-white px-3.5 py-2 rounded-xl shadow-xs min-w-[54px] text-center border border-rose-100">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] font-bold mt-1 text-gray-500 uppercase tracking-widest">Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-rose-600 bg-white px-3.5 py-2 rounded-xl shadow-xs min-w-[54px] text-center border border-rose-100">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] font-bold mt-1 text-gray-500 uppercase tracking-widest">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-extrabold text-xl sm:text-2xl text-rose-600 bg-white px-3.5 py-2 rounded-xl shadow-xs min-w-[54px] text-center border border-rose-100">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[9px] font-bold mt-1 text-gray-500 uppercase tracking-widest">Seg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
