'use strict';

/**
 * Import module
 */
import { Tooltip } from "./components/Tooltip.js";
import { DropSelect } from "./components/DropSelect.js";
import { addEventOnElements } from "./utils.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { showItemHover } from "./components/CardMain.js";
import { Empty } from "./components/Empty.js";
import { Copyright } from "./components/Copyright.js";
import { 
    validationStartCode,
    emailInFooter
} from "./user.js";
import { 
    StartCard,
    closeStartCode,
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
if ($startCardForm)
    validationStartCode($startCardForm);

setTimeout(() => StartCard($overlayStartCard, $startCard), 4000);
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

/**
 * Cards main
 */
const $cardMain = document.querySelectorAll("[data-card-main]");
showItemHover($cardMain);

/**
 * Love product
 */
const $loveProducts = document.querySelectorAll("[data-love-products]");
addEventOnElements($loveProducts, "click", function ($elem) {
    const isActive = $elem.classList.toggle("loved");

    if (isActive) {
        $elem.innerHTML = "";
        $elem.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="red"  class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>`;
    } else {
        $elem.innerHTML = "";
        $elem.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
    }
});

/**
 * Run remove row
 */
const $removeRows = document.querySelectorAll("[data-remove-rows]");
addEventOnElements($removeRows, "click", function ($elem) {
    const $row = $elem.closest("[data-rows]");

    $row.remove();

    // Run empty
    Empty();
});

/**
 * Run empty
 */
Empty();

/**
 * Run email in footer
 */
const $emailFooter = document.querySelector("[data-email-footer]");
if ($emailFooter) 
    emailInFooter($emailFooter);

/**
 * Run copyright
 */
const $copyrights = document.querySelectorAll("[data-copyrights]");
Copyright($copyrights);