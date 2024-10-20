let usuarios = 
{
    nombre: "mariana", 
    contrasenaa: "mariana"
}

function btnAlerta()
{
    let usuario = document.getElementById('form-email');
    let contrasena = document.getElementById('form-password');
    if (usuario.value == usuarios.nombre && contrasena.value == usuarios.contrasenaa)
    {
         window.location="registroerro.html";
    }else{
        window.location="error.html"
    }
}


console.log(usuarios);

