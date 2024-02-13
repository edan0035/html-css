const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav')

let headerHeight = header.getBoundingClientRect().height
let navHeight = nav.getBoundingClientRect().height

let mobileMode = window.innerWidth <= 700;
let navOpen = false

createHamburgerButton()
initNavMenu()

window.addEventListener('resize', e => {
  e.stopPropagation()
  handleNavMenu()
})

function initNavMenu() {
  if (mobileMode) {
    initMobileMenu()
  } else {
    initDesktopMenu()
  }
}

function handleNavMenu() {
  const width = window.innerWidth

  if (width <= 700 && !mobileMode) {
    initMobileMenu()
  }

  if (width > 700 && mobileMode) {
    initDesktopMenu()
  }
}

function initMobileMenu() {
  nav.classList.add('nav-mobile')
  body.prepend(nav)

  headerHeight = header.getBoundingClientRect().height
  navHeight = nav.getBoundingClientRect().height

  nav.style.top = `${navHeight*-1 + headerHeight}px`
  mobileMode = true

  hideMobileNav()

  // Prevent and hide animation flash when loading mobile page
  // for nav menu sliding up behind header
  setTimeout(() => {
    nav.classList.add('animated')
  }, 0)
}

function initDesktopMenu() {
  nav.classList.remove('animated')
  mobileMode = false
  nav.classList.remove('nav-mobile')
  nav.style.transform = ''
  header.append(nav)
}

function showMobileNav() {
  if (!mobileMode) return
  nav.style.transform = `translateY(100%)`
  navOpen = true
}

function hideMobileNav() {
  if (!mobileMode) return
  nav.style.transform = `translateY(-100%)`
  navOpen = false
}

function createHamburgerButton() {

  const btn = document.createElement('div')
  btn.className = 'btn-hamburger'

  for (let i = 0; i < 3; i++) {
    btn.append(createBtnStripe())
  }

  btn.addEventListener('click', e => {
    e.stopPropagation()

    if (! mobileMode) return

    if (navOpen) {
      hideMobileNav()
    } else {
      showMobileNav()
    }
  })

  header.append(btn)
}

function createBtnStripe() {
  const stripe = document.createElement('div')
  stripe.className = 'btn-stripe'
  return stripe
}

