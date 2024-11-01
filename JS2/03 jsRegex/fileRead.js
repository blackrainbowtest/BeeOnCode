// const fs = require('fs')
import { readFile } from "fs";

readFile("db.json", "utf8", (err, data) => {
  if (err) {
    console.error("error", err);
    return;
  }

  const regex = /(\+?\d{3})?\s?[\(]?\d{2,3}[\)]?\s?\d{2}(\s|\-)?\d{2}(\s|\-)?\d{2}/gm;

  const users = JSON.parse(data);

  users.forEach((user) => {
    const isValidPhone = regex.test(user.Phone);
    console.log(
      `Login: ${user.Login}, Phone: ${user.Phone}, Valid: ${isValidPhone}`
    );
  });

//   console.log(users);
});