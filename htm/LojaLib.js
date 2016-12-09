// Modelo 9 //

window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','iso-8859-1');$.src='//v2.zopim.com/?yxKk92aNK3QLpre2FwoK0mnX7qUVGqCl';z.t=+new Date;$.type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');

function AlteraTextoSitPedido(){
  var sitNovo=document.getElementById("idTxtSit1OrderFC");
  if(sitNovo)sitNovo.innerHTML="Pedido recebido, em análise";
  else{ 
   var sitCancelado=document.getElementById("idTxtSit2OrderFC");
   if(sitCancelado)sitCancelado.innerHTML="Cancelado";
   else{ 
    var sitEmAprovacao=document.getElementById("idTxtSit3OrderFC");
    if(sitEmAprovacao)sitEmAprovacao.innerHTML="Pagamento em análise";
    else{ 
     var sitPendente=document.getElementById("idTxtSit4OrderFC");
     if(sitPendente)sitPendente.innerHTML="Pendente";
     else{ 
      var sitAprovado=document.getElementById("idTxtSit5OrderFC");
      if(sitAprovado)sitAprovado.innerHTML="Pagamento aprovado, aguardar prazo de fabricação";
      else{ 
       var sitLiberado=document.getElementById("idTxtSit6OrderFC");
       if(sitLiberado)sitLiberado.innerHTML="Liberado para envio";
       else{ 
        var sitRemetido=document.getElementById("idTxtSit7OrderFC");
        if(sitRemetido)sitRemetido.innerHTML="Remetido";
       }
      }
     }
    }
   }
  }
} // func AlteraTextoSitPedido

function fundo() { // Fundo somente nas páginas normais, não no Chat
document.body.style.padding = "10px 0px 20px 1px";
document.body.style.font = "80% Tahoma";
document.body.style.margin = "0px auto";
document.body.style.textAlign = "left";
document.body.style.background = "#640000 url(../lojas/00020214/images/fundo01.jpg) no-repeat top center";
} // func

//Guarda em variável a página atual
var sPag=document.location.href.toUpperCase();
var sPagAtual=document.location.href.toUpperCase();

//Menu Topo
function AtivaLinkMenu1(){ 
  var sActive="";
  if(sPag.indexOf('CADASTRO.ASP')>=0)sActive="LinkCadastro";
  else if(sPag.indexOf('NEWSLETTER.ASP')>=0)sActive="LinkNewsletter";
  else if(sPag.indexOf('TRACK.ASP')>=0)sActive="LinkTrack";
  else if(sPag.indexOf('INDIQUE.ASP')>=0)sActive="LinkIndique";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu1_On";
}

//Filtros
function AjustaFiltros(){ 
  var bTemPathQts=false;
  var oUlPathCatQt=document.getElementById("idUlPathCatQtFC");
  if(oUlPathCatQt){bTemPathQts=true;}else{document.getElementById('idListaProdCategoriasFC').style.display='none';}
  var oUlAdic1Qt=document.getElementById("idUlAdic1QtFC");
  if(oUlAdic1Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional1FC').style.display='none';}
  var oUlAdic2Qt=document.getElementById("idUlAdic2QtFC");
  if(oUlAdic2Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional2FC').style.display='none';}
  var oUlAdic3Qt=document.getElementById("idUlAdic3QtFC");
  if(oUlAdic3Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional3FC').style.display='none';}
  //Caso não tenha produtos em categorias/adicionais encontrados, remove div
  if(!bTemPathQts)document.getElementById("idDivPath").style.display='none';
  //Caso não tenha filtros de busca, remove div com filtros
  var oUlPathSearch=document.getElementById("idUlPathSearchFC");
  if(oUlPathSearch==null)document.getElementById("idDivSearch").style.display='none';
}

function OnMouseOutMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Hover')ItemMenu.className="FundoMenu1_Off";
}
function OnMouseOverMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Off')ItemMenu.className="FundoMenu1_Hover";
}

function AtivaLinkMenu2(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkLanc";
  else if(sPag.indexOf('FALECONOSCO.ASP')>=0)sActive="LinkContato2";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkAjuda";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu2_On";
}

function OnMouseOutMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Hover')ItemMenu.className="FundoMenu2_Off";
}
function OnMouseOverMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Off')ItemMenu.className="FundoMenu2_Hover";
}

