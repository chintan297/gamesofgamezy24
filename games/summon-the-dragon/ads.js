// =======================================================
// UPDATED ads.js (AD-FREE STUB)
// This file defines the functions required by the game's core logic
// but removes all Google IMA (ad) initialization and tracking.
// =======================================================

// Global flags and variables needed by the loading mechanism
window.adCompleteFlag = true;
window.resCompleteFlag = true;
window.adEndComplete = true;
window.resEndComplete = true;

// Placeholder function for ad errors, just logs the event.
// The game logic might call this on failure, which is now harmless.
function onAdError(adErrorEvent) {
  console.log("onAdError called: No ads configured.");
  // No need to destroy adsManager or handle ad-based scene loading here.
}

// Placeholder for ad manager loaded event - now does nothing.
function onAdsManagerLoaded(adsManagerLoadedEvent) {
  console.log("onAdsManagerLoaded called: No ads configured.");
}

// Core function the game calls to launch the scene when no ad is shown.
// This is the essential part copied directly from the original file's logic.
function noAdGoToScene() {
  var GameConfig = __require("GameConfig");
  console.log("noAdGoToScene: Launching game scene directly.");

  var launchScene = GameConfig.launchScene;
  var Bros = GameConfig.Bros;
  var caS = GameConfig.caS;

  // Set adCompleteFlag to false after starting the load process
  window.adCompleteFlag = false;

  cc.director.loadScene(launchScene, null, function () {
    // Scene load completion callback
    if (Bros) {
      // show canvas
      var canvas = document.getElementById("GameCanvas");
      if (canvas) {
        canvas.style.visibility = "";
      }
      var div = document.getElementById("GameDiv");
      if (div) {
        div.style.backgroundImage = "";
      }
    }
    cc.loader.onProgress = null;
    console.log("Success to load scene: " + launchScene);
  });
}

// Function called by the game to attempt to show ads. Now it just launches the game.
function showMyAds() {
  console.log("showMyAds stub called. Launching scene directly.");
  noAdGoToScene();
}

// Placeholder for adBreak (often used for interstitial ads in Cocos games)
// It immediately calls the complete callback so the game isn't blocked.
window.adsbygoogle = window.adsbygoogle || [];
window.adBreak = function (o) {
  console.log("adBreak called but is disabled. Completing immediately.");
  if (o && o.complete) {
    o.complete();
  }
};

// =======================================================
// REMOVED: All google.ima.* SDK initialization code,
// event listeners, ad request objects, and ad display setup.
// =======================================================
