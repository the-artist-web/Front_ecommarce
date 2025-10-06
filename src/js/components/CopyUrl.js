'use strict';

const dirCopyURL = document.documentElement;

export const CopyURL = ($elements) => {
    $elements.forEach($elem => {
        const $url = $elem.querySelector("[data-url]");
        const $toggler = $elem.querySelector("[data-toggler]");

        $toggler.addEventListener("click", () => {
            $toggler.innerText = "";
            $toggler.innerText = (dirCopyURL.dir === "ltr" ? "Copied!" : "تم النسخ!");

            navigator.clipboard.writeText($url.value.trim().toLowerCase());

            setTimeout(() => $toggler.innerText = (dirCopyURL.dir === "ltr" ? "Copy" : "نسخ"), 1100);
        });
    });
};