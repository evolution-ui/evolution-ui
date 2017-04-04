/************************************************************************
 *
 *                      EVOLUTION COMPONENTS
 *
 ***********************************************************************/


import crumble from './evolution/crumble';
import dotNavigation from './evolution/dot_navigation';
import eyelids from './evolution/eyelids';
import fadeLinesOnScroll from './evolution/fade_lines_on_scroll';
// import bookmarklet from './evolution/bookmarklet';
import demoComponent from './evolution/demo-component';
import readabilityPanel from './evolution/readability_improvement_panel';
import text2speech from './evolution/text2speech'
import herald from './evolution/herald';

/************************************************************************
 *
 *                      STANDARD COMPONENTS
 *
 ***********************************************************************/


import accordion from './standard/accordion';
import offCanvasNavigation from './standard/off_canvas_navigation';
import cssAnimations from './standard/css_animations';
import codeMarkup from './standard/code_markup';
import stdForms from './standard/forms';
import stdCarousel from './standard/carousel';


/************************************************************************
 *
 *                      COMPONENT INITIALIZATION
 *
 ***********************************************************************/


offCanvasNavigation();
crumble();
dotNavigation();
eyelids();
fadeLinesOnScroll();
// bookmarklet();
cssAnimations();
codeMarkup();
stdForms();
accordion();
demoComponent();
readabilityPanel();
text2speech();
stdCarousel();
herald();
