const GoogleStrategy = require('passport-google-oauth20').Strategy;
const e = require('express');
const { use } = require('passport');
const passport = require('passport');
const users = require('../queries/users');


passport.serializeUser(function(user, done) {
      done(null, user);
  });
  
  passport.deserializeUser(function(id, done) {
      return done(null, id);
  });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, async (accessToken, refreshToken, profile, cb) => {

    const email = profile.emails[0].value;
    // console.log(email);
    
    const googleUser = {
        display_name : profile.displayName,
        email,
        image_uri : profile.photos[0].value,
        google_id : profile.id,
        role_id : 1,
    }
    
    let user = await users.findByEmail(email);
    console.log(user===null);
    // console.log(googleUser);
    
    if (user) {
        googleUser.role_id = user.role_id;
        user = users.update(user.id, googleUser);
    } else {
        user = await users.insert(googleUser);
    }



    return cb(null, user);
}
));