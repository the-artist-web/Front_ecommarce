'use strict';

/**
 * Import module
 */
import { Tooltip } from "./components/Tooltip.js";
import { 
    StartCard,
    closeStartCode,
    validationStartCode,
} from "./components/StartCard.js";

/**
 * Run Start Card
 */
const $startCard = document.querySelector("[data-start-card]");
const $overlayStartCard = document.querySelector("[data-overlay-start-card]");
const $closeStartCard = document.querySelector("[data-close-start-card]");
const $startCardForm = document.querySelector("[data-start-card-form]");

setTimeout(() => StartCard($overlayStartCard, $startCard), 3000);

validationStartCode($startCardForm);

$closeStartCard.addEventListener("click", () => closeStartCode($overlayStartCard, $startCard));
$overlayStartCard.addEventListener("click", () => closeStartCode($overlayStartCard, $startCard));

/**
 * Run Tooltip
 */
const $tooltipList = Array.from(document.querySelectorAll("[data-bs-toggle='tooltip']"));
Tooltip($tooltipList);