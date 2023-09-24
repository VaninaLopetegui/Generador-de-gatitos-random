

const generarImg = () =>{
    const URLAPI = "https://api.thecatapi.com/v1/images/search";
    fetch(URLAPI)
    .then(response => response.json())
    .then(data => {
            let imagenGatito = document.getElementById("imagenGatito");
            imagenGatito.innerHTML = "";
            data.forEach(gatito => {
                let contenido = `
                    <img src="${gatito.url}" alt="">
                `;
                imagenGatito.innerHTML += contenido;
            })
        })
        .catch(error => console.log(error));
}

const botonGenerar = document.getElementById("botonGenerar").addEventListener("click", generarImg);