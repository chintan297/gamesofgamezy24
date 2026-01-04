var SOCIAL_API_INITIALIZED_MSG = "social_api_initialized",
  SOCIAL_API_INITIALIZATION_FAILED_MSG = "social_api_initialization_failed",
  USER_PROFILE_LOADING_FAILED_MSG = "social_user_profile_loading_failed",
  ADS_INITIALIZED_MSG = "ads_initialized",
  ADS_INITIALIZE_FAILED_MSG = "ads_initialize_failed",
  REWARDED_AD_LOADED_MSG = "rewarded_ad_loaded",
  REWARDED_AD_SHOWED_MSG = "rewarded_ad_showed",
  REWARDED_AD_SHOW_FAILED_MSG = "rewarded_ad_show_failed",
  INTERSTITIAL_AD_LOADED_MSG = "interstitial_ad_loaded",
  INTERSTITIAL_AD_SHOWED_MSG = "interstitial_ad_showed",
  INTERSTITIAL_AD_SHOW_FAILED_MSG = "interstitial_ad_show_failed",
  socialPlatform = {
    _sdkInitialized: !1,
    _gameLoadingFinished: !1,
    progress: function (progress) {
      "undefined" == typeof PookiSDK ||
        100 !== progress ||
        socialPlatform._gameLoadingFinished ||
        ((socialPlatform._gameLoadingFinished = !0),
        PookiSDK.gameLoadingFinished());
    },
    preInitialize: function (callback) {
      if ("undefined" == typeof PookiSDK)
        throw new Error("Unable to resolve PookiSDK");
      PookiSDK.init()
        .then(function () {
          console.log("Pooki SDK successfully initialized"),
            (socialPlatform._sdkInitialized = !0),
            callback();
        })
        .catch(function (error) {
          console.log("Unable to initialize Pooki SDK:", error), callback();
        });
    },
    initialize: function () {
      socialPlatform._sdkInitialized
        ? JsToDef.send(SOCIAL_API_INITIALIZED_MSG, {
            auth_fields: { api_type: 927 },
          })
        : JsToDef.send(SOCIAL_API_INITIALIZATION_FAILED_MSG, {
            error: "API is not initialized",
          });
    },
    getDefaultLocale: function () {
      return "en";
    },
    getInstallReferrer: function () {},
    loadUserProfile: function () {
      JsToDef.send(USER_PROFILE_LOADING_FAILED_MSG, { error: "Not supported" });
    },
    canCreateShortcut: function () {
      return !1;
    },
    createShortcut: function () {
      throw new Error("Not implemented");
    },
    initializeAds: function () {
      socialPlatform._sdkInitialized
        ? (JsToDef.send(ADS_INITIALIZED_MSG),
          socialPlatform.preloadInterstitial(),
          socialPlatform.preloadRewarded())
        : JsToDef.send(ADS_INITIALIZE_FAILED_MSG);
    },
    preloadInterstitial: function () {
      JsToDef.send(INTERSTITIAL_AD_LOADED_MSG);
    },
    showInterstitial: function () {
      var videoStarted = !1;
      PookiSDK.commercialBreak(function () {
        console.log("Interstitial video started"), (videoStarted = !0);
      })
        .then(function () {
          videoStarted
            ? (console.log("Interstitial ad successfully watched"),
              JsToDef.send(INTERSTITIAL_AD_SHOWED_MSG))
            : (console.log("Interstitial ad failed to watch"),
              JsToDef.send(INTERSTITIAL_AD_SHOW_FAILED_MSG));
        })
        .catch(function (error) {
          console.log("Interstitial ad failed to watch:", error),
            JsToDef.send(INTERSTITIAL_AD_SHOW_FAILED_MSG);
        });
    },
    preloadRewarded: function () {
      JsToDef.send(REWARDED_AD_LOADED_MSG);
    },
    showRewarded: function () {
      PookiSDK.rewardedBreak(function () {
        console.log("Rewarded video started");
      })
        .then(function (status) {
          status
            ? (console.log("Rewarded video watched successfully"),
              JsToDef.send(REWARDED_AD_SHOWED_MSG))
            : (console.log("Rewarded ad failed to watch"),
              JsToDef.send(REWARDED_AD_SHOW_FAILED_MSG));
        })
        .catch(function (error) {
          console.log("Rewarded ad failed to watch", error),
            JsToDef.send(REWARDED_AD_SHOW_FAILED_MSG);
        });
    },
    logEvent: function () {},
    supportsPageReload: function () {
      return !0;
    },
    canShowBanner: function () {
      return !1;
    },
    preloadBanner: function () {
      throw new Error("Not implemented");
    },
    isBannerShown: function () {
      return !1;
    },
    getBannerTimeout: function () {
      return 0;
    },
    showBanner: function () {
      throw new Error("Not implemented");
    },
    hideBanner: function () {
      throw new Error("Not implemented");
    },
    getAdInstallData: function () {},
  };
