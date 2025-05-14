const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpDiv = document.getElementById("sign-up");
const signInDiv = document.getElementById("sign-in");


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
    signUpDiv.style.display = "block"; 
    signInDiv.style.display = "none"; 
    });

loginBtn.addEventListener("click", () => {
    signUpDiv.style.display = "none"; 
    signInDiv.style.display = "block"; 
});     
