function fotos_clientes( email, nome, cidade, produto, id, min, zoom ) {
  var baseloja = "https://www.facanabota.com/lojas/00020214/";
  var o = "<table id=fotos><tr><td>";
  o += "<b>";
  if( email ) o += "<a href='mailto:"+email+"'>";
  o += nome;
  if( email ) o += "</a>";
  o += " - "+cidade+"</b>";
  if( id ) o += "<br><a href='https://www.facanabota.com/prod,idloja,20214,idproduto,"+id+"'>"+produto+"</a>";
  else o += "<br>"+produto;
  o += "<tr><td valign=top>";
  for( i=0; i<min.length; i++ ) {
    if( i > 0 ) o += " ";
    img = "<img src='"+baseloja+min[i]+"' style='max-width: 160px; max-height: 120px'>";
    if( zoom.length > 0 ) o += "<a href='"+baseloja+zoom[i]+"' class=fancybox rel=gallery[fotos] style='cursor: zoom-in;'>"+img+"</a>";
    else o += img;
  } // for
  o += "</table>";
window.console.log(o);
  document.write(o);
} // func
