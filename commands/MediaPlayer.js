const ytdl = require('ytdl-core-discord')
const yt_search = require('yt-search');
const MessageHandler = require('./MessageHandler.js');
const message = new MessageHandler();

// COBA BACA CARA MAKE EMBED

class Play {
    async play(params) {
        try {
            this.connection = await params.msg.member.voice.channel.join();
            if(params.args.length !== 0){
                console.log('masuk')
                if(params.args[0].toLowerCase().startsWith('https://www')){
                    return this.dispatcher = this.connection.play(await ytdl(params.args[0]), { type: 'opus' });
                }else{
                    let result = await yt_search(params.args.join(' '));
                    let songUrl = result.videos.slice(0, 1)
                    return this.dispatcher = this.connection.play(await ytdl(songUrl), {type: 'opus'});
                }
            }
            return message.send(params.msg, {title: "Uta chan can't sing without the song title :'"})
        }
        catch (err) {
            message.send(params.msg, {title: err.toString()})
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
            message.send(params.msg, {description : err.toString()})
        }
    }

    pause(params) {
        this.dispatcher ? this.dispatcher.pause() : message.send(params.msg, {description : "You should request me a song master 😃"});
    }

    resume(params) {
        this.dispatcher ? this.dispatcher.resume() : message.send(params.msg, {description : "You should request me a song master 😃"});
    }

    stop(params) {
        this.dispatcher ? this.dispatcher.destroy() : message.send(params.msg, {description :"You should request me a song master 😃"});
    }
}
module.exports = Play;

