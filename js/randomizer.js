// Wait for DOM to load fully
document.addEventListener("DOMContentLoaded", e => {
  e.stopPropagation()
  randomProductPromo()
})

function randomProductPromo() {
  // Get all products
  const products = document.querySelectorAll('.hyrslap-card')
  const products_count = products.length

  // Don't process if there are no products found
  if (products_count > 0) {

    // Select a random product to promote
    const randomProductId = Math.floor(Math.random() * products_count)
    const selectedProduct = products[randomProductId]

    // Add style to selected product
    selectedProduct.style.background =
        'linear-gradient(310deg, rgba(14,198,193,1) 0%, rgba(13,96,133,1) 37%, rgba(9,193,200,1) 51%, rgba(0,255,209,1) 100%)'

    // Add elements to selected product
    const promotionText = document.createElement('h3')
    promotionText.textContent = 'DAGENS DEAL'
    promotionText.style.color = '#a611ea'
    promotionText.style.backgroundColor = '#00000030'
    promotionText.style.borderRadius = '10px'
    promotionText.style.textAlign = 'center'

    selectedProduct.prepend(promotionText)
  }
}