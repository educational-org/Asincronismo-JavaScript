# Asincronismo con JavaScript

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

# EventLoop
El búcle de eventos es un patrón de diseño que espera y distribuye eventos o mesnajes en un programa. (Tarea asignada para mover del Task Queue al Stack, solo si el Stack está vacio).

### - Memory Heap:
Los objetos son asignados a un montículo (espacio grande en memoria no organizado).

### - Call Stack (Pila)
Apila de forma organizada las instrucciones de nuestro programa.

### - Task Queue
Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar al stack (pila) El stack debe estar vacio.

### - MicroTask Queue
Las promesas tiene otra forma de ejecutarse y una prioridad superior.

### Web API's
JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. 
Node: files system, https

# XMLHttp Request
Es un valor que nos permitirá manejar de mejor forma las peticiones a servidores y es fundamental para trabajar en APIS con javascript. Nos permitirá hacer estas peticiones a recursos XML o JSON.

    revisar ./src/callback/challenge.js

## Códigos de estado de respuesta HTTP
    https://developer.mozilla.org/es/docs/Web/HTTP/Status

# Promises
El Objeto Promise es usado para computaciones asíncronas. Una promesa prepresenta un valor que puede estar disponible ahora, mañana o nunca.

    revisar ./src/promise/index.js

# Async & Await
Existe una sintaxis especial para trabajar con promesas de una forma más confortable, llamada “async/await”. Es sorprendentemente fácil de entender y usar.

### Funciones async
Comencemos con la palabra clave async. Puede ser ubicada delante de una función como aquí:

    ```
    async function f() {
    return 1;
    }
    ```
La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.

### Await
La sintaxis:

    ```
    // funciona solamente dentro de funciones async
    let value = await promise;
    ```

await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

ver a detalle en ./src/async/index.js

recursos: https://es.javascript.info/async-await

# Generator
Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra reservada #yield se usa para pausar y reanudar una función generadora.

    - La estructura del Generador consta con la palabra function seguido de un asterísco * : function* ésta es una función generadora heredada.

    - El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo (string, numérico, objetos, etc) y se puede tener tantos yield que se desee.

    ```javascript
        //Declaración de la función del Generador
        function* gen(){
            yield 1;
            yield 2;
            yield 3;
        }
    ```
    Para poder iterar con el generador, se puede inicializar un valor con la función generadora:

    ```javascript
        //Expresión de la función Generadora
        const g = gen();
    ```

    Entre las propiedades del iterador está next():.

    ```javascript
        //Llamada del método next en el objeto del Generador
        console.log(g.next()); //Imprime el primer yield: {value: 1, done: false} 
    ```
    next() permite acceder a la función del generador y obtener con yield dos valores: value y el estado de done, es decir si tenemos yield 1; y mandamos a imprimir el resultado con next() obtenemos `{value: 1, done: false}’:

    - El 1 por el valor al lado derecho del primer yield.
    
    - Y done es false porque mientras haya otro yield por operar será falso.
    
    - Será true cuando se ejecute cuatro veces next() y la salida mostrará {value: undefined, done: true}. Ésto se debe a que ya no hay mas nada que mostrar, porque se mandó a imprimir un cuarto elemento y el generador solo tiene 3 yield.

    Para obtener solo el valor de value, se escribe next().value de ésta forma:

    ```javascript
        //Llamada del método next en el objeto del Generador
        console.log(g.next().value); //Imprime el primer yield: 1
        console.log(g.next().value); //Imprime el segundo yield: 2
        console.log(g.next().value); 
        console.log(g.next().value); //Si se coloca un cuarto console, la consola indica "Undefined"
    ```

https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es