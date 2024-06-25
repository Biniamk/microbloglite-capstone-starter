/* Posts Page JavaScript */

"use strict";

window.onload
{
    const logoutbutton = document.querySelector("#logout");
    logoutbutton.addEventListener("click", (event) =>{
        event.preventDefault();
        logout();
    })
}