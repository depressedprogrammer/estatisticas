var logo = document.getElementById('logo');
var divbotoes = document.getElementById('botoes');

conteudo = ['calculo basico']
for (x of conteudo){
  divbotoes.innerHtml = "";
  let txtnode = document.createTextNode(x);
  let botao = document.createElement('button');
  
  botao.appendChild(txtnode);
  botao.setAttribute('style','background-color: light gray;border:none;padding:10px 50px;');
  divbotoes.setAttribute('align','center');
  divbotoes.appendChild(botao);
}

logo.setAttribute('style','width:auto;height:200px;');
