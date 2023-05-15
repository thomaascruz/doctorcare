window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  navScroll()
  showButton()

sectionPart(home, homemenu)
sectionPart(services, servicesmenu)
sectionPart(about, aboutmenu)
}

function sectionPart(section, botao){
 const targetLine = scrollY + innerHeight / 2
  

 const sectionTop = section.offsetTop
 const sectionHeigh = section.offsetHeight
 const sectionEnd = sectionTop + sectionHeigh

 const sectionTopReachedOrPassedLine = targetLine >= sectionTop
 const sectionEndReachedOrPassedLine = sectionEnd <= targetLine

 const sectionBorder = sectionTopReachedOrPassedLine && !sectionEndReachedOrPassedLine

 if (sectionBorder){
  botao.classList.add('active')
 } else {
  botao.classList.remove('active')
 }
}

function navScroll(){
  if (scrollY >= 100) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
   
  }
}

function showButton(){

  if (scrollY >= 500){
    buttonhome.classList.add("active")
  
  } else {
    buttonhome.classList.remove("active")
    buttonhome.classList.add("turnoff")
  } 
} 

function abrirMenu() {
  body.classList.add("menu-expanded")

}

function fecharMenu() {
  body.classList.remove("menu-expanded");
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,

}).reveal('#home,#home img ,#home p, #home h1, #home stats, #services, #services cards, #services card, #about, #about, #about h4, #about h2, #about p, #about img, #contact h2, #contact p, #contact .button, #contact img')
