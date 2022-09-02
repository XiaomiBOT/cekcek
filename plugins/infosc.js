let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `
Masih Private hehe
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
