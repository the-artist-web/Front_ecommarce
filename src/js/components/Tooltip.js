'use strict';

export const Tooltip = ($elems) => {
    $elems.forEach($elem => {
        return new bootstrap.Tooltip($elem);
    });
};