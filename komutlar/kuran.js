const axios = require("axios");
const config = require("../config.json");
const { MessageEmbed, MessageAttachment, MessageButton, MessageActionRow, version } = require(`discord.js`);
var dt = new Date();

var tarih = (`${("Tarih", dt.getDate()).toString().padStart(2, '0')}.${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')}`
);

var prefix = config.prefix;

exports.run = async (client, message, args) => {

  
    const { MessageEmbed } = require("discord.js");
    
    if (!args[0]) return message.channel.send("sure sayısı gir")
    const [suresayi, ayetsayi] = args[0].split(".");
    if (isNaN(suresayi) || isNaN(ayetsayi)) return message.channel.send("``Bir sayı Girmelisin!`` **(Örnek: .kuran 1.1)**")
axios.get(`https://api.quran.com/api/v4/quran/translations/124?verse_key=${suresayi}:${ayetsayi}`)
       .then((response) => {
            let apidata = response.data
            if(apidata.translations.length === 0){
                return message.channel.send({content: `**Böyle Bir Sure ve ya Ayet Numarası Yok.**`})
            }
            let trcumle = apidata.translations[0].text

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
        

            const embed = new MessageEmbed()
                .setTimestamp()
                .setAuthor({ name: message.guild.name, avatar: message.guild.iconURL() })
                .setThumbnail(message.guild.iconURL())
                .setColor("#42ab0e")
                .setDescription(
                    ` **Ayet Açıklaması:** ${trcumle} \n Sure:  **${suresayi}**  Ayet:  **${ayetsayi}**`)
                .setFooter({ text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL() });
            message.channel.send({ embeds: [embed], components: [row] })
        });
}
exports.conf = {
    aliases: [],
};

exports.help = {
    name: "kuran"
};
