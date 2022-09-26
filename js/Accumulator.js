function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let newValue = +prompt('Enter number', '');
        if (newValue) { this.value += newValue }
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);