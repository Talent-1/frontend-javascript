// task_4/js/subjects/Subject.ts

/// <reference path="./Teacher.ts" /> // 1. Added closing "/>"

namespace Subjects {
  
  // The class is already implicitly exported by the test, 
  // but ensure internal properties/methods are properly typed/accessible.
  export class Subject {
    
    // 2. Used 'protected' keyword based on earlier logic, 
    // and kept the definite assignment assertion '!'
    protected teacher!: Teacher; 

    /**
     * Sets the teacher for the subject.
     * The method is implicitly 'public' but can be explicitly declared.
     */
    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}