/* Posts Page JavaScript */

"use strict";

window.onload = () => {

    getPosts();

  const logoutbutton = document.querySelector("#logout");
    logoutbutton.addEventListener("click", (event) =>{
        event.preventDefault();
        logout();
    })
}


const getPosts = async () => {
    try {

        const loginData = getLoginData();

        const response = await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts/",{
            method: "GET",
            headers: {

                Authorization: `Bearer ${loginData.token}`
            }
        })

        const data = await response.json();

        const postsContainer = document.getElementById('postsContainer');

        for (const post of data) {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postContent = `
            <h3>${post.text}</h3>
            <p class="author"><strong>User:</strong> ${post.username}</p>
            <p class="Timestamp"><strong>Time:</strong> ${new Date(post.createdAt).toLocaleString()}</p>
            <p> <span class="material-symbols-outlined">
            </span> </p>
             `;

            postElement.innerHTML = postContent;
            postsContainer.appendChild(postElement);
        }
    } catch (error) {
    
    }

}