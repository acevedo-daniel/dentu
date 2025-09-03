'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';
import { Clock, Award, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ConocenosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        teamRef.current?.children || [],
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5491123456789?text=Hola, me gustaría conocer más sobre sus servicios',
      '_blank'
    );
  };

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-primary mb-8"
            >
              Quien Soy
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Profesional dedicada a brindar la mejor atención dental con
              tecnología de vanguardia y un enfoque personalizado para cada
              paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-600">Pacientes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Turnos</h3>
              <p className="text-gray-600">Manana - Tarde</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Sobre mi
            </h2>
            <div
              ref={teamRef}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffotos.perfil.com%2F2025%2F04%2F10%2Fodontologa-ludmila-nocita-2001162.jpg&f=1&nofb=1&ipt=752a64a58aa515f4eba879fd220cfaae8d9c20d2d1a0ac6d5dc87b5f026a5b21"
                  alt="Dra. Sonrisa"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dra. Carolina Gonzalez
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Odontóloga especializada en estética dental y rehabilitación
                  oral con más de 5 años de experiencia. Graduada de la
                  Universidad Nacional del Nordeste con especialización en
                  implantología y cirugía oral.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Especialista en Implantología
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Certificada en Estética Dental
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Miembro de la Asociación Odontológica Argentina
                  </li>
                </ul>
                <Button
                  onClick={openWhatsApp}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
