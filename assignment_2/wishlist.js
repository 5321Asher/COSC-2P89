//Asher Virgona
//gx23gq
//8032492

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function addToWishlist(product) {
    const alreadyIn = wishlist.some(item => item.id === product.id);
    if (!alreadyIn) {
        wishlist.push(product);
        updateWishlistButton(product.id, true);
        saveWishlist();
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist();
    updateWishlistButton(productId, false);

}


function removeAndRefresh(ProductId) {
    removeFromWishlist(ProductId);
    displayWishlist();
}

function displayWishlist() {
    const wishlistContainer = document.getElementById('wishlist-container');
    wishlistContainer.innerHTML = '';

    if (wishlist.length === 0) {
        const div = document.createElement('div');
        div.classList.add('empty-wishlist');
        div.innerHTML = `
        <h2>Your Wishlist is Empty!</h2>
        <h3>Browse our <a href="products.html">Cars</a> to add some!</h3>
        `;
        wishlistContainer.appendChild(div);
        return;
    }

    wishlist.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('wishlist-item');
        div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="wishlist-thumb" />
                <div class="wishlist-info">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                </div>
                <button class="remove-btn" onclick="removeAndRefresh('${item.id}')">Remove</button>
            `;
        wishlistContainer.appendChild(div);
    });
}

function updateWishlistButton(productId, alreadyIn) {
    const button = document.querySelector(`[data-id="${productId}"]`);

    if (!button) {
        return;
    }

    if (alreadyIn) {
        button.textContent = 'Remove From Wishlist';
        button.onclick = () => removeFromWishlist(productId);
    } else {
        button.textContent = 'Add to Wishlist';
        button.onclick = () => addToWishlist(getProductData(productId));
    }
}

function getProductData(productId) {
    const products = {
        '0001': { id: '0001', name: 'Ferrari Roma', price: 222620, image: 'images/ferrari-roma.png' },
        '0002': { id: '0002', name: 'Porsche 718 Cayman GT4 RS', price: 350000, image: 'images/porsche-gt4rs.png' },
        '0003': { id: '0003', name: 'McLaren 720S', price: 550000, image: 'images/mclaren-720s.png' },
        '0004': { id: '0004', name: 'Mercedes-Benz Sl65 AMG Black Series', price: 450000, image: 'images/mercedes-sl65.png' },
    }
    return products[productId];
}

document.addEventListener('DOMContentLoaded', () => {
    const wishlistContainer = document.getElementById('wishlist-container');
    if (wishlistContainer) {
        displayWishlist();
    } else {
        document.querySelectorAll('[data-id]').forEach(btn => {
            const productId = btn.getAttribute('data-id');
            const alreadyIn = wishlist.some(item => item.id === productId);
            updateWishlistButton(productId, alreadyIn);
        });
    }
});

window.addEventListener('storage', (event) => {
    if (event.key === 'wishlist') {
        wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (document.body.contains(document.getElementById('wishlist-container'))) {
            displayWishlist();
        } else {
            wishlist.forEach(item => updateWishlistButton(item.id, true));
        }
    }
});