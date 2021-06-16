$(document).ready(function(){
  $(".item").hover(function(){
          //$(this).tooltip({content:'	<img src="thumbnail/rape.png"  >'})
          //let thumbnail = $(this).find("img")
          $(this).tooltip({
              items: '.item',
              content: function()
              {
                var thumbnail = $(this).find("img").get(0);
				$(thumbnail).css('width', '500px');
                return thumbnail;
              },
              show: null, // show immediately
              track:true,//follow the mouse

          });

      });
});
