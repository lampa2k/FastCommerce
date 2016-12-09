// Funções javascript Faca na Bota

function premium() {
  document.write("<br><b>Produto tipo exportação. É caracterizado pela maciez, pelagem brilhante, tamanho grande e excepcional beleza.</b>");
} // func

function unidades( id, el_id ) {
  ajax( "https://erpfc.websiteseguro.com/unidades.php?idloja=20214&id="+id, el_id, "unidades_write" );
} // func

function unidades_write( response, el_id ) {
  if( response > 0 ) {
   var text = " unidade em estoque";
   if( response > 1 ) text = " unidades em estoque";
   document.getElementById(el_id).innerHTML = response+text+"<br>";
  } // if
} // func

function ajax( url, el_id, func ) {
  var xmlhttp;
  if (window.XMLHttpRequest)
    { // IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else { // IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  } // else
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
     if( xmlhttp.responseText ) eval( func+'("'+xmlhttp.responseText+'","'+el_id+'")' );
    } // if
  } // func
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
} // func

$(document).ready(function() {
 $('.fancybox').fancybox({
    helpers : {
        overlay : { css : { 'background' : 'rgba(30, 5, 5, 0.9)' } },
        thumbs : { width: 80, height: 50 }
    },
    preload: true,
    //autoSize: false,
    //width: 800,
    openEffect: 'none',
    closeEffect: 'none',
    nextEffect: 'none',
    prevEffect: 'none'
   });
});

function isdef( nome ) { // Testar se variável está definida
  return ( typeof nome !== 'undefined' );
} // func

function link_custom( arq, classname, texto ) { // Link para arquivo custom
	document.write( "<a href=custom.asp?IDLoja="+idloja+"&arq="+arq+" class="+classname+">"+texto+"</a>" );
} // func

function link_promocao( cat, classname, texto ) { // Link para promocões
	document.write( "<a href='ListaProdutos.asp?IDLoja="+idloja+"&Avancada=True&Digitada=True&texto=&Any=False&IDCategoria="+cat+"&PrecoDe=&PrecoAte=&Promocao=True&Adicional1=97411&Adicional2=0&order=2' class="+classname+">"+texto+"</a>" );
} // func

function link_texto( busca, classname, texto, disp ) { // Link de busca por texto
	document.write( '<a href=ListaProdutos.asp?Adicional1='+disp+'&Avancada=True&Texto="'+busca+'"&IDLoja='+idloja+'&Digitada=True class='+classname+'>'+texto+'</a>' );
} // func

function link_pronta( cat, classname, texto ) { // Link para pronta entrega
	document.write( "<a href=ListaProdutos.asp?IDLoja="+idloja+"&Avancada=True&Digitada=True&texto=&Any=False&IDCategoria="+cat+"&Adicional1="+ProntaEntrega+" class="+classname+">"+texto+"</a>" );
} // func

function link_cat( cat, classname, texto, disp ) { // Link para categoria
	document.write( "<a href=ListaProdutos.asp?Adicional1="+disp+"&IDLoja="+idloja+"&Avancada=True&Digitada=True&texto=&Any=False&IDCategoria="+cat+" class="+classname+">"+texto+"</a>" );
} // func

function collapse( el, img ) { // Expande ou retrai elemento
	if( el.is(':hidden') ) img.attr("src",imgloja+"mais.gif");
	else img.attr("src",imgloja+"menos.gif");
} // func

function get(id) { // Retorna elemento por id, nome ou classe
	var el = document.getElementById(id);
	if( ! el ) el = document.getElementsByName(id)[0];
	if( ! el ) {
		var els = document.getElementsByTagName('*'), i;
		for( i in els ) if( els[i].className == id ) el = els[i];
	} // if
	return el;
} // func

function select( name, value ) { // Ativa opção selecionada em objeto select
	var el = get(name);
	var ops = el.options, i;
	for( i in ops ) if( ops[i].value == value ) { ops[i].selected = true; break; }
	if( ops[i].selected ) return true;
} // func

function debug( value ) { // Exibe valor no console (Google Chrome) ou em janela
	if( typeof value == "object" ) value = JSON.stringify(value);
	var debug = window.console.log( value );
	if( ! window.console.log ) debug = alert( value );
	if( debug ) return true;
} // func

function hide(link,mega) {
  setTimeout( function() {
    if( ! link.isOver ) mega.hide();
    link.isOver = false;
window.console.log("out: "+link.isOver);
    link.attr('class', 'FundoMenu2_Off');
  }, 300 )
} // func

