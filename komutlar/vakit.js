const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require('axios')
const config = require('../config.json')
const { MessageAttachment, MessageButton, MessageActionRow, version } = require(`discord.js`);
var prefix = config.prefix;

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
exports.run = async (client, message, args) => {

  const row = new MessageActionRow()
  .addComponents(
      new MessageButton()
          .setLabel('Destek Sunucum')
          .setURL('https://discord.gg/xspxZeh58x')
          .setEmoji('1011307210594336828')
          .setStyle('LINK'),
  
          new MessageButton()
          .setLabel('Botu Davet Et!')
          .setURL('https://discord.com/oauth2/authorize?client_id=967069819763585044&permissions=534723950656&scope=bot%20applications.commands')
          .setEmoji('1009825915125108796')
          .setStyle('LINK'),
  
          new MessageButton()
          .setLabel('Oy Ver')
          .setURL('https://top.gg/bot/967069819763585044/vote')
          .setEmoji('1011305517496418315')
          .setStyle('LINK'),
  );

  var dt = new Date();

 var tarih = (`${("Tarih", dt.getDate()).toString().padStart(2, '0')}.${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')}`
);      

  const city = args.join(' ')
  const embed = new MessageEmbed().setColor(`RANDOM`).setDescription(`Lütfen şehir adı giriniz! ${prefix}vakit istanbul`)
  if (!city) return message.reply({embeds: [embed]})

  axios.get(`https://api.collectapi.com/pray/all?data.city=${city}`, {
    headers: {
      "content-type": "application/json",
      "authorization": "apikey 6pYVygMvRqwjDKxVyfT0rY:0md2DN7JzaeL3CfHRKUM7n"
    }}).then(res => {
      const embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTimestamp()
      .setAuthor({name: message.guild.name, avatar: message.guild.iconURL()})
      .setFooter({text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL()})
      .setTitle('**Namaz Vakitleri**')
      .setThumbnail(message.guild.iconURL())
      .setDescription(`
 **Sabah Namazı:** ${res.data.result[0].saat}
 **Öğle Namazı:** ${res.data.result[2].saat}
 **İkindi Namazı:** ${res.data.result[3].saat}
 **Akşam Namazı:** ${res.data.result[4].saat}
 **Yatsı Namazı:** ${res.data.result[5].saat}
      `)    .setFooter({text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL()})
    return message.reply({embeds: [embed], components: [row] })
  }).catch(err => {
   const embed2 = new MessageEmbed().setColor(`RANDOM`).setDescription('Böyle bir şehir ismi bulunamadı. Türkçe karakter kullanmayın! \n \n``(Örnek Kullanım: .vakit sanliurfa)``')

    
    message.reply({embeds: [embed2]})
  }).catch(err => {
    console.log(err);
  })

};
exports.conf = {
  aliases: [],
};

exports.help = {
  name: "vakit",
};
