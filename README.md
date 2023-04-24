## Scrap_OverFlow
**Descripción del código**

Este es un proyecto de webscraping en el que se busca obtener información de la plataforma Stack Overflow.

La configuración del proyecto se encuentra en el archivo package.json, donde se definen las dependencias que se utilizarán. En este caso se utilizan las siguientes dependencias:

"dependencies": {
    "express": "^4.18.2",
    "jsdom": "^21.1.1",
    "mongoose": "^7.0.4",
    "puppeteer": "^19.9.1"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "jsdoc": "^4.0.2",
    "nodemon": "^2.0.22"
  }

       express es un framework de Node.js utilizado para la creación de aplicaciones web y API's.
    jsdom es una biblioteca que permite manipular el DOM (Document Object Model) en Node.js.
    mongoose es una biblioteca de JavaScript que permite interactuar con bases de datos MongoDB.
    puppeteer es un marco de automatización de pruebas de extremo a extremo que se utiliza para controlar un navegador y automatizar acciones en él.

También se definen los scripts a utilizar, como start, test y doc.

    El script start se utiliza para iniciar el servidor y ejecuta el archivo index.js.
    El script test se utiliza para ejecutar las pruebas del proyecto.
    El script doc se utiliza para generar la documentación del proyecto.

En el archivo index.js se importan los módulos necesarios para crear el servidor y realizar el raspado web.

    El módulo express se utiliza para crear el servidor y las rutas necesarias.
    El módulo stackOverflowController es el controlador que realiza el raspado web en la plataforma Stack Overflow.
    El módulo path se utiliza para trabajar con rutas de archivos y directorios.
    El módulo dotenv se utiliza para cargar variables de entorno desde un archivo .env.
    El módulo mongoose se utiliza para interactuar con la base de datos MongoDB.

En el archivo stackOverflowController.js se encuentran las clases Scraper y Parser, que se utilizan para realizar el raspado web en la plataforma Stack Overflow y obtener la información necesaria.

La clase Scraper se encarga de inicializar el navegador y la página web, obtener el contenido de la página web y cerrar el navegador.

La clase Parser se encarga de parsear el HTML obtenido de la página web y obtener la información necesaria, como el título, las preguntas y las respuestas.