<?php
	
	$con = mysqli_connect('127.0.0.1','root','');
	mysqli_select_db($con, 'patient');

	$Age = $_POST['age'];
	$Temp = $_POST['temp'];
	$Score = $_POST['score'];
	$Gender = $_POST['gender'];
	$r_date = date("Y-m-d");

	$status = "";
	if($Score < 5){
		$status = "Negative";
	}
	else{
		$status = "Positive";
	}


	$sql = "INSERT INTO result (age, gender, temperature, result_date, score, status) VALUES ('$Age', '$Gender', '$Temp', '$r_date', '$Score', '$status')";
	mysqli_query($con, $sql);

?>