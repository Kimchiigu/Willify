window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = document.getElementById("TxtName")
        const email = document.getElementById("TxtEmail")
        const password = document.getElementById("TxtPassword")
        const age = document.getElementById("TxtAge")
        const gender = document.querySelector('input[name="gender"]:checked')

        let error = document.getElementById("LblError")

        error.style.color = "#FF0000"
        error.style.display = "flex"

        if(name == null){
            error.textContent = "Missing name"
        }

        // if(name == null || email == null || password == null || age == null || gender == null){
        //     error.textContent = "All fields must be filled"
        //     return
        // }

        // if(name < 3){
        //     error.textContent = "Name must be more than 3 characters long"
        //     return
        // }

        // if(!email.endsWith("@gmail.com")){
        //     error.textContent = "Email must end with '@gmail.com'"
        //     return
        // }

        // if(password.textContent.trim().length < 8){
        //     error.textContent = "Password must be more than 8 characters"
        //     return
        // }

        // if(parseInt(age.textContent.trim()) <= 17){
        //     error.textContent = "Age must be more than 17 years old"
        //     return
        // }

        error.style.color = "#008000"
        error.textContent = "Registration Success"
    })
})

const section = document.querySelector("section"),
            overlay = document.querySelector(".overlay"),
            showBtn = document.querySelector(".show-modal"),
            closeBtn = document.querySelector(".close-btn");
        showBtn.addEventListener("click", () => section.classList.add("active"));
        overlay.addEventListener("click", () =>
            section.classList.remove("active")
        );
        closeBtn.addEventListener("click", () =>
            section.classList.remove("active")
        );
