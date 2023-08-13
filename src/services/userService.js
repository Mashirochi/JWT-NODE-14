import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

const createNewUsers = async (email, password, username) => {
    let hashPass = hashUserPassword(password);
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('INSERT INTO users (email, password, username) VALUE (?, ?, ?)', [email, hashPass, username]);
    } catch (err) {
        console.log("check error createNewUsers", err)
    }


}

const getUserList = async () => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows
    } catch (err) {
        console.log("err in getUserList", err)
    }

}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    } catch (err) {
        console.log("deleteUser", err)
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id=?', [id]);
        return rows;
    } catch (err) {
        console.log("getUserById", err)
    }
}

const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('UPDATE users SET email = ?, username = ? WHERE id=?', [email, username, id]);
        return rows;
    } catch (err) {
        console.log("getUserById", err)
    }
}

module.exports = {
    createNewUsers, getUserList, deleteUser, getUserById, updateUserInfor
}

