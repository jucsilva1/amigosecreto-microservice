const Bcrypt = require("bcryptjs");

module.exports = 
    function criptografa(texto){
        try {
            const saltRounds = 10;
            const salt = Bcrypt.genSaltSync(saltRounds);
            return  Bcrypt.hashSync(texto, salt)            
        }
        catch(err){
            console.log(err);
        }
        return null;
    }


