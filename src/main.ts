let puntosTotales = 0;

const generarNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 11);
};

const generarNumeroCarta = (numeroAlea: number) => {
  if (numeroAlea > 7) {
    return numeroAlea + 2;
  }

  return numeroAlea;
};
const generarUrlCarta = (numeroCarta: number) => {
  switch (numeroCarta) {
    case 1:
      return "imagenes/1_as-copas.jpg";
    case 2:
      return "imagenes/2_dos-copas.jpg";
    case 3:
      return "imagenes/3_tres-copas.jpg";
    case 4:
      return "imagenes/4_cuatro-copas.jpg";
    case 5:
      return "imagenes/5_cinco-copas.jpg";
    case 6:
      return "imagenes/6_seis-copas.jpg";
    case 7:
      return "imagenes/7_siete-copas.jpg";
    case 10:
      return "imagenes/10_sota-copas.jpg";
    case 11:
      return "imagenes/11_caballo-copas.jpg";
    case 12:
      return "imagenes/12_rey-copas.jpg";
    default:
      return "imagenes/back.jpg";
  }
};

const mostrarUrlCarta = (url: string): void => {
  const elementoImagen = document.getElementById("carta");

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = url;
  }
};

const obtenerPuntosCarta = (numeroCarta: number) => {
  if (numeroCarta > 7) {
    return 0.5;
  }

  return numeroCarta;
};

const sumarPuntos = (puntos: number) => {
  return puntos + puntosTotales;
};

const actualizarPuntosTotales = (puntosSumados: number) => {
  puntosTotales = puntosSumados;
};

const revisarPartida = () => {
  if (puntosTotales === 7.5) {
    alert("Enhorabuena has ganado la partida");
  }

  if (puntosTotales > 7.5) {
    alert("Has perdido la partida");
  }
};

const btnPideCarta = document.getElementById("dameCarta");
const btnPlanto = document.getElementById("mePlanto");
const btnEmpezar = document.getElementById("empezarPartida");
const mensajeParrafo = document.getElementById("mensaje");
const partidaPosible = document.getElementById("seguir");
if (
  btnPlanto !== null &&
  btnPlanto !== undefined &&
  btnPlanto instanceof HTMLButtonElement
) {
  btnPlanto.addEventListener("click", () => {
    let mensaje = "";

    if (puntosTotales < 4) {
      mensaje = "Has sido muy conservador";
    } else if (puntosTotales === 5) {
      mensaje = "Te ha entrado el canguelo eh?";
    } else if (puntosTotales >= 6 && puntosTotales <= 7) {
      mensaje = "Casi,casi...";
    } else if (puntosTotales === 7.5) {
      mensaje = "¡Lo has clavado!¡Enhorabuena!";
    } else {
      mensaje = "Game Over,has perdido";
    }
    if (mensajeParrafo instanceof HTMLParagraphElement) {
      mensajeParrafo.textContent = mensaje;
    }
    if (btnPideCarta instanceof HTMLButtonElement) {
      btnPideCarta.disabled = true;
    }
  });
}

if (btnEmpezar instanceof HTMLButtonElement) {
  btnEmpezar.addEventListener("click", () => {
    puntosTotales = 0;

    const totalPuntuacion = document.getElementById("resultado");
    if (totalPuntuacion) {
      totalPuntuacion.textContent = "0";
    }
    const imagenCarta = document.getElementById("carta");
    if (imagenCarta instanceof HTMLImageElement) {
      imagenCarta.src = "imagenes/back.jpg";
    }
    if (btnPideCarta instanceof HTMLButtonElement) {
      btnPideCarta.disabled = false;
    }
    if (mensajeParrafo instanceof HTMLParagraphElement) {
      mensajeParrafo.textContent = "";
    }
  });
}

if (
  btnPideCarta !== null &&
  btnPideCarta !== undefined &&
  btnPideCarta instanceof HTMLButtonElement
) {
  btnPideCarta.addEventListener("click", () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = generarUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntosTotales(puntosSumados);
    const totalPuntuacion = document.getElementById("resultado");
    if (totalPuntuacion !== null && totalPuntuacion !== undefined)
      totalPuntuacion.textContent = puntosSumados.toString();

    revisarPartida();
  });
}
