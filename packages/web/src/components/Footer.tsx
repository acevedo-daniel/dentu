'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { MapPin } from 'lucide-react';

export function Footer() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5491123456789?text=Hola, me gustaría agendar una cita',
      '_blank'
    );
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Dra. Carolina Gonzalez</h3>
                <p className="text-sm opacity-90">Odontologa</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Apasionada por transformar sonrisas y mejorar la salud dental de
              mis pacientes con un enfoque cálido y profesional.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-90" />
                <span className="opacity-90">
                  Av. 9 de Julio 3125, Resistencia , Chaco
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 opacity-90" />
                <span className="opacity-90">3624 247285</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Agenda tu Cita</h4>
            <p className="text-sm opacity-90">
              Primera consulta gratuita para nuevos pacientes.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              <FaWhatsapp className="w-4 h-4 mr-2 inline" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
