const pizza = {
  p1: 1,
  p2: 2,
  p3: 3,
}

let arr = Object.entries(pizza)

// console.log(arr);

arr = arr.map(([key, elm]) => {
  return [key, elm * 2]
})

console.log(Object.fromEntries(arr));
