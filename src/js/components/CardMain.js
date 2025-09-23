'use strict';

const showItemHover = ($elements) => {
    $elements.forEach($card => {
        const $button = $card.querySelectorAll(".product-color");
        
        $button.forEach($elemButton => {
            $elemButton.addEventListener('mouseenter', () => {
                console.log($elemButton)
                $elemButton.click();
            });
        });
    });
};

const showLastItemsHover = ($elements) => {
    $elements.forEach(carousel => {
        const $items = carousel.querySelectorAll('.carousel-item');
        
        let original = carousel.querySelector('.carousel-item.active');
        
        carousel.addEventListener('mouseenter', () => {
            $items.forEach(i => i.classList.remove('active'));
            $items[$items.length - 1].classList.add('active');
        });
        
        carousel.addEventListener('mouseleave', () => {
            $items.forEach(i => i.classList.remove('active'));
            if (original) original.classList.add('active');
        });
    });
};

export {
    showItemHover,
    showLastItemsHover
}