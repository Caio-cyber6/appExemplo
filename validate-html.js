const fs = require('fs');
const path = require('path');

console.log('Iniciando verificação estrutural do arquivo index.html...');

const filePath = path.join(__dirname, 'index.html');
if (!fs.existsSync(filePath)) {
  console.error('ERRO: Arquivo index.html não encontrado na raiz do projeto!');
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf-8');

const requiredTags = ['<!DOCTYPE html>', '<html', '<head>', '<meta charset="UTF-8">', '<title>', '<body>', '</html>'];
for (const tag of requiredTags) {
  if (!content.includes(tag)) {
    console.error(`ERRO DE VALIDAÇÃO: Tag obrigatória ausente: ${tag}`);
    process.exit(1);
  }
}

console.log('✔ Verificação estrutural (Lint HTML) concluída com sucesso!');
