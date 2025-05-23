// Importation des modules
const { Client, GatewayIntentBits, Events } = require('discord.js');
const axios = require("axios");
require('dotenv').config();

// Création du client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ]
});

async function AskToClaude(msg) {
    const responde = await axios.post("https://api.anthropic.com/v1/messages")
    {
        model: claude-3-opus-20240229
        max_tokens: 1000
        temparature: 0.7
        messages: [
            {
                role: "user",
                content: msg
            }
        ]
    }, 
    {
        headers: {
            "x-api-key": process.env.claudeApiKey,
            "anthropic-version": "2023-06-1",
            "content-type": "application/json"
        }
    }
    return responde
}



// Quand le bot est prêt
client.once(Events.ClientReady, () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

// Répond à un message contenant "ping"
client.on(Events.MessageCreate, message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'ping') {
    message.reply('🏓 Pong !');
  }
  if (message.channel.type = 1 && message.auther.id ) {
    const response = AskToCLaude
    msg.reply(response)
  }
});

// Connexion au bot
client.login(process.env.TOKEN);
