let User = require('../User');
let InsertUserToSQL = require('../DAL/InsertUserToSQL')

class CreateUser {
    constructor() {

    }

    async Execute(name, password) {
        this.ValidateFields(name, password);
        let user = new User(name, password);
        let insertUserToSQL = new InsertUserToSQL();
        await insertUserToSQL.Execute(user.ToJson());
        return {name: name}
    }

    ValidateFields(name, password) {
        if (typeof (name) == "undefined" || name == "") { throw new Error("Invalid name") }
        if (typeof (password) == "undefined" || password == "") { throw new Error("Invalid password") }
    }
}

module.exports = CreateUser;