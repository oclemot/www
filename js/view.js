function createdialogmail()
{ 
    var strtable="";
    document.getElementById("menumail").innerHTML = "";

    
    strtable+="Envoie les résultats...<br>";
    strtable+="<form id='menumail2' style='text-align:left;margin-left=30px;margin-right=30px;vertical-align:center'>";

    strtable+="<div class='ui-grid-a'>";
    
    strtable+="<div id='emailaddress'>";
    
    strtable+="</div>";
    
    //strtable+="<div class='ui-block-a'style='width:30%'><label for='sub'>SUBJECT</label></div><div class='ui-block-b' style='width:70%'><input type='sub' name='sub' id='subject' /></div><br/>";

    //strtable+="<div class='ui-block-a'style='width:30%'><label for='message'>MESSAGE:</label></div><div class='ui-block-b' style='width:70%'><textarea name='message' rows='5' cols='20' id='message'></textarea><br/></div>";
    //strtable+="</div>";

    strtable+="<div style='text-align:center'>";
    strtable+="<a href='#' data-role='button' data-inline='true' onclick='cachedialogmail();' class='ui-link ui-btn ui-btn-inline ui-shadow ui-corner-all'>Cancel</a> ";
    strtable+="<a href='#' data-role='button' data-inline='true' onclick='mail_send()'class='ui-link ui-btn ui-btn-inline ui-shadow ui-corner-all'>Send</a> ";
    strtable+="</div>";
    strtable+="</form>";
    document.getElementById("menumail").innerHTML = strtable;
}

function cachedialogmail ()
{
    var mailform = document.getElementById("menumail");
    mailform.zindex=-1;
    mailform.style.display = "none";
}

function affichedialogmail()
{
   var nn;
    var strtable="";
    var tdplayer;
    var tmp;
    var nn;
    var mm;
    for (nn=0; nn<nbjoueurs;nn++){
        strtable+="<div class='ui-block-a' style='width:30%'>";    
        strtable+="<label for='email"+nn+"'>";
        mm=nn+1;
        tmp="P"+mm;
        tdplayer=document.getElementById (tmp);
        strtable+=tdplayer.innerHTML;
        strtable+=":</label> </div>";
        strtable+="<div class='ui-block-b' style='width:70%'>";
        strtable+="<input type='email' name='email"+nn+"' id='email"+nn+"' /><br/>";
        strtable+="</div>";
    }
    var emailaddressdiv = document.getElementById("emailaddress");
    emailaddressdiv.innerHTML=strtable;
    var mailform = document.getElementById("menumail");
    mailform.zindex=1;
    mailform.style.display = "block";
}

function createkeypad ()
{
    var strtable="";
    strtable+="<table id='keypad2'>";
    strtable+="<tr>";
    strtable+="<td onclick='addkey(0, currentcell);'>0</td>";
    strtable+="<td onclick='addkey(1, currentcell);'>1</td>";
    strtable+="<td onclick='addkey(2, currentcell);'>2</td>";
    strtable+="<td onclick='addkey(3, currentcell);'>3</td>";
    strtable+="<td onclick='addkey(4, currentcell);'  colspan='2' style='width:8%';>4</td>";
    strtable+="<td onclick='addkey(5, currentcell);'>5</td>";
    strtable+="</tr>";
    strtable+="<tr>";
    strtable+="<td onclick='addkey(6, currentcell);'>6</td>";
    strtable+="<td onclick='addkey(7, currentcell);'>7</td>";
    strtable+="<td onclick='addkey(8, currentcell);'>8</td>";
    strtable+="<td onclick='addkey(9, currentcell);'>9</td>";
    strtable+="<td id='splitcell1' style='width:8%';></td>";
    strtable+="<td id='splitcell2' style='width:8%';></td>";
    strtable+="<td onclick='addkey(77, currentcell)' style='background-image:url(images/swoosh.png); background-repeat:no-repeat; background-position: center center;'></td>";
    strtable+="</tr>";
    strtable+="</table>";
    
    document.getElementById("keypad").innerHTML = strtable;
}

function cachekeypad()
{
    
    var keypadobject = document.getElementById("keypad2");
    //alert (keypadobject);
    keypadobject.style.display="none";
}

