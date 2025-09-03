'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function DondeEstamosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5491123456789?text=Hola, me gustaría agendar una cita',
      '_blank'
    );
  };

  const openMaps = () => {
    window.open(
      'https://maps.google.com/?q=9+de+Julio+3125,+Resistencia,+Chaco',
      '_blank'
    );
  };
  return (
    <main className="min-h-screen" ref={containerRef}>
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              Dónde Estoy
            </h1>
            <p className="text-xl text-gray/70 leading-relaxed">
              Visítanos en nuestro moderno consultorio ubicado en el corazón de
              Buenos Aires, con fácil acceso y estacionamiento disponible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              {/* Mapa embebido */}
              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps?q=9+de+Julio+3125,+Resistencia,+Chaco&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                allowFullScreen
                className="w-full h-96 border-0"
              ></iframe>

              {/* Contenido debajo del mapa */}
              <div className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-gray-800 mb-4">Ubicación</p>
                <Button
                  onClick={openMaps}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Ver en Google Maps
                </Button>
              </div>
            </div>

            <div ref={infoRef} className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-800">
                      Av. 9 de Julio 3125
                      <br />
                      Resistencia , Chaco
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Horarios de Atención <br />{' '}
                      <span className="text-md font-normal text-primary-500">
                        Solamente con Cita Previa
                      </span>
                    </h3>

                    <div className="space-y-1 text-gray-800">
                      <p>Lunes a Viernes: 9:00 - 19:00</p>
                      <p>Sábados: 9:00 - 13:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Contacto
                    </h3>
                    <div className="space-y-1 text-gray-800">
                      <p>WhatsApp: 3624 247285</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Agendar Cita Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
