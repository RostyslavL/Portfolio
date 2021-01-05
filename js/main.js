const navBar = document.querySelector('.navbar')
const navBarTopReset = navBar.offsetTop
const sectionSelector = document.querySelectorAll('section')
const navBarLinksSelector = document.querySelectorAll('.navbar-link')

window.addEventListener('scroll', () => {
   window.pageYOffset >= navBarTopReset ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')

   sectionSelector.forEach((section, index ) =>{
    navBarLinksSelector.forEach(navBarLinksSelector => navBarLinksSelector.classList.remove('change') )
        window.pageYOffset >= (section.offsetTop - 20) ?  navBarLinksSelector[index].classList.add('change') : null
   })
})