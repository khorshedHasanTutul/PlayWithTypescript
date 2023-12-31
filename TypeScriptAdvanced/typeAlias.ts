type Person = {
    Id: number, 
    Name: string,
    Age: number,
    Profession:string
}

function PrintPerson(person:Person):Person {
    return person;
}

const person1: Person = {
    Id: 1,
    Name: "Khorshed Hasan",
    Age: 27,
    Profession:"Software Engineer"
}

const person2: Person = {
    Id: 2,
    Name: "Mehedi Hassan",
    Age: 23,
    Profession:"Student"
}

console.log(PrintPerson(person1));