// Array.of()
const friends = Array.of("jungwoo", "donggue", "mom", "father");
console.log(friends);

// Array.from()
const buttons = document.getElementsByClassName("btn");

const ar = Array.from(buttons);

ar.forEach((button) => {
  button.addEventListener("click", () => console.log("Hello"));
});

// Array.find()
const target = friends.find((friend) => friend.includes("korea"));

// Array.findIndex()
const friends = [
  "jungwoo@gmail.com",
  "zcow@naver.com",
  "evencoding@gmail.com",
  "whoareyou@gorea.com",
  "justdoit@yahoo.com",
];

const check = () => friends.findIndex((friend) => friend.includes("gorea"));

let target = check();
if (target !== -1) {
  console.log(target);

  const username = friends[target].split("@")[0];

  const email = "korea.com";

  friends[target] = `${username}@${email}`;

  target = check();
}

console.log(target);

// Array.fill()
friends.fill("*".repeat("5"), 1, 4);

console.log(friends);

// Array.includes()
const a = friends.includes("zcow@naver.com");

console.log(a);
