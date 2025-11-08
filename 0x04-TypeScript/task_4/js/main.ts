// task_4/main.ts

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// 1. Create and export constants for Subjects
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// 2. Create and export one Teacher object
// Note: Due to declaration merging, the cTeacher object can now include
// the optional properties from Cpp, Java, and React.
export const cTeacher: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// --- C++ Subject Test ---
console.log('C++');
// Set the teacher using the public method
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher()); // Expected: Available Teacher: Jane (experienceTeachingC is 10)
console.log('---');

// --- Java Subject Test ---
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingJava is undefined)
console.log('---');

// --- React Subject Test ---
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher()); // Expected: No available teacher (experienceTeachingReact is undefined)
console.log('---');