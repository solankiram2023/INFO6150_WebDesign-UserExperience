var title;
var firstName;
var lastName;
var email;
var phone;
var zipCode;
var comments;
var addressStreet1;
var addressStreet2;
var state;
var city;
var hobbies;
var hobbiesTextBox;

var isTitleValid = false;
var isFirstNameValid = false;
var isLastNameValid = false;
var isEmailValid = false;
var isPhoneValid = false;
var isZipCodeValid = false;
var isCommentsValid = false;
var isAddress1Valid = false;
var isStateValid = false;
var isCityValid = false;
var isHobbiesValid = false;
var isHobbiesTextBoxValid = false;

var isFormValid = false;

window.addEventListener("load", validateForm);

function checkSelection(){

	if(document.getElementById('selectCheckBox').checked)
		document.getElementById('selectCheckBox').checked = false;

	var x = document.getElementById('hobbiesList');

	if(x.value == "none"){

		document.getElementById('afterChange').style.display = "none";
		var y = document.getElementById('afterChange');
		y.childNodes[1].required = false;
	}
	else{

		var y = document.getElementById('afterChange').style.display = "inline-block";
		document.getElementById('afterCheckbox').style.display = "none";
		var z = document.getElementById('afterChange');
		z.childNodes[1].required = true;
	}

	var y = document.getElementById('onSelect');
	if(x.value=="coding")
		y.innerHTML = "&nbsp;Java";
	else if(x.value=="dancing")
		y.innerHTML = "&nbsp;Jazz";
	else if(x.value=="singing")
		y.innerHTML = "&nbsp;Classical";
	else if(x.value=="movies")
		y.innerHTML = "&nbsp;Bollywood";
	else if(x.value=="reading")
		y.innerHTML = "&nbsp;Fiction";
	else if(x.value=="other")
		y.innerHTML = "&nbsp;Type for other";

	validateForm();

}

function checkBox(x){

	if(x.checked){
		document.getElementById('afterCheckbox').style.display = "inline-block";
		document.getElementById('hobbiesListText').required = true;
		isHobbiesValid = true;
	}
	else{
		document.getElementById('afterCheckbox').style.display = "none";
		document.getElementById('hobbiesListText').required = false;
		isHobbiesValid = false;
	}

	validateForm();
}

function validateForm() {

	var titleRadios = document.getElementsByName('title');
	for (var i = 0; i < titleRadios.length; i++) {
    	if (titleRadios[i].checked) {
        	isTitleValid = true;       
    	}
	}

   isFormValid = isTitleValid && isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid &&
  				isZipCodeValid && isCommentsValid && isAddress1Valid && isStateValid &&
  				isCityValid && isHobbiesValid && isHobbiesTextBoxValid;
   document.getElementById("submitBtn").disabled = !isFormValid;
}