//Menu Rodapé
function AtivaLinkRodape(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkRodHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkRodCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkRodProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkRodLanc";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkRodPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("ENTREGA")>=0)sActive="LinkRodEntrega";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("SEGURAN")>=0)sActive="LinkRodSeg";
  else if(sPag.indexOf('BUSCAAVANCADA.ASP')>=0)sActive="LinkRodBusca";
  else if(sPag.indexOf('/NEWS')>=0)sActive="LinkRodNoticias";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkRodAjuda";
  if(sActive!="")document.getElementById(sActive).className="RodapeMenuAtual";
}

var oBaseTop=document.getElementsByTagName('base')[0];
if(oBaseTop)var IsBaseTop=(oBaseTop.target=='_top');
else var IsBaseTop=false;


//função para link no topo
function LinkTop(sTitle,sPage,sParam,sStyle){
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else{sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget='top';}else {sTarget='window';}
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0){
    document.write('<table width=100% class='+sStyle+'_On align=center OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
   else{
    document.write('<table width=100% class='+sStyle+'_Off align=center OnMouseOut=this.className="'+sStyle+'_Off" OnMouseOver=this.className="'+sStyle+'_Hover" OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
}

//função para link no rodapé
function LinkPag(sTitle,sPage,sParam,sStyle){ 
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else {sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget=' target=_top';}else {sTarget='';}
  var str='<a href=';
  str+=sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+' class='+sStyle;
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0)str +='_On';
  else str +='_Off';
  str+=sTarget+'>'+sTitle+'</a>';
  document.write(str);
}

//Função que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);}

//Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

//Função para mostrar valor economizado em produtos em promoção
function MostraEconomia(PrecoProd,PrecoOri){
if(PrecoProd!=PrecoOri)document.write("<font color=#3A0>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
}

function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}

//Personalização dos passos da compra com imagens
function ExibePassosCompra(){
try {
  var TemPassosCompra=document.getElementById("PassosCompra"); 
  if(TemPassosCompra){
  var passo1=document.getElementById("idPasso1FC"); 
  var passo2=document.getElementById("idPasso2FC"); 
  var passo3=document.getElementById("idPasso3FC"); 
  var passo4=document.getElementById("idPasso4FC"); 
  var passo5=document.getElementById("idPasso5FC"); 
  if(passo1.className=='EstPassoCompraAtual')
  passo1.innerHTML="<img src='"+ sCaminhoImages +"passo1atual.png' alt='Cesta' width='85' height='71' />";
  else if(passo1.className=='EstPassoCompraPre')
  passo1.innerHTML="<img src='"+ sCaminhoImages +"passo1pre.png' alt='Cesta' width='85' height='71' />";

  if(passo2.className=='EstPassoCompraAtual')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"passo2atual.png' alt='Frete' width='85' height='71' />";
  else if(passo2.className=='EstPassoCompraPre')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"passo2pre.png' alt='Frete' width='85' height='71' />";
  else if(passo2.className=='EstPassoCompraPos')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"passo2pos.png' alt='Frete' width='85' height='71' />";

  if(passo3.className=='EstPassoCompraAtual')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"passo3atual.png' alt='Pagamento' width='86' height='71' />";
  else if(passo3.className=='EstPassoCompraPre')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"passo3pre.png' alt='Pagamento' width='86' height='71' />";
  else if(passo3.className=='EstPassoCompraPos')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"passo3pos.png' alt='Pagamento' width='86' height='71' />";

  if(passo4.className=='EstPassoCompraAtual')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"passo4atual.png' alt='Cadastro' width='85' height='71' />";
  else if(passo4.className=='EstPassoCompraPre')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"passo4pre.png' alt='Cadastro' width='85' height='71' />";
  else if(passo4.className=='EstPassoCompraPos')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"passo4pos.png' alt='Cadastro' width='85' height='71' />";

  if(passo5.className=='EstPassoCompraAtual')
  passo5.innerHTML="<img src='"+ sCaminhoImages +"passo5atual.png' alt='Confirmação' width='86' height='71' />";
  else if(passo5.className=='EstPassoCompraPos')
  passo5.innerHTML="<img src='"+ sCaminhoImages +"passo5pos.png' alt='Confirmação' width='86' height='71' />";
  }
} catch(e) {}
}

//Personalização dos links Vakinha
function ExibeBotoesVakinha(){
  var oLinks=document.getElementsByTagName("a");
  if(oLinks){
    for(var i=0;i<oLinks.length;i++){
      if(oLinks[i].className=="EstVakinha")
        oLinks[i].innerHTML='<img src="'+ sCaminhoImages +'fazervakinha.png" alt="Fazer Vakinha" width="152" vspace="10" height="36" border="0" />';
    }
  }
}

function ExibeBotoesCesta(bExibeDuasLinhasBotoes){
  try{
    document.write("<style>.EstContinuarComprando{display:none;}</style>");
    var table=document.getElementById('TabItens');

    if(bExibeDuasLinhasBotoes){
      var row=table.insertRow(0);
      var cell=row.insertCell(-1);
      cell.colSpan=4;
      var sCel1="<table width=100%><tr><td align=center><table><tr><td align=center>";
            sCel1+="<a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"botcontcomprando.png' title='Continuar comprando' border='0'></a>";
            sCel1+="&nbsp;<a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"botrecalcular.png' title='Recalcular' border='0'></a>";
            sCel1+="&nbsp;<a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"botcomprar.png' title='Comprar' border='0'></a>";
          sCel1+="</table></table>";
      cell.innerHTML=sCel1;
    }

    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=4;
      var sCel2="<table width=100%><tr><td align=center><table><tr>";
            sCel2+="<td align='center'><a href=home.asp?IDLoja="+IDLojaNum+"><img src='"+ sCaminhoImages +"botcontcomprando.png' title='Continuar comprando' border='0'></a>";
            sCel2+="<td align='center'>&nbsp;<a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"botrecalcular.png' title='Recalcular' border='0'></a>";
            sCel2+="<td align='center'>&nbsp;<a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"botcomprar.png' title='Comprar' border='0'></a>";
          sCel2+="</table></table>";
    cell.innerHTML=sCel2;

  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}

/*
//Exibe botões de continuar comprando, recalcular e comprar
function ExibeBotoesCesta(){
  try{
    var table=document.getElementById('TabItens');
    var row=table.insertRow(0);
    var cell=row.insertCell(-1);
    cell.colSpan=5;
    cell.innerHTML="";
    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=5;
    cell.innerHTML='<table width="100%"><tr><td width="33%"><a href="home.asp?IDLoja='+ IDLoja +'"><img src="'+ sCaminhoImages +'botcontcomprando.png" alt="Continuar comprando" border="0" /></a></td><td width="33%" align="center"><input name="Recalcular" value="Recalcular" type="image" title="Recalcular" border="0" onclick="document.Lista.submit()" src="'+ sCaminhoImages +'botrecalcular.png" /></td><td width="33%" align="right"><input name="Comprar" value="Comprar" type="image" title="Comprar" border="0" src="'+ sCaminhoImages +'botcomprar.png" onclick="ComprarImg()" /></td></tr></table>';
  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}
*/

//Exibe botão confirma pedido
function ConfirmaPedido(botao){
  MostraAviso=false;
  botao.style.backgroundColor="gray";
  botao.style.color="#fcfcfc";
  botao.value='Confirmando...';
  botao.setAttribute('disabled','true');
  Valida(document.Form1);
}
function ExibeBotaoConfirmaPedido(){
  var ConteudoTopoPagConfirmar=document.getElementById("idTopoConfirmarFC"); 
  if(ConteudoTopoPagConfirmar){
    ConteudoTopoPagConfirmar.innerHTML="<br>&nbsp;<br><br><center><input type=button name=btConfirmarPedido class='BotConfPed' value='Confirmar pedido  >>' onclick='ConfirmaPedido(this);'></center><br>&nbsp;";
  }
}

function MostraDadosCesta(){
try {
  if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
  else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
  xmlhttp.open("GET","XMLCart.asp?IDLoja="+IDLojaNum+"",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  var x=xmlDoc.getElementsByTagName("item");
  var z=xmlDoc.getElementsByTagName("cart");
} catch(e) {}
  try{currencyProdCart=(z[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue);}
  catch(e){currencyProdCart="R$"}
  try{TotalQtyProdCart=(z[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue);}
  catch(e){TotalQtyProdCart="0"}
  try{subtotalProdCart=(z[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue);}
  catch(e){subtotalProdCart="0,00"}
  var iItensCesta=TotalQtyProdCart;
  if(iItensCesta==0){sItem="vazio"} 
  else if(iItensCesta==1){sItem="1 item"}
  else {sItem=iItensCesta+" itens"}
  try{document.getElementById("QtdItensCesta").innerHTML=sItem;}
  catch(e){}
  try{document.getElementById("ValorItensCesta").innerHTML=currencyProdCart + " " + subtotalProdCart;}
  catch(e){}
}

function FuncCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  if(iErr==0)MostraDadosCesta();
}

var oDivShowCartOnPage=null;
var iLastCartOnPage=0;

function ShowCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  var oPos=getPos(este);
  if(oDivShowCartOnPage==null){
    var oNewElement=document.createElement("div");
    oNewElement.setAttribute("id","DivShowCartOnPage"); 
    oDivShowCartOnPage=este.parentNode.insertBefore(oNewElement,este);
  }
  oDivShowCartOnPage.style.backgroundColor="#dedede";
  oDivShowCartOnPage.style.borderColor="#ffffff";
  oDivShowCartOnPage.style.color="#555555";
  oDivShowCartOnPage.style.border="1px solid #666666";
  oDivShowCartOnPage.style.marginTop="-100px";
  oDivShowCartOnPage.style.marginLeft="-70px";
  oDivShowCartOnPage.style.position="absolute";
  oDivShowCartOnPage.style.zIndex="1";
  oDivShowCartOnPage.style.visibility="visible";
  if(iErr==0)sBackColor="67a54b"; else sBackColor="949494"
  var sHTML="<table width=165 height=100 cellpadding=3 cellspacing=3>";
     sHTML+="<tr><td colspan=5 align=center style='background-color:#"+ sBackColor +";color:#ffffff;border-width:1;border-color:#3b6e22;font-weight:bold;font-size:11;font-family:verdana;cursor:pointer'>"+ sMsg +"</td></tr>";
     if(iErr==0){
       sHTML+="<tr height=50>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center><a href='addproduto.asp?idloja="+ IDLoja +"' style=color:#444444;text-decoration:none;font-size:11;>"+ sCartText +"</a></td>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center><a href='addproduto.asp?idloja="+ IDLoja +"' style=color:#444444;text-decoration:none;font-size:11;>"+ sCheckoutText +"</a></td>";
       sHTML+="<td align=right><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     else{
       sHTML+="<tr height=20>";
       sHTML+="<td colspan=5 align=center><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     sHTML+="</table>";
  oDivShowCartOnPage.style.top=oPos.y;
  oDivShowCartOnPage.style.left=oPos.x;
  oDivShowCartOnPage.innerHTML=sHTML;
  iLastCartOnPage++;
  setTimeout("if(iLastCartOnPage=="+ iLastCartOnPage +")oDivShowCartOnPage.style.visibility='hidden';",4000);
}

/*
try {
var payel = document.getElementById('idChkPaymentFC');
console.log(payel);
payel.onmouseover = function() {
console.log('pagto2');
TxtPagto=document.getElementById("idTxtPagto16FC");
console.log(TxtPagto);
if(TxtPagto) TxtPagto.innerHTML="<label for=Pagto16>VISA Débito (Electron)</label>";
} // func
} catch(e) {}
*/
