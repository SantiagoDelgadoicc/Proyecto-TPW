
window.onscroll = function() {
    let boton = document.getElementById('volverarriba');
    if (document.documentElement.scrollTop > 80) {
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

const nombre = prompt("Cual es tu nombre?");
if (nombre) {
  const usuario = document.getElementById("usuario");
  usuario.textContent = `@${nombre}`;
  usuario.classList.remove("oculto");
    
  setTimeout(() => {
    usuario.classList.add("oculto");
  }, 3000);
}

/*
const enviar = document.getElementById("enviar");
if(enviar){
  const nombrelogin = document.getElementById("nombrelogin");
  const apellidologin = document.getElementById("apellidologin");
  const usuariologin = document.getElementById("usuariologin");
  mensaje.textContent = `🟢Bienvenido @${usuariologin} (${nombrelogin} ${apellidologin})`;
  mensaje.classList.remove("oculto");


  setTimeout(() => {
    usuario.classList.add("oculto");
  }, 3000);
}
*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".modal-body form");
  const enviar = document.getElementById("enviar");
  const mensaje= document.getElementById("mensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombrelogin = document.getElementById("nombrelogin").value;
    const apellidologin = document.getElementById("apellidologin").value;
    const usuariologin = document.getElementById("usernamelogin").value;
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = `🟢Bienvenido @${usuariologin} (${nombrelogin} ${apellidologin})`;
    mensaje.classList.remove("oculto");
    const modal1 = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
    modal1.hide();
    const modal2 = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal1'));
    modal2.show();

    setTimeout(() => {
      modal1.hide();
    }, 3000);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const temaclaro = document.getElementById("temaclaro");
  const temaoscuro = document.getElementById("temaoscuro");

  if (temaclaro) {
    temaclaro.addEventListener("click", () => {
      document.body.classList.remove("oscuro");
      document.body.classList.add("claro", "mostrar");
    });
  }

  if (temaoscuro) {
    temaoscuro.addEventListener("click", () => {
      document.body.classList.remove("claro");
      document.body.classList.add("oscuro", "mostrar");
    });
  }
});