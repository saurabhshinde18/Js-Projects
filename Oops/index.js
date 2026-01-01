class library{
   constructor(){
    this.books = [];
   }
    
   addbook(name){
    this.books.push(name);
   }
   showbooks(){
    this.books.forEach(val=>{
       console.log(val);
    });
   }
}

 let p1 = new library();
 class books{
    constructor(name,price,isbn,author,isreaded){
        this.name = name;
        this.price = price;
        this.isbn = isbn;
        this.author = author;
        this.isreaded = isreaded;
    }

    showbooks(){
        console.log(`book name is ${this.name} and book author name is ${this.author}`);
    }
 }
 let b1 = new books("abc",1200,'sks',true);
 p1.addbook(b1);
 p1.showbooks();