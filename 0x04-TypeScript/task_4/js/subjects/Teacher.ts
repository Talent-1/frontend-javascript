// task_4/js/subjects/Teacher.ts

namespace Subjects {
  /**
   * @interface Teacher
   * Defines the structure for a teacher object.
   */
  export interface Teacher {
    firstName: string;
    lastName: string;
    // The subject-specific optional attributes will be added via declaration merging
  }
}