function validateInputs(object, type, nameType){

	var regExName = /^[a-zA-Z]+$/	
	var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
	var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
	var regExZipCode = /^\d{5}$/;

	var name = 'errorMsg'+nameType;

	switch(type){

		case 1:	
			if(!object.value.trim().match(regExName)){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Invalid input for your first name. Only text values permitted<br><br>"
				document.getElementById(name).style.display="block";
				isFirstNameValid = false;
			} else if(object.value.length < 2){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "First Name should have atleast 2 characters.<br><br>"
				document.getElementById(name).style.display="block";
				isFirstNameValid = false;
			} else if(object.value.length > 20){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "First Name must be less than 20 characters.<br><br>"
				document.getElementById(name).style.display="block";
				isFirstNameValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isFirstNameValid = true;
			}
		validateForm();
		break;

		case 2:	
			if(!object.value.trim().match(regExName)){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Invalid input for your last name. Only text values permitted.<br><br>"
				document.getElementById(name).style.display="block";
				isLastNameValid = false;
			} else if(object.value.length == 0){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Last Name is required.<br><br>"
				document.getElementById(name).style.display="block";
				isLastNameValid = false;
			} else if(object.value.length < 2){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Last Name should have atleast 2 characters.<br><br>"
				document.getElementById(name).style.display="block";
				isLastNameValid = false;
			} else if(object.value.length > 20){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Last Name must be less than 20 characters.<br><br>"
				document.getElementById(name).style.display="block";
				isLastNameValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isLastNameValid = true;
			}
		validateForm();
		break;

		case 3:	
			if(!object.value.match(regExEmail)){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Invalid input for your email id. Please enter email id in proper format.<br><br>";
				document.getElementById(name).style.display="block";
				isEmailValid = false;
			} else if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "Email Id is required.<br><br>";
				document.getElementById(name).style.display="block";
				isEmailValid = false;
			} else if(!object.value.match(/^[a-z0-9._%+-]+@northeastern.edu$/)){
        		document.getElementById(name).innerHTML = "Only Northeastern email id is allowed.<br><br>";
				document.getElementById(name).style.display="block";
				isEmailValid = false;
    		} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isEmailValid = true;
			}
		validateForm();
		break;

		case 4:	
			if(!object.value.match(regExPhone)){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Invalid phone number. Only numerical values permitted and in the requested format xxx-xxx-xxxx.<br><br>";
				document.getElementById(name).style.display="block";
				isPhoneValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isPhoneValid = true;
			}
		validateForm();
		break;

		case 5:
			if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "Address Street 1 is required.<br><br>";
				document.getElementById(name).style.display="block";
				isAddress1Valid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isAddress1Valid = true;
			}
		validateForm();
		break;

		case 6:
			if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "City is required.<br><br>";
				document.getElementById(name).style.display="block";
				isCityValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isCityValid = true;
			}
		validateForm();
		break;

		case 7:
			if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "State is required.<br><br>";
				document.getElementById(name).style.display="block";
				isStateValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isStateValid = true;
			}
		validateForm();
		break;			


		case 8: 
			if(!object.value.match(regExZipCode)){
				object.style.border="2px solid red";	
				document.getElementById(name).innerHTML = "Invalid Zip code. Only numerical values permitted and in the requested format xxxxx.<br><br>";
				document.getElementById(name).style.display="block";
				isZipCodeValid = false;
			}
			else{
				object.style.border="";
				document.getElementById(name).style.display="none";
				isZipCodeValid = true;	
			}
		validateForm();
		break;

		case 9: 
			if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "Comments are required.<br><br>";
				document.getElementById(name).style.display="block";
				isCommentsValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isCommentsValid = true;
			}
		validateForm();
		break;

		case 10: 
			if(object.value.length == 0 || object.value.length == null || object.value == " "){
				document.getElementById(name).innerHTML = "The field cannot be empty!";
				document.getElementById(name).style.display="inline-block";
				isHobbiesTextBoxValid = false;
			} else{
				object.style.border="";
				document.getElementById(name).style.display="none";	
				isHobbiesTextBoxValid = true;
			}
		validateForm();
		break;
	}
 }

