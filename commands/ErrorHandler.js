class ErrorHandler{
    message(connection, msg){
        return connection.channel.send(msg)
    }
}

module.exports = ErrorHandler; 