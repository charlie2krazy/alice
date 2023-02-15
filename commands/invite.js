exports.run = async (client, msg, args) => {

let { MessageEmbed } = require('discord.js')

msg.channel.send(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
}

exports.help = {
	name:"invite",
	usage:"!invite"
}