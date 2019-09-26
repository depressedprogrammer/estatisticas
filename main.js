function tituloprincipal(local){
  let a;
}



var conteudo = ['calculo basico','botao aleatorio', 'uh'];
var links = ['cb.html','https://theuselessweb.com/','#']

function updateBotoes(){
  const divbotoes = document.getElementById('botoes');
  divbotoes.innerHtml = "";
  divbotoes.setAttribute('align','center');
  for (x of conteudo){
    
    let txtnode = document.createTextNode(x);
    let botao = document.createElement('button');
    botao.setAttribute('onclick','window.location.href = "' + links[conteudo.indexOf(x)] + '"');
    botao.appendChild(txtnode);
    botao.setAttribute('style','cursor:pointer;background-color: gray;border:none;padding:10px 50px; margin-top:10px; margin-bottom:10px;');
    divbotoes.appendChild(botao);
    divbotoes.appendChild(document.createElement('br'));
  }
}
updateBotoes();
