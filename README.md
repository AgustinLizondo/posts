Introducción
Aplicación móvil desarrollada con React Native y Expo, permite a los usuarios interactuar con una lista de posts.

Patrón de diseño
Modular, cada componente tiene su propia responsabilidad y se entrelaza con otros componentes a través de props. Permitiendo una mayor flexibilidad y reutilización del código.

Bibliotecas externas
Expo: entorno de desarrollo principal, facilidad para la integración de React Native.
Nativewind: integra Tailwind con React Native.
Jest: se usa para realizar pruebas unitarias.
@testing-library/react-native: se utiliza para realizar pruebas del render de la interfaz de usuario.

Proceso para levantar el proyecto:

  // Comandos deben ser escritos en CMD/Terminal, localizando la carpeta root del proyecto.
  Instalación de dependencias:
    NodeJs y npm debe estar instalado
    Expo CLI debe estar instalado (npm install -g expo-cli)
    Instalar las dependencias del proyecto (npm install).
  Iniciar el proyecto:
    Iniciar el proyecto con **expo start**.
    Abrir la aplicación en un emulador o dispositivo físico (a través de la app Expo Go).

Realizar pruebas:
Realizar pruebas mediante el comando jest (npm run jest).

**Estructura del proyecto**

src: código fuente de la aplicación.
app: pantallas de la aplicación.
components: componentes reutilizables.
services: servicios de api de la aplicación.
utils: funciones útiles.
__tests__: test cases de la aplicación.
jest.config.js: archivo de configuración de Jest.
package.json: dependencias y scripts.

Decisiones de diseño

Se utiliza un patrón de diseño modular para mejorar la flexibilidad y reutilización de código.
