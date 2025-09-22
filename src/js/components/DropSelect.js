'use strict';

/**
 * Import module
 */
import { addEventOnElements } from "../utils.js";

export const DropSelect = ($elem) => {
    const $changeInner = $elem.querySelector("[data-change-inner]");
    const $dropItems = $elem.querySelectorAll("[data-drop-item]");

    addEventOnElements($dropItems, "click", function ($elem) {
        $dropItems.forEach($item => $item.classList.remove("active"));
        
        $elem.classList.add("active");

        $changeInner.innerHTML = "";
        $changeInner.innerHTML = $elem.innerHTML;
    });
};