// Datos actualizados de la aplicación
const appData = {
  "documentos": [
    {
      "id": 1,
      "titulo": "Cruces de Horarios",
      "descripcion": "Gestión y organización de horarios del equipo de educación física",
      "url": "https://docs.google.com/spreadsheets/d/1YcLAHOrVGXuWZro5dlpmruaIqk_mwJA3M0AWHx90j_Y/edit?usp=sharing",
      "categoria": "planificacion",
      "icono": "📅",
      "tipo": "spreadsheet",
      "frecuencia_uso": "alta"
    },
    {
      "id": 2,
      "titulo": "Copa Colombia",
      "descripcion": "Información y seguimiento de competencias deportivas nacionales",
      "url": "https://docs.google.com/spreadsheets/d/1VDK7hxVbXT66QuZwL3Na2IkLYpzp5vDe-e4Udw89IsA/edit?usp=sharing",
      "categoria": "competencias",
      "icono": "🏆",
      "tipo": "spreadsheet",
      "frecuencia_uso": "media"
    },
    {
      "id": 3,
      "titulo": "Planeación Vertical",
      "descripcion": "Planificación curricular vertical por grados y niveles",
      "url": "https://docs.google.com/spreadsheets/d/1rBdhYUz1nyzMdzif_1LSIOqen9ABFB8IYD-32fCPIwE/edit?gid=380295325#gid=380295325",
      "categoria": "planificacion",
      "icono": "📊",
      "tipo": "spreadsheet",
      "frecuencia_uso": "alta"
    },
    {
      "id": 4,
      "titulo": "Guía IB Educación física y para la salud",
      "descripcion": "Recursos y guías del programa IB para educación física",
      "url": "https://drive.google.com/drive/search?q=educacion%20fisica",
      "categoria": "recursos",
      "icono": "📖",
      "tipo": "drive_search",
      "frecuencia_uso": "media"
    },
    {
      "id": 5,
      "titulo": "Carpeta Educación Física y para la salud",
      "descripcion": "Repositorio principal de materiales y recursos educativos",
      "url": "https://drive.google.com/drive/folders/1uU9HZT7bNI1vEHL_7jRZVY84wtZ_QkPz",
      "categoria": "recursos",
      "icono": "📁",
      "tipo": "drive_folder",
      "frecuencia_uso": "alta"
    },
    {
      "id": 6,
      "titulo": "Pico y Cancha",
      "descripcion": "Canal de comunicación del equipo para coordinación diaria",
      "url": "https://mail.google.com/mail/u/0/?tab=rm&ogbl#chat/space/AAAAmX8ST9I",
      "categoria": "comunicacion",
      "icono": "💬",
      "tipo": "chat",
      "frecuencia_uso": "muy_alta",
      "imagen": "1000154582.jpg",
      "tiene_imagen": true
    },
    {
      "id": 7,
      "titulo": "Fechas Importantes",
      "descripcion": "Cronograma de fechas internas y reportes de progreso 2025-2",
      "url": "#",
      "categoria": "planificacion",
      "icono": "📅",
      "tipo": "imagen",
      "frecuencia_uso": "alta",
      "imagen": "Fechas-relevantes-2025-2.png",
      "tiene_imagen": true,
      "solo_imagen": true
    }
  ],
  "categorias": {
    "planificacion": {
      "nombre": "Planificación y Horarios",
      "descripcion": "Documentos de planificación curricular y gestión de horarios",
      "color": "#3B82F6"
    },
    "competencias": {
      "nombre": "Competencias y Eventos",
      "descripcion": "Seguimiento de competencias deportivas y eventos especiales",
      "color": "#F59E0B"
    },
    "recursos": {
      "nombre": "Recursos Educativos",
      "descripcion": "Materiales didácticos y guías educativas",
      "color": "#10B981"
    },
    "comunicacion": {
      "nombre": "Comunicación",
      "descripcion": "Canales de comunicación y coordinación del equipo",
      "color": "#8B5CF6"
    },
    "juegos": {
      "nombre": "Juegos de Calentamiento",
      "descripcion": "Actividades y juegos para calentamiento en educación física",
      "color": "#EF4444"
    }
  },
  "juegos_calentamiento": [
    {
      "id": "juego1",
      "nombre": "¿Quién teme al lobo?",
      "descripcion": "Juego de persecución donde un 'lobo' en la línea central debe atrapar a los demás",
      "instrucciones": "Un estudiante se coloca en la línea central del campo. El resto en un lado. Cuando grite '¿Quién teme al lobo feroz?' los otros responden '¡Yo no!' y corren al otro lado sin ser atrapados. Solo puede moverse lateralmente por la línea central.",
      "material": "Ninguno",
      "tiempo": "5-10 minutos",
      "nivel": "Fácil",
      "participantes": "15-30",
      "icono": "🐺"
    },
    {
      "id": "juego2",
      "nombre": "El cazador",
      "descripcion": "Juego con pelota donde uno persigue al resto tocándolos con el balón",
      "instrucciones": "La clase se reparte por todo el campo. Un jugador con pelota debe intentar tocar al resto. Cuando toque a alguien, los roles se intercambian.",
      "material": "1 pelota blanda",
      "tiempo": "8-12 minutos",
      "nivel": "Fácil",
      "participantes": "10-25",
      "icono": "🎯"
    },
    {
      "id": "juego3",
      "nombre": "Balón pillado",
      "descripcion": "Juego en zona delimitada donde se elimina tocando con pelota desde fuera",
      "instrucciones": "4 personas pillan desde fuera de un área delimitada con conos. Dentro están los demás. Los de fuera lanzan pelotas para tocar a los de dentro, que pasan al otro lado si son tocados.",
      "material": "4 conos, 4 pelotas blandas",
      "tiempo": "10-15 minutos",
      "nivel": "Medio",
      "participantes": "12-30",
      "icono": "⚽"
    },
    {
      "id": "juego4",
      "nombre": "Blancos y negros",
      "descripcion": "Juego de reacción donde parejas persiguen según la orden del profesor",
      "instrucciones": "Parejas sentadas espalda con espalda en el centro. Una dirección son 'blancos', otra 'negros'. Según indique el profesor, unos persiguen a otros hasta llegar al límite.",
      "material": "Ninguno",
      "tiempo": "8-12 minutos",
      "nivel": "Fácil",
      "participantes": "Par (10-30)",
      "icono": "⚡"
    },
    {
      "id": "juego5",
      "nombre": "Torito en alto",
      "descripcion": "Salvarse de ser atrapado subiendo a objetos elevados",
      "instrucciones": "Un estudiante debe pillar al resto. Para salvarse deben subirse a bancos, colchonetas o espalderas. No pueden estar más de 5 segundos en el mismo objeto.",
      "material": "Bancos, colchonetas, espalderas",
      "tiempo": "10-15 minutos",
      "nivel": "Medio",
      "participantes": "15-25",
      "icono": "🐂"
    },
    {
      "id": "juego6",
      "nombre": "Jumping Jacks",
      "descripcion": "Saltos coordinados para activación cardiovascular",
      "instrucciones": "Saltar separando piernas y elevando brazos hacia arriba dando palmada sobre la cabeza. Volver a posición inicial con otro salto.",
      "material": "Ninguno",
      "tiempo": "3-5 minutos",
      "nivel": "Fácil",
      "participantes": "Ilimitado",
      "icono": "⭐"
    },
    {
      "id": "juego7",
      "nombre": "Trote en el sitio",
      "descripcion": "Activación básica corriendo sin desplazamiento",
      "instrucciones": "Trotar en el mismo lugar moviendo brazos activamente. Variar intensidad y altura de rodillas según indicación.",
      "material": "Ninguno",
      "tiempo": "2-5 minutos",
      "nivel": "Muy fácil",
      "participantes": "Ilimitado",
      "icono": "🏃‍♂️"
    },
    {
      "id": "juego8",
      "nombre": "El asesino con balón",
      "descripcion": "Juego de eliminación donde se 'mata' tocando con pelota blanda",
      "instrucciones": "Quien tiene la pelota trata de dar a sus compañeros lanzándola. Al ser tocado se sientan. Si un 'muerto' coge el balón, resucita. Termina cuando queda uno vivo.",
      "material": "1 pelota blanda de espuma",
      "tiempo": "8-12 minutos",
      "nivel": "Medio",
      "participantes": "15-30",
      "icono": "💀"
    },
    {
      "id": "juego9",
      "nombre": "Relevo móvil",
      "descripcion": "Carreras en zigzag entre compañeros con pase de balón",
      "instrucciones": "Grupos de 5 en fila. El último bota en zigzag entre compañeros hasta llegar primero, luego pasa el balón al nuevo último para repetir hasta llegar a la meta.",
      "material": "1 balón por grupo",
      "tiempo": "10-15 minutos",
      "nivel": "Medio",
      "participantes": "15-25 (grupos de 5)",
      "icono": "🏃‍♀️"
    },
    {
      "id": "juego10",
      "nombre": "Corro y me paro",
      "descripcion": "Control de balón y parada en tiempo",
      "instrucciones": "Cada uno bota su balón por el terreno. A la señal del profesor deben coger el balón con ambas manos y pararse en un tiempo.",
      "material": "1 balón por estudiante",
      "tiempo": "5-8 minutos",
      "nivel": "Fácil",
      "participantes": "10-25",
      "icono": "⏰"
    }
  ],
  "imagenes": {
    "1000154582.jpg": {
      "descripcion": "Horarios de educación física por grados - Secondary Both Tracks",
      "tipo": "horario",
      "url": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzNCODJGNiIgb3BhY2l0eT0iMC4xIi8+CiAgPHRleHQgeD0iMjAwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SG9yYXJpb3MgRWR1Y2FjacOzbiBGw61zaWNhPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNlY29uZGFyeSBCb3RoIFRyYWNrczwvdGV4dD4KICA8cmVjdCB4PSI1MCIgeT0iMTYwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjIyMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5OKIE1hdHJpeiBkZSBIb3JhcmlvczwvdGV4dD4KPC9zdmc+"
    },
    "Fechas-relevantes-2025-2.png": {
      "descripcion": "Fechas internas reporte progreso 2025-2",
      "tipo": "cronograma",
      "url": "Fechas-relevantes-2025-2.png"
    }
  }
};

