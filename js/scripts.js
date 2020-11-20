function Order(pie, sauce, firstTopping, size) {
  this.pie = pie;
  this.sauce = sauce;
  this.firstTopping = firstTopping;
  this.size = size;
  this.totalPrice = 0;
}
Order.prototype.finalCost = function(){
  this.totalPrice = this.pie + this.sauce + this.firstTopping + this.size
}
$(document).ready(function(){ 
  $("form#questions").submit(function(event){
    event.preventDefault();
    let pie = parseInt($("#question1").val());
    let sauce = parseInt($("#question2").val());
    let firstTopping = parseInt($("#question3").val());
    let size = parseInt($("#question4").val());
    let pizza = new Order(pie, sauce, firstTopping, size);
    pizza.finalCost();
    $("#message-price").text(pizza.totalPrice);
  });
});