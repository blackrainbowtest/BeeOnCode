import waitFor from "./sleep.js"

// ↓ Պետք է արտահանենք դուրս ↓
async function waitStep(step, ms) {
    const status = document.getElementById("status");
    status.innerHTML += `${step}<br>`;
	// ↓ Պետք է ստանանք դրսից ↓
    await waitFor(ms);
}

export default waitStep