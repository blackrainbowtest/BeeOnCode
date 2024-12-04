function step1(callback) {
	setTimeout(() => {
	  console.log("Քայլ 1");
	  callback();
	}, 1000);
  }
  
  
  function step2(callback) {
	setTimeout(() => {
	  console.log("Քայլ 2");
	  callback();
	}, 1000);
  }
  
  
  function step3(callback) {
	setTimeout(() => {
	  console.log("Քայլ 3");
	  callback();
	}, 1000);
  }
  
  
//   step1(() => {
// 	step2(() => {
// 	  step3(() => {
// 		console.log("Բոլոր քայլերը ավարտված են։");
// 	  });
// 	});
//   });

  step1(step2(step3()))
  