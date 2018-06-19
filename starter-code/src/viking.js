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

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

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

//Still working a bit on this one.
// Saxon
function Saxon() {

}

// // War

// function War() {

// var vikingArmy = [];

// var saxonArmy = [];

// addViking(VikingArmy);

// addSaxon();

// vikingAttack();

// saxonAttack();

// showStatus();

// }
