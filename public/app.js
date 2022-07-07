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