function gestionarPropiedad() {
    let saldo = parseFloat(prompt("Ingrese su saldo inicial (entre 50 y 100,000,000):"));

    if (isNaN(saldo) || saldo < 50 || saldo > 100000000) {
        alert("Por favor, ingrese un saldo válido entre 50 y 100,000,000.");
        return;
    }

    let propiedad = null;

    while (true) {
        let opcion = prompt(`Tu saldo actual es $${saldo}. ¿Qué deseas hacer? (comprar, vender, alquilar, salir)`);

        if (!opcion) {
            alert('Por favor, ingresa una opción.');
            continue;
        }

        opcion = opcion.toLowerCase();

        switch (opcion) {
            case 'comprar':
                let precioInmueble = 50000;
                let descuento = precioInmueble * 0.15;

                if (saldo >= (precioInmueble - descuento)) {
                    propiedad = 'comprada';
                    saldo -= (precioInmueble - descuento);
                    alert(`Has comprado la propiedad con un 15% de descuento. Tu saldo actual es: $${saldo}`);
                } else {
                    alert('No tienes suficiente dinero para comprar la propiedad.');
                }
                break;

            case 'vender':
                if (propiedad === 'comprada') {
                    propiedad = null;
                    saldo += 60000;
                    alert('Has vendido la propiedad. Tu saldo actual es: $' + saldo);
                } else {
                    alert('No tienes una propiedad para vender.');
                }
                break;

            case 'alquilar':
                if (propiedad === 'comprada') {
                    saldo += 3000;
                    alert('Has alquilado la propiedad. Tu saldo actual es: $' + saldo);
                } else {
                    alert('No tienes una propiedad para alquilar.');
                }
                break;

            case 'salir':
                alert('Gracias por usar nuestro servicio. Tu saldo final es: $' + saldo);
                return;

            default:
                alert('Opción no válida. Por favor, elige una opción válida.');
        }
    }
}

gestionarPropiedad();


