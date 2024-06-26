const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3UyK3ZKZmVvVTBTNHJEWlo1RUpoZ0ZNZWNkYlk2dnVoUUZPVS9OdDE0MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibVY2UXlKRF9UOXlxdDhtbUZfalRHQVwiLFxuICBcInBob25lSWRcIjogXCI1NzdkYTAyOC1lMjQ2LTQ2ZmItYjcwYi1mYjQ1OTU2OGRlN2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgOTksXG4gICAgICAxOTksXG4gICAgICA5NyxcbiAgICAgIDIxLFxuICAgICAgODMsXG4gICAgICAxNjMsXG4gICAgICAyMzYsXG4gICAgICAxNDgsXG4gICAgICAyMSxcbiAgICAgIDIwNCxcbiAgICAgIDI4LFxuICAgICAgMTE3LFxuICAgICAgMTAsXG4gICAgICA5OCxcbiAgICAgIDE4OSxcbiAgICAgIDI0NyxcbiAgICAgIDkwLFxuICAgICAgMTU1LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxMjYsXG4gICAgICAzNSxcbiAgICAgIDYxLFxuICAgICAgMTU2LFxuICAgICAgMTkxLFxuICAgICAgMTE0LFxuICAgICAgMTk0LFxuICAgICAgMTI3LFxuICAgICAgMjQyLFxuICAgICAgOSxcbiAgICAgIDE5LFxuICAgICAgMjA5LFxuICAgICAgMTY1LFxuICAgICAgNDMsXG4gICAgICAzNixcbiAgICAgIDI0NCxcbiAgICAgIDIwOSxcbiAgICAgIDEyMSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpuNXA4SEVPT080ck1HR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvUXdBbzNOTm5EeG1ZRlJybGpKdHFWWjZmdjJDN2I0cjRXajRoaFNHL1NrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdQSEo3R0RtL0RubklLenIxSlhmZWJYbTFMbk9XZjFUS2MybTN4eGFrcFgwaGNTaHpZUTR5K0JFWSs3U3ZnZ1lCYzg1VDB0RVc2MWVmR1ZNWUREZmdRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIituMXVndWxjQm4yR3BDOGZ6Q2RwVjdJSDBUVVhYNlZxbUtQQ2phTkVYeE5lUjRESXlyciswV1NVMUhWQ1dPMWpqWldaSEl3QlAza1JGT04xT3ZJZENBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NDM1ODYzMDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MTczNTMyODY4ODMzOjIxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NDM1ODYzMDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTc1MDE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlB0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrbDNLejk1UmpZdkRyMmdNZFpsN0tpT2o4akVBM2hlUU9ZcHNoRzJnOWUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOls1LDYsMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwOTExMTcwNTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1THFxTSt5My8xK1FjdlE2eWJrdmxULzhhNGhTWENkcm54YmNYRURxU0VFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOls3LDAsNiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwOTMyNjM4NzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZM1Y2Sng1bkljVEJ3R2VYa2lZZVNoRlI1b0svVGphS0RvQzJzOGpIcFBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOls3LDYsMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNzM0MTUzNDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoV3BhMnVKN2hCZjlXT0ROcDFWQVE2RlRBUkRZL29LR0NyN0dIdzduUUtBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsNV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTczNDIwODI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlA2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWtnY1RIOEoyRmp1WFJYMGlQR1ZWenZxSmZGeWlVSXJTU0RlVnU0bzMwZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbNywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNzM0MzM5ODhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrdll6TkI1MjJNWEI5ZVg5R3NmbDQ1NFpiaVM1MlJTTm5GRE9QYy8yaDJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODMwNzIyMjc1OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5QdC5qc29uIjogIntcImtleURhdGFcIjpcIkRlNzVELzZKUk9UL1M2S3RpOWhHcUZZQURYemZFMXh6NFpjeWRpRkZCVUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMywyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzMTc4Mjg5NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Qdi5qc29uIjogIntcImtleURhdGFcIjpcIjBBS1ZJSnYrYTNoTFpmNkZhUzh3NENRYUdVQU16c0pWbHdBVXhocmZ2M289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MzI1NTg2NzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxTE9ySUJCRTlLS2NFTkdnNU1vZXhETHdQaWIzUU13SHhNSFpUNEdqTVNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDQsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTMzNzEzNTAwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSW9RRE9NMHlXTENXQlpzZjhLZDFrbGtrSDBXS3NRT2dsV29lZVRhS2hmQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MzQ0NzA1NTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
