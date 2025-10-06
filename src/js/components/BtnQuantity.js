'use strict';

export const BtnQuantity = ($elements) => {
    $elements.forEach($elem => {
        const $minuse = $elem.querySelector("[data-minuse]");
        const $plus = $elem.querySelector("[data-plus]");
        const $value = $elem.querySelector("[data-value-quantity]");

        $minuse.addEventListener("click", () => {
            let current = parseInt($value.value) || 0;

            if (current > 1) {
                $value.value = current - 1;
                
                $value.valueQuantity = $value.value;
            }
        });

        $plus.addEventListener("click", () => {
            let current = parseInt($value.value) || 0;

            $value.value = current + 1;

            $value.valueQuantity = $value.value;
        });
    });
};