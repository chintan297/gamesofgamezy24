// Audio handling integration
function checkSound() {
  console.log("Check Sound fired..!");
  if (Gamezy24Game.audio.g == true) {
    console.log("Check Sound -- is on", Gamezy24Game.audio.g);
    c3_callFunction("checksound", [0]);
  } else {
    console.log("Check Sound -- is off", Gamezy24Game.audio.g);
    c3_callFunction("checksound", [1]);
  }
}

Gamezy24Game.audio.subscribe((isEnabled) => {
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
  Gamezy24Game.game.gameOver();
}

// First Frame Ready integration
function gameFirstFrameReady() {
  console.log("gameFirstFrameReady fired..!");
  Gamezy24Game.game.firstFrameReady();
}

// Game Paused integration
Gamezy24Game.game.onPause(() => {
  console.log("Game Paused fired..!");
  c3_callFunction("gamePause", [0]);
});

// Game Resumed integration
Gamezy24Game.game.onResume(() => {
  console.log("Game Resumed fired..!");
  c3_callFunction("gameResume", [0]);
});

// Game Ready integration
function gameReady() {
  console.log("Game Ready fired..!");
  Gamezy24Game.game.ready();
}

// Game Score integration
function sendScore(score) {
  console.log("sendScore fired..!", score);
  Gamezy24Game.score.update(score);
}

// Game Storage Integration
function clearData() {
  console.log("clearData fired..!");
  Gamezy24Game.storage.clear();
}

// Get Item Integration
function getItem(itemName) {
  console.log("getItem fired..!", itemName);
  let starsEarned = Gamezy24Game.storage.getItem(itemName);
  // console.log("getItem retrieved:", starsEarned);
  c3_callFunction("getData", [itemName, starsEarned]);
  console.log("getItem fired:", itemName, starsEarned);
  return starsEarned;
}

// Remove Item Integration
function removeItem(itemName) {
  console.log("removeItem fired..!", itemName);
  Gamezy24Game.storage.removeItem(itemName);
}

// Set Item Integration
function setItem(itemName, itemValue) {
  console.log("setItem fired..!");
  Gamezy24Game.storage.setItem(String(itemName), String(itemValue));
}

// ----------------------------------
