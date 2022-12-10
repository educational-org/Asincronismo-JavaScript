# Asincronismo con JavaSCript

## Aprenderemos:

la importancia del uso de este concepto en JS. Las principales elementos que tiene JS para manejar el asincronismo:

- Callbacks
- Promesas
- Async/await
- Tendremos un proyecto aplicando lo aprendido, usaremos HTML, CSS y JS además de desplegarlo.

## ¿Qué es el Asincronismo?
Los lenguajes de programación por si mismo son sincrónos, es decir, implementan, tarea después de otra tarea. JavaScript es síncrono por defecto y tiene un solo subproceso, un solo hilo para trabajar.

JavaSCript es síncrono y no bloqueante con un bluche de eventos que maneja la concurrencia. implementando con un único hilo para sus interefaces de entrada y salida (inputs y outputs)

### JavaScript es Single-Threaded

Aún con multiples procesadores solo se puede ejcutar tareas en un solo hilo llamado el hilo principal.

* Bloqueante:
Una tarea no devuelve el control hasta que se ha completado.

* No Bloqueante:
Una tarea se devuelve inmediantamente con independecia del resultado. si se completó devuelve los datos. Si no, un error.

* Síncrono:
Las tareas se ejecutan de forma secuencial, sebe esperar a que se complete para continuar con la siguiente tarea.

* Asíncrono:
Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido.

* Concurrencia en JavaScript:
Utiliza un modelo de concurrencia basado en un "loop de eventos" llamado EVENT LOOP.

* EventLoop:
El búcle de eventos es un patrón de diseño que espera y distribuye eventos o mesnajes en un programa.

## Formas de manejar la Asincronia

- Callbacks: una función que se pasa como argumento de otra función y que será invocada.

- Promesas...(ES6) Función no-bloqueante y asíncrona la cual puede retornar un valor ahora, mañana o nunca.

- Async / Await (ES2017) Permiteestructurar una función asíncrona sin bloqueo de una manera similar a una función sincrónica ordinaria.

JavaScript acaba de convertirse en Multi-Threaded(Multi-Hilo) con la capacidad de realizar múltiples tareas simultáneamente.

JavaScript ahora sería: asíncrono y no bloqueante, con un bucle de eventos (concurrencia) implementado con un unico hilo para sus interfaces de inputs y outputs.

