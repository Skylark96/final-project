


const showpass = document.getElementById("eye");
showpass.addEventListener("click" ,show_hide);

function show_hide(e) {
    const btn = e.target;
    showpass.classList.toggle("fa-eye");
    const passInput = document.getElementById ("pass")
    if (passInput.type == "password") {
    passInput.type = "text" }
    else { 
        passInput.type = "password"
    }
}


function validation(){

    var input = document.getElementById("emailInput");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(emailCheck)){
        input.classList.add("valid");
        input.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "lightgreen";
    }

    else if (email == "") {
        input.classList.remove("valid");
        input.classList.remove("invalid");
        text.innerHTML = ""
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        text.innerHTML = "Please Enter A Valid Email Address."
        text.style.color = "red";
    }
}

function mouseover(){

    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(password =="" || !email.match(emailCheck)){
        buttonMove();
    }

    else {
        document.getElementById("btn").style.cursor = "pointer";
    }
}

function buttonMove(){
    const button = document.getElementById("btn");
    button.style.left = Math.random()*100 +"px";
    button.style.top = Math.random()*180 +"px";
}
