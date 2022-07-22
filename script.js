// variable for each button - like the oldMoney
var oldMoney = $('.oldMoney');
// var test=$('.test');

oldMoney.on("click", oldMoneyOutfit);
var om = new Audio('om.mp3');
var ab = new Audio('ab.mp3');
var pg = new Audio('gm.mp3');
var dn = new Audio('dinner.mp3');
var mod = new Audio('mod.mp3');


function oldMoneyOutfit () {
  var oldMoneyResult=$('.oldMoneyResult');
  // Add whatever code you want to appear to the append section!
  oldMoneyResult.append(`<center><img src="oldMoney.png"></img> 
  
  <li> Top: Everlane.</li>
  <li> Tennis skirt: Relevé fashion.</li>
  <li> Sweater: Sporty and Rich.</li>
  <li> Hat : alo.</li>
  <li> Shoes: Stella McCartney.</li>
  `);
  ab.pause();
  dn.pause();
  pg.pause();
  om.play();
  mod.pause();

}

var streetStyle= $('.streetStyle');

streetStyle.on("click", streetStyleOutfit);

function streetStyleOutfit() {
  var streetStyleResult=$('.streetStyleResult');

  streetStyleResult.append(`<center><img src="streetStyle.png"></img>
  <li> Top/ bottoms : Cherry LA.</li>
  <li> Bag: Bottega Venetta.</li>
  <li> Hat: alo.</li>
  <li> Shoes:nike.</li>`);
  om.pause();
  ab.play();
  dn.pause();
  pg.pause();
  mod.pause();
}

var dinnerAtNobu= $('.dinnerAtNobu');

dinnerAtNobu.on("click", dinnerAtNobuOutfit);

function dinnerAtNobuOutfit() {
  var dinnerAtNobuResult=$('.dinnerAtNobuResult');

  dinnerAtNobuResult.append(`<center><img src="dinnerAtNobu.png"></img>
  <li> Dress:Gimaguas.</li>
  <li> Shoes: Bottega Venetta.</li>
  <li> Bag:JW PEI.</li>`);
  ab.pause();
  dn.play();
  pg.pause();
  om.pause();
  mod.pause();

}

// dinnerAtNobu.on("click", dinnerAtNobu);

var partyGirl= $('.partyGirl');

partyGirl.on("click", partyGirlOutfit);

function partyGirlOutfit() {
  var partyGirlResult=$('.partyGirlResult');

  partyGirlResult.append(`<center><img src="partyGirl.png"></img>
  <li> Top:  Stolen Stores.</li>
  <li> skirt: etsy(dupe for Orseund Iris).</li>
  <li> Heels: Veerah.</li>
  <li> Bag: JW PEI.</li>`);
  ab.pause();
  dn.pause();
  pg.play();
  om.pause();
  mod.pause();
}


// var modelOffDuty= $('.modeloffDuty');

// function modeloffDutyOutfit() {
//   var modeloffDutyResult=$('.modeloffDutyResult');
//   modelOffDutyResult.css("backgroundColor", "green");

//   modelOffDutyResult.append(`<center><img src="modeloffDuty.png"></img>
//   <li> Top/ Bottoms : Reformation.
//   <li> Shoes : By Far.</li>
//   <li> Bag : By Far.</li>
//   <li> Sunglasses : Gucci.</li>`);

// }
// modelOffDuty.on("click", modeloffDutyOutfit);


//Model Off Duty code
var testButton = $('.testButton');

function testFunction () {
  var testDiv = $('.testDiv');
  testDiv.append(`<center><img src="modelOffDuty.png"></img>
   <li> Top/ Bottoms : Reformation.
   <li> Shoes : By Far.</li>
   <li> Bag : By Far.</li>
   <li> Sunglasses : Gucci.</li>`);
  ab.pause();
  dn.pause();
  pg.pause();
  om.pause();
  mod.play();
}

testButton.on("click", testFunction);


// oldMoney.("click", oldMoneyOutfit);


//Event listener for each button 

var clearButton = $('.clearButton');
function clear () {
  location.assign("sustainstyling.html");
  ab.pause();
  dn.pause();
  pg.pause();
  om.pause();
}

clearButton.on('click', clear);
