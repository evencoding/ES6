const user = {
  NAME: "jungwoo",
  age: 26,
  password: 12345,
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });

console.log(rename(user));
