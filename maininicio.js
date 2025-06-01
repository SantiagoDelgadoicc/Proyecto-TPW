
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

// ======================
// CONFIGURACIÓN SPOTIFY
// ======================
const clientId = 'cfd9931c98d0476aaf63ae8c3b259099';
const clientSecret = 'd559fb37c39e4d3dad2bfe0470643e36';

// ======================
// FUNCIÓN PARA OBTENER TOKEN
// ======================
async function obtenerTokenSpotify() {
  const credenciales = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credenciales}`
      },
      body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error al obtener token de Spotify:', error);
    return null;
  }
}

// ======================
// MOSTRAR TRACKS EN EL DOM
// ======================
function mostrarTracks(tracks) {
  const contenedor = document.getElementById("contenedor-cards");
  contenedor.innerHTML = "";

  tracks.forEach(track => {
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${track.album.images[0]?.url}" class="card-img-top" alt="${track.name}">
        <div class="card-body">
          <h5 class="card-title">${track.name}</h5>
          <p class="card-text"><strong>Artista:</strong> ${track.artists[0]?.name}</p>
          <a href="${track.external_urls.spotify}" target="_blank" class="btn btn-success">Escuchar</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// ======================
// FUNCIÓN PRINCIPAL
// ======================
window.onload = async function () {
  const token = await obtenerTokenSpotify();
  if (!token) return;

  try {
    const response = await fetch('https://api.spotify.com/v1/search?q=music&type=track&limit=6', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    mostrarTracks(data.tracks.items);
  } catch (error) {
    console.error('Error al obtener datos de Spotify:', error);
    document.getElementById("contenedor-cards").innerHTML = `<p class="text-danger">Error al cargar los datos de música.</p>`;
  }
};