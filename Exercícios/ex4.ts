function ehPrimo(numero: number): boolean {
  if (numero < 2) return false; 

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; 
    }
  }

  return true;
}
  console.log(ehPrimo(10));