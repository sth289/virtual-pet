
function Pet(name) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10; 
  
  }
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const maximumFitness = 10
    const petFitness = 4
    if ((this.fitness + petFitness ) <= maximumFitness ) {
        this.fitness += petFitness;
    } else {
        this.fitness = maximumFitness;
    }
}

module.exports = Pet;