//Fonctions generales
        
function closeInput(elm) {
    var td = elm.parentNode;
    var tmp = td.getAttribute("id");
    var tmp3=tmp.slice (1, 2);
    var i = parseInt (tmp3);
    var value = elm.value;
    td.removeChild(elm);
    td.innerHTML = value;    
    joueursname [i] = value;
    //commentaire
}


function calculecoupsrecus ()
{
//alert ("coups recus");
    var rescoups = 0;
    var rescoupsmodulo = 0;
    
    for (j=0;j<nbjoueurs; j++){
        
        rescoups =  parseFloat(joueursindex[j])*parseFloat(joueursslope[j])/113+parseFloat(joueursSSS[j])-parseInt(coursepartotal);
        
        coupsrecus[19][j]=0;
        coupsrecus[20][j]=0;
        coupsrecus[21][j]=0;
        
    //    alert ("rescoup = "+ rescoups);
   //         alert ("course hcp=" + coursehcp[i-1]);
  //          alert (Math.floor(rescoups/18));
        rescoupsmodulo=Math.round(rescoups%18);
//        alert ("rescoupmodulo " + rescoupsmodulo);
            
        if (rescoupsmodulo>=0) {
                for (i=1;i<=18;i++) {
                (coursehcp[i-1]<=rescoupsmodulo)?coupsrecus[i][j]=1:coupsrecus[i][j]=0;
                coupsrecus[i][j]+=Math.floor (rescoups/18);
//                alert ("coups recus["+i+"]["+j+"]= "+ coupsrecus[i][j]);
                }
        }
        else {
                for (i=1;i<=18;i++) {
                (coursehcp[i-1]>18+rescoupsmodulo)?coupsrecus[i][j]=-1:coupsrecus[i][j]=0;
                //alert ("coups recus["+i+"]["+j+"]= "+ coupsrecus[i][j]);
                }
        }
        for (i=1;i<10;i++) {
            coupsrecus[19][j]+=coupsrecus[i][j];
            }        
        //alert ("cr ij "+i+" "+j+ " "+coupsrecus[19][j]);
        for (i=10;i<19;i++) {
            coupsrecus[20][j]+=coupsrecus[i][j];
            }
        //alert ("cr ij "+i+" "+j+ " "+coupsrecus[20][j]);
        //alert (coupsrecus[19][j]);
        coupsrecus[21][j]=coupsrecus[19][j]+coupsrecus[20][j];
    //alert (coupsrecus[21][j]);
    }
}

function calculetotaux ()
{
     
    //calcule totaux bruts et nets
    for (j=0;j<nbjoueurs;j++) {        
        
      //  alert ("point"+j+" "+points[i][j]);
        score[19][j]=0;
        score[20][j]=0;
        score[21][j]=0;
        points[19][j]=0;
        points[20][j]=0;
        points[21][j]=0;
        
        
        for (i=1;i<10;i++) {
            points[19][j]=points[19][j]+points[i][j];
            score[19][j]=score[19][j]+score[i][j];
        }        
        
        for (i=10;i<19;i++) {
            points[20][j]+=points[i][j];
            score[20][j]+=score[i][j];
        }
        score[21][j]=score[19][j]+score[20][j];
        points[21][j]=points[19][j]+points[20][j];
    }   
}
    
function calculepointsnet (idhole)
//calcule les points nets et met à jour le tableau points[][]
//lance l'affichage des points et totaux

{
 var currentscore = 1;
      
 var i=1;
 var nbequals;
 var joueursetpoints=0;
 var pointsshared =0;
 var pointsadistribuer = nbjoueurs;
 var i,j;
    
for (i=0;i<nbjoueurs;i++){
        points[idhole][i]=0;   
    }
if (gamemode===1){    
        //calcule les points "chouette"
    
    var x=1;
    for (i=0;i<parseInt(nbjoueurs);i++){
        //alert ("score jouer " +i +" "+ score[idhole][i]);
        x*=score[idhole][i];
        }
    if(x===0) return;

    
        while (joueursetpoints<nbjoueurs-1){
     //alert ("currentscore =" + currentscore);
            nbequals=0;
            for (j=0;j<nbjoueurs;j++){
              if (score[idhole][j]==currentscore){
                nbequals++;
           }
         }
     //alert ("nbequals ="+ nbequals);
        if (nbequals!==0){
            pointsshared = (2 * (pointsadistribuer-1) - nbequals + 1)/2;
            for (j=0;j<nbjoueurs;j++){
              if (score[idhole][j]==currentscore){
                //alert ("idhole =" + idhole);
                //alert ("j= "+j);
                points[idhole][j]=pointsshared;
                }
            }
            pointsadistribuer-= nbequals * pointsshared;
            pointsadistribuer++;
        }
        joueursetpoints+=nbequals;
        currentscore++;                        
        pointsshared=0;
        }
    }
    
    if (gamemode===2){
     //calcule les points nets stableford  
   // alert ("idhole "+ idhole);
        var pp; var ppar;
        for (ee=0;ee<parseInt(nbjoueurs);ee++){
              //  alert ("idhole "+idhole);
            //      alert ("par "+ coursepar[idhole-1]);
            //      alert ("cr "+ coupsrecus[idhole][ee]);
            //      alert ("score "+ score[idhole][ee]);
            
            //alert ("index " +joueursindex[ee]);
            if (score [idhole][ee]!=0){
                ppar=parseInt(idhole)-1;
                pp = parseInt(coursepar[ppar]) + parseInt(coupsrecus[idhole][ee]) - parseInt(score[idhole][ee])+ 2;
                if (pp>0) points[idhole][ee] = pp;
                else points[idhole][ee]=0;
                
                //alert ("points ="+points[idhole][ee]);
            }

        }
    }
    //alert ("3");
    calculetotaux();
    //alert ("4");
    affichescoresnet(idhole);
    //alert ("5");
    affichetotaux ();
    //alert ("fin");
}

    
function addInputText(elm)
//handler de traitement inputs

