# Guia de Instalação e Configuração do n8n

## O que é n8n?

n8n é uma ferramenta de automação de fluxos de trabalho (workflows) de código aberto. Com ela, você pode conectar serviços como WhatsApp, Instagram, e-mail, Google Sheets, OpenAI, Shopify e centenas de outros — tudo visualmente, sem precisar escrever código.

Cada workflow é composto por **nós** (nodes) que representam ações: receber dados, processar informações, enviar mensagens, etc.

---

## Como Instalar o n8n

### Opção 1: Docker (recomendado para produção)

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_SECURE_COOKIE=false \
  n8nio/n8n
```

Acesse: `http://localhost:5678`

Para rodar em segundo plano:

```bash
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n
```

### Opção 2: n8n.cloud (hospedado, pago)

1. Acesse [https://app.n8n.cloud](https://app.n8n.cloud)
2. Crie sua conta
3. Escolha um plano (Free tier disponível com limites)
4. Faça o deploy instantâneo

### Opção 3: Railway (cloud grátis + fácil)

1. Acesse [https://railway.app](https://railway.app)
2. Clique em **New Project** → **Deploy from GitHub repo**
3. Use o template oficial: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)
4. Configure as variáveis de ambiente:
   - `N8N_SECURE_COOKIE=false`
   - `WEBHOOK_URL=https://seu-projeto.railway.app`
5. Railway gera uma URL pública automaticamente

### Opção 4: Instalação local com Node.js

```bash
npm install n8n -g
n8n start
```

Acesse: `http://localhost:5678`

---

## Como Importar os Templates

1. Abra o n8n no seu navegador
2. Clique em **Workflows** no menu lateral
3. Clique no botão **Import from File** (ou **Import**)
4. Selecione o arquivo `.json` do template desejado
5. O workflow será carregado com todos os nós e conexões

> **Dica:** Você também pode arrastar o arquivo `.json` diretamente para a interface do n8n.

---

## Como Configurar Credenciais

Após importar um template, você precisa conectar suas contas reais:

1. Clique em **Credentials** no menu lateral
2. Adicione uma nova credencial para cada serviço:
   - **SMTP**: servidor de e-mail, porta, usuário, senha
   - **Google Sheets**: faça login com sua conta Google
   - **OpenAI**: cole sua API Key
   - **WhatsApp Business API**: configure o acesso via Meta
   - **Instagram Graph API**: conecte sua página do Facebook/Instagram
   - **HTTP Request**: API Keys dos serviços que você consumir
3. Associe a credencial ao nó correspondente no workflow
4. Clique em **Save** em cada credencial

### Variáveis de Ambiente Recomendadas

Crie um arquivo `.env` ou configure no painel do n8n:

```
# E-mail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=sua-senha

# APIs
OPENAI_API_KEY=sk-...
INVENTORY_API_URL=https://api.seuloja.com

# WhatsApp
WA_PHONE_ID=123456789
ADMIN_PHONE=5511999999999

# Google
ORDERS_SHEET_ID=1abc...
```

No n8n, acesse **Settings** → **Environment Variables** para definir essas variáveis.

---

## Dicas e Troubleshooting

### Webhooks não estão funcionando?

- Certifique-se de que o n8n está acessível publicamente (use ngrok para testes locais)
- O webhook URL segue o formato: `https://seu-n8n.com/webhook/nome-do-webhook`
- Verifique se o método HTTP (GET/POST) está correto

### Erro de conexão com APIs?

- Confirme se as credenciais foram salvas corretamente
- Verifique se a API Key não expirou
- Teste a requisição manualmente com curl/Postman

### Workflow não dispara?

- Schedule Trigger: verifique o cron/intervalo configurado
- Webhook: veja se o webhook está com status **active** (botão "Listen" ligado)
- IF Node: verifique as condições lógicas

### Logs e Debug

- Use o nó **Code** com `console.log()` para depurar
- Ative **Workflow settings** → **Save Data Error Production** para manter dados de erro
- Clique em **Execute Workflow** para testar manualmente

### Performance

- Evite loops infinitos — use sempre um **IF Node** ou **Limit**
- Para grandes volumes, prefira **Schedule Trigger** a webhooks
- Use variáveis de ambiente em vez de valores fixos

---

## Próximos Passos

1. Comece com um workflow simples (ex: webhook-logger.json)
2. Teste a execução manual
3. Ative o workflow (botão **Active**)
4. Importe templates mais complexos conforme ganhar confiança

---

## Links Úteis

- [Documentação oficial n8n](https://docs.n8n.io)
- [Comunidade n8n no Discord](https://discord.gg/n8n)
- [n8n Cloud](https://app.n8n.cloud)
- [Marketplace de templates](https://n8n.io/workflows)
