class student {
    constructor(name) {
        this.name = name;
        
        
    }
    printDetails(){

        console.log(`hello ,the student  is ${this.name}`)
    }
}

let stu1 =new  student("Mithun");

stu1.printDetails()
