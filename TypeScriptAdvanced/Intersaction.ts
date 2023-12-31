type Book = {
    title: string,
    author: string,
    price:number
}

type Megazine = {
    title: string,
    editor: string,
    date:string
}

type Publication = Book & Megazine;

const publication: Publication = {
    title: "If You Smell What The Rock is Cooking",
    author: "xxxxx",
    price: 50,
    editor: "",
    date: "01-01-2025",
}