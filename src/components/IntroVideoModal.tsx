/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, X, Play, Sparkles } from 'lucide-react';

interface IntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntroVideoModal({ isOpen, onClose }: IntroVideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const [isReloaded, setIsReloaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if session storage indicates we already loaded the page, or check Performance API
    const sessionVisited = sessionStorage.getItem('synthgelart_visited');
    let isRefreshed = false;

    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        const navType = (navEntries[0] as PerformanceNavigationTiming).type;
        if (navType === 'reload') {
          isRefreshed = true;
        }
      } else {
        // Fallback for older browsers
        if (performance.navigation && performance.navigation.type === 1) {
          isRefreshed = true;
        }
      }
    } catch (e) {
      console.error(e);
    }

    if (sessionVisited === 'true' || isRefreshed) {
      setIsReloaded(true);
    }

    // Set the item to mark that we have visited
    sessionStorage.setItem('synthgelart_visited', 'true');
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setShowPlayOverlay(true);
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePlayWithAudio = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false;
        setIsMuted(false);
        await videoRef.current.play();
        setIsPlaying(true);
        setShowPlayOverlay(false);
      } catch (err) {
        console.error("Play failed", err);
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in select-none">
      <div className="relative bg-neutral-950 border border-neutral-900 rounded-2xl max-w-md w-full max-h-[85vh] aspect-[9/16] overflow-hidden shadow-2xl flex flex-col group">
        
        {/* Top Header Controls (Hidden when overlay is up to direct all attention to play action) */}
        {!showPlayOverlay && (
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <span className="bg-rose-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
              SINTONIZANDO INTRODUCCIÓN
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleMute}
                className="text-white hover:text-amber-400 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-all cursor-pointer shadow-md"
                title={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="text-white hover:text-rose-500 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-all cursor-pointer shadow-md"
                title="Omitir vídeo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Video Frame */}
        <div className="w-full h-full relative bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="https://djorgeleal.github.io/synthgelart/synthgelart.mp4"
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-contain"
          />

          {/* Large Unmute / Play Prompt Overlay if Autoplay with Audio got Restricted */}
          {showPlayOverlay && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-40 transition-all duration-500 animate-fade-in">
              <div className="max-w-md space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-rose-600 rounded-full blur opacity-40 animate-pulse" />
                    <button
                      onClick={handlePlayWithAudio}
                      className="relative w-20 h-20 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    >
                      <Play className="w-9 h-9 fill-current ml-1" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-white">
                    ¡Comienza la Experiencia!
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
                    Toca para activar el audio y ver la presentación exclusiva de SynthGelArt
                  </p>
                </div>
                {isReloaded && (
                  <button
                    onClick={onClose}
                    className="font-sans text-xs text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-widest pt-2 block mx-auto underline cursor-pointer"
                  >
                    Omitir e ir a la página
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Subtitles or Toast if muted & playing */}
          {isPlaying && isMuted && !showPlayOverlay && (
            <button
              onClick={handlePlayWithAudio}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-rose-600/90 text-white font-sans text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-rose-600/30 hover:bg-rose-500 active:scale-95 transition-all cursor-pointer animate-bounce"
            >
              <VolumeX className="w-4 h-4" />
              TOCA PARA ESCUCHAR CON AUDIO
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
