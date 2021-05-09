function singIn(){

	nik = document.getElementById("nikName");
	
	pasword = parseFloat(document.getElementById("pass").value);

	rest1 = document.querySelector("#result1");

	actions = document.querySelector("#action");
	

	if(nik.value=="" || pasword==""){
		rest1.textContent = `Login yoki parol kiritilmagan!`;
	} else if (nik.value!="admin" || pasword!=12345) {
		rest1.textContent = `Siz kiritgan LOGIN:${nik.value} yoki PAROL:${pasword} noto'g'ri `;
		
	} else {
		$('#pressBtn').click(function(event){
			$('#button-send').html('Sending E-Mail...');
		}
	}
}