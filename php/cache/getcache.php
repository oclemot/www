<?php

	$uuid = 0;
    if(isset($_GET['uuid'])){ $uuid = $_GET['uuid']; }
	
	$uuid.='.cache';
	$fileh = fopen ("testuuid.txt", "w");
	$json = fwrite ($fileh, $uuid);
	fclose ($fileh);
	
	$fileh = fopen ($uuid, "r");
	$json = fread ($fileh, filesize($uuid));
	fclose ($fileh);
	//$json = json_encode($results);
    print $json;
?>
