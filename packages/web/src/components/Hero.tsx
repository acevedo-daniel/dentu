'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import {
  Star,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Quote,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, rotationY: 90 },
          {
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.2'
        );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      if (statsRef.current?.children) {
        Array.from(statsRef.current.children).forEach((stat) => {
          const element = stat as HTMLElement;
          element.addEventListener('mouseenter', () => {
            gsap.to(element, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
          });
          element.addEventListener('mouseleave', () => {
            gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
          });
        });
      }

      gsap.fromTo(
        servicesRef.current?.children || [],
        { opacity: 0, y: 50, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        galleryRef.current?.children || [],
        { opacity: 0, scale: 0.8, rotationY: 45 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        testimonialsRef.current?.children || [],
        { opacity: 0, x: -100, skewX: -15 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9, rotationZ: -5 },
        {
          opacity: 1,
          scale: 1,
          rotationZ: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.8)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
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

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Principal */}
      <section
        id="inicio"
        className="pt-20 mt-8 pb-16 bg-gradient-to-br from-white to-primary/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">
                    +100 pacientes satisfechos
                  </span>
                </div>

                <h1
                  ref={titleRef}
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance"
                >
                  Tu sonrisa es mi
                  <span className="text-primary"> prioridad</span>
                </h1>

                <p
                  ref={subtitleRef}
                  className="text-xl text-gray-600 leading-relaxed text-pretty"
                >
                  Ofrezco atención odontológica integral, respaldada por
                  tecnología de vanguardia y con un firme compromiso hacia el
                  cuidado de tu salud y bienestar bucal.
                </p>
              </div>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Conocer Más
                </Button>
              </div>

              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200"
              >
                <div className="text-center cursor-pointer">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center cursor-pointer">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600">
                    Pacientes atendidos
                  </div>
                </div>
              </div>
            </div>

            <div ref={imageRef} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffotos.perfil.com%2F2025%2F04%2F10%2Fodontologa-ludmila-nocita-2001162.jpg&f=1&nofb=1&ipt=752a64a58aa515f4eba879fd220cfaae8d9c20d2d1a0ac6d5dc87b5f026a5b21"
                  alt="Dra. Sonrisa en su consulta dental"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

                <div className="absolute top-4 right-4 w-40 h-40"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Comunicate al 2345-6789
                    </div>
                    <div className="text-sm text-gray-600">
                      Estaré disponible para responder tus consultas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos tratamientos integrales con la más alta calidad y
              tecnología avanzada
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Implantes Dentales
              </h3>
              <p className="text-gray-600 mb-4">
                Recupera tu sonrisa con implantes de última generación
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Blanqueamiento
              </h3>
              <p className="text-gray-600 mb-4">
                Sonrisa más blanca y brillante en una sola sesión
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ortodoncia
              </h3>
              <p className="text-gray-600 mb-4">
                Brackets tradicionales e invisibles para todas las edades
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Odontopediatría
              </h3>
              <p className="text-gray-600 mb-4">
                Cuidado dental especializado para los más pequeños
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformaciones reales que hablan por sí solas
            </p>
          </div>

          <div
            ref={galleryRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Antes del tratamiento"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Carillas Dentales</h4>
                    <p className="text-sm">Antes del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Después del tratamiento"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Carillas Dentales</h4>
                    <p className="text-sm">Después del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Implante dental antes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Implante Dental</h4>
                    <p className="text-sm">Antes del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Implante dental después"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Implante Dental</h4>
                    <p className="text-sm">Después del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Ortodoncia antes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Ortodoncia</h4>
                    <p className="text-sm">Antes del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.cRkLw4sa3mY-8cLN6XnCjgHaKd%3Fpid%3DApi&f=1&ipt=eb440e5c0721b496f1408c3d228bffa2ffcf52b6ef8a7d9fa27de02f682377f8&ipo=images"
                  alt="Ortodoncia después"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold">Ortodoncia</h4>
                    <p className="text-sm">Después del tratamiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que dicen nuestros pacientes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de personas que confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "Excelente atención y profesionalismo. Mi sonrisa cambió
                completamente después del tratamiento de carillas. ¡Súper
                recomendado!"
              </p>
              <div className="flex items-center">
                <img
                  src="/happy-patient-woman.png"
                  alt="María González"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">María González</h4>
                  <div className="flex text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "El implante dental fue un éxito total. Sin dolor y con
                resultados increíbles. La doctora es muy profesional y
                cuidadosa."
              </p>
              <div className="flex items-center">
                <img
                  src="/happy-patient-man.png"
                  alt="Carlos Rodríguez"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Carlos Rodríguez</h4>
                  <div className="flex text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "Mi hija estaba muy nerviosa, pero la doctora la tranquilizó
                completamente. Excelente trato con los niños."
              </p>
              <div className="flex items-center">
                <img
                  src="/happy-mother-with-child.png"
                  alt="Ana Martínez"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ana Martínez</h4>
                  <div className="flex text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div ref={ctaRef} className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para transformar tu sonrisa?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Agenda tu consulta gratuita hoy mismo y descubre cómo podemos
              ayudarte a lograr la sonrisa de tus sueños
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Agendar por WhatsApp
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6" />
                <span>Horarios flexibles</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6" />
                <span>Garantía de calidad</span>
              </div>
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
