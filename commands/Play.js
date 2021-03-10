// if(msg.content === "hello uta chan"){
    //     return msg.channel.send(`yahoooo 👋🎶 ${msg.guild.member(msg.author).displayName} sama`)
    // }

    // if(msg.content.startsWith("uta chan sing")){
    //     const connection = await msg.member.voice.channel.join();
    //     const url = msg.content.split(" ");
    //     if(msg.member.voice.channel){
    //         play(connection, url[3])
    //     }
    // }else if(msg.content.startsWith("uta chan arigatou")){
    //     msg.channel.send(`jaa naaa arigatou minna~~`)
    //     return connection.leave();
    // }
function play(connection, url) {
    connection.play(url, { type: 'opus' });
  }