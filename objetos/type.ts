(()=>{
    
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barri Allen',
        age: 24,
        powers: [1, 2]
    }


    let superman: Hero = {
        name: 'Barri Allen',
        age: 24,
        powers: [3, 4],
        getName() {
            return this.name;
        },
    }





})();