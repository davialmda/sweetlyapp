# 🚀 Sweetly

📦 Aplicativo de delivery de doces — disciplina: **Análise e Projeto de Software**

Já pensou em um serviço Delivery especializado em doces? O Sweetly é uma aplicação para quem ama sobremesas: cookies, brigadeiros, açaí, bolos, sorvetes e muito mais.



---

## Índice
- 1) Visão rápida
- 2) Notion / Documentação
- 3) Pré-requisitos
- 4) Como rodar localmente
- 5) Histórias implementadas (US)
- 6) Evidências da Entrega 01 (checklist)
- 7) Onde colocar os arquivos / estrutura sugerida
- 8) Testes de sistema
- 9) Programação em par
- 10) Deployment
- 11) Atualizando este README
- 12) Contato

---

## 1) Visão rápida
Sweetly é um MVP de delivery de doces com funcionalidades para clientes, entregadores e gerentes das confeiterias:
- Cadastro e login de usuários
- Criação e acompanhamento de pedidos
- Painel de entregadores para visualizar e aceitar pedidos
- Painel de gerente para gerenciar usuários, pedidos e logs

---

## 2) Notion / Documentação
https://www.notion.so/258918a4b98e80a8bbbde264db92fdfe?v=258918a4b98e8075b38c000cdae19a43&source=copy_link

![Notion](Notion.png)

---

## 3) Pré-requisitos
Antes de começar, instale:
- Node.js 18+ (vem com npm)
- npm ou Yarn
- Git

---

## 4) Como rodar localmente
1. Clone o repositório:
   git clone https://github.com/davialmda/sweetlyapp.git
2. Entre na pasta e instale dependências:
   cd sweetlyapp
   npm install
3. Rodar em modo de desenvolvimento:
   npm run dev
4. Build para produção:
   npm run build
5. Variáveis de ambiente:
   - REACT_APP_API_URL (exemplo)
   - OUTRAS_VARS (exemplo)
(Atualize conforme o projeto)

---

## 5) Histórias (US) — visuais e resumo

### US01 – Cadastro de usuário  
Usuário cadastra informando nome, email e senha. Validações de dados e email existente incluídas.  
![US01](docs/images/US01(CADASTRO).png)

### US02 – Login no sistema  
Usuário realiza login com e-mail e senha. Validações de credenciais incorretas incluídas.  
![US02](docs/images/US02(LOGIN).png)

### US03 – Criar pedido de entrega  
Cliente cria pedido informando item e endereço com validação de dados.  
![US03](docs/images/US03-CRIARPEDIDO).png)

### US04 – Listar meus pedidos  
Cliente visualiza todos os pedidos realizados e acompanha os status.  
![US04](docs/images/US04(LISTARPEDIDOS).png)

### US05 – Ver pedidos disponíveis (Entregador)  
Entregador visualiza pedidos pendentes para aceitar.  
![US05](docs/images/US05(VERPEDIDOS).png)

### US06 – Aceitar pedido (Entregador)  
Entregador aceita o pedido para realizar entrega.  
![US06](docs/images/US06(ACEITARPEDIDO).png)

### US07 – Marcar pedido como entregue  
Entregador finaliza entrega e atualiza status do pedido.  
![US07](docs/images/US07(ENTREGUE).png)

### US08 – Gerenciar usuários (Gerente)  
Gerente visualiza lista de usuários e detalhes.  
![US08](docs/images/US08(GERENCIARUSUARIOS).png)

### US09 – Excluir pedido (Gerente)  
Gerente exclui pedidos incorretos ou inválidos.  
![US09](docs/images/US09(EXCLUIRPEDIDO).png)

### US10 – Logs de alteração (Gerente)  
Gerente visualiza histórico de alterações e pode filtrar informações.  
![US10](docs/images/US10(LOGS).png)

---

## 6) Evidências da Entrega 01 — Checklist (preencha)
Data da entrega: 17/10

- [ ] Seleção de histórias para implementar (pelo menos 3) — listar aqui as US escolhidas e marcar as implementadas
  - Histórias escolhidas nesta entrega: US01, US02, US03 (exemplo)
- [ ] Criação de Sprint no Trello — link do quadro + print (`docs/sprint01-board.png`)
  - Quadro Trello: <INSERIR_LINK_DO_QUADRO>
  - Sprint: Sprint 01 — início: 17/10 — fim: <INSERIR_DATA_FIM>
- [ ] Atualização do diagrama de atividades — `docs/activity-diagram-v2.png`
  - Nota: descreva rapidamente as principais mudanças
- [ ] Ambiente de versionamento atuante — commits frequentes (mínimo semanal)
  - Evidência: `docs/commits-weekly.png` (gráfico ou log)
- [ ] Deployment das novas histórias — URL pública do deploy + screencast
  - URL do deploy: <INSERIR_URL_DO_DEPLOY>
  - Screencast principal: <INSERIR_URL_DO_VÍDEO> (A URL DO DEPLOY PRECISA APARECER NO VÍDEO)
- [ ] Issue / bug tracker atualizado (no GitHub)
  - Print do filtro/issue list: `docs/issues-sprint01.png`
- [ ] Testes de Sistema — screencasts individuais por teste + relatório
  - Relatório: 
  - Screencasts: 
- [ ] Programação em par 
- [ ] Quadro da Sprint 01 atualizado refletindo a entrega 

Observação importante: marque cada item com ✅ quando concluído e anexe os arquivos em `docs/` ou insira links públicos no README.

---

## 7) Estrutura sugerida (onde colocar arquivos)
- docs/
  - images/
    - US01-CADASTRO.png
    - US02-LOGIN.png
    - ... (ou usar o mesmo nome das imagens acima)
  - sprint01-board.png
  - sprint01-backlog.png
  - activity-diagram-v2.png
  - commits-weekly.png
  - issues-sprint01.png
  - test-report-sprint01.md
  - pair-programming.md
  - recordings/
    - screencast-new-stories.mp4 (ou link externo)
    - test-cadastro.mp4
    - test-login.mp4
    - test-listagem.mp4

---

## 8) Testes de sistema (modelo de relatório)
Arquivo: `docs/test-report-sprint01.md` (preencher com os resultados)

Modelo:
- Teste: Cadastro de Usuário  
  Data: <07/10>  
  Passos:
  1. Abrir página /signup
  2. Preencher nome, email, senha
  3. Submeter formulário
  Resultado: OK / Falha (detalhar)  
  Screencast: `docs/recordings/test-cadastro.mp4` ou <URL>

- Teste: Login  
  Data: <07/10>  
  Passos: ...  
  Resultado: Funcionando 
  Screencast: 


---

## 9) Programação em par (Pair Programming)

No Backend foi realizado programação por pares nas terças-feiras.

---

## 10) Deployment
- Plataforma sugerida: 
- URL do deploy: 
- O screencast demonstrando as novas histórias deve mostrar a URL do deploy no vídeo.
- Instruções mínimas a incluir (em `docs/deploy.md` ou aqui):
  - Como configurar variáveis de ambiente
  - Passos de build e deploy (comandos)
  - Como reproduzir o ambiente localmente com as mesmas variáveis

---

## 11) Como atualizar este README
1. Adicione/atualize imagens e vídeos em `docs/` conforme a estrutura sugerida.
2. Substitua os placeholders `<INSERIR_...>` por links ou paths reais.
3. Commit e push:
   - git checkout -b feature/docs-sprint01
   - git add README.md docs/
   - git commit -m "docs(sprint01): evidências Entrega 01"
   - git push origin feature/docs-sprint01
4. Abra PR para `main` com checklist preenchido e links para issues/PRs relacionados.

---
