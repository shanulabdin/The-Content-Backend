const menuBtn = document.querySelector('.menuBtn');
const innerNav = document.querySelector('.innerNav');

menuBtn.addEventListener('click', () => {
  innerNav.classList.toggle('active');
})


// intro video 
let player;

// Called by the YT API when it’s ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'lOP8oyRWyg4', // your video ID
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

// Toggle mute/unmute from your custom button
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.mute-toggle');
  if (!btn || !player) return;
  if (player.isMuted()) {
    player.unMute();
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = '🔈';
  } else {
    player.mute();
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = '🔇';
  }
});