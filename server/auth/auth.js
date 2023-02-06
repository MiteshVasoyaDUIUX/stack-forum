const passport = require('passport');
const express = require('express');
const router = express.Router();
const { create } = require('./utils');
const colors = require('colors');

router.get('/isAdmin', async  (req, res) =>{
  if(req.user) {
    if(req.user.role_id === 3){
      return res.json({
        isAdmin : true,
      });
    }
  }
  res.json({isAdmin : false});

})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }), () => {
});

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    // console.log("\nUser in Passport.Authentication : ", user, "\n");

    try {
      
      const token = await create(user);
      // console.log(`User : `.bgCyan + user[0])
      res.redirect("http://localhost:8080/#/loggedin/token/"+token);
    } catch (error) {
      res.redirect("http://localhost:8080/#/loggedin/token/"+error.message);

    }

  })(req, res, next)
});

module.exports = router;