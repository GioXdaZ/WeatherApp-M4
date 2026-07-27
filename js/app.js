/* Definición de los lugares con sus datos
   climáticos
*/
const lugares = [
    {
        id: 1,
        nombre: "Santiago",
        pais: "Chile",
        icono: "☀️",
        tempActual: 22,
        estadoActual: "Soleado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 28, estado: "Soleado" },
            { dia: "Martes", min: 15, max: 26, estado: "Nublado" },
            { dia: "Miércoles", min: 16, max: 24, estado: "Nublado" },
            { dia: "Jueves", min: 13, max: 22, estado: "Lluvia" },
            { dia: "Viernes", min: 12, max: 20, estado: "Lluvia" },
            { dia: "Sábado", min: 14, max: 23, estado: "Soleado" },
            { dia: "Domingo", min: 16, max: 25, estado: "Soleado" }
        ]
    },
    {
        id: 2,
        nombre: "Buenos Aires",
        pais: "Argentina",
        icono: "☁️",
        tempActual: 19,
        estadoActual: "Nublado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 16, max: 24, estado: "Nublado" },
            { dia: "Martes", min: 17, max: 25, estado: "Soleado" },
            { dia: "Miércoles", min: 18, max: 26, estado: "Soleado" },
            { dia: "Jueves", min: 15, max: 23, estado: "Lluvia" },
            { dia: "Viernes", min: 14, max: 22, estado: "Lluvia" },
            { dia: "Sábado", min: 16, max: 24, estado: "Nublado" },
            { dia: "Domingo", min: 17, max: 25, estado: "Soleado" }
        ]
    },
    {
        id: 3,
        nombre: "Lima",
        pais: "Perú",
        icono: "🌧️",
        tempActual: 18,
        estadoActual: "Lluvia",
        pronosticoSemanal: [
            { dia: "Lunes", min: 15, max: 22, estado: "Lluvia" },
            { dia: "Martes", min: 16, max: 23, estado: "Lluvia" },
            { dia: "Miércoles", min: 17, max: 24, estado: "Nublado" },
            { dia: "Jueves", min: 16, max: 23, estado: "Nublado" },
            { dia: "Viernes", min: 15, max: 22, estado: "Lluvia" },
            { dia: "Sábado", min: 16, max: 24, estado: "Soleado" },
            { dia: "Domingo", min: 17, max: 25, estado: "Soleado" }
        ]
    },
    {
        id: 4,
        nombre: "Bogotá",
        pais: "Colombia",
        icono: "🌧️",
        tempActual: 14,
        estadoActual: "Lluvia",
        pronosticoSemanal: [
            { dia: "Lunes", min: 8, max: 18, estado: "Lluvia" },
            { dia: "Martes", min: 9, max: 19, estado: "Lluvia" },
            { dia: "Miércoles", min: 10, max: 20, estado: "Nublado" },
            { dia: "Jueves", min: 9, max: 19, estado: "Nublado" },
            { dia: "Viernes", min: 8, max: 18, estado: "Lluvia" },
            { dia: "Sábado", min: 9, max: 20, estado: "Soleado" },
            { dia: "Domingo", min: 10, max: 21, estado: "Soleado" }
        ]
    },
    {
        id: 5,
        nombre: "Ciudad de México",
        pais: "México",
        icono: "☀️",
        tempActual: 20,
        estadoActual: "Soleado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 12, max: 26, estado: "Soleado" },
            { dia: "Martes", min: 13, max: 27, estado: "Soleado" },
            { dia: "Miércoles", min: 14, max: 28, estado: "Nublado" },
            { dia: "Jueves", min: 13, max: 26, estado: "Nublado" },
            { dia: "Viernes", min: 12, max: 25, estado: "Lluvia" },
            { dia: "Sábado", min: 13, max: 26, estado: "Soleado" },
            { dia: "Domingo", min: 14, max: 27, estado: "Soleado" }
        ]
    },
    {
        id: 6,
        nombre: "Madrid",
        pais: "España",
        icono: "☀️",
        tempActual: 25,
        estadoActual: "Despejado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 16, max: 32, estado: "Soleado" },
            { dia: "Martes", min: 17, max: 33, estado: "Soleado" },
            { dia: "Miércoles", min: 18, max: 31, estado: "Despejado" },
            { dia: "Jueves", min: 16, max: 30, estado: "Nublado" },
            { dia: "Viernes", min: 15, max: 28, estado: "Nublado" },
            { dia: "Sábado", min: 16, max: 29, estado: "Soleado" },
            { dia: "Domingo", min: 17, max: 30, estado: "Soleado" }
        ]
    },
    {
        id: 7,
        nombre: "París",
        pais: "Francia",
        icono: "☁️",
        tempActual: 18,
        estadoActual: "Nublado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 10, max: 22, estado: "Nublado" },
            { dia: "Martes", min: 11, max: 23, estado: "Nublado" },
            { dia: "Miércoles", min: 12, max: 24, estado: "Lluvia" },
            { dia: "Jueves", min: 11, max: 22, estado: "Lluvia" },
            { dia: "Viernes", min: 10, max: 21, estado: "Nublado" },
            { dia: "Sábado", min: 11, max: 22, estado: "Soleado" },
            { dia: "Domingo", min: 12, max: 23, estado: "Soleado" }
        ]
    },
    {
        id: 8,
        nombre: "Tokio",
        pais: "Japón",
        icono: "☀️",
        tempActual: 21,
        estadoActual: "Despejado",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 27, estado: "Despejado" },
            { dia: "Martes", min: 15, max: 28, estado: "Despejado" },
            { dia: "Miércoles", min: 16, max: 29, estado: "Soleado" },
            { dia: "Jueves", min: 15, max: 27, estado: "Nublado" },
            { dia: "Viernes", min: 14, max: 26, estado: "Lluvia" },
            { dia: "Sábado", min: 15, max: 27, estado: "Despejado" },
            { dia: "Domingo", min: 16, max: 28, estado: "Despejado" }
        ]
    }
];

