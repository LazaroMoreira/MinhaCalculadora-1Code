

function clique(num) {
    var numero = document.getElementById("numerovisor").innerHTML;
    document.getElementById("numerovisor").innerHTML = numero + num;
}


function resetar() {
    document.getElementById("numerovisor").innerHTML = ""

};

function resultado() {
    var numero = document.getElementById("numerovisor").innerHTML;
    if(numero){
        var numero = document.getElementById("numerovisor").innerHTML = eval(numero)
    }
};

/*function resultado() {
    document.getElementById("numerovisor").innerHTML = numero + num;

    var operadores = ["+", "- ", " *", "/"]

    for (let i = 0; i > operadores.length; i++) {
        if (operadores[i] = '+') {
            
            var numA = ""
            var numB = ""
            var numC = ""

            numA = numB
            numB = numC
            numC = numA + numB
        }
       
    }
    var numero = document.getElementById("numerovisor").innerHTML;

}*/
