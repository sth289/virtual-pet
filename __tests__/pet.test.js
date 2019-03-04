
const Pet =  require('../src/pet');

describe('constructor', () => {

  const pet = new Pet('Fido');

  it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
  }); 

  it('initial age of 0', () => {
      expect(pet.age).toEqual(0);
  });
  it('initial hunger of 0', () => {
    expect(pet.hunger).toEqual(0);
  });
  it('initial fitness of 10', () => {
    expect(pet.fitness).toEqual(10);
  });
});

describe('grow up', () => {

  const pet = new Pet('Fido');

  it('increase the hunger property by 5', () => {
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it('getting older will decrease fitness property by 3', () => {
    expect(pet.fitness).toEqual(7);
  });
  it('pet is dead', () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet died :(');
  });
});

describe('pet walk', () => {

  const pet = new Pet('fido');

  it('increases fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
  });
  it('increase fitness by to a maximum of 10', () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('pet is dead', () => {
    pet.fitness = 0;
    expect(() => pet.walk()).toThrow('Your pet died :(');
  });
});
describe('feeding pet', () => {

  const pet = new Pet('fido');

  it('keeping fed', () => {
    pet.hunger = 6;
    pet.eatingFood();
    expect(pet.hunger).toEqual(3);
  });
  it('hunger level cannot go below 0', () => {
    pet.hunger = 2;
    pet.eatingFood();
    expect(pet.hunger).toEqual(0);
  });
  it('pet is dead', () => {
    pet.hunger = 10;
    expect(() => pet.eatingFood()).toThrow('Your pet died :(');
  });
});
describe('checkUp', () => {
  const pet = new Pet('fido');

  it('if the pet fitness is 3 or less', () => {
      const pet = new Pet('fido');
      pet.fitness = 3;
      expect(pet.checkUp()).toBe('I need a walk'); 
  });
  it('if the pet hunger is 5 or more', () => {
      pet.hunger = 5;
      expect(pet.checkUp()).toBe('I am hungry'); 
  });
  it('if the pet hunger is 5 or more and fitness 3 or less', () => {
      pet.hunger = 5;
      pet.fitness = 3;
      expect(pet.checkUp()).toBe('I am hungry AND I need a walk'); 
  });
  it('if the pet hunger is 4 or less and fitness 4 or more', () => {
      pet.hunger = 4;
      pet.fitness = 4;
      expect(pet.checkUp()).toBe('I feel great!'); 
  });
  it('pet is dead', () => {
    pet.age = 30;
    pet.fitness = 0;
    pet.hunger = 10;
    expect(() => pet.checkUp()).toThrow('Your pet died :(');
  });
});
describe('check if pet is alive', () => {

  it('returns false if fitness is 0 or less', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;
      expect(pet.isAlive).toEqual(false);
  })
  it('returns false if hunger is 10 or more', () => {
      const pet = new Pet('Fido');
      pet.hunger = 15;
      expect(pet.isAlive).toEqual(false);
  })
  it('returns false if age is 30 or more', () => {
      const pet = new Pet('Fido');
      pet.age = 34;
      expect(pet.isAlive).toEqual(false);
  })
  it('returns true if neither of the above is true', () => {
      const pet = new Pet('Fido');
      pet.fitness = 6;
      pet.hunger = 7;
      pet.age = 25;
      expect(pet.isAlive).toEqual(true);
  })
});