const jwt = require('jsonwebtoken');

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

module.exports = {
    create,
    verify
}