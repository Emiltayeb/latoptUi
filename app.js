const navbar_active = () => {
  const hambuerger = document.querySelector('.hamburger')
  const navbar = document.querySelector('.nav-links')

  const links = document.querySelectorAll('.nav-links li')
  hambuerger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-show')


    links.forEach((link, index) => {
      console.log(link);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fade-in ${(index /7)+2}s ease forwards`
      }

    })
  })
}



navbar_active();