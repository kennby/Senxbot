const fs = require('fs')
const chalk = require('chalk')

//tarjeta v del propietario
global.ytname = "https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v" //nombre de tu canal de yt
global.socialm = "https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v" //nombre de tu github o insta
global.location = "America, Lima-Peru" //tu ubicación

//nuevo
global.botname = 'onyx' //nombre de tu bot
global.ownernumber = '51902247905' //número del propietario
global.ownername = 'kenn' //nombre del propietario
global.websitex = "https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v"
global.wagc = "https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v"
global.themeemoji = '🪀'
global.wm = "Bot onyx."
global.botscript = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //enlace del script
global.packname = "Sticker By"
global.author = "onyx"
global.creator = "51902247905@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["51902247905"] // Usuario Premium
global.hituet = 0

//configuración del bot
global.typemenu = 'v8' // tipo de menú 'v1' => 'v8'
global.typereply = 'v2' // tipo de respuesta 'v1' => 'v3'
global.autoblocknumber = '92' //establecer código de país para bloqueo automático
global.antiforeignnumber = '91' //establecer código de país para número extranjero anti
global.welcome = false //bienvenida/salida en grupos
global.anticall = false //el bot bloquea al usuario cuando se llama
global.autoswview = false //vista de estado/historia automática
global.adminevent = false //mostrar mensaje de promoción/degradación
global.groupevent = false //mostrar mensajes de actualización en el chat del grupo
//msg
global.mess = {
    limit: '¡Tu límite ha terminado!',
    nsfw: 'Nsfw está deshabilitado en este grupo, por favor dile al administrador que lo habilite',
    done: 'Hecho✓',
    error: '¡Error!',
    success: '¡Aquí tienes!'
}
//miniatura
global.thumb = fs.readFileSync('./Media/theme/menu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Actualizar '${__filename}'`))
    delete require.cache[file]
    require(file)
})

//actualizar infomacion (no modificar si no sabe) 
// senseiOfc
global.setBotInfo = (newBotname, newOwnername, newLocation, newOwnernumber, newytname, newsocial, newThemeemoji, newWebsiteX, newWagc) => {
    const updates = {
        botname: newBotname.trim(),
        ownername: newOwnername.trim(),
        location: newLocation.trim(),
        ownernumber: newOwnernumber.trim(),
        ytname: newytname.trim(),
        socialm: newsocial.trim(),
        themeemoji: newThemeemoji.trim(),
        websitex: newWebsiteX.trim(),
        wagc: newWagc.trim()
    }
    for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
            global[key] = updates[key]
            console.log(chalk.yellowBright(`${key} actualizado a: ${updates[key]}`))
        }
    }
}
