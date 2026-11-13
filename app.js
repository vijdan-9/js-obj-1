// Q1
// function Student(name, rollNumber, marks) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.marks = marks;
// };

// Student.prototype.showDetails = function() {
//     console.log(`Student name is ${this.name}, 
// Roll Number is ${this.rollNumber}, 
// and Marks are ${this.marks}.`);
// };

// Student.prototype.updateMarks = function(newMarks) {
//     this.marks = newMarks;

//     console.log(`${this.name}'s marks have been updated to ${this.marks}.`);
// };

// let student1 = new Student("Ali", 101, 85);
// let student2 = new Student("Hassan", 102, 90);
// let student3 = new Student("Ahmed", 103, 75);

// student1.showDetails();
// student2.showDetails();
// student3.showDetails();

// student1.updateMarks(95);
// student2.updateMarks(88);
// student1.showDetails();
// student2.showDetails();

// console.log(student1.showDetails === student2.showDetails);
// console.log(student2.showDetails === student3.showDetails);
// console.log(student1.showDetails === student3.showDetails);
// Q2
// function Student(name, rollNumber, marks) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.marks = marks;
// }

// Student.prototype.showDetails = function() {
//     console.log(`Student name is ${this.name}, Roll Number is ${this.rollNumber}, and Marks are ${this.marks}.`);
// };

// let student4 = new Student("Ali", 101, 85);
// let student5 = new Student("Hassan", 102, 90);
// let student6 = new Student("Ahmed", 103, 75);

// student4.showDetails();
// student5.showDetails();
// student6.showDetails();

// console.log("name" in student4);
// console.log("showDetails" in student4);
// console.log(student4.hasOwnProperty("name"));
// console.log(student4.hasOwnProperty("showDetails"));
// console.log(typeof student4.showDetails);
// Q3
// function Student(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
// }

// Student.prototype.showDetails = function () {
//     return `My name is ${this.name}, I am ${this.age} years old, and I am studying ${this.course}.`;
// };

// Student.prototype.institute = "Saylani Mass IT Training";

// let student7 = new Student("Ali", 18, "MERN Stack");
// let student8 = new Student("Hassan", 20, "Web Development");
// let student9 = new Student("Ahmed", 19, "JavaScript");

// console.log(student7.institute);
// console.log(student8.institute);
// console.log(student9.institute);

// console.log(Object.getPrototypeOf(student7));
// console.log(Object.getPrototypeOf(student7).institute);
// console.log(student7.showDetails());
// console.log(student8.showDetails());
// console.log(student9.showDetails());