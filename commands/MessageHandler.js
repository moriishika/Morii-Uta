class MessageHandler{
    send(connection, msg){
        connection.channel.send({embed : msg})
    }
}

module.exports = MessageHandler;