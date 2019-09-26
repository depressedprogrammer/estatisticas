function tituloprincipal(local){
  let a;
}



var conteudo = ['calculo basico','botao aleatorio', 'uh'];
var links = ["cb.html","https://theuselessweb.com/","#"];
var botoes = document.querySelectorAll("div[class='options']");
botoes[0].onclick = function() {window.location.href = links[0];}
botoes[1].onclick = function() {window.location.href = links[1];}
botoes[2].onclick = function() {window.location.href = links[2];}
