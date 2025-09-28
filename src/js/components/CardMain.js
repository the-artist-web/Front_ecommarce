'use strict';

export const showItemHover = ($elements) => {
    $elements.forEach($card => {
        const $button = $card.querySelectorAll(".product-color");
        
        $button.forEach($elemButton => $elemButton.addEventListener('mouseenter', () => $elemButton.click()));
    });
};