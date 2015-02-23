<?php
	// Unescape the string values in the JSON array
	$tableData = stripcslashes($_GET["pTableData"]);

	// Decode the JSON array
	$tableData = json_decode($tableData,TRUE);
 	
    $subject = "Scores du jour";
	$nbjoueurs = intval($tableData["nbjoueurs"]);
	
	//email address settings
    $my_address = "olivier@clemot.com";
    $headers1 = "From: ".$my_address . "\r\n";
	
	$message="<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'> <html xmlns='http://www.w3.org/1999/xhtml'>";
	
	$message.="<head><title>Les scores du jour</title></head><body>";
	
    $message.="<table style=\"text-align:center\" border=\"1\" cellpadding=\"2\" cellspacing=\"2\">";
	$message.="<tr style=\"background-color:#94c1f5\">";
    
    $message.="<td style=\"text-align:center\" colspan=\"";
    
	$nbjoueurs = intval($tableData["nbjoueurs"]);
	
	$tmpint=intval (3 +2*$nbjoueurs);
		
	$message.=strval($tmpint);
    $message.="\">". "\r\n";
	
    $message.=$tableData["coursename"];
	//$message.="Pacours test";
    $message.="</td> </tr>";
	$message.="<tr style=\"background-color:#94c1f5\" > <td colspan=\"3\" > </td>". "\r\n";
    
//Ligne JOUEURS    
    
     for ($i=1;$i<=$nbjoueurs;$i++){
        $message.= "<td colspan=\"2\" style=\"background-color:#94c1f5\" >";
		$message.=strval ($tableData["joueursname"][$i]);
		$message.="</td>". "\r\n";
    }
    $message.="</tr>";
	
	$message.=" <tr style=\"background-color:#94c1f5;text-align:center\"> <td colspan=\"3\" >Index/Départ</td>". "\r\n";      
    
//Ligne INDEX
      
    for ($i=1;$i<=$nbjoueurs;$i++){
        $message.= "<td>";
		$message.=strval ($tableData["joueursindex"][$i-1]);
		$message.="</td> <td>";
	
		 switch ($tableData["joueursreperes"][$i-1]){
         case 1:
            //    $message.="<img src = 'http://www.clemot.com/scorecard/www/images/reper_blanc.gif'  alt='repere blanc'/> ";
                break;
         case 2:
             //   $message.="<img src = 'http://www.clemot.com/scorecard/www/images/reper_jaune.gif'  alt='repere jaune'/> ";
				break;
         case 3:
             //   $message.="<img src = 'http://www.clemot.com/scorecard/www/images/reper_bleu.gif'  alt='repere bleu'/> ";
                break;
         case 4:
             //   $message.="<img src = 'http://www.clemot.com/scorecard/www/images/reper_rouge.gif'  alt='repere rouge'/> ";
                break;
		}
		
		$message.="</td>" . "\r\n";
        }
    
    $message.="</tr>". "\r\n";
	$message.="<tr style=\"background-color:#d8d8d8\" ><td>#</td>";
    $message.="<td>Par</td>". "\r\n";
    
    $message.="<td>Hcp</td>";
    
    for ($i=1;$i<=$nbjoueurs;$i++){
        $message.="<td>Brut</td> <td>Net</td>". "\r\n";
    };

    $message.="</tr>";

//LiGNES TROUS 1-9
    
    $tmpid="";
    
    for ($i=1;$i<10;$i++){ 
		$message.="<tr> "; 
		$message.=" <td> " ;
		$message.=strval($i);
		$message.=" </td> ";
		$message.=" <td> ";
		$message.=strval ($tableData["coursepar"][$i-1]);
		$message.=" </td> ". "\r\n";
		$message.=" <td> ";
		$message.=strval ($tableData["coursehcp"][$i-1]);
		$message.=" </td> ". "\r\n";

		for ($j=1;$j<=$nbjoueurs;$j++){
          $message.= " <td> ";
		  $message.= strval ($tableData["score0"][$i-1][$j-1]);
		  $message.=" </td> ";
          $message.=" <td style=\"background-color:#d8d8d8\" > ";
		  $message.= strval ($tableData["points0"][$i-1][$j-1]);
		  $message.=" </td> ". "\r\n";
        }
		$message.=" </tr> "; 
      }
    
