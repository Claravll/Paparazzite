
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
            <div class="" style="width: 300px;">
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
