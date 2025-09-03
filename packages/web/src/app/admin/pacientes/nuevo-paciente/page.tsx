'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Phone, Mail, Calendar, IdCard, Home } from 'lucide-react';

export default function NuevoPaciente() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    edad: '',
    obraSocial: '',
    direccion: '',
    dni: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo paciente:', formData);
    // Aquí iría tu lógica de guardar en DB
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-white">
      <section className="pb-16 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-primary mb-2">
                  Nuevo Paciente
                </h1>
                <p className="text-gray-800">Agregá los datos del paciente</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <Label htmlFor="nombre" className="text-primary font-medium">
                    Nombre
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Apellido */}
                <div>
                  <Label
                    htmlFor="apellido"
                    className="text-primary font-medium"
                  >
                    Apellido
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      placeholder="Apellido"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <Label
                    htmlFor="telefono"
                    className="text-primary font-medium"
                  >
                    Teléfono
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="Ej: 3624xxxxxx"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email (opcional) */}
                <div>
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email (opcional)
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10 border-primary/20 focus:border-primary"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Edad */}
                <div>
                  <Label htmlFor="edad" className="text-primary font-medium">
                    Edad
                  </Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="edad"
                      name="edad"
                      type="number"
                      placeholder="Edad"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.edad}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Obra Social */}
                <div>
                  <Label
                    htmlFor="obraSocial"
                    className="text-primary font-medium"
                  >
                    Obra Social
                  </Label>
                  <div className="relative mt-1">
                    <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="obraSocial"
                      name="obraSocial"
                      type="text"
                      placeholder="Ej: OSDE, INSSSEP"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.obraSocial}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Dirección */}
                <div>
                  <Label
                    htmlFor="direccion"
                    className="text-primary font-medium"
                  >
                    Dirección
                  </Label>
                  <div className="relative mt-1">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="direccion"
                      name="direccion"
                      type="text"
                      placeholder="Ej: 9 de Julio 3125"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.direccion}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* DNI */}
                <div>
                  <Label htmlFor="dni" className="text-primary font-medium">
                    DNI
                  </Label>
                  <div className="relative mt-1">
                    <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="dni"
                      name="dni"
                      type="text"
                      placeholder="DNI sin puntos"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.dni}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium"
                >
                  Guardar Paciente
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
