'use strict';

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

export {
    StartCard,
    closeStartCode
}