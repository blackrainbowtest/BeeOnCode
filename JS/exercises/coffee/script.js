function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeCoffee(coffeeType) {
    const status = document.getElementById("status");
    status.innerHTML = `Making a ${coffeeType}...<br>`;

    const validCoffees = ['espresso', 'latte', 'cappuccino'];
    if (!validCoffees.includes(coffeeType)) {
        status.innerHTML += "Error: Invalid coffee type!";
        return;
    }


    await waitStep("Step 1: Placing the cup...", 3000);
    await waitStep("Step 2: Pouring the water...", 3000);
    await waitStep("Step 3: Adding coffee...", 3000);

    if (coffeeType !== 'espresso') {
        await waitStep("Step 4: Adding sugar...", 3);
    }

    await waitStep("Step 5: Stirring the coffee...", 3);

    status.innerHTML += `${coffeeType} is ready! Enjoy your coffee!`;
}

async function waitStep(step, ms) {
    const status = document.getElementById("status");
    status.innerHTML += `${step}<br>`;
    await waitFor(ms);
}
