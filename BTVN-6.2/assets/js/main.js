const passwordInput = document.querySelector("#passwordInput");

const touchButton = document.querySelector("#touchBtn");

const handleShowPass = () =>{
    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        touchButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        touchButton.textContent = "Show";
    }
};

touchButton.addEventListener("click", handleShowPass);

