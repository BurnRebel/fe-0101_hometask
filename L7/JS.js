//
// ==> TASK 1
//
const task1 = sum(2)(5);
console.log(task1);

function sum(a) 
{
    return function DoCalc(b)
    {
        return a+b;
    }
}
console.log("======2=====");
//
// ==> TASK 2
//
const counter1 = MakeCounter();
const counter2 = MakeCounter();


counter1();
counter1();
counter2();

function MakeCounter()
{    
    let number=0;
    return function MakeCounter() 
    {console.log(number++);}    
}

//
// ==> TASK 2
//
console.log("======3=====");
let arr = [];
let elem = Enter();
console.log(String(elem));
function Enter()
{
    let num = Number(prompt("enter:"));
    let i  = 0;
    while(num!=null && num!="" && !isNaN(num))
    {
        arr[i] = num;
        num = Number(prompt("enter:"));
        i++;
        //я правда не поняла, как сделать чтоб не останавливалось при =0
        //изза false => 0 я запуталась
    }
    return arr.length;   
}



