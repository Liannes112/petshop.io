const search = document.getElementById('search')
const shops = document.getElementsByClassName('shop')

search.addEventListener('input', (e) => filter(e.target.value))

function filter (searchQuery) {
  Array.from(shops).forEach((shop) => {
    const title = shop.querySelector('.shop-tittle a')
    if (title) {
      const shopTitle = title.innerText.toLocaleLowerCase()
      const match = shopTitle.includes(searchQuery.toLocaleLowerCase())
      if (match) {
        shop.style.display = 'flex'
      } else {
        shop.style.display = 'none'
      }
    }
  })
}