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
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Users,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Phone,
  Mail,
} from 'lucide-react';

const mockPatients = [
  {
    id: 1,
    name: 'María González',
    phone: '+54 11 1234-5678',
    email: 'maria@email.com',
    lastVisit: '2024-01-15',
    status: 'Activo',
    treatments: 3,
  },
  {
    id: 2,
    name: 'Juan Pérez',
    phone: '+54 11 2345-6789',
    email: 'juan@email.com',
    lastVisit: '2024-01-10',
    status: 'Activo',
    treatments: 1,
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    phone: '+54 11 3456-7890',
    email: 'ana@email.com',
    lastVisit: '2023-12-20',
    status: 'Inactivo',
    treatments: 5,
  },
  {
    id: 4,
    name: 'Carlos López',
    phone: '+54 11 4567-8901',
    email: 'carlos@email.com',
    lastVisit: '2024-01-12',
    status: 'Activo',
    treatments: 2,
  },
  {
    id: 5,
    name: 'Laura Martín',
    phone: '+54 11 5678-9012',
    email: 'laura@email.com',
    lastVisit: '2024-01-08',
    status: 'Activo',
    treatments: 4,
  },
];

export default function PacientesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);

  useEffect(() => {
    gsap.fromTo(
      '.patients-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.patients-table',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const filtered = mockPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm)
    );
    setFilteredPatients(filtered);
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="patients-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Gestión de Pacientes
          </h1>
          <p className="text-primary/70 mt-1">
            Total: {filteredPatients.length} pacientes
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Paciente
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="patients-header">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-4 h-4" />
              <Input
                placeholder="Buscar por nombre, email o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card className="patients-table">
        <CardHeader>
          <CardTitle className="text-primary flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Lista de Pacientes
          </CardTitle>
          <CardDescription>
            Gestiona la información de todos los pacientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead>Última Visita</TableHead>
                <TableHead>Tratamientos</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id} className="hover:bg-primary/5">
                  <TableCell>
                    <div>
                      <div className="font-medium text-primary">
                        {patient.name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Phone className="w-3 h-3 mr-1 text-primary/50" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-3 h-3 mr-1 text-primary/50" />
                        {patient.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-primary/10">
                      {patient.treatments} tratamientos
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        patient.status === 'Activo' ? 'default' : 'secondary'
                      }
                      className={
                        patient.status === 'Activo' ? 'bg-green-500' : ''
                      }
                    >
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-primary/10 bg-transparent"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
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
