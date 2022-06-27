import 'focus-visible'

const burgerBtn = document.querySelector('.burger')
const headerMenu = document.querySelector('.menu')

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
burgerBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('active')
})

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
})


