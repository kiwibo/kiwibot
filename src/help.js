const help = (prefix) => {
	return `> BOTKIWI
return `> criador > https://wa.me/556499747515
              ↓COMANDOS↓

command : *${prefix}fig* or *${prefix}figu*
desc : converter imagem/gif/vídeo em adesivo
usage : responder imagem/gif/vídeo ou enviar imagem/gif/ vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}toimg*
desc : converter figurinha para imagem
usage : adesivo de resposta\n
command : *${prefix}tfig* ou *${prefix}tfigu*
desc : converter texto em adesivo
usage : *${prefix}texto do adesivo aqui*\n
> *Meme Comandos* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [português]
usage : apenas envie mensagem\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : apenas envie o comando\n
> *Outros comandos* <
command : *${prefix}gtts*
desc : converter texto em fala/áudio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : apenas envie o comando\n
command : *${prefix}url2img*
desc : tirar uma captura de tela da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi sua mensagem*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : procure anime com imagem [ O que anime é isso/aquilo]
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}setprefix*
desc : substituir superflix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Comandos de grupo* <
command : *${prefix}add*
desc : adicionar membro no grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}ban*
desc : remover membro do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promover*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promover @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}rebaixar*
desc : tornar o administrador do grupo como membro comum do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}sair*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também, quem achar ruim foda-se
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo\n
command : *${prefix}simih*
desc : ativa modo somi no grupo
usage : *${prefix}simih 1* para desativar modo simi *${prefix}simih 0* to deactivate simi mode
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
