<?php
	// Unescape the string values in the JSON array
	$tableData = stripcslashes($_GET["pTableData"]);

	// Decode the JSON array
	$tableData2 = json_decode($tableData,TRUE);
   	$uuid =  $tableData2["uuid"] . "." . date("d/m/y h:i") . '.save';
	
	$fileh = fopen ($uuid, "w");
	fwrite ($fileh, $tableData);
	fclose ($fileh);
	
?>