const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(' ');
  
      
if (mesaj.length < 1) 
  
  var yazi = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('Birşeyler Yaz')
      .setFooter("OFRP FiveM", 'https://static.wixstatic.com/media/1035f8_6ce8f67eb278417593c9e27446f32ddb~mv2.png/v1/fill/w_640,h_900,al_c,q_90,usm_0.66_1.00_0.01/1035f8_6ce8f67eb278417593c9e27446f32ddb~mv2.webp')
  
  return message.channel.sendEmbed(yazi);

  message.delete();

  console.log(`Announcement: "${message.author.username}# ${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')
      .setFooter("OFRP FiveM", 'https://static.wixstatic.com/media/1035f8_6ce8f67eb278417593c9e27446f32ddb~mv2.png/v1/fill/w_640,h_900,al_c,q_90,usm_0.66_1.00_0.01/1035f8_6ce8f67eb278417593c9e27446f32ddb~mv2.webp')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Message successfully sent to **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** .`);

};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: false, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: [], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: 0,
	/**

	0 = Yetki gerekmez.
	1 - Mesajları Yönet yetkisi gerekir.
	2 - Üyeleri At yetkisi gerekir.
	3 - Yönetici yetkisi gerekir.
	4 - Bot sahibi yetkisi gerekir.

	*/
	kategori: 'beta' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
}

exports.help = { // Ana ayarları belirtiyoruz.
	komut: 'massdm', // Komutu belirtiyoruz.
	aciklama: 'Bu bir örnek komuttur.', // Yardımda gözüken açıklamayı belirtiyoruz.
	kullanim: 'özel' // Yardımda gözükecek kullanımı belirtiyoruz.
}
