const selectorMoneda = document.getElementById("currency-selector");
const simbolos = {
    usd: "$",
    eur: "€",
    gbp: "£",
};

const preciosUsd = [0, 25, 60];

const actualizarPrecios = (cambios, monedaSeleccionada) => {
    const tasaCambio = cambios[monedaSeleccionada];

    const elementosPrecio = document.querySelectorAll('.precio-card__price');

    elementosPrecio.forEach((elementoPrecio, index) => {
        const oferta = elementoPrecio.querySelector('span') ? elementoPrecio.querySelector('span').textContent : '';
        const precioActualizado = preciosUsd[index] * tasaCambio;
        const precioFormateado = precioActualizado % 1 === 0 ? precioActualizado : precioActualizado.toFixed(2);
        elementoPrecio.innerHTML = `${simbolos[monedaSeleccionada]}${precioFormateado} <span>${oferta}</span>`;
    });
};

selectorMoneda.addEventListener("change", event => {
    const urlApi = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';
    const monedaSeleccionada = event.target.value.toLowerCase();

    fetch(urlApi)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error con las tasas de cambio");
            }
            return response.json();
        })
        .then(data => {
            actualizarPrecios(data.eur, monedaSeleccionada);
        })
        .catch(error => {
            console.error(error.message);
        });
});

selectorMoneda.dispatchEvent(new Event("change"));