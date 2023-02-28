let boton = document.getElementById('boton');

let esconderTexto = document.getElementById('esconderTexto');

boton.addEventListener('click', cambioTexto);

function cambioTexto(){
    esconderTexto.classList.toggle('mostrar');

    if(esconderTexto.classList.contains('mostrar')){
        boton.innerHTML = '<i class="fa-solid fa-minus"></i> Ocultar Referencias';
    }else{
        boton.innerHTML = '<i class="fa-solid fa-plus"></i> Mostrar Referencias';
    }
}

