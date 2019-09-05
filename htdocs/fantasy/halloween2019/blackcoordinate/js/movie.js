
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
tag.id = "youtubeScript";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {
    width: '560',
    height: '315',
    videoId: 'cMptGS-doB0',
    playerVars: {
      'autoplay': 1,
      'modestbranding': 1,
      'controls': 0,
      'showinfo': 0,
      'disablekb': 1,
      'html5': 1,
      'loop' : 1,
      'rel': 0,
      'playsinline': 1,
      'playlist' : 'cMptGS-doB0'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  player.mute();
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}
