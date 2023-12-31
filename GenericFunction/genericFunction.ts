function IdentityNumbers<T>(args: Array<T>): Array<T>{
    args = args.reverse();
    return args;
}
let numbers = [1, 2, 3, 4, 5];
console.log(IdentityNumbers<Number>(numbers));
let letters = ['a', 'b','c'];
console.log(IdentityNumbers<string>(letters));
