require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// METS L'ID DE TON SALON ICI
const GHOSTPING_CHANNEL_ID = "123456789012345678";

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} online`);
  client.user.setActivity('Sera Bots', { type: ActivityType.Watching });
});

client.on('guildMemberAdd', async (member) => {
  try {
    const channel = await member.guild.channels.fetch(GHOSTPING_CHANNEL_ID);
    if (!channel) return;

    // GHOSTPING
    const msg = await channel.send(`${member}`);
    setTimeout(() => msg.delete().catch(()=>{}), 1000);

    // Embed après
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setAuthor({ name: 'Sera Bots', iconURL: client.user.displayAvatarURL() })
      .setDescription(`Bienvenue ${member} sur **${member.guild.name}** !\nNous sommes **${member.guild.memberCount}** membres{
  "name": "sera-bots",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "discord.js": "^14.14.1",
    "dotenv": "^16.3.1"
  }
}  