function affichekeypad(id)
{
    var cellsplit1 = document.getElementById ("splitcell1");
    var cellsplit2 = document.getElementById ("splitcell2");
    
    
    if (id===1) {
//mode entier only (1 seul caractere)    
        cellsplit1.style.width="16%";
        cellsplit1.onclick=function() {addkey(67, currentcell);};
        cellsplit1.style.backgroundImage="url(images/croix.png)";
        cellsplit1.style.backgroundRepeat="no-repeat";
        cellsplit1.style.backgroundPosition="center center";
        cellsplit1.innerHTML="";
        
        cellsplit2.style.width="1%";
        cellsplit2.innerHTML="";
        cellsplit2.style.backgroundImage="";
    }
    else {
        //cellsplit1.colspan="1";
        cellsplit1.style.width="8%";
        cellsplit1.onclick=function() {addkey(66, currentcell);};
        cellsplit1.innerHTML=",";
        cellsplit1.style.backgroundImage="url(images/empty.png)";
        
        cellsplit2.style.width="8%";
        cellsplit2.onclick=function() {addkey(67, currentcell);};
        cellsplit2.style.backgroundImage="url(images/croix.png)";
        cellsplit2.style.backgroundRepeat="no-repeat";
        cellsplit2.style.backgroundPosition="center center";
    }
    
    var keypadobject = document.getElementById("keypad2");
    //alert (keypadobject);
    keypadobject.style.display="table";

}

function createreperesmenu ()
{
    var strtable="";
    strtable+="<form id='test'>";
    strtable+="<table id='reperesmenu2'>";
    strtable+="<tr>"; 
    strtable+="<td onclick='setrepere(1);'> <img src = 'images/reper_blanc.gif'> </td>";
    strtable+="<td onclick='setrepere(2);'> <img src = 'images/reper_jaune.gif'> </td>";
    strtable+="<td onclick='setrepere(3);'> <img src = 'images/reper_bleu.gif'> </td>";
    strtable+="<td onclick='setrepere(4);'> <img src = 'images/reper_rouge.gif'> </td>";
    strtable+="</tr>";
    strtable+="</table> </form>";

    document.getElementById("reperesmenu").innerHTML = strtable;

}


function affichereperesmenu(cellid)
{
//    alert (cellid);
    cellreperid=cellid;
    var reperesobject = document.getElementById("reperesmenu2");
    //alert (keypadobject);
    reperesobject.style.display="table";    
}

function cachereperesmenu ()
{
    var reperesobject = document.getElementById("reperesmenu2");
    //alert (keypadobject);
    reperesobject.style.display="none";
    reperesobject.style.zindex=-1;
    cellreperid="";
    
}


function updatecourseslist()
{
    var strtmp="";
    
   
    $.getJSON("http://www.clemot.com/scorecard/www/php/courses.php",{format: "json"},
      function(data){
            var output;
              $.each(data, function(key, val) {             
           //        alert (val.indexcourse);
                  strtmp=", '" + val.name+"',";
                  strtmp= val.indexcourse + strtmp + val.par;
                  
                  if (val.indexcourse==courseindex){
                      
                  output = "<li data-icon='check'> <a href='#' onclick=\"selectcourse("+strtmp+")\">" + val.name + " par: "+ val.par +"</a></li>";
                  }
                  else {
                    output = "<li data-icon='false'> <a href='#' onclick=\"selectcourse("+strtmp+")\">" + val.name + " par: "+ val.par +"</a></li>";                  }
               });
              $('#courseslistview').append(output).listview('refresh');
          });
    
}

