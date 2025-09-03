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
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarIcon, Plus, Clock, User } from 'lucide-react';

interface AppointmentResource {
  patient: string;
  treatment: string;
  status: string;
}

interface Appointment extends Event {
  id: number;
  resource: AppointmentResource;
}

const locales = { es: es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const mockAppointments: Appointment[] = [
  {
    id: 1,
    title: 'Limpieza - María González',
    start: new Date(2024, 1, 20, 9, 0),
    end: new Date(2024, 1, 20, 10, 0),
    resource: {
      patient: 'María González',
      treatment: 'Limpieza dental',
      status: 'Confirmado',
    },
  },
  {
    id: 2,
    title: 'Consulta - Juan Pérez',
    start: new Date(2024, 1, 20, 11, 0),
    end: new Date(2024, 1, 20, 12, 0),
    resource: {
      patient: 'Juan Pérez',
      treatment: 'Consulta general',
      status: 'Pendiente',
    },
  },
  {
    id: 3,
    title: 'Ortodoncia - Ana Rodríguez',
    start: new Date(2024, 1, 21, 14, 0),
    end: new Date(2024, 1, 21, 15, 30),
    resource: {
      patient: 'Ana Rodríguez',
      treatment: 'Control ortodoncia',
      status: 'Confirmado',
    },
  },
];

export default function TurnosPage() {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  useEffect(() => {
    gsap.fromTo(
      '.turnos-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.calendar-container',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  const handleAppointmentSelect = (event: Appointment) => {
    setSelectedAppointment(event);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="turnos-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Gestión de Turnos</h1>
          <p className="text-primary/70 mt-1">Calendario de citas y horarios</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Turno
        </Button>
      </div>

      {/* Today's Appointments */}
      <div className="turnos-header grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Turnos Hoy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-white/80">3 pendientes de confirmar</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-500 to-sky-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Próximo Turno
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">09:00</div>
            <p className="text-xs text-white/80">María González - Limpieza</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <User className="w-4 h-4 mr-2" />
              Pacientes Hoy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-white/80">Diferentes pacientes</p>
          </CardContent>
        </Card>
      </div>

      {/* Calendar */}
      <Card className="calendar-container">
        <CardHeader>
          <CardTitle className="text-primary flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Calendario de Turnos
          </CardTitle>
          <CardDescription>
            Haz clic en una cita para ver los detalles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ height: '600px' }}>
            <Calendar
              localizer={localizer}
              events={mockAppointments}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={handleAppointmentSelect}
              style={{ height: '100%' }}
              messages={{
                next: 'Siguiente',
                previous: 'Anterior',
                today: 'Hoy',
                month: 'Mes',
                week: 'Semana',
                day: 'Día',
                agenda: 'Agenda',
                date: 'Fecha',
                time: 'Hora',
                event: 'Evento',
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Selected Appointment Details */}
      {selectedAppointment && (
        <Card className="calendar-container">
          <CardHeader>
            <CardTitle className="text-primary">Detalles del Turno</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-primary">Paciente</p>
                <p className="text-primary/70">
                  {selectedAppointment.resource.patient}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Tratamiento</p>
                <p className="text-primary/70">
                  {selectedAppointment.resource.treatment}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Fecha y Hora</p>
                <p className="text-primary/70">
                  {selectedAppointment.start &&
                    format(selectedAppointment.start, 'dd/MM/yyyy HH:mm', {
                      locale: es,
                    })}{' '}
                  -
                  {selectedAppointment.end &&
                    format(selectedAppointment.end, 'HH:mm', { locale: es })}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Estado</p>
                <p className="text-primary/70">
                  {selectedAppointment.resource.status}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Confirmar
              </Button>
              <Button size="sm" variant="outline">
                Editar
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-red-600 bg-transparent"
              >
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
