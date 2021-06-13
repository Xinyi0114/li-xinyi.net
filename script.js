$(document).ready(function(){
  $(".item").hover(function(){
          //$(this).tooltip({content:'	<img src="thumbnail/rape.png"  >'})
          //let thumbnail = $(this).find("img")
          $(this).tooltip({
              items: '.item .header',
              content: function()
              {
                let $thumbnail = $(this).find("img")
                return $thumbnail;
              },
              show: null, // show immediately
              track:true,//follow the mouse
              open: function(event, ui)
              {
                  if (typeof(event.originalEvent) === 'undefined')
                  {
                      return false;
                  }

                  var $id = $(ui.tooltip).attr('id');

                  // close any lingering tooltips
                  $('div.ui-tooltip').not('#' + $id).remove();

                  // ajax function to pull in data and add it to the tooltip goes here
              },
              close: function(event, ui)
              {
                  ui.tooltip.hover(function()
                  {
                      $(this).stop(true).fadeTo(200, 1);
                  },
                  function()
                  {
                      $(this).fadeOut('200', function()
                      {
                          $(this).remove();
                      });
                  });
              }
          });

      });
});
