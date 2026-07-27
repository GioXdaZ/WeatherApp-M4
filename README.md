# 🌤️ WeatherApp - Capitales del Mundo (Módulo 4)

Aplicación web que muestra el clima actual de 8 capitales del mundo, con vista de detalle, pronóstico extendido y estadísticas semanales. Desarrollada como parte del Módulo 4 del curso.

## 📌 Temática

La app muestra información climática ficticia de capitales de diferentes continentes, con un diseño cálido inspirado en tonos café cortado.

## 🗂️ Modelado de datos

Los datos están definidos en un arreglo de objetos en JavaScript (`lugares`). Cada lugar contiene:

- `id`: identificador único
- `nombre`: nombre de la ciudad
- `pais`: país al que pertenece
- `icono`: emoji representativo del clima actual
- `tempActual`: temperatura actual en °C
- `estadoActual`: descripción del clima (Soleado, Nublado, Lluvia, Despejado)
- `pronosticoSemanal`: arreglo de 7 días con:
  - `dia`: nombre del día
  - `min`: temperatura mínima en °C
  - `max`: temperatura máxima en °C
  - `estado`: descripción del clima para ese día

## 📊 Estadísticas calculadas

En la vista de detalle de cada ciudad se calculan automáticamente:

- **Temperatura mínima** de la semana
- **Temperatura máxima** de la semana
- **Temperatura promedio** (redondeada a 1 decimal)
- **Cantidad de días por tipo de clima** (soleado, nublado, lluvioso, despejado)
- **Resumen textual** generado a partir de los datos:
  - "Semana mayormente soleada."
  - "Semana con varias lluvias."
  - "Semana mayormente nublada."
  - "Semana con clima variado."
  - "Semana completamente [estado]."

## 🎨 Metodología de estilos

Se utilizó **BEM (Block, Element, Modifier)** para organizar las clases CSS:

- **Bloques**: `.place-card`, `.detail-card`, `.header`, `.footer`
- **Elementos**: `.place-card__name`, `.place-card__temp`, `.detail-card__body`
- **Modificadores**: `.btn--primary`, `.btn--secondary`

## 🗂️ Estructura SASS
```
scss/
├── base/
│ ├── _variables.scss 
│ ├── _reset.scss 
│ └── _typography.scss 
├── components/
│ ├── _buttons.scss 
│ └── _place-card.scss 
├── layout/
│ ├── _header.scss
│ ├── _main.scss
│ └── _footer.scss
├── utilities/
│ └── _mixins.scss 
└── main.scss 
```


## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 / SASS
- Bootstrap 5
- JavaScript (ES6+)

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. (Opcional) Compila SASS con `sass scss/main.scss css/main.css --watch`

## 📎 Enlace al repositorio

[https://github.com/GioXdaZ/WeatherApp-M4](https://github.com/GioXdaZ/WeatherApp-M4)

---

Desarrollado con ❤️ por **GioXdaZ**