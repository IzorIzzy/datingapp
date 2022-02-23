const { Profile } = require('../models');

const profiledata = [
  {
    username: 'DWIGHT K. SCHRUTE',
    email: 'bearsandbeets@schrute.farms.com',
    password: 'password123',
    bio: 'Before I do anything I ask myself, "Would an idiot do that?" And if the answer is yes, I do not do that thing. ',
    age: '30',
    shift: '1',
    contact: 'https://www.instagram.com/rainnwilson/?hl=en',
    imageurl: 'https://rb.gy/owxexv'
  },
  {
    username: 'Big Tuna',
    email: 'jimbohalpert@athlead.com',
    password: 'password123',
    bio: 'My job is to speak to clients on the phone about… uh, quantities and type of copier paper.',
    age: '28',
    shift: '2',
    contact: 'https://www.instagram.com/johnkrasinski/?hl=en or https://www.tiktok.com/@johnkrasinski?lang=en',
    imageurl: 'https://rb.gy/pzjnst'
  },
  {
    username: 'Michael Scarn',
    email: 'bestboss@dundermifflin.sabre.com',
    password: 'password123',
    bio: 'Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.',
    age: '36',
    shift: '3',
    contact: 'https://www.facebook.com/TheOfficeTV',
    imageurl: 'https://rb.gy/oa1o1b'
  },
  {
    username: 'Stanley the Manly',
    email: 'ilovepretzels@diabetesawareness.com',
    password: 'password123',
    bio: 'If I don’t have some cake soon, I might die.',
    age: '51',
    shift: '1',
    contact: 'https://www.facebook.com/LeslieDavidBaker',
    imageurl: 'https://rb.gy/doivgq'
  },
  {
    username: 'Pam-OLA',
    email: 'artgirl1@prattinstitute.edu',
    password: 'password123',
    bio: 'I like to eat when I go to dinner parties... apparently that is a lot to ask. There’s nothing better than a beautiful day at the beach, filled with sun, surf, and… uh, diligent note-taking.',
    age: '28',
    shift: '2',
    contact: 'https://www.facebook.com/msjennafischer',
    imageurl: 'https://rb.gy/kw8xhm'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '3',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/qaklfn'
  },
  {
    username: 'Kelly E.',
    email: 'kellyAKAerinAKAreceptionist@sabre.com',
    password: 'password123',
    bio: 'I could handle the Taco Bell Express - but not the full blown Taco Bell... Or the pens. But I do like waffles!',
    age: '23',
    shift: '1',
    contact: 'https://www.facebook.com/ElizabethClaireEllieKemper/',
    imageurl: 'https://rb.gy/paagk5'
  },
  {
    username: 'Cookie Monster Kev',
    email: 'the_drummer_scrantonicity@dundermifflin.com',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '38',
    shift: '2',
    contact: 'https://www.instagram.com/bbbaumgartner/?hl=en',
    imageurl: 'https://rb.gy/mokeqg'
  },
  {
    username: 'Darryl',
    email: 'warehousemanager@dundermifflin.com',
    password: 'password123',
    bio: 'I have never been lucky. And I am not talking about the lottery, I am talking about stuff like developing a soy allergy at thirty-five. Who gets a soy allergy at thirty-five? And why is soy in everything?',
    age: '35',
    shift: '1',
    contact: 'I like to play it off the grid. I will contact you.',
    imageurl: 'https://rb.gy/4mdji7'
  },
  {
    username: 'Kelly',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    bio: "You guys I’m like really smart now. You don’t even know. You could ask me, ‘Kelly what’s the biggest company in the world?’ And I’d be like, ‘blah blah blah, blah blah blah, blah blah blah.’ Giving you the exact right answer.",
    age: '26',
    shift: '2',
    contact: 'https://www.instagram.com/mindykaling/?hl=en',
    imageurl: 'https://rb.gy/jzh2lb'
  }
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;
