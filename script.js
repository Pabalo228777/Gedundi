
const objectsDB = [
        { 
        name: "Пионерлагерь Чайка", 
        type: "лагерь", 
        coords: "55.522286, 37.354892", 
        lat: 55.522286, 
        lng: 37.354892,
        description: "Заброшенный пионерлагерь в Тупиково, Московская область. Охраняется периметр."
        },
        { 
        name: "Пионерлагерь Живописный", 
        type: "лагерь", 
        coords: "54.937500, 36.845000", 
        lat: 54.9375, 
        lng: 36.845,
        description: "Сильно разрушен. Грибовка, Калужская область. Охрана с собаками, опасно!"
        },
        { 
        name: "Заброшенная школа", 
        type: "школа", 
        coords: "54.195221, 35.687730", 
        lat: 54.195221, 
        lng: 35.68773,
        description: "Плюсково, Калужская область. Состояние заброшенное, доступ свободный."
        },

        { 
        name: "Летний детский сад", 
        type: "десткий сад", 
        coords: "55.700857, 36.818078", 
        lat: 55.700857, 
        lng: 36.818078,
        description: "вьезд в зеленоград."
        },


        { 
        name: "Школа номер 572", 
        type: "школа", 
        coords: "55.680000, 37.770278", 
        lat: 55.680000, 
        lng: 37.770278,
        description: "Школа была построена в 1978 году. Типовое блочное трехэтажное здание. В 2009 году эта школа была объединена с другой в единый образовательный комплекс, состоящий из трёх корпусов на большой общей территории, в котором одновременно обучалась 1000 человек. В ноябре 2016 года здание бывшей начальной школы было закрыто на ремонт и с тех пор заброшено. В соседних корпусах капитальный ремонт уже завершился, а в этом даже не начинался. Охраны нет однако кто то заколачивает залазы значит за зданием кто то следит"
        },

        { 
        name: "85-й ремонтный завод", 
        type: "завод", 
        coords: "53.288156, 34.386701", 
        lat: 53.288156, 
        lng: 34.386701,
        description: "Завод осуществлял обслуживание и ремонт различных автотягачей и агрегатов для подвижных ракетных комплексов РВСН, а также боевых железнодорожных ракетных комплексов «Молодец». В начале нулевых БЖРК подверглись распилу на этом заводе, о чем свидетельствуют звезды с датами, нарисованные в основном цеху.Основной цех имеет высоту с 15-этажный дом. В нем расправлялись в полный рост подвижные ракетные комплексы.Завод много лет заброшен, но частично использовался железнодорожниками для ремонта служебного подвижного состава.Планируется снос и создание мемориала на его территории, т. к. в годы ВОВ на ней находился концлагерь."
        },

        {
        name: "Военный городок воинской части № 52096", 
        type: "Военный объект", 
        coords: "55.534106, 37.786489", 
        lat: 55.534106, 
        lng: 37.786489,
        description: "остался только склад РХБЗ. ГО имущество на месте, состояние так себе, стоит запах химикатов, в здании склада превышен радиационный фон."
        },

        {
        name: "поселок Дальний клин", 
        type: "деревня призрак , может быть радиация", 
        coords: "52.977518, 52.977518", 
        lat: 52.977518, 
        lng: 32.000146,
        description: "Посёлок находится в Брянской области, недалеко от села Гордеевка. Расположен в густом лесу, что усложняет к нему путь. Несмотря на то, что заброшен примерно в в 2004 году, сравнительно неплохо сохранился (декабрь 2014).Состоит из 8 домов и прилегающим к ним пристройкам в виде сараев, дровяников и погребов. В домах можно найти интересные предметы, в том числе и старинные. Летом там заросли крапивы выше роста человека. Повсюду видны следы диких животных."
        },


        {
        name: "посёлок городского типа Комсомольский", 
        type: "заброшенный город", 
        coords: "67.550796, 63.788461", 
        lat: 67.550796, 
        lng: 63.788461,
        description: "Поселок Комсомольский — это один из поселков так называемого «Воркутинского кольца» (входят также пгт: Воргашор, Елецкий, Заполярный, Мульда, Октябрьский, Северный, Советский, Цементнозаводской), образован в 1949 году при шахтах №№17, 19, 18, 25, 27, позже шахты №№17, 18 и 25 были объединены в шахту «Комсомольская» (1976г.). Шахта действует до сих пор и является самой глубокой в России — 1100 метров."
        },



        {
        name: "Дол лесные голоса", 
        type: "лагерь", 
        coords: "53.392713, 34.398101", 
        lat: 53.392713, 
        lng: 34.398101,
        description: "Заброшенный лагерь в Брянской области.Несколько корпусов в аварийном состоянии. Большинство зданий разрушено. В основном остались голые стены, полов в части корпусов нет. Сохранились рисунки на стенах. Перед лагерем лежит большая деревянная статуя.К лагерю от ближайшего поселения ведет тропа, проезд на автомобиле ограничен. Не охраняется."
        },






    ];




    // Соответствие названий объектов и их фотографий
