const beerArray = [
  {
    name: 'Heineken',
    info: 'Una cerveza refrescante de los Países Bajos',
    country: 'Países Bajos',
    imageUrl:
      'https://supertiendascomunal.com/2926-medium_default/cerveza-heineken-botella-330-ml.jpg',
  },
  {
    name: 'Guinness',
    info: 'Cerveza negra irlandesa con un sabor característico',
    country: 'Irlanda',
    imageUrl:
      'https://www.avaloncinerock.com/cdn/shop/products/png-transparent-guinness-beer-stout-harp-lager-ale-beer-alcohol-by-volume-beer-flavor-removebg-preview_547x.png?v=1679788615',
  },
  {
    name: 'Corona',
    info: 'Cerveza mexicana con un toque de lima',
    country: 'México',
    imageUrl:
      'https://santacostilla.co/wp-content/uploads/2020/05/cerveza-corona-extra-santa-costilla.jpg',
  },
  {
    name: 'Budweiser',
    info: 'Cerveza estadounidense conocida por su sabor suave',
    country: 'Estados Unidos',
    imageUrl:
      'https://santacostilla.co/wp-content/uploads/2020/05/cerveza-budweiser-santa-costilla.jpg',
  },
]

class BeerContext {
  constructor(strategy, beerArray, element) {
    this.strategy = strategy
    this.beerArray = beerArray
    this.element = element
    this.setStrategy(strategy)
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  showBeer() {
    this.strategy.showBeer(this.beerArray, this.element)
  }
}

//  Estrategy para mostrar lista
class ListBeerStrategy {
  constructor() {}

  showBeer(beerArray, element) {
    element.innerHTML = beerArray.reduce((acc, beer) => {
      return (
        acc +
        `
        <div class="card">
          <div class="card-header">
            <h2>${beer.name}</h2>
          </div>
          <div class="card-body">
            <p>${beer.country}</p>
          </div>
          <hr>
      `
      )
    }, '')
  }
}

//  Estrategy para mostrar en detalle

class DetalleBeerStrategy {
  showBeer(beerArray, element) {
    element.innerHTML = beerArray.reduce((acc, beer) => {
      return (
        acc +
        `
        <div class="card">
          <div class="card-header">
            <h2>${beer.name}</h2>
          </div>
          <div class="card-body">
            <p>${beer.info}</p>
          </div>
          <hr>
      `
      )
    }, '')
  }
}
//  Estrategy para mostrar en imagen
class ImageBeerStrategy {
  showBeer(beerArray, element) {
    element.innerHTML = beerArray.reduce((acc, beer) => {
      return (
        acc +
        `
        <div class="card">
          <div class="card-header">
            <h2>${beer.name}</h2>
          </div>
          <div class="card-body">
          <img src="${beer.imageUrl}" alt="${beer.name}"  width="10%"/>
          </div>
          <hr>
      `
      )
    }, '')
  }
}
// creamos una instancia de la estrategia
const arrStrategy = [
  new ListBeerStrategy(),
  new DetalleBeerStrategy(),
  new ImageBeerStrategy(),
]

// creamos una instancia del contexto y le pasamos la estrategia
slcOptions.addEventListener('change', (event) => {
  const opt = event.target.value
  const beerContext = new BeerContext(arrStrategy[opt], beerArray, root)
  beerContext.showBeer()
})
