"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no tiene apellido'}`;
    };
    const name = fullName('Stark');
    console.log({ name });
})();
