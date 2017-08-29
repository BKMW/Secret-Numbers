
$(document).ready(function(){
  "use strict";
  //************focus*********************************************************************************************
 
 $('input').on("keyup",function()
{
  //auto focus *********************
  var y =$(this).attr('id'),
         x = parseInt(y)+1,
         ids = "#"+x;

     $(ids).focus();
   //disable to  edite  ************ 
  $(this).prop('disabled', true);

  
});
  

  //**********random number**************************************************************************************

  var a = Math.floor(Math.random()*10),
      b = Math.floor(Math.random()*10),
      c = Math.floor(Math.random()*10),
      d = Math.floor(Math.random()*10);
      
   
    while(b==a){
      
      b = Math.floor(Math.random()*10);
    }
    while(c==a||c==b){
      c = Math.floor(Math.random()*10);
    }
    while(d==a||d==b||d==c){
      d = Math.floor(Math.random()*10);
    }
    

/*console.log(a);
console.log(b);
console.log(c);
console.log(d);*/



//******************function of input color*********************************************************************
var nnumber=" "+a+b+c+d;
var number = [a,b,c,d],
    
    i;
    $("#numb").html(nnumber);

// ***************ligne 1 of table******************************************************************************
  
$("#4").keyup(function(){
  "use strict";
    
    var n1=parseInt($("#1").val()),
        n2=parseInt($("#2").val()),
        n3=parseInt($("#3").val()),
        n4=parseInt($("#4").val()), 
                 
        idsn = ["#1","#2","#3","#4"],
        inpn = [n1,n2,n3,n4];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
       
        stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
        var displayScore= $("#score").html();

      $("#yourScore").html(displayScore);
   
      $("#replay").show().animate({bottom:'200px'});
     
      break;

     }
   
})
//***************ligne 2 of table********************************************************************************
$("#8").keyup(function(){
  "use strict";
    
    var n1=parseInt($("#5").val()),
        n2=parseInt($("#6").val()),
        n3=parseInt($("#7").val()),
        n4=parseInt($("#8").val()),        
        idsn = ["#5","#6","#7","#8"],
         inpn = [n1,n2,n3,n4];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
       
        stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
        var displayScore= $("#score").html();

      $("#yourScore").html(displayScore);
   
      $("#replay").show().animate({bottom:'200px'});
     
      break;

     }
   
})
//***************ligne 3 of table********************************************************************************
$("#12").keyup(function(){

    var n1=parseInt($("#9").val()),
        n2=parseInt($("#10").val()),
        n3=parseInt($("#11").val()),
        n4=parseInt($("#12").val()), 
               
        idsn = ["#9","#10","#11","#12"],
        inpn = [n1,n2,n3,n4];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
       
        stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
        var displayScore= $("#score").html();

      $("#yourScore").html(displayScore);
   
      $("#replay").show().animate({bottom:'200px'});
     
      break;

     }
   
})
//***************ligne 4 of table********************************************************************************
$("#16").keyup(function(){

    var n1=parseInt($("#13").val()),
        n2=parseInt($("#14").val()),
        n3=parseInt($("#15").val()),
        n4=parseInt($("#16").val()),
              
        idsn = ["#13","#14","#15","#16"],
         inpn = [n1,n2,n3,n4];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
       
        stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
        var displayScore= $("#score").html();

      $("#yourScore").html(displayScore);
   
      $("#replay").show().animate({bottom:'200px'});
     
      break;

     }
   
})
//***************ligne 5 of table********************************************************************************
$("#20").keyup(function(){

    var n1=parseInt($("#17").val()),
        n2=parseInt($("#18").val()),
        n3=parseInt($("#19").val()),
        n4=parseInt($("#20").val()), 
             
        idsn = ["#17","#18","#19","#20"],
        inpn = [n1,n2,n3,n4];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      if(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
         stopScore();
      
      $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
     var displayScore= $("#score").html();
      $("#yourScore").html(displayScore);
      $("#replay").show().animate({bottom:'200px'});
      
    }
    if(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d){
         stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
      var displayScore= $("#score").html();
      $("#yourScore").html(displayScore);
      $("#replay").show().animate({bottom:'200px'});
            
    } else {
     $("#game :input").prop('disabled',true);

      $("#game").css("opacity",0.5);
      stopScore();

      
      $("#replay1").show().animate({bottom:'200px'});

    }


      
});
   
});
