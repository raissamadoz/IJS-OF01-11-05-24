const {
    max_hrs_pacote,
    txs_contratuais,
    horas
  } = require('./caminho/do/arquivo');
  
  // Função para calcular as horas totais por pacote
  function calcularHorasPorPacote(pacote) {
    const maxHoras = max_hrs_pacote[pacote];
    const taxaContratual = txs_contratuais[pacote];
    let horasTotais = 0;
    for (const funcionalidade in horas) {
      horasTotais += horas[funcionalidade];
    }
    return horasTotais * taxaContratual;
  }
  
  // Teste para verificar as horas totais por pacote
  test('As horas totais para um pacote devem ser calculadas corretamente', () => {
    const pacote = 'pacote_intermediario';
    const horasEsperadas = (8 + 16 + 16 + 8 + 16) * 1.2; // Total de horas esperadas considerando todas as funcionalidades e a taxa contratual
    expect(calcularHorasPorPacote(pacote)).toBe(horasEsperadas);
  });