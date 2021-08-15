// class User {
//   constructor({ username, lastName, email, password }) {
//     this.username = username;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//   }
//   sayHello() {
//     console.log(`Hello, I'm ${this.username}`);
//   }
//   getProfile() {
//     console.log(`${this.username} ${this.email} ${this.password}`);
//   }
//   updatePassword(newPassword, currentPassword) {
//     if (currentPassword === this.password) {
//       this.password = newPassword;
//     } else {
//       console.log("Can't change password.");
//     }
//   }
// }

// const sexyUser = new User({
//   username: "Jungwoo",
//   lastName: "Ryoo",
//   email: "evencoding@gmail.com",
//   password: "0907",
// });

// class Admin extends User {
//   constructor({ username, lastName, email, password, superAdmin, isActive }) {
//     super({ username, lastName, email, password });
//     this.superAdmin = superAdmin;
//     this.isActive = isActive;
//   }
//   deleteWebsite() {
//     console.log("Deleting the whole website...");
//   }
// }

// const admin = new Admin({
//   username: "Jungwoo",
//   lastName: "Ryoo",
//   email: "evencoding@gmail.com",
//   password: "0907",
//   superAdmin: true,
//   isActive: true,
// });
// -------------------------------------------------------------------------------------------------
// class Counter {
//     constructor({ initialNumber = 0, counterId, plusId, minusId }) {
//       this.count = initialNumber;
//       this.counter = document.getElementById(counterId);
//       this.counter.innerText = initialNumber;
//       this.plusBtn = document.getElementById(plusId);
//       this.minusBtn = document.getElementById(minusId);
//       this.addEventListeners();
//     }
//     addEventListeners() {
//       this.plusBtn.addEventListener("click", this.increase);
//       this.minusBtn.addEventListener("click", this.decrease);
//     }
//     increase = () => {
//       this.count = this.count + 1;
//       this.repaintCount();
//     };
//     decrease = () => {
//       this.count = this.count - 1;
//       this.repaintCount();
//     };
//     repaintCount = () => {
//       this.counter.innerText = this.count;
//     };
//   }

//   new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
