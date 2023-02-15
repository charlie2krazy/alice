const { MessageEmbed } = require('discord.js')
exports.run = async (client, msg, args) => {

let embed = new MessageEmbed()
.setDescription("Here is my invite to the support server\n\n\n[Server Invite](https://discord.gg/Vp4kWyFCFN)")

msg.channel.send(embed)
}

exports.help = {
    name:"support",
    usage:"!support"
}