require('dotenv').config()
module.exports = {
    source: {
        website : {
            support: "https://discord.gg/eBxhYgePyu",
            domain: "https://wet-ass-pussy.onrender.com"//you need get your repl.co link in replit with keepAlive code, then replace the link
        },   
        anti_crash: true,//turn on or off the antiCrash file
        keep_alive: true,//turn on or off the keepAlive file
        port: process.env.PORT || 10000,//don't need to touch or changed
        callback: 'https://come-back-cwhd.onrender.com/callback',//you need get your repl.co link in replit with keepAlive code, then replace the link right behind of /callback
        secret: process.env.USER_SECRET_ID,//bot secret id, you can get it in discord developer portal
        client_id: process.env.CLIENT_ID,//bot client id, you can get it in discord server or in discord developer portal
    },
    discord: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        invite: `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=bot+applications.commands&permissions=2080374975`,
        server_support: "https://discord.gg/jMc3qNVm",
        server_id: "1361129852068958208",
        server_channel_report: "1361892780447891537",
        server_channel_status: "1361892780447891537",      
    },
    vip_role: [
        '1363229968179400745'
    ],
    owner: [
        '1361251322669564075', 
       ],
    whitelist_guilds: [
      '1361888336234549429',
      '1363229968179400745',
      '1361887358152343685',
      '1361892780447891537'
    ],
};
