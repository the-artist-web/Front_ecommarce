'use strict';

/**
 * Import modules
 */
import { emailAddress } from "./utils.js";

const validationStartCode = ($field) => {
    const $inputEmail = $field.querySelector("[data-field='email']");
    $inputEmail.addEventListener("input", () => emailAddress($inputEmail));
};

const emailInFooter = ($field) => {
    const $inputEmail = $field.querySelector("[data-field='email']");
    $inputEmail.addEventListener("input", () => emailAddress($inputEmail));
};

export {
    validationStartCode,
    emailInFooter
}