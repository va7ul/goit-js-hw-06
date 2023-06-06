const inputFormEl = document.querySelector('.login-form');

const formSubmitHandler = (event) => {
    event.preventDefault();

    const { elements: { email, password }, } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Не всі поля заповнені!");
    } else {

        const formData = {
            email: email.value,
            password: password.value,
        }

        console.log(formData);

        event.currentTarget.reset();
    }
};

inputFormEl.addEventListener('submit', formSubmitHandler);
