const getListStudentIds = (students) => (Array.isArray(students)
  ? students.map(({ id }) => id)
  : []);

export default getListStudentIds;
