#!/bin/bash

# Definição de cores
GREEN='\033[0;32m'  # Cor verde
RED='\033[0;31m'    # Cor vermelha
YELLOW='\033[1;33m' # Cor amarela
NC='\033[0m'        # Sem cor (para resetar)

echo -e "${YELLOW}Instalando dependências do Node...${NC}"
npm i

echo -e "${YELLOW}Iniciando o servidor Node...${NC}"
npm start
