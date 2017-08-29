
     function timer()
     {
        var score = parseInt($("#score").html());
    	 if(score>0){

    	  score--;
       
    	
    	$("#score").text(score);
        
     } 
     else{
        $("#game :input").prop('disabled',true);

        $("#game").css("opacity",0.5);

        $("#replay1").show().animate({bottom:'200px'});
            
     }
     
    };
   
$(function(){
        
$("#game").one("keyup",function()
{

   var startScore = setInterval("timer()", 600);
   
   $("#score").animate({fontSize:"+=4px"});

  stopScore = function(){

   clearInterval(startScore);
   };
   continueScore = function(){
    $("#game").one("keyup",function()
{

   var startScore = setInterval("timer()", 600);
 });
   }

});
});
/*var bestScore = parseInt($('#best').html());
if (score>bestScore) {
  $("#best").html(bestScore);
}
  */   
// });
    