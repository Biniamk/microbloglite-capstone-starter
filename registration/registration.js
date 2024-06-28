"use strict"

window.onload=()=>{

    let newUserForm= document.querySelector("#newLoginForm");
    newUserForm.addEventListener("submit", createUser);

}

let createUser = async (event)=>{

    event.preventDefault();

    let formData = new FormData(event.target);
    let formDataAsObject = Object.fromEntries(formData);

    try {

        let response = await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(formDataAsObject)
        });

      

         let newUser = await response.json();

        window.location.href = "../index.html";
        
    } catch (error) {
        alert("Error");
    }


}