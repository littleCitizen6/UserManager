var sql = require("mssql");

class GetUserByNameFromSQL {
    constructor() {
        this.config = {
            user: 'feldmanager',
            password: 'littlecitizen1!',
            server: '10.1.0.117',
            database: 'feldmanager'
        };
    }

    async Execute(name) {
        let result = "";
        var pool = await sql.connect(this.config)
        let request = pool.request();

        await request.query(this.GetQuery(name))
            .then((recordset) => {
                result = recordset.recordset[0];
            })
        return result;
    }

    GetQuery(name) {
        return `SELECT * 
                FROM Users 
                WHERE Username = '${name}'`;
    }
}

module.exports = GetUserByNameFromSQL;