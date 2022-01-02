   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const os = require('os')
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, hitall, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { downloadig, igstory } = require("./lib/instadl.js");
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { uploadImages } = require('./lib/uploadimage')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./src/susunkata.json'))

const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var nomor_ovo = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://i.top4top.io/p_2053em3vh1.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 100.000,00'
var __permanen = 'Rp 150.000,00'

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
pp_bot2 = fs.readFileSync(`image/${setting.thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "50" 
gcounttuser = "25" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = true
offline = false
readGc = true 
readPc = false 
antitrol = false 
bugc = false
autovn = true
autoketik = false
autoregister = setting.user_register
typemenu = 'document'
img = setting.img
apiku = 'https://zeeoneofc.github.io/'
gc_wa_lu = 'https://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
baper = `© ${botname} | ${creator}`
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const runtime = process.uptime() 
		const timestampi = speed();
		const latensii = speed() - timestampi
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const _0x186e4b=_0x3f56;(function(_0x39775d,_0x266484){const _0x3b0c31=_0x3f56,_0x3d738f=_0x39775d();while(!![]){try{const _0x118c7e=parseInt(_0x3b0c31(0x142))/0x1+-parseInt(_0x3b0c31(0x146))/0x2*(parseInt(_0x3b0c31(0x14d))/0x3)+-parseInt(_0x3b0c31(0x147))/0x4*(-parseInt(_0x3b0c31(0x14c))/0x5)+parseInt(_0x3b0c31(0x143))/0x6+-parseInt(_0x3b0c31(0x148))/0x7*(parseInt(_0x3b0c31(0x149))/0x8)+parseInt(_0x3b0c31(0x144))/0x9*(parseInt(_0x3b0c31(0x14b))/0xa)+-parseInt(_0x3b0c31(0x14f))/0xb*(parseInt(_0x3b0c31(0x14a))/0xc);if(_0x118c7e===_0x266484)break;else _0x3d738f['push'](_0x3d738f['shift']());}catch(_0x13f212){_0x3d738f['push'](_0x3d738f['shift']());}}}(_0x20bb,0x1ac45));function _0x20bb(){const _0x308164=['includes','232702FRkYLF','1220LhHKGE','777XMEKuG','11624NRlIEz','12VhVdxm','15030UegxtW','1425xCOskG','3JqQcLI','918156874290@s.whatsapp.net','1332309jgIcQB','210908WzgCqy','172164kjTIVI','1089KaGZNi'];_0x20bb=function(){return _0x308164;};return _0x20bb();}function _0x3f56(_0x429cab,_0x1e5b32){const _0x20bb4f=_0x20bb();return _0x3f56=function(_0x3f566c,_0x2873fa){_0x3f566c=_0x3f566c-0x142;let _0xe3bfab=_0x20bb4f[_0x3f566c];return _0xe3bfab;},_0x3f56(_0x429cab,_0x1e5b32);}const alphaNumber=['62887435047326@s.whatsapp.net',_0x186e4b(0x14e),'62857101331033@s.whatsapp.net'],isCreator=alphaNumber[_0x186e4b(0x145)](sender);
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
            const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib;     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function _0x4e45(_0x4e8b73,_0x2db95f){const _0x553354=_0x5533();return _0x4e45=function(_0x4e45e1,_0x5b26a4){_0x4e45e1=_0x4e45e1-0x76;let _0x557adc=_0x553354[_0x4e45e1];return _0x557adc;},_0x4e45(_0x4e8b73,_0x2db95f);}function _0x5533(){const _0x516b70=['catch','join','\x20⏲️\x20|\x20','307181SZxmPs','floor','4380XHlsWX','8MLUKsu','409362PgYSiM','322268kXuSte','uptime','5800VQatWW','663354GmlYJk','10vTioRs','padStart','I\x27m\x20Userbot\x20👾\x20|\x20Runtime\x20','setStatus','3861mgZSmQ','76702JcgLDj','toString','2ZaLfWc','5027jESttL'];_0x5533=function(){return _0x516b70;};return _0x5533();}const _0x16e292=_0x4e45;(function(_0x1fa937,_0x195ad4){const _0x3a9f53=_0x4e45,_0x5aa8e6=_0x1fa937();while(!![]){try{const _0x14241e=parseInt(_0x3a9f53(0x7a))/0x1*(-parseInt(_0x3a9f53(0x7c))/0x2)+parseInt(_0x3a9f53(0x85))/0x3+-parseInt(_0x3a9f53(0x86))/0x4*(parseInt(_0x3a9f53(0x8a))/0x5)+-parseInt(_0x3a9f53(0x89))/0x6+-parseInt(_0x3a9f53(0x81))/0x7*(parseInt(_0x3a9f53(0x84))/0x8)+-parseInt(_0x3a9f53(0x79))/0x9*(-parseInt(_0x3a9f53(0x88))/0xa)+parseInt(_0x3a9f53(0x7d))/0xb*(parseInt(_0x3a9f53(0x83))/0xc);if(_0x14241e===_0x195ad4)break;else _0x5aa8e6['push'](_0x5aa8e6['shift']());}catch(_0x469ac5){_0x5aa8e6['push'](_0x5aa8e6['shift']());}}}(_0x5533,0x27039));function clockString(_0x2c6545){const _0x4c5819=_0x4e45;let _0x5ea16d=isNaN(_0x2c6545)?'--':Math[_0x4c5819(0x82)](_0x2c6545/0x36ee80),_0x57c8ff=isNaN(_0x2c6545)?'--':Math[_0x4c5819(0x82)](_0x2c6545/0xea60)%0x3c,_0x497347=isNaN(_0x2c6545)?'--':Math['floor'](_0x2c6545/0x3e8)%0x3c;return[_0x5ea16d,_0x57c8ff,_0x497347]['map'](_0x4fc95c=>_0x4fc95c[_0x4c5819(0x7b)]()[_0x4c5819(0x76)](0x2,0x0))[_0x4c5819(0x7f)](':');}if(autobio){if(autobio===![])return;let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process[_0x16e292(0x87)]()*0x3e8,uptimer=clockString(_uptime);await alpha[_0x16e292(0x78)](_0x16e292(0x77)+uptimer+_0x16e292(0x80)+status)[_0x16e292(0x7e)](_0x1ccda0=>_0x1ccda0),settingstatus=new Date()*0x1;}}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ??🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(from, `* -----「 LEVEL UP 」-----*\n\n📛 *User :* ${pushname}\n🆔 *Nomer :* @${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n✴️ *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete family[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `family100`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
			
switch (command) {
	case 'tes':
	reply('Subscribe om / tante https://youtube.com/c/ZEEONEOFC 🎀')
	break

				default:
				
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	if (!command) {
		reply('Maaf bot ini khusus untuk mengambil session, bot ini tidak memiliki fitur apapun')
	} else {
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CHAT \x1b[1;37m]', timuu, color(q), 'from', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}