// import all models
const Profile = require('./Profile');
const Favorite = require('./Favorite');


Profile.hasMany(Favorite, {
    foreignKey: 'profile_id'
  });



module.exports = { Profile, Favorite };

