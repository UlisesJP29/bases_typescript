(()=>{


    const fullName = ( firstName: string, lastName?: string ): string =>{

        return `${ firstName } ${ lastName || 'no tiene apellido'}`
    }



    const name = fullName(  'Stark' );

    console.log({ name });


})();