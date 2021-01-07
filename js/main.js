const navBar = document.querySelector('.navbar')
const navBarTopReset = navBar.offsetTop
const sections = document.querySelectorAll('section')
const navBarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.skills-bars-wrapper')
const progresBarValues = [85, 65, 70, 50, 70]

window.addEventListener('scroll', () => {
    pageScript()

})
const pageScript = () =>{
    window.pageYOffset >= navBarTopReset ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')

    sections.forEach((section, index) => {
     if (window.pageYOffset >= section.offsetTop - 50) {
       navBarLinks.forEach((navbarLink) => {
         navbarLink.classList.remove('change');
       });
       navBarLinks[index].classList.add('change');
     }
   })
   
   if (window.pageYOffset + window.innerHeight >= progress.offsetTop - 50) {
     document.querySelectorAll('.skill-progres').forEach((elemet, index) => {
         elemet.style.width = `${progresBarValues[index]}%`
         elemet.previousElementSibling.firstElementChild.textContent =
         progresBarValues[index]
         
     })
   }
   else{
     console.log(progress.offsetTop)
    } 
    
}
    pageScript()

window.addEventListener("resize", () => {
    window.location.reload();
});