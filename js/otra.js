function calcularPresupuesto() {

    let invitados = Number(document.getElementById("numero-inv").value);
    let comida = Number(document.getElementById("cost-comida").value);
    let bebida = Number(document.getElementById("cost-bebida").value);
    let decoracion = Number(document.getElementById("cost-decor").value);
    let musica = Number(document.getElementById("cost-musica").value);
    let porcentaje = Number(document.getElementById("propina-porc").value);

    if (invitados <= 0) {
        alert("El número de invitados debe ser mayor que cero");
        return;
    }

    let comidaTotal = invitados * comida;
    document.getElementById("comida-total-s").innerHTML = comidaTotal.toLocaleString("es-CO");

    let bebidaTotal = invitados * bebida;
    document.getElementById("bebida-total-s").innerHTML = bebidaTotal.toLocaleString("es-CO");

    document.getElementById("decoracion").innerHTML = decoracion.toLocaleString("es-CO");

    document.getElementById("musica").innerHTML = musica.toLocaleString("es-CO");

    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    document.getElementById("subtotal").innerHTML = subtotal.toLocaleString("es-CO");

    let propina = subtotal * (porcentaje / 100);
    document.getElementById("propina").innerHTML = propina.toLocaleString("es-CO");

    let totalGeneral = subtotal + propina;
    document.getElementById("total-general").innerHTML = totalGeneral.toLocaleString("es-CO");

    let costoInvitado = totalGeneral / invitados;
    document.getElementById("costo-inv").innerHTML = costoInvitado.toLocaleString("es-CO");

}