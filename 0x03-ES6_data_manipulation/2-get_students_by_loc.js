const getStudentsByLocation = (students, city) => (Array.isArray(students)
  ? students.filter(({ location }) => location === city)
  : []);

export default getStudentsByLocation;
