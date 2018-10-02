const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "!"

/// Connection du bot 

bot.on('ready', () =>{
console.log(`Je suis connecté !`)
})

/// Avec la variable prefix, avec le prefix que tu as choisi

bot.on('message', message => {
    if (message.content === prefix + 'ping') {
      message.channel.send('pong !')
    }

/// Sans variable "...'prefix + ping')" juste une détection par message "/ping"

if(message.content === '/ping'){
    message.channel.send(':ping_pong: **La latence du serveur** ' + " est égal à " + `${Math.round(bot.ping)}` + ' **ms**')
  }
})
bot.login('NDg5NjU4NjA0MjA3NDcyNjQy.DpPrcA.rXKV6F9gDYxZ5hAEa0BQuPqot2Y')