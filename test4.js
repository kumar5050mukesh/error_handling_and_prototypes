class Employee {
    constructor(name, position , salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        console.log(this.salary)
    }
}

let Employee1 = new Employee("mukesh","ce",80000);
Employee1.getSalary();