// Audio handling integration
function checkSound() {
  console.log("Check Sound fired..!");
  if (PookiGame.audio.g == true) {
    console.log("Check Sound -- is on", PookiGame.audio.g);
    c3_callFunction("checksound", [0]);
  } else {
    console.log("Check Sound -- is off", PookiGame.audio.g);
    c3_callFunction("checksound", [1]);
  }
}

PookiGame.audio.subscribe((isEnabled) => {
  if (isEnabled) {
    console.log("Set Sound on");
    c3_callFunction("checksound", [0]);
    checkSound();
  } else {
    console.log("Set Sound off");
    c3_callFunction("checksound", [1]);
  }
});

// Game Over integration

function gameOver() {
  console.log("gameOver fired..!");
  PookiGame.game.gameOver();
}

// First Frame Ready integration
function gameFirstFrameReady() {
  console.log("gameFirstFrameReady fired..!");
  PookiGame.game.firstFrameReady();
}

// Game Paused integration
PookiGame.game.onPause(() => {
  console.log("Game Paused fired..!");
  c3_callFunction("gamePause", [0]);
});

// Game Resumed integration
PookiGame.game.onResume(() => {
  console.log("Game Resumed fired..!");
  c3_callFunction("gameResume", [0]);
});

// Game Ready integration
function gameReady() {
  console.log("Game Ready fired..!");
  PookiGame.game.ready();
}

// Game Score integration
function sendScore(score) {
  console.log("sendScore fired..!", score);
  PookiGame.score.update(score);
}

// Game Storage Integration
function clearData() {
  console.log("clearData fired..!");
  PookiGame.storage.clear();
}

// Get Item Integration
function getItem(itemName) {
  console.log("getItem fired..!", itemName);
  let starsEarned = PookiGame.storage.getItem(itemName);
  // console.log("getItem retrieved:", starsEarned);
  c3_callFunction("getData", [itemName, starsEarned]);
  console.log("getItem fired:", itemName, starsEarned);
  return starsEarned;
}

// Remove Item Integration
function removeItem(itemName) {
  console.log("removeItem fired..!", itemName);
  PookiGame.storage.removeItem(itemName);
}

// Set Item Integration
function setItem(itemName, itemValue) {
  console.log("setItem fired..!");
  PookiGame.storage.setItem(String(itemName), String(itemValue));
}

// ----------------------------------
