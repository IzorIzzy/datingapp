const router = require('express').Router();
const sequelize = require('../config/connection');
const {Profile, Favorite} = require('../models');

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
        ]

    }).then(dbProfileData => {
      const profiles = dbProfileData.map(post => post.get({plain: true}));
      if (!req.session.loggedIn) {
        return profiles
      }
        return Favorite.findAll({
            where: {
                profile_id: req.session.profile_id
            }
        }).then(dbFavoriteData => {
            const favorites = dbFavoriteData.map(favorite => favorite.get({plain: true}));
            return profiles.map(profile => {
                profile.isFavorite = !! favorites.find(favorite => favorite.favorite_id === profile.id)
                return profile
                // sorts favorites to top
            }).sort((a, b) => {
                if (a.isFavorite) {
                    return -1
                } else {
                    return 1
                }
            })
        })
    }).then(profiles => { // pass a single post object into the homepage template
        res.render('homepage', {profiles, session: req.session});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

