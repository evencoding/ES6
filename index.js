class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
}

const sexyUser = new User("Jungwoo");

sexyUser.sayHello();
