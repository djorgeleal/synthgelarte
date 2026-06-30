/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Sparkles, Star, Award, HeartHandshake } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessUnlock: () => void;
}

export default function EnrollModal({ isOpen, onClose, onSuccessUnlock }: EnrollModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'MXN' | 'COP'>('USD');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const prices = {
    USD: { symbol: '$', value: '19', label: 'USD' },
    MXN: { symbol: '$', value: '380', label: 'MXN' },
    COP: { symbol: '$', value: '76,000', label: 'COP' }
  };

  const currentPrice = prices[selectedCurrency];

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !phone) {
      setError('Por favor completa todos los campos.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API registering
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);

      // WhatsApp API template redirection
      const message = encodeURIComponent(
        `¡Hola SynthGelArt! Me interesa inscribirme en la Masterclass de Gelatinas Transfer.\n\n` +
        `Mis datos:\n` +
        `- Nombre: ${name}\n` +
        `- Correo: ${email}\n` +
        `- Celular: ${phone}\n` +
        `- Moneda: ${selectedCurrency}\n\n` +
        `Quiero aprovechar la oferta de lanzamiento de ${currentPrice.symbol}${currentPrice.value} ${currentPrice.label}. ¿Me dan los datos de pago por favor?`
      );
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=573000000000&text=${message}`;
      
      // Open in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Also unlock the demo student dashboard!
      onSuccessUnlock();
    }, 1500);
  };

  const handleInstantUnlock = () => {
    setError(null);
    if (!name || !email) {
      setError('Por favor, ingresa al menos tu Nombre y Correo Electrónico para simular tu ingreso.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);
      onSuccessUnlock();
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-rose-100 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        
        {/* Header decoration */}
        <div className="bg-amber-500 text-neutral-950 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-950 hover:bg-amber-600/50 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-amber-400/50 px-2.5 py-1 rounded-full w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-current text-amber-800" />
            Oferta Especial por Lanzamiento
          </div>
          
          <h3 className="font-serif font-bold text-2xl leading-tight">
            Masterclass SynthGelArt
          </h3>
          <p className="text-amber-950 text-xs mt-1 font-sans">
            Aprende desde cero la técnica de gelatinas transfer personalizadas y comienza a monetizar.
          </p>
        </div>

        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {error && (
            <div className="bg-rose-50 border border-rose-100 text-rose-800 text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-between gap-2">
              <span>{error}</span>
              <button type="button" onClick={() => setError(null)} className="text-rose-600 hover:text-rose-800 font-bold px-1">
                ✕
              </button>
            </div>
          )}

          {/* Prices Toggles */}
          <div>
            <span className="font-sans text-xs font-bold text-gray-500 block mb-2 uppercase tracking-wider">
              Selecciona tu Moneda Local
            </span>
            <div className="grid grid-cols-3 bg-gray-50 p-1 rounded-xl border border-gray-100">
              {(['USD', 'MXN', 'COP'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setSelectedCurrency(curr)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCurrency === curr 
                      ? 'bg-amber-500 text-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Highlight Card */}
          <div className="bg-rose-50/50 border border-rose-100/60 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <p className="font-serif font-bold text-lg text-amber-900">Acceso Inmediato</p>
              <p className="font-sans text-[11px] text-gray-500">Curso completo + 3 bonos premium</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 line-through block font-mono">
                {selectedCurrency === 'USD' && '$141 USD'}
                {selectedCurrency === 'MXN' && '$2,820 MXN'}
                {selectedCurrency === 'COP' && '$564,000 COP'}
              </span>
              <span className="font-serif font-extrabold text-2xl text-rose-600 block leading-none mt-1">
                {currentPrice.symbol}{currentPrice.value} <span className="text-xs font-sans font-bold">{currentPrice.label}</span>
              </span>
            </div>
          </div>

          {/* What's included checklist */}
          <div className="space-y-2">
            <p className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider">
              ¿Qué obtienes hoy al inscribirte?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex gap-2 items-center text-gray-700">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Masterclass en Video HD</span>
              </div>
              <div className="flex gap-2 items-center text-gray-700">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>+200 Diseños Listos (Bono)</span>
              </div>
              <div className="flex gap-2 items-center text-gray-700">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Directorio Proveedores (Bono)</span>
              </div>
              <div className="flex gap-2 items-center text-gray-700">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Taller de Envío y Empaque (Bono)</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
            <div>
              <label className="font-sans text-xs font-bold text-gray-600 block mb-1">
                Tu Nombre Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. María Pérez"
                className="w-full bg-gray-50 border border-rose-100 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-xs font-bold text-gray-600 block mb-1">
                  Tu Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-gray-50 border border-rose-100 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white text-gray-800"
                />
              </div>
              <div>
                <label className="font-sans text-xs font-bold text-gray-600 block mb-1">
                  Celular / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 123 4567"
                  className="w-full bg-gray-50 border border-rose-100 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:border-amber-500 focus:bg-white text-gray-800"
                />
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Procesando...' : 'Inscribirse Vía WhatsApp (Oficial) 🟢'}
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">Ó</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              <button
                type="button"
                onClick={handleInstantUnlock}
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                Inscripción Demo Express (Acceder al Aula Al Instante 🎓)
              </button>
            </div>
          </form>
        </div>

        {/* Footer info guarantees */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Compra Segura y Encriptada</span>
          </div>
          <div className="flex items-center gap-1">
            <HeartHandshake className="w-4 h-4 text-amber-600" />
            <span>7 Días de Garantía Total</span>
          </div>
        </div>

      </div>
    </div>
  );
}
