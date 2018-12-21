function correctionOfQuiz(){
    if(answer1==="d"){
        answer1=true;

    }
    if(answer2==="d"){
        answer2=true;
    }
    if(answer3==="c"){
        answer3=true;
    }
    if(answer4==="a"){
        answer4=true;
    }
    if(answer5==="c"){
        answer5=true;
    }
    if(answer6==="d"){
        answer6=true;
    }
    if(answer7==="b"){
        answer7=true;
    }
    if(answer8==="c"){
        answer8=true;
    }
    if(answer9==="a"){
        answer9=true;
    }
    if(answer10==="b"){
        answer10=true;
    }
    if(answer11==="b"){
        answer11=true;
    }
    if(answer12==="b"){
        answer12=true;
    }
    if(answer13==="d"){
        answer13=true;
    }
    if(answer14==="d"){
        answer14=true;
    }
    if(answer15==="a"){
        answer15=true;
    }
    if(answer16==="c"){
        answer16=true;
    }
    if(answer17==="d"){
        answer17=true;
    }
    if(answer18==="d"){
        answer18=true;
    }
    if(answer19==="c"){
        answer19=true;
    }
    if(answer20==="c"){
        answer20=true;
    }
}
function grader(answer){
    if(answer==true){
        finalGrade+=2;
    }
}






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
    correctionOfQuiz();

    var answers=[answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,answer15,answer16,answer17,answer18,answer19,answer20];
answers.forEach(function(answer){
        grader(answer);
});
$("#phrase").show();



});
});