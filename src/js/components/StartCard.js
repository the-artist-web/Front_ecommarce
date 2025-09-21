'use strict';

const StartCard = ($overlay, $elem) => {
    $overlay.classList.add("active");
    $elem.classList.add("active");
};

const closeStartCode = ($overlay, $elem) => {
    $overlay.classList.remove("active");
    $elem.classList.remove("active");
};

const validationStartCode = ($fields) => {
    
};

const submitStartCode = (e, $fields) => {

};

export {
    StartCard,
    closeStartCode,
    validationStartCode,
    submitStartCode
}