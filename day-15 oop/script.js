// 1Q
// class Employee {
//     constructor(id, name, salary, role) 
//     {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//         this.role = role;
//     }
  
//     print()
//     {
//         document.writeln("ID: " , this.id , "<br>");
//         document.writeln("NAME: " , this.name , "<br>");
//         document.writeln("SALARY: " , this.salary , "<br>");
//         document.writeln("ROLE: " , this.role , "<br><br>");
//     }
// }

// const p1 = new Employee(101, "Deep", 50000, "Software Engineer");
// const p2 = new Employee(102, "Kashi", 60000, " Manager");
// const p3 = new Employee(999, "Manish", 250, "sweeper");

// p1.print();
// p2.print();
// p3.print();

// 2Q
// class Animal {
//     #name;
//     #type;
//     #gender;
//     #age;

//     constructor(name, type, gender, age) {

//         this.#name = name;
//         this.#type = type;
//         this.#gender = gender;
//         this.#age = age;
//     }

//     print() 
//     {
//         document.writeln("Name: " , this.#name , "<br>");
//         document.writeln("Type: " , this.#type , "<br>");
//         document.writeln("Gender: " , this.#gender , "<br>");
//         document.writeln("Age: " , this.#age , " years<br><br>");
//     }
// }

// const animal1 = new Animal("chicken", "bird", "feMale", 5);
// const animal2 = new Animal("goat", "Mammal", "Female", 10);
// const animal3 = new Animal("fish", "bird nor mammal", "Male", 3);

// animal1.print();
// animal2.print();
// animal3.print();

// 3Q
// class Student {

//     #roll_no;
//     #name;
//     #age;
//     #std;
//     #percentage;
//     constructor(roll_no, name, age, std, percentage) 
//     {
//         this.#roll_no = roll_no;
//         this.#name = name;
//         this.#age = age;
//         this.#std = std;
//         this.#percentage = percentage;
//     }

//     print() 
//     {
//         document.writeln("Roll No: " , this.#roll_no , "<br>");
//         document.writeln("Name: " , this.#name , "<br>");
//         document.writeln("Age: " , this.#age , " years<br>");
//         document.writeln("Standard: " , this.#std , "<br>");
//         document.writeln("Percentage: " , this.#percentage , "%<br><br>");
//     }
// }

// const student1 = new Student(101, "aman", 16, "10th Grade", 55);
// const student2 = new Student(102, "pusha", 18, "11th Grade", 42);
// const student3 = new Student(103, "kavya", 15, "9th Grade", 92);

// student1.print();
// student2.print();
// student3.print();


// 4Q 
// class indian
// doubtt


// 5Q doubt
// class maths{
//     sum(a,b){
//         document.writeln(a+b);
    
//     }
// }
// const m1 = new maths();
// m1.sum (5,5);
// m1.sum (10,10);
// m1.sum (10,20);
// m1.sum (10,30);


// 6Q 
 class Indian {
       birthPlace;
}

class Person extends Indian {
     name;
     age;
     gender;
}

class Employee extends Person {
     id;
     salary;
     role;
}

class A {
    static {
       e = new Employee();
        e.adharNo = "1234-5678-9012";
        e.birthPlace = "Mumbai";
        e.name = "Rahul Sharma";
        e.age = 30;
        e.gender = "Male";
        e.id = "E12345";
        e.salary = 75000;
        e.role = "Software Engineer";
        
        document.write("Adhar No: " + e.adharNo);
        document.write("Birth Place: " + e.birthPlace);
        document.write("Name: " + e.name);
        document.write("Age: " + e.age);
        document.write("Gender: " + e.gender);
        document.write("Employee ID: " + e.id);
        document.write("Salary: " + e.salary);
        document.write("Role: " + e.role);
    }
}
