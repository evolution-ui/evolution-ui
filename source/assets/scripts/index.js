import documentReady from './libs/document-ready';
import preventDefault from './libs/prevent-default';

/* Standard Components */
import audioPlayer from '../../components/standard/audio-player';
import accordion from '../../components/standard/accordion';
import carousel from '../../components/standard/carousel';
import codeMarkup from '../../components/standard/code-markup';
import cssAnimations from '../../components/standard/css-animations';
import modals from '../../components/standard/modals';
import standardForms from '../../components/standard/standard-forms';
import sticky from '../../components/standard/sticky';
import tabs from '../../components/standard/tabs';

/* Evolution Components */
import twoDLayers from '../../components/evolution/2d-layers';
import {layerAnimations, layerDragAndDrop} from '../../components/evolution/3d-layers';
import bookmarklet from '../../components/evolution/bookmarklet';
import crumble from '../../components/evolution/crumble';
import demoComponent from '../../components/evolution/demo-component';
import dotValidator from '../../components/evolution/dot-validator';
import dropNavigationCarousel from '../../components/evolution/drop-navigation-carousel';
import fadeLinesOnScroll from '../../components/evolution/fade-lines-on-scroll';
import foldoutPopup from '../../components/evolution/foldout-popup';
import fullscreenGallery from '../../components/evolution/fullscreen-gallery';
import herald from '../../components/evolution/herald';
import ikonize from '../../components/evolution/ikon';
import inputScanner from '../../components/evolution/input-scanner';
import minimalistCarouselTwo from '../../components/evolution/minimalist-carousel-two';
import popOver from '../../components/evolution/pop-over';
import psychotropicCurtain from '../../components/evolution/psychotropic-curtain';
import readabilityImprovementPanel from '../../components/evolution/readability-improvement-panel';
import safety from '../../components/evolution/safety';
import searchWithLongEdit from '../../components/evolution/search-with-long-edit';
import sift from '../../components/evolution/sift';
import {singleInputForm, minimalistForm} from '../../components/evolution/single-input-forms';
import svgPagination from '../../components/evolution/svg-pagination';
// import text2Speech from '../../components/evolution/text-2-speech';
import versatileTable from '../../components/evolution/versatile-table';


documentReady(
  /* Standard Components */
  audioPlayer,
  accordion,
  carousel,
  codeMarkup,
  cssAnimations,
  modals,
  standardForms,
  sticky,
  tabs,
  /* Evolution Components */
  twoDLayers,
  bookmarklet,
  crumble,
  demoComponent,
  dotValidator,
  dropNavigationCarousel,
  fadeLinesOnScroll,
  foldoutPopup,
  fullscreenGallery,
  herald,
  ikonize,
  inputScanner,
  layerAnimations,
  layerDragAndDrop,
  minimalistCarouselTwo,
  popOver,
  psychotropicCurtain,
  readabilityImprovementPanel,
  safety,
  searchWithLongEdit,
  sift,
  singleInputForm,
  minimalistForm,
  svgPagination,
  // text2Speech,
  versatileTable,


  // always keep as last call
  preventDefault
);
