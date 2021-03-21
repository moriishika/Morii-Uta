const ytdl = require('ytdl-core-discord')
const yt_search = require('yt-search');
const MessageHandler = require('./MessageHandler.js');
const message = new MessageHandler();

// COBA BACA CARA MAKE EMBED

class Play {
    async play(params) {
        try {
            if(params.msg.content.toLowerCase().startsWith('http')){
                return this.dispatcher = params.connection.play(await ytdl(params.args[0]), { type: 'opus' });
            }else{
                let result = await yt_search(params.args);
                let songUrl = result.videos.slice(0, 1)
                return this.dispatcher = params.connection.play(await ytdl(songUrl), {type: 'opus'});
            }
        }
        catch (err) {
            message.send(params.msg, err.toString())
        }
    }

    async search(params) {
        try{
            let search = await yt_search(params.args.join(' '));
            let songs = search.videos.slice(0, 10);
            let result = {title: "What songs do you want me to play 😊 :", fields : []};
            songs.forEach((song , no ) =>{
                result.fields.push({name:`${no + 1}. ${song.title}`, value:`${song.url}`})
            })
            message.send(params.msg, result);
            result = [];
        }
        catch(err){
            message.send(params.msg, err.toString())
        }
    }

    pause(params) {
        this.dispatcher ? this.dispatcher.pause() : message.send(params.msg, "You should request me a song master 😃");
    }

    resume(params) {
        this.dispatcher ? this.dispatcher.resume() : message.send(params.msg, "You should request me a song master 😃");
    }

    stop(params) {
        this.dispatcher ? this.dispatcher.destroy() : message.send(params.msg, "You should request me a song master 😃");
    }
}
module.exports = Play;

