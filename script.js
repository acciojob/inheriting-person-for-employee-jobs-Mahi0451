function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

Employee.prototype.__proto__ = person.prototype;


Employee.prototype.jobGreet = function(){
	console.log(`Hello, my name is ${this.name}, 
	I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};

const person = new Person('John', 30);
person.greet();

const employee = new Employee('Jane', 40, 'Manager');
employee.greet();
employee.jobGreet();


