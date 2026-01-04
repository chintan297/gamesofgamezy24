function activateAnalytics() {}
let gameplayActive = false;
function callAnalytics(eventName, params) {
  switch (eventName) {
    case "start_game":
      trackStartGameplay();
      break;
    case "end_game":
      trackStopGameplay();
      break;
    case "happy_time":
      PookiSDK.happyTime(params["value"]);
      break;
  }
}

function trackStartGameplay() {
  if (!gameplayActive) {
    PookiSDK.gameplayStart();
    gameplayActive = true;
  }
}

function trackStopGameplay() {
  if (gameplayActive) {
    PookiSDK.gameplayStop();
    gameplayActive = false;
  }
}
