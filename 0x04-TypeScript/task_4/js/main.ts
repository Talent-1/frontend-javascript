// task_4/main.ts

/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

// 1. Create constants for Subjects (Removed 'export' and explicit type)
const cpp = new Subjects.Cpp(); // Matches: "const cpp = new Cpp()"
const java = new Subjects.Java(); // Matches: "const java = new Java()"
const react = new Subjects.React(); // Matches: "const react = new React()"

// 2. Create one Teacher object (Ensure type declaration is exactly as requested, and removed 'export')
const cTeacher: Subjects.Teacher = { // Matches the type check: "cTeacher: Teacher"
  firstName: "Jane",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// --- C++ Subject Test ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher()); 
console.log('---');

// --- Java Subject Test ---
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher()); 
console.log('---');

// --- React Subject Test ---
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher()); 
console.log('---');