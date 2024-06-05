(()=>{

    const addNumber = ( a: number, b: string ) => `${ a }b`;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheTheWorld = () => `El mundo esta salvado`;

    let myFunction: (x:number, y:string)=> string;
    
    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumber;

    console.log( myFunction(1,'2'));

    // myFunction = greet;

    // console.log( myFunction('Juan'));

    // myFunction = saveTheTheWorld;

    // console.log( myFunction()); 


})();