const { dias_uteis } = require('./caminho/do/arquivo');

test('O número de dias úteis no mês deve ser 22', () => {
  expect(dias_uteis).toBe(22);
});