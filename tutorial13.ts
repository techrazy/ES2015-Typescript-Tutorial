let message = "List of Colors"

let displayColors1 = function(){

    console.log(message);
    console.log(arguments);
    
    
   for(let i in arguments){
       console.log(arguments[i]);
       
   }
}

displayColors1(message, 'Red');
displayColors1(message, 'Red','Blue');
displayColors1(message, 'Red','Blue','Green');

let displayColors = function(message, ...colors){

     console.log(message);
     console.log(colors);
     
     
    for(let i in colors){
        console.log(colors[i]);
        
    }
}

displayColors(message, 'Red');
displayColors(message, 'Red','Blue');
displayColors(message, 'Red','Blue','Green');