const Person = require('./06-person')

describe('test for person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Cosmo', 45, 1.7)

    //la constante al no poderse reescribir, se hace un LET y por cada caso de prueba estariamos creando un nuevo objeto.
  })


  test('should return down', () => {
    // const person = new Person ('Cosmo', 45, 1.7)
    person.weight = 45
    const imc = person.calcIMC();
    expect(imc).toBe('down')
  });

  test('should return normal', () => {
    // const person = new Person ('Cosmo', 59, 1.7)
    person.weight = 59
    const imc = person.calcIMC();
    expect(imc).toBe('normal')
  });
});
