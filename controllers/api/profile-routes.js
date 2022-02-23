const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Profile } = require('../../models');

// get all profiles
router.get('/', (req, res) => {
  Profile.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one profile 

router.get('/:id', (req, res) => {
  Profile.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Post,
    //     attributes: ['id', 'title', 'post_url', 'created_at']
    //   },
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'created_at'],
    //     include: {
    //       model: Post,
    //       attributes: ['title']
    //     }
    //   },
    //   {
    //     model: Post,
    //     attributes: ['title'],
    //     through: Vote,
    //     as: 'voted_posts'
    //   }
    // ]
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  Profile.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
    age: req.body.age,
    shift: req.body.shift,
    contact: req.body.contact,
    imageurl: req.body.imageurl
  })
    .then(dbProfileData => {
      req.session.save(() => {
        req.session.profile_id = dbProfileData.id;
        req.session.username = dbProfileData.username;
        req.session.loggedIn = true;

        res.json(dbProfileData);
      });
    })
    .catch(err => {
      console.log(err);
      console.log('error on create user')
      res.status(500).json(err);
    });
});



router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Profile.findOne({
    where: {
      email: req.body.email
    }
    
  }).then(dbProfileData => {
    if (!dbProfileData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
// checks password
    const validPassword = dbProfileData.checkPassword(req.body.password);
    console.log(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.profile_id = dbProfileData.id;
      req.session.username = dbProfileData.username;
      req.session.loggedIn = true;

      res.json({ profile: dbProfileData, message: 'You are now logged in!' });       ////// SHOULD THIS BE PROFILE??
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  Profile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;