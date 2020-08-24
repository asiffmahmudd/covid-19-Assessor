<?php
	$con = mysqli_connect("localhost","root","","patient");
	$s = mysqli_query($con, "select * from result");
?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
		<title>bro-tech</title>
		<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/fonts/ionicons.min.css">
		<link rel="stylesheet" href="assets/css/Contact-Form-Clean.css">
		<link rel="stylesheet" href="assets/css/Dark-NavBar-1.css">
		<link rel="stylesheet" href="assets/css/Dark-NavBar-2.css">
		<link rel="stylesheet" href="assets/css/Dark-NavBar.css">
		<link rel="stylesheet" href="assets/css/Footer-Dark.css">
		<link rel="stylesheet" href="assets/css/styles.css">
		<link rel="stylesheet" href="assets/css/font-awesome.min.css">
		<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
	</head>

	<body>
		<header>
			<nav class="navbar navbar-dark navbar-expand-md bg-dark">
				<div class="container">
					<a class="navbar-brand text-light" href="index.html">Covid-19</a>
					<button data-toggle="collapse" class="navbar-toggler border-light" data-target="#navcol-2">
						<span class="sr-only">Toggle navigation</span>
						<span class="navbar-toggler-icon border-light"></span>
					</button>
					<div
						class="collapse navbar-collapse" id="navcol-2">
						<ul class="nav navbar-nav ml-auto">
							<li class="nav-item" role="presentation"><a class="nav-link active" href="index.html"><i class="fa fa-home"></i> Home</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link" href="#"><i class="fa fa-user"></i> About</a></li>
							<li class="nav-item" role="presentation"><a class="nav-link" href="#"><i class="fa fa-address-book"></i> Contact Us</a></li>
						</ul>
					</div>
				</div>
			</nav>
			
		</header>
		<div class="data">
			<div class="container">
				<table class="table">
					<tr>
						<th>SL No.</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Temperature</th>
						<th>Assessment Date</th>
						<th>Assessment Score</th>
						<th>Covid-19 Result</th>
					</tr>
					<?php
						while($rows=mysqli_fetch_array($s)){
					?>	
						<tr>
							<td><?php echo $rows['id']; ?></td>
							<td><?php echo $rows['age']; ?></td>
							<td><?php echo $rows['gender']; ?></td>
							<td><?php echo $rows['temperature']; ?></td>
							<td><?php echo $rows['result_date']; ?></td>
							<td><?php echo $rows['score']; ?></td>
							<td><?php echo $rows['status']; ?></td>
						</tr>	
					<?php	
						}
					?>
				</table>
			</div>
		</div>
		<div class="footer-dark" id="foot">
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-md-6 item text">
							<h3>Disclaimer</h3>
							<p>This COVID-19 Self Assessment System is only for software<br>
							development purpose and may not yield actual result. Any<br>
							information given by users of this system will not be disclosed<br>
							or store to anywhere.”<br></p>
						</div>
						<div class="col item social">
							<a href="#"><i class="icon ion-social-facebook"></i></a>
							<a href="#"><i class="icon ion-social-twitter"></i></a>
							<a href="#"><i class="icon ion-social-snapchat"></i></a>
							<a href="#"><i class="icon ion-social-instagram"></i></a>
						</div>
					</div>
					<p class="copyright">Covid-19 Self-assesment © 2020</p>
				</div>
			</footer>
		</div>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		<script src="assets/js/script.js"></script>
	</body>

</html>