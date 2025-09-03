'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  CalendarIcon,
  Activity,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPanel() {
  useEffect(() => {
    gsap.fromTo(
      '.stat-card',
      { opacity: 0, scale: 0.8, rotationY: 45 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      }
    );

    gsap.fromTo(
      '.quick-action',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="text-primary/70 mt-2">
          Resumen general de la clínica dental
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card bg-gradient-to-br from-primary to-primary/80 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pacientes
            </CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-white/80">Pacientes</p>
          </CardContent>
        </Card>

        <Card className="stat-card bg-gradient-to-br from-sky-500 to-sky-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citas Hoy</CardTitle>
            <CalendarIcon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-white/80">Citas</p>
          </CardContent>
        </Card>

        <Card className="stat-card bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tratamientos</CardTitle>
            <Activity className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-white/80">Tratamientos</p>
          </CardContent>
        </Card>

        <Card className="stat-card bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <TrendingUp className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.4M</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="quick-action hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-between">
              Gestionar Pacientes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardTitle>
            <CardDescription>
              Ver y administrar todos los pacientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/pacientes">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Users className="w-4 h-4 mr-2" />
                Ir a Pacientes
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="quick-action hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-between">
              Calendario de Turnos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardTitle>
            <CardDescription>Gestionar citas y horarios</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/turnos">
              <Button className="w-full bg-sky-500 hover:bg-sky-600">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Ver Calendario
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="quick-action hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-between">
              Tratamientos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardTitle>
            <CardDescription>Administrar servicios y precios</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/tratamientos">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                <Activity className="w-4 h-4 mr-2" />
                Ver Tratamientos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
    </div>
  );
}
