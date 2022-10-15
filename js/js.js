document.addEventListener('DOMContentLoaded', (event) => {
    const btnEnviar = document.querySelector('#btnEnviar');

    function determinaDescuento() {
        const categoria = document.querySelector('#categoria').value;
        const DESC_ESTUDIANTE = 0.8;
        const DESC_TRAINEE = 0.5;
        const DESC_JUNIOR = 0.15;
        let porcentaje;

        if (categoria === 'Estudiante')
            porcentaje = (1 - DESC_ESTUDIANTE);
        if (categoria === 'Trainee')
            porcentaje = (1 - DESC_TRAINEE);
        if (categoria === 'Junior')
            porcentaje = (1 - DESC_JUNIOR);

        return porcentaje;
    }

    function determinaPrecio() {
        const VALOR_UNITARIO = 200;
        const cantidad = Number(document.querySelector('#cantidad').value);
        let porcentaje = determinaDescuento();
        let precio = Math.round((VALOR_UNITARIO * porcentaje) * cantidad);
        return precio;
    }

    function validaFormulario() {
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const correo = document.querySelector('#correo').value;
        const cantidad = Number(document.querySelector('#cantidad').value);

        if (nombre === '' || apellido === '' || correo === '' || cantidad === '') {
            alert('Falta completar algún dato')
            return false;
        }
        return true;
    }

    btnEnviar.addEventListener('click', function (e) {
        e.preventDefault();
        let validado = validaFormulario();
        if (validado) {
            const salida = document.querySelector('#salida');
            let precio = determinaPrecio();
            salida.value = `Total a Pagar: $ ${precio}`;
        }
    });
});


