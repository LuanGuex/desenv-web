const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = valorConta * (percentualGorjeta / 100);
const total = valorConta + valorGorjeta;

console.log(`Valor da Conta: R$${valorConta.toFixed(2)}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, Total a pagar: R$${total.toFixed(2)}`);