function createsettingsmenu()
{
    var stmpform="";    
    document.getElementById("menuoptions").innerHTML = "";

    stmpform+="<form id='menuoptions2' style='text-align:left;margin-left=30px;margin-right=30px;vertical-align:bottom'>";

    stmpform+="<div data-role='collapsible-set'> <div data-role='collapsible' data-collapsed='false'> <h3>Partie ...</h3>";

    stmpform+="<div class='ui-grid-a'>";

    stmpform+="<div class='ui-block-a'>";    
    stmpform+="<label for='flip9T'>Type de parcours (9t ou 18t) :</label> </div> <div class='ui-block-b'> <select name='flip9T' id='flip9T' data-role='slider'> <option value='off'>18t</option> <option value='on'>9t</option> </select> </div>";


    stmpform+="<div class='ui-block-a'>";    
    //stmpform+="<div class='ui-field-contain'>";
    stmpform+="<label for='sliderplayers'>Nombre de joueurs (1-4) :</label> </div> <div class='ui-block-b'><input type='range' name='sliderplayers' id='sliderplayers' value='2' min='1' max='4' step='1'/></div>";

    //stmpform+="<div class='ui-field-contain'>";

    stmpform+="<div class='ui-block-a'>";
    stmpform+="<label for='flipmode'>Chouette ou Stableford :</label> </div> <div class='ui-block-b'> <select name='flipmode' id='flipmode' data-role='slider'> <option value='off'>Chouette</option> <option value='on'>Stableford</option> </select></div></div>";

    stmpform+="</div>"

    //stmpform+="<div data-role='collapsible'><h3>Calculs des coups reçus en net</h3>";
    //stmpform+="<div class='ui-grid-a'>";
    //stmpform+="<div class='ui-block-a'>";    
    //stmpform+="<label for='slider1'>Coups reçus (25%, 50%, 75%) :</label> </div> <div class='ui-block-b'><input type='range' name='slider2' id='slider1' value='25' min='25' max='75' step='25'/></div>";
    //stmpform+="</div> </div>";    

    stmpform+="<div data-role='collapsible' id='courseslist' ><h3>Parcours ...</h3>";
    stmpform+="<li id='defaultcourse'></li>";    
    stmpform+="<ul data-role='listview' data-filter='true' data-filter-reveal='true' data-filter-placeholder='Nom...' data-inset='true' id='courseslistview'>";


    stmpform+="</ul>";
    stmpform+="</div>";    

    stmpform+="<div data-role='collapsible'> <h3>Affichage ...</h3>";

    stmpform+="<div class='ui-grid-a'>";

    stmpform+="<div class='ui-block-a'>";    
    stmpform+="<label for='flipPar'>Par :</label> </div> <div class='ui-block-b'> <select name='flipPar' id='flipPar' data-role='slider'> <option value='on'>Oui</option> <option value='off'>Non</option>  </select> </div>";

    stmpform+="<div class='ui-block-a'>";    
    stmpform+="<label for='flipHcp'>Hcp :</label> </div> <div class='ui-block-b'> <select name='flipHcp' id='flipHcp' data-role='slider'> <option value='on'>Oui</option> <option value='off'>Non</option> </select> </div> </div> </div>";

    stmpform+="<div style='text-align:center'>";
    stmpform+="<a href='#' data-role='button' data-inline='true' onclick='cachesettingsmenu();' class='ui-link ui-btn ui-btn-inline ui-shadow ui-corner-all'>Cancel</a> ";
    stmpform+="<a href='#' data-role='button' data-inline='true' onclick='updatesettings()'>Ok</a> ";
    stmpform+="</div>";

    stmpform+="</form>";


    document.getElementById("menuoptions").innerHTML = stmpform;


    $( "#courseslistview" ).on( "filterablebeforefilter", function ( e, data ) {
    var $ul = $( this ),
        $input = $( data.input ),
        value = $input.val(),
        html = "";

    $ul.html( "" );
    if ( value && value.length > 2 ) {
        $ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
        $ul.listview( "refresh" );

        $.getJSON("http://www.clemot.com/scorecard/www/php/courses.php",{name: $input.val()},
    function(data){
            $.each(data, function(key, val2) {             
        //    alert (val.name);

            html += "<li id='"+val2.indexcourse+"'><a href='#'>" + val2.name + " par: "+ val2.par +"</a></li>";
            });
            $ul.html( html );
            $ul.listview( "refresh" );
            $ul.trigger( "updatelayout");
        });
    }
    });

    // click to select value of auto-complete
    $( document).on( "click", "#courseslistview li", function() {
    var selectedItem = $(this).html();

    courseindex=$(this).attr("id");
    //     alert ("courseidex ="+courseindex);
    init_parcours(courseindex);
    //   alert ("course par= "+ coursepartotal);
    });    
}
    
function affichesettingsmenu ()
{
    var defaultcourseli= document.getElementById("defaultcourse");
    defaultcourseli.innerHTML = coursename + " Par : "+coursepartotal;
    var keypadobject = document.getElementById("menuoptions");
    keypadobject.style.display = "block";
}



