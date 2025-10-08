# 🤝 Guia de Contribuição — Dominio-br CLI

Antes de tudo, obrigado por se interessar em contribuir com o **[Dominio-br CLI](https://www.npmjs.com/package/dominio-br)**! 🚀  
Sua colaboração ajuda a tornar essa ferramenta mais útil para toda a comunidade de desenvolvedores que buscam agilidade nas consultas de domínios `.br`.

---

## 📜 Sobre o projeto

O **Dominio-br** é um **CLI (Command Line Interface)** desenvolvido em **Node.js (ESM)** que consulta, de forma rápida e prática, a disponibilidade de domínios `.br` diretamente do terminal, usando a [BrasilAPI - Registro.br](https://brasilapi.com.br/docs#tag/RegistroBR).

Além da verificação simples, o projeto inclui:
- **Consulta em lote** (`bulk`) via arquivo `.txt`;
- **Sugestão automática de variações de domínio** (`suggest`);
- **Suporte a saída em JSON** para integração com outros scripts e pipelines.

O código é modular, limpo e preparado para futuras integrações com banco de dados e APIs externas para registro de métricas ou sugestões inteligentes.

---

## 🧰 Estrutura principal
```bash
dominio-br/
├── index.js # Código principal do CLI (comandos check, suggest e bulk)
├── package.json # Configuração do projeto, scripts e binário do CLI
└── README.md # Documentação principal do pacote
```

---
## 🧠 Requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- **Node.js** v18 ou superior  
- **npm** v9 ou superior  
- (Opcional) **Git** para clonar e versionar suas alterações  

Para conferir:
```bash
node -v
npm -v
git --version
```

---

## ⚙️ Configuração do ambiente
1. Clone o repositório e instale as dependências:

```bash
  git clone https://github.com/Derickcsantos/dominio-br.git
  cd dominio-br
  npm install
```

2. Durante o desenvolvimento, você pode testar o CLI localmente com:
   
```bash
  npm link
```  

3. Isso cria um link simbólico que permite rodar:
```bash
  dominio-br check exemplo.com.br
```

4. Quando terminar de testar:
```bash
  npm unlink
```
---

## 🧩 Padrões de código
- Use ESM (import/export), conforme configurado no package.json ("type": "module").
- Utilize async/await e tratamento de erros com try/catch.
- Mantenha o código limpo, comentado e com mensagens de commit descritivas.
- Utilize chalk para mensagens coloridas no terminal (já instalado).
  
`Dica: evite adicionar dependências desnecessárias — o foco do CLI é leveza e performance.`

---

## 🧾 Convenções de commit
Para manter o histórico limpo e legível, use o padrão:
```bash
  tipo: breve descrição

  exemplo:
  feat: adiciona suporte ao comando --json
  fix: corrige erro ao ler arquivo lista.txt
  docs: atualiza README com novo exemplo
```
Tipos comuns:

- feat → nova funcionalidade
- fix → correção de bug
- docs → documentação
- refactor → melhoria de código
- chore → tarefas internas ou ajustes menores

---

## 🧑‍💻 Pull Requests
1. Crie um fork do repositório.

2. Crie uma nova branch:
```bash
git checkout -b minha-feature
```

3. Faça suas alterações e commit:
```bash
git commit -m "feat: adiciona nova opção --save"
```

4. Envie para o seu fork:
```bash
git push origin minha-feature
```

5. Abra um Pull Request descrevendo a melhoria com clareza.

---

## 💬 Suporte e Contato

Se encontrar bugs ou tiver sugestões:

Abra uma Issue no GitHub: [github.com/Derickcsantos/dominio-br/issues](https://github.com/Derickcsantos/dominio-br/issues)

Ou envie um PR diretamente com sua correção.

## 🧡 Agradecimentos

Este projeto é mantido por [Derick Campos Santos](https://linkedin.com/in/derick-campos-santos), e por todos os colaboradores que acreditam em soluções simples e open source para tornar o dia a dia de desenvolvedores mais ágil.

Se quiser apoiar:

⭐ Deixe uma estrela no repositório

🐦 Compartilhe com outros devs

🧩 Contribua com ideias, código ou documentação
