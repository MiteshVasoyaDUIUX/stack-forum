const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { use } = require('passport');
const passport = require('passport');
const users = require('../queries/users');
const {setAdmin} = require('../auth/utils');

// passport.serializeUser(function(user, done) {
//       done(null, user);
//   });

//   passport.deserializeUser(function(id, done) {
//       done(null, id);
//   });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, async (accessToken, refreshToken, profile, cb) => {

    const email = profile.emails[0].value;
    // console.log(email);

    const googleUser = {
        display_name: profile.displayName,
        email,
        image_uri: profile.photos[0].value,
        google_id: profile.id,
        role_id: 1,
    }


    try {
        let user = await users.findByEmail(email);
        // console.log(user===null);
        // console.log("User : ", user);

        if (user) {
            googleUser.role_id = user.role_id;
            user = await users.update(user.id, googleUser);
        } else {
            const admins = await users.findAdmins();
            if(admins.length === 0){
                googleUser.role_id = 3;
            }
            user = await users.insert(googleUser);
        }

        // console.log("USER in GOOGLE.JS", user);
        // const returnedUser = JSON.stringify(user);
        // console.log("USER in try in Google.js File : " + returnedUser);

        return cb(null, user);
    } catch (error) {
        console.log("In Catch Block")
        return cb(error);
    }

}
));