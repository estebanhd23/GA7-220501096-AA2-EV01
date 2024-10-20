// Función para validar el inicio de sesión
function validarInicioSesion(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var usuarioIngresado = document.getElementById("usuario").value;
    var claveIngresada = document.getElementById("clave").value;

    // Recuperar los usuarios almacenados en localStorage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar si existe un usuario con los datos ingresados
    var usuarioEncontrado = usuarios.find(function(user) {
        return user.usuario === usuarioIngresado && user.clave === claveIngresada;
    });

    if (usuarioEncontrado) {
       window.location.href = "registrovalido.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function btnRegistro()
{
    window.location="registro.html";
}

        // Función para almacenar el usuario y la contraseña en localStorage
        function almacenarDatos(event) {
            event.preventDefault(); // Evita el envío del formulario

            // Obtener los valores ingresados
            var usuario = document.getElementById("usuario").value;
            var clave = document.getElementById("clave").value;

            // Validar que los campos no estén vacíos
            if (usuario === "" || clave === "") {
                alert("Por favor, ingresa un usuario y una contraseña.");
                return;
            }

            // Recuperar los datos existentes en localStorage o inicializar un array vacío
            var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Crear un objeto con los datos del nuevo usuario
            var nuevoUsuario = {
                usuario: usuario,
                clave: clave
            };

            // Agregar el nuevo usuario al array
            usuarios.push(nuevoUsuario);

            // Almacenar el array actualizado en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            // Confirmar al usuario que los datos se han almacenado
            alert("Usuario y contraseña almacenados correctamente.");

            // Limpiar los campos del formulario
            document.getElementById("loginForm").reset();
        }

        // Función para mostrar los datos almacenados
        function mostrarDatosAlmacenados() {
            var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            if (usuarios.length > 0) {
                var mensaje = "Usuarios almacenados:\n\n";
                usuarios.forEach(function(user, index) {
                    mensaje += "Usuario " + (index + 1) + ": " + user.usuario + "\nContraseña: " + user.clave + "\n\n";
                });
                alert(mensaje);
            } else {
                alert("No hay datos almacenados.");
            }
        }



    // Función para mostrar el pop-up automáticamente al cargar la página
    window.onload = function() {
        mostrarPopup(); // Llama a la función que muestra el pop-up
    };

    // Función para mostrar el pop-up
    function mostrarPopup() {
        document.getElementById("miPopup").style.display = "block";
    }

    // Función para ocultar el pop-up
    function ocultarPopup() {
        document.getElementById("miPopup").style.display = "none";
    }

    // Cerrar el pop-up si se hace clic fuera del contenido
    window.onclick = function(event) {
        var popup = document.getElementById("miPopup");
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
