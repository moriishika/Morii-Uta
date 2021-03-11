class ErrorHandler{
    message(connection, command){
        connection.channel.send(`Gommen, uta can't understand this command : \`${command}\``);
    }
}

module.exports = ErrorHandler;