(()=>{


    const fullName = ( firstName: string, lastName?: string ): string =>{

        if ( !firstName ) {
            throw new Error('problemas');
        }
        return `${ firstName } ${ lastName}`
    }



    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });


})();