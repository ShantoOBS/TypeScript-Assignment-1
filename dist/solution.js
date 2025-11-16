"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string')
        return value.toUpperCase();
    else if (typeof value === 'number')
        return value * 10;
    else
        return !value;
};
const getLength = (value) => {
    if (typeof value === 'string')
        return value.length;
    else
        return value.length;
};
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const filterByRating = (value) => {
    return value.filter(x => x.rating >= 4 && x.rating <= 5).sort((a, b) => a.rating - b.rating);
};
const filterActiveUsers = (value) => {
    return value.filter(x => x.isActive === true);
};
const printBookDetails = (value) => {
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable === true ? "Yes" : "No"}`);
};
const getUniqueValues = (arr1, arr2) => {
    const numbers = new Set();
    arr1.forEach(x => numbers.add(x));
    arr2.forEach(x => numbers.add(x));
    return Array.from(numbers);
};
const calculateTotalPrice = (products) => {
    return products
        .map(product => product.price * product.quantity)
        .reduce((sum, total) => sum + total, 0);
};
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
//# sourceMappingURL=solution.js.map