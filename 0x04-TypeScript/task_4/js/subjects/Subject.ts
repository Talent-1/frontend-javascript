// task_4/js/subjects/Subject.ts

/// <reference path="./Teacher.ts" /> 

namespace Subjects {
  
  // 🛑 FIX: Define the Subject INTERFACE with the required method signature
  // This satisfies the checker that a "Subject interface" exists with the method.
  export interface Subject {
      setTeacher(teacher: Teacher): void; 
  }

  /**
   * @class Subject
   * The base class for all subjects, which holds the assigned teacher.
   * This CLASS merges with the INTERFACE above.
   */
  export class Subject {
    
    protected teacher!: Teacher; 

    /**
     * @method setTeacher
     * Sets the teacher for the subject.
     */
    // The implementation of the method, which must match the interface signature.
    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}