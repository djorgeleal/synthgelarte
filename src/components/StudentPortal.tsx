/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, CheckCircle, Download, ExternalLink, Sparkles, Store, Lock, Play, Award, Compass, RefreshCw } from 'lucide-react';

export default function StudentPortal() {
  const [completedLessons, setCompletedLessons] = useState<string[]>(['l1']);
  const [activeTab, setActiveTab] = useState<'lessons' | 'templates' | 'suppliers'>('lessons');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const lessons = [
    { id: 'l1', title: 'Fundamentos: La grenetina de alta firmeza', duration: '12 min', desc: 'Aprende las diferencias entre Bloom 250 y 310, y cómo hidratarla correctamente.', difficulty: 'Fácil' },
    { id: 'l2', title: 'Creación del lienzo de leche condensada blanco radiante', duration: '18 min', desc: 'Fórmula secreta para que los colores del transfer resalten con máxima fidelidad.', difficulty: 'Intermedio' },
    { id: 'l3', title: 'Preparación de imágenes en espejo y calibración de impresión', duration: '15 min', desc: 'Uso de programas gratuitos para ajustar brillos y saturación ideales para tinta vegetal.', difficulty: 'Fácil' },
    { id: 'l4', title: 'La transferencia mágica paso a paso', duration: '22 min', desc: 'Presión de contacto, tiempo de absorción de 3 minutos y desmolde impecable.', difficulty: 'Avanzado' },
    { id: 'l5', title: 'Taller de Empacado y Costos de Venta', duration: '20 min', desc: 'Cómo fijar precios con márgenes del 70% y empacar con enfriadores de gel.', difficulty: 'Fácil' }
  ];

  const templates = [
    { id: 't1', title: 'Marco de Flores Vintage', category: 'Florales', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300' },
    { id: 't2', title: 'Festa Infantil Dinosaurio', category: 'Infantiles', img: 'https://images.unsplash.com/photo-1535572290543-960a894685a6?auto=format&fit=crop&q=80&w=300' },
    { id: 't3', title: 'Diseño Bodas de Plata', category: 'Festivos', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=300' },
    { id: 't4', title: 'Mariposas de Primavera', category: 'Elegantes', img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300' }
  ];

  const suppliers = [
    { name: 'ColorChef Insumos', country: 'México', product: 'Tintas comestibles FDA, Papel de Arroz flexible', discount: 'CUPÓN: SYNTHGEL10 (10% OFF)', link: 'https://example.com/colorchef' },
    { name: 'GelArt Supply Inc.', country: 'Internacional / USA', product: 'Grenetina de 300 Bloom premium, moldes acrílicos', discount: 'CUPÓN: TRANSFERART15 (15% OFF)', link: 'https://example.com/gelart' },
    { name: 'PastelMax Distribuidora', country: 'Colombia / Perú', product: 'Impresoras adaptadas para tinta comestible, cartuchos', discount: 'CUPÓN: GELSILVA (Envío Gratis)', link: 'https://example.com/pastelmax' }
  ];

  const toggleLesson = (id: string) => {
    if (completedLessons.includes(id)) {
      setCompletedLessons(completedLessons.filter(l => l !== id));
    } else {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert('¡Plantilla descargada con éxito en tu dispositivo! (Simulación de descarga completada)');
    }, 1500);
  };

  const percentComplete = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Dashboard Welcome Header */}
      <div className="bg-amber-500 text-neutral-950 p-6 rounded-3xl mb-8 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-900 text-amber-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Bienvenidos
            </span>
            <span className="text-xs font-semibold text-amber-900">Bienvenido de vuelta, Estudiante</span>
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-3xl">
            Academia SynthGelArt
          </h1>
          <p className="text-amber-950 text-xs mt-1">
            Aquí tienes acceso a tus lecciones, plantilla de bonos descargables y los descuentos exclusivos con proveedores.
          </p>
        </div>

        {/* Progress gauge */}
        <div className="bg-amber-600/30 backdrop-blur-xs p-4 rounded-2xl border border-amber-400/20 min-w-[200px]">
          <div className="flex justify-between items-center text-xs font-bold text-amber-950 mb-1">
            <span>Progreso General</span>
            <span>{percentComplete}%</span>
          </div>
          <div className="w-full bg-amber-900/20 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-amber-900 h-full rounded-full transition-all duration-500" 
              style={{ width: `${percentComplete}%` }}
            />
          </div>
          <span className="text-[10px] text-amber-900 mt-1.5 block">
            {completedLessons.length} de {lessons.length} lecciones completadas
          </span>
        </div>
      </div>

      {/* Tabs selectors */}
      <div className="flex border-b border-rose-100 mb-8 overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('lessons')}
          className={`pb-4 px-4 font-sans font-bold text-sm tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border-b-2 ${
            activeTab === 'lessons' 
              ? 'border-amber-500 text-amber-800' 
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Lecciones en Video
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`pb-4 px-4 font-sans font-bold text-sm tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border-b-2 ${
            activeTab === 'templates' 
              ? 'border-amber-500 text-amber-800' 
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <Compass className="w-4 h-4" />
          Descargar 200 Plantillas
        </button>
        <button
          onClick={() => setActiveTab('suppliers')}
          className={`pb-4 px-4 font-sans font-bold text-sm tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border-b-2 ${
            activeTab === 'suppliers' 
              ? 'border-amber-500 text-amber-800' 
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <Store className="w-4 h-4" />
          Directorio Proveedores
        </button>
      </div>

      {/* Active Tab Panel Rendering */}
      {activeTab === 'lessons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lessons List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif font-bold text-xl text-amber-900 mb-2">Plan de Estudios Completo</h2>
            {lessons.map((lesson, idx) => (
              <div 
                key={lesson.id}
                className={`bg-white border rounded-2xl p-5 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between ${
                  completedLessons.includes(lesson.id) 
                    ? 'border-emerald-100 bg-emerald-50/20' 
                    : 'border-rose-100 hover:border-amber-200'
                }`}
              >
                <div className="flex gap-3.5 items-start">
                  <button 
                    onClick={() => toggleLesson(lesson.id)}
                    className="mt-1 cursor-pointer"
                    title="Marcar como completado"
                  >
                    <CheckCircle className={`w-6 h-6 transition-colors ${
                      completedLessons.includes(lesson.id) 
                        ? 'text-emerald-600 fill-emerald-100' 
                        : 'text-gray-300 hover:text-amber-500'
                    }`} />
                  </button>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-sans text-[10px] font-bold uppercase text-gray-400">Lección {idx + 1}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        lesson.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                        lesson.difficulty === 'Intermedio' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {lesson.difficulty}
                      </span>
                      <span className="font-sans text-[10px] text-gray-400 font-mono">⏱️ {lesson.duration}</span>
                    </div>
                    <h3 className="font-serif font-bold text-gray-800 text-base mt-1">{lesson.title}</h3>
                    <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{lesson.desc}</p>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Iniciando reproducción de la Lección ${idx + 1}: ${lesson.title}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all cursor-pointer shadow-xs whitespace-nowrap self-end sm:self-center"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Ver Lección
                </button>
              </div>
            ))}
          </div>

          {/* Quick Stats sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-rose-50/45 border border-rose-100 rounded-3xl p-6 space-y-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Certificado del Curso
              </h3>
              <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">
                Completa el 100% de las lecciones en video para desbloquear tu certificado avalado por <strong>SynthGelArt Masterclass</strong> con validez para tu portafolio.
              </p>
            </div>

            {/* Locked Certificate Card */}
            <div className="bg-white border border-rose-100/60 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative overflow-hidden">
              {percentComplete < 100 && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center p-4">
                  <Lock className="w-8 h-8 text-amber-600 mb-2" />
                  <span className="font-sans text-xs font-bold text-amber-900">Bloqueado</span>
                  <span className="font-sans text-[10px] text-gray-500 mt-0.5 text-center">Completa el 100% de lecciones para reclamar.</span>
                </div>
              )}
              <Award className="w-12 h-12 text-amber-500 mb-2" />
              <p className="font-serif font-bold text-sm text-gray-800">Certificado SynthGelArt</p>
              <p className="font-sans text-[10px] text-gray-400 mt-0.5">Otorgado por completar con éxito el programa de Gelatinas Transfer Artísticas.</p>
              <button 
                onClick={() => alert('¡Felicidades! Aquí está tu certificado de finalización de SynthGelArt.')}
                className="mt-4 bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
              >
                Descargar PDF
              </button>
            </div>

            <div className="border-t border-rose-100 pt-4 text-xs space-y-2">
              <span className="font-sans font-bold text-gray-600 block">Soporte al Alumno</span>
              <p className="font-sans text-gray-500 leading-relaxed">
                ¿Tienes dudas sobre la firmeza de tu gelatina o la tinta? Escríbenos directamente por el chat privado de soporte en WhatsApp para recibir mentoría en tiempo real de nuestros chefs.
              </p>
              <a 
                href="https://wa.me/573000000000" 
                target="_blank" 
                className="inline-block text-amber-600 hover:text-amber-700 font-bold hover:underline"
              >
                Escribir al Soporte Técnico →
              </a>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'templates' && (
        <div>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <div>
              <h2 className="font-serif font-bold text-xl text-amber-900">Bono: Galería de 200 Plantillas Premium</h2>
              <p className="font-sans text-xs text-gray-500 mt-0.5">Descarga los archivos digitales en alta resolución listos para imprimir en modo espejo.</p>
            </div>
            <button 
              onClick={() => alert('¡Iniciando descarga del paquete completo zip con 200 diseños!')}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Descargar Todo el Paquete (ZIP)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((tmpl) => (
              <div key={tmpl.id} className="bg-white border border-rose-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                <div className="aspect-square relative bg-gray-50 overflow-hidden">
                  <img 
                    src={tmpl.img} 
                    alt={tmpl.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-rose-500 text-white font-sans text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {tmpl.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-gray-800">{tmpl.title}</h4>
                    <p className="font-sans text-[10px] text-gray-400 mt-0.5">Formato: JPG de Alta Resolución</p>
                  </div>
                  <button 
                    onClick={() => handleDownload(tmpl.id)}
                    disabled={downloadingId === tmpl.id}
                    className="mt-3 w-full bg-amber-50 hover:bg-amber-100 text-amber-800 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {downloadingId === tmpl.id ? 'Descargando...' : 'Descargar Archivo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'suppliers' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif font-bold text-xl text-amber-900">Bono: Directorio de Proveedores Homologados</h2>
            <p className="font-sans text-xs text-gray-500 mt-0.5">Encuentra los insumos certificados y haz tus pedidos con descuentos exclusivos para alumnos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suppliers.map((sup, idx) => (
              <div key={idx} className="bg-white border border-rose-100 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans text-xs font-bold text-amber-600 uppercase tracking-wider">{sup.country}</span>
                    <Store className="w-4 h-4 text-rose-500" />
                  </div>
                  <h3 className="font-serif font-bold text-gray-800 text-base">{sup.name}</h3>
                  <p className="font-sans text-xs text-gray-500 mt-2"><strong>Productos:</strong> {sup.product}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-rose-50 flex flex-col gap-2">
                  <div className="bg-emerald-50 text-emerald-800 font-bold p-2 rounded-lg text-center text-xs border border-emerald-100">
                    {sup.discount}
                  </div>
                  <a 
                    href={sup.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    Visitar Tienda Oficial
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