function cachesettingsmenu ()
{
        var keypadobject = document.getElementById("menuoptions");
        keypadobject.style.display = "none";
        //alert (keypadobject);
}



function createmenubar()
{
    var strtmp="";
    strtmp+="<div data-role='controlgroup' data-type='horizontal'>";
    strtmp+="<a href='#' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-icon-right ui-icon-mail' onclick='affichedialogmail()'>Mail...</a>";
    strtmp+="<a href='#' id='simpleclearbutton' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-icon-right ui-icon-delete' >Clear...</a>";
strtmp+="<a href='#' class='ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-icon-right ui-icon-gear' onclick='affichesettingsmenu()'>Options...</a>";
    strtmp+="</div>";
//src='images/eraser.png' style='width:24px;height:26px'
    document.getElementById("menubar").innerHTML = strtmp;   
    
    $(document).delegate('#simpleclearbutton', 'click', function() {
        
  $('<div>').simpledialog2({
    mode: 'button',
    headerText: 'Vider scorecard ?',
    headerClose: true,
    buttonPrompt: '',
      forceinput: true,
      left : true,
      themeDialog: 'a',
    buttons : {
      'Oui': {
        click: function () { 
          clearscorecard();
        }
      },
      'Non': {
        click: function () { 
          //alert ("rien");
        },
        icon: "delete",
        theme: "d",
      }
    }
  })
})
}

function createtableandhandlers()

