const products = [
    { id: 1, name: "Նոթբուկ", price: 650000 },
    { id: 2, name: "Ականջակալներ", price: 15000 },
    { id: 3, name: "Ստեղնաշար", price: 4500 },
    { id: 4, name: "Հովացուցիչ", price: 9000 },
    { id: 5, name: "Կենտրոնական պրոցեսոր", price: 75000 },
    { id: 6, name: "Հոսանքի բլոկ", price: 12000 },
];

let cart = [];

const renderProducts = () => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(({ id, name, price }) => {
        const productElement = document.createElement("div");
        productElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        productElement.innerHTML = `
            ${name} - $${price}
            <button class="btn btn-primary btn-sm" onclick="addToCart(${id})">Ավելացնել զամբյուղ</button>
        `;
        productList.appendChild(productElement);
    });
};

const renderCart = () => {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    cartList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(({ id, name, price }) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        cartItem.innerHTML = `
            ${name} - $${price}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${id})">Ջնջել</button>
        `;
        cartList.appendChild(cartItem);
        totalPrice += price;
    });

    totalPriceElement.textContent = totalPrice;
};

const addToCart = (productId) => {
    const productToAdd = products.find(({ id }) => id === productId);
    cart = [...cart, productToAdd];  // Using the spread operator to add a new item
    renderCart();
};

const removeFromCart = (productId) => {
    cart = cart.filter(({ id }) => id !== productId);  // Using the spread operator for filtering
    renderCart();
};

// Initial rendering
renderProducts();

