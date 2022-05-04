let swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".slider__right",
        prevEl: ".slider__left",
      },
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
      breakpoints: {
          1200: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          100: {
              slidesPerView: 1
          }
      }
})

let burger = document.querySelector(".header__menu_burger")
let burgerMenu = document.querySelector(".header__burger_menu")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__menu_burger_active")
    burgerMenu.classList.toggle("header__burger_menu_active")
})

let categories = document.querySelectorAll(".categories__item_block")

categories.forEach(function(e){
  e.addEventListener("click", function(event){
    categories.forEach(function(e){
      e.classList.remove("categories__item_block_active")
    })
    event.target.classList.add("categories__item_block_active")
  })
})



let sb = document.querySelector(".header__inner_item_list_sb")

sb.addEventListener("click", function(e){
  let link = e.target
  if (link.dataset.id) {
    e.preventDefault()
    let target = document.querySelector(link.hash)
    let pos = target.offsetTop
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
})

let arrow = document.querySelector(".arrow")

window.addEventListener("scroll", function(){
  if (scrollY >= 200) {
    arrow.classList.add("arrow__visible")
  } else {
    arrow.classList.remove("arrow__visible")
  }
})

arrow.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})