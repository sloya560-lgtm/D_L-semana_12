
// 3.1 - PUEDE VOTAR
function votar() {
    var edad = document.getElementById("edad").value;
    if (edad >= 18) {
        document.getElementById("resul").innerHTML = "Puedes votar.";
    } else {
        document.getElementById("resul").innerHTML = "No puedes votar, eres menor de edad.";
    }
}

// 3.2 - SUELDO SEMANAL 
function sueldoSemanal() {
    var horas = document.getElementById("horas").value;
    var pago  = document.getElementById("pago").value;
    var sueldo;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        var horasNormales = 40 * pago;
        var horasExtra    = (horas - 40) * (pago * 2);
        sueldo = horasNormales + horasExtra;
    }
    document.getElementById("resul").innerHTML = "Tu sueldo semanal es: $" + sueldo;
}

// 3.3 - REGALO DÍA DEL AMOR
function regalo() {
    var presupuesto = document.getElementById("presupuesto").value;
    if (presupuesto <= 10) {
        document.getElementById("resul").innerHTML = "Puedes comprar: Tarjeta";
    } else if (presupuesto <= 100) {
        document.getElementById("resul").innerHTML = "Puedes comprar: Chocolates";
    } else if (presupuesto <= 250) {
        document.getElementById("resul").innerHTML = "Puedes comprar: Flores";
    } else {
        document.getElementById("resul").innerHTML = "Puedes comprar: Anillo";
    }
}

// 3.4 - ESTACIONAMIENTO
function estacionamiento() {
    var horas = document.getElementById("horas").value;
    var costo = 0;
    if (horas <= 2) {
        costo = horas * 5;
    } else if (horas <= 5) {
        costo = (2 * 5) + ((horas - 2) * 4);
    } else if (horas <= 10) {
        costo = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    } else {
        costo = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }

    document.getElementById("resul").innerHTML = "El costo total es: $" + costo;
}

// 3.5 - PERSONA DE MENOR EDAD
function menorEdad() {
    var nombre1 = document.getElementById("nombre1").value;
    var edad1   = Number(document.getElementById("edad1").value);
    var nombre2 = document.getElementById("nombre2").value;
    var edad2   = Number(document.getElementById("edad2").value);
    var nombre3 = document.getElementById("nombre3").value;
    var edad3   = Number(document.getElementById("edad3").value);
    var nombreMenor;
    var edadMenor;
    if (edad1 <= edad2 && edad1 <= edad3) {
        nombreMenor = nombre1;
        edadMenor   = edad1;
    } else if (edad2 <= edad1 && edad2 <= edad3) {
        nombreMenor = nombre2;
        edadMenor   = edad2;
    } else {
        nombreMenor = nombre3;
        edadMenor   = edad3;
    }
    document.getElementById("resul").innerHTML =
        "La persona más joven es: " + nombreMenor + " con " + edadMenor + " años.";

}

// 3.6 - DESCUENTO ARTÍCULO
function descuento() {
    var precio = document.getElementById("precio").value;
    var porcentaje;
    var descuento;
    var precioFinal;
    if (precio >= 200) {
        porcentaje = 15;
    } else if (precio > 100) {
        porcentaje = 12;
    } else {
        porcentaje = 10;
    }
    descuento   = precio * (porcentaje / 100);
    precioFinal = precio - descuento;
    document.getElementById("resul").innerHTML =
        "Descuento: " + porcentaje + "% ($" + descuento.toFixed(2) + ")" +
        " | Precio final: $" + precioFinal.toFixed(2);

}

// 3.7 - BECAS UNIVERSITARIAS
function beca() {
    var edad     = Number(document.getElementById("edad").value);
    var promedio = Number(document.getElementById("promedio").value);
    if (edad > 18) {
        if (promedio >= 9) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $2,000.00";
        } else if (promedio >= 7.5) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $1,000.00";
        } else if (promedio >= 6) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $500.00";
        } else {
            document.getElementById("resul").innerHTML = "Recibirás una carta de invitación a mejorar.";
        }
    } else {
        if (promedio >= 9) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $3,000.00";
        } else if (promedio >= 8) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $2,000.00";
        } else if (promedio >= 6) {
            document.getElementById("resul").innerHTML = "Tu beca es de: $1,000.00";
        } else {
            document.getElementById("resul").innerHTML = "Recibirás una carta de invitación a mejorar.";
        }
    }
}

// 3.8 - BONO EMPRESA (antigüedad vs sueldo)
function bonoEmpresa() {
    var antiguedad = Number(document.getElementById("antiguedad").value);
    var sueldo     = Number(document.getElementById("sueldo").value);
    var bonoAntiguedad;
    var bonoSueldo;
    var bonoFinal;
    // Bono por antigüedad
    if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad = sueldo * 0.20;
    } else if (antiguedad >= 5) {
        bonoAntiguedad = sueldo * 0.30;
    } else {
        bonoAntiguedad = 0;
    }
    // Bono por sueldo
    if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else {
        bonoSueldo = sueldo * 0.10;
    }
    // Asignacion
    if (bonoAntiguedad >= bonoSueldo) {
        bonoFinal = bonoAntiguedad;
        document.getElementById("resul").innerHTML =
            "Bono asignado (por antigüedad): $" + bonoFinal.toFixed(2);
    } else {
        bonoFinal = bonoSueldo;
        document.getElementById("resul").innerHTML =
            "Bono asignado (por sueldo): $" + bonoFinal.toFixed(2);
    }

}

