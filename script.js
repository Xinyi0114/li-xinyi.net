$(document).ready(function(){
  //$(".item").hover(function(){
          //$(this).tooltip({content:'	<img src="thumbnail/rape.png"  >'})
          //let thumbnail = $(this).find("img")
          $(this).tooltip({
              items: '.item',
              content: function()
              {
                var thumbnail = $(this).find("img").get(0);
				        $(thumbnail).css(
                  {'width': '20vw',
                  //'position':'absolute',

              });
                return thumbnail;
              },
              //effect:'toggle';
              show: null, // show immediately
              track:true,//follow the mouse
              position:'top right',
              offset:[200,50],
          });

    //  });
});