function megamenu(cat) {
  var mega = $("#mega_"+cat);
  var link = $("#link_"+cat);
  link.isOver = true;
window.console.log("over: "+link.isOver);
  link.attr('class', 'FundoMenu2_Hover');
  setTimeout( function() { mega.show(); }, 800 );
  mega.mouseover( function() { mega.show(); } );
  link.mouseout( function() { hide(link,mega); } );
  mega.mouseout( function() { hide(link,mega); } );
} // func

var Juros=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
if( ! window.MostraMaxParcela ) function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="<font color=#990000>&nbsp;sem&nbsp;juros</font>";
  document.write("Em até&nbsp;<b>"+MaxParcelas+"x</b>"+ComSem+" de&nbsp;<b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");
} // func

function garantia(meses) {
	if( ! meses ) var meses = 3;
	document.write("<b>Este produto tem "+meses+" meses de garantia sobre defeitos de fabricação.</b><br><br>");
} // func

function indisponivel( ref, disp, cat ) {
if( cat.search(/bolsas/i) < 1 && cat.search(/malas/i) < 1 && cat.search(/necessaires/i) < 1 && cat.search(/pastas/i)< 1 && cat.search(/frasqueiras/i)< 1 && cat.search(/maletas/i)< 1 && cat.search(/mochilas/i)< 1 ) return false;
if( disp.search(/encomenda/i) < 1 ) return false;
document.write( "<tr><td nowrap><b style='font-size: 10pt;'>Produto esgotado<br><a href='mailto:contato@facanabota.com?subject=Referência " + ref + "&body=Oi. Gostaria de ser avisado(a) quando este produto estiver em estoque. Obrigado.'>Avise-me quando estiver disponível</a></b><br><br>");
} // func

function infor() {
	document.write("<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a><br>");
} // func

function pelemedida(cat) {
  if( cat.search(/peles/i) > 0 && cat.search(/ovina/i) < 0 ) {
    document.write("<a href=#medida_pele>Como é feita a medição das peles?</a>");
  } // if
} // func

function forsan() {
	document.write("<br>Forro em tecido de algodão dublado com látex com tratamento bactericida<!-- (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>-->");
} // func

function fornyl() {
	document.write("<br>Forro em tecido de Nylon dublado com espuma de 1mm (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>");
} // func

function fortnt() {
	document.write("<br>Forro em tecido de TNT (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>");
} // func

function forst() {
	document.write("<br>Forro em tecido de TNT (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>");
} // func

function forcor() {
	document.write("<br>Forro em Corano (antimicrobiano) (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>");
} // func

function foralg() {
	document.write("<br>Forro de algodão (<a href=#desc>O que é isso?</a>)<br><br><a href=#desc>Veja mais informações nas descrições abaixo</a>");
} // func

function cosinv() {
	document.write("<br>Costura invisível (embutida) (<a href=#desc>O que é isso?</a>)");
} // func

function coszig() {
	document.write("<br>Costura zigue-zague (<a href=#desc>O que é isso?</a>)");
} // func

function comborda() {
	document.write("<br>Borda de 5-7cm (<a href=#desc>O que é isso?</a>)");
} // func

function semborda() {
	document.write("<br>Acabamento virado de cerca de 1cm (<a href=#desc>O que é isso?</a>)");
} // func

function sborda() {
	document.write("<br>Sem borda (<a href=#desc>O que é isso?</a>)");
} // func

function chat() {
  try { $zopim.livechat.window.toggle(); } catch(e) { alert("Aguarde um momento, o Chat está inicializando.\n\nSe o Chat não abrir logo, você ainda pode nos contatar pelo e-mail contato@facanabota.com ou pelos telefones informados no rodapé ou na página Fale Conosco."); }
  //MostraChatP();
} // func

function pronta() {
  document.write("<div class=pronta>Produto a pronta entrega!<p class=disponibilidade><a href='custom.asp?IDLoja=20214&arq=faq.html#pronta'>Enquanto durarem os estoques</a></p></div>");
} // func

function semconsulta( estofado, preco, preco_orig, cat, parc ) {
  if( estofado && cat.search( "Estofado" ) > 0 ) var fb_preco = estofado[0];
  else var fb_preco = preco;
  if( fb_preco ) {
    if( preco_orig > preco ) document.write("De <s>"+FormatPrecoReais(preco_orig)+"</s> por ");
    document.write("<b>"+FormatPrecoReais(fb_preco)+"</b>");
    document.write("<br>");
    MostraMaxParcela(fb_preco,parc);
    if( fb_preco != preco_orig ) { document.write("<br>"); MostraEconomia(fb_preco,preco_orig); }
    document.write("<br>");
    vista(fb_preco);
  } // if
} // func

