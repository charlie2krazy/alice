const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  try{
					
		let user = message.mentions.members.first()
		if(!user) return message.channel.send('<a:no:784463793366761532> **You need to mention the user**')

		let role = message.guild.roles.cache.find(r => r.id === args[1].toString());
    
		if(!role) return message.channel.send('<a:no:784463793366761532> **You need to mention the role**')
		if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('<a:no:784463793366761532> **Role Is Currently Higher Than Me Therefore Cannot Add It To The User**')

		message.channel.send(`<a:yes:784463701305458708> ${user} **now has the** ${role} **role**`)
		user.roles.add(role).catch(console.error);
		}
		catch(e) {
			return message.channel.send('<a:no:784463793366761532> **An error occurred, please try again**');
		}
  }

exports.help = {
	name:"giveadmin",
	usage:"!giveadmin @member @role"
}