document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botonEnviar").addEventListener("click", function () {
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let fecha = document.getElementById("fecha_de_reserva").value;
        let horario = document.getElementById("horario").value;
        let comensales = document.getElementById("comensales").value;
        let color = document.getElementById("color").value;
        let demandas = document.getElementById("demandas").value;

        if (nombre === "" || email === "" || telefono === "" || fecha === "" || horario === "" || comensales === "") {
            alert("Por favor, completa todos los campos obligatorios.");
        } else {
            alert(`¡Reservación realizada con éxito!\n\n
Nombre: ${nombre}\n
Correo: ${email}\n
Teléfono: ${telefono}\n
Fecha: ${fecha}\n
Horario: ${horario}\n
Comensales: ${comensales}\n
Color del mantel: ${color}\n
Demandas especiales: ${demandas}`);
        }
    });
});
