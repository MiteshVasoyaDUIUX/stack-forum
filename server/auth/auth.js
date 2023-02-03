const passport = require('passport');
const express = require('express');
const router = express.Router();
const { create } = require('./utils');
const colors = require('colors');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }), () => {

});

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    // console.log("\nUser in Passport.Authentication : ", user, "\n");

    try {
      
      const token = await create(user);
      // console.log(`User : `.bgCyan + user[0])
      res.json(token);
    } catch (error) {
      next(error);
    }

  })(req, res, next)
});

module.exports = router;