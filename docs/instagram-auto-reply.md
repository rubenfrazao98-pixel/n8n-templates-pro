# Instagram Auto-Reply Template

Este workflow responde automaticamente a comentários no Instagram usando IA.

## Como Funciona

```
Instagram Comment → Filter Keywords → OpenAI Generate Reply → Post Reply → Log to Sheets
```

1. **Instagram Webhook**: recebe o comentário via Instagram Graph API
2. **Filter Keywords**: verifica se o comentário contém palavras como "price", "buy", "cost"
3. **Generate Reply with OpenAI**: usa GPT-4 para gerar uma resposta personalizada
4. **Post Reply to Instagram**: publica a resposta no comentário original
5. **Log to Google Sheets**: registra a interação para análise

## Pré-requisitos

- Conta comercial no Instagram conectada ao Facebook Business
- Acesso à API do Instagram Graph (v18.0+)
- Chave de API da OpenAI
- Conta do Google Sheets

## Configuração

### Credenciais Necessárias

| Nó | Credencial |
|---|---|
| Instagram Webhook | Instagram Graph API OAuth2 |
| OpenAI | API Key |
| Google Sheets | Login Google |

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária — as credenciais são configuradas diretamente nos nós.

## Testando

1. Importe o template
2. Configure as 3 credenciais
3. Ative o webhook (botão **Listen**)
4. Faça um comentário em uma publicação sua no Instagram
5. O workflow deve responder automaticamente

## Personalização

- Edite o nó **Filter Keywords** para ajustar as palavras-chave
- No nó **OpenAI**, altere o `system prompt` para mudar o tom da resposta
- Modifique a planilha do Google Sheets para capturar campos adicionais
