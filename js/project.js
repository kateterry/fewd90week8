$(document).ready(function(){
  $("<img>").click(function(){
    $(this).animate( { right: "20%" } , 1000, "easeOutBounce")
      .delay(1000)
      .animate( { left: "10" } , 1000, "easInElastic");
  });

  $("body").click(function(evt){

    $("<img>").css( { 
      img("../images/cow1.gif")
      height: 100, 
      width: 100, 
      position: "fixed",
      top: evt.pageY,
      left: evt.pageX
    })
    .animate({ top: "50%", left: "50%"}, 5000, function(){
      $(this).remove();
    });
    
  });
});