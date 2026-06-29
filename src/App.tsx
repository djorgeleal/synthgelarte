/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Audience from './components/Audience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Lazy load modals and heavy student portal to reduce initial page load bundle size
const EnrollModal = lazy(() => import('./components/EnrollModal'));
const VideoModal = lazy(() => import('./components/VideoModal'));
const IntroVideoModal = lazy(() => import('./components/IntroVideoModal'));
const StudentPortal = lazy(() => import('./components/StudentPortal'));

import { Play, Sparkles, ShieldCheck, Heart, UserCheck, Star, BookOpen, ArrowRight, ArrowUp, Flame } from 'lucide-react';

export default function App() {
  const [currentView, setView] = useState<'landing' | 'student'>('landing');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isIntroVideoOpen, setIsIntroVideoOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleUnlockSuccess = () => {
    setIsUnlocked(true);
    setView('student');
    setIsEnrollOpen(false);
  };

  return (
    <div className="min-h-screen bg-rose-50/10 text-gray-800 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden font-sans antialiased scroll-smooth">
      
      {/* Top Header */}
      <Header 
        currentView={currentView} 
        setView={setView} 
        isUnlocked={isUnlocked} 
        onOpenEnroll={() => setIsEnrollOpen(true)} 
      />

      {/* Main View switching logic */}
      {currentView === 'landing' ? (
        <>
          {/* Hero Section */}
          <section className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden flex flex-col justify-center py-16">
            {/* Background Image / Blur Orbs as in the original layout */}
            {/* On mobile, tablet and desktop, it has the same opacity and gradient as desktop to ensure a consistent, beautiful presentation across all viewports */}
            <div className="absolute inset-0 w-full h-full opacity-75 pointer-events-none -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50/10 via-rose-50/30 to-rose-50/80" />
              <img 
                src="https://djorgeleal.github.io/synthgelart/2.webp" 
                alt="Gelatina Artística SynthGelArt" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            {/* Inner Content constrained to max-w-7xl */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Left Side Info */}
              <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3.5 py-1 rounded-full inline-block">
                    ★ MASTERCLASS PREMIUM ★
                  </span>
                  <h1 
                    className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-amber-950 mt-4 leading-[1.08] tracking-tight"
                    style={{ textShadow: '2px 2px 8px rgba(255, 255, 255, 0.9), -1px -1px 4px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.5)' }}
                  >
                    Domina el Arte de las <span className="italic text-amber-500 block sm:inline">Gelatinas Transfer</span>
                  </h1>
                </div>

                <p 
                  className="font-sans text-sm sm:text-base font-extrabold text-neutral-900 leading-relaxed max-w-2xl mx-auto md:mx-0"
                  style={{ textShadow: '1px 1px 4px rgba(255, 255, 255, 1), -1px -1px 4px rgba(255, 255, 255, 1), 0 0 8px rgba(255, 255, 255, 1)' }}
                >
                  Aprende la técnica mágica para plasmar cualquier imagen, fotografía o diseño personalizado directamente sobre gelatina. Crea postres únicos que cautivan a primera vista e inicia un negocio sumamente rentable desde casa.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <a
                    href="https://go.hotmart.com/K106418306B?ap=14bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#FF5100] hover:bg-[#E04700] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#FF5100]/25 hover:shadow-[#FF5100]/40 transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-3 cursor-pointer text-center"
                  >
                    <Flame className="w-5 h-5 text-amber-300 fill-amber-300 animate-pulse" />
                    ¡INSCRÍBETE HOY MISMO EN HOTMART!
                  </a>

                  <div 
                    className="flex items-center gap-1.5 text-xs text-amber-950 font-extrabold"
                    style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                  >
                    <ShieldCheck className="w-5 h-5 text-amber-600 fill-amber-100" />
                    <span>Garantía de Satisfacción Total</span>
                  </div>
                </div>

                {/* Social Proof Stats */}
                <div className="flex justify-center md:justify-start items-center gap-6 mt-2 pt-6 border-t border-rose-100">
                  <div>
                    <span 
                      className="block font-serif font-extrabold text-xl sm:text-2xl text-amber-950"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      1,200+
                    </span>
                    <span 
                      className="block text-[11px] text-amber-900 font-black uppercase tracking-wider"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      Alumnos Activos
                    </span>
                  </div>
                  <div className="h-8 w-px bg-rose-200" />
                  <div>
                    <span 
                      className="block font-serif font-extrabold text-xl sm:text-2xl text-amber-950"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      4.9 ★
                    </span>
                    <span 
                      className="block text-[11px] text-amber-900 font-black uppercase tracking-wider"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      Calificación Media
                    </span>
                  </div>
                  <div className="h-8 w-px bg-rose-200" />
                  <div>
                    <span 
                      className="block font-serif font-extrabold text-xl sm:text-2xl text-amber-950"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      100%
                    </span>
                    <span 
                      className="block text-[11px] text-amber-900 font-black uppercase tracking-wider"
                      style={{ textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)' }}
                    >
                      Online & Flexible
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side Video Play Preview */}
              <div className="md:col-span-5 relative w-full flex justify-center">
                <div 
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white border border-rose-100/60 p-2.5 group cursor-pointer hover:border-amber-400 transition-all duration-300 hover:shadow-amber-500/5"
                >
                  <div className="aspect-[4/5] bg-neutral-900 rounded-2xl relative overflow-hidden flex items-center justify-center">
                    {/* Real Video looping silently as a teaser preview */}
                    <video
                      src="https://djorgeleal.github.io/synthgelart/davianaleal.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Translucent overlay */}
                    <div className="absolute inset-0 bg-amber-950/20 group-hover:bg-amber-950/10 transition-colors" />

                    {/* Masterclass badge */}
                    <div className="absolute top-4 left-4 bg-amber-500 text-neutral-950 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">
                      VIDEO DE BIENVENIDA 🎥
                    </div>

                    {/* Floating Glow Play Button */}
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-amber-600 flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>


                  </div>
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

          {/* Countdown timer */}
          <Countdown />

          {/* Core Modules List "Qué aprenderás" */}
          <Features />

          {/* "Para Quién" Checklist */}
          <Audience />

          {/* Testimonials Comparison */}
          <Testimonials />

          {/* FAQ Accordions */}
          <FAQ />

          {/* Final Call to Action */}
          <section className="py-12 bg-amber-950 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-amber-900 to-amber-950 opacity-50" />
            <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
              <span className="text-[10px] font-bold tracking-widest bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full uppercase">
                Acelera tu camino hoy
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl">
                ¿Lista para asombrar con tus creaciones?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-amber-200/80 max-w-xl mx-auto leading-relaxed">
                Únete hoy mismo a la Masterclass de Synthgelart. Al inscribirte en Hotmart asegurarás tu acceso instantáneo y exclusivo para potenciar toda tu creatividad.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 items-center">
                <a
                  href="https://go.hotmart.com/K106418306B?ap=14bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#FF5100] hover:bg-[#E04700] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#FF5100]/25 hover:shadow-[#FF5100]/40 transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-3 cursor-pointer text-center"
                >
                  <Flame className="w-5 h-5 text-amber-300 fill-amber-300 animate-pulse" />
                  ¡INSCRÍBETE HOY MISMO EN HOTMART!
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Render student area if current view is student (unlocked) */
        <Suspense fallback={
          <div className="flex flex-col justify-center items-center h-96 py-12 gap-4">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-amber-500 border-t-transparent"></div>
            <p className="font-sans text-xs text-amber-900 font-semibold animate-pulse">Cargando Academia...</p>
          </div>
        }>
          <StudentPortal />
        </Suspense>
      )}

      {/* Footer */}
      <Footer />

      {/* Modals - Wrapped in Suspense for asynchronous lazy loading */}
      <Suspense fallback={null}>
        <EnrollModal 
          isOpen={isEnrollOpen} 
          onClose={() => setIsEnrollOpen(false)} 
          onSuccessUnlock={handleUnlockSuccess} 
        />

        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          onEnroll={() => {
            setIsVideoOpen(false);
            setIsEnrollOpen(true);
          }} 
        />

        <IntroVideoModal 
          isOpen={isIntroVideoOpen} 
          onClose={() => setIsIntroVideoOpen(false)} 
        />
      </Suspense>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-rose-600 text-white shadow-lg shadow-rose-600/30 hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/40 active:scale-95 transition-all duration-300 flex items-center justify-center border border-rose-500/20 hover:-translate-y-1 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
      </button>

    </div>
  );
}
