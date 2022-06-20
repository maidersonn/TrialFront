# Prueba de código

Prueba de código hecha con Reack.js.

## Se ha usado 

- Axios
- React Hooks
- React Router
- Navegador Chrome para visualización.


## Doy por hecho

Entiendo que las usuarias tienen que estar logeadas y que para acceder a la lista de nominaciones se comprobará que la usuaria tiene autorización para ello, es decir que tendrá rol de admin. 
En esta prueba he metido el id de la usuaria que debe ir en la url de la api-request en una variable para que funcione. 


## Setup

Se necesita meter la variable de entorno REACT_APP_BACK_URL en una carpeta .env con la url donde se expone el back. 
En mi caso, sirvo la api desde el puerto 3000: 

    REACT_APP_BACK_URL=http://localhost:3000/

Ejecutar en la terminal :
> npm run start


## Mejoras
- Meter una librería de formateo de fechas. 
- Mejorar el feedback hacia el usuario a la hora de crear nominaciones.
- Hacer el responsive design.
- Hacer que se vea igual en todos los navegadores. 
- Gestinar los errores que puedan venir del api en la página de mostrar lista de nominaciones.
- Testing.
- Paginación en nominaciones.
- Despliegue automático.


---