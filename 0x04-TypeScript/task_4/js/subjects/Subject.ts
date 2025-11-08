// task_4/js/subjects/Subject.ts

namespace Subjects {
  /**
   * @class Subject
   * The base class for all subjects, which holds the assigned teacher.
   */
  export class Subject {
    protected teacher!: Teacher;

    /**
     * @setter setTeacher
     * Sets the teacher for the subject.
     * @param teacher - The teacher object to assign.
     */
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}