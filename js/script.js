function verificarEdad() {
    var edad = parseInt(prompt("Por favor, ingresa tu edad:"));

    if (!isNaN(edad)) {
        if (edad >= 18) {
            var tieneCarnet = prompt("¿Tienes carnet de conducir? (responde sí o no)").toLowerCase();
            if (tieneCarnet === "si") {
                alert("¡Puedes conducir!");
            } else if (tieneCarnet === "no") {
                alert("Lo siento, no puedes conducir sin carnet.");
            } else {
                alert("Respuesta inválida. Por favor, responde sí o no.");
            }
        } else {
            alert("Eres menor de edad, no puedes conducir.");
        }

        // Determinar la etapa de la vida
        if (edad >= 65) {
            alert("Estás en la vejez.");
        } else if (edad >= 35) {
            alert("Estás en la adultez plena.");
        } else if (edad >= 18) {
            alert("Estás en la juventud.");
        } else if (edad >= 13) {
            alert("Estás en la adolescencia.");
        } else {
            alert("Eres un niño.");
        }
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

// Llamar a la función
verificarEdad();



//SWTICH

function obtenerContinente(pais) {
    var continente;

    pais = pais.toLowerCase();

    switch (pais) {
        case "españa":
        case "francia":
        case "alemania":
        case "italia":
        case "inglaterra":
            continente = "Europa";
            break;
        case "estados unidos":
        case "canadá":
        case "méxico":
        case "brasil":
        case "argentina":
            continente = "América";
            break;
        case "china":
        case "japón":
        case "corea del sur":
        case "corea del norte":
        case "india":
            continente = "Asia";
            break;
        default:
            continente = "No identificado";
    }

    return continente;
}

var pais = prompt("Por favor, ingresa un país:");
var continente = obtenerContinente(pais);

if (continente !== "No identificado") {
    alert("El país " + pais + " está en el continente de " + continente);
} else {
    alert("No pudimos identificar el continente para el país ingresado.");
}

