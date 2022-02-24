const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Favorite } = require('../../models');

router.post('/', (req, res) => {

    Favorite.create({
      profile_id: req.session.profile_id,
      favorite_id: req.body.favorite_id,
      
    })
      .then(dbFavoriteData => {
        res.json(dbFavoriteData);
      })
      .catch(err => {
        console.log(err);
        console.log('error on favorite user')
        res.status(500).json(err);
      });
  });

router.delete('/:favorite_id', (req,res)=> {
    Favorite.destroy({
        where: {
            profile_id: req.session.profile_id,
          favorite_id: req.params.favorite_id
        }
      })
        .then(dbFavoriteData => {
          if (!dbFavoriteData) {
            res.status(404).json({ message: 'No favorite found with this id' });
            return;
          }
          res.json(dbFavoriteData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})

  module.exports = router;