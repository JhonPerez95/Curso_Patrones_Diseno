# Patrón Decorator

El patrón Decorator es un patrón de diseño estructural que permite agregar funcionalidad a un objeto existente dinámicamente sin alterar su estructura original. El patrón utiliza una clase decoradora que envuelve el objeto original y proporciona funcionalidad adicional manteniendo la interfaz del objeto original.

El patrón Decorator es útil cuando se desea agregar funcionalidad a un objeto existente de manera dinámica sin alterar su estructura original. También permite agregar múltiples capas de funcionalidad a un objeto existente. Sin embargo, el uso excesivo del patrón puede hacer que el código sea más complejo y difícil de entender.

El patrón Decorator se compone de los siguientes elementos:

- Componente: es la clase base que define la interfaz para los objetos que pueden tener responsabilidades adicionales agregadas dinámicamente.
- Decorador: es la clase base abstracta que define la interfaz para los objetos decoradores. Mantiene una referencia al objeto Componente y define una interfaz que sigue la misma firma que la clase Componente.
- Decorador Concreto: es la clase que extiende la clase Decorador y agrega responsabilidades adicionales al objeto Componente.

El patrón Decorator se utiliza comúnmente en la implementación de sistemas de ventanas, editores de texto y gráficos, donde se desea agregar funcionalidad adicional a los objetos existentes sin alterar su estructura original.
