function sent(){
	
	var name = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var lgn = document.getElementById("login").value;
	var psw = document.getElementById("password").value;
	
	var body = "firstname="+name+"&lname="+lastname+"&login="+lgn+"&password="+psw;
	var coment = document.getElementById("comment");
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'srv.php', true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhr.onreadystatechange = function() {//Это наш калбек, который вызывает сервер
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
		   coment.value = xhr.response;//xhr.response - тут ответ сервера
		   coment.rows = 6;//xhr.response - тут ответ сервера
		  
		   
		}
	};
	xhr.send(body);
}