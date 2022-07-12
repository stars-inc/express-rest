document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav')
  M.Sidenav.init(elems)
})

document.querySelectorAll('.price').forEach(el => {
  el.textContent = new Intl.NumberFormat('ru-Ru', {
    currency: 'rub',
    style: 'currency'
  }).format(el.textContent)
})

const card = document.querySelector('#card')

if (card) {
  card.addEventListener('click', event => {
    if (event.target.classList.contains('remove-data')) {
      const id = event.target.dataset.id

      fetch('card/remove' + id, {
        method: 'delete'
      }).then(res => res.json())
        .then(() => location.reload())
    }
  })
}