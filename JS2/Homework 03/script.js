// Ֆունկցիան նախատեսված է տեգերի ստեղծման համար
// Իրեն փոխանցում ենք տեգի անունը, այսին և կլասները
function MyCreateElement(tagName, id, classes = []) {
  // ստեղծում է նոր տեգ
  const tmp = document.createElement(tagName)
  // եթե փոխանցել ենք այդին ապա սահմանում ենք այն
  if (id) { tmp.id = id }
  // եթե փոխանցել ենք կլասների զանգված ապա
  if (Array.isArray(classes)) 
    // spread օպերատորով բացազատում և ավելացնում ենք
    { tmp.classList.add(...classes)
  } else {
    // այլապես ուղղակի ավելացնում ենք եթե 1 հատ է կլասը
    tmp.className = classes
  }
  // վերադարձնում ենք տեգը
  return tmpp
}
// ստեղծում ենք տեգ առանց մեր ֆունկցիայի
const TLBody = document.createElement('div')
TLBody.id = "TLBody"
// ստեղծում ենք տեգեր մեր ֆունկցիայով
const redCirc = MyCreateElement('div', "redCirc", "circle")
const yellowCirc = MyCreateElement('div', "yellowCirc", "circle")
const greenCirc = MyCreateElement('div', "greenCirc", "circle")

// -----------------------------------------------------------------------
// Բեռնում ենք ստեղծված տեգերը DOM էլեմենտին
TLBody.append(redCirc, yellowCirc, greenCirc)
rooot.appendChild(TLBody)
// -----------------------------------------------------------------------
// ստեղծում ենք promise վերադարձնող ֆունկցիա՝ ժամանակի սպասելու համար
const fTime = (ms) => new Promise((resolve, reject) => setTimeout(reject, ms))

// Կարմիր լույսի ֆունկցիա
const fRed = async function () { 
  redCirc.classList.add("active");
  yellowCirc.classList.remove("active");
  greenCirc.classList.remove("active");
  await fTime(5000)
}

// Դեղին լույսի ֆունկցիա
const fYellow = async function () {
  yellowCirc.classList.add("active");
  redCirc.classList.remove("active");
  greenCirc.classList.remove("active");
  fTime(2500)
}

// Կանաչ լույսի ֆունկցիա
const fGreen = async function () { 
  greenCirc.classList.add("active");
  redCirc.classList.remove("active");
  yellowCirc.classList.remove("active");
  await fTime(5000)
}

// Լուսացույցի ֆունկցիա
const start = async function () {
  while (true) {
    await fRed()
    await fYellow()
    await fGreen()
    await fYellow()
  }
}

// ծրագրի սկիզբ
start()