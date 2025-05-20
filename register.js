const emailValue = document.getElementById('email');
const firstNameValue = document.getElementById('firstName');
const lastNameValue = document.getElementById('lastName');
const dateOfBirthValue = document.getElementById('dateOfBirth');
const ageValue = document.getElementById('age');
const usernameValue = document.getElementById('username');
const passwordValue = document.getElementById('password');
const confirmPasswordValue = document.getElementById('confirmPassword');
const legalValue = document.getElementById('legal');
const termsValue = document.getElementById('terms');

console.log(`Email: ${emailValue.value}`);
console.log(`Full Name: ${firstNameValue.value} ${lastNameValue.value}`);
console.log(`Date of Birth: ${dateOfBirthValue.value}`);
console.log(`Age: ${ageValue.value}`);
console.log(`Username: ${usernameValue.value}`);
console.log(`Password: ${passwordValue.value}`);


if (legalValue.checked) {
  console.log("The user has checked the legal checkbox");
}
if (termsValue.checked) {
  console.log("The user has checked the terms checkbox");
}
if (!legalValue.checked) {
  console.log("The user has not checked the legal checkbox");
}
if (!termsValue.checked) {
  console.log("The user has not checked the terms checkbox");
}

const today = new Date();
const birthDate = new Date(dateOfBirthValue.value);
const age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}
const isEligible = (passwordValue.value === confirmPasswordValue.value) && (age >= 13) && 
legalValue.checked && termsValue.checked && emailValue.value !== "" && firstNameValue.value !== "" && 
lastNameValue.value !== "" && dateOfBirthValue.value !== "" && usernameValue.value !== "" && passwordValue.value !== "";

if (isEligible) {
  console.log("The user is eligible");
} else {
    console.log("The user is ineligible");
}

if (age !== ageValue.value) {
  console.log("The user is not likely to be good at math");
} else {
    console.log("The user can figure out the user's age");
}