$(document).ready(function(){
    $("form#quiz").submit(function(event){
      event.preventDefault();
      var answer1=$("input:radio[name=firstQuestion]:checked").val();
      
      var answer2=$("input:radio[name=secondQuestion]:checked").val();
      var answer3=$("input:radio[name=thirdQuestion]:checked").val();
      var answer4=$("input:radio[name=fourthQuestion]:checked").val();
      var answer5=$("input:radio[name=fifthQuestion]:checked").val();
      var answer6=$("input:radio[name=sixthQuestion]:checked").val();
      var answer7=$("input:radio[name=seventhQuestion]:checked").val();
      var answer8=$("input:radio[name=eighthQuestion]:checked").val();
      var answer9=$("input:radio[name=ninthQuestion]:checked").val();
      var answer10=$("input:radio[name=tenthQuestion]:checked").val();
      var answer11=$("input:radio[name=eleventhQuestion]:checked").val();
      var answer12=$("input:radio[name=twelfthQuestion]:checked").val();
      var answer13=$("input:radio[name=thirteenthQuestion]:checked").val();
      var answer14=$("input:radio[name=fourteenthQuestion]:checked").val();
      var answer15=$("input:radio[name=fiftennthQuestions]:checked").val();
      var answer16=$("input:radio[name=sixteenthQuestion]:checked").val();
      var answer17=$("input:radio[name=seventeenthQuestion]:checked").val();
      var answer18=$("input:radio[name=eighteenthQuestion]:checked").val();
      var answer19=$("input:radio[name=nineteenthQuestion]:checked").val();
      var answer20=$("input:radio[name=twentiethQuestion]:checked").val();
      var finalGrade=0;
     
      var answers=[answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,answer15,answer16,answer17,answer18,answer19,answer20];
      correctionOfQuiz(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,answer15,answer16,answer17,answer18,answer19,answer20);
      console.log(answer1);
      
      
  
      
  answers.forEach(function(answer){
          if(answer===true){
              console.log(answer);
              finalGrade+=2;
          }
  });
  console.log(finalGrade);
  $("#phrase").show();
   display(finalGrade);
  $("form#quiz").hide();
  
  
  
  });
  });


// function grader(answer){
//     var finalGrade=0;
//      if(answer==true){
//         finalGrade+=2;
        
//     }
// }

function display(final){
    document.getElementById("score").innerHTML=final;
}





