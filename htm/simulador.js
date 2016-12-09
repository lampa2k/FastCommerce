var cor = "";

var p = 0.39;
var t5x5 = 85/p;
var t10x10 = 110/p;
var t15x15 = 145/p;
var t20x20 = 160/p;
var t30x30 = 180/p;
//var t40x40 = 225/p;
var c5x5 = 87/p;
var c10x10 = 112/p;
var c15x15 = 147/p;
var c20x20 = 162/p;
var c30x30 = 182/p;
//var c40x40 = 227/p;
var t15x15i = t15x15+(20/p);
var t20x20i = t20x20+(20/p);
var t30x30i = t30x30+(20/p);
//var t40x40i = t40x40+(20/p);
var c15x15i = c15x15+(20/p);
var c20x20i = c20x20+(20/p);
var c30x30i = c30x30+(20/p);
//var c40x40i = c40x40+(20/p);

function preco_m2( forro, placas, costura, cor ) {
  var preco = eval( forro + placas + costura );
/*
  var ad_cor = 0;
  if( placas == '5x5' ) ad_cor = 5;
  else if( placas == '10x10' ) ad_cor = 15;
  else if( placas == '15x15' ) ad_cor = 35;
  else if( placas == '20x20' ) ad_cor = 30;
  else ad_cor = 30;
  var especial = ( cor.search(/(preto|branco|colorido|cinza|bege|claro|marfim|champ|off)/i) >= 0 );
  if( ad_cor && especial ) preco += ad_cor/p;
  // if( cor.search(/branco/i) >= 0 && placas != '10x10' && placas != '5x5' ) preco += 10/p;
*/
  return preco;
} // func

function email() {
  calcula();
  var texto = "";
  var forro = document.getElementsByName("forro")[0].value;
  var costura = document.getElementsByName("costura")[0].value;
  if( forro == "c" ) { forro = "Antiderrapante e antimicrobiano"; } else { forro = "TNT/Nylon"; }
  if( costura == "i" ) { costura = "Invisível"; } else { costura = "Zigue-Zague"; }
  texto = texto + "Largura: " + document.getElementsByName("largura")[0].value + "\r\n";
  texto = texto + "Comprimento: " + document.getElementsByName("comprimento")[0].value + "\r\n";
  texto = texto + "Diâmetro: " + document.getElementsByName("diametro")[0].value + "\r\n";
  texto = texto + "Forro: " + forro + "\r\n";
  texto = texto + "Placas: " + document.getElementsByName("placas")[0].value + "\r\n";
  texto = texto + "Costura: " + costura + "\r\n";
  texto = texto + "Cor: " + document.getElementsByName("cor")[0].value + "\r\n";
  texto = texto + "Obs: " + document.getElementsByName("obs")[0].value + "\r\n";
  texto = texto + "Preço: " + document.getElementById("preco").innerHTML + "\r\n";
  document.getElementsByName("Produto")[0].value = "\r\n" + texto;
  alert("Mensagem enviada. Aguarde uma resposta em até 24 horas. Caso não a receba, entre em contato por telefone, e-mail ou Chat. Obrigado!");
  document.getElementsByName("enviar")[0].submit();
} // func

function calcula( sender ) {
  var erro = 0;
  var input_largura = document.getElementsByName("largura")[0];
  var input_comprimento = document.getElementsByName("comprimento")[0];
  var input_diametro = document.getElementsByName("diametro")[0];
  if( sender && sender.name == 'diametro' && input_diametro.value ) {
    input_largura.value = '';
    input_comprimento.value = '';
  } else if( input_largura.value || input_comprimento.value ) input_diametro.value = '';
  var largura = input_largura.value;
  var comprimento = input_comprimento.value;
  var diametro = input_diametro.value;
  if( largura ) largura = largura.replace( ",", "." );
  if( comprimento ) comprimento = comprimento.replace( ",", "." );
  if( diametro ) diametro = diametro.replace( ",", "." );
  var area = largura * comprimento;
  if( diametro > 0 ) var area = (diametro/2) * (diametro/2) * 3.14;
  var forro = document.getElementsByName("forro")[0].value;
  var placas = document.getElementsByName("placas")[0].value;
  var costura = document.getElementsByName("costura")[0].value;
  if( placas == 'mand' && diametro <= 0 ) { alert("As placas em padrão Mandala são apenas para tapetes redondos."); }
  if( costura == 'i' && ( placas == '10x10' || placas == '5x5' || placas == 'mand' ) )
    { alert( "A costura invisível só é possível em placas de 15x15cm ou maiores." ); } // if
/*
  if( costura == 'i' && forro != 'c'  )
    { alert( "A costura invisível é feita apenas em tapetes com forro antiderrapante e antimicrobiano." ); } // if
  if( area >= 6.01 && placas == '5x5' )
    { alert( "Tapetes com mais de 6 metros quadrados só podem ser fabricados com placas de 10x10cm ou maiores." ); } // if
*/
  var cor = document.getElementsByName("cor")[0].value;
  try { var preco = preco_m2( forro, placas, costura, cor ); }
  catch(e) { erro = 1; }
  preco = area * preco;
  if( preco < 149.9 ) preco = 149.9;
  if( diametro > 0 ) preco = preco * 1.15;
  if( diametro > 0 && preco < 249 ) preco = 249.9;
  preco = preco.toFixed(2);
  preco = preco.replace( ".", "," );
  if( area && ! erro ) {
    area = area.toFixed(1).toString().replace(".",",");
    document.getElementById("area").innerHTML = area + " m2";
    document.getElementById("preco").innerHTML = "R$ " + preco;
  } else {
    document.getElementById("area").innerHTML = "";
    document.getElementById("preco").innerHTML = "Não foi possível calcular o preço deste tapete. Note as observações abaixo.";
  } // else
} // func
