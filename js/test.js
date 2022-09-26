function A(){
    this.isAdmin = 'noAdmin';
}

function B(){
    this.isAdmin = 'noAdmin';
}

let a = new A;
let b = new B;

console.log(a === b);