// Estado de la aplicación
let appState = {
  favorites: new Set(),
  theme: 'light',
  notes: [],
  filteredDocuments: [...appData.documentos],
  filteredJuegos: [...appData.juegos_calentamiento],
  showingGames: false,
  draggedElement: null
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  loadSavedState();
  renderQuickAccess();
  renderSections();
  setupEventListeners();
  updateClock();
  setInterval(updateClock, 1000);
  showNotification('¡Bienvenido al tablero LPV Educación Física!', 'success');
}

function loadSavedState() {
  // Simular carga desde localStorage (no usar localStorage real por restricciones)
  appState.favorites = new Set([6, 7]); // Pico y Cancha y Fechas Importantes como favoritos por defecto
  appState.notes = [
    {
      id: 1,
      content: "Recordar actualizar los horarios para la próxima semana",
      timestamp: new Date().toLocaleString('es-CO')
    },
    {
      id: 2,
      content: "Revisar nuevos juegos de calentamiento para bachillerato",
      timestamp: new Date().toLocaleString('es-CO')
    }
  ];
  renderNotes();
  updateThemeButton();
}

function setupEventListeners() {
  // Búsqueda
  document.getElementById('search-input').addEventListener('input', handleSearch);
  
  // Tema
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  // Botones de acción
  document.getElementById('help-btn').addEventListener('click', () => showModal('help-modal'));
  document.getElementById('add-resource-btn').addEventListener('click', () => showModal('add-resource-modal'));
  document.getElementById('export-btn').addEventListener('click', exportResources);
  document.getElementById('view-favorites-btn').addEventListener('click', toggleFavoritesView);
  document.getElementById('view-games-btn').addEventListener('click', toggleGamesView);
  
  // Notas
  document.getElementById('save-note-btn').addEventListener('click', saveNote);
  document.getElementById('clear-notes-btn').addEventListener('click', clearNotes);
  
  // Modales
  document.getElementById('close-help').addEventListener('click', () => hideModal('help-modal'));
  document.getElementById('close-add-resource').addEventListener('click', () => hideModal('add-resource-modal'));
  document.getElementById('close-game-detail').addEventListener('click', () => hideModal('game-detail-modal'));
  document.getElementById('close-image-modal').addEventListener('click', () => hideModal('image-modal'));
  document.getElementById('save-resource-btn').addEventListener('click', saveNewResource);
  document.getElementById('cancel-resource-btn').addEventListener('click', () => hideModal('add-resource-modal'));
  
  // Cerrar modales al hacer clic en overlay
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) hideModal(modal.id);
    });
  });
  
  // Notificaciones
  document.getElementById('notification-close').addEventListener('click', hideNotification);
}

