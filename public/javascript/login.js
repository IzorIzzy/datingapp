async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/profiles/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const bio = document.querySelector('#bio-signup').value.trim();
  const age = document.querySelector('#age-signup').value.trim();
  const shift = document.querySelector('#shift-signup').value.trim();
  const contact = document.querySelector('#contact-signup').value.trim();
  const imageurl = document.querySelector('#imageurl-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/profiles', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        bio,
        age,
        shift,
        contact,
        imageurl
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      // alert(response.statusText);
      window.alert('Enter the right data dude')
    }
  }
}


async function toggleFavorite(event, favoriteId, isFavorite) {
  //keeps card from opening when star clicked
  event.preventDefault()
  event.stopPropagation()
  if (isFavorite===false){
    const response = await fetch('/api/favorites', {
      method: 'post',
      body: JSON.stringify({
        favorite_id:favoriteId
      }),
      headers: { 'Content-Type': 'application/json' }

    });
  } else {
    const response = await fetch('/api/favorites/'+favoriteId, {
      method: 'delete',
    });
  }
  location.reload  ()

}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
