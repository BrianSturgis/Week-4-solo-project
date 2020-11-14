
//  get form values
//  calculates price
//  calculates produces output

function Order(pie, sauce, firstTopping, size, updatePrice) {
  this.orderDetails = [];
  this.pie = pie;
  this.sauce = sauce;
  this.firstTopping = firstTopping;
  this.size = size;
  this.updatePrice = updatePrice;
}
Order.prototype.finalOrder = function()
// let Order1 = Order();


$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();
    let pie = $("#question1").val();
    console.log(pie);
    let sauce = $("#question2").val();
    console.log(sauce);
    let firstTopping = $("#question3").val();
    console.log(firstTopping);
    let size = $("#question4").val();
    console.log(size);
    
   
    



  });
});