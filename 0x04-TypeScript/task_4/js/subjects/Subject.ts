// task_4/js/subjects/Subject.ts

/// <reference path="./Teacher.ts" /> // (Assuming you need this reference)

namespace Subjects {
  /**
   * @class Subject
   * The base class for all subjects, which holds the assigned teacher.
   */
  export class Subject {
    protected teacher!: Teacher;

    /**
     * @method setTeacher
     * Sets the teacher for the subject.
     * @param teacher - The teacher object to assign.
     */
    // CHANGE: Remove 'set' keyword and use standard method syntax
    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}