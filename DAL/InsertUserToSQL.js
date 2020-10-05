var sql = require("mssql");

class InsertUserToSQL {
    constructor() {
        this.config = {
            user: 'feldmanager',
            password: 'littlecitizen1!',
            server: '10.1.0.117',
            database: 'feldmanager'
        };
    }

    async Execute(UserJson) {
        let result = "";
        var pool = await sql.connect(this.config)
        let request = pool.request();
        request.input('name', sql.VarChar, UserJson.name);
        request.input('password', sql.VarChar, UserJson.password);
        await request.query(`INSERT INTO Users (Username, Password) VALUES (@name, @password)`)
            .then((recordset) => {
                result = recordset.output;
            })
        return result;
    }
}

module.exports = InsertUserToSQL;