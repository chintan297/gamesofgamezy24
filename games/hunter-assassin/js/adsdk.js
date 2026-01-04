function adService(){
	this.loadRewardState = -1;
	this.n = -1;
    this.a = 1;
    this.o = 2;
    this.l = 3;

}

adService.prototype.startPreLoad = function() {
    setInterval(this.checkHasAd.bind(this), 30000);
    this.checkHasAd();
}, 

adService.prototype.checkHasAd = function() {
	var t = this;
    if(this.loadRewardState !== this.o && this.loadRewardState !== this.a) 
        this.loadRewardedVideo()
 }, 

adService.prototype.loadRewardedVideo = function(e) {
    var t = this;

    if(this.loadRewardState !== this.o && this.loadRewardState !== this.a){
        sdk.showBanner();
         t.loadRewardState = t.o;
    } 
               
}, 

adService.prototype.showRewardedVideo = function(e, t) {
    var i = this;

   
        return new Promise(function(ts, rs){ 
             sdk.showBanner();
                i.loadRewardState = i.n;
    	});

}