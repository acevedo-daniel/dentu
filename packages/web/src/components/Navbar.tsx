'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5491123456789?text=Hola, me gustaría agendar una cita',
      '_blank'
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">
                Carolina Gonzalez
              </h1>
              <p className="text-sm text-muted-foreground">Odontologa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/conoceme"
              className="text-foreground hover:text-primary transition-colors"
            >
              Quien Soy
            </Link>
            <Link
              href="/especialidades"
              className="text-foreground hover:text-primary transition-colors"
            >
              Especialidades
            </Link>
            <Link
              href="/casos-clinicos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Casos Clínicos
            </Link>
            <Link
              href="/donde-estoy"
              className="text-foreground hover:text-primary transition-colors"
            >
              Dónde Estoy
            </Link>
            <Button
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              Agendar Turno
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/conocenos"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conócenos
              </Link>
              <Link
                href="/especialidades"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </Link>
              <Link
                href="/casos-clinicos"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos Clínicos
              </Link>
              <Link
                href="/donde-estamos"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dónde Estamos
              </Link>
              <Button
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Agendar Turno
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
