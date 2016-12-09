var executed = new Array();

function make_banners( banners ) { // Exibe banners na Home
	if( typeof executed["banners"] !== 'undefined' ) return false;
	var o="";
	for( n=0; n<banners.length; n++ ) {
		o += ( "\n<div id=slide"+n+" class=slide><a href='"+banners[n][0]+"'><img src='"+imgloja+banners[n][1]+"'></a></div>" );
	} // for
	executed["banners"] = true;
	document.write( o );
} // func

function make_secao( sec ) { // Exibe produtos de uma seção na Home
	if( typeof executed[sec] !== 'undefined' ) return false;
	var o="";
	var sec = secoes[sec];
	for( c=0; c<sec.length; c++ ) {
		o += "\n<tr>";
		var out = sec[c][0][0]; // out=p255, p254...
		var em = sec[c][0][1]; // em=rand
		for( a=0; a<sec[c][1].length; a++ ) {
			var cods = sec[c][1][a];
			o += "<td valign=top><prod out="+out+" cod='"+cods+"' em="+em+">";
		} // for
	} // for
	executed[sec] = true;
	document.write( o );
} // func

var banners = new Array();
banners.push( [ "custom.asp?IDLoja="+idloja+"&arq=promocao.html", "banner_promocoes.jpg" ] );
banners.push( [ "custom.asp?IDLoja="+idloja+"&arq=questionario.htm", "banner_pesquisa.jpg" ] );
banners.push( [ "home.asp?IDLoja="+idloja+"#nylon", "banner_nylon.jpg" ] );
banners.push( [ "custom.asp?IDLoja="+idloja+"&arq=simulador.htm", "banner_simulador.jpg" ] );
banners.push( [ "custom.asp?IDLoja="+idloja+"&arq=faq.html", "banner_faq.jpg" ] );
banners.push( [ "custom.asp?IDLoja="+idloja+"&arq=depoimentos.htm", "banner_depoimentos.jpg" ] );
banners.push( [ "ListaProdutos.asp?IDLoja="+idloja+"&IDCategoria=203508", "banner_malas.jpg" ] );
banners.push( [ "ListaProdutos.asp?Texto=tplg&IDLoja="+idloja+"&Digitada=True", "banner_ovinos.jpg" ] );
banners.push( [ "ListaProdutos.asp?IDLoja="+idloja+"&IDCategoria=191708", "banner_peles.jpg" ] );
banners.push( [ "ListaProdutos.asp?IDLoja="+idloja+"&Avancada=True&IDCategoria=165772&Adicional1=97411", "banner_pronta.jpg" ] );
banners.push( [ "http://www.facebook.com/facanabota", "banner_facebook.jpg" ] );
banners.push( [ "#", "banner_6x.jpg" ] );
banners.push( [ "#", "banner_frete.jpg" ] );

var secoes = new Array();

var secao = "promocao";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "tb5_15x2,mal7sb", "bgc7sb_15x2", "malmr7sb_15x2,malmre7sb_15x2" ] ] );
secoes[secao].push( [ [ "p254", "rand" ], [ "tbmr7_15x2,tb7_15x2", "TBPM01,TBMBP", "MALPBM01,tbcp7_15x2" ] ] );

var secao = "nylon";
secoes[secao] = new Array();
// Tapetes de nylon em estoque
secoes[secao].push( [ [ "p254", "rand" ], [ "MLPMR7", "tb7_15x2,mal_mr5_2x3,bg7_20x25,bg5_20x25", "tbmr7_15x2,ex5_20x25,tbmr5_20x25,cz7_2x3" ] ] );
// Outros tapetes do estoque em destaque
secoes[secao].push( [ [ "p254", "rand" ], [ "MLPMR7", "tb7_15x2,mal_mr5_2x3,bg7_20x25,bg5_20x25", "tbmr7_15x2,ex5_20x25,tbmr5_20x25,cz7_2x3" ] ] );
secoes[secao].push( [ [ "p254", "rand" ], [ "MALLS10,EX715,ORN03,MALPB10,MALMR25", "BGBD01,MAL1023,MAL1002", "BGB505,BRM705,OL505,OLC705" ] ] );
secoes[secao].push( [ [ "p254", "rand" ], [ "MLLM01,MALMC25", "TBMBP,TBPB01,CZBM10,EXC10,TBPC25", "MLL03A,MALPBM01,ORN02,TBPM10,TBPC30" ] ] );

var secao = "malas";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "M788,M706,M652", "M652,M788,M975P", "M936PC,M936WC" ] ] );
secoes[secao].push( [ [ "p255", "rand" ], [ "M975WC,M788,M968", "M975C,M968,M708P,M1157P", "M972,M954", "M936C,M909V" ] ] );

var secao = "carneiro";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "TPLGB02", "TPLGB25", "TPLGP01A" ] ] );
secoes[secao].push( [ [ "p255", "rand" ], [ "TPLGV01", "TPLGB25", "TPLGP01A", "TPLGB05" ] ] );

var secao = "nylon";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p253", "rand" ], [ "br5_15x2", "bg5_15x2", "mal5_15x2" ] ] );
secoes[secao].push( [ [ "p253", "rand" ], [ "ex5_15x2", "tb5_15x2", "tbmr5_15x2" ] ] );

var secao = "peles";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "P202,P203,P207,P208", "PPR12,PPR13,PPR14", "HRF35,P209,P192,P193" ] ] );
secoes[secao].push( [ [ "p254", "rand" ], [ "BRJ01,J4,LP9", "P206,P201", "BRB09,BRB11" ] ] );
secoes[secao].push( [ [ "p255", "rand" ], [ "P147,P176,P187", "PM26A,PM19,PMPM01,HT61H", "PM27A,PM29A,HT17,HT35,HT36,HT60", "HT38,HT42,HT49A,HTLP3,HTTG1,HT58,HT59" ] ] );

var secao = "facas";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "608IDM", "1010TLC", "509DP" ] ] );
secoes[secao].push( [ [ "p254", "rand" ], [ "2010LCR,2009PRT", "1010TLC,1010IC,1009PMC_CV,1009OT", "2010LCR,2010SD,2010SO" ] ] );
secoes[secao].push( [ [ "p255", "rand" ], [ "1009OT,1010IC,1010TLC", "2010LCR,2009ST,2010SO", "1009PMC_CV", "410CG,410CM,410CP" ] ] );

var secao = "outros";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p255", "rand" ], [ "OVGG01", "OVMB", "PLG12", "M709,M709P" ] ] );
secoes[secao].push( [ [ "p255", "rand" ], [ "PLGPD,PLGPDMR", "PLGPK,PLGPK2", "PLGLJ01,PLGLJ02", "puff_stpa,PUFQ01,PUFF02,PUFF01,puff_01a" ] ] );

var secao = "redondos";
secoes[secao] = new Array();
secoes[secao].push( [ [ "p254", "rand" ], [ "RDBG10", "RDBG5", "TPLGRDBR16,RPR10,RDBM2,RDMBG01,D06,RDM01,RD7" ] ] );
