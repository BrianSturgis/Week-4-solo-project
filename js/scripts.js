
//  get form values
//  calculates price
//  calculates produces output

function Order(pie, sauce, firstTopping, size) {
  this.pie = pie;
  this.sauce = sauce;
  this.firstTopping = firstTopping;
  this.size = size;
}

Order.prototype.finalCost = function(){
  
};


$(document).ready(function(){ 
  $("form#questions").submit(function(event){
    event.preventDefault();
    let pie = parseInt($("#question1").val());
    let sauce = parseInt($("#question2").val());
    let firstTopping = parseInt($("#question3").val());
    let size = parseInt($("#question4").val());
    let cost = new Order(pie, sauce, firstTopping, size);
    console.log(cost);
   
  });
});