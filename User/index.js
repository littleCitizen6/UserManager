class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    ToJson() {
        return {
            name: this.name,
            password: this.password
        }
    }
}

module.exports = User;