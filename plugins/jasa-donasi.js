let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│ Dana : 082221792667
│ Pulsa : 082221792667
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
