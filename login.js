let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let container = document.querySelector(".container");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    container.classList.add("container-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    container.classList.remove("container-move");
});