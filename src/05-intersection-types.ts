type Mentor = {
  fullname: string,
  numberOfStudents: number
};


type Instructor = {
  fullname: string,
  subjects: string[]
};

// Having an intersection type + more properties added
type MentorInstructor = Instructor & Mentor & {
  workHours: number
};

const fullStack: MentorInstructor = {
  subjects: ['JS', 'TS'],
  fullname: 'Akin',
  numberOfStudents: 5,
  workHours: 5
} 


const mentor1: Mentor = {
  fullname: 'Aigerim',
  numberOfStudents: 5
};

const instructor1: Instructor = {
  fullname: 'Akin',
  subjects: ['JS', 'TS']
};