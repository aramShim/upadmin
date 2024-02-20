$(function(){
  leftMenu();
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