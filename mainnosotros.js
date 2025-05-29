window.onscroll = function() {
    let boton = document.getElementById('volverarriba');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
};

function volver(){
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.mi-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover-activo');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover-activo');
    });
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('mostrar');
});

document.getElementById('botonfijo').addEventListener('click', () => {
  alert('Ayuda solicitada');
});