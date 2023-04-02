class car {
    constructor(year, company, model) {
        this.year = year;
        this.company = company;
        this.model = model;
    }
    getDescription(){
        console.log(`This is ${this.year} ${this.company} ${this.model}`);
    }
}

let car1 = new car(2022, "Skoda", "Rapid");
car1.getDescription();