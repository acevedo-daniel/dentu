# 🦷 Dentu - API Backend

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17.6-blue.svg)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.4.5-red.svg)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-✓-blue.svg)](https://www.docker.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.15.0-purple.svg)](https://www.prisma.io/)

> **Dentu** es una API backend moderna construida con Node.js, TypeScript, PostgreSQL y Redis, diseñada para aplicaciones de gestión dental con arquitectura de microservicios.

## 📋 Tabla de Contenidos

- [🚀 Características](#-características)
- [🏗️ Arquitectura](#️-arquitectura)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Requisitos Previos](#️-requisitos-previos)
- [🛠️ Instalación](#️-instalación)
- [🐳 Docker](#-docker)
- [🔧 Desarrollo](#-desarrollo)
- [📊 Base de Datos](#-base-de-datos)
- [🧪 Testing](#-testing)
- [📦 Despliegue](#-despliegue)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

## 🚀 Características

- **🔄 Hot Reload** - Desarrollo con recarga automática usando `tsx`
- **🗄️ Base de Datos** - PostgreSQL 17.6 con Prisma ORM
- **⚡ Cache** - Redis para optimización de rendimiento
- **🐳 Docker** - Contenedores para desarrollo y producción
- **📝 TypeScript** - Tipado estático completo
- **🔒 Seguridad** - JWT, Helmet, CORS configurado
- **📊 Logging** - Pino con formateo bonito
- **🏗️ Monorepo** - Estructura modular escalable

## 🏗️ Arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Gateway   │    │   Microservices │
│   (Next.js)     │◄──►│   (Express)     │◄──►│   (Node.js)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   PostgreSQL    │
                       │   + Redis       │
                       └─────────────────┘
```

## 📁 Estructura del Proyecto

```
dentu-develop/
├── 📁 packages/
│   ├── 📁 api/                          # API Backend Principal
│   │   ├── 📁 src/                      # Código fuente
│   │   │   ├── 📄 index.ts              # Punto de entrada
│   │   │   ├── 📁 controllers/          # Controladores
│   │   │   ├── 📁 services/             # Lógica de negocio
│   │   │   ├── 📁 middleware/           # Middlewares
│   │   │   ├── 📁 routes/               # Rutas de la API
│   │   │   └── 📁 utils/                # Utilidades
│   │   ├── 📁 prisma/                   # Base de datos
│   │   │   ├── 📄 schema.prisma         # Esquema de Prisma
│   │   │   └── 📁 migrations/           # Migraciones
│   │   ├── 📄 Dockerfile                # Docker para API
│   │   ├── 📄 package.json              # Dependencias API
│   │   └── 📄 tsconfig.json             # Config TypeScript
│   ├── 📁 web/                          # Frontend (futuro)
│   └── 📁 whatsapp-bot/                 # Bot WhatsApp (futuro)
├── 📁 docker/
│   └── 📁 init/                         # Scripts de inicialización
│       └── 📄 01-init.sql               # Migración inicial
├── 📄 .env                              # Variables de entorno
├── 📄 .dockerignore                     # Archivos ignorados por Docker
├── 📄 docker-compose.yml                # Orquestación de servicios
├── 📄 package.json                      # Dependencias raíz
├── 📄 tsconfig.json                     # Config TypeScript raíz
└── 📄 README.md                         # Este archivo
```

## ⚙️ Requisitos Previos

### **Software Requerido:**

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Docker Desktop** 4.x o superior
- **Git** 2.x o superior

### **Requisitos del Sistema:**

- **RAM**: Mínimo 8GB (recomendado 16GB)
- **Almacenamiento**: 10GB de espacio libre
- **Sistema Operativo**: Windows 10+, macOS 10.15+, Ubuntu 20.04+

## 🛠️ Instalación

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/acevedo-daniel/dentu.git
cd dentu-develop
```

### **2. Instalar Dependencias**

```bash
npm install
```

### **3. Configurar Variables de Entorno**

Crear archivo `.env` en la raíz del proyecto:

```bash
# Base de datos
DATABASE_URL="postgresql://dentu_user:dentu_password@postgres:5432/dentu_db?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"

# Servidor
PORT=3000
NODE_ENV=development

# Redis
REDIS_URL="redis://redis:6379"

# CORS
CORS_ORIGIN="http://localhost:3000"

# Logging
LOG_LEVEL="info"
```

### **4. Generar Cliente Prisma**

```bash
npx prisma generate --schema=packages/api/prisma/schema.prisma
```

## 🐳 Docker

### **Levantar Servicios Completos**

```bash
# Desarrollo con hot reload
docker-compose up --build

# En segundo plano
docker-compose up -d --build
```

### **Servicios Disponibles**

| Servicio       | Puerto | Descripción                      |
| -------------- | ------ | -------------------------------- |
| **API**        | 3000   | Backend principal con hot reload |
| **PostgreSQL** | 5432   | Base de datos principal          |
| **Redis**      | 6379   | Cache y sesiones                 |

### **Comandos Docker Útiles**

```bash
# Ver logs en tiempo real
docker-compose logs -f api-dev

# Ejecutar comandos en el contenedor
docker-compose exec api-dev npm run prisma:generate

# Rebuild de un servicio específico
docker-compose build api-dev

# Detener todos los servicios
docker-compose down

# Limpiar volúmenes (¡CUIDADO! Borra datos)
docker-compose down -v
```

## 🔧 Desarrollo

### **Scripts Disponibles**

```bash
# Desarrollo local (sin Docker)
npm run dev:api

# Build del proyecto
npm run build

# Linting
npm run lint

# Formateo de código
npm run format
```

### **Estructura de la API**

```typescript
// packages/api/src/index.ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡La API de Dentu está viva! 🎉');
});

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
```

### **Hot Reload con tsx**

El proyecto usa `tsx` para desarrollo con recarga automática:

- **Compilación instantánea** de TypeScript
- **Recarga automática** al cambiar archivos
- **Logs formateados** con pino-pretty

## 📊 Base de Datos

### **PostgreSQL 17.6**

- **Motor**: PostgreSQL con Alpine Linux
- **Persistencia**: Volúmenes Docker
- **Migraciones**: Automáticas al levantar Docker
- **Backup**: Configurado con volúmenes persistentes

### **Prisma ORM**

```prisma
// packages/api/prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

### **Migraciones**

```bash
# Crear nueva migración
npx prisma migrate dev --name nombre_migracion --schema=packages/api/prisma/schema.prisma

# Aplicar migraciones en producción
npx prisma migrate deploy --schema=packages/api/prisma/schema.prisma

# Reset de base de datos (desarrollo)
npx prisma migrate reset --schema=packages/api/prisma/schema.prisma
```

### **Redis Cache**

- **Versión**: 7.4.5 Alpine
- **Persistencia**: Volúmenes Docker
- **Uso**: Cache, sesiones, colas de trabajo

## 🧪 Testing

### **Framework de Testing**

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

### **Configuración de Tests**

- **Jest** como framework principal
- **ts-jest** para TypeScript
- **Supertest** para testing de API
- **Coverage** con reportes HTML

## 📦 Despliegue

### **Entornos Disponibles**

- **Development**: `docker-compose up --build`
- **Staging**: `docker-compose -f docker-compose.staging.yml up -d`
- **Production**: `docker-compose -f docker-compose.prod.yml up -d`

### **Variables de Entorno por Entorno**

```bash
# Development
NODE_ENV=development
DATABASE_URL=postgresql://dentu_user:dentu_password@postgres:5432/dentu_db

# Production
NODE_ENV=production
DATABASE_URL=${DATABASE_URL}
JWT_SECRET=${JWT_SECRET}
```

### **Docker en Producción**

```bash
# Build de imagen de producción
docker build -f packages/api/Dockerfile -t dentu-api:latest .

# Ejecutar en producción
docker run -d -p 3000:3000 --env-file .env.prod dentu-api:latest
```

## 🤝 Contribución

### **Flujo de Trabajo**

1. **Fork** del repositorio
2. **Crear** rama para feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** de cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crear** Pull Request

### **Estándares de Código**

- **ESLint** para linting
- **Prettier** para formateo
- **TypeScript** estricto
- **Conventional Commits** para mensajes

### **Pre-commit Hooks**

```bash
# Configurado con Husky
npm run prepare

# Hooks automáticos:
# - ESLint
# - Prettier
# - TypeScript check
```

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🆘 Soporte

### **Problemas Comunes**

#### **Docker no inicia**

```bash
# Verificar que Docker Desktop esté ejecutándose
docker --version
docker ps
```

#### **Puerto ya en uso**

```bash
# Cambiar puerto en docker-compose.yml
ports:
  - '3001:3000'  # Usar puerto 3001
```

#### **Base de datos no conecta**

```bash
# Verificar variables de entorno
cat .env

# Rebuild de servicios
docker-compose down
docker-compose up --build
```

### **Recursos Adicionales**

- [📚 Documentación de Prisma](https://www.prisma.io/docs/)
- [🐳 Docker Documentation](https://docs.docker.com/)
- [📖 TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [🔗 Express.js Guide](https://expressjs.com/en/guide/routing.html)

### **Contacto**

- **GitHub**: [@acevedo-daniel](https://github.com/acevedo-daniel)
- **Issues**: [Reportar Bug](https://github.com/acevedo-daniel/dentu/issues)
- **Discussions**: [Discutir Ideas](https://github.com/acevedo-daniel/dentu/discussions)

---

**¡Gracias por usar Dentu! 🦷✨**

_Desarrollado con ❤️ por el equipo de Dentu_
