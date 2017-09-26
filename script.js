<link rel="stylesheet" type="text/css" href="style.css">
<script src="script.js"></script>
$("img").attr("src", "http://image.flaticon.com/icons/png/512/8/8235.png");


$("img").click(function(){
  
  // console.log(cpuChoice);
  //$(".cpu").html(cpuChoice);
  var cpuChoice = convertChoice(Math.floor(Math.random() * 7));
  // $(".cpu").html( cpuChoice );
  
  
  //console.log( $("img").index(this) );
  var choice = convertChoice( $("img").index(this));
  console.log("CPU: " + cpuChoice);
  
  // console.log( $(this).is('.apple') );
  console.log("Player: " + choice);
  
  // $("#player").html(choice);

  var winnerText = "player ";
  
  
  if (choice === "undefined") {
    winnerText += "invalid!";
  } else if(choice === cpuChoice){
    winnerText += "wins!!";
  } else {
    winnerText += "loses!";
  }
  
  
  $(".cpu").attr("class", "cpu " + cpuChoice);
  $("#player").attr("class", choice);
  
  $(".winner").html(winnerText.toUpperCase());
  $(".winner").show();

});





// ADVANCED???
// RANDOM GENERATES NUMBERS OUTSIDE BOUNDS
// LOGIC FOR INVALID  CHOICE AND IMAGES SELECTION
$("#imgRandomGen").click( function(){
  
  var cpuChoice = convertChoice(Math.floor(Math.random() * 7));
  var choice =  convertChoice(Math.floor(Math.random() * 15));
  
  
  console.log("Player: " + choice + " CPU: " + cpuChoice);
  
  
  var winnerText = "player ";
    
  if (choice === "undefined") {
    winnerText += "invalid!";
  } else if(choice === cpuChoice){
    winnerText += "wins!!";
  } else {
    winnerText += "loses!";
  }
  
  
  $(".cpu").attr("class", "cpu " + cpuChoice);
  $("#player").attr("class", choice);
  
  
  $(".winner").html(winnerText.toUpperCase());
  $(".winner").show();
  
});




function convertChoice(selection){
  var sel;
  
  if(selection === 0) {
    sel = "one";
  } else if(selection === 1){
    sel = "two";
  } else if(selection === 2) {
    sel = "three";
  } else if(selection === 3){
    sel = "four";
  } else if(selection === 4){
    sel = "four";
  } else if(selection === 5){
    sel = "three";
  } else if(selection === 6){
    sel = "two";
  } else if(selection === 7){
    sel = "one";
  } else if(selection < 1 || selection > 8){ 
    sel = "undefined";
  }

  return sel;
}