var employee = {
    id: 1,
    greet: function(){
        console.log(this.id);
    }
};
employee.greet();

// inner fuction has its own context so it does not have id variable and throws error undefined.
var employee = {
    id: 2,
    greet: function(){
        setTimeout(function(){console.log(this.id)},1000);
    }
};
employee.greet();

// arrow fuction does not have its own context so it gets the id variable from parent context.
var employee = {
    id: 3,
    greet: function(){
        
       setTimeout(() => {console.log(this.id)}, 1000) ;
    }
};
employee.greet();