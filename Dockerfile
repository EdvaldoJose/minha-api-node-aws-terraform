# Etapa 1 - build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Copia e instala dependências
COPY package*.json ./
RUN npm ci --omit=dev

# Copia todo o código (inclusive prisma/)
COPY . .

# Etapa 2 - runtime
FROM node:20-alpine
WORKDIR /usr/src/app

# Copia da build
COPY --from=builder /usr/src/app .

# Instala utilitários necessários
RUN apk add --no-cache bash netcat-openbsd

# Permissões para o script de start
RUN chmod +x scripts/start.sh

ENV NODE_ENV=production
EXPOSE 3000

# Start automático via script
CMD ["/bin/sh", "./scripts/start.sh"]

# Comando alternativo para start manual
