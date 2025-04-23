//nested setTimeout or unnecessary indentation
//Below code does not look nice
setTimeout(function(){
    console.log("Run after 1 second !!! ");

    setTimeout(function(){
        console.log("Run after 2 seconds !!! ");

        setTimeout(function(){
            console.log("Run After 3 seconds !!! ");
        }, 3000)

    },2000);

}, 1000)