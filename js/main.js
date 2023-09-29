const generarImg = (cantidad) => {
    const API_KEY = "live_dRoZM0GeKHT6fN2zwtM0OTnz5nKaKmjipS8P9DBRmQCy2RB6cBX9gpEkIilAUSfC";
    const URLAPI = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&limit=${cantidad}`;
    fetch(URLAPI)
        .then(response => response.json())
        .then(data => {
            let imagenesGatitos = document.getElementById("imagenesGatitos");
            imagenesGatitos.innerHTML = "";
            data.forEach(gatito => {
                let contenido = `
                <img src="${gatito.url}" alt="">
                `;
                imagenesGatitos.innerHTML += contenido;
            })
        })
        .catch(error => console.log(error));
}

const selectCantidad = document.getElementById("cantidadGatitos");
const botonGenerar = document.getElementById("botonGenerar");

const actualizarCantidad = () => {
    const cantidadSeleccionada = selectCantidad.value;
    let cantidad = 1;
    if (cantidadSeleccionada === "cincoGatitos") {
        cantidad = 5;
    } else if (cantidadSeleccionada === "MuchosGatitos") {
        cantidad = 10;
    }
    generarImg(cantidad);
};

botonGenerar.addEventListener("click", actualizarCantidad);
selectCantidad.addEventListener("change", actualizarCantidad);

