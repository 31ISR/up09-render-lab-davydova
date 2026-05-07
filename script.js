async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/marketplace/api/items')
    const json = await data.json()
    
    const container = document.getElementById("container")
    
    const html = json
        .map(
            (item) => `
            <div class="item-card">
                <img src="${item.image}" alt="${item.title}" class="item-image" />
                <div class="item-content">
                    <span class="status-badge status-active">${item.status}</span>
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-footer">
                        <div>
                            <div class="item-price">${item.price} ₽</div>
                            <div class="bid-info">
                                Текущая ставка: ${item.currentBid} ₽
                                <span class="bid-count">${item.bidCount}</span>
                            </div>
                        </div>
                        <div class="item-meta">
                            <span class="item-seller">Продавец: ${item.seller}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        )
        .join("")
    
    container.innerHTML = html
}

fetchData()