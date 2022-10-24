//alcance de las pruebas

//describe() describe el conjunto de pruebas. Sirve para encapsular y leer las pruebas de mejor manera.

//al colocarlo dentro del Describe te informa a que grupo pertenecen


//este beforeAll corre para todos.
beforeAll(() => {
  console.log('beforeAll')
  //up db. Hooks.
});

afterAll(() => {
  console.log('afterAll')
  //down db. Hooks.
});

beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

describe('Set', () => {
  test('case 1', () => {
    console.log('case 1');//en producción no se deberian tener console.log
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

});

describe('other group', () => {
  test('case 3', () => {
    console.log('case 3');//en producción no se deberian tener console.log
    expect(1 + 1).toBe(2);
  });
  test('case 4', () => {
    console.log('case 4');
    expect(1 + 3).toBe(4);
  });

})


describe('grupo 1', () => {
  beforeAll(() => {
    console.log('beforeAll')
    //up db. Hooks.
  });

  test('case 5', () => {
    console.log('case 5');//en producción no se deberian tener console.log
    expect(1 + 1).toBe(2);
  });
  test('case 6', () => {
    console.log('case 6');
    expect(1 + 3).toBe(4);
  });

});

describe('grupo 2', () => {
  test('case 7', () => {
    console.log('case 7');//en producción no se deberian tener console.log
    expect(1 + 1).toBe(2);
  });
  test('case 8', () => {
    console.log('case 8');
    expect(1 + 3).toBe(4);
  });

})
