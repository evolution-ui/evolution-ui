/************************************************************************
 *
 *                      SITE
 *
 ***********************************************************************/
import documentReady from './site/document-ready'
import scrollManagement from './site/scroll-management'


/************************************************************************
 *
 *                      EVOLUTION COMPONENTS
 *
 ***********************************************************************/


import crumble from './evolution/crumble'
import dotNavigation from './evolution/dot_navigation'
import eyelids from './evolution/eyelids'
import fadeLinesOnScroll from './evolution/fade_lines_on_scroll'
import bookmarklet from './evolution/bookmarklet'
import demoComponent from './evolution/demo-component'
import readabilityPanel from './evolution/readability_improvement_panel'
import herald from './evolution/herald'
import paragraphGallery from './evolution/paragraph-gallery'
import popover from './evolution/pop_over'
import ikonize from './evolution/ikon'


/************************************************************************
 *
 *                      STANDARD COMPONENTS
 *
 ***********************************************************************/


import accordion from './standard/accordion'
import offCanvasNavigation from './standard/off_canvas_navigation'
import cssAnimations from './standard/css_animations'
import codeMarkup from './standard/code_markup'
import stdForms from './standard/forms'
import stdCarousel from './standard/carousel'
import sticky from './standard/sticky'
import modals from './standard/modals'


/************************************************************************
 *
 *                      COMPONENT INITIALIZATION
 *
 ***********************************************************************/



documentReady(
  offCanvasNavigation,
  crumble,
  dotNavigation,
  eyelids,
  fadeLinesOnScroll,
  bookmarklet,
  cssAnimations,
  codeMarkup,
  stdForms,
  accordion,
  demoComponent,
  readabilityPanel,
  stdCarousel,
  sticky,
  herald,
  scrollManagement,
  paragraphGallery,
  popover,
  ikonize,
  modals
)
