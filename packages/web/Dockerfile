# ================================================================
# ETAPA 1: "Builder" - Instalación de dependencias y compilación
# ================================================================
FROM node:22-alpine AS builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los package.json de la raíz y del workspace del Web
# Esto permite instalar dependencias globales y específicas del paquete
COPY package*.json ./
COPY packages/web/package.json ./packages/web/

# Instala todas las dependencias (desarrollo y producción)
RUN npm install

# Copia el resto del código fuente del monorepo
COPY . .

# ================================================================
# ETAPA 2: "Development" - Para desarrollo con hot reload
# ================================================================
FROM node:22-alpine AS dev

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia archivos para resolver el workspace Web e instalar dependencias
COPY package*.json ./
COPY packages/web/package.json ./packages/web/

# Instala dependencias de desarrollo del workspace Web
RUN npm install --workspace @dentu/web

# Expone el puerto 3001 para el Web
EXPOSE 3001

# Comando de desarrollo para hot reload
CMD ["npm", "run", "dev", "-w", "@dentu/web"]

# ================================================================
# ETAPA 3: "Production" - Imagen final optimizada para despliegue
# ================================================================
FROM node:22-alpine AS production

# Establece el directorio de trabajo en el contenedor final
WORKDIR /usr/src/app

# Copia archivos mínimos para resolver el workspace Web e instalar solo deps de producción
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json
COPY --from=builder /usr/src/app/packages/web/package.json ./packages/web/package.json

# Instala únicamente dependencias de producción del workspace Web
RUN npm ci --omit=dev --workspace @dentu/web

# Copia el código compilado del Web
COPY --from=builder /usr/src/app/packages/web/.next ./packages/web/.next
COPY --from=builder /usr/src/app/packages/web/public ./packages/web/public

# Expone el puerto 3001 para el Web
EXPOSE 3001

# Comando de inicio para producción
CMD ["npm", "run", "start", "-w", "@dentu/web"]
