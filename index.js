#!/usr/bin/env node
import { Command } from "commander";
import axios from 'axios';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const program = new Command();
const args = process.argv.slice(2);

if (process.platform === "win32" && !process.env.PATH.includes("npm")) {
  console.log(
    chalk.yellow(
      "⚠️  Se o comando 'dominio-br' não for reconhecido no PowerShell, reinstale o Node.js marcando a opção 'Add to PATH', ou use 'cmd' temporariamente."
    )
  );
}



async function checkDomain(dominio, options) {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/registrobr/v1/${dominio}`);
        const status = response.data.status;

        if (options.json) {
            console.log(JSON.stringify(response.data, null, 2));
        } else { 
            if (status === "AVAILABLE") {
                console.log(chalk.green(`✅ O domínio ${dominio} está DISPONÍVEL!`));
            } else {
                console.log(chalk.red(`❌ O domínio: ${dominio} já está registrado.`));
            }
        }
    } catch(error) {
        console.error(chalk.red("Erro ao consultar domínio:", error.message ));
    }
}

function suggestDomain(dominio, options) {
    const base = dominio.split(".")[0];

    const suggestions = [
        `${base}.app.br`,
        `${base}.dev.br`,
        `${base}.art.br`,
        `${base}.ong.br`,
        `${base}.blog.br`,
        `${base}.net.br`,
        `${base}.api.br`,
        `${base}.social.br`,
        `${base}.tv.br`,
        `${base}.ia.br`,
        `${base}.tec.br`,
    ];

    if (options.json) {
        console.log(JSON.stringify({ suggestions }, null, 2));
    } else {
        console.log(chalk.blue(`Sugestões para ${dominio}`));
        suggestions.forEach(s => console.log(chalk.yellow(`👉 ${s}`)));
    }
}

async function bulkCheck(filePath, options) {
    try {
        const absolutePath = path.resolve(process.cwd(), filePath);
        if(!fs.existsSync(absolutePath)) {
            console.log(chalk.red(`Arquivo não encontrado: ${absolutePath}`));
            process.exit(1);
        }

        const content = fs.readFileSync(absolutePath, "utf-8");
        const domains = content
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);

            if (domains.length === 0) {
                console.log(chalk.yellow(`Nenhum domínio encontrado no arquivo.`));
                return;
            }

            console.log(chalk.blue(`Consultando ${domains.length} domínios...\n`));

            const results = [];

            for (const dominio of domains) {
      try {
        const response = await axios.get(`https://brasilapi.com.br/api/registrobr/v1/${dominio}`);
        const status = response.data.status;

        results.push({
          dominio,
          status,
        });

        if (!options.json) {
          const color =
            status === "AVAILABLE" ? chalk.green : chalk.red;
          console.log(color(`${status === "AVAILABLE" ? "✅" : "❌"} ${dominio} → ${status.toUpperCase()}`));
        }
      } catch (error) {
        results.push({ dominio, status: "erro", message: error.message });
        if (!options.json) console.log(chalk.red(`⚠️ Erro ao consultar ${dominio}: ${error.message}`));
      }
    }

    if (options.json) {
      console.log(JSON.stringify(results, null, 2));
    }

  } catch (error) {
    console.error(chalk.red("Erro no comando bulk:"), error.message);
  }
}

program
    .name("dominio-br")
    .description("CLI para consultar domínios .br  usando a API do Registro.br")
    .version("1.0.0");

program 
    .command("check <dominio>")
    .description("Verifica se um domínio está disponível")
    .option("--json", "Retorna a saida em formato JSON")
    .action(checkDomain);

program
    .command("suggest <dominio>")
    .description("Sugere variações para um domínio")
    .option("--json", "Retorna a saída em formato JSON")
    .action(suggestDomain);

program
    .command("bulk <arquivo>")
    .description("Verifica em massa os domínios listados em um arquivo de texto")
    .option("--json", "Retorna a saída em formato JSON")
    .action(bulkCheck);

program.parse(process.argv);