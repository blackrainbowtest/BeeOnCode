export const createTag = (tagName, tagClasses) => {
	const element = document.createElement(tagName)
	// Ստուգում եմ որ դատարկ չլինի ու տողային տիպ լինի
	if ((typeof tagClasses === "string") && tagClasses.trim() !== "") {
		// ջնջում եմ դատարկ կլասսները (եթե ասենք մի քանի պրոբել եմ ուղարկել)
		const classesArray = tagClasses.split(' ').filter(cls => cls)
		element.classList.add(...classesArray)
	}
	// Վերադարձնում եմ տեգը
	return element
}