const objectPhotos = {
    "Пионерлагерь Чайка": "chaika.jpg",
    "Пионерлагерь Живописный": "zhivopisny.jpg",
    "Заброшенная школа": "school.jpg",
    "Пионерлагерь Салют": "salut.jpg",
    "Летний детский сад": "Sadik.png",
    "Школа номер 572": "School_572.jpg",
    "85-й ремонтный завод": "Zavod.jpg",
    "Военный городок воинской части № 52096": "52096.jpg",
    "поселок Дальний клин": "Klin.jpg",
    "посёлок городского типа Комсомольский":"Koms.jpg",
    "Дол лесные голоса": "Dol.png"
};

// Функция показа фото
function showPhoto(objectName) {
    const photoContainer = document.getElementById('photoContainer');
    const photoTitle = document.getElementById('photoTitle');
    const objectPhoto = document.getElementById('objectPhoto');
    
    const photoFile = objectPhotos[objectName];
    
    if (photoFile && photoContainer) {
        photoTitle.textContent = `📷 Фото: ${objectName}`;
        objectPhoto.src = photoFile;
        objectPhoto.alt = objectName;
        photoContainer.style.display = 'block';
        
        // Добавляем анимацию появления
        photoContainer.style.animation = 'fadeIn 0.3s ease';
    } else {
        // Если фото нет, скрываем контейнер
        if (photoContainer) photoContainer.style.display = 'none';
    }
}

// Функция скрытия фото
function hidePhoto() {
    const photoContainer = document.getElementById('photoContainer');
    if (photoContainer) photoContainer.style.display = 'none';
}

// Глобальная переменная карты
let stalkerMap;
let markers = [];

// Инициализация карты при загрузке страницы
function initMap() {
    // Центр карты — примерно между объектами
    stalkerMap = L.map('stalkerMap').setView([55.0, 36.8], 8);
    
    // Спутниковый слой
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© ESRI, Maxar, Earthstar Geographics',
        maxZoom: 19
    });
    
    // Обычная карта
    const streetMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
    });
    
    streetMap.addTo(stalkerMap);
    
    // Переключатель слоёв
    L.control.layers({
        "🗺️ Обычная карта": streetMap,
        "🛰️ Спутник": satellite
    }).addTo(stalkerMap);
    
    // Добавляем маркеры из базы
    addMarkersFromDB();
}

