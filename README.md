# Sistema de biblioteca

Proyecto desarrollado en **TypeScript** que simula un sistema de gestión y préstamo de libros de una biblioteca aplicando los **principios de Programación Orientada a Objetos (POO)**, **SOLID** y **Separación de responsabilidades**.

La aplicación puede ejecutarse tanto desde la **terminal** como desde un **navegador web**, utilizando Webpack para el empaquetado del proyecto.

# Tecnologías utilizadas

| Tecnología   | Uso                        |
| ------------ | -------------------------- |
| TypeScript   | Lenguaje de desarrollo     |
| JavaScript   | Código generado            |
| Node.js      | Ejecución en consola       |
| Webpack      | Empaquetado para navegador |
| HTML         | Interfaz web               |
| scanf        | Entrada por consola        |

---

Abrir la terminal

## Requisitos

Antes de comenzar asegúrese de tener instalado:

Git

Node.js 22 o superior

npm


Para verificar git:

```bash
git -v
```

Para verificar node.js:

```bash
node -v
npm -v
```

---

# Instalación

## Clonar proyecto

```bash
git clone https://github.com/RandolphPeralta/Library-Scanf.git
```

Entrar al proyecto:

```bash
cd Library-Scanf
```

---

## Instalar dependencias

```bash
npm install
```

---

## Construir o preparar archivos empaquetados
```bash
npm run build:web
```

## Ejecutar en la terminal

```bash
npm run start:terminal
```

### Ejecutar en la web

```bash
npm run dev:web
```

Una vez iniciado, abrir el navegador en la dirección indicada por Webpack Dev Server.

Para detener el servidor:

```bash
Ctrl + C
```

# Scripts disponibles

| Script                   | Descripción                                  |
| ------------------------ | -------------------------------------------- |
| `npm run build:web`      | Genera la versión de producción              |
| `npm run start:terminal` | Ejecuta la aplicación en consola             |
| `npm run dev:web`        | Ejecuta la aplicación web en modo desarrollo |


# Estructura del proyecto

```
Library-Training
│
├── src/                 # Código fuente
├── dist/                # Archivos compilados
├── .editorconfig
├── webpack.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Solución de problemas

## Variable de entorno

Si se esta usando vscode debes crear un archivo llamado en la raiz del proyecto:

```bash
.env.local
```

con el siguiente contenido:
```bash
BASE_URL= http://localhost:8000/
```

Dado algun caso no llega a funcionar en la terminal se puede forzar la instalacion de typescript

Forzar Instalacion de Typescript 
```bash
npm install -D typescript
```

Forzar instalacion de prompt
```bash
npm install scanf
```