function renderQuickAccess() {
  const quickLinksContainer = document.getElementById('quick-links');
  const frequentDocuments = appData.documentos
    .filter(doc => doc.frecuencia_uso === 'muy_alta' || appState.favorites.has(doc.id))
    .slice(0, 6);
  
  quickLinksContainer.innerHTML = frequentDocuments.map(doc => `
    <a href="${doc.solo_imagen ? '#' : doc.url}" ${!doc.solo_imagen ? 'target="_blank"' : ''} class="quick-link" title="${doc.descripcion}" ${doc.solo_imagen ? `onclick="showImageModal('${doc.imagen}', '${doc.titulo}', '${doc.descripcion}'); return false;"` : ''}>
      <span class="card-icon">${doc.icono}</span>
      <span>${doc.titulo}</span>
      ${appState.favorites.has(doc.id) ? '<span style="color: #F59E0B;">⭐</span>' : ''}
      ${doc.tiene_imagen ? '<span style="color: #10B981;">📷</span>' : ''}
    </a>
  `).join('');
}

function renderSections() {
  const sectionsContainer = document.getElementById('sections-grid');
  
  if (appState.showingGames) {
    renderGamesSection();
    return;
  }
  
  const sectionsByCategory = {};
  appState.filteredDocuments.forEach(doc => {
    if (!sectionsByCategory[doc.categoria]) {
      sectionsByCategory[doc.categoria] = [];
    }
    sectionsByCategory[doc.categoria].push(doc);
  });
  
  sectionsContainer.innerHTML = Object.entries(sectionsByCategory).map(([categoryKey, documents]) => {
    const category = appData.categorias[categoryKey];
    return `
      <div class="section">
        <div class="section-header">
          <h2>${category.nombre}</h2>
          <p class="section-description">${category.descripcion}</p>
        </div>
        <div class="cards-grid">
          ${documents.map(doc => createResourceCard(doc)).join('')}
        </div>
      </div>
    `;
  }).join('');
  
  setupCardEventListeners();
}

