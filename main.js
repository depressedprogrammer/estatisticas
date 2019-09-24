var logo = document.getElementById('logo');
logo.setAttribute('src','https://66.media.tumblr.com/4211d1c5cf721bf5da87229b492f6526/tumblr_plrx8mfmOA1sguk2k_540.gif')
logo.setAttribute('style','width:auto;height:200px;');

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
