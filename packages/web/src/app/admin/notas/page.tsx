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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, Search, Trash2, Calendar } from 'lucide-react';

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

interface NewNote {
  title: string;
  content: string;
  category: string;
}

const mockNotes: Note[] = [
  {
    id: 1,
    title: 'Reunión de equipo',
    content:
      'Revisar protocolos de limpieza y nuevos equipos. Discutir mejoras en el proceso de atención al cliente y actualización de software.',
    date: '2024-01-15',
    author: 'Dr. Smith',
    category: 'Reunión',
  },
  {
    id: 2,
    title: 'Nuevo proveedor',
    content:
      'Contactar con proveedor de materiales dentales para mejores precios. Evaluar calidad de productos y tiempos de entrega.',
    date: '2024-01-12',
    author: 'Admin',
    category: 'Proveedor',
  },
  {
    id: 3,
    title: 'Capacitación',
    content:
      'Programar capacitación en nuevas técnicas de blanqueamiento. Coordinar con especialista externo para el próximo mes.',
    date: '2024-01-10',
    author: 'Dr. Smith',
    category: 'Capacitación',
  },
  {
    id: 4,
    title: 'Mantenimiento equipos',
    content:
      'Revisar y dar mantenimiento a equipos de rayos X. Programar calibración mensual de todos los dispositivos.',
    date: '2024-01-08',
    author: 'Técnico',
    category: 'Mantenimiento',
  },
];

export default function NotasPage() {
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [newNote, setNewNote] = useState<NewNote>({
    title: '',
    content: '',
    category: 'General',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(mockNotes);

  useEffect(() => {
    gsap.fromTo(
      '.notes-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.notes-form',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.notes-list',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [searchTerm, notes]);

  const addNote = () => {
    if (newNote.title && newNote.content) {
      const note: Note = {
        id: notes.length + 1,
        ...newNote,
        date: new Date().toISOString().split('T')[0]!,
        author: 'Admin',
      };
      setNotes([note, ...notes]);
      setNewNote({ title: '', content: '', category: 'General' });
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Reunión: 'bg-blue-100 text-blue-800',
      Proveedor: 'bg-green-100 text-green-800',
      Capacitación: 'bg-purple-100 text-purple-800',
      Mantenimiento: 'bg-orange-100 text-orange-800',
      General: 'bg-gray-100 text-gray-800',
    };
    const color = colors[category];
    if (color) {
      return color;
    }
    return colors.General!;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="notes-header">
        <h1 className="text-3xl font-bold text-primary">Notas Internas</h1>
        <p className="text-primary/70 mt-1">
          Total: {filteredNotes.length} notas
        </p>
      </div>

      {/* Search */}
      <Card className="notes-header">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-4 h-4" />
            <Input
              placeholder="Buscar notas por título, contenido o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Note Form */}
        <Card className="notes-form">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Nueva Nota
            </CardTitle>
            <CardDescription>Agregar nota interna al sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="note-title">Título</Label>
              <Input
                id="note-title"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
                placeholder="Título de la nota"
              />
            </div>

            <div>
              <Label htmlFor="note-category">Categoría</Label>
              <select
                id="note-category"
                value={newNote.category}
                onChange={(e) =>
                  setNewNote({ ...newNote, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="General">General</option>
                <option value="Reunión">Reunión</option>
                <option value="Proveedor">Proveedor</option>
                <option value="Capacitación">Capacitación</option>
                <option value="Mantenimiento">Mantenimiento</option>
              </select>
            </div>

            <div>
              <Label htmlFor="note-content">Contenido</Label>
              <Textarea
                id="note-content"
                value={newNote.content}
                onChange={(e) =>
                  setNewNote({ ...newNote, content: e.target.value })
                }
                placeholder="Escribir nota..."
                rows={6}
              />
            </div>

            <Button
              onClick={addNote}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!newNote.title || !newNote.content}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Nota
            </Button>
          </CardContent>
        </Card>

        {/* Notes List */}
        <Card className="notes-list">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Notas Recientes
            </CardTitle>
            <CardDescription>Últimas notas del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="border border-primary/20 rounded-lg p-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-primary">{note.title}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge className={getCategoryColor(note.category)}>
                        {note.category}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteNote(note.id)}
                        className="text-red-600 hover:bg-red-50 p-1"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-primary/70 mb-3 line-clamp-3">
                    {note.content}
                  </p>

                  <div className="flex justify-between items-center text-xs text-primary/50">
                    <span>Por: {note.author}</span>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {note.date}
                    </div>
                  </div>
                </div>
              ))}

              {filteredNotes.length === 0 && (
                <div className="text-center py-8 text-primary/50">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No se encontraron notas</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
