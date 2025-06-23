#!/bin/bash

# Script de Deploy para BicasFacil
# Configura proxy reverso e domínio bicasfacil.com.br

set -e

echo "🚀 Iniciando deploy do BicasFacil..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log colorido
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then
    error "Este script precisa ser executado como root (sudo)"
    exit 1
fi

# Atualizar sistema
log "Atualizando sistema..."
apt update && apt upgrade -y

# Instalar dependências
log "Instalando dependências..."
apt install -y nginx certbot python3-certbot-nginx curl

# Parar serviços existentes
log "Parando serviços..."
systemctl stop nginx || true

# Configurar Nginx
log "Configurando Nginx..."
cp nginx.conf /etc/nginx/sites-available/bicasfacil.com.br
ln -sf /etc/nginx/sites-available/bicasfacil.com.br /etc/nginx/sites-enabled/

# Remover configuração padrão
rm -f /etc/nginx/sites-enabled/default

# Testar configuração do Nginx
log "Testando configuração do Nginx..."
nginx -t

# Iniciar Nginx
log "Iniciando Nginx..."
systemctl start nginx
systemctl enable nginx

# Configurar firewall
log "Configurando firewall..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

# Obter certificado SSL
log "Obtendo certificado SSL..."
certbot --nginx -d bicasfacil.com.br -d www.bicasfacil.com.br --non-interactive --agree-tos --email admin@bicasfacil.com.br

# Configurar renovação automática do SSL
log "Configurando renovação automática do SSL..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Criar diretório para logs
log "Criando diretórios de log..."
mkdir -p /var/log/nginx
touch /var/log/nginx/bicasfacil.com.br.access.log
touch /var/log/nginx/bicasfacil.com.br.error.log

# Configurar permissões
log "Configurando permissões..."
chown -R www-data:www-data /var/log/nginx

# Reiniciar Nginx
log "Reiniciando Nginx..."
systemctl restart nginx

# Verificar status
log "Verificando status dos serviços..."
systemctl status nginx --no-pager

echo ""
log "✅ Deploy concluído com sucesso!"
echo ""
log "📋 Próximos passos:"
echo "   1. Configure o DNS do domínio bicasfacil.com.br para apontar para este servidor"
echo "   2. Execute: NODE_ENV=production npm run dev:server"
echo "   3. Configure o PM2 para manter o servidor rodando:"
echo "      npm install -g pm2"
echo "      pm2 start npm --name 'bicasfacil' -- run dev:server"
echo "      pm2 startup"
echo "      pm2 save"
echo ""
log "🌐 Site estará disponível em: https://bicasfacil.com.br"
log "📊 Logs do Nginx: /var/log/nginx/bicasfacil.com.br.*.log" 