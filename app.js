'use strict';
var wizObjectArray = [];
var diceImages = ['icons/one.png','icons/two.png','icons/three.png','icons/four.png','icons/five.png','icons/six.png'];
function wizCard(data){
  this.name = data.name;
  this.img = data.img;
  this.id = data.id;
  this.effectText = data.effectText;
  this.dice = [];
  this.colors = [];
  for (var i = 0; i < data.dice.length; i++) {
    switch (data.dice[i]) {
    case 'redFocus':
      this.dice.push('icons/blank.png','icons/leaf.png','icons/water.png','icons/fire.png','icons/fire.png','icons/doubleFire.png');
      this.colors.push('red');
      break;
    case 'blueFocus':
      this.dice.push('icons/blank.png','icons/fire.png','icons/leaf.png','icons/water.png','icons/water.png','icons/doubleWater.png');
      this.colors.push('blue');
      break;
    case 'greenFocus':
      this.dice.push('icons/blank.png','icons/fire.png','icons/water.png','icons/leaf.png','icons/leaf.png','icons/doubleLeaf.png');
      this.colors.push('green');
      break;
    case 'redGreenHybrid':
      this.dice.push('icons/blank.png','icons/fire.png','icons/fire.png','icons/leaf.png','icons/leaf.png','icons/fireLeaf.png');
      this.colors.push('yellow');
      break;
    case 'redBlueHybrid':
      this.dice.push('icons/blank.png','icons/fire.png','icons/fire.png','icons/water.png','icons/water.png','icons/fireWater.png');
      this.colors.push('purple');
      break;
    case 'greenBlueHybrid':
      this.dice.push('icons/blank.png','icons/leaf.png','icons/leaf.png','icons/water.png','icons/water.png','icons/leafWater.png');
      this.colors.push('cyan');
      break;
    case 'chaos':
      this.dice.push('icons/blank.png','icons/blank.png','icons/fire.png','icons/leaf.png','icons/water.png','icons/rainbowpower.png');
      this.colors.push('white');
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
      .attr('style',`background-color: ${i.colors[0]}`)
      );
      $(`#${i.id} .diceOne`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n])
    );
  } else if (n >= 6 && n < 12){
      $(`#${i.id} .diceTwo`).append($('<img/>')
      .addClass('square')
      .attr('src',j)
      .attr('style',`background-color: ${i.colors[1]}`)
      );
      $(`#${i.id} .diceTwo`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n - 6])
    );
  } else {
      $(`#${i.id} .diceThree`).append($('<img/>')
      .addClass('square')
      .attr('src',j)
      .attr('style',`background-color: ${i.colors[2]}`)
      );
      $(`#${i.id} .diceThree`).append($('<img/>')
      .addClass('diceIcon')
      .attr('src',diceImages[n - 12])
    );
  }
  });
});
//code heavily drawn from http://stackoverflow.com/questions/10619445/the-prefeicons/fire.png-way-of-creating-a-new-element-with-jquery
