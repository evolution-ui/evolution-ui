import documentReady from './libs/document-ready';
import audioPlayer from '../../components/standard/audio-player';
import myOtherComponent from '../../components/standard/my-other-component';
import myComponent from '../../components/evolution/my-component';
import curtain from '../../components/evolution/curtain';

documentReady(
  audioPlayer,
  myComponent,
  myOtherComponent,
  curtain
);
