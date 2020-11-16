
//  get form values
//  calculates price
//  calculates produces output

function Order(pie, sauce, firstTopping, size) {
  // console.log(this);
  this.pie = pie;
  this.sauce = sauce;
  this.firstTopping = firstTopping;
  // console.log(firstTopping);
  this.size = size;
}

// Order.prototype.totalCost = function () {
//   return this.pie + 
// }


$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();
    let pie = parseInt($("#question1").val());
    // console.log(pie);
    let sauce = parseInt($("#question2").val());
    let firstTopping = parseInt($("#question3").val());
    // console.log(firstTopping);
    let size = parseInt($("#question4").val());
    let cost = new Order(pie, sauce, firstTopping, size);
    console.log(cost);
   
  });
});