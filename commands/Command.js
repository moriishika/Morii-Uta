class Commands {
    constructor(){
        this.list = {
            play :  this.play,
            stop : 'stop',
            skip : 'skip',
            resume : 'resume',
            singList : 'singlist',
            lyrics : 'lyrics',
            info : 'info'
        }
    }

    executeCommand(command, args){
        return this.list[command](args);
    }

    play(args){
        console.log(args);
    }
}

module.exports = Commands;