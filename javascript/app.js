
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
function createCollection(data){
    const collection = document.createElement('div');
    collection.className = 'container';
    const itemsHTML = data.items.map(item => `
         <div class="row d-flex align-items-center mb-4"> <!-- Conteneur flex pour aligner photo et étiquette -->
            <div class="col-6 text-center">
                <a href="${item.photo}" target="_blank" class="fw-bold">
                    <img
                        src="${item.photo}"
                        alt="${item.name}"
                        style="width: 70%; height: 70%;"
                    >
                </a>
            </div>
            <div class="col-6 text-center">
                <img
                    src="${item.etiquette}"
                    alt="Étiquette de ${item.name}"
                    style="width: 70%; height: 250%; object-fit: cover;"
                >
            </div>
        </div>
    `).join(''); // Combine tous les éléments HTML générés dans une chaîne

    // Ajoute le HTML généré au conteneur
    
    collection.innerHTML = `
    <h3 class="text-center text-decoration-underline"> ${data.name} </h3>
     ${itemsHTML}; `

    return collection;
}


function loadCollections() {
    cardsData.forEach(data => {
        const container = document.getElementById(data.category);
        const collection = createCollection(data);
        container.appendChild(collection);
    });
}

loadCollections();