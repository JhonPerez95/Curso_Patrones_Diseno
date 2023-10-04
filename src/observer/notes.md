# Patron de diseño Observer

## Introducción

Este patrón de diseño es uno de los más utilizados en el desarrollo de software, ya que permite la comunicación entre objetos de una forma muy sencilla. El patrón Observer es un patrón de comportamiento, es decir, que se encarga de la comunicación entre objetos, definiendo una dependencia uno a muchos entre los objetos, de manera que cuando un objeto cambie su estado, notifique a todos los objetos que dependen de él.

- **Sujeto:** Es el objeto que contiene la información y los métodos necesarios para notificar a los observadores sobre los cambios de estado.

- **Observador:** Es la interfaz que define los métodos de actualización que se llamarán cuando el sujeto cambie de estado.
