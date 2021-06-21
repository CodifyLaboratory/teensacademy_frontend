let burger = document.querySelector('.burger')
let burgerContent = document.querySelector('.burger__content')
let newsFilter = document.querySelector('.news__filter')
let filterContent = document.querySelector('.filterContent')


burger.addEventListener('click', function () {
    console.log(burger);
    burger.classList.toggle('burger_active')
    burgerContent.classList.toggle('burger__content_active')

    console.log(burger);
    
})