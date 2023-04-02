

class person {
    constructor(name="unknown", age=0) {
        this.name = name;
        this.age = age;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person1 = new person("Minthun", 20);
let person2 = new person( );
person1.getDetails();
person2.getDetails();