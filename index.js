// Declare Count
var count = 0;
// Creating increment and decrement function
function add() {
    count++;};
function sub() {
    count--;};
// Using it in our app
function countOp(foo){
//  console.log(foo);
  if (foo == "add"){
    add();
  } else { sub(); }};
// Button animation 
function animatePress(qux) {
  $("#"+qux).addClass("pressed");
  setTimeout(function() {
    $("#"+qux).removeClass("pressed");
  }, 100);};
// Adding event listener to our buttons and running the countOperation function. 
$("button").click(function(){
  var userCount = $(this).attr("id");
  countOp(userCount);
  animatePress(userCount);
  $("#counter").text(count);});
  
  
// ©2022 https://github.com/lordson-silver