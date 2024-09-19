# Proyecto de Catálogo de Productos

## Documentación Técnica

Este proyecto es una aplicación web desarrollada con Next.js, diseñada para mostrar un catálogo de productos. La aplicación consume una API para obtener los datos de los productos y permite a los usuarios filtrar y explorar los productos disponibles.

## Arquitectura del Proyecto

- **Frontend**: La aplicación está construida con Next.js, un framework de React que permite la renderización en el servidor y la generación de sitios estáticos.

- **Estilos**: Utiliza Tailwind CSS para un diseño moderno y responsivo.

- **API**: La aplicación consume datos de productos desde [Fake Store API](https://fakestoreapi.com/products).

- **Estructura del Proyecto**:
  - **`src/app`**: Contiene la lógica de la aplicación y las rutas principales.
    - **`page.tsx`**: Página principal de la aplicación.
    - **`products/[id]/page.tsx`**: Página de detalles del producto, donde se muestra información detallada de un producto específico según su ID.
  - **`src/components`**: Contiene los componentes reutilizables de la aplicación.
    - **`ProductCard`**: Muestra la información de cada producto.
    - **`ProductFilter`**: Permite a los usuarios filtrar los productos.
    - **`Spinner`**: Muestra un indicador de carga mientras se obtienen los productos.
    - **`Footer`**: Pie de página con información de derechos reservados.
    - **`Header`**: Encabezado de la aplicación, generalmente contiene el título y navegación principal.
    - **`Navbar`**: Barra de navegación para la aplicación.
    - **`StarRating`**: Muestra la calificación del producto en estrellas.
    - **`ZoomableImage`**: Permite la visualización ampliada de imágenes del producto.
  - **`src/hooks`**: Contiene hooks personalizados, como `useProducts` para manejar la lógica de obtención de productos.
  - **`src/service`**: Contiene funciones para interactuar con servicios externos, como la API de productos.
  - **`src/context`**: Contiene el contexto de React para manejar el estado global de la aplicación.
  - **`src/interfaces`**: Define las interfaces y tipos utilizados en la aplicación.
  - **`src/styles`**: Contiene los estilos globales y específicos de la aplicación, utilizando Tailwind CSS.

- **Arquitectura General**:
  - La aplicación está diseñada para ser modular y escalable, utilizando componentes React para construir la interfaz de usuario y Tailwind CSS para el diseño responsivo.
  - La lógica de negocio y la gestión de datos se manejan a través de hooks personalizados y servicios, mientras que el estado global se administra mediante el contexto de React.
  - Las interfaces en `src/interfaces` ayudan a mantener el código tipado y más fácil de mantener.



## Instrucciones de Despliegue y Ejecución Local

### Requisitos

- Node.js (v14 o superior)
- npm, yarn, pnpm o bun (gestores de paquetes)

### Clonar el Repositorio
Clona el repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/crescowboy/Lib-lulaProducts.git
```
### Instalación de Dependencias

Con npm:

```bash
npm install
```
Con yarn:


```bash
yarn install
```
Con pnpm:

```bash
pnpm install
```
Con bun:

```bash
bun install
```
Ejecución del Servidor de Desarrollo
Con npm:

```bash
npm run dev
```
Con yarn:

```bash
yarn dev
```
Con pnpm:

```bash
pnpm dev
```
Con bun:

```bash
bun dev
```
Abrir la Aplicación en tu Navegador
Visita http://localhost:3000 para ver la aplicación en ejecución.

## Instrucciones de Despliegue

### Despliegue en Vercel

**Inicia Sesión en Vercel:**

- Ve a [Vercel](https://vercel.com) y crea una cuenta si aún no tienes una.

**Importa tu Proyecto:**

- En el panel de Vercel, haz clic en **"New Project"** y selecciona el repositorio de tu proyecto desde GitHub, GitLab o Bitbucket.

**Configura el Despliegue:**

- Vercel detectará automáticamente que tu proyecto es una aplicación Next.js. Revisa y confirma la configuración predeterminada.

**Despliega tu Aplicación:**

- Haz clic en **"Deploy"** para comenzar el proceso de despliegue. Una vez completado, obtendrás una URL para acceder a tu aplicación en línea.

### Despliegue en AWS Amplify

**Inicia Sesión en AWS Amplify:**

- Ve a [AWS Amplify](https://aws.amazon.com/amplify/) y crea una cuenta si aún no tienes una.

**Crea un Nuevo Proyecto:**

- En el panel de Amplify, selecciona **"Get Started"** y luego **"Deploy"** para agregar una nueva aplicación.

**Conecta tu Repositorio:**

- Conecta tu repositorio de GitHub, GitLab o Bitbucket para que Amplify pueda acceder al código de tu proyecto.

**Configura el Despliegue:**

- Amplify detectará automáticamente la configuración de Next.js. Revisa y confirma la configuración.

**Despliega tu Aplicación:**

- Amplify construirá y desplegará tu aplicación. Una vez completado, obtendrás una URL para acceder a tu aplicación en línea.


## Configuración de CI/CD

### Configuración de CI/CD en GitHub Actions

**Crear un Archivo de Workflow:**

Crea un archivo `.github/workflows/deploy.yml` en tu repositorio con el siguiente contenido:

```yaml
name: Deploy Next.js Application

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.17.0' 

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }} 
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Configuración de CI/CD

### Configuración de CI/CD en GitHub Actions

**Configura los Secretos:**

En tu repositorio de GitHub, ve a **"Settings"** > **"Secrets and variables"** > **"Actions"** y añade los secretos necesarios para Vercel (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`).

**Haz un Push al Repositorio:**

Una vez que hayas creado y configurado el archivo de workflow, haz un push al repositorio. GitHub Actions ejecutará el pipeline de CI/CD automáticamente en cada push a la rama `main`.

