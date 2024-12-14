
// const fs = require('fs')
// import {readFile} from 'fs'

// readFile("db.json", 'utf8', (error, data) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	const regex = /\s/;
// 	const text = "44444"
// 	console.log(regex.test(text))
// })

import { readFile } from "fs";

readFile("db.json", "utf8", (err, data) => {
  if (err) {
    console.error("error", err);
    return;
  }

  const regex = /^(?:\+374|374)?\s?[\(]?\d{2,3}[\)]?\s?\d{2}(?:\s|\-)?\d{2}(?:\s|\-)?\d{2}$/m;

  const users = JSON.parse(data);

  users.forEach((user) => {
    const isValidPhone = regex.test(user.Phone);
    console.log(
      `Phone: ${user.Phone},\t Valid: ${isValidPhone}`
    );
  });

//   console.log(users);
});





