const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

name.addEventListener('focus',() => {
    name.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',() => {
    name.style.borderColor = "#ccc";
});

email.addEventListener('focus',() => {
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',() => {
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus',() => {
    password.style.borderColor = "#4A5F6A";
});

password.addEventListener('blur',() => {
    password.style.borderColor = "#ccc";
});

document.querySelector("#form-registration").addEventListener("submit", async (e) => {
    e.preventDefault();
    const arrayUser = [];

    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    if(localStorage.getItem("users")){
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        users.forEach((e) => {
            arrayUser.push(e);
        });
        console.log(arrayUser);
    }

    arrayUser.push(user);
    localStorage.setItem("users",JSON.stringify(arrayUser));

});

document.querySelector("#show").addEventListener('click', ()=> {
    let user = localStorage.getItem('users');
    console.log(JSON.parse(user));
});

document.querySelector("#clear").addEventListener('click', ()=> {
    let user = localStorage.clear();
});