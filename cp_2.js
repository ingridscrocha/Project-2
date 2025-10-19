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