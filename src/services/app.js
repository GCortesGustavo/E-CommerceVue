const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR",
});

document.getElementById("checkout-btn").addEventListener("click", async() => {
    try {
    const orderData = {
        title : document.querySelector(".product-title").innerText,
        quanty : 1,
        price: document.querySelector(".product-price").innerText
    };

    const response = await fetch("http://localhost:3000/create_preference", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(orderData)
    });

    const preference = await response.json()

    createCheckoutButton(preference.id);
    } catch (error) {
        console.error(error)
    }
})