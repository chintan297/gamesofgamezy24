window.GAMEZY24GAME = {
  gameReady: function () {
    try {
      window.Gamezy24Game.game.ready();
    } catch (e) {
      console.warn(e);
    }
  },
  subscribeToAudioUpdates: function (callback) {
    try {
      window.Gamezy24Game.audio.subscribe(callback);
    } catch (e) {
      console.warn(e);
    }
  },
  isAudioEnabled: function () {
    let isAudioEnabled = true;
    try {
      isAudioEnabled = window.Gamezy24Game.audio.isEnabled();
    } catch (e) {
      console.warn(e);
    }
    return isAudioEnabled;
  },
  sendScore: function (score) {
    try {
      window.Gamezy24Game.score.update(score);
    } catch (e) {
      console.warn(e);
    }
  },
  gameOver: function () {
    try {
      window.Gamezy24Game.game.gameOver();
    } catch (e) {
      console.warn(e);
    }
  },
  levelComplete: function (level) {
    try {
      window.Gamezy24Game.game.levelComplete(level);
    } catch (e) {
      console.warn(e);
    }
  },
};

window.famobi = window.famobi || {};

window.famobi.localStorage = {
  setItem: function (key, value) {
    window.Gamezy24Game.storage.setItem(
      window.famobi_gameID + ":" + key,
      value
    );
  },
  getItem: function (key) {
    return window.Gamezy24Game.storage.getItem(
      window.famobi_gameID + ":" + key
    );
  },
  removeItem: function (key) {
    window.Gamezy24Game.storage.removeItem(window.famobi_gameID + ":" + key);
  },
  clear: function () {
    window.Gamezy24Game.storage.clear();
  },
};

window.famobi.hasGameReadyCalled = false;
window.famobi.hideSplashScreen = function () {
  if (!window.famobi.hasGameReadyCalled) {
    window.famobi.hasGameReadyCalled = true;
    console.log("GAMEZY24GAME.gameReady");
    GAMEZY24GAME.gameReady();
  }
};
window.famobi.audio = window.famobi.audio || {
  controls: false,
  bgm: true,
  sfx: true,

  init: function () {
    // do something
  },
  hasControls: function () {
    return this.controls;
  },
  isEnabled: function (type) {
    switch (type) {
      case "bgm":
      // return this.bgm;
      case "sfx":
      // return this.sfx;
      default:
        // return this.bgm && this.sfx;
        return GAMEZY24GAME.isAudioEnabled();
    }
  },
};

window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tracking || {
  log: function () {},
  initUser: function () {},
  init: function () {},
  trackingAdCallback: function () {},
  trackEvent: function () {},
  sendRequest: function () {},
  processQueue: function () {},
};

window.famobi.getCurrentLanguage = function () {
  return "en";
};

window.famobi_analytics.trackEvent = function (event, params) {
  console.log(event, params);
  return new Promise(function (resolve, reject) {
    switch (event) {
      case "EVENT_LIVESCORE":
        console.log("GAMEZY24GAME.sendScore", params.liveScore);
        GAMEZY24GAME.sendScore(params.liveScore);
        return resolve(event, params);
      case "EVENT_LEVELSCORE":
        console.log("GAMEZY24GAME.sendScore", params.levelScore);
        GAMEZY24GAME.sendScore(params.levelScore);
        return resolve(event, params);
      case "EVENT_TOTALSCORE":
        console.log("GAMEZY24GAME.sendScore", params.totalScore);
        GAMEZY24GAME.sendScore(params.totalScore);
        return resolve(event, params);
      case "EVENT_LEVELFAIL":
        if (params.reason == "quit") {
          //break;
        }
        console.log("GAMEZY24GAME.gameOver");
        GAMEZY24GAME.gameOver();
        return resolve(event, params);
      case "EVENT_LEVELSUCCESS":
        console.log("EVENT_LEVELSUCCESS");

        var gsLevel = -1;

        switch (window.famobi_gameJS) {
          case "8-ball-billiards-classic":
            gsLevel = 0;
            break;
          default:
            if (!params.levelName.length) {
              gsLevel = 0;
            } else {
              gsLevel = parseInt(params.levelName.replace(/\D/g, "")) || -1;
            }
        }
        console.log("GAMEZY24GAME.levelComplete", gsLevel);
        GAMEZY24GAME.levelComplete(gsLevel);
        break;
      default:
      // ...
    }
    return resolve(event, params);
  });
};

window.famobi_analytics.trackScreen = function (screen) {
  if (screen == "SCREEN_HOME") {
    setTimeout(function () {
      window.famobi.hideSplashScreen();
    }, 500);
  }
};

// Gamesnack Audio Listener
GAMEZY24GAME.subscribeToAudioUpdates((isAudioEnabled) => {
  console.log("audio update received!");

  if (isAudioEnabled) {
    if (typeof window.famobi_onUnmuteRequested == "function") {
      window.famobi_onUnmuteRequested();
      console.log("unmuting requested");
    }
  } else {
    if (typeof window.famobi_onMuteRequested == "function") {
      window.famobi_onMuteRequested();
      console.log("muting requested");
    }
  }
});

// localforage: driver to localstorage
if (famobi_gameJS.includes("c2runtime.js")) {
  localForageCheck = setInterval(function () {
    if (typeof localforage !== "undefined") {
      console.log("localforage found");
      clearInterval(localForageCheck);

      localforage.ready(function () {
        localforage.setDriver(localforage.LOCALSTORAGE);
      });
    }
  }, 250);
}