function renderGamesSection() {
  const sectionsContainer = document.getElementById('sections-grid');
  const category = appData.categorias.juegos;
  
  sectionsContainer.innerHTML = `
    <div class="section">
      <div class="section-header">
        <h2>${category.nombre}</h2>
        <p class="section-description">${category.descripcion}</p>
      </div>
      <div class="cards-grid">
        ${appState.filteredJuegos.map(juego => createGameCard(juego)).join('')}
      </div>
    </div>
  `;
  
  setupGameEventListeners();
}

function setupCardEventListeners() {
  document.querySelectorAll('.resource-card').forEach(card => {
    const docId = parseInt(card.dataset.docId);
    const doc = appData.documentos.find(d => d.id === docId);
    
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) {
        return;
      }
      
      // Verificar si se hizo clic en imagen o placeholder de imagen
      if (e.target.classList.contains('card-image') || 
          e.target.classList.contains('image-placeholder') ||
          e.target.closest('.image-placeholder') ||
          (doc.tiene_imagen && (e.target.textContent.includes('📷') || e.target.closest('.card-body')))) {
        
        if (doc.tiene_imagen && doc.imagen) {
          showImageModal(doc.imagen, doc.titulo, appData.imagenes[doc.imagen]?.descripcion || doc.descripcion);
          return;
        }
      }
      
      if (doc.solo_imagen) {
        showImageModal(doc.imagen, doc.titulo, doc.descripcion);
        return;
      }
      
      window.open(doc.url, '_blank');
      showNotification(`Abriendo: ${doc.titulo}`, 'info');
    });
    
    card.style.cursor = 'pointer';
    
    const favoriteBtn = card.querySelector('.favorite-btn');
    if (favoriteBtn) {
      favoriteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(docId);
      });
    }
  });
}

