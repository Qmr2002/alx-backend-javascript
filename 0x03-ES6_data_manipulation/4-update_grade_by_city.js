function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
