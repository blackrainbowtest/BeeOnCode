// function tviStugum(miliseconds) {
// 	return new Promise((resolve, reject) => {
// 		// if (miliseconds > 3000 && miliseconds < 500) {
// 		// 	reject("Միլիվարկյանը 3000-ից մեծ է")
// 		// }
// 		setTimeout(() => {
// 			resolve("Երկու վարկյան հետո աշխատեցի։");
// 		}, miliseconds);
// 	});
// }

// tviStugum(3000)
// 	.then((message) => console.log(message))
// 	.catch((error) => console.error(error));


function step1() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Քայլ 1");
			resolve();
		}, 1000);
	});
}

function step2() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Քայլ 2");
			resolve();
		}, 500);
	});
}

step1().then(step2).then(() => console.log("Ավարտվեց!"));