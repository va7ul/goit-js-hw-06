const inputEl = document.querySelector("#validation-input");

const inputFormHandler = () => {
    if (inputEl.value.length < inputEl.getAttribute("data-length")) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid")
    } else {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid")
    }
};

inputEl.addEventListener('blur', inputFormHandler);




// ver2
// inputEl.addEventListener('blur', inputFormHandler);

// function inputFormHandler() {
//     if (inputEl.value.length < inputEl.getAttribute("data-length")) {
//         inputEl.classList.add("invalid");
//     } else {
//         inputEl.classList.add("valid");
//     }
// };