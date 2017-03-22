'use strict';
var wizObjectArray = [];
var diceImages = ['icons/one.png','icons/two.png','icons/three.png','icons/four.png','icons/five.png','icons/six.png'];
function wizCard(data){
  this.name = data.name;
  this.img = data.img;
  this.id = data.id;
  this.effectText = data.effectText;
  this.dice = [];
  for (var i = 0; i < data.dice.length; i++) {
    switch (data.dice[i]) {
    case 'redFocus':
      this.dice.push('icons/blank.jpg','icons/leaf.png','icons/water.png','icons/fire.jpg','icons/fire.jpg','icons/doubleFire.png');
      break;
    case 'blueFocus':
      this.dice.push('icons/blank.jpg','icons/fire.jpg','icons/leaf.png','icons/water.png','icons/water.png','icons/doubleWater.png');
      break;
    case 'greenFocus':
      this.dice.push('icons/blank.jpg','icons/fire.jpg','icons/water.png','icons/leaf.png','icons/leaf.png','icons/doubleLeaf.png');
      break;
    case 'redGreenHybrid':
      this.dice.push('icons/blank.jpg','icons/fire.jpg','icons/fire.jpg','icons/leaf.png','icons/leaf.png','icons/fireLeaf.jpg');
      break;
    case 'redBlueHybrid':
      this.dice.push('icons/blank.jpg','icons/fire.jpg','icons/fire.jpg','icons/water.png','icons/water.png','icons/fireWater.jpg');
      break;
    case 'greenBlueHybrid':
      this.dice.push('icons/blank.jpg','icons/leaf.png','icons/leaf.png','icons/water.png','icons/water.png','icons/leafWater.png');
      break;
    case 'chaos':
      this.dice.push('icons/blank.jpg','icons/blank.jpg','icons/fire.jpg','icons/leaf.png','icons/water.png','icons/rainbowpower.jpg');
      break;
    }
  }
  console.log(this);
}
wizCard.prototype.toHtml = function(){
  var source = $('#wizard-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

// portSetup();
rawData.forEach(function(i) {
  wizObjectArray.push(new wizCard(i));
});
wizObjectArray.forEach(function(i) {
  $('#cardHolder').append(i.toHtml());
  for (var x = 0; x < 6; x++) {
    $(`#${i.id} .titleHolder`).append($('<td/>')
    .addClass('square')
  );
  }
  i.dice.forEach(function(j, n){
    if (n < 6){
      $(`#${i.id} .diceOne`).append($('<img/>')
      .addClass('square')
      .attr('src',j)
      );
      $(`#${i.id} .diceOne`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n])
    );
  } else if (n >= 6 && n < 12){
      $(`#${i.id} .diceTwo`).append($('<img/>')
      .addClass('square')
      .attr('src',j)
      );
      $(`#${i.id} .diceTwo`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n - 6])
    );
  } else {
      $(`#${i.id} .diceThree`).append($('<img/>')
      .addClass('square')
      .attr('src',j)
      );
      $(`#${i.id} .diceThree`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n - 12])
    );
  }
  });
});
//code heavily drawn from http://stackoverflow.com/questions/10619445/the-prefeicons/fire.jpg-way-of-creating-a-new-element-with-jquery
