let GetUserByNameFromSQL = require('../DAL/GetUserByNameFromSQL')

class GetUserByName {
    constructor() {

    }

    async Execute(name) {
        this.ValidateFields(name);
        let getUserByNameFromSQL = new GetUserByNameFromSQL();
        let result = await getUserByNameFromSQL.Execute(name);
        if (typeof (result) === "undefined"){
            throw new Error("Name not found");
        }
        return result;
    }

    ValidateFields(name) {
        if (typeof (name) == "undefined" || name == "") { throw new Error("Invalid name") }
    }
}

module.exports = GetUserByName;