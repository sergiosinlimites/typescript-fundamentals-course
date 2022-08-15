(()=>{
  const calTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((price) => {
      total += price
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const total = calTotal(prices);
    console.log(total)
  }

  printTotal([1,12,34,56]);

})();
