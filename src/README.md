# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes.

El objetivo de esta web app es el cifrado de estos mensajes "secretos", permitiendote compartir el mensaje y la clave para descifrarlo.

Para cifrar tu mensaje sólo tienes que ingresar a [i.Spy](https://jetzable.github.io/Cipher-V2.0/src/index.html)

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una aplicación web usando los conocimientos de **User Experience Designer** y de **JavaScript developer**. Esto incluye el diseño de un producto
_pensando en los usuarios_, construir una interfaz, escuchar eventos básicos del
DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios
básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación
del DOM para mostrar (escribir) los resultados.

## Consideraciones generales

La lógica del proyecto está implementada completamente en JavaScript (ES6). Para la construcción responsiva de la interfaz se hizo uso de Bootstrap.

Se realizaron tests unitarios cubriendo un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

En cuanto a reglas/guías de estilo en sí,
se hace uso de las recomendaciones _por defecto_ tanto de `eslint` como `htmlhint`.

### UI

El usuario es capaz de:

- elegir una clave numérica para cifrar su mensaje
- insertar un mensaje (texto) que queremos cifrar
- ver el resultado del mensaje cifrado
- insertar un mensaje (texto) a descifrar
- ver el resultado del mensaje descifrado
