var total=0;
var div= new Array();


var menuItem1 = {
  productName:"Fries",
  productPrice: 3,

  
};
var menuItem2 = {
  productName:"Burger",
  productPrice: 7.0
};
var menuItem3 = {
  productName:"Cola",
  productPrice: 2.0
};
var menuItem4 = {
  productName:"Water",
  productPrice: 1.0
};
var menu= new Array();
menu.push(menuItem1);
menu.push(menuItem2);
menu.push(menuItem3);
menu.push(menuItem4);
//alert(menu[3].productPrice+10);
var button1= document.getElementById("fries");
var division = document.getElementById("dev");
button1.onclick= function()
{
  //dev.value = "Some Value";
  division.innerHTML=menu[0].productName+"   $"+menu[0].productPrice;
  
  total=total+menu[0].productPrice;
  
  div.push(total);
  
}
var button2= document.getElementById("burger");
button2.onclick= function()
{
  division.innerHTML=menu[1].productName+"   $"+menu[1].productPrice;

  total=total+menu[1].productPrice;
  div.push(total);
  
}
var button3= document.getElementById("cola");
button3.onclick= function()
{
  division.innerHTML=menu[2].productName+"   $"+menu[2].productPrice;

  total=total+menu[2].productPrice;
  div.push(total);
  
}
var button4= document.getElementById("water");
button4.onclick= function()
{
  division.innerHTML=menu[3].productName+"   $"+menu[3].productPrice;

  total=total+menu[3].productPrice;
  div.push(total);
}
var checkout= document.getElementById("checkout");
checkout.onclick=function()
{
  division.innerHTML="Total is  $"+total;
}







  




