var rol = document.getElementById('entrada');
var btok = document.getElementById('btok');
var tabela = document.createElement('table');
var entradas = []

btok.onclick = function(){
    var texto = rol.value.split(" ");
    
    entradas = texto.map(function (x) { 
        return parseInt(x, 10); 
    });
    
    var saida = document.getElementById("rol");
    saida.innerHTML = "";

    var desordenado = document.createTextNode(entradas);
    var p1 = document.createElement('p');
    p1.appendChild(desordenado);
    saida.appendChild(p1);

    var ordenado = document.createTextNode(entradas.sort());
    var p2 = document.createElement('p');
    p2.appendChild(ordenado);
    saida.appendChild(p2);

    function sum(total,next){
        return total + next;
    }
    
    var soma = entradas.reduce(sum);
    var total = document.getElementById('total');
    total.innerHTML = "";
    total.appendChild(document.createTextNode("Σ:" + soma))
    
}
