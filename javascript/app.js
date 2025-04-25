function normalizeText(text) {
    return text
        .toLowerCase()                        // Convert text to lowercase
        .trim()                                // Remove any leading or trailing whitespace
        .replace(/[^a-z0-9\s-]/g, '')          // Remove special characters
        .replace(/\s+/g, '-')                  // Replace spaces with hyphens
        .replace(/-+/g, '-');                  // Replace multiple hyphens with a single one
}

// Fonction pour créer une carte HTML
function createCard(data) {
    const card = document.createElement('div');
    const normalizedName = normalizeText(data.name);
    const itemsHTML = data.items
        .map(item => `<li><a href="${item.file}" target="_blank" class="fw-bold">${item.name}</a></li>`)
        .join('');
    card.className = 'container';
    card.innerHTML = `
    <a href="#collapse-${normalizedName}" class="fw-bold card_link" data-bs-toggle="collapse">
        <div class="card_category" style="background-image: url(${data.backgroundImage});background-size: contain;background-repeat: no-repeat;">
        <p class="d-inline-flex gap-1 fw-bold rounded"> 
            ${data.name}
        </p>
        </div>
    </a>
    <div style="min-height: 20px;">
        <div class="collapse" id="collapse-${normalizedName}">
            <div class="fst-italic" style="width: 300px;">
                <ul>
                    ${itemsHTML}
                </ul>
            </div>
        </div>
    </div>
    `;
    return card;
}

// Fonction pour générer et insérer les cartes dans le conteneur
function loadCards() {
    cardsData.forEach(data => {
        const container = document.getElementById(data.group);
        const card = createCard(data);
        container.appendChild(card);
    });
}

// Appeler la fonction pour charger les cartes
loadCards();

// Fonction pour lister les pdf dans ''search''
function createList(data) {
    const list = document.createElement('div');
    const normalizedName = normalizeText(data.name);
    const itemsHTML = data.items
        .map(item => `<li><a href="${item.file}" target="_blank" class="fw-bold">${item.name}</a></li>`)
        .join('');
    list.className = 'container';
    list.innerHTML = `
       <div class="accordion">
         <div class="card">
             <div class="card-header">
                  <h5 class="mb-0 text-uppercase"> ${normalizedName} </h5>
             </div>

            <div class="fst-italic" style="width: 300px;">
                    <ul>
                        ${itemsHTML}
                    </ul>
            </div>
        </div>
    </div>
</div>
</section>
    `;
    return list;
}

// // Fonction pour générer et insérer les cartes dans le conteneur
function listParasites() {
    cardsData.forEach(data => {
        const container = document.getElementById(data.suit);
        const list = createList(data);
        container.appendChild(list);
    });
}

// // Appeler la fonction pour charger les cartes
listParasites();

// // Fonction pour afficher les photos et leur étiquette respective
function createCollection(data) {
    const collection = document.createElement('div');
    collection.className = 'container';
    const normalizedName = normalizeText(data.name);
    const itemsHTML = data.items.map((item, index) => {
        // Générer le contenu des photos, qu'il y ait une ou plusieurs images
        let photoContent = '';
        if (Array.isArray(item.photo)) {
            photoContent = item.photo.map(photo => `
                <a href="${photo}" target="_blank">
                    <img src="${photo}" alt="${item.name}" style="width: 35%; height: auto; margin: 5px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                </a>
            `).join('');
        } else {
            photoContent = `
                <a href="${item.photo}" target="_blank">
                    <img src="${item.photo}" alt="${item.name}" style="width: 35%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                </a>
            `;
        }
        
        return `
        <div class="collection-item mb-4" style="overflow: hidden; text-align: center;">
            <button class="btn etiquette-btn" 
                onclick="togglePhoto('photo-container-${normalizedName}-${index}')"
                style="
                    background-image: url('${item.etiquette}');
                    background-size: contain;
                    background-position: center;
                    width: 20%;
                    height: 160px;
                    margin: 0 auto;
                    border: none;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                    position: relative;
                "
                onmouseover="this.style.transform='scale(1.03)'"
                onmouseout="this.style.transform='scale(1)'">
            </button>
            <div id="photo-container-${normalizedName}-${index}" style="display: none; text-align: center; margin-top: 10px; transition: opacity 0.3s;">
                ${photoContent}
            </div>
        </div>
        `;
    }).join('');
    
    collection.innerHTML = `
        <h3 class="text-center text-decoration-underline mb-4">${data.name}</h3>
        ${itemsHTML}
    `;
    
    return collection;
}

function togglePhoto(containerId) {
    const container = document.getElementById(containerId);
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

function loadCollections() {
    cardsData.forEach(data => {
        const container = document.getElementById(data.category);
        const collection = createCollection(data);
        container.appendChild(collection);
    });
}

loadCollections();