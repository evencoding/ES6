const settings = {
  color: {
    theme: "darK",
  },
};

const { notification: { follow = false } = {} } = settings;

console.log(follow);