function submitButton(){

 	document.getElementById('afterChange').style.display = "none";
 
	if(document.getElementById('miss').checked)
		title = "Miss.";
 	else if(document.getElementById('mr').checked)
 		title = "Mr.";
 	else
 		title = "Mrs.";

 	firstName = document.getElementById('firstName').value;
 	lastName = document.getElementById('lastName').value;
 	email = document.getElementById('emailId').value;
 	phone = document.getElementById('phoneNumber').value;
    addressStreet1 = document.getElementById('addressStreet1').value;
 	addressStreet2 = document.getElementById('addressStreet2').value;
 	city = document.getElementById('city').value;
 	state = document.getElementById('state').value;
 	zipCode = document.getElementById('zipcode').value;
 	comments = document.getElementById('comments').value;
 	hobbies = document.getElementById('hobbiesList').value;

  	if(document.getElementById('hobbiesList').value!="none")
  	{
 		hobbiesTextBox = document.getElementById('hobbiesListText').value;
 	}
 	else
 		hobbiesTextBox = "-";

 	sessionStorage.setItem("title", title);
 	sessionStorage.setItem("firstName", firstName);
 	sessionStorage.setItem("lastName", lastName);
 	sessionStorage.setItem("email", email);
 	sessionStorage.setItem("phone", phone);
 	sessionStorage.setItem("addressStreet1", addressStreet1);
    sessionStorage.setItem("addressStreet2", addressStreet2);
 	sessionStorage.setItem("city", city);
    sessionStorage.setItem("state", state);
    sessionStorage.setItem("zipCode", zipCode);
 	sessionStorage.setItem("comments", comments);
 	sessionStorage.setItem("hobbiesTextBox", hobbiesTextBox);
 	sessionStorage.setItem("hobbies", hobbies);

 	return true;
 }

 function resetButton(){

 	document.getElementById("errorMsgEmailId").style.display="none";
 	document.getElementById("errorMsgFName").style.display="none";
 	document.getElementById("errorMsgLName").style.display="none";
 	document.getElementById("errorMsgPhone").style.display="none";
 	document.getElementById("errorMsgZipCode").style.display="none";
 	document.getElementById("errorMsgState").style.display="none";
 	document.getElementById("errorMsgCity").style.display="none";
 	document.getElementById("errorMsgAddressStreet1").style.display="none";
 	document.getElementById("errorMsgComments").style.display="none";
 	document.getElementById("afterChange").style.display="none";
 	document.getElementById("afterCheckbox").style.display="none";

 	var arrayOfInputs = document.getElementsByTagName("input");
 	var lengthOfArray=arrayOfInputs.length;

 	for (var i=0; i<lengthOfArray;i++){
		arrayOfInputs[i].style.border = "";
    }

    isTitleValid = false;
	isFirstNameValid = false;
	isLastNameValid = false;
	isEmailValid = false;
	isPhoneValid = false;
	isZipCodeValid = false;
	isCommentsValid = false;
	isAddress1Valid = false;
	isStateValid = false;
	isCityValid = false;
	isHobbiesValid = false;
	isHobbiesTextBoxValid = false;

	validateForm();
 }

 function showData(){
    var table = document.getElementById('myTable');
    var rows = table.insertRow(1);
    
    var cell1 = rows.insertCell(0);
    var cell2 = rows.insertCell(1);
    var cell3 = rows.insertCell(2);
    var cell4 = rows.insertCell(3);
    var cell5 = rows.insertCell(4);
    var cell6 = rows.insertCell(5);
    var cell7 = rows.insertCell(6);
    var cell8 = rows.insertCell(7);
    var cell9 = rows.insertCell(8);
    var cell10 = rows.insertCell(9);
    var cell11 = rows.insertCell(10);
    var cell12 = rows.insertCell(11);
    var cell13 = rows.insertCell(12);
    cell1.innerHTML = sessionStorage.getItem("title");
    cell2.innerHTML = sessionStorage.getItem("firstName");
    cell3.innerHTML = sessionStorage.getItem("lastName");
    cell4.innerHTML = sessionStorage.getItem("email");
    cell5.innerHTML = sessionStorage.getItem("phone");
    cell6.innerHTML = sessionStorage.getItem("addressStreet1");
    cell7.innerHTML = sessionStorage.getItem("addressStreet2");
    cell8.innerHTML = sessionStorage.getItem("city");
    cell9.innerHTML = sessionStorage.getItem("state");
    cell10.innerHTML = sessionStorage.getItem("zipCode");
    cell11.innerHTML = sessionStorage.getItem("comments");
    cell12.innerHTML = sessionStorage.getItem("hobbies");
    cell13.innerHTML = sessionStorage.getItem("hobbiesTextBox");


    }
/*function showData(){
		var table = document.getElementById('myTable');
	 	var rows = table.rows;
	 	rows[0].cells[1].innerHTML = sessionStorage.getItem("title");
	 	rows[1].cells[1].innerHTML = sessionStorage.getItem("firstName");
	 	rows[2].cells[1].innerHTML =  sessionStorage.getItem("lastName");
	 	rows[3].cells[1].innerHTML =  sessionStorage.getItem("email");
	 	rows[4].cells[1].innerHTML =  sessionStorage.getItem("phone");
	    rows[5].cells[1].innerHTML =  sessionStorage.getItem("addressStreet1");
	 	rows[6].cells[1].innerHTML =  sessionStorage.getItem("addressStreet2");
	 	rows[7].cells[1].innerHTML =  sessionStorage.getItem("city");
	 	rows[8].cells[1].innerHTML =  sessionStorage.getItem("state");
	 	rows[9].cells[1].innerHTML =  sessionStorage.getItem("zipCode");
	 	rows[10].cells[1].innerHTML =  sessionStorage.getItem("comments");
	 	rows[11].cells[1].innerHTML =  sessionStorage.getItem("hobbies");
	 	rows[12].cells[1].innerHTML =  sessionStorage.getItem("hobbiesTextBox");
}*/