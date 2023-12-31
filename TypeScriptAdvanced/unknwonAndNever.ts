let exampleUnknwon: unknown = "Hello world";
let exampleString: string =exampleUnknwon as string;

let exampleAny: any = "Hey";
let exampleAnyString = exampleAny;

function throwError(error: string): any {
    throw new Error(error);
}
throwError('Error OCcured');
let helloString = "hello";

function throwErrorNever(error: string): never {
    throw new Error(error);
}
throwErrorNever('Error OCcured');
let heyString = "hello";