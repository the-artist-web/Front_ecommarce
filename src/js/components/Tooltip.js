'use strict';

export const Tooltip = ($elems) => {
    $elems.forEach($elem => {
        const tooltip = bootstrap.Tooltip.getOrCreateInstance($elem);

        $elem.addEventListener("click", () => {
            tooltip.show();
            tooltip.hide();
        });
    });
};