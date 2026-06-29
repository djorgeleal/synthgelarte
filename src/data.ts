/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourseModule, Bonus, Testimonial, FAQItem } from './types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'm1',
    icon: 'Gelatina',
    title: 'Diseños de Precisión',
    description: 'Todos los diseños premium con una nitidez perfecta en el transfer.',
    longDescription: 'Aprenderás a configurar tu impresora, ajustar contrastes, saturaciones y brillo para que la tinta comestible se transfiera con total nitidez, sin borrones ni pérdida de detalles finos.'
  },
  {
    id: 'm3',
    icon: 'PartyPopper',
    title: 'Certificado',
    description: 'Creación de gelatinas para logotipos corporativos, fotos familiares y personajes infantiles.',
    longDescription: 'Descubre cómo adaptar cualquier temática. Aprenderás a trabajar con fondos claros, crear efectos de doble capa y encapsulados que resalten los colores del diseño transferido.'
  },
  {
    id: 'm4',
    icon: 'TrendingUp',
    title: 'Comunidad - Click en la imagen.',
    description: 'Estrategias para vender personalización premium en un mercado con alta demanda.',
    longDescription: 'Aprende a cotizar tus obras de arte comestibles, cómo promocionarte en redes sociales de forma orgánica y cómo conseguir tus primeros 10 clientes recurrentes para eventos.'
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 'b1',
    title: 'Galería de Diseños',
    description: 'Más de 200 plantillas listas para imprimir y transferir en tus primeras obras.',
    value: '$37 USD',
    iconName: 'Image'
  },
  {
    id: 'b2',
    title: 'Proveedores Confiables',
    description: 'Lista de los mejores insumos de tintas y papeles comestibles para transfer.',
    value: '$57 USD',
    isFavorite: true,
    iconName: 'Store'
  },
  {
    id: 'b3',
    title: 'Workshop de Empaque',
    description: 'Cómo proteger tus transferencias durante el envío para que lleguen intactas.',
    value: '$47 USD',
    iconName: 'PackageCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza',
    role: 'Padre de Familia',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    text: 'Le hice una gelatina transfer con la foto de superhéroe favorito a mi hijo para su cumpleaños y todos los invitados quedaron boquiabiertos. Pensaban que era magia. Altamente recomendado.',
    beforeImg: 'https://djorgeleal.github.io/synthgelart/images2.jpg', // simple jelly
    afterImg: 'https://djorgeleal.github.io/synthgelart/pokemon.png' // beautiful transfer flower jelly
  },
  {
    id: 't2',
    name: 'Mariana Silva',
    role: 'Emprendedora de Repostería',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    text: '¡Este curso cambió mi negocio por completo! Las gelatinas transfer personalizadas ahora son el producto más pedido de mi pastelería. La técnica de transferencia mágica es increíblemente fácil de seguir.',
    beforeImg: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=300',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD06uov3BA9y1doEJHFVDB0dWzQ7qRoEQ-QtGVVgxyEi1vMQYcUKNTK0LFZ-PXuWSuH2CpxlYJtptbygbpLoEBb6F33JrSOR5njoj2lRIrcpZ-xJE-CMznnWEARR2r_ZW4xPhNe94KZ_kXobIJyk1IkPf7BKDb4US7y68GYhhQobZ7b48Mf1GAQqvl0FYxT7Y5OUWKhQ8ioCqE7tEcScjRwnUcQlRfSSkUl6cYZeItxCFzz_xTxycVlrj9Rvlc29m5e6g3sGH0Xw'
  },
  {
    id: 't3',
    name: 'Andrea Rostagno',
    role: 'Diseñadora y Repostera Creativa',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    text: 'Pude unir mi pasión por el diseño digital con las gelatinas artísticas. Las plantillas que vienen de bono son una maravilla, te ahorran horas de trabajo. ¡Mis clientes corporativos están fascinados!',
    beforeImg: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=300',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjbdMvhOyZm6sXSpt0WU8cMipoC-oR0i5gSWh5Jjr3YkN89K8KnZKWSUyRmy7pA1ZGFMCadttyEITlVX6m2iPKuICmg-g9uLWBmXzRlmCrAArgd2XpERcHlsSGuiY_sFu4U1hLTI1KysnvTuvQF_ZWTP-67aZVeEL4L0nAPKJrsZkREA6ZwMY9FHJ3-VO246rRAXOcbw-jW_SMHAr_j1dgnrlf0uZYuZSHdJ6I2llGHPt-U_B9u7UMVNQVNbsBmzNIkePsSCrbyw'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f4',
    question: '¿Necesito tener experiencia?',
    answer: 'El curso está estructurado paso a paso desde cero. No necesitas saber nada de repostería ni de diseño. Te llevamos de la mano desde la preparación de la gelatina base hasta la impresión y la técnica de transferencia física.'
  },
  {
    id: 'f2',
    question: '¿Y si no tengo impresora?',
    answer: '¡No hay problema! No necesitas comprar una de inmediato. En el curso te enseñamos cómo encargar tus impresiones comestibles de forma muy económica en reposterías o tiendas locales de materias primas, o bien utilizar servicios en línea con envío a domicilio para que empieces a vender desde el primer día.'
  },
  {
    id: 'f3',
    question: '¿Qué pasa si tengo dudas?',
    answer: '¡No estarás sola! Contamos con un grupo exclusivo de soporte para alumnas y alumnos donde puedes realizar consultas, subir fotos de tus avances y recibir asesoramiento directo e inmediato para asegurar tu éxito.'
  },
  {
    id: 'f1',
    question: '¿Las clases son en vivo?',
    answer: '¡No! Las clases son pregrabadas en video de alta definición (HD) para que puedas verlas a tu propio ritmo, a cualquier hora del día y repetirlas las veces que necesites. Además, tendrás acceso de por vida al contenido y a todas las actualizaciones futuras.'
  },
  {
    id: 'f5',
    question: '¿Cuándo tendré acceso?',
    answer: '¡De forma inmediata! Al completar tu inscripción a través de Hotmart, recibirás un correo automático con tus datos de acceso al portal oficial de alumnos para que puedas comenzar a aprender hoy mismo.'
  }
];

export const SIMULATOR_PRESETS = [
  {
    id: 'p1',
    name: 'Rosas de Cristal',
    theme: 'Floral',
    bgColor: '#ffffff',
    color: '#e0115f',
    textColor: '#800020',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300',
    quote: 'Feliz Día Mamá'
  },
  {
    id: 'p2',
    name: 'Dino Aventuras',
    theme: 'Infantil',
    bgColor: '#e0f2fe',
    color: '#059669',
    textColor: '#065f46',
    image: 'https://images.unsplash.com/photo-1535572290543-960a894685a6?auto=format&fit=crop&q=80&w=300',
    quote: 'Cumple de Mateo'
  },
  {
    id: 'p3',
    name: 'Elegancia Dorada',
    theme: 'Aniversario',
    bgColor: '#fffbeb',
    color: '#d4af37',
    textColor: '#78350f',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=300',
    quote: '50 Aniversario'
  },
  {
    id: 'p4',
    name: 'Logo Corp Gel',
    theme: 'Corporativo',
    bgColor: '#f0fdf4',
    color: '#2563eb',
    textColor: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    quote: 'SynthGelArt Inc.'
  }
];
