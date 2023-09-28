## Patron Strategy
- Es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

- El patrón Strategy sugiere que debes tomar una clase que realiza una de las muchas tareas posibles y extraer todos estos algoritmos a una serie de clases separadas llamadas estrategias.

- La clase original, llamada contexto, debe tener un campo para almacenar una referencia a uno de los objetos de estrategia. El contexto delega el trabajo al objeto de estrategia que debe usarse, en lugar de ejecutarlo por su cuenta.