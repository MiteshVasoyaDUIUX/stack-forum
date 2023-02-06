const jwt = require('jsonwebtoken');
const users = require('../queries/users');

const create = async (user) => {
    const token = await jwt.sign(user[0], "SECRET_TOKEN", {expiresIn : "10d"});
    // console.log("User IN Create : ", user[0]);
    // console.log("TOKEN CREATION : ", token);
    return token;
}

const verify = async (token) => {
    const isVerified = await jwt.verify(token, "SECRET_TOKEN");
    return isVerified;
}

const setAdmin = async (user) =>{
    const admins = await users.findAdmins();
    if(admins.length == 0){
        user.role_id = 3;
        user = await users.update(user.id, {
            role_id : 3,
        });
        return user;
    }
    return user;
}

module.exports = {
    create,
    verify,
    setAdmin
}