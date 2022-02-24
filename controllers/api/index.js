const router = require('express').Router();

const profileRoutes = require('./profile-routes');
const favoriteRoutes = require('./favorite-routes');


router.use('/profiles', profileRoutes);
router.use('/favorites', favoriteRoutes);
module.exports = router;