

// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (strength) {
  this.health -= strength;
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype); //Inherited
Viking.prototype.constructor = Viking; //Inherited

Viking.prototype.attack = function () {
  return this.strength;
}

Viking.prototype.receiveDamage = function (strength) {
  this.health -= strength;
  if (this.health > 0) {
    return this.name + " has received " + strength + " points of damage";
  }
  else {
    return this.name + " has died in act of combat";
  }
}

Viking.prototype.battleCry = function () {
  return 'Hark owns you all!'
}

//Still working a bit on this one.
// Saxon
function Saxon(health, strength) {
  Soldier.call.(this, health, strength);

  Saxon.prototype = Object.create(Soldier.prototype); //Inherited
  Saxon.prototype.constructor = Saxon; //Inherited

}

// // War

function War() {
  this.VikingArmy = [];
  this.SaxonArmy = [];
}

War.prototype.addViking = function (vikingToAdd) {
  this.VikingArmy.push(vikingToAdd);
}

War.prototype.addSaxon = function (SaxonToAdd) {
  this.SaxonArmy.push(SaxonToAdd);
}


War.prototype.vikingAttack = function () {
  var vikIndex = Math.floor(Math.random() * this.VikingArmy.length);
  var saxIndex = Math.floor(Math.random() * this.SaxonArmy.length);
  var randViking = this.VikingArmy[vikIndex];
  var randSaxon = this.SaxonArmy[saxIndex];

  randSaxon.receiveDamage(randViking.attack())
  var result = randSaxon.receiveDamage(randViking.attack())
  if (randSaxon.health <= 0) {
    this.SaxonArmy.splice(saxIndex, 1);
  }

  War.prototype.showStatus = function () {
    if (this.VikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    }
    if (this.SaxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    return "Vikings and Saxons are still in the thick of battle."

  }
}
