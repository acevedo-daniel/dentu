'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, DollarSign } from 'lucide-react';

export default function NuevoTratamiento() {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo tratamiento:', formData);
    // Aquí agregarías la lógica para guardar el tratamiento en la base de datos
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-white">
      <section className="pb-16 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-primary mb-2">
                  Nuevo Tratamiento
                </h1>
                <p className="text-gray-800">Agregá un nuevo tratamiento</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre del Tratamiento */}
                <div>
                  <Label htmlFor="nombre" className="text-primary font-medium">
                    Nombre del Tratamiento
                  </Label>
                  <div className="relative mt-1">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Nombre del tratamiento"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Precio del Tratamiento */}
                <div>
                  <Label htmlFor="precio" className="text-primary font-medium">
                    Precio
                  </Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <Input
                      id="precio"
                      name="precio"
                      type="number"
                      placeholder="Precio en $"
                      className="pl-10 border-primary/20 focus:border-primary"
                      required
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-medium"
                >
                  Guardar Tratamiento
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
