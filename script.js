const form=document.getElementById("form");
const username=document.getElementById("username");
const password=document.getElementById("password");

//Error function

function showError(input,message){
    const formElement=input.parentElement;
    formElement.className="form-control error";

    formElement.querySelector("small").innerText=message;
}

function showSuccess(input){
    const formElement=input.parentElement;
    formElement.className="form-control success";
}


//Event Listener
form.addEventListener("submit",function(event){
    event.preventDefault();

    if(username.value===""){
        showError(username,"username is Required");
    }
    else{
        showSuccess(username);
    }

    if(password.value===""){
        showError(password,"Password is Required");
    }
    else{
        showSuccess(password);
    }

});