{
    if (elm.getElementsByTagName('input').length > 0)           return;
    var value = elm.innerHTML;
    elm.innerHTML = '';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', value);
    input.setAttribute('onBlur', 'closeInput(this)');
    elm.appendChild(input);
    input.focus();
}

function blinkcell (cel) {
    //alert ("flag ="+flag);
    // alert ("currentcell= "+currentcell);
    
    var td = document.getElementById(cel);
    if (flag==1){

        td.style.backgroundColor="red";   
        flag = 0;
        // alert ("flag= "+ flag);
    }
    else {
        //alert ("false");
        td.style.backgroundColor=currbg;
        flag = 1;
    }
}


function addInputNumber(elm, idmode)
//handler de traitement inputs
{
    if (scoreallowed) {
       // alert ("cel ="+elm.parentNode.getAttribute('id'));
        if (xblink!=undefined) clearInterval(xblink);
        var td=document.getElementById(currentcell);
        if (td!=undefined) td.style.backgroundColor=currbg;

        currentcell = elm.getAttribute("id");
       // alert ("currentcell= "+currentcell);

        var tmp = document.getElementById(currentcell);
        currbg = tmp.style.backgroundColor;

        xblink = setInterval("blinkcell(currentcell)", 200);

        affichekeypad(idmode);

        //alert (keypadobject.style.display);
    }
}


function clearscorecard ()
{
     for (i=1; i<22; i++){  
                for (j=0;j<4;j++){
                    score[i][j]=0;
                    points[i][j]=0;
                }
         
    }
    for (j=0;j<4;j++)
        joueursindex[j]=0;
    
    effacecoupsrecus();
    effacejoueurs ();
    videscorecard();
}
                        


function addkey(key, idobject){    

    var td=document.getElementById(idobject);
    var tmp = String(idobject);
    var pos = tmp.indexOf ("P"); 
    var tmp3=tmp.slice (pos+2, pos+5);
    
    var tmp2= tmp.slice(pos+1,pos+2);
    var currentplayer = parseInt(tmp2);
    currentplayer--;

    var tmp4=td.innerHTML;
    
    if (tmp3==="Idx"){
    //modify index    
        scoreallowed=false;
        //joueuridx[currentplayer][0]=key;
        if (key===66) {
            //alert (tmp4.indexOf(","));
            if (tmp4.indexOf(",")==-1) key=".";
            else key="";
        }   
        if (key===67) {
            td.innerHTML="";
            key="";
            effacecoupsrecus();
        }
        if (key===77){
            cachekeypad();
            clearInterval(xblink);
            td.style.backgroundColor=currbg;
            //alert ("currentplayer=" + currentplayer);
            if (parseFloat(td.innerHTML)>54) td.innerHTML="54";
            joueursindex[currentplayer]=parseFloat(td.innerHTML);
            //alert ("indexjoueur ="+ joueursindex[currentplayer]);
            if (gamemode==2){
                calculecoupsrecus ();
                effacecoupsrecus();
                affichecoupsrecus ();

                for (ff=1;ff<=b18T;ff++){
                    calculepointsnet(ff);
                    affichescoresnet(ff);
                }
                affichetotaux ();
            }
            scoreallowed=true;
            return;
        }
        td.innerHTML+=key;
    }
    else {    
        //modify score
        
        var tmp3 = tmp.slice(1,pos);
        var currenthole = parseInt (tmp3);

        if (key===67) {
        // cancel
            key=0;
        }
        td.innerHTML=key;
        score[currenthole][currentplayer]= parseInt(key);
        
        calculepointsnet (currenthole);  
        calculetotaux();
        affichetotaux ();
        cachekeypad();
        clearInterval(xblink);
        td.style.backgroundColor=currbg;
    }
}


