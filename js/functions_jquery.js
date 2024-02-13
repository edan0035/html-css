$("p").hover(function(){
  $(this).css("color", "white");
  $(this).css("background-color", "#4a6f6c66");
  $(this).css("padding", "5px");
  $(this).css("border-radius", "5px");
}, function(){
  $(this).css("color", "");
  $(this).css("background-color", "");
  $(this).css("padding", "");
})

$(".tjanster-tvatt").animate({padding: "50px"}, 2000)

$(".hyrslap-card").hover(function() {
  $(this).css('transform', 'translateY(-10px)')
  $(this).css('transition', 'ease-in 0.1s')
  $(this).css('cursor', 'pointer')
}, function() {
  $(this).css('transform', '')
})
