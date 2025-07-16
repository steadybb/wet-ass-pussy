require('dotenv').config()
module.exports = {
    source: {
        website : {
            support: "https://discord.gg/jMc3qNVm",
            domain: ""//you need get your repl.co link in replit with keepAlive code, then replace the link
        },   
        anti_crash: true,//turn on or off the antiCrash file
        keep_alive: true,//turn on or off the keepAlive file
        port: 1528,//don't need to touch or changed
        callback: '',//you need get your repl.co link in replit with keepAlive code, then replace the link right behind of /callback
        secret: process.env.USER_SECRET_ID,//bot secret id, you can get it in discord developer portal
        client_id: process.env.CLIENT_ID,//bot client id, you can get it in discord server or in discord developer portal
    },
    discord: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        invite: `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot+applications.commands&permissions=2080374975`,
        server_support: "https://discord.gg/jMc3qNVm",
        server_id: process.env.SERVER_ID,
        server_channel_report: process.env.SERVER_CHANNEL_ID,
        server_channel_status: process.env.SERVER_CHANNEL_STATUS,      
    },
    vip_role: [
        '1363229968179400745'
    ],
    owner: [
        '1361129852068958211', 
        '1361251322669564075'
    ],
    whitelist_guilds: [
      '1361129852068958211',
      '1361886835952979999',
      '1361887358152343685',
      '912596015075455016'
    ],
};
