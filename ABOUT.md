# Kelisto challenge

## Ejecución del proyecto

* Desde un terminal instalamos las librerías necesarias para el proyecto con `npm install`
* Al finalizar, lanzamos `npm start` y tendremos el proyecto disponible en http://localhost:3000/


## Enfoque y arquitectura

Para realizar la prueba me he basado en el patrón de arquitectura hexagonal, con algunas leves modificaciones basadas en mi experiencia del uso de este tipo de arquitectura en proyectos front.

El proyecto está separado en tres grandes bloques principales:
* domain
* infrastructure
* ui

### `domain`
En la capa de domain definimos los dominios propios con los que vamos a trabajar dentro de la aplicacion, será nuestro lenguaje de negocio.

Fue de las primeras cosas en las que me centré después de crearme el template y hacer varias configuraciones.

Mirando el diseño identifiqué dos potenciales entidades de dominio, la entidad `Cryto` y la entidad `Wallet`, además de construir el tipado para la respuesta que devuelve el api `CryptoApi`.


### `infrastructure`
La capa de infraestructura posee servicios y adaptadores como elementos principales.

En los servicios vamos a realizar las peticiones para obtener la api (en este caso api fake) y realizamos diferentes operaciones de lógica de negocio junto con los adaptadores.

Estos últimos juegan un papel muy importante, puesto que son los encargados de traducir la estructura del api (`CryptoApi`) en el lenguaje que hablan nuestras entidades de dominio, que posteriormente envía diferentes datos a la capa de ui.


### `ui`
La capa de ui contiene los diferentes componentes que conforman las pantallas, esta capa es el único lugar de la aplicación donde se usa `React`, aislando asi las otras dos capas del framework de javascript que hayamos decidido usar.

En esta capa hay varias carpetas principales:
* components: componentes genéricos que se usan en varios lugares de la aplicación.
* hooks: custom hooks de react.
* pages: carpeta donde se localizan las páginas que contienen diferentes componentes, en el caso de esta prueba solo tenemos la `WalletHome`.
* styleTokens: carpeta donde definimos los distintos tokens de diseño que vamos a usar en nuestras pantallas.


El flujo de comunicación de la aplicación sería el siguiente:
* Desde la capa de `ui` nos comunicamos con la capa de `infraestructura` mediante los `custom hooks`.
* Los servicios consumen el `api` y transforman los datos recibidos al `dominio` correspondiente mediante `adaptadores`.
* Los `adaptadores` devuelven la información al `custom hook`, el cual expone los datos a la pantalla para representarlos como necesitemos.

## Tecnologías usadas
La base del proyecto esta construida sobre `CRA` con el flag de `Typescript` activado.

Antes de empezar la implementación hice un setup básico configurando el linter y prettier con ciertas reglas definidas en el fichero `.eslintrc.json`.

Para maquetar he querido simplificar un poco las cosas, en vez de usar alguna librería de componentes que ya conozco como `material-ui`, he decidido montar componentes sencillos haciendo uso de `styled-components` junto con el uso de `flexbox` para hacer el layout.

Para asegurar calidad y robustez al código, todos los componentes, hooks y servicios están cubiertos con diferentes test, las tecnologías usadas para los test han sido `jest` y `react testing library`.

Para consumir el api, he acabado utilizando `axios`, en un principio hice `Promises` a mano, pero me di cuenta que daban menos versatilidad y escalabilidad al proyecto.

Para asegurar que el código que se sube al repositorio cumple con ciertos estandares de calidad, he usado la libreria `husky`

Configuré varios hooks de husky dentro del directorio `.husky`
1. pre-commit: cada vez que lanzamos un commit, lanza automáticamente los test comprobando que todos pasan sin fallos.

2. pre-push: cada vez que lanzamos un push hacia remoto se lanzan los siguientes comandos:
    * compilador de tsc
    * linter
    * un script custom que comprueba si hay dependencias circulares en el proyecto (fichero `circular-deps.js`)
    * los test

La interfaz visual se ha construido bajo el enfoque de `mobile first`, trabajando primero la visualización en dispositivos móviles y tomarlo como base para escalar hacia tamaños mas grandes (tablet y escritorio).

Realicé algunos pequeños ajustes para acomodar la visualización en tamaños más grandes, como puede ser el tamaño del botón de `Show all transactions` o la distancia entre los elementos del componente `NavBar`.


## Bloqueos destacables
Hubo un par de puntos concretos en los que tuve que dedicar un poco de investigación para poder resolverlos:

#### `husky`

La última vez que había configurado la librería de husky la implementación en los proyectos era bastante diferente, teniendo que escribir a manos los hooks dentro del package.json. 

En las versiones más nuevas esto ya no funciona así, tuve que mirar la documentación oficial para ver cual era la forma actual de hacer que se ejecutasen estos hooks.

#### `Versión 18 de React`

La segunda fue con `React` en su versión 18, la cual presenta algunas incompatibilidades con ciertas librerías, una de ellas es `@testing-library/react-hooks`, la cual no tiene soporte para esta versión de React. 

La alternativa con `React 18` es usar la función `renderHook` que proporciona directamente `testing-library` en sus ultimas versiones.

Me encontre con que el api era un poco diferente, y despúes de intentar usarla para los test de los custom hooks, no conseguí replicar los comportamientos que si puedo hacer con la libreria de `@testing-library/react-hooks`.

Tuve que optar por bajar la versión de `React` a la última estable publicada antes de la 18, la `17.0.2`

## Posibles mejoras y cosas extra
Tener operativas el resto de secciones, teniendo activa la navegación y teniendo alguna implementación diferente en alguna de esas pantallas.

Tener un listado más grandes de cryptos, para poder simular una paginación en scroll y virtualizando la misma para no tener problemas de rendimiento, a la vez que le daría alguna funcionalidad real al botón de `Show all transactions`.

Publicar el proyecto en alguna url.

Configurar algún tipo de pipeline en GitHub/GitLab para automatizar ciertas cosas como el testing o el linter cuando se quisiese mergear una rama en master/main.

Testing E2E para flujos de negocio críticos.

Mejorar la visualización en escritorio.