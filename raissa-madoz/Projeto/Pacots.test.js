const {
  taxas_contratuais
} = require('./caminho/do/arquivo');

// Função premium
function isPacotePremium(pacote) {
  return taxas_contratuais[pacote] === 1.5;
}

// função basic
function isPacoteBasico(pacote) {
  return taxas_contratuais[pacote] === 1.1;
}

//pacote_premium
test('O pacote premium deve ter uma taxa contratual de 15%', () => {
  const pacote = 'pacote_premium';
  expect(isPacotePremium(pacote)).toBe(true);
});

// pacote_básico
test('O pacote básico deve ter uma taxa contratual de 10%', () => {
  const pacote = 'pacote_basico';
  expect(isPacoteBasico(pacote)).toBe(true);
});
