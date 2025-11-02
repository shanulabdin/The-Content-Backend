// const menuBtn = document.querySelector('.menuBtn');
// const innerNav = document.querySelector('.innerNav');

// menuBtn.addEventListener('click', () => {
//   innerNav.classList.toggle('active');
// })


// intro video 
let player;

// Called by the YT API when it’s ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'lOP8oyRWyg4', // video ID
    playerVars: {
      autoplay: 1,
      mute: 1,              // required for autoplay
      controls: 0,          // hide all controls
      modestbranding: 1,    // reduce the logo (cannot fully remove)
      rel: 0,               // related videos from same channel
      playsinline: 1,
      loop: 1,
      playlist: 'lOP8oyRWyg4',
      fs: 0,                // no fullscreen button
      cc_load_policy: 0,
      iv_load_policy: 3,    // hide annotations
      disablekb: 1
    },
    events: {
      onReady: (e) => e.target.playVideo(),
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) e.target.playVideo();
      }
    }
  });
}


// Assumes you created the YT player as `player` and it autoplays muted.
const overlay = document.querySelector('.overlay-audio');
const icon = overlay.querySelector('.icon');
let hideTimer;

overlay.addEventListener('click', () => {
  if (!player) return;        // <-- was window.player

  if (player.isMuted()) {
    player.unMute();
    player.playVideo();       // Safari/iOS: ensure audio starts
    icon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
    overlay.setAttribute('aria-pressed', 'false');
  } else {
    player.mute();
    icon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
    overlay.setAttribute('aria-pressed', 'true');
  }

  icon.style.opacity = '1';
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => (icon.style.opacity = '0'), 1000);
});
