'use strict';

const dir = localStorage.getItem("dir") || document.documentElement.dir;

/**
 * Email address
 */
const emailAddress = ($field) => {
    // get validatation
    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");
    // get value
    const value = $field.value.trim().toLowerCase();
    // get regex
    const regex = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    $validation.innerHTML = "";
    $field.classList.remove("error", "warning", "success");
    $validation.classList.remove("show", "error", "warning", "success");

    if (value === "") {
        $validation.innerHTML = dir === "ltr" ? "Email cannot be left blank" : "لا يمكن ترك الايميل فارغ";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
    } else if (value.startsWith("_") || value.startsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The name cannot start with `_` or `-` " : "لا يمكن أن يبدأ الاسم بـ `_` أو `-`";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
    } else if (value.endsWith("_") || value.endsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The name cannot end with `_` or `-` " : "لا يمكن أن ينتهي الاسم بـ `_` أو `-`";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
    } else if (value !== value.split(" ").join("")) {
        $validation.innerHTML = dir === "ltr" ? "Spaces cannot be left in the email." : "لا يمكن ترك مسافات في الايميل";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
    } else if (!regex.test(value)) {
        $validation.innerHTML = dir === "ltr" ? "Please enter a valid email address" : "من فضلك أدخل بريد إلكتروني صالح";
        $field.classList.add("error");
        $validation.classList.add("show", "error");
    } else {
        $validation.innerHTML = dir === "ltr" ? "Email valid" : "الايميل صالح";
        $field.classList.add("success");
        $validation.classList.add("show", "success");
    }
};

export {
    emailAddress
}