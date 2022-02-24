$(document).ready(function() {

    $("#contact-form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            mail: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
            },
            mensaje: {
                required: true,
            },
        },
        messages: {
            nombre: {
                required: "Completar este campo",
                minlength: "Debe contener más de 3 carateres"
            },
            mail: {
                required: "Completar este campo",
                email: "Ingrese una cuenta de correo válida",
            },
            telefono: {
                required: "Completar este campo",
            },
            mensaje: {
                required: "Completar este campo",
            },
        },
        submitHandler: function(form) {
            var nombre = $("#nombre").val();
            var mail = $("#mail").val();
            var telefono = $("#telefono").val();
            var mensaje = $("#mensaje").val();
            $.ajax({
                type: "POST",
                url: "contacto.php",
                data: {
                    nombre: nombre,
                    mail: mail,
                    telefono: telefono,
                    mensaje: mensaje
                },
                success: function(data) {
                    if (data.status === true) {
                        $("#contact-form .msjExito").html("<p>Su mensaje se ha enviado correctamente</p>")
                        $('#contact-form')[0].reset();
                    }
                },
                error: function(err) {
                    console.log('failed');
                    console.log(err);
                }
            })
        }
    });

});