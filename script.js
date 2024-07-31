1// adding two number
// let a = prompt("Please enter a number","");
// let b = prompt("Enter a second number");
// let c =  parseInt(a) + parseInt(b); // parseint is use to convert value to intergers.
// console.log(c);
2//calculate area of triangle
// let base = prompt('Enter the base value');
// let height = prompt('Enter the height value');
// let area = (base*height)/2;
// console.log(area);
3// calculate area of triangle using herons formula

// let a = 10
// let b = 12
// let c = 8
// let s = (a+b+c)/2;
// console.log(`Value of s is: ${s}`);
// let temp = s*(s-a)*(s-b)*(s-c)
// console.log(temp);
// let area = Math.sqrt(temp);
// console.log(area);

4// SWAPING of two number
// let a = prompt('Enter a value of A');
// let b = prompt('Enter a value of B');
// console.log(`value of A is: ${a} , value of B is:${b}`);

// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log('After Swaping')
// console.log(`value of A is: ${a} , value of B is:${b}`);
5// Convert kilometers into miles
 
 let  = document.getElementById('convert');
 
 function convert(){
    let data = document.getElementById('data').value;
    const factor = 0.61371;
    let miles = data * factor;
    // alert(`${miles}`);
    let result = document.getElementById('result').innerHTML = miles + "Miles";
 }

 6// Celcius to Fahrenhite
 function change(){
    let Celcius = document.getElementById('celcius').value;
    let fahrenhite = (Celcius * 1.8) + 32;
    let res = document.getElementById('res').innerHTML = `${fahrenhite}   Fahrenhite`;
 }
 7// check number is positive or negative

 function check(){
   let data = document.getElementById('number').value;
   // let result = Math.sign(data);
   if(data > 0){
      result = 'Positive Number';
   }else if(data < 0){
      result = 'Negative Number';
   }else if(data == 0 ){
      result = 'Zero';
   }else{
      result = `${data} is not a number`;
   }
   
   document.getElementById('output').innerHTML = result;

 }
8// check number even or odd
function chk(){
   let data = document.getElementById('num').value;
   if(data%2 == 0){
      out = 'Even Number';
     
   }else if(data%2 != 0 ){
      out = 'odd Number'
   }
   document.getElementById('op').innerHTML = out;
}
 
9// check if number is Prime or not
function process(){
   let data = document.getElementById('prime').value;
   if(data == 1){
      rs = 'neither prime nor composite';
   }else if(data < 1){
      rs = 'not a Prime Number';
   }else{
      for(i = 2; i < data; i++){
         if(data%i == 0){
            rs = 'not a prime Number';
            break
         }else{
            rs = 'Prime Number';
         }
      }
   }
   document.getElementById('rs').innerHTML = rs;
}
10//check factorial of number
function fac(){
   let fac = document.getElementById('fac').value;
   let res = document.getElementById('return');
   let fact = 1;
   if(fac == 0){
    res.innerHTML = 'Factorial is 1';
   }else if(fac < 0){
      res.innerHTML = 'Not possible for negative number';
   }else{
      for(i = 1; i <= fac; i++){
         fact = fact * i;
      
      }
      let res = document.getElementById('return').innerHTML = fact;
      
   }
   
}

11//Table of a number
function table(num){
   for(i = 1; i <=10; i++){
      let res = i * num;
      console.log(`${num} * ${i} = ${res} `);
      
   }
}
table(5);

//