'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  DollarSign,
  Calendar,
  User,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const mockTreatments = [
  {
    id: 1,
    name: 'Limpieza dental',
    price: '$15,000',
    duration: '60 min',
    count: 45,
    revenue: '$675,000',
  },
  {
    id: 2,
    name: 'Blanqueamiento',
    price: '$35,000',
    duration: '90 min',
    count: 23,
    revenue: '$805,000',
  },
  {
    id: 3,
    name: 'Ortodoncia',
    price: '$120,000',
    duration: '60 min',
    count: 18,
    revenue: '$2,160,000',
  },
  {
    id: 4,
    name: 'Implantes',
    price: '$80,000',
    duration: '120 min',
    count: 12,
    revenue: '$960,000',
  },
  {
    id: 5,
    name: 'Endodoncia',
    price: '$45,000',
    duration: '90 min',
    count: 8,
    revenue: '$360,000',
  },
  {
    id: 6,
    name: 'Extracción',
    price: '$8,000',
    duration: '30 min',
    count: 15,
    revenue: '$120,000',
  },
];

export default function TratamientosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTreatments, setFilteredTreatments] = useState(mockTreatments);

  const totalTreatments = filteredTreatments.reduce(
    (acc, t) => acc + t.count,
    0
  );
  const totalRevenue = filteredTreatments.reduce(
    (acc, t) => acc + Number.parseInt(t.revenue.replace(/[$,]/g, '')),
    0
  );

  useEffect(() => {
    gsap.fromTo(
      '.treatments-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.treatments-stats',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.treatments-table',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const filtered = mockTreatments.filter((treatment) =>
      treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTreatments(filtered);
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="treatments-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Gestión de Tratamientos
          </h1>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Tratamiento
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="treatments-stats grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Tratamientos
            </CardTitle>
            <User className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-white/80">Servicios únicos</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ingresos Totales
            </CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(totalRevenue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-white/80">Acumulado</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-500 to-sky-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Promedio por Tratamiento
            </CardTitle>
            <Calendar className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${Math.round(totalRevenue / totalTreatments / 1000)}K
            </div>
            <p className="text-xs text-white/80">Valor promedio</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="treatments-header">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-4 h-4" />
            <Input
              placeholder="Buscar tratamiento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Treatments Table */}
      <Card className="treatments-table">
        <CardHeader>
          <CardTitle className="text-primary flex items-center">
            <User className="w-5 h-5 mr-2" />
            Lista de Tratamientos
          </CardTitle>
          <CardDescription>
            Gestiona servicios, precios y estadísticas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tratamiento</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTreatments.map((treatment) => (
                <TableRow key={treatment.id} className="hover:bg-primary/5">
                  <TableCell>
                    <div className="font-medium text-primary">
                      {treatment.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <DollarSign className="w-3 h-3 mr-1 text-emerald-600" />
                      <span className="font-medium">{treatment.price}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-primary/10 bg-transparent"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
