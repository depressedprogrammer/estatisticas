var inicio = document.getElementById('inicio');
inicio.appendChild(entry('entrada','text','Insira o ROL aqui','btok'));

var btok = document.getElementById('btok');
var rol = document.getElementById('entrada');

var tabela = document.createElement('table');
var entradas = []

btok.onclick = function(){
    var texto = rol.value.split(" ");
    
    entradas = texto.map(function (x) { 
        return parseInt(x, 10); 
    });
    
    
    var saida = document.getElementById("rol");
    saida.innerHTML = "";

    saida.appendChild(document.createElement('br'));
    var tabela = createTable(entradas);
    saida.appendChild(tabela);
    
    saida.appendChild(document.createElement('br'));

    var tabela = createTable(entradas.sort((a,b) => a-b));
    saida.appendChild(tabela);

    function sum(total,next){
        return total + next;
    }
    
    var soma = entradas.reduce(sum);

    var res = document.getElementById('resultados');
    res.innerHTML = '';
    res.appendChild(ptxt("Σ:" + soma));

    let temp = entradas.sort((a,b) => a-b)[entradas.length - 1] - entradas.sort((a,b) => a-b)[0];
    res.appendChild(ptxt("Amplitude total: " + temp));
    temp = entradas.length ** 0.5;
    res.appendChild(ptxt("Cálculo das classes: " + temp));
    res.appendChild(entry('qntclasses','number','Usar qnts classes?','classesok'));
}

function ptxt(string){
    let ptxt = document.createElement('p');
    ptxt.appendChild(document.createTextNode(string));
    return ptxt;
}
function entry(identrada, tipoentrada, dicaentrada, idbotao){
    let entry = document.createElement('input');
    entry.setAttribute('type',tipoentrada);
    entry.setAttribute('placeholder',dicaentrada);
    entry.setAttribute('id',identrada);
    let ok = document.createElement('button');
    ok.appendChild(document.createTextNode('ok'));
    ok.setAttribute('id',idbotao);
    let p = document.createElement('p');
    p.appendChild(entry);
    p.appendChild(ok);
    return p;
}

function createTable(vetorrecebido){
    var vetor = vetorrecebido.concat();
    var style = "font-size: 15px; border: 1px solid black; border-collapse: collapse;";
    j = 5;
    i = vetor.length/5;
    x = j * i;
    for (a = 0; a<x; a++){
        vetor.push('');
    }
    var tabela = document.createElement('table');
    tabela.setAttribute('style',style);
    for (a=0;a<i; a++){
        var tr = document.createElement('tr');
        for (b=0;b<j;b++){
            var td = document.createElement('td');
            td.setAttribute('style',style +"padding:5px;");
            var txt = document.createTextNode(vetor.shift());
            td.appendChild(txt);
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
    return tabela;
}