import tokenService from './tokenService';

const BASE_URL = '/api/users/';


// configured to send of a multi/part form request

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: user
  })
    .then(res => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    // Parameter destructuring!
    .then(({ token }) => tokenService.setToken(token));
  // Setting our token in localStorage in our browser
  // then we'll be able to use with every request!
  
}

function deleteUser(user) {
  console.log('in userservice')
  return fetch(BASE_URL + user._id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }

  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('cant delete')
    })
    .then(({ token }) => tokenService.removeToken(token));

}
function edit(body, userId) {
  console.log(body, 'in userService.edit')
  return fetch(BASE_URL + 'edit/' + userId, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Can not edit')
    })
    .then(({ token }) => tokenService.setToken(token));

}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(creds)
  })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({ token }) => tokenService.setToken(token));
}




export default {
  signup,
  logout,
  login,
  getUser,
  edit,
  deleteUser
};