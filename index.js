function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  
}
  BoardMemeber.prototype.veto = function() {
    return "No, I must disagree"
  };
  
  BoardMemeber.prototype.approve = function() {
    return "You can do that!"
  };
  
  BoardMemeber.prototype.doCharity = function() {
    return "I like to help people."
  };
  
  BoardMemeber.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber."
  };
  
  BoardMemeber.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}`
  };

