const fs = require('fs');
const cheerio = require('cheerio');

console.log('Iniciando suíte de testes automatizados com Cheerio...');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

const title = $('title').text();
if (!title) {
  console.error('Teste falhou: Tag title não encontrada.');
  process.exit(1);
}
console.log('✔ Teste passou: Tag title presente ->', title);
