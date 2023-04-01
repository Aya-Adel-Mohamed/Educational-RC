"use strict";
// Loading
$(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
        $("#loading").remove();
        $("body").css("overflow", "auto");
    });
});

//Open Resourse Popup
function openResourse(){
$('#resourseBoxContainer').addClass("d-flex").removeClass("d-none");
}
$("#resourseBtn").click(openResourse);

//Open Help Popup
function openHelp(){
$('#helpBoxContainer').addClass("d-flex").removeClass("d-none");
}
$("#helpBtn").click(openHelp);

//Close Help Popup
function closeHelpBox(){
$("#helpBoxContainer").addClass("d-none").removeClass("d-flex");
}
$("#closeHelpBtn").click(closeHelpBox);

//Close Resourse Popup
function closeResourseBox(){
$("#resourseBoxContainer").addClass("d-none").removeClass("d-flex");
}
$("#closeResourseBtn").click(closeResourseBox);

// Show Answer
const correct = ['eraser','ruler','pencil','book','pen'];
$('#showBtn').click(function(){
    $('#showBtn').css('cursor','default');
    $('#showBtn').css('opacity','0.6');
    
    for (let i = 0; i < correct.length; i++){
        $('.option').eq(i).html(correct[i]+`<img src="assets/images/tikMark-small.png" class='tikmark'>`);
        $('.question-container .question').css('opacity','0.6');
        $('.question-container .question').css('background-color','#fff');
        $('.question-container .question').css('color','#000');

        $('.question-container .question').eq(1).css('opacity','0');
        $('.question-container .question').eq(2).css('opacity','0');
        $('.question-container .question').eq(5).css('opacity','0');
        $('.question-container .question').eq(6).css('opacity','0');
        $('.question-container .question').eq(7).css('opacity','0');
        $('.question-container .question').addClass('disable-div');
    }
})

// relplay Again
function replayAgain(){
$('.question-container .question').removeClass('disable-div');
$('.option').html(`&nbsp;`);

$('.question-container .question').css('opacity','1');
$('.question-container .question').css('background-color','#fff');
$('.question-container .question').css('color','#000');
$('#showBtn').css('cursor','pointer');
$('#showBtn').css('opacity','1');
}
$('#replayBtn').click(replayAgain)

// get Answer
function getAnswer(){
var answer = $(".question-container span");

for(let i=0; i<answer.length;i++){
    answer.eq(i).click(function(){
        
        var displayAns= answer.eq(i).html();
        $('.question-container .question').eq(i).css('background-color','#0fa0c5');
        $('.question-container .question').eq(i).css('color','#fff');
        $('.question-container .question').eq(i).siblings().css('background-color','#fff');
        $('.question-container .question').eq(i).siblings().css('color','#000');
       
       var options = $(".option");
       for(let j=0; j<options.length;j++){
       $('.option').removeClass('disable-div');
        
        options.eq(j).click(function(){
            var displayOpt = options.eq(j).html(displayAns);
            if(displayOpt.html() ==='eraser' || displayOpt.html()==='ruler' || displayOpt.html()==='pencil' || displayOpt.html()==='book'||displayOpt.html()==='pen' ){
                $('.option').eq(j).html(displayOpt.html()+`<img src="assets/images/tikMark-small.png" class='tikmark'>`);
                $('.question-container .question').eq(i).css('opacity','0');
                $('.question-container .question').eq(i).addClass('disable-div');
                $('.option').addClass('disable-div');

                $('#audioCorrect').attr('src','assets/audio/success-1-6297.mp3');
                $('#audioCorrect')[0].play();
                
            }else{
                $('.option').removeClass('disable-div');
                $('.option').eq(j).html(displayOpt.html()+`<img src="assets/images/xmark_small.jpeg" class='xmark'>`);
                    $('.option .xmark').animate({'opacity':'0'},300).delay(100).animate({'opacity':'1'},500,function(){
                    $('.option').eq(j).html('&nbsp;');
                })
                $('#audioCorrect').attr('src','assets/audio/mixkit-wrong-answer-bass-buzzer-948.wav');
                $('#audioCorrect')[0].play();
            }
        })
       }
    })
}
}
getAnswer();




