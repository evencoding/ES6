function saveSettings({ notification, color: { theme } }) {
  console.log(theme);
}

saveSettings({
  notification: {
    follow: true,
    alert: true,
    mkt: true,
  },
  color: {
    theme: "blue",
  },
});
