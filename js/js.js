document.addEventListener('DOMContentLoaded', (event) => {

    const nombre = document.querySelector('#nombre');
    const categoria = document.querySelector('#categoria');
    const btnEnviar = document.querySelector('#btnEnviar');
    const btnBorrar = document.querySelector('#btnBorrar');
    const DESC_ESTUDIANTE = 0.8;
    const DESC_TRAINEE = 0.5;
    const DESC_JUNIOR = 0.15;
    const VALOR_UNITARIO = 200;
    console.log(document.querySelector('#cantidad').value);
    console.log(document.querySelector('#categoria').value);
    //const parrafo = document.querySelector('#parrafo');

    btnEnviar.addEventListener('click', function (e) {
        e.preventDefault();
        const cantidad = Number(document.querySelector('#cantidad').value);
        const salida = document.querySelector('#salida');
        let porcentaje = 0;
        let precio = 0;
        const cate = categoria.value;

        if (cate === 'Estudiante')
            porcentaje = 1 - DESC_ESTUDIANTE
        if (cate === 'Trainee')
            porcentaje = 1 - DESC_TRAINEE
        if (cate === 'Junior')
            porcentaje = 1 - DESC_JUNIOR

        precio = Math.round((VALOR_UNITARIO * porcentaje) * cantidad);
        console.log(precio);

        salida.value += precio;
    });
});


