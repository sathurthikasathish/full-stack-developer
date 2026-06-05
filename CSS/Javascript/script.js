
// var a=10;//Reinitialize & Redeclare
// let b=20;//Reinitialize
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str = "sathu";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof Null);
// console.log(typeof undefine);
// console.log(typeof bolean);

// var height = 123n;
// var symbol = Symbol('li');

// console.log(typeof BigInt);
// console.log(typeof symbol);

// var arr=[10,20,30,40];
// console.log(typeof arr, arr);
// var obj = {
//     name:"Vikram",
//     dept:["AIDS","CT"]
// }
// console.log(typeof obj,obj);

 
// //Arithmetic operator(+,-,*,%,/)
// var a = 10;
// var b = "hemasoni"

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);

// //logical operator(&&,||,!);
// //                      &&    ||    !
// //true false          true  true  false
// //true false          false  true true
// //false false         false  false
// //false true          false  true


// // var a ="true";
// // var b = "false";
// // console.log(a&&b);
// // console.log(!a);


// //relational operator(<,>,<=,>=,==,!=)


// a=10;
// b=20;
// //  console.log(a>b);
// //  console.log(a<b);
// //  console.log(a<=b);
// //  console.log(a==b);
// //  console.log(a>=b);
// //  console.log(a!=b);
// //  console.log(a===b);
// //  console.log(a!==b);
  

// a=10;
// b=20;
 
// a+=b //a=a+b;

// // console.log(a);
// // a-=b; //a=a-b;
// // console.log(a);
// // a*=b; //a=a*b;
// // console.log(a);

// a%=b; //a=a%b;
// console.log(a);
// a/=b; //a=a/b;
  
// var a= 10;
// console.log(a++);
// console.log(++a);

// var a=20;
// console.log(--a);
// console.log(a--);


// a = 1;
// b = 1;
// c = 0;


// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result)


// //conditional statements
// var a = 10;
// var b = 20;

// //if condition
// if(true){
//     // Template literals
//     console.log('$(a) + $(b) = $(a+b)')
// }

// if(true){
//     a = 10;
//     console.log(a)
// }

//var a; //Hoisting
// console.log(a);
// var a = 10;

// // var a = 10; //global scope
// // let b = 20; //block scope
// var b = 20; //block scope
// if(true){
//     console.log(a);
//     // let b = 30; //block scope
//     const c = 30; //block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

//  var a = 10;
//  if(a%2==0){
//    console.log(`${a} is Even`);
//  }
//  else{
//    console.log(`${a} is Odd`);
//  }

// var mark = 30;

// if(mark >= 90){
//     console.log("0 Grade");
// }
// else if(mark >= 70){
//     console.log("A Grade");
// }
// else if(mark >= 35){
//     console.log("pass")
// }
// else{
//     console.log("Fail")
// }


//var a = 10;
//condition ? true statement false statement
//var result = a%2===0 ? "Even" : "Odd";
//console.log(result)

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Holiday");
//         break;
//     }
//     case 3:{
//         console.log("Monday");
//         break;
//     }
//     case 4:{
//         console.log("Tuesday");
//         break;
//     }
//     case 5:{
//         console.log("Wednesday");
//         break;
//     }
//     case 6:{
//         console.log("Thursday");
//         break;
//     }
//     case 7:{
//         console.log("Friday");
//         break;
//     }
//     case 8:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid Input");
//     }
//     }

//looping statements
//1 time 11times 10times
// for(var i=1; i<=10; i++){
//     console.log(i);
// }


//   var val = 10246;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count,val);
    
  

// for(let i=1;i<=10;i++){
//   if(i%2===0){
//         continue;
//   }
//   console.log(1);
// } 

// function add(a=5, b=6){
//     console.log(a+b);
// }

// add(); //Hoisting
// function add(){
//      console.log(10+20);
// }

// //Arrow Function
// var demo = ()  => {
//   console.log(10+20);
// }
//      demo();


// //Arrow Function
// var demo = (a = 5,b = 6)  => {
//   console.log(a + b);
// }
// demo(10,20); 
// demo();
// demo(10);

// //spread operator(..)
// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2);

//destructing operator

// var [m1,m2,m3,m4,m5] = [90,98,97,100,92];
// console.log(m1,m2,m3,m4,m5);

// var {name,mobile,dept,email,isActive} = {
//     name:"sathu",
//     mobile:6369907899,
//     dept:["IT","AIDS"],
//     email:"sathurthikasathish24@gmail.com",
//     isActive:true
// }

//     console.log(name,mobile,dept,email,isActive)

// var arr = [10,20,30,40];
// //for..in
// for(let index in arr){
//   console.log(index);
// }
// //for..of
// for(let value of arr){
//   console.log(value);
// }

// var obj = {
//   name:"rithika",
//   dept:["CT","AIDS"],
//   mobile:9025870556,
// }
// for(let key in obj){
//   console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val) => (val*2));
// console.log(result)
// console.log(arr)

// var even = arr.filter((val) => val%2===0);
// console.log(even)

// var sum = arr.reduce((add,val) => (add+val),0);
// console.log(sum)

var username = {
    name:"Sathu",
    dept:["IT","AIDS"],
    skills:{
        programming:["Java","c"]
        
    }
}