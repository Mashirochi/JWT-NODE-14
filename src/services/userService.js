import mysql from 'mysql2';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
//connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUsers = (email, password, username) => {
    let hashPassword = hashUserPassword(password);
    console.log(hashPassword)
    console.log(email)
    console.log(username)
    connection.query(
        'INSERT INTO users (email, password, username) VALUE (?, ?, ?)', [email, hashPassword, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        });

}

const getUserList = () => {
    console.log("hi")
    let users = [];
    connection.query(
        'Select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log("result in getuserlist", results)
        });
}


module.exports = {
    createNewUsers, getUserList
}

