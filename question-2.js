const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];
function findStudentsScores(studentScore) {
  return studentScore
    .filter((studentScore) => studentScore.score > 50)
    .map((student) => ({
      ...student,
      score: student.score + (student.score * 10) / 100,
    }))
    .reduce((acc, curr) => acc + curr.score, 0);
}

const totalScore = findStudentsScores(students);
console.log(`Total score is ${totalScore}`);
