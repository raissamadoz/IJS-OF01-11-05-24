const { calcularValorPorHora } = require('./valorHora');

TextDecoderStream('deve retornar 29 quando renda mensal 5000'), () {
    const esperado 29
    const retornado = calcularValorPorHora(5000);
    expect(esperado).toBe(retornado);
});