{
    var tbody="";
    
    tbody+="<table id='scorecard2mail' style='text-align:left;' border='1' cellpadding='2' cellspacing='2' background-repeat: no-repeat;'> <tbody> <tr id='joueurs' style='background-color: rgb(148, 193, 245);background-repeat: no-repeat;'>";
    
    tbody+="<td style='background-color: rgb(148, 193, 245);text-align:center' colspan='";
    var nbcolonnesheader = 1+affichehcp+affichepar ;
    var tmpint=nbcolonnesheader+2*nbjoueurs; //nbcolonnestotal
    tbody+=tmpint;
    tbody+="'>";
    tbody+=coursename;
    tbody+="</td> <tr> <td  colspan='";
    tbody+=nbcolonnesheader;
    tbody+="' style='background-color: rgb(148, 193, 245);width:20px;'></td>";
    
//Ligne JOUEURS    
    
    var tmp2 =""; 
    for (i=1;i<parseInt(nbjoueurs)+1;i++){
        tmp2 = "<td id='P" + i + "' colspan='2' onclick='addInputText(this)' style='background-color: rgb(148, 193, 245);width: 80px;'>"+ joueursname[i] +"</td>" ;
        //alert (tmp2);
        tbody+=tmp2;
    }
    
    tbody+="</tr><tr style='background-color: rgb(148, 193, 245);text-align:center'> <td colspan='";
    tbody+=nbcolonnesheader;
    tbody+="' style='width:20px;'>Index/Départ</td>";      
    
//Ligne INDEX
    
    tmp2 =""; 
    for (i=1;i<parseInt(nbjoueurs)+1;i++){
        tmp2 = "<td id='P" + i + "Idx"+ "' onclick='addInputNumber(this,2)' style='width: 40px;text-align:center;'></td> <td id='P" + i + "repere' onclick='affichereperesmenu (P" + i + "repere);' style='background-repeat:no-repeat;background-position: center center;'> </td>" ;
        //alert (tmp2);
        tbody+=tmp2;
    }
    
    tbody+="</tr> <tr style='background-color: rgb(216, 216, 216);'><td>#</td>";
    if (affichepar){
        tbody+="<td>Par</td>";
    }
    if (affichehcp) {
        tbody+="<td>Hcp</td>";
    }

    for (i=1; i<=parseInt(nbjoueurs); i++) { 
        tbody+="<td style='width:40px;'>Brut</td> <td style='width: 40px; '>Net</td>";
    };

    tbody+="</tr>";

//LiGNES TROUS 1-9
    
    var tmpid="";
    var i;
    for (i=1;i<10;i++){ 
      tbody+="<tr>"; 
      tmpid = "H" +i;
      //alert ("tmpid=" + tmpid);
      tbody+="<td id="+ tmpid + " style='width:20px; text-align:center;'>"+ i + " </td>";
      if (affichepar) tbody+="<td id="+ tmpid + " style='width:20px; text-align:center;'>"+ coursepar[i-1] + " </td>";
      if (affichehcp) tbody+="<td id="+ tmpid + " style='width:20px; text-align:center;'>"+ coursehcp[i-1] + " </td>";
  

      for (j=1;j<=parseInt(nbjoueurs);j++) { 
          tmp2 = "<td id='H" + i + "P" + j +"' onclick='addInputNumber(this,1)' style='width: 40px; background-repeat: no-repeat; text-align:center;'></td>" ;
        //alert (tmp2);
        tbody+=tmp2;
          
        tmpid ="H"+ i + "P" + j + "net";
        tbody+="<td id='" +tmpid +"' style='width: 40px; background-color: rgb(216, 216, 216); background-repeat: no-repeat; text-align:center;'></td>";
        }
      }
    
    
//Suite uniquement si 18 trous    
    
    if (b18T===18)
    {
        tbody+="<tr style ='background-color: rgb(139, 237, 115)';background-repeat: no-repeat;><td style='text-align:center' colspan='";
        tbody+=nbcolonnesheader;
        tbody+="'>Out</td>";
      
//Ligne OUT        
        
        for (i=1; i<=parseInt(nbjoueurs);i++){
            tbody+="<td id='OUT"+ i +"' style='background-repeat: no-repeat;text-align:center;'></td><td id='OUT" +i +"net' style='background-repeat: no-repeat;text-align:center;'></td>";
        }  

        tbody+="</tr>";

//Lignes TROUS 10-18        
        
       for (i=10;i<19;i++){ 
              tbody+="<tr>"; 
              tmpid = "H"+ i ;
              tbody+="<td id='"+ tmpid + "'  style='width: 20px;'>"+ i + " </td>";
              if (affichepar) tbody+="<td id="+ tmpid + " style='width:20px; text-align:center;'>"+ coursepar[i-1] + " </td>";
              if (affichehcp) tbody+="<td id="+ tmpid + " style='width:20px; text-align:center;'>"+ coursehcp[i-1] + " </td>";

              for (j=1;j<=parseInt(nbjoueurs);j++){
                  tmpid ="H"+ i + "P" + j;
                  tbody+="<td id='"+ tmpid +"' onclick = 'addInputNumber(this,1)' style='width: 40px; background-repeat: no-repeat;text-align:center;'></td>";
                  tmpid ="H"+ i + "P" + j + "net";
                  tbody+="<td id='" +tmpid +"' style='width: 40px; background-color: rgb(216, 216, 216);text-align:center;'></td>";
              }
          }

            tbody+="<tr style ='background-color: rgb(139, 237, 115);background-repeat: no-repeat;text-align:center;';><td style='text-align:center' colspan='";
        tbody+=nbcolonnesheader;
        tbody+="'>In</td>";


//Ligne IN
        
        for (i=1;i<=parseInt(nbjoueurs);i++) {
                tbody+="<td id='IN" +i +"' style='background-repeat: no-repeat;'></td> <td id='IN"+ i + "net' style='background-repeat: no-repeat;text-align:center;'></td>";
            }       

            tbody+="</tr>";
            tbody+="<tr style ='background-color: rgb(139, 237, 115)';background-repeat: no-repeat;text-align:center;'><td style='text-align:center' colspan='";
        tbody+=nbcolonnesheader;
        tbody+="'>Out</td>";
        
        //LIgnes OUT (répétée)
            for (i=1;i<=parseInt(nbjoueurs);i++) {
                tbody+="<td id='OUT" +i +"bis' style='background-repeat: no-repeat;text-align:center;'></td> <td id='OUT"+ i + "bisnet' style='background-repeat: no-repeat;text-align:center;'></td>";
            }
            tbody+="</tr>";
    }
    
//DANS TOUS LES CAS ...    
    
//LIGNE TOTAL    
    
        tbody+="<tr style ='background-color:rgb(139, 237, 115); background-repeat: no-repeat';><td style='text-align:center' colspan='";
        tbody+=nbcolonnesheader;
    //alert(nbcolonnesheader);
        tbody+="'>Total</td>";
        for (i=1;i<=parseInt(nbjoueurs);i++) {
                  tbody+="<td id='Score" +i +"' style ='background-repeat: no-repeat;text-align:center;'></td> <td id='Score"+ i + "net' style ='background-repeat: no-repeat;text-align:center;'></td>";
     }
    tbody+="</tr>";
    tbody+="</tbody></table>";        

    document.getElementById("wrappertable").innerHTML = tbody;
    
    cachekeypad();
}

