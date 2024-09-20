#!/bin/bash

# Definição de cores
GREEN='\033[0;32m'  # Cor verde
RED='\033[0;31m'    # Cor vermelha
YELLOW='\033[1;33m' # Cor amarela
NC='\033[0m'        # Sem cor (para resetar)

# Atualização de Sistema
echo -e "${YELLOW}Atualizando Sistema...${NC}"

sudo apt update && sudo apt upgrade -y

# Verificação Java
echo -e "${YELLOW}Procurando Java no sistema...${NC}"
java -version
if [ $? = 0 ]; then
  echo -e "${GREEN}Java instalado${NC}"
else
  echo -e "${RED}Java não instalado${NC}"
  echo -e "${YELLOW}Gostaria de instalar o Java? [s/n]${NC}"
  read get
  if [ "$get" == "s" ]; then
    sudo apt install openjdk-23-jre -y
  fi
fi

# Verificação Node
echo -e "${YELLOW}Procurando Node no sistema...${NC}"
node --version
if [ $? = 0 ]; then
  echo -e "${GREEN}Node instalado${NC}"
else
  echo -e "${RED}Node não instalado${NC}"
  echo -e "${YELLOW}Gostaria de instalar o Node? [s/n]${NC}"
  read get
  if [ "$get" == "s" ]; then
    sudo apt install nodejs -y
  fi
fi

echo
echo -e "${YELLOW}Versão Java:${NC}"
java -version
echo
echo -e "${YELLOW}Versão Node:${NC}"
node --version
echo

echo -e "${GREEN}Pressione qualquer tecla para finalizar.${NC}"
read get
