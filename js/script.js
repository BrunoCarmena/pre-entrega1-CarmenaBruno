function seleccionarVino() {
    var tipoVino = prompt("¿Qué tipo de vino prefieres? (tinto, blanco, rosado)").toLowerCase();

    switch (tipoVino) {
        case "tinto":
            return 20;
        case "blanco":
            return 18;
        case "rosado":
            return 15;
        default:
            return 0;
    }
}

function calcularDescuento(total) {
    var descuento = 0;

    if (total > 50) {
        descuento = total * 0.1; // 10% de descuento si el total es mayor a 50
    }

    return descuento;
}

function realizarCompra() {
    var total = 0;
    var continuar = true;

    while (continuar) {
        var precio = seleccionarVino();

        if (precio === 0) {
            alert("Tipo de vino no válido. Por favor, elige un tipo de vino válido.");
        } else {
            total += precio;

            continuar = confirm("¿Deseas agregar más vinos a tu compra?");
        }
    }

    var descuento = calcularDescuento(total);
    var totalConDescuento = total - descuento;

    alert("Total sin descuento: $" + total.toFixed(2) + "\nDescuento: $" + descuento.toFixed(2) + "\nTotal con descuento: $" + totalConDescuento.toFixed(2));
}

realizarCompra();