function affichescoresbrut (idhole)
{
 for (j=0;j<parseInt(nbjoueurs);j++) {     
     var tmp2=j+1;
      //Affiche (encore) le score brut, car fonction appelée aussi en raffraichissement
     if (score[idhole][j]!=0){
            var tmp4="H"+idhole+"P"+tmp2; 
            var td=document.getElementById(tmp4);
            //alert (td);
            td.innerHTML=score[idhole][j];
     }
 }
}
 
function affichescoresnet (idhole)
{
 for (j=0;j<parseInt(nbjoueurs);j++) {     
     var tmp2=j+1;
    
     if (points[idhole][j]!=0){
            var tmp3="H"+idhole+"P"+tmp2+"net";
           // alert ("tmp3=" + tmp3);
            var t3 = document.getElementById (tmp3);
            t3.innerHTML=points[idhole][j];
            }
     if ((points[idhole][j]==0) && (score[idhole][j]!=0)){
            var tmp4="H"+idhole+"P"+tmp2+"net";
            //alert ("tmp4=" + tmp4);
            var t4 = document.getElementById (tmp4);
            t4.innerHTML='0';        
     }
     
 }   
}

function affichetotaux()
{
//alert ("affichetotaux");
    var jz;    
    var xtmp=0;
    var xstrtmp="";
    var xtt;

    
    for (jz=0;jz<parseInt(nbjoueurs);jz++) {     
     // Affiche les totaux OUT IN et TOTAL
        var tmp2=jz+1;
        if (score[21][jz]!=0) {
            var tmp = "Score"+tmp2;
        //    alert ("id à retrouver XX= "+tmp);
            var tt = document.getElementById(tmp);
            //alert ("points21 " + j + " "+ points[21][j]);
            tt.innerHTML=score[21][jz]; 
        }
         //Affiche les scores nets
        if (points[21][jz]!=0) {
            tmp = "Score"+tmp2+"net";
            //alert ("id à retrouver = "+tmp);
            var tt = document.getElementById(tmp);
            //alert ("points21 " + j + " "+ points[21][j]);
            tt.innerHTML=points[21][jz]; 
        }
        if (points[21][jz]==0) {
            for (xtmp=1;xtmp<=b18T;xtmp++){
                xstrtmp="H"+xtmp+"P"+tmp2+"net";
                xtt = document.getElementById(xstrtmp);
                if (xtt.innerHTML!="") {
                    tmp = "Score"+tmp2+"net";
                    //alert ("id à retrouver = "+tmp);
                    var tt = document.getElementById(tmp);
                    //alert ("points21 " + j + " "+ points[21][j]);
                    tt.innerHTML='0'; 
                }
            }
        }
        if (b18T==18){
            if (score[19][jz]!==0){
                tmp = "OUT"+tmp2;
                tt = document.getElementById(tmp);
                //alert ("points21 " + j + " "+ points[21][j]);
                tt.innerHTML=score[19][jz]; 

                tmp = "OUT"+tmp2+"bis";
                tt = document.getElementById(tmp);
                //         alert ("points21 " + j + " "+ points[21][j]);
                tt.innerHTML=score[19][jz];
                tmp = "IN"+tmp2;
                tt = document.getElementById(tmp);
                //alert ("points21 " + j + " "+ points[21][j]);
                tt.innerHTML=score[20][jz]; 
            }
            if (points[19][jz]!=0){
                tmp = "OUT"+tmp2+"net";
                tt = document.getElementById(tmp);
                //alert ("points21 " + j + " "+ points[21][j]);
                tt.innerHTML=points[19][jz]; 
                tmp = "OUT"+tmp2+"bisnet";
                tt = document.getElementById(tmp);
                //         alert ("points21 " + j + " "+ points[21][j]);
                tt.innerHTML=points[19][jz];
            }
            if (points[19][jz]==0){
                    for (xtmp=1;xtmp<19;xtmp++){
                    xstrtmp="H"+xtmp+"P"+tmp2+"net";
                    xtt = document.getElementById(xstrtmp);
                    if (xtt.innerHTML!="") {
                        tmp = "OUT"+tmp2+"net";
                        tt = document.getElementById(tmp);
                        tt.innerHTML='0'; 
                        tmp = "OUT"+tmp2+"bisnet";
                        tt = document.getElementById(tmp);
                        tt.innerHTML='0';
                        break;
                    }
                }
                    
            }
            if (points[20][jz]!=0){
                tmp = "IN"+tmp2+"net";
                tt = document.getElementById(tmp);
                tt.innerHTML=points[20][jz];
            }
            if (points[20][jz]==0){
                var xtmp=0;
                var xstrtmp="";
                var xtt;
                for (xtmp=1;xtmp<19;xtmp++){
                    xstrtmp="H"+xtmp+"P"+tmp2+"net";
                    xtt = document.getElementById(xstrtmp);
                    if (xtt.innerHTML!="") {
                        tmp = "IN"+tmp2+"net";
                        tt = document.getElementById(tmp);
                        tt.innerHTML='0';
                        break;
                    }
                }
            }
        }
    }       
}

