<?php

	$uuid = 0;
    if(isset($_GET['uuid'])){ $uuid = (int)$_GET['uuid']; }
	
	$uuid.='.cache';
	
	$fileh = fopen ($uuid, "r");
	$json = fread ($fileh, filesize($uuid));
	fclose ($fileh);
	//$json = json_encode($results);
    print $json;
?>
