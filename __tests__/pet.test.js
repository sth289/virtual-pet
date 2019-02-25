
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
});