function setupGameEventListeners() {
  document.querySelectorAll('.resource-card').forEach(card => {
    const juegoId = card.dataset.juegoId;
    const juego = appData.juegos_calentamiento.find(j => j.id === juegoId);
    
    card.addEventListener('click', () => {
      showGameDetail(juego);
    });
    
    card.style.cursor = 'pointer';
  });
}

function createResourceCard(doc) {
  const isFavorite = appState.favorites.has(doc.id);
  const hasImage = doc.tiene_imagen && doc.imagen;
  const imageUrl = hasImage ? appData.imagenes[doc.imagen]?.url : null;
  
  return `
    <div class="resource-card ${isFavorite ? 'favorite' : ''} ${hasImage ? 'has-image' : ''}" data-doc-id="${doc.id}" title="Haz clic para ${doc.solo_imagen ? 'ver imagen' : 'abrir'}: ${doc.titulo}">
      <div class="card-header">
        <div class="card-title">
          <span class="card-icon">${doc.icono}</span>
          <h3>${doc.titulo}</h3>
        </div>
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" title="${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
          ${isFavorite ? '⭐' : '☆'}
        </button>
      </div>
      ${hasImage && imageUrl ? `
        <img src="${imageUrl}" alt="${doc.titulo}" class="card-image" title="Clic para ver en grande">
      ` : hasImage ? `
        <div class="image-placeholder" title="Imagen: ${doc.imagen} - Clic para ver" style="cursor: pointer;">
          📷 ${doc.imagen}
        </div>
      ` : ''}
      <p class="card-description">${doc.descripcion}</p>
      <div class="card-footer">
        <span class="card-type">
          ${getTypeIcon(doc.tipo)} ${getTypeName(doc.tipo)}
        </span>
        <div class="frequency-indicator ${doc.frecuencia_uso}" title="Frecuencia de uso: ${doc.frecuencia_uso}"></div>
      </div>
    </div>
  `;
}

