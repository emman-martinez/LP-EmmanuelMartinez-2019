# 22-ReactExamenLiverpool
## Examen Prueba Liverpool

## Generalidades
### Consumo de Servicio de Web
Mediante Axios
'> npm install --save axios'
Datos por extraer: Nombre del artículo, Id del artículo(sku), precio, imágenes, raitings, descripción.

### Rating de Estrellas para el llenado de las estrellas
Mediante Star Rating Component
'> npm install react-star-rating-component --save'

## Funcionalidad

### 1.- Se realizó: Al dar clic en el botón de agregar se debe validar que la cantidad sea mayor a 2

### 2.- Se realizó: Los ratings(estrellas) deben de llenarse según la calificación dada al dar clic en alguna de las mismas, es decir, inicialmente se deben mostrar vacías y conforme.

### 3.- Se realizó: Para llenar el dropbox (combobox) de Fecha estimada de entrega se requiere leer un archivo json donde el valor sean los primeros números ordinarios (0,1,2,3,4,5) y el valor que despliegue sea la fecha (día actual + el número ordinario), ejemplo primer valor, si la fecha actual  es 12-Enero, entonces el primer valor es 12-Enero-2019, el siguiente 13-Enero-2019 y así sucesivamente.
El archivo JSON leído se encuentra en src>datos>datos.json

### 4.- Se realizó: Integrar algún plugin o librería que simule la galería de imágenes
Mediante uso de jQuery: public>js>jquery.min.js