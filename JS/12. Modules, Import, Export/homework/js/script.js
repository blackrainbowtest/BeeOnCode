import validCoffees from "./coffeeData.js"
import waitStep from "./wait.js"

async function makeCoffee(coffeeType) {
    const status = document.getElementById("status");
    status.innerHTML = `Making a ${coffeeType}...<br>`;
    // ↓ Պետք է ստանանք դրսից ↓
    if (!validCoffees.includes(coffeeType)) {
        status.innerHTML += "Error: Invalid coffee type!";
        return;
    }
    // ↓ Պետք է ստանանք դրսից ↓
    await waitStep("Step 1: Placing the cup...", 3000);
    // ↓ Պետք է ստանանք դրսից ↓
    await waitStep("Step 2: Pouring the water...", 3000);
    // ↓ Պետք է ստանանք դրսից ↓
    await waitStep("Step 3: Adding coffee...", 3000);

    if (coffeeType !== 'espresso') {
        // ↓ Պետք է ստանանք դրսից ↓
        await waitStep("Step 4: Adding sugar...", 3);
    }
    // ↓ Պետք է ստանանք դրսից ↓
    await waitStep("Step 5: Stirring the coffee...", 3);

    status.innerHTML += `${coffeeType} is ready! Enjoy your coffee!`;
}



window.makeCoffee = makeCoffee;