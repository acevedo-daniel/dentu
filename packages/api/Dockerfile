# ================================================================
# ETAPA 1: "Builder" - Instalación de dependencias y compilación
# ================================================================
FROM node:22-alpine AS builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los package.json de la raíz y del workspace de la API
# Esto permite instalar dependencias globales y específicas del paquete
COPY package*.json ./
COPY packages/api/package.json ./packages/api/

# Copia el esquema de Prisma antes de instalar dependencias
COPY packages/api/prisma ./packages/api/prisma/

# Instala todas las dependencias (desarrollo y producción)
RUN npm install

# Copia el resto del código fuente del monorepo
COPY . .

# Genera el cliente de Prisma
RUN npm run prisma:generate -w @dentu/api

# Compila únicamente la API a JavaScript (output en dist)
RUN npm run build -w @dentu/api

# ================================================================
# ETAPA 2: "Production" - Imagen final optimizada para despliegue
# ================================================================
FROM node:22-alpine

# Establece el directorio de trabajo en el contenedor final
WORKDIR /usr/src/app

# Copia archivos mínimos para resolver el workspace API e instalar solo deps de producción
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json
COPY --from=builder /usr/src/app/packages/api/package.json ./packages/api/package.json

# Instala únicamente dependencias de producción del workspace API
RUN npm ci --omit=dev --workspace @dentu/api

# Copia solo el código compilado de la API
COPY --from=builder /usr/src/app/packages/api/dist ./packages/api/dist

# Copia el esquema de Prisma para el cliente generado
COPY --from=builder /usr/src/app/packages/api/prisma ./packages/api/prisma

# Expone el puerto 3000 para la API
EXPOSE 3000

# Comando de inicio para producción (ejecuta la API)
CMD ["npm", "run", "start", "-w", "@dentu/api"]
