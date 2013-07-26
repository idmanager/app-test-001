(function () {
  "use strict";
  window.FAPP = window.FAPP || {};

  window.FAPP.wapp = {

    pagedata: "default",

    homeView : function ()
    {
        this.loadPageData();
        //this.homeModel(this.applyTemplate);
    },

    homeModel : function (callback)
    {
        this.loadPageData();
        if (callback && typeof(callback) === "function") 
        {  
          if (this.pagedata==="default") 
          {
            alert('dhdhd');
          }         
          callback(this.pagedata);  
        }  
        else
        {
          alert('dstds');
        }
        
    },

    loadPageData : function(content)
    {      
      if (content)
      {          
          this.pagedata=content; 
          this.applyTemplate(content);        
      }
      else
      {
          // create script element
          var script = document.createElement('script');
          // assing src with callback name
          script.src = 'http://www.tkretail.tk/yahoo_files/pagedata.json?callback=FAPP.wapp.loadPageData';
          //script.src = 'http://www.tkretail.tk/yahoo_files/pagedata.json';
          // insert script to document and load content
          document.body.appendChild(script);                   
      }
    },

    applyTemplate: function (obj)
    {
      var pagefn = doT.template(document.getElementById('weatherTemplate').text, undefined, undefined);           
      document.getElementById('weatherContainer').innerHTML = pagefn(obj);  
      var pagefn = doT.template(document.getElementById('weatherTemplate2').text, undefined, undefined);           
      document.getElementById('weatherContainer2').innerHTML = pagefn(obj);                     
             
    }

  };

}());


 (function(){
  

 function init(ev) 
 {  

    //FAPP.wapp.loadPageData(); 

    skrollr.init({
        forceHeight: false
      });

    var photoUrl = 'http://www.tkretail.tk/yahoo_files/back.jpg'
    //var bg_img = "url('"+ photoUrl +"')";
                      
    var can = document.getElementById('canvas');

    var w = screen.width;
    var h = screen.height;
    
    var ctx = can.getContext('2d');

    ctx.width=w;
    ctx.height= h;

    var img = new Image();
    img.src = photoUrl;

    img.onload = function(){

      var imgW=img.width;
      var imgH=img.height;

      var sourceX = 150;
      var sourceY = 0;
      var sourceWidth = 150;
      var sourceHeight = 150;
      var destWidth = sourceWidth;
      var destHeight = sourceHeight;
      var destX = ctx.width / 2 - destWidth / 2;
      var destY = ctx.height / 2 - destHeight / 2;

      if(screen.width<imgW)
      {      
        //ctx.drawImage(img, 0, 0, screen.width, screen.width*imgH/imgW);
        ctx.drawImage(img, 0, 0, imgW, imgH);
        //ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        alert('ret');
      }
      else
      {
        //ctx.drawImage(img, 0, 0, imgW, imgH);
        ctx.drawImage(img, 0, 0, imgW, imgH, 0 , 0 , imgW, imgH);
      }
    }
    

    FAPP.wapp.homeView();    

      var lat, lon;
      navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
      function locationSuccess(position)
      {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
                               
      }
      function locationFail()
      { 
        alert("Can't find you");
        //loadWeather(42.806048, -1.656189);
      }

  }

  if (document.addEventListener) 
  {
        // ^ = "look, old IE, nothing to worry about here, just show the 
        //       HTML and have a lovely day otherwise"
        
      // window.addEventListener('load', bar, false);
      // ^ use this if you want to wait for all data to be loaded, including
      //   scripts and stylesheets and media

    document.addEventListener('DOMContentLoaded', init, false);
      // ^ use this to start bar() when the document is parsed and ready, 
      //   but _before_ any of the dependencies load - good demo is here:
      //   http://ie.microsoft.com/testdrive/HTML5/DOMContentLoaded/Default.html
      
  }

})();

