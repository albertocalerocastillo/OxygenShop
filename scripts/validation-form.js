const formulario = document.querySelector('.contacto-form__submit')

formulario.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const checkbox = document.querySelector('.contacto-form__cuadrado');

    let valido = true;

    const nameValue = nameInput.value.trim();
    if (nameValue.length < 2 || nameValue.length > 100) {
        nameInput.style.borderColor = 'red';
        valido = false;
    } else {
        nameInput.style.borderColor = '';
    }

    const emailValue = emailInput.value.trim();
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(emailValue)) {
        emailInput.style.borderColor = 'red';
        valido = false;
    } else {
        emailInput.style.borderColor = '';
    }

    if (!checkbox.checked) {
        checkbox.style.outline = '1px solid red';
        valido = false;
    } else {
        checkbox.style.outline = '';
    }

    if (valido) {
        const datos = {
            name: nameValue,
            email: emailValue,
    };

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Datos enviados:', data);
            alert('Formulario enviado a la API.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Ocurrió un error.');
        });
    }
});