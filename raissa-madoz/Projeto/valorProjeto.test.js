const {
  test('O valor total de um projeto deve ser calculado corretamente', () => {
    const funcionalidades = ['setup', 'formulario', 'responsividade'];
    const pacote = 'pacote_intermediario';
    const valorEsperado = (8 + 16 + 16) * 1.2; // Total de horas esperadas xs taxa contratual 
    expect(calcularValorTotalProjeto(funcionalidades, pacote)).toBe(valorEsperado);
  });
  