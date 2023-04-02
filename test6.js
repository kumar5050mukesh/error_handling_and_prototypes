class calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        
    }
    getSum(){

        let sum=this.num1+this.num2
        console.log(` ${sum}`);
    }
}

let cal1 =new  calculator(10, 20);

cal1.getSum();
