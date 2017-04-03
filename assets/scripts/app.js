/************************************************************************
 *
 *                      EVOLUTION COMPONENTS
 *
 ***********************************************************************/


import crumble from './evolution/crumble'
import dotNavigation from './evolution/dot_navigation'
import eyelids from './evolution/eyelids'
import fadeLinesOnScroll from './evolution/fade_lines_on_scroll'
import demoComponent from './evolution/demo-component'
import readabilityPanel from './evolution/readability_improvement_panel';


/************************************************************************
 *
 *                      STANDARD COMPONENTS
 *
 ***********************************************************************/

import offCanvasNavigation from './standard/off_canvas_navigation'
import cssAnimations from './standard/css_animations'
import codeMarkup from './standard/code_markup'
import stdForms from './standard/forms'


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
cssAnimations();
codeMarkup();
stdForms();
demoComponent();
readabilityPanel();