//Suite uniquement si 18 trous    
    
    if (intval($tableData["b18T"])==18){
    //if (true) {
        $message.="<tr style =\"background-color:#8bed73\" ><td colspan=\"3\">Out</td>";
      
//Ligne OUT        
        
        for ($i=1;$i<=$nbjoueurs;$i++){
        $message.="<td>";
		$message.= strval ($tableData["score0"][18][$i-1]);
		$message.="</td> <td>";
		$message.= strval ($tableData["points0"][18][$i-1]);
		$message.="</td>". "\r\n";
        }  

        $message.="</tr>";

//Lignes TROUS 10-18        
        
       for ($i=10;$i<19;$i++){ 
			$message.="<tr>"; 
			$message.="<td>";
			$message.=strval($i);
			$message.="</td>";
			$message.=" <td>";
			$message.=strval ($tableData["coursepar"][$i-1]);
			$message.=" </td>";
			$message.=" <td> ";
			$message.=strval($tableData["coursehcp"][$i-1]);
			$message.=" </td>". "\r\n";
			for ($j=1;$j<=$nbjoueurs;$j++){
		      $message.= " <td>";
			  $message.= strval ($tableData["score0"][$i-1][$j-1]);
			  $message.=" </td>";
			  $message.="<td style=\"background-color:#d8d8d8\">";
			  $message.= strval ($tableData["points0"][$i-1][$j-1]);
			  $message.=" </td>". "\r\n";
			 }
			$message.=" </tr> "; 
		}
		$message.=" <tr style=\"background-color:#8bed73\">";
		$message.=" <td colspan=\"3\"> In </td> " . "\r\n";

//Ligne IN
        
		for ($i=1;$i<=$nbjoueurs;$i++){
			$message.="<td>";
			$message.= strval ($tableData["score0"][19][$i-1]);
			$message.="</td> <td> ";
			$message.= strval ($tableData["points0"][19][$i-1]);
			$message.=" </td> ". "\r\n";
		}       
		$message.=" </tr> ";
		
		$message.=" <tr style=\"background-color:#8bed73\"  >";
		$message.=" <td colspan=\"3\"> Out </td> " . "\r\n";
	
        //LIgnes OUT (répétée)
		for ($i=1;$i<=$nbjoueurs;$i++){
				$message.="<td>";
				$message.= strval ($tableData["score0"][18][$i-1]);
				$message.="</td> <td> ";
				$message.= strval ($tableData["points0"][18][$i-1]);
				$message.=" </td>". "\r\n";
            }
		
		$message.=" </tr>";
		}
    
//DANS TOUS LES CAS ...    
    
//LIGNE TOTAL    
    
        $message.="<tr style=\"background-color:#8bed73\" > <td colspan=\"3\" >Total</td> ";
        for ($i=1;$i<=$nbjoueurs;$i++){
			$message.=" <td> ";
			$message.= strval ($tableData["score0"][19][$i-1]);
			$message.=" </td> <td> ";
			$message.= strval ($tableData["points0"][19][$i-1]);
			$message.=" </td> ". "\r\n\r\n";
		}
    $message.=" </tr> ";
    $message.="</table>";        
	$message.="</body></html>". "\r\n";
	
	
	$fileh = fopen ("test.htm", "w");
	fwrite ($fileh, $message);
	fclose ($fileh);

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= $headers1 . "\r\n";
	
	
	mail ($tableData["mailaddress0"], $subject, $message, $headers);
	mail ($tableData["mailaddress1"], $subject, $message, $headers);
	mail ($tableData["mailaddress2"], $subject, $message, $headers);
	mail ($tableData["mailaddress3"], $subject, $message, $headers);

	
?>