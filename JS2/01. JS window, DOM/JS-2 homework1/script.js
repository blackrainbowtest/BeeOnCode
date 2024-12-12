const products = [
    { name: "Սմարթֆոն", category: "էլեկտրոնիկա", price: 20000, status: "առկա է" },
    { name: "Վերնաշապիկ", category: "հագուստ", price: 2000, status: "առկա է" },
    { name: "Հովազաձորի գերիները", category: "գրքեր", price: 1500, status: "վաճառված է" },
    { name: "Նոթբուկ", category: "էլեկտրոնիկա", price: 70000, status: "առկա է" },
    { name: "Տաբատ", category: "հագուստ", price: 6000, status: "առկա է" },
    { name: "Պրոֆեսոր Դուելի գլուխը", category: "գրքեր", price: 2200, status: "առկա է" },
    { name: "Ժուլ Վեռն", category: "գրքեր", price: 25000, status: "առկա է" },
 ];
 
 const renderProducts = (filteredProducts) => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach(({ name, category, price, status }) => {
       productList.innerHTML += `
          <div class="col-md-4 mb-4">
             <div class="card">
                <div class="card-body">
                   <h5 class="card-title">${name}</h5>
                   <p class="card-text">
                      Կատեգորիան: ${category} <br>
                      Գինը: ${price} դրամ <br>
                      Կարգավիճակը: ${status}
                   </p>
                </div>
             </div>
          </div>
       `;
    });
 };
 
 const applyFilters = () => {
    const priceFilter = document.getElementById("price-filter").value;
    const categoryFilter = document.getElementById("category-filter").value;
    const statusFilter = document.getElementById("status-filter").value;
 
    const filteredProducts = products.filter(({ price, category, status }) => {
       return (
          (priceFilter === "" || (priceFilter === "0-10000" && price <= 10000) ||
             (priceFilter === "10000-50000" && price > 10000 && price <= 50000) ||
             (priceFilter === "50000+" && price > 50000)) &&
          (categoryFilter === "" || category === categoryFilter) &&
          (statusFilter === "" || status === statusFilter)
       );
    });
 
    renderProducts(filteredProducts);
 };
 
 document.getElementById("price-filter").addEventListener("change", applyFilters);
 document.getElementById("category-filter").addEventListener("change", applyFilters);
 document.getElementById("status-filter").addEventListener("change", applyFilters);
 
 renderProducts(products);