function prazo_tapetes() {

document.write(
"<b>Frete grátis para todo o Brasil (Encomenda PAC - Correios)</b>\
<p style='font-size: 12pt; font-weight: bold;'>Prazo de fabricação e entrega<br>de produtos sob encomenda</p>\
<p>O prazo de entrega do produto é igual a soma dos prazos dos três itens abaixo: (1 + 2 + 3 = prazo de entrega)\
<br><br>1) Confirmação do pagamento e processamento do pedido: Até 3 dias úteis\
<br><br>2) Prazo de fabricação: <b>Até 20 dias úteis</b> ou, no caso de tapetes em tons de branco ou bege 25 dias úteis;\
<br><br>3) Entrega pelo sistema PAC dos Correios:\
<ul>\
<li>Regiões Sul e Sudeste: de 3 à 8 dias úteis\
<li>Região Central: de 5 à 10 dias úteis\
<li>Região Norte e Nordeste: de 5 à 12 dias úteis\
<li>Amazônia e Acre: de 10 à 20 dias úteis\
</ul>\
<br>Observação: A tabela de prazos de entrega é fornecida pelos Correios."
);

} // func

function prazo_malas() {

document.write(
"<b>Frete grátis para todo o Brasil (Encomenda PAC - Correios)</b>\
<p style='font-size: 12pt; font-weight: bold;'>Prazo de entrega</p>\
<p>O prazo de entrega do produto é igual a soma dos prazos dos três itens abaixo: (1 + 2 + 3 = prazo de entrega)\
<br><br>1) Confirmação do pagamento e processamento do pedido: Até 3 dias úteis\
<br><br>2) Fabricação: Até 30 dias (exceto nos produtos a pronta entrega, em que a postagem ocorre no dia útil após a confirmação do pagamento, quando houver quantidade suficiente no estoque)\
<br><br>3) Entrega pelo sistema PAC dos Correios:\
<ul>\
<li>Regiões Sul e Sudeste: de 3 à 8 dias úteis\
<li>Região Central: de 5 à 10 dias úteis\
<li>Região Norte e Nordeste: de 5 à 12 dias úteis\
<li>Amazônia e Acre: de 10 à 20 dias úteis\
</ul>\
<br>Observação: A tabela de prazos de entrega é fornecida pelos Correios."
);

} // func

function prazo_facas() {

document.write(
"<b>Frete grátis para todo o Brasil (Encomenda PAC - Correios)</b>\
<p style='font-size: 12pt; font-weight: bold;'>Prazo de entrega</p>\
<p>Para as facas artesanais que estão disponíveis a <b>pronta entrega</b>, devem-se\
 levar em conta até <b>3 dias úteis</b> para a confirmação do pagamento\
 e processamento do pedido e, à partir de então, o prazo de entrega pelo sistema <b>PAC dos Correios</b>, quando houver quantidade suficiente no estoque:\
<ul>\
<li>Regiões Sul e Sudeste: de 3 à 8 dias úteis\
<li>Região Central: de 5 à 10 dias úteis\
<li>Região Norte e Nordeste: de 5 à 12 dias úteis\
<li>Amazônia e Acre: de 10 à 20 dias úteis\
</ul>\
<br>Observação: A tabela de prazos de entrega é fornecida pelos Correios."
);

} // func

function vista(PrecoNum) {
  var desconto = PrecoNum * 20 / 100;
  var preco = PrecoNum - desconto;
  var preco_str = preco.toFixed(2).toString();
  preco_str = preco_str.replace(".",",");
  //if( parseFloat( preco_str ) > 0 ) document.write( "À vista (-20%): <b>R$ "+preco+"</b>" );
  if( preco > 0 ) document.write( "À vista (-20%): <b>"+FormatPrecoReais(preco)+"</b>" );
} // func

function parcelas(PrecoNum,Parcelas) {
  var Parcela = PrecoNum / Parcelas;
  var parcela_str = Parcela.toFixed(2).toString();
  parcela_str = parcela_str.replace(".",",");
  if( Parcela > 0 ) document.write( "Em "+Parcelas+"x sem juros de <b>"+FormatPrecoReais(Parcela)+"</b>" );
} // func

function fotoreal() {
document.write("<br><div style='font-weight: bold; font-size: 8pt; background-color: #eee; border: 1px solid #888; padding: 5px; width: 150px;'><span style='font-size: 10pt;'>FOTO REAL do produto.</span><br>Peça única.</span></div>");
} // func

function fgratis() {
document.write("<div id=frete><span class=frete1>FRETE GRÁTIS</span><br><span class=frete2>para todo o Brasil</span></div>");
} // func

function url_prod( id ) {
	if( id > 0 ) window.open("https://www.facanabota.com/listaprodutos.asp?IDLoja=20214&IDProduto="+id);
} // func