// 3.9 - SEGURO DE AUTO
function seguroAuto() {
    var poliza     = document.getElementById("poliza").value;
    var edad       = Number(document.getElementById("edad").value);
    var alcohol    = document.getElementById("alcohol").value;
    var lentes     = document.getElementById("lentes").value;
    var enfermedad = document.getElementById("enfermedad").value;
    var costoBase;
    var cargo = 0;
    if (poliza == "A") {
        costoBase = 1200;
    } else {
        costoBase = 950;
    }
    if (alcohol == "si") {
        cargo = cargo + (costoBase * 0.10);
    }
    if (lentes == "si") {
        cargo = cargo + (costoBase * 0.05);
    }
    if (enfermedad == "si") {
        cargo = cargo + (costoBase * 0.05);
    }
    if (edad > 40) {
        cargo = cargo + (costoBase * 0.20);
    } else {
        cargo = cargo + (costoBase * 0.10);
    }
    var costoTotal = costoBase + cargo;
    document.getElementById("resul").innerHTML =
        "El costo de tu póliza es: $" + costoTotal.toFixed(2);
}

// 3.10 - VACACIONES
function vacaciones() {
    var presupuesto = Number(document.getElementById("presupuesto").value);
    var costoKm     = Number(document.getElementById("costoKm").value);
    var costoMexico   = 750  * costoKm * 2;
    var costoPV       = 800  * costoKm * 2;
    var costoAcapulco = 1200 * costoKm * 2;
    var costoCancun   = 1800 * costoKm * 2;
    if (presupuesto >= costoCancun) {
        document.getElementById("resul").innerHTML = "Puedes ir a: Cancún";
    } else if (presupuesto >= costoAcapulco) {
        document.getElementById("resul").innerHTML = "Puedes ir a: Acapulco";
    } else if (presupuesto >= costoPV) {
        document.getElementById("resul").innerHTML = "Puedes ir a: Puerto Vallarta";
    } else if (presupuesto >= costoMexico) {
        document.getElementById("resul").innerHTML = "Puedes ir a: México";
    } else {
        document.getElementById("resul").innerHTML = "Tu presupuesto no alcanza, debes quedarte en casa.";
    }
}

// 3.11 - BONO POR ANTIGÜEDAD (tienda)
function bonoAntiguedad() {
    var antiguedad = Number(document.getElementById("antiguedad").value);
    var bono;
    if (antiguedad == 1) {
        bono = 100;
    } else if (antiguedad == 2) {
        bono = 200;
    } else if (antiguedad == 3) {
        bono = 300;
    } else if (antiguedad == 4) {
        bono = 400;
    } else if (antiguedad == 5) {
        bono = 500;
    } else if (antiguedad > 5) {
        bono = 1000;
    } else {
        document.getElementById("resul").innerHTML = "Ingresa un valor válido de antigüedad.";
        return;
    }

    document.getElementById("resul").innerHTML = "Tu bono es de: $" + bono;
}

// 3.12 - SUELDO SEMANAL (horas extra escalonadas)
function sueldoExtra() {
    var horas = Number(document.getElementById("horas").value);
    var pago  = Number(document.getElementById("pago").value);
    var sueldo;
    if (horas > 50) {
        document.getElementById("resul").innerHTML = "No está permitido trabajar más de 50 horas.";
        return;
    }
    if (horas <= 40) {
        sueldo = horas * pago;
    } else if (horas <= 45) {
        sueldo = (40 * pago) + ((horas - 40) * (pago * 2));
    } else {
        sueldo = (40 * pago) + (5 * (pago * 2)) + ((horas - 45) * (pago * 3));
    }

    document.getElementById("resul").innerHTML = "Tu sueldo semanal es: $" + sueldo.toFixed(2);
}

// 3.13 - VIAJE DE ESTUDIOS
function viajeEstudios() {
    var alumnos = Number(document.getElementById("alumnos").value);
    var costoPorAlumno;
    if (alumnos > 100) {
        costoPorAlumno = 20;
    } else if (alumnos >= 50) {
        costoPorAlumno = 35;
    } else if (alumnos >= 20) {
        costoPorAlumno = 40;
    } else {
        costoPorAlumno = 70;
    }
    var costoTotal = alumnos * costoPorAlumno;
    document.getElementById("resul").innerHTML =
        "Costo por alumno: $" + costoPorAlumno +
        " | Costo total del grupo: $" + costoTotal;

}