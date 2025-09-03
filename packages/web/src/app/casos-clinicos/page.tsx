'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

interface CasoClinico {
  title: string;
  before: string;
  after: string;
  description: string;
}

export default function CasosClinicosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentCase, setCurrentCase] = useState(0);

  const casos: CasoClinico[] = [
    {
      title: 'Rehabilitación Completa con Implantes',
      before:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WV5-asqCvtvS9tJFNnX6ZgHaDg%3Fpid%3DApi&f=1&ipt=db980dbe83b8a97ae7fe60213d68e59c6b1fe0fb5d1d69ff1b245c58feb6abee&ipo=images',
      after:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.mpLwRi70VkTxnPZePpdbSAHaEK%3Fpid%3DApi&f=1&ipt=c366eaee3c3b87e85a5bf769a9ad2b5ebc69e78961c2bcedc974c778557aa40c&ipo=images',
      description:
        'Paciente de 45 años con pérdida dental múltiple. Se realizó rehabilitación completa con implantes de titanio y coronas de porcelana.',
    },
    {
      title: 'Diseño de Sonrisa con Carillas',
      before:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WV5-asqCvtvS9tJFNnX6ZgHaDg%3Fpid%3DApi&f=1&ipt=db980dbe83b8a97ae7fe60213d68e59c6b1fe0fb5d1d69ff1b245c58feb6abee&ipo=images',
      after:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.mpLwRi70VkTxnPZePpdbSAHaEK%3Fpid%3DApi&f=1&ipt=c366eaee3c3b87e85a5bf769a9ad2b5ebc69e78961c2bcedc974c778557aa40c&ipo=images',
      description:
        'Transformación estética completa mediante carillas de porcelana ultrafinas, logrando una sonrisa natural y armoniosa.',
    },
    {
      title: 'Ortodoncia Invisible',
      before:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.WV5-asqCvtvS9tJFNnX6ZgHaDg%3Fpid%3DApi&f=1&ipt=db980dbe83b8a97ae7fe60213d68e59c6b1fe0fb5d1d69ff1b245c58feb6abee&ipo=images',
      after:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.mpLwRi70VkTxnPZePpdbSAHaEK%3Fpid%3DApi&f=1&ipt=c366eaee3c3b87e85a5bf769a9ad2b5ebc69e78961c2bcedc974c778557aa40c&ipo=images',
      description:
        'Corrección de apiñamiento dental severo utilizando ortodoncia invisible en 18 meses de tratamiento.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        galleryRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % casos.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + casos.length) % casos.length);
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5491123456789?text=Hola, me gustaría agendar una cita',
      '_blank'
    );
  };

  // Verificar que currentCase esté dentro del rango válido
  const currentCaso = casos[currentCase] ?? casos[0];

  // Si no hay casos, mostrar un mensaje
  if (!currentCaso) {
    return (
      <main className="min-h-screen" ref={containerRef}>
        <Navbar />
        <div className="pt-24 text-center">
          <p>No hay casos clínicos disponibles</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              Casos Clínicos
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Descubre las transformaciones reales de mis pacientes y los
              resultados excepcionales que hemos logrado juntos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div ref={galleryRef} className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevCase}
                  className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-primary text-center">
                  {currentCaso.title}
                </h2>
                <button
                  onClick={nextCase}
                  className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                    Antes
                  </h3>
                  <img
                    src={currentCaso.before || '/placeholder.svg'}
                    alt="Antes del tratamiento"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                    Después
                  </h3>
                  <img
                    src={currentCaso.after || '/placeholder.svg'}
                    alt="Después del tratamiento"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <p className="text-gray-800 text-center mb-8 leading-relaxed">
                {currentCaso.description}
              </p>

              <div className="text-center">
                <Button
                  onClick={openWhatsApp}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  Consultar Tratamiento Similar
                </Button>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {casos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