function afficheindex ()
{
 var tz;
 var td;
 var tmp;
   for (tz=0;tz<parseInt(nbjoueurs); tz++){
       //alert (joueursindex[tz]);
       ji=tz+1;
       tmp="P"+ji+"Idx";
       //alert (tmp);
       td = document.getElementById(tmp);
       //alert (td);
       if (joueursindex[tz]!=0) td.innerHTML=joueursindex[tz];
   }
}
    
function affichereperes ()
{
    var tz;
    var td;
    var tmp;
    for (tz=0;tz<parseInt(nbjoueurs); tz++){
       ji=tz+1;
//       alert ("repere joueur"+joueursreperes[tz]);
       tmp="P"+ji+"repere";
       //alert (tmp);
       td = document.getElementById(tmp);
       //alert (td);
//
        switch (joueursreperes[tz]){
         case 1:
                td.style.backgroundImage="url(images/reper_blanc.gif)";
                break;
         case 2:
                td.style.backgroundImage="url(images/reper_jaune.gif)";
                break;
         case 3:
                td.style.backgroundImage="url(images/reper_bleu.gif)";
                break;
         case 4:
                td.style.backgroundImage="url(images/reper_rouge.gif)";
                break;
        }
   }
}


function affichecoupsrecus()
{
    var td;
    var tt;
    var imgsrc ;
    var tmp;
    var tmp2;
    var tmpstr;
   // alert ("affiche coups reçus");
    for (j=0;j<parseInt(nbjoueurs); j++){
        for (i=1;i<=b18T;i++) {
            if (coupsrecus[i][j]!=0) {
                //alert ("trou ="+i);
                //alert ("coups recus ="+coupsrecus[i][j]);
                tmp=j+1;
                tmpstr = "H"+i+"P"+tmp;
                //alert (tmpstr);
                td = document.getElementById(tmpstr);
                imgsrc="url(images/"+ coupsrecus[i][j]+ ".png)";
                //alert ("imgsrc["+i+"] ="+imgsrc);
                td.style.backgroundImage=imgsrc;      
            }
        }   
        
       // alert (coupsrecus[21][j]);
     // Affiche les coups recus OUT IN et TOTAL
        if (coupsrecus[21][j]!=0) {
            //alert (j);
            tmp2=j+1;
            tmp = "Score"+tmp2;
       //     alert ("id à retrouver = "+tmp);
            //alert ("j= "+j);
            tt = document.getElementById(tmp);
            //alert ("coupsrecus21 " + j + " "+ coupsrecus[21][j]);
            if (b18T==18) imgsrc="url(images/"+ coupsrecus[21][j]+ ".png)";
            else imgsrc="url(images/"+ coupsrecus[19][j]+ ".png)";
            //alert ("imgsrc ="+imgsrc);
            tt.style.backgroundImage=imgsrc; 
        //    alert ("done");
         //   alert ("coups recus21 " + j + " "+ coupsrecus[21][j]);
        }
   
     //    alert ("b18T= "+b18T);
     if (b18T==18){
            if (coupsrecus[19][j]!=0){
                tmp = "OUT"+tmp2;
            //    alert (tmp);
                tt = document.getElementById(tmp);
                //alert ("points21 " + j + " "+ coupsrecus[19][j]);
                imgsrc="url(images/"+ coupsrecus[19][j]+ ".png)";
                //alert ("imgsrc ="+imgsrc);
                tt.style.backgroundImage=imgsrc;
                tmp = "OUT"+tmp2+"bis";
                tt = document.getElementById(tmp);
                //         alert ("points21 " + j + " "+ points[21][j]);
                tt.style.backgroundImage=imgsrc;
           //     alert ("coups recus19 " + j + " "+ coupsrecus[19][j]);
                }
            if (coupsrecus[20][j]!=0){
                tmp = "IN"+tmp2;
                tt = document.getElementById(tmp);
             //   alert ("coups recus20 " + j + " "+ coupsrecus[20][j]);
                imgsrc="url(images/"+ coupsrecus[20][j]+ ".png)";
                //alert ("imgsrc ="+imgsrc);
                tt.style.backgroundImage=imgsrc;
            }
        }
    }
}

