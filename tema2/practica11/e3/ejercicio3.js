    function submit(){
        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var comentarios = document.getElementById('comentarios');
        var boton = document.getElementById('enviar');
        boton.addEventListener('click',() => {
        if(nombre.value && email.value && comentarios.value){
            alert("Nombre: " + nombre.value + "\nEmail: " + email.value + "\nComentarios: " + comentarios.value);
        }else{
            alert("Por favor, complete todos los campos antes de enviar el formulario.");
        }
    })
    }
    submit();