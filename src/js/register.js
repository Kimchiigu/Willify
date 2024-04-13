window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = document.getElementById("TxtName")
        const email = document.getElementById("TxtEmail")
        const password = document.getElementById("TxtPassword")
        const age = document.getElementById("TxtAge")
        const gender = document.getElementsByName('gender')
        let error = document.getElementById("LblError")
        let isSuccess = true

        let getGenderValue = () => {
            for(let i = 0; i < gender.length; i++){
                if(gender[i].checked){
                    return gender[i].value; 
                }
            }
            return null; 
        }

        const valGender = getGenderValue()

        error.style.color = "#FF0000"
        error.style.display = "flex"

        console.log("Name:", name.value);
        console.log("Email:", email.value);
        console.log("Password:", password.value);
        console.log("Age:", age.value);
        console.log("Gender:", valGender)

        if(name.value === "" || email.value === "" || password.value === "" || age.value === "" || !valGender){
            error.textContent = "All fields must be filled"
            return
        }

        if(name.value.length < 6){
            error.textContent = "Name must be more than 5 characters"
            isSuccess = false
            return
        }

        if(!email.value.endsWith("@gmail.com")){
            error.textContent = "Email must end with '@gmail.com'"
            isSuccess = false
            return
        }

        if(password.value.length < 6){
            error.textContent = "Password must be more than 5 characters"
            isSuccess = false
            return
        }

        if(age.value < 17 || age.value > 100){
            error.textContent = "Age must be between 17-100 years old"
            isSuccess = false
            return
        }

        const section = document.querySelector("section"),
              overlay = document.querySelector(".overlay"),
              showBtn = document.querySelector(".show-modal"),
              closeBtn = document.querySelector(".close-btn");

        if(isSuccess == true){
            // showing popup
            showBtn.addEventListener("click", () => section.classList.add("active"));

            error.style.display = "none"

            overlay.addEventListener("click", () =>
                section.classList.remove("active")
            );
            
            closeBtn.addEventListener("click", () =>
                section.classList.remove("active")
            );
        }        
    })
})


