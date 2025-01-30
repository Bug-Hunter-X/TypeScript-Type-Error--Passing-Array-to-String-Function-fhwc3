function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[] {
  return persons.map(person => greeter(person));
}

let user = ["Alice", "Bob"];
console.log(greeterArray(user)); //This will correctly greet each person in the array