const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginForm = document.getElementById('login-form');

console.log(usernameInput);
console.log(passwordInput);

errorMessage.addEventListener('focusout', (e) => {
    e.preventDefault();
    console.log(e);
    if (usernameInput.value === '') {
        errorMessage.classList.remove('hidden');
    }
    if (passwordInput.value === '') {
        errorMessage.classList.remove('hidden');
    }
    else {
        errorMessage.classList.add('hidden');
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);

    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    console.log(emailValue);
    console.log(passwordValue); 
})
