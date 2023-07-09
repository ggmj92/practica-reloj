function horaActual() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let mins = fecha.getMinutes();
    let secs = fecha.getSeconds();
    let actual = "AM";

    if (horas > 12) {
        actual = "PM"
    }

    horas = (horas < 10) ? "0" + horas : horas;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    let hora = horas + ":" + mins + ":" + secs + "" + actual;

    document.getElementById("reloj").innerHTML = hora;
    let reloj = setTimeout(function(){ horaActual()}, 1000);

}

horaActual();