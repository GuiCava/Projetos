const Cartãoprincipal = document.querySelector('.Cartãoprincipal');

const abrir = () => {
    if (Cartãoprincipal.classList.contains('abrir')) {
        Cartãoprincipal.classList.remove('abrir');
        Cartãoprincipal.classList.add('fechar');
    } else {
        Cartãoprincipal.classList.remove('fechar');
        Cartãoprincipal.classList.add('abrir');
    }
}

document.addEventListener('click', abrir);