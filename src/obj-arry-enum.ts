// const button = document.querySelector("button")! as HTMLButtonElement;
// const number1 = document.getElementById("numb1")! as HTMLInputElement;
// const number2 = document.getElementById("numb2")! as HTMLInputElement;
// function add (number1:number,number2:number):number {
//      return number1 + number2;
// }
// button.addEventListener("click",function(){
//      console.log(add(+number1.value,+number2.value));
// })


// function add(number1:number,number2:number, showResult:boolean, phrase:string ){
//      console.log(typeof number1)
//      let result:number ;
//      if (typeof number1 !== "number" && typeof number2 !== "number") {
//           throw new Error("Incorrect Input");
//      }
//      if (showResult) {
//           result = number1 + number2;
//           return  phrase + result;     
//      }
// }

// let numb1:number;
// numb1=2;
// const numb2:number = 5.5;
// const PrintResult:boolean = true;
// const ResultString:string = "result is : ";

// const result = add(numb1,numb2, PrintResult, ResultString);

// console.log(result);

// const person:{
//      name:string,
//      age:number,
//      hobbies:string[],
//      role:[number,string]
// } = {
//      name:"mahendra",
//      age:26,
//      hobbies:["fashion","music"],
//      role:[2,"user"] 
// }
enum Role {ADMIN, AUTHOR,USER}
const person = {
     name:"mahendra",
     age:26,
     hobbies:["fashion","music"],
     role:Role.ADMIN 
}

// person.role.push(3);
// person.role[1]=5;
let favorites:string[];
favorites= ["sports","fashion"]

console.log("person name : ", person.name, "favorites ", favorites);
favorites.map((favorite)=>{
     console.log(favorite.toUpperCase())
})

if (person.role == Role.ADMIN) {
     console.log("person role is ", Role.ADMIN)
     
}