export interface Template {
  id: string
  name: string
  category: string
  description: string
  icon: string
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado'
  nodes: number
}

export const categories = [
  { id: 'instagram', name: 'Instagram & Social', color: '#f43f5e' },
  { id: 'whatsapp', name: 'WhatsApp', color: '#34d399' },
  { id: 'vendas', name: 'Vendas & CRM', color: '#fbbf24' },
  { id: 'ia', name: 'IA & Conteúdo', color: '#8b5cf6' },
  { id: 'ecommerce', name: 'E-commerce', color: '#38bdf8' },
  { id: 'produtividade', name: 'Produtividade', color: '#f472b6' },
]

export const templates: Template[] = [
  { id: 'ig-comment-reply', name: 'Auto-Reply Comentários Instagram', category: 'instagram', description: 'Responde automaticamente comentários em posts com mensagens personalizadas', icon: '💬', difficulty: 'Iniciante', nodes: 5 },
  { id: 'ig-dm-responder', name: 'Instagram DM Auto-Responder', category: 'instagram', description: 'Envia DM automática para novos seguidores ou menções', icon: '✉️', difficulty: 'Iniciante', nodes: 4 },
  { id: 'ig-follower-tracker', name: 'Crescimento de Seguidores', category: 'instagram', description: 'Monitora ganhos/perdas de seguidores e envia relatório diário', icon: '📊', difficulty: 'Intermediário', nodes: 7 },
  { id: 'ig-comment-to-sheet', name: 'Comentários → Google Sheets', category: 'instagram', description: 'Captura comentários de posts e salva em planilha automaticamente', icon: '📋', difficulty: 'Iniciante', nodes: 3 },
  { id: 'ig-hashtag-scraper', name: 'Coletor de Hashtags', category: 'instagram', description: 'Coleta posts por hashtag e armazena para análise de conteúdo', icon: '#️⃣', difficulty: 'Intermediário', nodes: 6 },
  { id: 'wa-auto-reply', name: 'WhatsApp Auto-Reply', category: 'whatsapp', description: 'Responde automaticamente mensagens no WhatsApp Business', icon: '🤖', difficulty: 'Iniciante', nodes: 4 },
  { id: 'wa-broadcast', name: 'WhatsApp Broadcast', category: 'whatsapp', description: 'Envia mensagens em massa para contatos segmentados', icon: '📢', difficulty: 'Intermediário', nodes: 6 },
  { id: 'wa-lead-capture', name: 'WhatsApp → CRM', category: 'whatsapp', description: 'Captura lead do WhatsApp e registra no CRM automaticamente', icon: '👤', difficulty: 'Intermediário', nodes: 8 },
  { id: 'wa-order-notify', name: 'Notificação de Pedidos WhatsApp', category: 'whatsapp', description: 'Envia confirmação de pedido via WhatsApp automaticamente', icon: '📦', difficulty: 'Iniciante', nodes: 5 },
  { id: 'lead-email-seq', name: 'Lead → Sequência de Emails', category: 'vendas', description: 'Lead capturado dispara sequência automática de emails', icon: '📧', difficulty: 'Intermediário', nodes: 7 },
  { id: 'deal-slack-alert', name: 'Negócio Fechado → Slack', category: 'vendas', description: 'Notifica no Slack quando um deal muda de estágio', icon: '🔔', difficulty: 'Iniciante', nodes: 4 },
  { id: 'cart-recovery', name: 'Recuperação de Carrinho', category: 'vendas', description: 'Dispara sequência de recuperação para carrinhos abandonados', icon: '🛒', difficulty: 'Avançado', nodes: 10 },
  { id: 'ai-content-gen', name: 'Gerador de Conteúdo com GPT', category: 'ia', description: 'Gera artigos com IA e publica automaticamente no blog', icon: '🧠', difficulty: 'Intermediário', nodes: 8 },
  { id: 'ai-image-gen', name: 'Gerador de Imagens com IA', category: 'ia', description: 'Gera imagens com DALL-E/Stable Diffusion e publica nas redes', icon: '🎨', difficulty: 'Intermediário', nodes: 7 },
  { id: 'yt-transcript-blog', name: 'YouTube → Blog Post', category: 'ia', description: 'Transcreve vídeo do YouTube e transforma em artigo de blog', icon: '📝', difficulty: 'Avançado', nodes: 9 },
  { id: 'rss-ai-summary', name: 'RSS → Resumo → Email', category: 'ia', description: 'Agrega RSS, resume com IA e envia newsletter', icon: '📰', difficulty: 'Intermediário', nodes: 6 },
  { id: 'order-confirm-wa', name: 'Confirmação de Pedido WhatsApp', category: 'ecommerce', description: 'Confirmação automática de pedido + link de rastreio', icon: '✅', difficulty: 'Iniciante', nodes: 4 },
  { id: 'review-request', name: 'Solicitação de Review', category: 'ecommerce', description: 'Pede review automaticamente após X dias da entrega', icon: '⭐', difficulty: 'Iniciante', nodes: 5 },
  { id: 'low-stock-alert', name: 'Alerta de Estoque Baixo', category: 'ecommerce', description: 'Monitora estoque e alerta quando abaixo do mínimo', icon: '📉', difficulty: 'Intermediário', nodes: 6 },
  { id: 'email-slack-alert', name: 'Email → Slack Alert', category: 'produtividade', description: 'Encaminha emails importantes para o Slack automaticamente', icon: '⚡', difficulty: 'Iniciante', nodes: 3 },
  { id: 'calendar-reminder', name: 'Lembrete de Calendário', category: 'produtividade', description: 'Envia lembrete no WhatsApp antes de eventos do calendário', icon: '📅', difficulty: 'Iniciante', nodes: 4 },
  { id: 'webhook-logger', name: 'Webhook → Sheets Logger', category: 'produtividade', description: 'Recebe webhooks e registra dados em planilha automaticamente', icon: '🔗', difficulty: 'Intermediário', nodes: 5 },
  { id: 'scheduled-backup', name: 'Backup Automático', category: 'produtividade', description: 'Faz backup de dados em schedule e envia por email', icon: '💾', difficulty: 'Avançado', nodes: 8 },
]
