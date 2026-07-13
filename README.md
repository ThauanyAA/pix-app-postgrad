# ⚡ PixApp — Ferramentas de IA para UX/UI

Este repositório contém o projeto prático **PixApp**, desenvolvido durante o **Módulo 02** da disciplina **Ferramentas de IA para UX e UI** da Pós-Graduação em **Engenharia de Software e IA Aplicada** da **UNIPDS**.

O objetivo principal do módulo foi compreender e aplicar o setup de projetos front-end modernos, criação de sistemas de design robustos, componentização avançada e refatoração de código com o suporte de inteligência artificial generativa, utilizando o **Antigravity IDE**, agentes autônomos e técnicas avançadas de **Engenharia de Prompt**.

---

## 🚀 Metodologia e Aprendizados do Módulo

Durante as aulas práticas, o professor demonstrou o ciclo completo de desenvolvimento de software orientado por IA, cobrindo os seguintes tópicos fundamentais:

1. **Setup de Projeto e Antigravity IDE**:
   - Inicialização e configuração de uma aplicação moderna com Angular 21.
   - Integração com o ecossistema de agentes inteligentes do **Antigravity IDE** para automação de tarefas repetitivas e geração estruturada de código.

2. **Desenvolvimento de Design Tokens**:
   - Conversão do [briefing.txt](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/briefing/briefing.txt) conceitual de identidade visual em variáveis semânticas de CSS nativo.
   - Criação de tokens de tipografia (Montserrat/Inter), paletas de cores responsivas ao tema (Azul Noturno e Verde Neon) e uma escala de espaçamento baseada em múltiplos de `4px`.
   - Implementação de suporte nativo a temas (Light/Dark mode) usando a Media Query `prefers-color-scheme` e atributos HTML no arquivo [styles.css](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/styles.css).

3. **Figma para Código (Componentização)**:
   - Análise de especificações técnicas do Dev Mode do Figma contidas em [figma-specs.txt](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/briefing/figma-specs.txt) e de mockups visuais.
   - Geração e componentização do histórico de transações ([PixHistoryComponent](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/pix-history.ts)) utilizando recursos modernos do Angular, como **Signals** para reatividade e o novo controle de fluxo `@for`.

4. **Refatoração e Acessibilidade (A11y)**:
   - Importação e limpeza de código bruto exportado de ferramentas de prototipação como o Google Stitch ([comprovante_stitch.html](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/stitch/comprovante_stitch.html)).
   - Refatoração para a arquitetura de **Standalone Components** ([PixReceiptComponent](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/pix-receipt.ts)) consumindo estritamente as variáveis globais de CSS.
   - Ajustes de acessibilidade universal (A11y) com marcações WAI-ARIA, foco de teclado coerente e suporte para leitores de tela nos componentes, como no modal de erro ([ErrorModalComponent](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/error-modal.ts)).

---

## 📂 Estrutura de Arquivos do Projeto

Abaixo estão descritos os principais caminhos e arquivos que estruturam a aplicação:

- 📁 [briefing](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/briefing): Diretório com as definições de branding e especificações extraídas do Figma.
  - [briefing.txt](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/briefing/briefing.txt) (Tokens de cores, fontes e espaçamentos base).
  - [figma-specs.txt](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/briefing/figma-specs.txt) (Layout do histórico de transações).
- 📁 [prompts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/prompts): Modelos de prompts estruturados para direcionar os agentes de IA.
  - [designs-token-generator.md](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/prompts/designs-token-generator.md) (Geração de Design Tokens em CSS).
  - [figma-to-angular.md](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/prompts/figma-to-angular.md) (Geração do extrato a partir do Figma).
  - [stitch-code-refactor.md](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/prompts/stitch-code-refactor.md) (Refatoração de código vindo do Stitch).
  - [a11y-component-generator.md](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/prompts/a11y-component-generator.md) (Melhorias de acessibilidade WCAG).
- 📁 [src/app](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app): Código-fonte da aplicação Angular.
  - [app.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/app.ts) e [app.html](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/app.html) (Componente raiz e layout da aplicação).
  - [app.routes.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/app.routes.ts) (Configuração das rotas `/pix` e `/extrato`).
  - [pix-transfer.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/pix-transfer.ts) (Lógica e formulário de envio de Pix).
  - [pix-history.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/pix-history.ts) (Histórico de transações/Extrato).
  - [pix-receipt.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/pix-receipt.ts) (Comprovante da transação realizada).
  - [error-modal.ts](file:///Users/thauanyalves/Documents/Carreira/Pos_engenharia_de_software_IA/D05_Ferramentas_UI_UX/pix-app/src/app/error-modal.ts) (Modal de erro para transações acima do limite).

---

## 🛠️ Tecnologias Utilizadas

- **Angular 21** (Standalone Components, Signals e Novo Control Flow `@for`).
- **TypeScript** para tipagem estática e segurança na aplicação.
- **CSS3 Puro** para estilização flexível, suporte nativo a temas e aplicação de Design Tokens globais.
- **Vitest** para a execução ágil de testes unitários rápidos.
- **Antigravity IDE** com agentes integrados para engenharia de software baseada em IA.

---

## 💻 Como Rodar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu ambiente de desenvolvimento.

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm start
   ```
   Acesse a aplicação no navegador em http://localhost:4200/.

3. **Rodar Testes Unitários**:
   ```bash
   npm test
   ```

---

## 🎓 Sobre a Pós-Graduação

Este repositório reflete as competências práticas desenvolvidas na pós-graduação da **UNIPDS**. O foco está na intersecção entre metodologias de design centradas no usuário (UX/UI) e as tecnologias emergentes de IA aplicada ao desenvolvimento de software de alta qualidade.
