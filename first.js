// practice file for js with notes


// setup of js

// download vscode or use code spaces of github for writing code of js 
// download nodejs for setting up environment of js as it is interpreter of js

// Let Const Var variables of js 

// const is used to declare variables which are immutable and cannot be changed and redeclare it is block scope

// let can be changed or assigne new value but it cannot be changed it is block scope

// var can be changed and also redeclare  cannot use var at all because issue in scope it is functional scope

let abcd = "abcd"

let kl = abcd

abcd = 78

// let abcd = "hello"  error as they cannot redeclare again declaring variable

// console.log(kl);

// console.log(abcd);


const love = "love is good"

// const love ='practice more' error as redeclare const

// love = 856 error as assigning or changing const


var p = "hello"

var p = "090"

p = "kill"

// console.log(p);

//  no error as var can be redeclare and reassign or change


// interview question d/f between var let and const 
// ans :- const cannot redeclare and reassign and they are blocked scoped  let cannot redeclare but reassignment can be done and they are blocked scoped var can be redeclare and reassign and they are functional scoped 


// types os data types 

// primitive :- call by value and change in copy
// non-primitive :- call by reference or change in original variable 

// primitive types aRE -: string,number,boolean,symbol,null,undefined,Nan,bigInt

// non-primitive:- array,object,function

// string

let str = "abcd"

// console.log(typeof str);

// number :- 2 to power of 53 

let num = 145236

// console.log(typeof num);


// bigint :- big numbers

let bg = 125469822n

// console.log(typeof bg);

// undefined not defined variable

let love5;

// console.log(love5);

// null it is defined but empty

let yu = null

// console.log(yu);

// Nan as string is converted into number there datatype ios changed but it is declare as be Nan not a number

let l = "5236nh"

let pou = Number(l)

// console.log( typeof pou );
// console.log(pou);


// null is object using typeof interview question what if we check null using typeof what would be its datatype 

// javascript datatype is confused as while converting them there datatype converts but there value cannot be converted 

// operators

// arthmatic operators 

// + :- addition,- :- subtraction,* :- multiplication,% :- reminder, / :- divide,** :- power

// prefix operator before operand ++x ,  and postfix operator after oparand  x++

// comparison operators :- >,<,>=,<=,==,!=

// less than < ,less than equal to <=, greater than > , greater than equal to >= , equality check == , not equal to !=.

// this are used to compare two variables  values 

// strict comparison is done to check value and also there data types for ex-: === :- it is equality check in strict comparison

// avoid comparison of different data types variables \

// js is dynamically typed language means we dont need to declare type of variable like in typescript :string,:number like that as it variables are automatically determined 

//symbol

const id = Symbol('123')

const anotherId= Symbol('123')

// console.log(id === anotherId); 
// false is the answer as there values are same b ut returned uniquely different as symbol different values uniquely


// while checking typeof of non primitive data types it always come object as they are defined as object in js 

let arr = [12334,587,585]

// console.log(typeof arr); answer comes as object 

// memory stack and heap

// staCK

let jks = "hello"
let anotherJKS = jks
anotherJKS="hepppp"

// console.log(jks);
// hello
// console.log(anotherJKS);
// hepppp


// answer is different as they are used as change in copy in primitive data types if we change in there values they change is done in copy above is example of stack as copy is made of original 

// heap

let userone = {
    email:"gagan@gmail.com",
    pass:"nothing"
}

let usertwo = userone

usertwo.email = "rathoregagan726@gmail.com"

// console.log(userone.email);
// console.log(usertwo.email);
// answer in both is same as in heap we doesnot make copy we give reference of original variable to another variable in non primitive data type heap is used 
