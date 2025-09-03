'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smile, Zap, Shield, Star } from 'lucide-react';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function EspecialidadesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, rotationY: 90, z: -100 },
        {
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const especialidades = [
    {
      icon: Smile,
      title: 'Estética Dental',
      description:
        'Blanqueamientos, carillas y diseño de sonrisa para lograr la sonrisa perfecta.',
      features: [
        'Blanqueamiento profesional',
        'Carillas de porcelana',
        'Diseño de sonrisa digital',
      ],
    },
    {
      icon: Zap,
      title: 'Implantología',
      description:
        'Reemplazo de dientes perdidos con implantes de titanio de última generación.',
      features: ['Implantes de titanio', 'Cirugía guiada', 'Carga inmediata'],
    },
    {
      icon: Shield,
      title: 'Ortodoncia',
      description:
        'Corrección de la posición dental con brackets tradicionales e invisibles.',
      features: [
        'Brackets metálicos',
        'Brackets estéticos',
        'Ortodoncia invisible',
      ],
    },
    {
      icon: Star,
      title: 'Odontología General',
      description:
        'Tratamientos preventivos y curativos para mantener tu salud bucal.',
      features: ['Limpiezas dentales', 'Obturaciones', 'Endodoncia'],
    },
  ];

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Navbar />
      <section
        className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-white"
        ref={heroRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              Nuestras Especialidades
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Ofrecemos una amplia gama de tratamientos dentales especializados
              con tecnología de vanguardia y técnicas innovadoras.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {especialidades.map((especialidad, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <especialidad.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {especialidad.title}
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {especialidad.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {especialidad.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-500"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
