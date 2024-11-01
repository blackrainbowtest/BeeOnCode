// const fs = require('fs')
import { readFile } from 'fs'

readFile('db.json', 'utf8', (err, data) => {
	if (err) {
		console.error("error", err)
		return
	}

	const users = JSON.parse(data)
	console.log(users)
})