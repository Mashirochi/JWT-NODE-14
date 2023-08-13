import userService from '../services/userService';

const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    await userService.deleteUser(14);
    return res.render("user.ejs", { userList });
}
const handleCreateNewUsers = (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    userService.createNewUsers(email, password, username);
    res.redirect('back');
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
};

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    console.log(user)
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }
    return res.render('user-update.ejs', { userData });
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
    await userService.updateUserInfor(email, username, id);
    return res.redirect("/user")
}

module.exports = {
    handleHelloWorld, handleUserPage, handleCreateNewUsers, handleDeleteUser, getUpdateUserPage, handleUpdateUser
}

