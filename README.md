<div align="center">

# Dominio-br CLI 
[![npm version](https://img.shields.io/npm/v/dominio-br.svg?style=flat-square)](https://www.npmjs.com/package/dominio-br)
[![npm downloads](https://img.shields.io/npm/dm/dominio-br.svg?style=flat-square)](https://www.npmjs.com/package/dominio-br)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Pacote publicado no NPM (Node package manager) para realizar a consulta de domínios .br direto do terminal.
</div> 

## Sobre o projeto

Anteriormente, para consultar a disponibilidade de um domínio .br, era necessário acessar o website de uma registradora como a [RegistroBR](https://registrobr.com.br) e consultar a disponibilidade, porém eu e outros desenvolvedores precisavamos de algo mais rápido, algo direto do terminal.
O "Dominio-br" é um CLI desenvolvido com intuito de otimizar o processo de consulta de disponibilidade de domínios ".br".

## 🚀 Instalação

```bash
npm install -g dominio-br
```

## 🧠 Uso 
Para verificar se um domínio .br está disponível, execute:
```bash
dominio-br check google.com.br
```

## Exemplo de saída:
```bash
🔍 Verificando domínio: google.com.br
❌ O domínio já está registrado.
```
Ou 
```bash
🔍 Verificando domínio: meusite.com.br
✅ Disponível! Você pode registrar esse domínio.
```

## 💡 Exemplo com lista de domínios
Visando melhorar a experiência do desenvolvedor, adicionei consultas em lote, basta adicionar o comando abaixo:
```bash
dominio-br --lista lista.txt
```

Conteúdo da lista:
```bash
google
meusite
projeto-dev
```
