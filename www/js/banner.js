var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
   banner: 'ca-app-pub-6846643358446035/3325670334',
        interstitial: 'ca-app-pub-6846643358446035/8960525413'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-6846643358446035/3325670334',
        interstitial: 'ca-app-pub-6846643358446035/8960525413'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-6846643358446035/3325670334',
        interstitial: 'ca-app-pub-6846643358446035/8960525413'
  };
}
//========start interstitial=========


 //AdMob.prepareInterstitial( {adId:admobid.interstitial, isTesting: true, autoShow:false} );


//=======end interstitial============
   
    // device APIs are available

   function onDeviceReady() {
      
        // Now safe to use device APIs
        if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
    AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    //isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
    });
 
    }



    function onBackKeyDown(e) {

         e.preventDefault();
         
         //this will load a full screen ad on startup
    /*AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    //isTesting: true, // TODO: remove this line when release
    autoShow: true
    });*/

       var r = confirm("Do you want to exit?");
        if (r == true) {
          /*========start interstitial=========
            if(AdMob) {
              AdMob.showInterstitial();
            }
          =======end interstitial============*/
            navigator.app.exitApp();   
           } 
  

           }
          

    function onPause(){
        stopScore();
        
        continueScore();    
         }
      
     // Wait for device API libraries to load
    
    function onLoad() {
      document.addEventListener("deviceready", onDeviceReady, false);
      document.addEventListener("pause", onPause, false);
      document.addEventListener("backbutton", onBackKeyDown, false);
      $("#exit,#exit1").click(function(){

            navigator.app.exitApp();
            });
    }


   