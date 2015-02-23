
    //global variables

        var coursepar = [];
        var coursehcp = [];
        var coupsrecus = [];
        var joueursindex = [];
        var joueursreperes = [];
        var joueursSSS = [];
        var joueursslope = [];
        var score = [];
        var points = [];
        var coupsrecus = [];
        var joueursname = [];
        var nbjoueurs;    
        var gamemode;
        var b18T;
        var i,j;
        var currentcell;
        var xblink;
        var xcallback;
        var currbg;
        var flag;
        var courseindex;
        var coursename ="";
        var coursepartotal;
        var scoreallowed = true;
        var affichepar = 1;
        var affichehcp = 1;
        var cellreperid;





// init variables
function init_variables ()
{
    if (nbjoueurs===undefined)  nbjoueurs= 3;    
    if (gamemode===undefined) gamemode = 1; //chouette
    if (b18T===undefined) b18T =18;
    if (currentcell===undefined) currentcell="";

    for (i=1; i<22; i++){  
        if (score[i]===undefined) score[i]=new Array();
        if (points[i]===undefined) points[i]=new Array();
        if (coupsrecus[i]===undefined) coupsrecus[i]=new Array();
        
        for (j=0;j<4;j++){
            if (score[i][j]===undefined) score[i][j]=0;
            if (points[i][j]===undefined) points[i][j]=0;
            if (coupsrecus[i][j]===undefined) coupsrecus[i][j]=0;
            if (joueursindex[j]===undefined) joueursindex[j]=0;
            if (joueursreperes[j]===undefined) joueursreperes[j]=1;
            if (joueursname[j]===undefined) joueursname[j]="joueur"+String(j);
        }
    }
    
    if (flag===undefined) flag = 1;
    
    if (courseindex===undefined) courseindex=1;
    init_parcours (courseindex);
}


function init_parcours(courseref){
     
    //Initialisations du tableau "parcours" 
    var urlJSON = "http://www.clemot.com/scorecard/www/php/courses.php?valueindex=";
 //   alert (courseindex);
    urlJSON+=courseref;
 //   alert (urlJSON.slice(20));
    
    $.getJSON(urlJSON, {format: "json"}, function(data){
            $.each(data, function(key, val) {
              if (val.indexcourse==courseref){
                for (zz=0; zz<18; zz++) {
                    zzidx = zz+1;
                    tmpstr = 'par'+zzidx;  
                    //alert ("par "+ tmpstr);
                    coursepar[zz]=parseInt(val[tmpstr]);
                    tmpstr = 'hcp'+zzidx;
                    //alert ("hcp "+ tmpstr);
                    coursehcp[zz]=parseInt(val[tmpstr]);
                    //alert ("coursepar "+ zzidx+ " " + coursepar[zz]);
                    //alert ("coursehcp "+ zzidx+ " " + coursehcp[zz]);
                }
                courseindex=val['indexcourse'];
                SSSblanc = val['SSSblanc']; 
                slopeblanc = val['slopeblanc'];
                SSSjaune = val['SSSjaune']; 
                slopejaune = val['slopejaune'];
                SSSrouge = val['SSSrouge']; 
                sloperouge = val['sloperouge'];
                SSSbleu = val['SSSbleu']; 
                slopebleu = val['slopebleu'];

                coursename=val['name'];
                coursepartotal=val['par'];
                $('#defaultcourse').html (coursename + " par: "+ coursepartotal);   
                createtableandhandlers();
                var idj ;
                for (idj=0;idj<4;idj++)
                {
                    joueursslope[idj]=slopeblanc;
                    joueursSSS[idj]=SSSblanc;
                }
              }
          } 
        );
    });    
}


