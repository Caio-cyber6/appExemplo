const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { parse } = require('node-html-parser');

console.log('Iniciando suíte de testes automatizados de DOM (CI)...');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const root = parse(html);

// Teste 1: Verificar título da página
const titleEl = root.querySelector('title');
assert.ok(titleEl, 'O elemento <title> deve existir');
const title = titleEl.text.trim();
assert.ok(title.includes('appExemplo'), 'O título da página deve conter "appExemplo"');
console.log('✔ Teste 1 passou: Título da página válido ->', title);

// Teste 2: Verificar cabeçalho principal h1
const h1El = root.querySelector('h1');
assert.ok(h1El, 'O elemento <h1> deve existir');
const h1Text = h1El.text.trim();
assert.strictEqual(h1Text, 'appExemplo', 'O elemento <h1> principal deve ser "appExemplo"');
console.log('✔ Teste 2 passou: Cabeçalho <h1> validado ->', h1Text);

// Teste 3: Verificar badge de status CI/CD
const badgeEl = root.querySelector('#status-badge');
assert.ok(badgeEl, 'O badge de status (#status-badge) deve existir');
const badgeText = badgeEl.text.trim();
assert.ok(badgeText.length > 0, 'O badge de status (#status-badge) deve estar preenchido');
console.log('✔ Teste 3 passou: Badge de status presente ->', badgeText);

// Teste 4: Verificar seção de detalhes da pipeline e versão
const versionEl = root.querySelector('#app-version');
assert.ok(versionEl, 'O elemento #app-version deve existir');
const versionText = versionEl.text.trim();
assert.ok(versionText.startsWith('v'), 'A versão da aplicação (#app-version) deve iniciar com "v"');
console.log('✔ Teste 4 passou: Versão identificada ->', versionText);

console.log('\nTodos os 4 testes automatizados passaram com sucesso!');
