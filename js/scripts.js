
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

let Order1 = Order();


$(document).ready(function(){
  $("#inputNumber").submit(function(event){
    event.preventDefault();

    



  });
});