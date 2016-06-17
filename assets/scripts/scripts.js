$(document).ready(function () {
  $('#formulario').on({
    mouseenter: function(){
             $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
             $(this).css("background-color", "white");
    }
  })
})

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

  function BuscarVacio () {
    var datos = [
                  $('#fname'),
                  $('#lname'),
                  $('#bday'),
                  $('#sexo'),
                  $('#user'),
                  $('#pwd'),
                  $('#pwd2'),
                  $('#email')
                ]
                console.log(datos)

    for (var i = 0; i < datos.length; i++) {
      if (datos[i].val() =='' || datos[i].val() == undefined) {
        console.log(datos[i])
        datos[i].css('border-color', 'red')
      }
    }
    //$('#email').css('border-color','red')

  }
