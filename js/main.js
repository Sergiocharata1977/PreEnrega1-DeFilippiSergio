function calcularCuota() {
    let prestamo = parseFloat(document.getElementById("prestamo").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let interes = parseFloat(document.getElementById("interes").value) / 100;
  
    if (prestamo <= 0 || cuotas <= 0 || interes <= 0) {
      alert("Ingrese valores válidos");
      return;
    }
  
    let interesMensual = interes / 12;
    let factor = (interesMensual * (1 + interesMensual) ** cuotas) / (((1 + interesMensual) ** cuotas) - 1);
    let cuota = prestamo * factor;
  
    let resultado = "<table><tr><th>Número de Cuota</th><th>Monto de la Cuota</th></tr>";
    let saldo = prestamo;
    for (let i = 1; i <= cuotas; i++) {
      resultado += "<tr><td>" + i + "</td><td>" + cuota.toFixed(2) + "</td></tr>";
      saldo -= cuota;
    }
    resultado += "</table>";
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  