try {

var est_Arezzo = [ 6800 ];
var est_Jully = [ 5200 ];
var est_DellyNam = [ 5400 ];
var est_DellyCanto = [ 5600 ];
var est_MilaoChess = [ 3999.9 ];
var est_Belle = [ 1900 ];
var est_Viena = [ 1900 ];
var est_Veneza = [ 1900 ];
var est_Valencia = [ 1900 ];

var tnt5_tamanhos = [ "1,5 x 2,0 m", "2,0 x 2,0 m", "1,8 x 2,4 m", "2,0 x 2,5 m", "2,0 x 3,0 m", "2,5 x 2,5 m" ];
var tnt5_precos = [ "649,90", "859,90", "929,90", "1.079,90", "1.289,90", "1.349,90" ];

var br5sb_tamanho = tnt5_tamanhos;
var br5sb_preco = tnt5_precos;
var br5sb_id = [ "4532299", "4552433", "4552436", "4552438", "4552439", "4552446" ];

var bg5sb_tamanho = tnt5_tamanhos;
var bg5sb_preco = tnt5_precos;
var bg5sb_id = [ "4532302", "4552448", "4552449", "4552451", "4552453", "4552455" ];

var pr5sb_tamanho = tnt5_tamanhos;
var pr5sb_preco = tnt5_precos;
var pr5sb_id = [ "4302888", "4552469", "4552471", "4552473", "4552474", "4552475" ];

var cz5sb_tamanho = tnt5_tamanhos;
var cz5sb_preco = tnt5_precos;
var cz5sb_id = [ "4550842", "4552457", "4552460", "4552461", "4552462", "4552467" ];

var malmr5sb_tamanho = tnt5_tamanhos;
var malmr5sb_preco = tnt5_precos;
var malmr5sb_id = [ "4302885", "4566952", "4566953", "4566955", "4566957", "4566958" ];

var tb5_tamanho = tnt5_tamanhos;
var tb5_preco = tnt5_precos;
var tb5_id = [ "4596023", "3364917", "4301245", "3364939", "3364959", "3364886" ];

var mal5sb_tamanho = tnt5_tamanhos;
var mal5sb_preco = tnt5_precos;
var mal5sb_id = [ "3271206", "4569574", "4569573", "4569576", "4569577", "4569578" ];

var ex5sb_tamanho = tnt5_tamanhos;
var ex5sb_preco = tnt5_precos;
var ex5sb_id = [ "3248441", "4566973", "4566975", "4566976", "4566977", "4566979" ];

var br5_tamanho = tnt5_tamanhos;
var br5_preco = tnt5_precos;
var br5_id = [ "3275120", "3364898", "3671472", "4112807", "3320035", "3364861" ];

var bg5_tamanho = tnt5_tamanhos;
var bg5_preco = tnt5_precos;
var bg5_id = [ "3277724", "3313048", "3671521", "3364924", "3364949", "3364855" ];

var tbmr5_tamanho = tnt5_tamanhos;
var tbmr5_preco = tnt5_precos;
var tbmr5_id = [ "4602909", "3364914", "4541686", "3364937", "3364956", "3365010" ];

} catch(e) {}

function tamanhos( ref ) {
	if( ref.indexOf( "cz5" ) > -1 ) ref = "cz5sb";
	if( ref.indexOf( "br5" ) > -1 ) ref = "br5sb";
	if( ref.indexOf( "bg5" ) > -1 ) ref = "bg5sb";
	if( ref.indexOf( "pr5" ) > -1 ) ref = "pr5sb";
	if( ref.indexOf( "tb5" ) > -1 ) ref = "tb5";
	if( ref.indexOf( "mal5" ) > -1 ) ref = "mal5sb";
	if( ref.indexOf( "ex5" ) > -1 ) ref = "ex5sb";
	if( ref.indexOf( "exb5" ) > -1 ) ref = "ex5sb";
	if( ref.indexOf( "malmr5" ) > -1 ) ref = "malmr5sb";
	if( ref.indexOf( "tbmr5" ) > -1 ) ref = "tbmr5";
	try { eval( ref+"_tamanho" ); } catch(err) { return false; }
	document.write( "<tr><td align=center><select onchange=url_prod(this.options[this.selectedIndex].value)><option value=0>Outros tamanhos</option>" );
	for(c=0;c<eval(ref+"_tamanho").length;c++) {
		document.write( "<option value="+eval(ref+"_id")[c]+">"+eval(ref+"_tamanho")[c]+" (R$ "+eval(ref+"_preco")[c]+")</option>" );
	} // for c
	document.write( "</select>" );
} // func
