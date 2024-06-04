"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en el problema');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = 1223;
    console.log({ avengers });
})();
