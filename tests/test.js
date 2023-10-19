const suma = (a, b) => {
  return a + b;
};

test('2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});

const resta = (a, b) => {
  return a - b;
};

test('1 - 1 es igual a 0', () => {
  expect(resta(1, 1)).toBe(0);
});

const multiplicar = (a, b) => {
  return a * b;
};

test('5 * 5 es igual a 1 (Error)', () => {
  expect(multiplicar(5, 5)).toBe(1);
});

const dividir = (a, b) => {
  return a / b;
};

test('1 / 1 es igual a 1 ', () => {
  expect(dividir(1, 1)).toBe(1);
});

