# Calculadora con JavaScript + React
---

## Requerimiento

Codificar una calculadora básica.

---
## Elementos de evaluación

- Debe tener un elemento, en el que se pueda hacer clic, que represente al signo `=` con un `id = equal`
- Debe tener diez elementos, en los que se pueda hacer clic, que representen a los números del 0 al 9 con los siguientes identificadores únicos:
  - `id = zero`
  - `id = one`
  - `id = two`
  - `id = three`
  - `id = four`
  - `id = five`
  - `id = six`
  - `id = seven`
  - `id = eight`
  - `id = nine`
- Debe tener cuatro elementos, en los que se pueda hacer clic, que representen a los operadores matemáticos con los siguientes identificadores únicos:
  - `id = add`
  - `id = subtract`
  - `id = multiply`
  - `id = divide`
- Debe tener un elemento, en el que se pueda hacer clic, que represente al punto decimal `.` con un `id = decimal`
- Debe tener un elemento, en el que se pueda hacer clic, con un `id = clear`
- Debe tener un elemento para mostrar valores, con un `id = display`
- En todo momento, si se hace clic en el botón `clear` se eleminaran los valores de entrada y salida, regresar a la calculadora al estado inicial y el elemento `display` debe mostrar `0`
- Al introducir los números se deben reflejar en el elemento `display`
- Deberá ser posible ingresar los operadores mátematicos en cualquier momento con números de cualquier longitud; al presionar el signo `=` se deberá mostrar el resultado en el elemento `display`
- Al introducir números no se debe permir que el número comience con uno o varios `0`
- Cuando se haga clic en el elemento `.` se deberá agregar el punto decima; no se deberán aceptar dos puntos en un mismo número
- La aplicación debe ser capza de operar cualquier operación matemática con números que contengan decimales.
- Si se introducen dos o más operadores consecutivamente se deberá reconocer la operación del úlimo operador ingresado, con excepción del signo `-` que se reconocerá como cambio se signo del siguiente número.
- Si se ingresa un operador inmediatamente después de signo `=` se debe comenzar un nuevo cálculo con el resultado anterior como primer elemento a operar
- La presición decimal deberá ser al menos de 4 posiciones
### Determinar si la lógica de operación será inmediata o formulada
La lógica inmediata es operar cada operación en cuanto se ingresa, la lógica formulada reconoce la precedencia generalmente aceptada.

---
## Lógica de Diseño

Se pueden hacer componenetes que correspondan a botones.

Estos pueden ser diferenciados para identificar números y operadores.

Considero que la organización de los div se puede hacer con css grid.

Para la evaluación de las expresiones voy a utilizar el paquete `mathjs` el cual realiza la evaluación a partir de caracteres de texto.