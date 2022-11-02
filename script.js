const container = document.querySelector(".container"),
      signup = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

//js code to appear signup and login
signup.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});