$(document).ready(function(){
  $("#triangle-form").submit(function(event){
    event.preventDefault();

    var side1 = Number($('#side-1').val());
    var side2 = Number($('#side-2').val());
    var side3 = Number($('#side-3').val());
    // alert('hi');
    function triangle(){
      if ((side1 + side2 < side3) || (side2 + side3 < side1) || (side1 + side3 < side2)) {
        $(".user-output").text("What are you? Because you are definitely not a triangle!");
      } else if ((side1 === side2 && side1 !== side3) || (side2 === side3 && side2 !== side1) || (side3 === side1 && side3 !== side1)) {
        $(".user-output").text("You are an Isosceles!");
      } else if (side1 !== side2 !== side3) {
        $(".user-output").text("You are a Scalene!");
      } else if (side1 === side2 && side1 === side3 && side2 === side3) {
        $(".user-output").text("You are an Equilateral!");
      }
    }
    triangle();
    console.log(side1 + side2 + side3);
  });
});
