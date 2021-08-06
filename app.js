var one = $(".one");
var two = $(".two");
var three = $(".three");
var four = $(".four");
var five = $(".five");

class Active {
    constructor(question){
        question.click(function(){
            $(this).find("h3").toggleClass("active");
            $(this).find("p").slideToggle(500);
            $(this).find(".arrow").toggleClass("rotate");
        })
    }
}
new Active (one);
new Active (two);
new Active (three);
new Active (four);
new Active (five);