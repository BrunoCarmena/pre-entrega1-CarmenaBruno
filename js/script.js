let saldo = 100000;
let propiedad = null;

while (true) {
    let opcion = prompt(`Tu saldo actual es $${saldo}. ¿Qué deseas hacer? (comprar, vender, alquilar, salir)`);

    switch (opcion) {
        case 'comprar':
            if (saldo >= 50000) {
                propiedad = 'comprada';
                saldo -= 50000;
                alert('Has comprado la propiedad. Tu saldo actual es: $' + saldo);
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


