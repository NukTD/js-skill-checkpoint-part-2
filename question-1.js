const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];
const allPeople = [...techupPeople, ...techcoolPeople];

function findLessThan20(workers) {
  return workers.filter((worker) => worker.age < 20);
}
console.log(findLessThan20(allPeople));
