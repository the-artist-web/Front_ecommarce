'use strict';

/**
 * Import modules
 */
import { emailAddress } from "../utils.js";

const body = document.body;

const StartCard = ($overlay, $elem) => {
    $overlay.classList.add("active");
    $elem.classList.add("active");
    body.classList.add("overflow-hidden");
};

const closeStartCode = ($overlay, $elem) => {
    $overlay.classList.remove("active");
    $elem.classList.remove("active");
    body.classList.remove("overflow-hidden");
};

const validationStartCode = ($field) => {
    const $inputEmail = $field.querySelector("[data-field='email']");
    $inputEmail.addEventListener("input", () => emailAddress($inputEmail));
};

export {
    StartCard,
    closeStartCode,
    validationStartCode,
}