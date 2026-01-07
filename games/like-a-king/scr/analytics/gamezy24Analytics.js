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
      Gamezy24SDK.happyTime(params["value"]);
      break;
  }
}

function trackStartGameplay() {
  if (!gameplayActive) {
    Gamezy24SDK.gameplayStart();
    gameplayActive = true;
  }
}

function trackStopGameplay() {
  if (gameplayActive) {
    Gamezy24SDK.gameplayStop();
    gameplayActive = false;
  }
}
