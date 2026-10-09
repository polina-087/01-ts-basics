function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);

  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("Anna", 20);
printUserInfo("Max", 25, "max@example.com");
