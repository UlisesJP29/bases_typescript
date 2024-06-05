(()=>{

    type Avenger = {
        name: string;
        weapon: string;
    }


    const ironman: Avenger = {
        name:'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: ' escudo '
    }
    
    const thor: Avenger = {
        name: 'thor',
        weapon: ' martillo '
    }

    const avengers: Avenger[] = [ ironman, thor, captainAmerica]


    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }


})();