function effacecoupsrecus()
{
    var td;
    var tt;
    var imgsrc ;
    var tmp;
    var tmp2;
    var tmpstr;
    //alert ("affiche");
    for (j=0;j<parseInt(nbjoueurs); j++){
        for (i=1;i<=b18T;i++) {
            //alert ("coups recus "+ coupsrecus[i][j]);
            tmp=j+1;
            tmpstr = "H"+i+"P"+tmp;
            //alert (tmpstr);
            td = document.getElementById(tmpstr);
            imgsrc="url(images/empty.png)";
           //alert ("imgsrc["+i+"] ="+imgsrc);
            td.style.backgroundImage=imgsrc;
        }   
        
        tmp2=j+1;
        tmp = "Score"+tmp2;
        //     alert ("id à retrouver = "+tmp);
        //alert ("j= "+j);
        tt = document.getElementById(tmp);
        if (b18T==18) imgsrc="url(images/empty.png)";
        else imgsrc="url(images/empty.png)";
        //alert ("imgsrc ="+imgsrc);
        tt.style.backgroundImage=imgsrc; 
        if (b18T==18){
            if (coupsrecus[19][j]!=0){
                tmp = "OUT"+tmp2;
            //    alert (tmp);
                tt = document.getElementById(tmp);
                //alert ("points21 " + j + " "+ coupsrecus[19][j]);
                imgsrc="url(images/empty.png)";
                //alert ("imgsrc ="+imgsrc);
                tt.style.backgroundImage=imgsrc;
                tmp = "OUT"+tmp2+"bis";
                tt = document.getElementById(tmp);
                //         alert ("points21 " + j + " "+ points[21][j]);
                tt.style.backgroundImage=imgsrc;
           //     alert ("coups recus19 " + j + " "+ coupsrecus[19][j]);
                }
            if (coupsrecus[20][j]!=0){
                tmp = "IN"+tmp2;
                tt = document.getElementById(tmp);
                tt.style.backgroundImage=imgsrc;
            }
        }
    }
}

function effacejoueurs ()
{

    var tmpjoueurs =""; 
    var tt;
    for (i=1;i<parseInt(nbjoueurs)+1;i++){
        tmpjoueurs = "P" +i;
        tt=document.getElementById (tmpjoueurs);
        tt.innerHTML="joueur"+i;
    }

    var tmpindex;
    
    for (i=1;i<parseInt(nbjoueurs)+1;i++){
        tmpindex = "P" + i + "Idx";
        tt=document.getElementById (tmpindex);
        tt.innerHTML="";    
    }
}

function videscorecard()
{
var i,j,tt;
var tmpid;
    
    for (i=1; i<=parseInt(nbjoueurs);i++){
        for (j=1;j<b18T;j++){
            tmpid = "H" +j+"P"+i;
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "H" +j+"P"+i+"net";
            tt=document.getElementById (tmpid);
            tt.innerHTML="";     
        }
        
        tmpid = "Score" +i;
        tt=document.getElementById (tmpid);
        tt.innerHTML="";
        tmpid = "Score" +i+"net";
        tt=document.getElementById (tmpid);
        tt.innerHTML="";

        if (b18T==18){
            tmpid = "OUT" +i;
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "OUT" +i+"net";
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "OUT" +i+"bis";
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "OUT" +i+"bisnet";
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "IN" +i;
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            tmpid = "IN" +i+"net";
            tt=document.getElementById (tmpid);
            tt.innerHTML="";
            }
    }
}