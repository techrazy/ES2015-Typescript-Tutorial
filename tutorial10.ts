var getRegvalue = function(){
    return 10;
}
console.log(getRegvalue());
console.log(typeof getRegvalue);


const getArrowvalue1 = () => {
    return 10;
}
console.log(getArrowvalue1());

const getArrowvalue2 = m => {
    return m;
}
console.log(getArrowvalue2(50));

const getArrowvalue3 = (m,bonus) => 10*m+bonus;

console.log(getArrowvalue3(5,25));

console.log(typeof getArrowvalue3);