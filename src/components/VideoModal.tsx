/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export default function VideoModal({ isOpen, onClose, onEnroll }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const steps = [
    { title: 'Intro: El secreto de las gelatinas artísticas', time: 'Inicio', desc: 'Por qué la gelatina transfer está revolucionando la repostería y duplicando ingresos.' }
  ];

  // Sync play/pause state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.log("Play blocked or failed:", err);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isOpen]);

  // Sync mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle auto-play on open
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setCurrentTime(cur);
      setDuration(dur);
      const percent = (cur / dur) * 100;
      setProgress(percent);

      // Map progress to active step
      const newStep = Math.min(steps.length - 1, Math.floor((percent / 100) * steps.length));
      setActiveStep(newStep);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    onClose();
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newPercent = Math.max(0, Math.min(100, (clickX / width) * 100));
      const newTime = (newPercent / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(newPercent);
      setCurrentTime(newTime);
      if (!isPlaying) {
        setIsPlaying(true);
      }
    }
  };

  const handleStepClick = (index: number) => {
    if (videoRef.current && duration) {
      const stepPercent = (index / steps.length) * 100;
      const newTime = (stepPercent / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(stepPercent);
      setCurrentTime(newTime);
      setActiveStep(index);
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-3xl w-full aspect-video overflow-hidden shadow-2xl flex flex-col">
        {/* Left Side: Real Video Player */}
        <div className="flex-1 relative bg-black flex flex-col justify-between p-4 group">
          {/* Header */}
          <div className="flex justify-between items-center z-10">
            <span className="bg-amber-500 text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              BIENVENIDOS
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-amber-400 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-all cursor-pointer"
                title={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="text-white hover:text-rose-500 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-all cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Visual Player Area */}
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
             <video
              ref={videoRef}
              src="https://djorgeleal.github.io/synthgelart/davianaleal.mp4"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            />

            {/* Play/Pause Giant Indicator if paused */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute w-16 h-16 rounded-full bg-amber-500/90 text-neutral-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
