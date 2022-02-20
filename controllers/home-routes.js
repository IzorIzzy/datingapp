const router = require('express').Router();
const sequelize=require('../config/connection');
const {Profile}= require('../models');

router.get('/', (req, res) => {
    Profile.findAll({
      attributes: [
        'id',
        'username',
        'bio',
        'age',
        'shift',
        'contact',
        'imageurl',
      ],
      
    })
      .then(dbProfileData => {
        const profiles = dbProfileData.map(post => post.get({ plain: true }));
        // pass a single post object into the homepage template
        res.render('homepage', { profiles, session:req.session });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;