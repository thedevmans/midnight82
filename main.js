const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix, token} = require('./config.json');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => { // CHANGE THE PREFIX LATER BTW
console.log('The Custom Bot Is Online.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'report'){
   
        client.commands.get('report').execute(message, args);
   
    } else if(command === 'announcement'){

        client.commands.get('announcement').execute(message, args);

    }
});

client.login(token);