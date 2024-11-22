'use strict'

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

class Banner {
   constructor() {
      this.banner = document.querySelector('.banner')

      this.checkBanner()
   }

   checkBanner() {
      if ( localStorage.getItem('banner') ) return
      this.banner.classList.remove('visually-hidden')
      
      this.closeBanner()
   }

   closeBanner() {
      const buttonBanner = document.querySelector('.banner__button-close')

      buttonBanner.addEventListener('click', () => {
         this.banner.classList.add('visually-hidden')
         localStorage.setItem('banner', 'скрыто')
      })
   }
}
new Banner()

class Overlay {
   constructor() {
      this.overlay = document.querySelector('.overlay')
      this.openMenu()
      this.closeMenu()
   }

   openMenu() {
      const buttonOpen = document.querySelector('.header__burger-menu')

      buttonOpen.addEventListener('click', () => {
         this.overlay.showModal()
      })
   }

   closeMenu() {
      const buttonClose = document.querySelector('.overlay__button-close')

      buttonClose.addEventListener('click', () => {
         this.overlay.close()
      })
   }
}
new Overlay()


const swiper = new Swiper('.steps__slider', {
   loop: true,
   touchRatio: 0,

   autoplay: {
      delay: 0,
   },

   speed: 3000,
   slidesPerView: 'auto',
   spaceBetween: 16,
   centeredSlides: true,
});


const cardsBody = document.querySelector('.sellers__cards')

cardsBody.addEventListener('click', (e) => {
   const { target } = e

   if ( !target.closest('.sellers__card-button') ) return

   if ( target.classList.contains('active') ) {
      target.classList.remove('active')
      target.textContent = 'Product details'
   } else {
      target.classList.add('active')
      target.textContent = 'Close details'
   }
})

localStorage.clear()