// Добавление маркеров на карту
function addMarkersFromDB() {
    objectsDB.forEach(obj => {
        const marker = L.marker([obj.lat, obj.lng]).addTo(stalkerMap);
        
        // Содержимое всплывающего окна с кнопкой фото
        const popupContent = `
            <b>🏚️ ${obj.name}</b><br>
            📍 ${obj.coords}<br>
            📖 ${obj.description}<br>
            <span style="font-size:0.7rem; color:#888;">Тип: ${obj.type}</span>
            <br><br>
            <button class="photo-btn" onclick="showPhoto('${obj.name}')">📷 ПОКАЗАТЬ ФОТО</button>
        `;
        
        marker.bindPopup(popupContent);
        
        // При клике на маркер показываем фото
        marker.on('click', () => {
            showPhoto(obj.name);
        });
        
        // Сохраняем маркер с ссылкой на объект
        markers.push({
            marker: marker,
            data: obj
        });
    });
}

// Поиск объекта и центровка карты
function searchAndFlyTo(query) {
    if (!query || query.trim() === "") {
        displayResults([]);
        return;
    }
    
    query = query.toLowerCase().trim();
    
    // Ищем по названию или координатам
    const results = objectsDB.filter(obj => {
        const nameMatch = obj.name.toLowerCase().includes(query);
        const coordsMatch = obj.coords.toLowerCase().includes(query);
        return nameMatch || coordsMatch;
    });
    
    displayResults(results);
    
    // Если нашли ровно один объект — летим к нему
    if (results.length === 1) {
        const obj = results[0];
        stalkerMap.flyTo([obj.lat, obj.lng], 14, {
            duration: 1.5
        });
        
        // ПОКАЗЫВАЕМ ФОТО НАЙДЕННОГО ОБЪЕКТА
        showPhoto(obj.name);
        
        // Открываем попап у соответствующего маркера
        const foundMarker = markers.find(m => m.data.name === obj.name);
        if (foundMarker) {
            foundMarker.marker.openPopup();
        }
    } 
    // Если несколько результатов — центрируем, чтобы показать все
    else if (results.length > 1) {
        const bounds = L.latLngBounds(results.map(r => [r.lat, r.lng]));
        stalkerMap.flyToBounds(bounds, { padding: [50, 50], duration: 1.5 });
        // При нескольких результатах скрываем фото
        hidePhoto();
    }
    else {
        // Ничего не нашли
        hidePhoto();
        if (query.length > 0) {
            // Может быть пользователь ввёл координаты вручную? Пробуем распарсить "широта, долгота"
            const coordMatch = query.match(/(-?\d+\.?\d*)[,\s]+(-?\d+\.?\d*)/);
            if (coordMatch) {
                const lat = parseFloat(coordMatch[1]);
                const lng = parseFloat(coordMatch[2]);
                if (!isNaN(lat) && !isNaN(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
                    stalkerMap.flyTo([lat, lng], 13, { duration: 1.2 });
                }
            }
        }
    }
}

// Отображение результатов поиска в левой панели
function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) return;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">❌ Ничего не найдено. Попробуйте: "Чайка", "Салют", "Живописный"</div>';
        return;
    }
    
    let html = '<div class="results-list">';
    results.forEach(obj => {
        html += `
            <div class="result-item" data-lat="${obj.lat}" data-lng="${obj.lng}" data-name="${obj.name}">
                <div class="result-header">
                    <span class="result-name">📍 ${obj.name}</span>
                    <span class="result-coords">${obj.coords}</span>
                </div>
                <div class="result-details">
                    ${obj.description.substring(0, 100)}${obj.description.length > 100 ? '...' : ''}
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContainer.innerHTML = html;
    
    // Добавляем обработчики кликов на результаты
    document.querySelectorAll('.result-item').forEach(item => {
        item.addEventListener('click', () => {
            const lat = parseFloat(item.dataset.lat);
            const lng = parseFloat(item.dataset.lng);
            const name = item.dataset.name;
            
            stalkerMap.flyTo([lat, lng], 14, { duration: 1 });
            
            // Показываем фото объекта
            showPhoto(name);
            
            // Открыть попап нужного маркера
            const foundMarker = markers.find(m => m.data.name === name);
            if (foundMarker) {
                foundMarker.marker.openPopup();
            }
        });
    });
}

// Обработчик поиска
function performSearch() {
    const searchInput = document.getElementById('objectSearch');
    const query = searchInput.value;
    searchAndFlyTo(query);
}

// Ожидание загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем карту
    initMap();
    
    // Навешиваем обработчики на кнопку и поле ввода
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('objectSearch');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

// ===== ДОЗИМЕТР =====
// Данные об уровне радиации для каждого объекта (в мкЗв/ч - микрозиверт в час)
const radiationData = {
    "Пионерлагерь Чайка": 0.12,           // Нормальный фон
    "Пионерлагерь Живописный": 0.35,      // Повышенный
    "Заброшенная школа": 0.08,            // Норма
    "Летний детский сад": 0.15,           // Норма
    "Школа номер 572": 0.42,              // Повышенный
    "85-й ремонтный завод": 1.25,         // Опасно
    "Военный городок воинской части № 52096": 2.8,  // Очень опасно! (превышен фон)
    "поселок Дальний клин": 0.55          // Повышенный (может быть радиация)
};

// Фоновый уровень радиации (мкЗв/ч)
const BACKGROUND_RADIATION = 0.10;

// Текущий отображаемый уровень радиации
let currentRadiation = BACKGROUND_RADIATION;
let radiationInterval = null;

// Получить статус радиации
function getRadiationStatus(value) {
    if (value < 0.20) {
        return { text: "✅ ФОН В НОРМЕ", color: "normal", icon: "🟢" };
    } else if (value < 0.50) {
        return { text: "⚠️ ПОВЫШЕННЫЙ ФОН", color: "caution", icon: "🟡" };
    } else if (value < 1.00) {
        return { text: "☢️ ОПАСНАЯ ЗОНА", color: "danger", icon: "🔴" };
    } else {
        return { text: "💀 СМЕРТЕЛЬНАЯ ДОЗА", color: "deadly", icon: "💀" };
    }
}

// Обновить отображение дозиметра
function updateDosimeter(radiationValue) {
    const valueElement = document.getElementById('radiationValue');
    const statusElement = document.getElementById('radiationStatus');
    const dosimeterElement = document.getElementById('dosimeter');
    
    if (!valueElement || !statusElement) return;
    
    // Форматируем число (2 знака после запятой)
    const formattedValue = radiationValue.toFixed(2);
    valueElement.textContent = `${formattedValue}`;
    
    // Получаем статус
    const status = getRadiationStatus(radiationValue);
    
    // Обновляем класс для цвета
    valueElement.className = `dosimeter-value ${status.color}`;
    
    // Обновляем статус
    statusElement.innerHTML = `<span>${status.icon} ${status.text}</span>`;
    
    // Добавляем/убираем анимацию тревоги
    if (radiationValue >= 0.50) {
        dosimeterElement.classList.add('alarm');
    } else {
        dosimeterElement.classList.remove('alarm');
    }
    
    // Добавляем случайное потрескивание для эффекта Гейгера (звук не добавляем, только визуал)
    if (radiationValue >= 0.50) {
        valueElement.style.animation = 'none';
        setTimeout(() => {
            valueElement.style.animation = '';
        }, 10);
    }
}

// Установить радиацию для конкретного объекта
function setRadiationForObject(objectName) {
    const radiation = radiationData[objectName] || BACKGROUND_RADIATION;
    currentRadiation = radiation;
    updateDosimeter(currentRadiation);
    
    // Добавляем эффект "щелчка" при смене показаний
    const dosimeter = document.getElementById('dosimeter');
    if (dosimeter) {
        dosimeter.style.transform = 'scale(0.98)';
        setTimeout(() => {
            dosimeter.style.transform = '';
        }, 100);
    }
}

// Сбросить на фоновую радиацию
function resetRadiation() {
    currentRadiation = BACKGROUND_RADIATION;
    updateDosimeter(currentRadiation);
}

// Добавляем симуляцию случайных флуктуаций радиации
function startRandomFluctuation() {
    if (radiationInterval) clearInterval(radiationInterval);
    
    radiationInterval = setInterval(() => {
        // Если текущая радиация выше фоновой, плавно возвращаемся к фоновой
        if (currentRadiation > BACKGROUND_RADIATION + 0.05) {
            currentRadiation = Math.max(BACKGROUND_RADIATION, currentRadiation - 0.01);
            updateDosimeter(currentRadiation);
        } else if (Math.random() < 0.3) {
            // Случайные флуктуации в пределах фона
            const fluctuation = (Math.random() - 0.5) * 0.03;
            let newValue = currentRadiation + fluctuation;
            newValue = Math.max(0, Math.min(0.3, newValue));
            if (Math.abs(newValue - currentRadiation) > 0.01) {
                currentRadiation = newValue;
                updateDosimeter(currentRadiation);
            }
        }
    }, 3000);
}

// Модифицируем существующую функцию showPhoto
const originalShowPhoto = showPhoto;
window.showPhoto = function(objectName) {
    originalShowPhoto(objectName);
    setRadiationForObject(objectName);
};

// Модифицируем существующую функцию hidePhoto
const originalHidePhoto = hidePhoto;
window.hidePhoto = function() {
    originalHidePhoto();
    resetRadiation();
};

// Добавляем обработчики для кликов по маркерам и результатам поиска
// Модифицируем функцию addMarkersFromDB для добавления радиации при клике
const originalAddMarkersFromDB = addMarkersFromDB;
window.addMarkersFromDB = function() {
    objectsDB.forEach(obj => {
        const marker = L.marker([obj.lat, obj.lng]).addTo(stalkerMap);
        
        const popupContent = `
            <b>🏚️ ${obj.name}</b><br>
            📍 ${obj.coords}<br>
            📖 ${obj.description}<br>
            <span style="font-size:0.7rem; color:#888;">Тип: ${obj.type}</span>
            <br>
            <span style="font-size:0.7rem; color:#ffaa00;">☢️ Радиация: ${(radiationData[obj.name] || BACKGROUND_RADIATION).toFixed(2)} мкЗв/ч</span>
            <br><br>
            <button class="photo-btn" onclick="showPhoto('${obj.name}')">📷 ПОКАЗАТЬ ФОТО</button>
        `;
        
        marker.bindPopup(popupContent);
        
        marker.on('click', () => {
            showPhoto(obj.name);
            setRadiationForObject(obj.name);
        });
        
        markers.push({
            marker: marker,
            data: obj
        });
    });
};

// Переопределяем функцию displayResults для добавления радиации
const originalDisplayResults = displayResults;
window.displayResults = function(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) return;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">❌ Ничего не найдено. Попробуйте: "Чайка", "Салют", "Живописный"</div>';
        return;
    }
    
    let html = '<div class="results-list">';
    results.forEach(obj => {
        const radiation = radiationData[obj.name] || BACKGROUND_RADIATION;
        let radiationIcon = '🟢';
        if (radiation >= 0.50) radiationIcon = '🔴';
        else if (radiation >= 0.20) radiationIcon = '🟡';
        
        html += `
            <div class="result-item" data-lat="${obj.lat}" data-lng="${obj.lng}" data-name="${obj.name}">
                <div class="result-header">
                    <span class="result-name">📍 ${obj.name}</span>
                    <span class="result-coords">${obj.coords}</span>
                </div>
                <div class="result-details">
                    ${obj.description.substring(0, 100)}${obj.description.length > 100 ? '...' : ''}
                </div>
                <div style="font-size:0.65rem; margin-top:6px;">
                    ${radiationIcon} Радиация: ${radiation.toFixed(2)} мкЗв/ч
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContainer.innerHTML = html;
    
    document.querySelectorAll('.result-item').forEach(item => {
        item.addEventListener('click', () => {
            const lat = parseFloat(item.dataset.lat);
            const lng = parseFloat(item.dataset.lng);
            const name = item.dataset.name;
            
            stalkerMap.flyTo([lat, lng], 14, { duration: 1 });
            showPhoto(name);
            setRadiationForObject(name);
            
            const foundMarker = markers.find(m => m.data.name === name);
            if (foundMarker) {
                foundMarker.marker.openPopup();
            }
        });
    });
};

// Запускаем эффект потрескивания и случайных флуктуаций
startRandomFluctuation();

// Добавляем вспомогательную функцию для ручного тестирования
window.debugSetRadiation = function(value) {
    currentRadiation = value;
    updateDosimeter(currentRadiation);
};

console.log('☢️ Дозиметр активирован! Радиация отображается для каждого объекта.');




// ===== СИСТЕМА РЕКОМЕНДАЦИЙ ПО ЭКИПИРОВКЕ =====
// Определение типов угроз для каждого объекта
const threatLevels = {
    "Пионерлагерь Чайка": {
        type: "normal",
        name: "Обычная заброшка",
        threats: [],
        warning: "Осмотр территории, возможны препятствия"
    },
    "Пионерлагерь Живописный": {
        type: "chemical",
        name: "Химическая угроза",
        threats: ["chemical"],
        warning: "ВНИМАНИЕ! Охрана с собаками, есть риск химического заражения"
    },
    "Заброшенная школа": {
        type: "normal",
        name: "Обычная заброшка",
        threats: [],
        warning: "Свободный доступ, но будьте осторожны с обрушениями"
    },
    "Летний детский сад": {
        type: "normal",
        name: "Обычная заброшка",
        threats: [],
        warning: "Территория заброшена, возможны бродячие собаки"
    },
    "Школа номер 572": {
        type: "normal",
        name: "Обычная заброшка",
        threats: [],
        warning: "За зданием следят, будьте осторожны при проникновении"
    },
    "85-й ремонтный завод": {
        type: "radiation",
        name: "РАДИАЦИОННАЯ ОПАСНОСТЬ",
        threats: ["radiation"],
        warning: "⚠️ ВОЗМОЖНО РАДИАЦИОННОЕ ЗАРАЖЕНИЕ! Требуется специальная экипировка"
    },
    "Военный городок воинской части № 52096": {
        type: "radiation",
        name: "РАДИАЦИОННАЯ ОПАСНОСТЬ",
        threats: ["radiation"],
        warning: "☢️ ПРЕВЫШЕН РАДИАЦИОННЫЙ ФОН! Склад химоружия, опасно для жизни!"
    },
    "поселок Дальний клин": {
        type: "radiation",
        name: "РАДИАЦИОННАЯ ОПАСНОСТЬ",
        threats: ["radiation"],
        warning: "⚠️ ВОЗМОЖНА РАДИАЦИЯ! Поселок находится в зоне отчуждения"
    }
};

// Базовый набор экипировки для обычной вылазки
const normalGear = [
    { name: "ПЕРЧАТКИ",  desc: "защита рук от острых предметов" },
    { name: "ФОНАРИК",  desc: "освещение тёмных помещений" },
    { name: "ПОВЕРБАНК",  desc: "зарядка для устройств" }
];

// Дополнительная экипировка при химической угрозе
const chemicalGear = [
    { name: "РЕСПИРАТОР",  desc: "защита органов дыхания" },
    { name: "БЕРЦЫ", desc: "высокая обувь для защиты ног" }
];

// Дополнительная экипировка при радиационной угрозе
const radiationGear = [
    { name: "ДОЗИМЕТР", icon: "☢️", desc: "контроль уровня радиации" },
    { name: "ПРОТИВОГАЗ",  desc: "защита от радиоактивной пыли" },
    { name: "СМЕННЫЕ ФИЛЬТРЫ",  desc: "для противогаза" }
];

// Функция получения экипировки по типу угрозы
function getGearByThreatType(threatType) {
    let gear = [...normalGear]; // Копируем базовый набор
    
    if (threatType === "chemical") {
        gear = gear.concat(chemicalGear);
    } else if (threatType === "radiation") {
        gear = gear.concat(radiationGear);
    }
    
    return gear;
}

// Обновление панели рекомендаций
function updateGearRecommendation(objectName) {
    const threatData = threatLevels[objectName];
    const gearContainer = document.getElementById('gearListContainer');
    const threatObjectSpan = document.getElementById('threatObjectName');
    const threatTypeSpan = document.getElementById('threatType');
    const gearWarning = document.getElementById('gearWarning');
    
    if (!gearContainer) return;
    
    if (!threatData) {
        // Объект не найден в базе угроз
        threatObjectSpan.textContent = objectName || "НЕ ВЫБРАН ОБЪЕКТ";
        threatTypeSpan.textContent = "НЕТ ДАННЫХ";
        gearContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #666;">
                ⚠️ Нет данных<br>об угрозах для этого объекта
            </div>
        `;
        if (gearWarning) gearWarning.style.display = 'block';
        return;
    }
    
    // Обновляем информацию об угрозе
    threatObjectSpan.textContent = objectName;
    threatTypeSpan.textContent = threatData.name;
    
    // Получаем экипировку
    const gear = getGearByThreatType(threatData.type);
    
    // Формируем HTML списка экипировки
    let gearHtml = '';
    
    // Разделяем по категориям
    const normalItems = gear.filter(g => !chemicalGear.some(cg => cg.name === g.name) && !radiationGear.some(rg => rg.name === g.name));
    const chemicalItems = gear.filter(g => chemicalGear.some(cg => cg.name === g.name));
    const radiationItems = gear.filter(g => radiationGear.some(rg => rg.name === g.name));
    
    if (normalItems.length > 0) {
        gearHtml += '<div class="gear-category">🎒 БАЗОВАЯ ЭКИПИРОВКА</div>';
        normalItems.forEach(item => {
            gearHtml += `
                <li>
                    <span class="gear-name">${item.name}</span>
                    <span class="gear-desc">${item.desc}</span>
                </li>
            `;
        });
    }
    
    if (chemicalItems.length > 0) {
        gearHtml += '<div class="gear-category">🧪 ЗАЩИТА ОТ ХИМИЧЕСКОЙ УГРОЗЫ</div>';
        chemicalItems.forEach(item => {
            gearHtml += `
                <li>
                    <span class="gear-name">${item.name}</span>
                    <span class="gear-desc">${item.desc}</span>
                </li>
            `;
        });
    }
    
    if (radiationItems.length > 0) {
        gearHtml += '<div class="gear-category">☢️ ЗАЩИТА ОТ РАДИАЦИИ</div>';
        radiationItems.forEach(item => {
            gearHtml += `
                <li>
                    <span class="gear-name">${item.name}</span>
                    <span class="gear-desc">${item.desc}</span>
                </li>
            `;
        });
    }
    
    gearContainer.innerHTML = `<ul class="gear-list">${gearHtml}</ul>`;
    
    // Обновляем предупреждение
    if (gearWarning) {
        gearWarning.innerHTML = `⚠️ ${threatData.warning}`;
        gearWarning.style.display = 'block';
        
        // Меняем цвет предупреждения в зависимости от угрозы
        if (threatData.type === 'radiation') {
            gearWarning.style.background = 'rgba(255,50,50,0.25)';
            gearWarning.style.color = '#ff6666';
            gearWarning.style.borderColor = '#ff3333';
        } else if (threatData.type === 'chemical') {
            gearWarning.style.background = 'rgba(255,200,50,0.2)';
            gearWarning.style.color = '#ffaa44';
            gearWarning.style.borderColor = '#ffaa44';
        } else {
            gearWarning.style.background = 'rgba(50,50,50,0.3)';
            gearWarning.style.color = '#aaa';
            gearWarning.style.borderColor = '#5a5a5a';
        }
    }
}

// Сброс рекомендаций (когда объект не выбран)
function resetGearRecommendation() {
    const gearContainer = document.getElementById('gearListContainer');
    const threatObjectSpan = document.getElementById('threatObjectName');
    const threatTypeSpan = document.getElementById('threatType');
    const gearWarning = document.getElementById('gearWarning');
    
    if (!gearContainer) return;
    
    threatObjectSpan.textContent = "НЕ ВЫБРАН ОБЪЕКТ";
    threatTypeSpan.textContent = "ОЖИДАНИЕ";
    
    gearContainer.innerHTML = `
        <div style="text-align: center; padding: 30px 15px; color: #666;">
            🎒<br>
            Выберите объект на карте<br>
            для отображения рекомендаций
        </div>
    `;
    
    if (gearWarning) {
        gearWarning.innerHTML = "⚠️ ВЫБЕРИТЕ ОБЪЕКТ НА КАРТЕ";
        gearWarning.style.background = 'rgba(50,50,50,0.3)';
        gearWarning.style.color = '#aaa';
    }
}

// Переопределяем функцию showPhoto для обновления рекомендаций
const originalShowPhotoForGear = window.showPhoto;
if (originalShowPhotoForGear) {
    window.showPhoto = function(objectName) {
        originalShowPhotoForGear(objectName);
        updateGearRecommendation(objectName);
    };
}

// Переопределяем функцию hidePhoto для сброса рекомендаций
const originalHidePhotoForGear = window.hidePhoto;
if (originalHidePhotoForGear) {
    window.hidePhoto = function() {
        originalHidePhotoForGear();
        resetGearRecommendation();
    };
}

// Добавляем обработчики для кликов по маркерам через существующую функцию
// Модифицируем инициализацию маркеров
const originalAddMarkersForGear = window.addMarkersFromDB;
if (originalAddMarkersForGear) {
    window.addMarkersFromDB = function() {
        // Вызываем оригинальную функцию (если она ещё не была вызвана)
        if (typeof originalAddMarkersForGear === 'function') {
            // Но чтобы не дублировать маркеры, нужно быть осторожным
            // Лучше добавить обработчик через существующие маркеры
        }
        originalAddMarkersForGear();
        
        // Добавляем обработчики к существующим маркерам
        markers.forEach(m => {
            const originalOnClick = m.marker.options.onClick;
            m.marker.on('click', () => {
                updateGearRecommendation(m.data.name);
            });
        });
    };
}

// Инициализация сворачивания панели
function initGearPanelCollapse() {
    const gearHeader = document.getElementById('gearHeader');
    const gearContent = document.getElementById('gearContent');
    const gearToggle = document.getElementById('gearToggle');
    
    if (gearHeader && gearContent) {
        gearHeader.addEventListener('click', () => {
            gearContent.classList.toggle('collapsed');
            if (gearToggle) {
                gearToggle.style.transform = gearContent.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }
}

// Запускаем инициализацию панели
setTimeout(() => {
    initGearPanelCollapse();
    resetGearRecommendation();
}, 100);

// Модифицируем функцию displayResults для обновления рекомендаций при клике на результат
const originalDisplayResultsForGear = window.displayResults;
if (originalDisplayResultsForGear) {
    window.displayResults = function(results) {
        originalDisplayResultsForGear(results);
        
        // Добавляем обработчики для новых элементов
        setTimeout(() => {
            document.querySelectorAll('.result-item').forEach(item => {
                // Удаляем старый обработчик, если есть, чтобы не дублировать
                const newItem = item.cloneNode(true);
                item.parentNode.replaceChild(newItem, item);
                
                newItem.addEventListener('click', () => {
                    const name = newItem.dataset.name;
                    updateGearRecommendation(name);
                });
            });
        }, 50);
    };
}

// Добавляем глобальную функцию для ручного обновления (для отладки)
window.debugGear = function(objectName) {
    updateGearRecommendation(objectName);
};

console.log('🎒 Система рекомендаций по экипировке активирована!');















});