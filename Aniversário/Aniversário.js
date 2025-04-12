const Cartãoprincipal = document.querySelector('.Cartãoprincipal');
const Final = document.querySelector('.Final');

const abrir = () => {
    if (Cartãoprincipal.classList.contains('abrir')) {
        Cartãoprincipal.classList.remove('abrir');
        Cartãoprincipal.classList.add('fechar');

        Final.classList.contains('abrir2');
        Final.classList.remove('abrir2');
        Final.classList.add('fechar2');
    } else {
        Cartãoprincipal.classList.remove('fechar');
        Cartãoprincipal.classList.add('abrir');

        Final.classList.remove('fechar2');
        Final.classList.add('abrir2');
    }
}

document.addEventListener('click', abrir);