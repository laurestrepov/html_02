  function validate () {
    var username
    var password
    username = document.getElementById('user').value
    password = document.getElementById('pswd').value

    if ((username === undefined || username === '') || (password === undefined || password === '')) {
      document.getElementById('error').style.color = 'red'
      document.getElementById('error').innerHTML = 'Username or Password are invalid !.'
    } else {
      document.getElementById('error').style.color = 'green'
      document.getElementById('error').innerHTML = 'Username and Password are valid !.'
    };
  };