//Renderizar los cards en el index.html
function renderizarCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;

    container.innerHTML = '';

    lugares.forEach(lugar => {
        const cardHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="place-card" data-id="${lugar.id}">
                    <h3 class="place-card__name">${lugar.nombre}</h3>
                    <p class="place-card__country">${lugar.pais || ''}</p>
                    <div class="place-card__icon">${lugar.icono || '🌤️'}</div>
                    <div class="place-card__temp">${lugar.tempActual}°C</div>
                    <p class="place-card__condition">${lugar.estadoActual}</p>
                    <div class="place-card__details">
                        <span class="place-card__min">Mín: <span>${lugar.pronosticoSemanal[0].min}°C</span></span>
                        <span class="place-card__max">Máx: <span>${lugar.pronosticoSemanal[0].max}°C</span></span>
                    </div>
                    <a href="detail.html?id=${lugar.id}" class="btn btn--primary mt-3">Ver detalle</a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderizarCards);

// Funciones para detail.html

// 1. Buscar lugar por ID
function obtenerLugarPorId(id) {
    return lugares.find(lugar => lugar.id === id);
}

// 2. Calcular estadísticas del pronóstico
function calcularEstadisticas(pronostico) {
    const temps = pronostico.map(d => ({ min: d.min, max: d.max }));
    const mins = temps.map(d => d.min);
    const maxs = temps.map(d => d.max);
    const promedio = (mins.reduce((a, b) => a + b, 0) + maxs.reduce((a, b) => a + b, 0)) / (mins.length * 2);

    // Conteo por estado
    const conteoEstados = {};
    pronostico.forEach(d => {
        conteoEstados[d.estado] = (conteoEstados[d.estado] || 0) + 1;
    });

    // Resumen textual
    let resumen = '';
    const estados = Object.keys(conteoEstados);
    if (estados.length === 1) {
        resumen = `Semana completamente ${estados[0].toLowerCase()}.`;
    } else if (conteoEstados['Soleado'] > conteoEstados['Nublado'] && conteoEstados['Soleado'] > conteoEstados['Lluvia']) {
        resumen = 'Semana mayormente soleada.';
    } else if (conteoEstados['Lluvia'] > conteoEstados['Soleado'] && conteoEstados['Lluvia'] > conteoEstados['Nublado']) {
        resumen = 'Semana con varias lluvias.';
    } else if (conteoEstados['Nublado'] > conteoEstados['Soleado'] && conteoEstados['Nublado'] > conteoEstados['Lluvia']) {
        resumen = 'Semana mayormente nublada.';
    } else {
        resumen = 'Semana con clima variado.';
    }

    return {
        min: Math.min(...mins),
        max: Math.max(...maxs),
        promedio: Math.round(promedio * 10) / 10,
        conteoEstados,
        resumen
    };
}

// 3. Renderizar detalle completo
function renderizarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const lugar = obtenerLugarPorId(id);

    if (!lugar) {
        document.querySelector('.main').innerHTML = `
            <div class="container text-center py-5">
                <h2>Ciudad no encontrada</h2>
                <a href="index.html" class="btn btn--primary">Volver al inicio</a>
            </div>
        `;
        return;
    }

    // Iconos por estado
    const iconosPorEstado = {
        'Soleado': '☀️',
        'Nublado': '☁️',
        'Lluvia': '🌧️',
        'Despejado': '☀️'
    };

    // Contenedor de detalle
    const detailContainer = document.getElementById('detail-card');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="detail-card">
                <div class="detail-card__header">
                    <h2>${lugar.nombre}</h2>
                    <p class="text-muted">${lugar.pais}</p>
                </div>
                <div class="detail-card__body text-center py-4">
                    <div class="display-1">${lugar.icono}</div>
                    <div class="display-4 fw-bold">${lugar.tempActual}°C</div>
                    <p class="fs-4">${lugar.estadoActual}</p>
                    <div class="d-flex justify-content-center gap-4 mt-3">
                        <span>Mín: <strong>${lugar.pronosticoSemanal[0].min}°C</strong></span>
                        <span>Máx: <strong>${lugar.pronosticoSemanal[0].max}°C</strong></span>
                    </div>
                </div>
            </div>
        `;
    }

    // Pronóstico diario
    const forecastContainer = document.getElementById('forecast-container');
    if (forecastContainer) {
        forecastContainer.innerHTML = '';
        lugar.pronosticoSemanal.forEach(dia => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 col-lg-2';
            col.innerHTML = `
                <div class="forecast-card text-center p-3 border rounded">
                    <div class="fw-bold">${dia.dia}</div>
                    <div class="fs-2">${iconosPorEstado[dia.estado] || '🌤️'}</div>
                    <div class="fw-bold">${dia.min}°C / ${dia.max}°C</div>
                    <div class="text-muted small">${dia.estado}</div>
                </div>
            `;
            forecastContainer.appendChild(col);
        });
    }

    // Estadísticas
    const stats = calcularEstadisticas(lugar.pronosticoSemanal);
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="row g-3 mt-3">
                <div class="col-12">
                    <h4>Estadísticas de la semana</h4>
                    <ul class="list-unstyled">
                        <li><strong>Mínima:</strong> ${stats.min}°C</li>
                        <li><strong>Máxima:</strong> ${stats.max}°C</li>
                        <li><strong>Promedio:</strong> ${stats.promedio}°C</li>
                    </ul>
                    <h5>Resumen</h5>
                    <p>${stats.resumen}</p>
                </div>
            </div>
        `;
    }
}

// Ejecutar en detail.html
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('detail-card')) {
        renderizarDetalle();
    }
});