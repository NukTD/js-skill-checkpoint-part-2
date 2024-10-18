async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const filteredUsers = users
      .map((user) => user.name)
      .filter((name) => name.length > 17);

    console.log(filteredUsers);
  } catch (error) {
    console.error(error);
  }
}
getUsers();
