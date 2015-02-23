<?php

	$username = "clemotbmdb";
    $password = "211225a";
    $hostname = "mysql5-14.perso"; 

    //connection to the database
    $dbhandle = mysql_connect($hostname, $username, $password)
    or die("Unable to connect to MySQL");

    $selected = mysql_select_db("clemotbmdb",$dbhandle)
    or die("Could not select mydb");

	$idx = 0;
    if(isset($_GET['valueindex'])){ $idx = (int)$_GET['valueindex']; }
	
	
	if(!$idx){
        $query = mysql_query("SELECT * FROM `courses`");
    } else {
        $query = mysql_query ("SELECT * FROM `courses` WHERE `indexcourse`='".$idx."'");
    }
	
	$results = array();
	while($row = mysql_fetch_array($query))
	{
		$results[] = array(
		'indexcourse' => $row['indexcourse'],
		'name' => $row['name'],
		'par' => $row['par'],
		'SSSblanc'=> $row['SSSblanc'],
		'SSSjaune'=> $row['SSSjaune'],
		'SSSbleu'=> $row['SSSbleu'],
		'SSSrouge'=> $row['SSSrouge'],
		'slopeblanc'=> $row['slopeblanc'],
		'slopejaune'=> $row['slopejaune'],
		'slopebleu'=> $row['slopebleu'],
		'sloperouge'=> $row['sloperouge'],
		'par1'=> $row['par1'],
		'par2'=> $row['par2'],
		'par3'=> $row['par3'],
		'par4'=> $row['par4'],
		'par5'=> $row['par5'],
		'par6'=> $row['par6'],
		'par7'=> $row['par7'],
		'par8'=> $row['par8'],
		'par9'=> $row['par9'],
		'par10'=> $row['par10'],
		'par11'=> $row['par11'],
		'par12'=> $row['par12'],
		'par13'=> $row['par13'],
		'par14'=> $row['par14'],
		'par15'=> $row['par15'],
		'par16'=> $row['par16'],
		'par17'=> $row['par17'],
		'par18'=> $row['par18'],
		'hcp1'=> $row['hcp1'],
		'hcp2'=> $row['hcp2'],
		'hcp3'=> $row['hcp3'],
		'hcp4'=> $row['hcp4'],
		'hcp5'=> $row['hcp5'],
		'hcp6'=> $row['hcp6'],
		'hcp7'=> $row['hcp7'],
		'hcp8'=> $row['hcp8'],
		'hcp9'=> $row['hcp9'],
		'hcp10'=> $row['hcp10'],
		'hcp11'=> $row['hcp11'],
		'hcp12'=> $row['hcp12'],
		'hcp13'=> $row['hcp13'],
		'hcp14'=> $row['hcp14'],
		'hcp15'=> $row['hcp15'],
		'hcp16'=> $row['hcp16'],
		'hcp17'=> $row['hcp17'],
		'hcp18'=> $row['hcp18']
		
		);
	}
	$json = json_encode($results);
	
    print $json;
?>
