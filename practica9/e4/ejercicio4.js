    function submit(){
        var texto = document.getElementById('athletic_ability');
        var boton = document.getElementById('submit_button');
        boton.addEventListener('click',() => {
        if(sex){
            alert(texto.value);
        }
    })
    }
    submit();