function createGameCard(juego) {
  const nivel = juego.nivel.toLowerCase();
  let nivelClass = 'facil';
  if (nivel.includes('medio')) nivelClass = 'medio';
  else if (nivel.includes('dificil') || nivel.includes('difícil')) nivelClass = 'dificil';
  
  return `
    <div class="resource-card game-card" data-juego-id="${juego.id}" title="Haz clic para ver detalles: ${juego.nombre}">
      <div class="card-header">
        <div class="card-title">
          <span class="card-icon">${juego.icono}</span>
          <h3>${juego.nombre}</h3>
        </div>
        <span class="game-level ${nivelClass}">${juego.nivel}</span>
      </div>
      <p class="card-description">${juego.descripcion}</p>
      <div class="card-footer">
        <div class="game-stats">
          <div class="game-stat">
            <span>⏱️</span>
            <span>${juego.tiempo}</span>
          </div>
          <div class="game-stat">
            <span>👥</span>
            <span>${juego.participantes}</span>
          </div>
          <div class="game-stat">
            <span>🎯</span>
            <span>${juego.material}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getTypeIcon(type) {
  const icons = {
    'spreadsheet': '📊',
    'drive_search': '🔍',
    'drive_folder': '📁',
    'chat': '💬',
    'imagen': '📷'
  };
  return icons[type] || '📄';
}

function getTypeName(type) {
  const names = {
    'spreadsheet': 'Hoja de cálculo',
    'drive_search': 'Búsqueda Drive',
    'drive_folder': 'Carpeta Drive',
    'chat': 'Chat',
    'imagen': 'Imagen'
  };
  return names[type] || 'Documento';
}

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  
  if (appState.showingGames) {
    if (searchTerm === '') {
      appState.filteredJuegos = [...appData.juegos_calentamiento];
    } else {
      appState.filteredJuegos = appData.juegos_calentamiento.filter(juego => 
        juego.nombre.toLowerCase().includes(searchTerm) ||
        juego.descripcion.toLowerCase().includes(searchTerm) ||
        juego.material.toLowerCase().includes(searchTerm) ||
        juego.nivel.toLowerCase().includes(searchTerm) ||
        juego.instrucciones.toLowerCase().includes(searchTerm)
      );
    }
    renderGamesSection();
  } else {
    if (searchTerm === '') {
      appState.filteredDocuments = [...appData.documentos];
    } else {
      appState.filteredDocuments = appData.documentos.filter(doc => 
        doc.titulo.toLowerCase().includes(searchTerm) ||
        doc.descripcion.toLowerCase().includes(searchTerm) ||
        appData.categorias[doc.categoria].nombre.toLowerCase().includes(searchTerm)
      );
    }
    renderSections();
  }
  
  const isEmpty = appState.showingGames ? 
    appState.filteredJuegos.length === 0 : 
    appState.filteredDocuments.length === 0;
    
  if (isEmpty) {
    document.getElementById('sections-grid').innerHTML = `
      <div class="empty-state">
        <h3>🔍 No se encontraron ${appState.showingGames ? 'juegos' : 'recursos'}</h3>
        <p>Intenta con otros términos de búsqueda</p>
      </div>
    `;
  }
}

function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-color-scheme', appState.theme);
  updateThemeButton();
  showNotification(`Tema cambiado a ${appState.theme === 'light' ? 'claro' : 'oscuro'}`, 'success');
}

function updateThemeButton() {
  const button = document.getElementById('theme-toggle');
  button.textContent = appState.theme === 'light' ? '🌙' : '☀️';
  button.title = `Cambiar a tema ${appState.theme === 'light' ? 'oscuro' : 'claro'}`;
}

function toggleFavorite(docId) {
  if (appState.favorites.has(docId)) {
    appState.favorites.delete(docId);
    showNotification('Eliminado de favoritos', 'success');
  } else {
    appState.favorites.add(docId);
    showNotification('Agregado a favoritos', 'success');
  }
  
  renderSections();
  renderQuickAccess();
}

function toggleFavoritesView() {
  const showingFavorites = document.getElementById('view-favorites-btn').textContent.includes('Todos');
  
  if (showingFavorites) {
    appState.filteredDocuments = [...appData.documentos];
    document.getElementById('view-favorites-btn').textContent = '⭐ Favoritos';
    document.getElementById('search-input').value = '';
  } else {
    appState.filteredDocuments = appData.documentos.filter(doc => appState.favorites.has(doc.id));
    document.getElementById('view-favorites-btn').textContent = '📄 Todos';
  }
  
  appState.showingGames = false;
  document.getElementById('view-games-btn').textContent = '🏃‍♂️ Juegos';
  document.getElementById('search-input').placeholder = 'Buscar recursos y juegos...';
  renderSections();
  
  if (appState.filteredDocuments.length === 0 && !showingFavorites) {
    document.getElementById('sections-grid').innerHTML = `
      <div class="empty-state">
        <h3>⭐ No tienes favoritos</h3>
        <p>Marca algunos recursos como favoritos para verlos aquí</p>
      </div>
    `;
  }
}

function toggleGamesView() {
  appState.showingGames = !appState.showingGames;
  
  if (appState.showingGames) {
    document.getElementById('view-games-btn').textContent = '📄 Recursos';
    document.getElementById('view-favorites-btn').textContent = '⭐ Favoritos';
    document.getElementById('search-input').placeholder = 'Buscar juegos de calentamiento...';
    appState.filteredJuegos = [...appData.juegos_calentamiento];
  } else {
    document.getElementById('view-games-btn').textContent = '🏃‍♂️ Juegos';
    document.getElementById('search-input').placeholder = 'Buscar recursos y juegos...';
    appState.filteredDocuments = [...appData.documentos];
  }
  
  document.getElementById('search-input').value = '';
  renderSections();
}

function showGameDetail(juego) {
  document.getElementById('game-title').innerHTML = `${juego.icono} ${juego.nombre}`;
  
  const gameDetailsContent = document.getElementById('game-details-content');
  gameDetailsContent.innerHTML = `
    <div class="game-detail-grid">
      <div class="game-instructions">
        <h4>📋 Instrucciones</h4>
        <p>${juego.instrucciones}</p>
      </div>
      
      <div class="game-detail-section">
        <h4>📝 Descripción</h4>
        <p>${juego.descripcion}</p>
      </div>
      
      <div class="game-meta">
        <div class="game-meta-item">
          <span class="game-meta-label">Tiempo</span>
          <span class="game-meta-value">⏱️ ${juego.tiempo}</span>
        </div>
        <div class="game-meta-item">
          <span class="game-meta-label">Participantes</span>
          <span class="game-meta-value">👥 ${juego.participantes}</span>
        </div>
        <div class="game-meta-item">
          <span class="game-meta-label">Nivel</span>
          <span class="game-meta-value">🎯 ${juego.nivel}</span>
        </div>
        <div class="game-meta-item">
          <span class="game-meta-label">Material</span>
          <span class="game-meta-value">🎲 ${juego.material}</span>
        </div>
      </div>
    </div>
  `;
  
  showModal('game-detail-modal');
}

function showImageModal(imageName, titulo, descripcion) {
  const imageData = appData.imagenes[imageName];
  if (!imageData) {
    showNotification('Imagen no encontrada', 'error');
    return;
  }
  
  document.getElementById('image-title').textContent = `📷 ${titulo}`;
  document.getElementById('modal-image').src = imageData.url;
  document.getElementById('modal-image').alt = titulo;
  document.getElementById('image-description').textContent = descripcion;
  
  showModal('image-modal');
}

function saveNote() {
  const noteText = document.getElementById('team-notes').value.trim();
  if (!noteText) {
    showNotification('Escribe una nota antes de guardar', 'warning');
    return;
  }
  
  const note = {
    id: Date.now(),
    content: noteText,
    timestamp: new Date().toLocaleString('es-CO')
  };
  
  appState.notes.unshift(note);
  document.getElementById('team-notes').value = '';
  renderNotes();
  showNotification('Nota guardada correctamente', 'success');
}

function clearNotes() {
  document.getElementById('team-notes').value = '';
}

function renderNotes() {
  const notesContainer = document.getElementById('saved-notes');
  
  if (appState.notes.length === 0) {
    notesContainer.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">No hay notas guardadas</p>';
    return;
  }
  
  notesContainer.innerHTML = appState.notes.map(note => `
    <div class="note-item">
      <button class="note-delete" onclick="deleteNote(${note.id})" title="Eliminar nota">×</button>
      <div class="note-content">${note.content}</div>
      <div class="note-timestamp">📅 ${note.timestamp}</div>
    </div>
  `).join('');
}

function deleteNote(noteId) {
  appState.notes = appState.notes.filter(note => note.id !== noteId);
  renderNotes();
  showNotification('Nota eliminada', 'success');
}

function showModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

function saveNewResource() {
  const title = document.getElementById('new-title').value.trim();
  const url = document.getElementById('new-url').value.trim();
  const category = document.getElementById('new-category').value;
  const description = document.getElementById('new-description').value.trim();
  
  if (!title || !url) {
    showNotification('Título y URL son obligatorios', 'error');
    return;
  }
  
  const newDoc = {
    id: Date.now(),
    titulo: title,
    descripcion: description || 'Recurso agregado por el usuario',
    url: url,
    categoria: category,
    icono: category === 'juegos' ? '🏃‍♂️' : '📄',
    tipo: 'custom',
    frecuencia_uso: 'media'
  };
  
  appData.documentos.push(newDoc);
  appState.filteredDocuments = [...appData.documentos];
  
  // Limpiar formulario
  document.getElementById('new-title').value = '';
  document.getElementById('new-url').value = '';
  document.getElementById('new-description').value = '';
  
  hideModal('add-resource-modal');
  renderSections();
  renderQuickAccess();
  showNotification('Recurso agregado correctamente', 'success');
}

function exportResources() {
  const exportData = appState.filteredDocuments.map(doc => {
    const category = appData.categorias[doc.categoria];
    return `${doc.titulo}\n${doc.descripcion}\nCategoría: ${category.nombre}\nURL: ${doc.url}\n---`;
  }).join('\n\n');
  
  const blob = new Blob([exportData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'recursos-lpv-educacion-fisica.txt';
  a.click();
  URL.revokeObjectURL(url);
  
  showNotification('Recursos exportados correctamente', 'success');
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-CO', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('current-time').textContent = `⏰ ${timeString}`;
}

function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  
  notificationText.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove('hidden');
  
  setTimeout(() => {
    hideNotification();
  }, 4000);
}

function hideNotification() {
  document.getElementById('notification').classList.add('hidden');
}

// Funciones globales para eventos inline
window.deleteNote = deleteNote;
window.showImageModal = showImageModal;