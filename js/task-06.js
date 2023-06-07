const inputEl = document.querySelector("#validation-input");

const inputFormHandler = () => {

    if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid")
    }
};

inputEl.addEventListener('blur', inputFormHandler);




// ver2
// inputEl.addEventListener('blur', inputFormHandler);

// function inputFormHandler() {
    // if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
    //         inputEl.classList.add("valid");
    //     } else {
        //     inputEl.classList.add("invalid");
//     }
// };