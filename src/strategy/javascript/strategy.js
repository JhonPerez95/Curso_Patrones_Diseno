class SaleContext {
  constructor(strategy) {
    this.strategy = strategy
  }

  calculate(amount) {
    return this.strategy.calculate(amount)
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }
}

// Estrategia de venta regular
class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax
  }

  calculate(amount) {
    return amount + amount * this.tax
  }
}

// Estrategia de venta promocional
class PromoSaleStrategy {
  constructor(tax, desc) {
    this.tax = tax
    this.desc = desc
  }
  calculate(amount) {
    return amount + amount * this.tax - this.desc
  }
}

// creamos una instancia de la estrategia venta regular
const regularSaleStrategy = new RegularSaleStrategy(0.19)

// creamos una instancia de la estrategia descuento
const promoSaleStrategy = new PromoSaleStrategy(0.19, 10)

// creamos una instancia del contexto
const saleContext = new SaleContext(regularSaleStrategy)

console.log('Calculo venta regular: ', saleContext.calculate(100))

// cambiamos la estrategia
saleContext.setStrategy(promoSaleStrategy)

console.log('Calculo venta regular + promo: ', saleContext.calculate(100))
