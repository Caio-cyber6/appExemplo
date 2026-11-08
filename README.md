# appExemplo — Pipeline CI/CD Automatizada (GitHub Actions + Render)

Projeto desenvolvido para o laboratório **LAB – DevOps – Pipeline CI/CD** do **Instituto J&F**.

## 🌐 Links Oficiais
- **Repositório GitHub:** [https://github.com/Caio-cyber6/appExemplo](https://github.com/Caio-cyber6/appExemplo)
- **Aplicação Publicada (Render.com):** [https://appexemplo-9xks.onrender.com/](https://appexemplo-9xks.onrender.com/)

## 🚀 Arquitetura da Pipeline CI/CD (`.github/workflows/ci-cd.yml`)

A pipeline é dividida em dois jobs encadeados:

1. **Integração Contínua (`ci` - CI - Validação e Testes):**
   - Disparada automaticamente em qualquer `push` ou `pull_request` para a branch `main`.
   - Realiza o checkout do repositório (`actions/checkout@v4`).
   - Configura o ambiente Node.js v20 com cache de dependências (`actions/setup-node@v4`).
   - Instala as dependências de forma determinística (`npm ci`).
   - Executa a verificação estrutural de tags obrigatórias do HTML (`npm run lint`).
   - Executa a suíte de 4 testes automatizados de DOM (`npm test`).

2. **Entrega Contínua (`cd` - CD - Deploy no Render.com):**
   - Possui dependência explícita da etapa de CI (`needs: ci`).
   - Condicionada exclusivamente a eventos de `push` na branch `main` (`if: github.event_name == 'push' && github.ref == 'refs/heads/main'`).
   - Aciona o **Render Deploy Hook** utilizando o secret seguro `RENDER_DEPLOY_HOOK_URL`, validando o código de status HTTP retornado pela API do Render.
