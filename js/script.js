$(document).ready(function(){
 $("span").click(function(){
      $(this).toggleClass("glyphicon-remove");
      $(this).toggleClass("glyphicon-align-justify");
      $(".dropdown").slideToggle();      
 })
});