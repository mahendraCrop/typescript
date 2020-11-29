class Department{
     name:string="";
     private employes:string[] = [] 
     constructor(parms:string){
          console.log("this is constructor",parms)
     }
     description(){
          return this.name
     }
     addEmployes(employ:string){
          if (employ!="") {
               this.employes.push(employ)
          }
     }
     employesList(){
          return this.employes;
     }
}

const DeptObj = new Department("software");

console.log("description ",DeptObj.description());

console.log("name ",DeptObj.name);
DeptObj.addEmployes("mahendra nath");

console.log("employes list ", DeptObj.employesList())

// const departmentCopy = { name:"mahe", dept:DeptObj.name };
// console.log("dept ", departmentCopy);
