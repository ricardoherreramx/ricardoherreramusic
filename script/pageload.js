// Loading Page
var loader = document.getElementById("loadbox");
function loading () { loader.style.width = "0%" };

// Leaving Page
document.addEventListener('DOMContentLoaded', function loadout () {
var anchors = document.getElementsByTagName('a');
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname ||
        anchors[idx].pathname === window.location.pathname) {
        continue;
    }
    anchors[idx].addEventListener('click', function(event) {
      var loader = document.getElementById('loadbox'),
        anchor = event.currentTarget;
      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      loader.addEventListener("transitionend", listener);
      event.preventDefault();
      loader.style.width = "100%";
    });
  }
});

// Cleaning History
window.addEventListener('pageshow', function (event) {
  if (!event.persisted) { return; }
  var loader = document.getElementById('loadbox');
  loader.style.width = "0%";
});