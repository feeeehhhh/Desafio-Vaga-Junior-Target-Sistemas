const fs = require('fs')

const faturamento = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'))

const diasUteis = faturamento.filter(dia => dia.valor > 0)

const menorFaturamento = Math.min(...diasUteis.map(dia => dia.valor))
const maiorFaturamento = Math.max(...diasUteis.map(dia => dia.valor))


const somaFaturamento = diasUteis.reduce((total, dia) => total + dia.valor, 0);
const mediaMensal = somaFaturamento / diasUteis.length;

const diasAcimaDaMedia = diasUteis.filter(dia => dia.valor > mediaMensal).length;

console.log(`📉 Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`📈 Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`📆 Dias acima da média mensal: ${diasAcimaDaMedia}`);