let calculator = {
    values: [],
    read() {
        let firstValue = +prompt('first value', '');
        let secondValue = +prompt('second value', '');
        this.values = [firstValue, secondValue];
    },

    sum() {
        return this.values[0] + this.values[1];
    },
    
    mul() {
        return this.values[0] * this.values[1];
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
