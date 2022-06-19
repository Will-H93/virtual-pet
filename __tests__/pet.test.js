const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    })
});

describe('growUp', () => {
  it('increments the age by 1, hunger by 5 and decreases fitness by 3', () => {
    const pet = new Pet('Fido');
    
    pet.growUp();
    
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('increments fitness by 4 or equals maximun fitness if fitness will be greater than 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('increments hunger backwards by 3 unless it is less than or equal to 0, then it equals minimum hunger', () => {
    const pet = new Pet('fido');

    pet.hunger = -1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  })
})

describe('checkUp', () => {
  it('checks if pet either needs a walk, is hungry, both or neither', () => {
    const pet = new Pet('fido');

    pet.hunger = 6
    pet.fitness = 2
    pet.checkUp()

    if (pet.fitness <= 3 && this.hunger <= 4 ) {
      expect(pet.wellness).toEqual('I need a walk')
    }
    if (pet.hunger >= 5 && this.fitness >= 4) {
      expect(pet.wellness).toEqual('I am hungry')
    }
    if ((pet.hunger >= 5) && (pet.fitness <= 3)) {
      expect(pet.wellness).toEqual('I am hungry AND I need a walk')
    }
    if ((pet.hunger <= 4) && (pet.fitness >= 4)) {
      expect(pet.wellness).toEqual('I feel great')
    }

    
  })
})