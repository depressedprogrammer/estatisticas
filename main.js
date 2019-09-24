var logo = document.getElementById('logo');
var divbotoes = document.getElementById('botoes');

conteudo = ['calculo basico']
for (x of conteudo){
  divbotoes.innerHtml = "";
  let txtnode = createTextNode(x);
  let botao = createElement('button');
  
  botao.appendChild(txtnode);
  divbotoes.appendChild(botao);
}

logo.setAttribute = ('width','auto');
logo.setAttribute = ('height', '200');
