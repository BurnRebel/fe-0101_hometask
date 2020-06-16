//------------Task 1
// A
let admin;
let name;
// B
name = "Джон";
// C
admin = name;
// D
alert(name); //alert(admin);

//------------Task 2
name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//------------Task 3
let num = prompt("Enter your number");
alert(CheckNumber(num));

//------------Task 4
let age = prompt("Enter your age:");
//if age є [14,90] -> true
alert("Age between 14 and 90? " + CheckAge(age) );

//------------Task 5
PrintEvenNum();

//------------Task 6
let a = prompt("Enter a"),
    b = prompt("Enter b");
console.log(min(a,b));

//------------Task 7
let number = prompt("Enter Number ");
let forpow = prompt("A^x, enter x ")
console.log(pow(number, forpow));



// Functions 

function CheckNumber(n) //task 3
{
    if(n>0)
        return 1;
    else if(n<0)
        return -1;
    else
        return 0;
}   

function CheckAge(a) //task 4
{
    if(a>=14 && a<=90)
        return true;
    return false;
}

function PrintEvenNum()//task 5
{ // [2,10] считаю, что включительно
    for(let i = 2; i<11;i++)
    {
        if(i%2===0)
        console.log(i);
    }
}

function min(a,b)
{
    if(a < b)
        return a;
    else if(b<a)
        return b;
    else
        return "a=b";
}

function pow(num, p)
{
    let ans = 1;
    for(let i = 0; i<p; i++)
        ans*=num;
    return ans;
}