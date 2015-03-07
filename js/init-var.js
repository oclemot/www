
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
        var flagblink;
        var courseindex;
        var coursename ="";
        var coursepartotal;
        var scoreallowed = true;
        var affichepar = 1;
        var affichehcp = 1;
        var cellreperid;
        var uuid;





// init variables
function init_variables ()
{
    nbjoueurs= 3;    
    gamemode = 1; //chouette
    b18T =18;
    currentcell="";
    uuid = "1234";

    for (i=0; i<22; i++){  
        score[i]=new Array();
        points[i]=new Array();
        coupsrecus[i]=new Array();
        
        for (j=0;j<4;j++){
            score[i][j]=0;
            points[i][j]=0;
            coupsrecus[i][j]=0;
            joueursindex[j]=0;
            joueursreperes[j]=1;
            joueursname[j]="joueur"+String(j);
        }
    }
    
    flagblink = 1;
    courseindex=1;
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
