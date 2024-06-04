(()=>{
    enum AudioLevel {
        min = 1,
        medium = 40,
        max = 20
    }


    const currentAudio = AudioLevel.max;
    console.log( currentAudio );
    console.log( AudioLevel );

})();