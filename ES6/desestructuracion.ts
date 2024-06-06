(()=>{

    
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activos: boolean;
        poder: number;
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Rober Downey',
        vision: 'Paul Betany',
        activos: true,
        poder: 1500
    }



    // const { poder, vision } = avengers

    // console.log( poder, vision.toLocaleUpperCase() );


    const avengersArr: [string, boolean, number] = ['Cap.America', true, 150.65];
    const  [ capitan, isHereo, serialNumero] = avengersArr;
    console.log( { isHereo, capitan});

    // printAvenger( avengers);



    // const avengersArr = ['Cap. America', 'iron man',' Hulk'];

    // const [ , ironman, ] = avengersArr;
    // console.log( { ironman,  });




})();