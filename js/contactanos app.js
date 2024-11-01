const $ = el => document.querySelector(el)

const form = $('.register-form')

form.addEventListener('submit', e => {
  e.preventDefault()
})
