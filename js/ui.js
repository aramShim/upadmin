$(function(){
  leftMenu();
  $('.mo-header-menu-btn').click(function(){
    $('body').toggleClass('no-scroll');
    $('.menu-wrap').toggleClass('open');
    $('.leftmenu').toggleClass('open');
  })
});
function leftMenu(){
  $('.sub-menu').hide();
  $('.menu-label').click(function(e){
    if($(this).attr('href') == '#'){
      e.preventDefault();
    }
    
    $(this).toggleClass('active');
    $(this).next('.sub-menu').slideToggle();

  })
}
