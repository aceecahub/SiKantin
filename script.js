const container = document.getElementById('container');
const registerbtn = document.getElementById('register');
const loginbtn = document.getElementById('login');

registerbtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginbtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// document.getElementById('daftar').addEventListener('click', function() {
// document.getElementById('sign-up').style.display = 'none';
// document.getElementById('sign-in').style.display = 'block';
// });