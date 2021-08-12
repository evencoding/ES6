const nico = {
  name: "Nico",
  age: 24,
  addYear: function () {
    this.age++;
  },
};

console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);
