$(document).ready(function() {

  $(".item .header").hover(function() {
    $(this).parent().find("img").css("display","block")
    //$(this).parent().css("color","red")

}, function () {
  $(this).parent().find("img").css("display","none")
  //$(this).parent().css("color","black")
    console.log('mouseleave')
  })

  $(".exposure .header").click(function(){
    $(".flex").hide()
    $(".info.exposure").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.exposure").css("display","none")
      $("#back").hide()
    })
  })

  $(".skin .header").click(function(){
    $(".flex").hide()
    $(".info.skin").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.skin").css("display","none")
      $("#back").hide()
    })
  })
  $(".sidewalk .header").click(function(){
    $(".flex").hide()
    $(".info.sidewalk").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.sidewalk").css("display","none")
      $("#back").hide()
    })
  })
  $(".adventures .header").click(function(){
    $(".flex").hide()
    $(".info.adventures").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.adventures").css("display","none")
      $("#back").hide()
    })
  })
  $(".diagnose .header").click(function(){
    $(".flex").hide()
    $(".info.diagnose").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.diagnose").css("display","none")
      $("#back").hide()
    })
  })
  $(".paradise .header").click(function(){
    $(".flex").hide()
    $(".info.paradise").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.paradise").css("display","none")
      $("#back").hide()
    })
  })
  $(".rape .header").click(function(){
    $(".flex").hide()
    $(".info.rape").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.rape").css("display","none")
      $("#back").hide()
    })
  })
  $(".home .header").click(function(){
    $(".flex").hide()
    $(".info.home").css("display","block")
    $("#back").show()
    $("#back").click(function(){
      $(".flex").show()
      $(".info.home").css("display","none")
      $("#back").hide()
    })
  })

});
