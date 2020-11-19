module.exports = {
    name: 'announcement',
    description: ("Sends an announcement."),
    execute(message, args){
        
        if(!args[0]){
            message.channel.send("Please use the following format:\n\n``P!announcement [Announcement Message]``")
        }

        let announcementsChannel = message.guild.channels.cache.get('772877698132475934');
        let announcement = args.slice(0).join(" ");

        message.delete()
        announcementsChannel.send(announcement)
    }
}