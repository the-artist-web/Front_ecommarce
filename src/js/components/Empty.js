'use strict';

const emptyDir = localStorage.getItem("dir") || document.documentElement;
const $emptys = document.querySelectorAll("[data-emptys]");
const $svgInbox = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-inbox"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 13h3l3 3h4l3 -3h3" /></svg>`;

export const Empty = () => {
    const $div = document.createElement("div");
    $div.classList.add("empty");

    $emptys.forEach($elem => {
        if ($elem.innerHTML.trim() === "") {
            $div.innerHTML = emptyDir === "ltr" ?
            `${$svgInbox} ${$elem.dataset.emptys} Empty` : 
            `${$svgInbox} ${$elem.dataset.emptys} فارغ`;

            $elem.appendChild($div);
        };
    });
};