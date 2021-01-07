const navBar = document.querySelector('.navbar')
const navBarTopReset = navBar.offsetTop
const sections = document.querySelectorAll('section')
const navBarLinks = document.querySelectorAll('.navbar-link')

window.addEventListener('scroll', () => {
   window.pageYOffset >= navBarTopReset ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')

   sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 50) {
      navBarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove('change');
      });
      navBarLinks[index].classList.add('change');
    }
  });
})
