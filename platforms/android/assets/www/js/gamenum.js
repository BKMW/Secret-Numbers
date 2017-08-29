
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
      d = Math.floor(Math.random()*10),
      e = Math.floor(Math.random()*10),
      f = Math.floor(Math.random()*10);
   
    while(b==a){
      
      b = Math.floor(Math.random()*10);
    }
    while(c==a||c==b){
      c = Math.floor(Math.random()*10);
    }
    while(d==a||d==b||d==c){
      d = Math.floor(Math.random()*10);
    }
    while(e==a||e==b||e==c||e==d){
      e = Math.floor(Math.random()*10);
    }
    while(f==a||f==b||f==c||f==d||f==e){
      f = Math.floor(Math.random()*10);
    } 

/*console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);*/


//******************function of input color*********************************************************************
var nnumber=" "+a+b+c+d+e+f;
var number = [a,b,c,d,e,f],
    
    i;
    //********add solution****************************************************
    $("#numb").html(nnumber);

// ***************ligne 1 of table******************************************************************************
  
$("#6").keyup(function(){
  "use strict";
    
    var n1=parseInt($("#1").val()),
        n2=parseInt($("#2").val()),
        n3=parseInt($("#3").val()),
        n4=parseInt($("#4").val()), 
        n5=parseInt($("#5").val()),
        n6=parseInt($("#6").val()),           
        idsn = ["#1","#2","#3","#4","#5","#6"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
       
        stopScore();
      
        $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
        var displayScore= $("#score").html();

      $("#yourScore").html(displayScore);
   
      $("#replay").show().animate({bottom:'200px'});
      //***best score****************************************
     /* var bestScore = parseInt($('#best').html()),
          scoret = parseInt(displayScore);
            if (scoret>bestScore) {
             $("#best").html(displayScore);
                  }*/
      break;

     }
   
})
//***************ligne 2 of table********************************************************************************
$("#12").keyup(function(){
  "use strict";
    
    var n1=parseInt($("#7").val()),
        n2=parseInt($("#8").val()),
        n3=parseInt($("#9").val()),
        n4=parseInt($("#10").val()),
        n5=parseInt($("#11").val()),
        n6=parseInt($("#12").val()),          
        idsn = ["#7","#8","#9","#10","#11","#12"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
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
$("#18").keyup(function(){

    var n1=parseInt($("#13").val()),
        n2=parseInt($("#14").val()),
        n3=parseInt($("#15").val()),
        n4=parseInt($("#16").val()), 
        n5=parseInt($("#17").val()),
        n6=parseInt($("#18").val()),         
        idsn = ["#13","#14","#15","#16","#17","#18"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
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
$("#24").keyup(function(){

    var n1=parseInt($("#19").val()),
        n2=parseInt($("#20").val()),
        n3=parseInt($("#21").val()),
        n4=parseInt($("#22").val()), 
        n5=parseInt($("#23").val()),
        n6=parseInt($("#24").val()),         
        idsn = ["#19","#20","#21","#22","#23","#24"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }

      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
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
$("#30").keyup(function(){

    var n1=parseInt($("#25").val()),
        n2=parseInt($("#26").val()),
        n3=parseInt($("#27").val()),
        n4=parseInt($("#28").val()), 
        n5=parseInt($("#29").val()),
        n6=parseInt($("#30").val()),         
        idsn = ["#25","#26","#27","#28","#29","#30"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      while(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
         stopScore();
      
      $("#game :input").prop('disabled',true);
        $("#game").css("opacity",0.5);
     var displayScore= $("#score").html();
      $("#yourScore").html(displayScore);
      $("#replay").show().animate({bottom:'200px'});
      break;
    }
})
//***************ligne 6 of table********************************************************************************
$("#36").keyup(function(){

    var n1=parseInt($("#31").val()),
        n2=parseInt($("#32").val()),
        n3=parseInt($("#33").val()),
        n4=parseInt($("#34").val()), 
        n5=parseInt($("#35").val()),
        n6=parseInt($("#36").val()),         
        idsn = ["#31","#32","#33","#34","#35","#36"],
        inpn = [n1,n2,n3,n4,n5,n6];  
        
   
for(i=0;i<number.length;i++){
  

       if(inpn[i]==number[i]){
        $(idsn[i]).css("background-color","lime")
  } else if (inpn[i]==a||inpn[i]==b||inpn[i]==c||inpn[i]==d||inpn[i]==e||inpn[i]==f){
    $(idsn[i]).css("background-color","yellow")
  } else{
    $(idsn[i]).css("background-color","violet")
       }
     }
      if(inpn[0]==a&&inpn[1]==b&&inpn[2]==c&&inpn[3]==d&&inpn[4]==e&&inpn[5]==f){
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
