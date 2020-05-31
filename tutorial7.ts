// var keyword works fine/ as expected.
for(var i=1; i<=5; i++){
    console.log(i);
    }

// before the console prints the value of i. It has been incremented to 6 alreay which is the exit criteria of for loop.
for(var i=1; i<=5; i++){
setTimeout(function(){console.log(i);},1000);
}

// let keyword is not hoisted as the var keyword. Its incremented value for each iteration is printed even afte the timeout function call. 
for(let i=1; i<=5; i++){
setTimeout(function(){console.log(i);},1000);
}