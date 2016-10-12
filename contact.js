
//register button click on "bring on button"
//validate as email
//if validated compare to confirm
//else :  emailStatus.innerHTML=invalid email fail
//if compare==true 
//emailStatus.innerHTML=Success
//else :  emailStatus.innerHTML=Not the same Email fail

function validEmail(email){//see if is a valid email
	var reg = new RegExp("^[a-zA-Z0-9-._]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$");                  
	return reg.test(email);
}


document.getElementById('register').onclick=function(){
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
	if(validEmail(email)){//if is valid email{
		if(email==confirmEmail){alert("Success!! Email registered.");}
		else{alert("Error: Emails don't match!!");}
	}
	else{
		alert("Error: Invalid email!!");
	}
};

