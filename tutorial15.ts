let firstname = "Chandler";
let lastname = "Bings";

let person = {
    firstname,
    lastname
};

function createPerson(firstname, lastname, age){
    let fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname, 
        fullname,
        isSenior(){
            return age>60;
        },
        isJunior: () => age<18
    }
}

let p = createPerson("Ross","Geller", 34);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
console.log(p.isJunior());



//console.log(person.firstname);
//console.log(person.lastname);
