#!/bin/sh

# Porta padrão
PORT=${PORT:-3000}

# Função pra checar se a porta está ocupada
is_port_in_use() {
  nc -z localhost $1 >/dev/null 2>&1
}

# Incrementa se a porta estiver ocupada
while is_port_in_use $PORT; do
  echo "⚠️ Porta $PORT já está em uso, tentando próxima..."
  PORT=$((PORT+1))
done

echo "✅ Usando porta $PORT"
export PORT

# Atualiza ou cria o .env com a porta atual
echo "PORT=$PORT" > .env
echo "DATABASE_URL=postgresql://user:password@db:5432/minha_api?schema=public" >> .env

# Espera o PostgreSQL subir
echo "⏳ Aguardando o banco de dados inicializar..."
until nc -z db 5432; do
  echo "⏳ Ainda aguardando o PostgreSQL..."
  sleep 2
done

echo "✅ Banco de dados pronto!"

# Executa migrações Prisma (garante caminho fixo)
echo "🚀 Executando migrações do Prisma..."
npx prisma migrate deploy --schema=./prisma/schema.prisma

# Inicia o servidor Node
echo "🚀 Iniciando aplicação Node.js na porta $PORT..."
node src/server.js

