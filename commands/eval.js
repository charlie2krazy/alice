
const { MessageEmbed } = require('discord.js')

exports.run = async (client, msg, args) => {
    if(!['922561793816146010'].includes(msg.author.id)) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      msg.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

}
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

  module.exports.help = {
    name:"eval",
    usage: 'Only for developers, thats all u gotta know',
    group: "developer"
  }
