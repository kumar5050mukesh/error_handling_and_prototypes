class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    getpassword() {
        let asterikpassword = "";
        for (let i = 0; i < this._password.length; i++) {
            asterikpassword += "*";
        }
        return asterikpassword;
    }

    setpassword(newPassword) {
        let hasUpperCase = false;
        let hasNumber = false;

        if (newPassword.length < 8) {
            throw new Error("Error: Password must be at least 8 characters long.");
        }

        for (let i = 0; i < newPassword.length; i++) {
            if (newPassword[i] >= 'A' && newPassword[i] <= 'Z') {
                hasUpperCase = true;
            }
            if (newPassword[i] >= '0' && newPassword[i] <= '9') {
                hasNumber = true;
            }
        }

        if (hasUpperCase && hasNumber) {
            this._password = newPassword;
        } else {
            throw new Error("Error: Password must contain at least one uppercase letter and one number.");
        }
    }
}

try {
    let user1 = new User("mukesh", "qweasd@1234");
    console.log(user1.getpassword());

    let user2 = new User("mukesh", "qweasd@");
    user2.setpassword("newpassword");
    console.log(user2.getpassword());
} catch (error) {
    console.log(error.message);
}
