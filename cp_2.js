function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        console.log(product.name); // Log each product's name
      });
    })
    .catch(error => {
      console.log("Fetch failed:", error); // Log fetch error
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const data = await response.json();
    displayProducts(data); // Pass products to the next function
  } catch (error) {
    handleError(error); // If something goes wrong
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');

  const firstFive = products.slice(0, 5);

  firstFive.forEach(product => {
    const { name, price, image } = product;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(productCard);
  });
}

