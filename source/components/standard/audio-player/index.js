export default function () {
  'use strict';

  var audioPlayer = {
    player: '#audioplayer',
    track: 'audio',
    playback: '.evo_c-audio-player__track',
    playerIcons: {
      play: 'play_arrow',
      pause: 'pause',
      volumeOn: 'volume_up',
      volumeOff: 'volume_off'
    },

    getPlayer: function (playerElement) {
      var player = playerElement || this.player;
      return document.querySelector(player);
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

      if (track && playButtonIcon) {

        if (track.paused) {

          this.changeIcon(playButtonIcon, this.playerIcons.pause);
          track.play();

        } else {

          this.changeIcon(playButtonIcon, this.playerIcons.play);
          track.pause();

        }

      }

    },

    isPlaying: function() {
      var trackProgress = this.getPlayer()
                              .querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack();

      if (track && trackProgress) {
        trackProgress.max = track.duration;
      }

    },

    updateTrack: function () {

      var player = this.getPlayer(),
          trackProgress = player.querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack(),
          trackTime = player.querySelector('.evo_c-audio-player__track-time'),
          secs = parseInt(track.currentTime % 60),
          mins = parseInt((track.currentTime / 60) % 60);

      if (player && trackProgress && track && trackTime) {

        trackProgress.value = track.currentTime;
        secs = (secs >= 10) ? secs : '0' + secs;
        mins = (mins >= 10) ? mins : '0' + mins;
        trackTime.textContent = mins + ':' + secs;

      }

    },

    seekTrack: function() {
      var trackProgress = this.getPlayer().querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack();

      if (track && trackProgress) {
        track.currentTime = trackProgress.value;
      }
    },

    finishPlay: function () {

      var track = this.getAudioTrack(),
          playButtonIcon = this.getPlayer()
                               .querySelector(this.playback + ' button i');

      if (track && playButtonIcon) {
        track.currentTime = 0;
        this.changeIcon(playButtonIcon, audioPlayer.playerIcons.play);
      }

    },

    isMute: function () {
      return this.getAudioTrack() && this.getAudioTrack().volume === 0;
    },

    mute: function () {

      var muteButtonIcon = this.getPlayer()
                               .querySelector('.evo_c-audio-player__track-volume button i');
      if (muteButtonIcon) {
        if (this.isMute()) {

          this.getAudioTrack().volume = 1;
          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOn);

        } else {

          this.getAudioTrack().volume = 0;
          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOff);

        }
      }

    }

  };

  var player = audioPlayer.getPlayer();

  if (player) {

    var audioTrack = player.querySelector(audioPlayer.track),
        trackProgress = player.querySelector(audioPlayer.playback + ' input[type="range"]'),
        playButton = player.querySelector(audioPlayer.playback + ' button'),
        muteButton = player.querySelector('.evo_c-audio-player__track-volume button');

    // Remove any default controls in favor of our own.
    audioTrack.removeAttribute('controls');

    // Add event listeners to make the player work
    playButton.addEventListener('click', audioPlayer.play.bind(audioPlayer), false);
    muteButton.addEventListener('click', audioPlayer.mute.bind(audioPlayer), false);
    audioTrack.addEventListener('playing', audioPlayer.isPlaying.bind(audioPlayer), false);
    audioTrack.addEventListener('timeupdate', audioPlayer.updateTrack.bind(audioPlayer), false);
    audioTrack.addEventListener('ended', audioPlayer.finishPlay.bind(audioPlayer), false);
    trackProgress.addEventListener('change', audioPlayer.seekTrack.bind(audioPlayer), false);

  }
}
