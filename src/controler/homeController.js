// import userService from '../services/userService';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateNewUsers = (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword)
    connection.query(
        'INSERT INTO users (email, password, username) VALUE (?, ?, ?)', [email, hashPassword, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        });
    // userService.getUserList();
    return res.send("handleCreateNewUsers")
}

module.exports = {
    handleHelloWorld, handleUserPage, handleCreateNewUsers
}

