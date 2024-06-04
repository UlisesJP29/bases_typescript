"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["flash"] = 5] = "flash";
        fuerzaHeroes[fuerzaHeroes["superman"] = 100] = "superman";
        fuerzaHeroes[fuerzaHeroes["batman"] = 1] = "batman";
        fuerzaHeroes[fuerzaHeroes["acuaman"] = 0] = "acuaman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    const fuerzaFlash = fuerzaHeroes.flash;
    const fuerzaSuperman = fuerzaHeroes.superman;
    const fuerzaBatman = fuerzaHeroes.batman;
    const fuerzaAcuaman = fuerzaHeroes.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
