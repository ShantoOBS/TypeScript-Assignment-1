
const formatValue = (value: string | number | boolean): string | number | boolean => {

    if (typeof value === 'string') return value.toUpperCase();
    else if (typeof value === 'number') return value * 10;
    else return !value;
}

const getLength = (value: [] | string): number => {
    if (typeof value === 'string') return value.length;
    else return value.length
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const filterByRating = (value: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    return value.filter(x => x.rating >= 4 && x.rating <= 5).sort((a, b) => a.rating - b.rating);
}


type obj = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers=(value:obj[]):obj[]=>{

     return value.filter(x=>x.isActive===true);
}


type bookObj={
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails=(value: bookObj)=>{
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable===true?"Yes":"No"}`);
}

const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {

  const numbers = new Set<number>();

  arr1.forEach(x => numbers.add(x));
  arr2.forEach(x => numbers.add(x));

  return Array.from(numbers);
}


interface Product {
     name: string;
     price: number;
     quantity: number; 
     discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map(product => product.price * product.quantity) 
    .reduce((sum, total) => sum + total, 0);
};