function updatesettings ()
{    
    if ($("#flip9T").val()=='on')
    {
        b18T=9;  
    }
    else {
        b18T=18;
    };
    
    if ($("#flipPar").val()=='on')
    {
        affichepar =1;   
    }
    else {
        affichepar =0;
    }

    if ($("#flipHcp").val()=='on')
    {
        affichehcp =1;   
    }
    else {
        affichehcp =0;
    }

    nbjoueurs=$("#sliderplayers").val();
    
   // alert (nbjoueurs);
    
    if ($("#flipmode").val()=='on')
    {
        gamemode=2;  
    }
    else {
        gamemode=1;
    };
    
  // alert(gamemode);
    
    //set parcours
    
    cachesettingsmenu ();  
    calculecoupsrecus ();
    
    //re-affiche
    createtableandhandlers ();
 
    
    var txx;
  //re-calcule
    for (txx=1;txx<=parseInt(b18T);txx++){
        //alert ("18t " + b18T);
        //alert (txx);
        calculepointsnet(txx);
    }
    //alert ("2");
    
    for (tt=1;tt<=b18T;tt++){
//        alert (tt);
        affichescoresbrut(tt);
        affichescoresnet(tt);
    }
    
    calculetotaux();
    
    if (gamemode==2) {
        //alert ("affiche coups recus");
        affichecoupsrecus ();
     }
 //   alert("1");
    afficheindex ();
    affichereperes ();
    //alert ("2");
    affichetotaux ();
}


function mail_send () {
   
    
    var tdiv = document.getElementById("scorecard2mail");
    
    var tablehtml ="";// tdiv.innerHTML;
   
       // tablehtml+=json = array2json(score)
   
    var tmpstr = $('#menumail2').serialize();
    //alert (tmpstr);
    //input_data+=table;
    
    var scoremail = [];
    var pointsmail = [];
    
    scoremail = score;
    pointsmail = points;
    
    scoremail.shift();
    pointsmail.shift();
  
    
    var input_data ={
        
        'score0' : scoremail,
        'points0' : pointsmail,
        'nbjoueurs' : nbjoueurs, 
        'mailaddress0' : $('#email0').val(),
        'mailaddress1' : $('#email1').val(),
        'mailaddress2' : $('#email2').val(),
        'coursename' : coursename,
        'coursepar' : coursepar,
        'coursehcp' : coursehcp,
        'coupsrecus' : coupsrecus,
        'joueursindex' : joueursindex,
        'joueursreperes' : joueursreperes,
        'joueursname' : joueursname,
        'b18T' : b18T
    }
    input_data = $.toJSON(input_data);
    
    
 // alert (input_data);
    
    
    $.ajax({
    type: "GET",
    url: "http://www.clemot.com/scorecard/www/php/mail.php",
    data: "pTableData=" + input_data,
});
    
                       
    cachedialogmail();
    return true; 
}

function setrepere (idrepere)
{

    reperecell = cellreperid.getAttribute("id");
    
    var tmp = document.getElementById(reperecell);
//   alert (idrepere);
    var tmp4 = tmp.getAttribute('id');
    var pos = tmp4.indexOf ("P"); 
    var tmp3 = tmp4.slice (pos+1, pos+2);
    //alert ("idx joueur"+tmp3);
    
    //idrepere
    tmp.style.backgroundRepeat="no-repeat";
    tmp.style.backgroundPosition="center center";
    
    switch (idrepere){
         case 1:
                tmp.style.backgroundImage="url(images/reper_blanc.gif)";
                break;
         case 2:
                tmp.style.backgroundImage="url(images/reper_jaune.gif)";
                break;
         case 3:
                tmp.style.backgroundImage="url(images/reper_bleu.gif)";
                break;
         case 4:
                tmp.style.backgroundImage="url(images/reper_rouge.gif)";
                break;
    }
    joueursreperes[parseInt(tmp3)-1]=idrepere;
    //alert ("joueur reperes set"+joueursreperes[parseInt(tmp3)]);
    cachereperesmenu ();
}


/**
 * Converts the given data structure to a JSON string.
 * Argument: arr - The data structure that must be converted to JSON
 * Example: var json_string = array2json(['e', {pluribus: 'unum'}]);
 * 			var json = array2json({"success":"Sweet","failure":false,"empty_array":[],"numbers":[1,2,3],"info":{"name":"Binny","site":"http:\/\/www.openjs.com\/"}});
 * http://www.openjs.com/scripts/data/json_encode.php
 */
function array2json(arr) {
    var parts = [];
    var is_list = (Object.prototype.toString.apply(arr) === '[object Array]');

    for(var key in arr) {
    	var value = arr[key];
        if(typeof value == "object") { //Custom handling for arrays
            if(is_list) parts.push(array2json(value)); /* :RECURSION: */
            else parts.push('"' + key + '":' + array2json(value)); /* :RECURSION: */
            //else parts[key] = array2json(value); /* :RECURSION: */
            
        } else {
            var str = "";
            if(!is_list) str = '"' + key + '":';

            //Custom handling for multiple data types
            if(typeof value == "number") str += value; //Numbers
            else if(value === false) str += 'false'; //The booleans
            else if(value === true) str += 'true';
            else str += '"' + value + '"'; //All other things
            // :TODO: Is there any more datatype we should be in the lookout for? (Functions?)

            parts.push(str);
        }
    }
    var json = parts.join(",");
    
    if(is_list) return '[' + json + ']';//Return numerical JSON
    return '{' + json + '}';//Return associative JSON
}

