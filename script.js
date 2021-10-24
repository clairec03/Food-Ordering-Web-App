var Stock1 = 10;
var Stock2 = 10;
var Stock3 = 10;
var Stock4 = 10;
var Stock5 = 10;

var Order1 = 0;
var Order2 = 0;
var Order3 = 0;
var Order4 = 0;
var Order5 = 0;
var OrderTot = 0;
/* when get menu,,, make more getElementById's*/
var PlusOne = document.getElementById("P1");
PlusOne.addEventListener("click", AddOrder1);
var MinusOne = document.getElementById("M1");
MinusOne.addEventListener("click", SubOrder1);
var PlusOne = document.getElementById("P2");
PlusOne.addEventListener("click", AddOrder2);
var MinusOne = document.getElementById("M2");
MinusOne.addEventListener("click", SubOrder2);
var PlusOne = document.getElementById("P3");
PlusOne.addEventListener("click", AddOrder3);
var MinusOne = document.getElementById("M3");
MinusOne.addEventListener("click", SubOrder3);
var PlusOne = document.getElementById("P4");
PlusOne.addEventListener("click", AddOrder4);
var MinusOne = document.getElementById("M4");
MinusOne.addEventListener("click", SubOrder4);
var PlusOne = document.getElementById("P5");
PlusOne.addEventListener("click", AddOrder5);
var MinusOne = document.getElementById("M5");
MinusOne.addEventListener("click", SubOrder5);
var CheckOut = document.getElementById("CheckOut");
var OrderNum = document.getElementById("OrderNum");

function AddOrder1(){
  if(Order1 < 5){
    Order1 += 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
    if(OrderTot > 5){
      OrderNum.innerHTML = "You have ordered too many items, please subtract from your order.";
    }
  }
  if(OrderTot > 0){
    CheckOut.innerHTML = "Checkout?";
  }
}

function SubOrder1(){
  if (Order1 > 0){
    Order1 -= 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered " +OrderTot+ " items";
  }
}
function AddOrder2(){
  if(Order2 < 5){
    Order2 += 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
    if(OrderTot > 5){
      OrderNum.innerHTML = "You have ordered too many items, please subtract from your order.";
    }
  }
  if(OrderTot > 0){
    CheckOut.innerHTML = "Checkout?";
  }
}
function SubOrder2(){
  if (Order2 > 0){
    Order2 -= 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
  }
}
function AddOrder3(){
  if(Order3 < 5){
    Order3 += 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
    if(OrderTot > 5){
      OrderNum.innerHTML = "You have ordered too many items, please subtract from your order.";
    }
  }
  if(OrderTot > 0){
    CheckOut.innerHTML = "Checkout?";
  }
}
function SubOrder3(){
  if (Order3 > 0){
    Order3 -= 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
  }
}
function AddOrder4(){
  if(Order4 < 5){
    Order4 += 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
    if(OrderTot > 5){
      OrderNum.innerHTML = "You have ordered too many items, please subtract from your order.";
    }
  }
  if(OrderTot > 0){
    CheckOut.innerHTML = "Checkout?";
  }
}
function SubOrder4(){
  if (Order4 > 0){
    Order4 -= 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
  }
}
  function AddOrder5(){
  if(Order5 < 5){
    Order5 += 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
    if(OrderTot > 5){
      OrderNum.innerHTML = "You have ordered too many items, please subtract from your order.";
    }    
  }
  if(OrderTot > 0){
    CheckOut.innerHTML = "Checkout?";
  }
}
function SubOrder5(){
  if (Order5 > 0){
    Order5 -= 1;
    OrderTot = (Order1+Order2+Order3+Order4+Order5);
    OrderNum.innerHTML = "You have ordered "+OrderTot+" items";
  }
}

function add() {
    var num = document.getElementById("mynum").value;
    if(num == '') num = 0;
    document.getElementById("mynum").value = parseInt(num ,10) + 1;
    }
$("#button").click(add);
// --- Utils ---

function throttle (callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
        }, limit);
      }
    }
}

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    // Don't add more than once
    if (element.className.indexOf(className) === -1) {
      element.className += ' ' + className;
    }
  }
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function getHeight(originalElement) {
  // Calculate height based on *cloned* element to avoid messing up styles
  var element = originalElement.cloneNode(true);
  originalElement.parentNode.replaceChild(element, originalElement);

  // Set styles to make sure it's going to calculate the correct height
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';

  var desiredHeight = element.offsetHeight;

  // Replace the cloned element with the original one
  element.parentNode.replaceChild(originalElement, element);

  return desiredHeight;
}

function slideDown(originalElement) {
  var desiredHeight = getHeight(originalElement);
  setTimeout(function(timestamp) {
    originalElement.style.height = desiredHeight + 'px';
  }, 1);
}

function slideUp(originalElement) {
  // Can't transition from an auto height, so make sure it's explicit
  var currentHeight = getHeight(originalElement);
  originalElement.style.height = currentHeight + 'px';
  setTimeout(function(timestamp) {
    originalElement.style.height = 0 + 'px';
  }, 1);
}

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
