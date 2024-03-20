function calcularmeses(){
    let meses = document.getElementById("valor1").value;
    let pagoMensual = 10;
    let totalPagado = 0;

    for (let i = 1; i <= meses; i++) {
        totalPagado += pagoMensual;
        document.writeln("Mes ", i, "- Pago mensual: ", pagoMensual, " Total pagado: ", totalPagado,"<br>");

        pagoMensual *= 2; 
    }

    document.writeln("Total pagado después de ", meses, " meses: ", totalPagado);
}
function calcularvalores() {
    let valor = parseFloat(document.getElementById("valor2").value);
    if (valor < 0) {
        document.writeln("El cubo del valor es: " + (valor ** 3));
    } else if (valor >= 0 && valor <= 100) {
        document.writeln("El cuadrado del valor es: " + (valor ** 2));
    } else if (valor > 100 && valor <= 1000) {
        document.writeln("El doble del valor es: " + (valor * 2));
    } else {
        document.writeln("El valor es mayor que 1000: " + valor);
    }
}

function calculartriangulo() {
    let valor = document.getElementById("valor3").value;
    for (let i = 1; i <= valor; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        document.writeln(linea);
    }
}

function multiplospum() {
    let inicial = document.getElementById("valor4").value;
    let final = document.getElementById("valor5").value;
    for (let i = inicial; i <= final; i++) 
    {
        
        if(i%10==7 || i%7==0)
        {
            document.writeln("PUM");
        }
        else{
            document.writeln(i);
        }
        
    }
}


