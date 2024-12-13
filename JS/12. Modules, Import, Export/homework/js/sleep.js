// ↓ Պետք է արտահանենք դուրս ↓
function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default waitFor