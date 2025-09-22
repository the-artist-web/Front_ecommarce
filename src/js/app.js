'use strict';

/**
 * Import module
 */
import { Tooltip } from "./components/Tooltip.js";
import { DropSelect } from "./components/DropSelect.js";
import { addEventOnElements } from "./utils.js";
import { FixedScrolling } from "./components/FixedScrolling.js"
import { 
    StartCard,
    closeStartCode,
    validationStartCode,
} from "./components/StartCard.js";

/**
 * Start load
 */
const $startLoad = document.querySelector("[data-start-load]");
window.addEventListener("load", () => setTimeout(() => {
    $startLoad.classList.add("active");
    document.body.classList.add("load");
}, 800));

/**
 * Run Start Card
 */
const $startCard = document.querySelector("[data-start-card]");
const $overlayStartCard = document.querySelector("[data-overlay-start-card]");
const $closeStartCard = document.querySelector("[data-close-start-card]");
const $startCardForm = document.querySelector("[data-start-card-form]");
setTimeout(() => StartCard($overlayStartCard, $startCard), 4000);
validationStartCode($startCardForm);
$closeStartCard.addEventListener("click", () => closeStartCode($overlayStartCard, $startCard));
$overlayStartCard.addEventListener("click", () => closeStartCode($overlayStartCard, $startCard));

/**
 * Run Tooltip
 */
const $tooltipList = Array.from(document.querySelectorAll("[data-bs-toggle='tooltip']"));
Tooltip($tooltipList);

/**
 * Run Drop Select
 */
const $dropSelects = document.querySelectorAll("[data-drop-select]");
$dropSelects.forEach($elem => DropSelect($elem));

/**
 * Run Change dirs
 */
const $changeDirs = document.querySelectorAll("[data-change-dirs]");
addEventOnElements($changeDirs, "click", function ($elem) 
{
    const dir =  $elem.dataset.changeDirs === "en" ? "ltr" : "rtl";
    document.documentElement.dir = dir;
});

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
window.addEventListener("scroll", () => FixedScrolling($fixedScrolling));