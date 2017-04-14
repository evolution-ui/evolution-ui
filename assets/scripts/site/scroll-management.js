import smoothScroll from './smooth-scroll'
import throttle from 'lodash.throttle'
import menuHighlight from './menu-highlight'
import scrollSpy from './scrollspy'

export default () => {
  const siteMain = document.querySelector('.site-main')
  const sideMenu = document.querySelector('.js-offcanvas-target')
  let sideMenuWidth = sideMenu ? sideMenu.offsetWidth : 0
  const sectionLinks = document.querySelectorAll('.site-sidebar-link')
  const sections = document.querySelectorAll('.site-section')
  const fixedHeader = document.querySelector('.evo_c-scrollspy')
  const spy = document.getElementById('evo_c-scrollspy-indicator')

  const highlightArticle = throttle(() => {
    const sectionId = menuHighlight(sections)
    sectionLinks.forEach((link) => {
      link.getAttribute('href').slice(1) === sectionId
        ? link.classList.add('is-current')
        : link.classList.remove('is-current')
    })
  }, 100)

  const sideMenuStickyHandler = throttle(() => {
    if (sideMenu) {
      const topOffset = siteMain ? siteMain.offsetTop : 0

      if (window.pageYOffset > topOffset) {
        // sideMenu.style.width = sideMenuWidth + 'px';
        sideMenu.style.width = "22.7%";
        sideMenu.classList.add('is-sticky')
      } else {
        sideMenu.removeAttribute('style')
        sideMenu.classList.remove('is-sticky')
        sideMenuWidth = sideMenu.offsetWidth
      }
    }
  }, 100)

  window.addEventListener('scroll', sideMenuStickyHandler)
  window.addEventListener('scroll', highlightArticle)
  window.addEventListener('scroll', scrollSpy.bind(null, spy))

  Array.from(sectionLinks).forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation()
      event.preventDefault()
      const targetId = event.currentTarget.getAttribute('href').slice(1)
      const targetPosition = document.getElementById(targetId).getBoundingClientRect().top + window.pageYOffset
      smoothScroll(500, targetPosition, fixedHeader.offsetHeight)
    })
  })

  scrollSpy(spy)
  highlightArticle()

}
