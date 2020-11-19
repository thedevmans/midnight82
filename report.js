module.exports = {
    name: 'report',
    description: ("Report a user."),
    execute(message, args){
        
        const Discord = require('discord.js');

        if (!args[1]){
            message.delete()
            const invalidCommandEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Invalid Command')
            .setDescription("Please use the following format:\n\n``P!report [Mention User] Reason``.");
            message.channel.send(invalidCommandEmbed);
            return
        }

        if (message.mentions.members.size != 1){
            message.delete()
            const mentionUserEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Invalid Command')
            .setDescription("Please use the following format:\n\n``P!report [Mention User] Reason``.");
            message.channel.send(mentionUserEmbed);
            return
        }

        message.delete()

        let mentionedUser = args[0];

        let reason = args.slice(1).join(" ");

        let logsChannel = message.guild.channels.cache.get('772878246047645736');
        let DMUser = message.guild.owner;

        const newReportEmbed = new Discord.MessageEmbed()
        .setColor('#ff5500')
        .setTitle('A New Report Was Made')
        .setDescription(`User: ${message.member}\nReported User: ${mentionedUser}Reason: ${reason}`);
        logsChannel.send(newReportEmbed);
        DMUser.send(newReportEmbed);

        const successEmbed = new Discord.MessageEmbed()
        .setColor('#00ff0d')
        .setTitle(':white_check_mark: Report Has Been Made.');
        message.channel.send(successEmbed);
        

    }
}