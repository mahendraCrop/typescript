"use strict";
class Department {
    constructor(parms) {
        this.name = "";
        this.employes = [];
        console.log("this is constructor", parms);
    }
    description() {
        return this.name;
    }
    addEmployes(employ) {
        if (employ != "") {
            this.employes.push(employ);
        }
    }
    employesList() {
        return this.employes;
    }
}
const DeptObj = new Department("software");
console.log("description ", DeptObj.description());
console.log("name ", DeptObj.name);
DeptObj.addEmployes("mahendra nath");
console.log("employes list ", DeptObj.employesList());
