var age;
var temp;
var gender;
var score = 0;
var clickCounter = 0;

function getBio(){
	age = document.getElementById("age").value;
    temp = document.getElementById("temp").value;
    gender = document.getElementById("gender").value;
    if(temp > 99.5)
    	score = 2;
}

function getSymptoms(){
	var x = document.getElementsByClassName("form-check-input-1");
    for (var i = 0; i < x.length; i++) {
    	if(x[i].checked && (score == 0 || score == 2)){
    		score += 3;
    	}
    	else if(x[i].checked)
    		score += 1;
	}
}

function getAdditional(){
	var x = document.getElementsByClassName("form-check-input-2");
    for (var i = 0; i < x.length; i++) {
    	if(x[i].checked)
    		score += 2;
	}
}

function clicked(){
	var x = document.getElementsByClassName("confirm-input-"+(clickCounter+1));
	if(!x[0].checked){
		alert("Please check all the information carefully and confirm that you are giving the correct information by checking the box");
	}
	else if(clickCounter == 0){
		var m = document.getElementById("age").value;
		var n = document.getElementById("temp").value;
		if(m == 0 || n == 0)
			alert("Please fill out all the details");
		else{
			secondStep();
			clickCounter++;
		}
	}
	else if(clickCounter == 1){
		thirdstep();
		clickCounter++;
	}
	else if(clickCounter == 2){
		result();
		clickCounter++;
	}

}
function secondStep(){
	document.getElementById("symptoms").innerHTML += `<hr>
					<div>
						<h3>Symptoms</h3>
						<div class="form-check">
							<input class="form-check-input-1" type="checkbox" id="formCheck-2">
							<label class="form-check-label" value="1" for="formCheck-1">Breathing problem<br></label>
						</div>
						<div class="form-check">
							<input class="form-check-input-1" type="checkbox" id="formCheck-2">
							<label class="form-check-label" value="2" for="formCheck-2">Dry cough<br></label>
						</div>
						<div class="form-check">
							<input class="form-check-input-1" type="checkbox" id="formCheck-3">
							<label class="form-check-label" value="3" for="formCheck-3">Sore throat</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-1" type="checkbox" id="formCheck-4">
							<label class="form-check-label" value="4" for="formCheck-4">Weakness</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-1" type="checkbox" id="formCheck-5">
							<label class="form-check-label" value="5" for="formCheck-5">Runny nose</label>
						</div>
					</div>
					<hr>
					<div class="form-check">
						<input class="confirm-input-2" type="checkbox" id="confirm1">
						<label class="form-check-label">Given information is correct</label>
					</div>`;

}

function thirdstep(){
	document.getElementById("additional").innerHTML += `<hr>
					<div>
						<h3>Additional Information</h3>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-1">
							<label class="form-check-label" value="6" for="formCheck-1">Abdominal pain<br></label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-2">
							<label class="form-check-label" value="7" for="formCheck-2">Vomiting<br></label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-3">
							<label class="form-check-label" value="8" for="formCheck-3">Diarrhoea</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-4">
							<label class="form-check-label" value="9" for="formCheck-4">Chest pain or pressure</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-5">
							<label class="form-check-label" value="10" for="formCheck-5">Muscle pain</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-6">
							<label class="form-check-label" value="11" for="formCheck-6">Loss of taste or smell</label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-7">
							<label class="form-check-label" value="12" for="formCheck-7">Rash on skin, or discoloration of fingers or toes<br></label>
						</div>
						<div class="form-check">
							<input class="form-check-input-2" type="checkbox" id="formCheck-8">
							<label class="form-check-label" value="13" for="formCheck-8">Loss of speech or movement<br></label>
						</div>
					</div>
					<hr>
					<div class="form-check">
						<input class="confirm-input-3" type="checkbox" id="confirm1">
						<label class="form-check-label">Given information is correct</label>
					</div>`;
	document.getElementById("button").innerHTML = "See Result";
}

function result(){
	getBio();
	getSymptoms();
	getAdditional();
	if(score < 5){
		document.getElementById("result").innerHTML += `<h1>Based on what you described, here's what we would recommend</h1>
			<h2>Manage Symptoms at home</h2>
			<p>Your answers indicate that you do not have any symptoms that currently suggest the need for COVID-19 testing. 
			but if you are still skeptical, you can isolate yourself and contact a doctor</p>
			<h1><strong>Result: </strong><span id ="res" style="color:green">Negative</span><h1><hr>`;
	}
	else if(score > 7){
		document.getElementById("result").innerHTML += `<h1>Based on what you described, here's what we would recommend</h1>
			<h2>Contact a Doctor and hospitalize immediately</h2>
			<p>Your answers indicate that you are almost a confirmed patient of COVID-19. 
			Isolate yourself, contact a doctor immediately and follow his advice. Hospitalization is highly recommended</p>
			<strong>Here is a list of some doctor's number in case of emergency</strong>
			<ul>
				<li>Dr. Hasan: +880191234457</li>
				<li>Dr. Karim: +880191234567</li>
				<li>Dr. Nazmus: +880191567546</li>
				<li>Dr. Sakib: +880191098009</li>
			</ul>
			<h1><strong>Result: </strong><span id = "res" style="color:red">Positive</span><h1><hr>`;
	}
	else if(score > 5 && score < 7){
		document.getElementById("result").innerHTML += `<h1>Based on what you described, here's what we would recommend</h1>
			<h2>Contact a Doctor immediately</h2>
			<p>Your answers indicate that you have a high chance that you have been affected by COVID-19. 
			Isolate yourself, contact a doctor immediately and follow his advice</p>
			<strong>Here is a list of some doctor's number in case of emergency</strong>
			<ul>
				<li>Dr. Hasan: +880191234457</li>
				<li>Dr. Karim: +880191234567</li>
				<li>Dr. Nazmus: +880191567546</li>
				<li>Dr. Sakib: +880191098009</li>
			</ul>
			<h1><strong>Result: </strong><span id ="res" style="color:red">Positive</span><h1><hr>`;
	}
	else{
		document.getElementById("result").innerHTML += `<h1>Based on what you described, here's what we would recommend</h1>
			<h2>Contact a Doctor</h2>
			<p>Your answers indicate that you are a possible suspected case for COVID-19 affected. 
			Isolate yourself, contact a doctor and follow his advice</p>
			<h1><strong>Result: </strong><span id ="res" style="color:red">Positive</span><h1><hr>`;
	}

	var element = document.getElementById("result");
	element.innerHTML += `<a href="index.html"><button class="btn btn-primary" id="button" type="button">Asses Another Case</button></a>
						  <a href="results.php"><button class="btn btn-primary" id="button" type="button">See Other Results</button></a>
						  <h1 name = 'score' style="display:none">`;

	document.getElementById("score").value = score;
	
	element.style.border = "2px solid grey";
	element.style.marginTop= "50px";
	element.style.borderRadius = "5px";
	element.style.padding = "30px 30px 30px 30px";
	
	document.getElementById("button").type = "submit";
	document.getElementById('result').scrollIntoView();
}