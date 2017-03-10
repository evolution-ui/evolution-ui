(function() {
	'use strict';

  var suAudio = {
    player: '#audioplayer',
    track: 'audio',
    playback: '.su_track',
    playerIcons: {
      play: 'play_arrow',
      pause: 'pause',
      volumeOn: 'volume_up',
      volumeOff: 'volume_off'
    },

    getPlayer: function () {
      return document.querySelector(this.player); 
    },

    getAudioTrack: function () {
      return this.getPlayer().querySelector(this.track);
    },

    changeIcon: function (el, icon) {
      el.textContent = icon;
    },

    play: function () {

      var track = this.getAudioTrack(),
          playButtonIcon = this.getPlayer()
                           .querySelector(this.playback + ' button i');

      if (track.paused) {

        this.changeIcon(playButtonIcon, this.playerIcons.pause);
        track.play();

      } else {

        this.changeIcon(playButtonIcon, this.playerIcons.play);
        track.pause();

      }
    },

    isPlaying: function() {
      var trackProgress = this.getPlayer()
                         .querySelector(this.playback + ' progress'),
          track = this.getAudioTrack();

      trackProgress.max = track.duration;
    },

    updateTrack: function () {
      var player = this.getPlayer(),
          trackProgress = player.querySelector(this.playback + ' progress'),
          track = this.getAudioTrack(),
          trackTime = player.querySelector('.su_track-time'),
          secs = parseInt(track.currentTime % 60),
          mins = parseInt((track.currentTime / 60) % 60);

      trackProgress.value = track.currentTime;
      secs = (secs >= 10) ? secs : '0' + secs;
      mins = (mins >= 10) ? mins : '0' + mins;
      trackTime.textContent = mins + ':' + secs ;
        
    },

    finishPlay: function () {

      var track = this.getAudioTrack(),
          playButtonIcon = this.getPlayer()
                           .querySelector(this.playback + ' button i');

      track.currentTime = 0;
      this.changeIcon(playButtonIcon, suAudio.playerIcons.play);
    
    },

    isMute: function () {
      return this.getAudioTrack().volume === 0;
    },

    mute: function () {

      var muteButtonIcon = this.getPlayer()
                               .querySelector('.su_track-volume button i');

      if (this.isMute()) {

        this.getAudioTrack().volume = 1;
        this.changeIcon(muteButtonIcon, this.playerIcons.volumeOn);
      
      } else {

        this.getAudioTrack().volume = 0;
        this.changeIcon(muteButtonIcon, this.playerIcons.volumeOff);
        
      }

    }

  };

	var audioPlayer = suAudio.getPlayer(),
	    audioTrack = audioPlayer.querySelector(suAudio.track),
	    playButton = audioPlayer.querySelector(suAudio.playback + ' button'),
	    muteButton = audioPlayer.querySelector('.su_track-volume button');

  // Remove any default controls in favor of our own.
	audioTrack.removeAttribute('controls');
	// Add event listeners to make the player work
  playButton.addEventListener('click', suAudio.play.bind(suAudio), false);
	muteButton.addEventListener('click', suAudio.mute.bind(suAudio), false);
	audioTrack.addEventListener('playing', suAudio.isPlaying.bind(suAudio), false);
	audioTrack.addEventListener('timeupdate', suAudio.updateTrack.bind(suAudio), false);
	audioTrack.addEventListener('ended', suAudio.finishPlay.bind(suAudio), false);
	
  var audioPlayer2 = document.getElementById('audioplayer2'),
      audioPlayer3 = document.getElementById('audioplayer3');

  audioPlayer2.querySelector('audio').removeAttribute('controls');
  audioPlayer3.querySelector('audio').removeAttribute('controls');

}());
