// teacher interface
interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Creating two teacher objects
const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    age: 30,
    contract: false,
};

const teacher2: Teacher = {
    firstName: "Bob",
     lastName: "Smith",
     fullTimeEmployee: false,
     location: "California",
    age: 40,
 contract: true
};

console.log(teacher1); // Still useful for the browser console

