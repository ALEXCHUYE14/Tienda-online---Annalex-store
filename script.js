/**
 * ANNALEX STORE - CORE SCRIPT V2.0
 * Lógica dinámica para E-commerce Premium
 */

// --- 1. BASE DE DATOS DE PRODUCTOS ---
const products = [

    { id: 1, name: "Reloj Black Edition", price: 150.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", desc: "Reloj clásico con movimiento preciso y acabado premium." },
    { id: 2, name: "Vestido Premium Silk", price: 220.00, cat: "Moda", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?w=500", desc: "Vestido de seda con corte elegante y costuras reforzadas." },
    { id: 3, name: "Audífonos Pro Max", price: 450.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", desc: "Sonido envolvente ANC y batería de larga duración." },
    { id: 4, name: "Lámpara Minimalista", price: 85.00, cat: "Hogar", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500", desc: "Lámpara de mesa con diseño moderno y luz regulable." },
    { id: 5, name: "Smartphone X Pro", price: 1200.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", desc: "Pantalla OLED, cámara triple y rendimiento superior." },
    { id: 6, name: "Casaca Cuero Slim", price: 350.00, cat: "Moda", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5bab3?w=500", desc: "Chaqueta de cuero genuino con corte slim y forro térmico." },
    { id: 7, name: "Bolso Urbano Classic", price: 129.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1520975912747-9c9b0f6d2fda?w=500", desc: "Bolso resistente con compartimentos organizadores." },
    { id: 8, name: "Auriculares In-Ear Plus", price: 89.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=500", desc: "Auriculares compactos con gran aislamiento y bass profundo." },
    { id: 9, name: "Cinturón Cuero Premium", price: 59.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500", desc: "Cinturón clásico de cuero con hebilla metálica resistente." },

    // Hogar
    { id: 10, name: "Set de Cocina Pro", price: 199.90, cat: "Hogar", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500", desc: "Set completo para cocinar como un chef en casa." },
    { id: 11, name: "Juego de Sábanas Premium", price: 129.00, cat: "Hogar", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500", desc: "Sábanas suaves y transpirables con acabado premium." },
    { id: 12, name: "Mesa Auxiliar Minimal", price: 179.00, cat: "Hogar", img: "https://images.unsplash.com/photo-1505691723518-36a2b9f7bf4d?w=500", desc: "Mesa ligera y resistente para espacios compactos." },
    { id: 13, name: "Lámpara LED Smart", price: 99.00, cat: "Hogar", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500", desc: "Controlable por app con colores y temperatura ajustable." },
    { id: 14, name: "Sofá Modular Compacto", price: 899.00, cat: "Hogar", img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b66?w=500", desc: "Sofá modular con tapizado fácil de limpiar." },

    // Moda
    { id: 15, name: "Zapatillas Urban Flex", price: 179.00, cat: "Moda", img: "https://images.unsplash.com/photo-1526178615887-2f0e0d2d5d1c?w=500", desc: "Zapatillas cómodas con suela anti-deslizante." },
    { id: 16, name: "Parka Invierno Shield", price: 249.00, cat: "Moda", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", desc: "Parka impermeable con aislamiento térmico." },
    { id: 17, name: "Camisa Oxford Slim", price: 79.00, cat: "Moda", img: "https://images.unsplash.com/photo-1541099649105-4c3eea4e1f60?w=500", desc: "Camisa clásica con tejido resistente a arrugas." },
    { id: 18, name: "Pantalón Chino Classic", price: 89.00, cat: "Moda", img: "https://images.unsplash.com/photo-1520975912747-9c9b0f6d2fda?w=500", desc: "Pantalón versátil para oficina y fin de semana." },

    // Tecnologia
    { id: 19, name: "Tablet Pro 11\"", price: 599.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1523473827532-2a9e7f4a5f2c?w=500", desc: "Tablet ligera para productividad y entretenimiento." },
    { id: 20, name: "Smartwatch Series 6", price: 299.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", desc: "Monitor de actividad y notificaciones en tu muñeca." },
    { id: 21, name: "Powerbank 20000mAh", price: 49.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=500", desc: "Carga rápida y capacidad para múltiples cargas." },
    { id: 22, name: "Cámara Acción 4K", price: 329.00, cat: "Tecnologia", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500", desc: "Grabación 4K y estabilización para tus aventuras." },

    // Accesorios
    { id: 23, name: "Gafas de Sol UV", price: 59.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500", desc: "Gafas con protección UV y estilo atemporal." },
    { id: 24, name: "Cartera Minimal Leather", price: 69.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1520975912747-9c9b0f6d2fda?w=500", desc: "Cartera compacta en cuero genuino." },
    { id: 25, name: "Soporte Móvil Adjustable", price: 29.00, cat: "Accesorios", img: "https://images.unsplash.com/photo-1510552776732-13bbf7f4f4d2?w=500", desc: "Soporte ajustable para ver videos y videollamadas." }
];

let cart = JSON.parse(localStorage.getItem('annalex_cart')) || [];

// --- 2. CONTÓMETRO DE OFERTA (50% DSCTO) ---
function initCountdown() {
    let timeLeft = 3600 * 5; // 5 horas iniciales
    const display = document.getElementById('countdown');
    if (!display) return;

    const timer = setInterval(() => {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) clearInterval(timer);
        timeLeft--;
    }, 1000);
}

// --- 3. MODO OSCURO (DARK MODE) ---
function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Cambiar icono
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// --- 4. RENDERIZADO DE PRODUCTOS Y FILTROS ---
function renderProducts(category = 'todos', searchTerm = '') {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesCat = category === 'todos' || p.cat === category;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCat && matchesSearch;
    });

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="product-desc">${p.desc || ''}</p>
            <p>S/ ${p.price.toFixed(2)}</p>
            <button class="btn-gold" onclick="addToCart(${p.id})">
                <i class="fas fa-cart-plus"></i> Agregar
            </button>
        `;
        grid.appendChild(card);
    });
}

// --- 5. CARRITO DE COMPRAS DINÁMICO ---
function toggleCart() {
    const el = document.getElementById('cartSidebar');
    if (!el) return;
    const isActive = el.classList.toggle('active');
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) cartBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    if (isActive) {
        // Focus para accesibilidad en el botón de cerrar
        const closeBtn = el.querySelector('.icon-btn[aria-label="Cerrar carrito"], .close');
        if (closeBtn) closeBtn.focus();
    }
}

function addToCart(id) {
    // Buscar por id (soporta string/number)
    let product = products.find(p => p.id === id || String(p.id) === String(id));

    // Si no existe en catálogo (placeholders o datos renderizados), extraer de DOM
    if (!product) {
        const el = document.querySelector(`[data-id="${id}"]`);
        if (el) {
            const name = el.querySelector('h3')?.innerText?.trim() || 'Producto';
            const priceText = (el.querySelector('.price')?.innerText || el.querySelector('p')?.innerText || '').replace(/[^0-9.,]/g,'').replace(',', '.');
            const price = parseFloat(priceText) || 0;
            const img = el.querySelector('img')?.src || '';
            product = { id, name, price, img, desc: el.querySelector('.product-desc')?.innerText || '' };
            // Añadir al catálogo temporalmente para consistencia del carrito
            products.push(product);
        } else {
            showToast('No se encontró el producto', 'error');
            return;
        }
    }

    const existing = cart.find(item => String(item.id) === String(product.id));
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCart();
    // Abrir el carrito para mostrar al usuario el producto agregado (usa toggleCart para aria/foco)
    const cartEl = document.getElementById('cartSidebar');
    if (cartEl && !cartEl.classList.contains('active')) toggleCart();
    notifyUser("Producto agregado");
}

function changeQty(id, delta) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cartItems');
    const totalDisplay = document.getElementById('cartTotal');
    const countDisplay = document.getElementById('cart-count');
    
    cartContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" width="60">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>S/ ${item.price.toFixed(2)}</p>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <i class="fas fa-trash remove-item" onclick="changeQty(${item.id}, -${item.qty})"></i>
            </div>
        `;
    });

    // Mostrar solo el número en el span; el texto 'S/' ya está en el HTML
    totalDisplay.innerText = total.toFixed(2);
    countDisplay.innerText = count;
    localStorage.setItem('annalex_cart', JSON.stringify(cart));
}

// Vaciar carrito con confirmación
function clearCart() {
    if (!cart.length) { showToast('El carrito ya está vacío', 'error'); return; }
    if (!confirm('¿Estás seguro que deseas vaciar el carrito?')) return;
    cart = [];
    localStorage.setItem('annalex_cart', JSON.stringify(cart));
    updateCart();
    showToast('Carrito vaciado', 'success');
}

// --- 6. TESTIMONIOS DINÁMICOS ---
let testimonials = [
    { name: "Ricardo M.", text: "La calidad de los gadgets es impresionante. El proceso de pago fue inmediato." },
    { name: "Elena F.", text: "Compré un juego de muebles y llegó en menos de 48 horas. ¡Recomendados!" },
    { name: "Carlos R.", text: "Mi nuevo reloj inteligente es perfecto. Envío rapidísimo a Miraflores." }
];

let tIndex = 0;
function rotateTestimonials() {
    const container = document.getElementById('testimonial-container') || document.querySelector('.testimonial-grid');
    if (!container) return;
    
    const t = testimonials[tIndex];
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = `
            <div class="t-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p>"${t.text}"</p>
                <strong>- ${t.name}</strong>
            </div>
        `;
        container.style.opacity = '1';
        tIndex = (tIndex + 1) % testimonials.length;
    }, 500);
}

function showTestimonialForm() {
    const nombre = prompt("Tu nombre:");
    const comentario = prompt("Tu opinión sobre Annalex:");
    if (nombre && comentario) {
        testimonials.push({ name: nombre, text: comentario });
        alert("¡Gracias por tu comentario! Se mostrará pronto.");
    }
}

// --- 7. FINALIZAR COMPRA (PAGOS QR / WHATSAPP) ---
function openCheckout() {
    if (cart.length === 0) return alert("Tu carrito está vacío.");
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden','false');
    const focusable = modal.querySelector('input, button, textarea');
    if (focusable) focusable.focus();
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
}

let lastOrder = null;

function bindCheckoutForm() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;

    // Summary injection
    const summaryEl = document.getElementById('checkoutSummary');
    function updateSummary() {
        if (!summaryEl) return;
        if (!cart.length) {
            summaryEl.innerHTML = '<p>Tu carrito está vacío.</p>';
            return;
        }
        summaryEl.innerHTML = cart.map(i => `<div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span>${i.name} x${i.qty}</span><strong>S/ ${(i.price * i.qty).toFixed(2)}</strong></div>`).join('') + `<hr><div style="display:flex;justify-content:space-between;"><strong>Total</strong><strong>S/ ${cart.reduce((s,a)=>s+a.price*a.qty,0).toFixed(2)}</strong></div>`;
    }

    updateSummary();

    // File preview
    const paymentProof = document.getElementById('paymentProof');
    const preview = document.getElementById('paymentPreview');
    if (paymentProof) {
        paymentProof.onchange = () => {
            if (!preview) return;
            const f = paymentProof.files[0];
            if (!f) { preview.innerHTML = ''; return; }
            const url = URL.createObjectURL(f);
            preview.innerHTML = `<img src="${url}" style="max-width:150px;border-radius:6px;border:1px solid #eee;">`;
        };
    }

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = (document.getElementById('custName').value || '').trim();
        const phone = (document.getElementById('custPhone').value || '').trim();
        const address = (document.getElementById('custAddress').value || '').trim();

        // Validaciones simples
        const phoneRegex = /^\+?51\s?9\d{8}$/; // acepta +519XXXXXXXX o 9XXXXXXXX con optional +51
        if (!name) { showToast('Por favor ingresa tu nombre', 'error'); document.getElementById('custName').focus(); return; }
        if (!phoneRegex.test(phone)) { showToast('Ingresa un celular válido (ej: +51 912345678)', 'error'); document.getElementById('custPhone').focus(); return; }
        if (!address) { showToast('Por favor ingresa la dirección de envío', 'error'); document.getElementById('custAddress').focus(); return; }
        if (!cart.length) { showToast('Tu carrito está vacío', 'error'); return; }

        const total = cart.reduce((s,a)=>s+a.price*a.qty,0).toFixed(2);

        let message = `*NUEVO PEDIDO ANNALEX*%0A`;
        message += `*Cliente:* ${name}%0A`;
        message += `*Celular:* ${phone}%0A`;
        message += `*Dirección:* ${address}%0A`;
        message += `--------------------------%0A`;
        message += `*Productos:*%0A`;
        cart.forEach(item => {
            message += `- ${item.name} x${item.qty} (S/ ${(item.price * item.qty).toFixed(2)})%0A`;
        });
        message += `--------------------------%0A`;
        message += `*TOTAL A PAGAR:* S/ ${total}%0A%0A`;
        message += `Adjunto la captura del pago (si aplica). Por favor adjunta la imagen en la conversación de WhatsApp y escribe el número de orden si lo tienes.`;

        const whatsappUrl = `https://wa.me/51924996961?text=${message}`;
        // Store last order for success modal
        lastOrder = { id: '#' + (Math.floor(Math.random()*900000)+1000), name, phone, total };
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success modal
        closeCheckout();
        const success = document.getElementById('successModal');
        if (success) {
            const orderEl = document.getElementById('orderNumber');
            if (orderEl) orderEl.innerText = lastOrder.id;
            success.style.display = 'block';
            success.setAttribute('aria-hidden','false');
        }

        // Keep cart as-is so user confirms externally; optionally clear it
        cart = [];
        updateCart();
    });
}

// bind initially in case components already loaded
bindCheckoutForm();

document.addEventListener('components:loaded', () => {
    bindCheckoutForm();
});

// --- 8. UTILIDADES ---
function filterCat(cat) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderProducts(cat);
}

function openSearch() {
    const modal = document.getElementById('searchModal');
    if (!modal) {
        const term = prompt("¿Qué estás buscando?");
        if (term !== null) renderProducts('todos', term);
        return;
    }
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden','false');
    const input = modal.querySelector('#searchInput');
    if (input) { input.focus(); input.select(); }
}

// Simple client-side search used by the Search modal
function filterProducts() {
    const term = (document.getElementById('searchInput') || {}).value || '';
    const resultsEl = document.getElementById('searchResults');
    const matches = products.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));

    if (!resultsEl) {
        renderProducts('todos', term);
        return;
    }

    resultsEl.innerHTML = matches.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <div>
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc || ''}</p>
                <p>S/ ${p.price.toFixed(2)}</p>
            </div>
            <button class="btn-gold" onclick="addToCart(${p.id}); closeSearch();">Agregar</button>
        </div>
    `).join('');
}

// Bind the catalog search input
const catalogSearch = document.getElementById('catalogSearch');
if (catalogSearch) {
    catalogSearch.oninput = (e) => renderProducts('todos', e.target.value);
}
const catalogClear = document.getElementById('catalogClear');
if (catalogClear) catalogClear.onclick = () => { if (catalogSearch) { catalogSearch.value = ''; renderProducts(); }};

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
}

function finalOrder() {
    // Simular confirmación rápida y mostrar modal de éxito
    closeCheckout();
    const success = document.getElementById('successModal');
    if (!success) return alert('Pedido confirmado.');
    const orderEl = document.getElementById('orderNumber');
    if (orderEl) orderEl.innerText = '#' + (Math.floor(Math.random() * 900000) + 1000);
    success.style.display = 'block';
    success.setAttribute('aria-hidden','false');
}

function sendOrderWsp() {
    const orderEl = document.getElementById('orderNumber');
    const orderId = orderEl ? orderEl.innerText : '';
    const whatsappUrl = `https://wa.me/51924996961?text=Adjunto%20mi%20comprobante%20de%20pago%20Orden%20${orderId}`;
    window.open(whatsappUrl, '_blank');
}

// Toast helper
function showToast(msg, type = 'success', duration = 2800) {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerText = msg;
    document.body.appendChild(t);
    // small delay to allow CSS transition
    setTimeout(() => t.classList.add('show'), 20);
    setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 300);
    }, duration);
}

function notifyUser(msg, type = 'success') {
    try { showToast(msg, type); } catch (e) { console.log('Notificación:', msg); }
}

function renderCategoryGrid(categoryName, elementId) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    const filtered = products.filter(p => p.cat && p.cat.toLowerCase() === categoryName.toLowerCase());

    // Queremos mostrar 15 items como ejemplo en cada página de categoría
    let displayItems = [];

    if (filtered.length === 0) {
        // Si no hay productos, crear placeholders de ejemplo
        for (let i = 1; i <= 15; i++) {
            displayItems.push({ id: `ph-${categoryName}-${i}`, name: `Producto Ejemplo ${i}`, price: (50 + i * 5), img: `https://source.unsplash.com/collection/190727/600x400?sig=${i}`, desc: `${categoryName} - Producto de ejemplo.` });
        }
    } else if (filtered.length >= 15) {
        displayItems = filtered.slice(0, 15);
    } else {
        // Si hay menos de 15, duplicar ciclando los existentes para llegar a 15
        for (let i = 0; i < 15; i++) {
            const p = filtered[i % filtered.length];
            displayItems.push(p);
        }
    }

    grid.innerHTML = displayItems.map((p, idx) => `
        <div class="product-card" data-id="${p.id}" data-price="${p.price}">
            <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
            <div class="info">
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc || ''}</p>
                <div class="price">S/ ${Number(p.price).toFixed(2)}</div>
            </div>
            <button class="btn-gold" onclick="addToCart(${p.id})">Agregar</button>
        </div>
    `).join('');
}

// --- INICIALIZACIÓN (compatibilidad con carga tardía) ---
function init() {
    // Configurar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Inicializar estado del icono de tema y enlazar el botón
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        if (themeIcon) {
            themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        themeToggle.onclick = toggleTheme;
    }

    // Activar componentes
    renderProducts();
    updateCart();
    initCountdown();
    bindCheckoutForm();

    // Intervalos dinámicos
    setInterval(rotateTestimonials, 3000);
    rotateTestimonials();

    // Menú Hamburguesa
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
        menuBtn.onclick = () => navLinks.classList.toggle('active');
    }

    // Botón del carrito: abre/cierra el sidebar
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.onclick = () => toggleCart();
    }

    // Botón de búsqueda (junto al carrito) - abre modal y enfoca el input
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.onclick = () => openSearch();
    }

    // Mejoras para el Search Modal: overlay click para cerrar y manejo del input
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
        searchModal.addEventListener('click', (e) => { if (e.target === searchModal) closeSearch(); });
        const searchInput = searchModal.querySelector('#searchInput');
        if (searchInput) {
            searchInput.oninput = filterProducts;
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); filterProducts(); const firstBtn = document.querySelector('#searchResults .product-card .btn-gold'); if (firstBtn) firstBtn.focus(); }
            });
        }
    }

    // Botón Ver Productos (hero)
    const viewBtn = document.getElementById('viewProductsBtn');
    if (viewBtn) viewBtn.onclick = (e) => { e.preventDefault(); document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth'}); };

    // Cerrar carrito al hacer click fuera de él
    document.addEventListener('click', (e) => {
        const cartEl = document.getElementById('cartSidebar');
        if (!cartEl) return;
        if (!cartEl.classList.contains('active')) return;
        const target = e.target;
        // Si se clickeó el botón del carrito, no cerramos
        if (cartBtn && (cartBtn === target || cartBtn.contains(target))) return;
        if (!cartEl.contains(target)) cartEl.classList.remove('active');
    });

    // Cerrar con Escape (carrito y modales)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cartEl = document.getElementById('cartSidebar');
            if (cartEl && cartEl.classList.contains('active')) cartEl.classList.remove('active');
            const modal = document.querySelector('.modal[aria-hidden="false"]');
            if (modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
        }
    });

    // Render category-specific grids if the page contains them
    renderCategoryGrid('Moda', 'modaGrid');
    renderCategoryGrid('Tecnologia', 'techGrid');
    renderCategoryGrid('Hogar', 'hogarGrid');
    renderCategoryGrid('Accesorios', 'accesoriosGrid');

    // Inyectar JSON-LD para la categoría de accesorios (si existe)
    const accGrid = document.getElementById('accesoriosGrid');
    if (accGrid) injectCategoryJsonLd('Accesorios');

    // render featured products in footer
    renderFooterFeatured();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

function renderFooterFeatured(limit = 3) {
    const el = document.getElementById('footerFeatured');
    if (!el) return;
    const featured = products.slice(0, limit);
    el.innerHTML = featured.map(p => `<div class="footer-product"><a href="#" onclick="alert('Ir al producto: ${p.name}');return false;"><strong>${p.name}</strong></a><div class="price">S/ ${p.price.toFixed(2)}</div></div>`).join('');
}

function injectCategoryJsonLd(categoryName) {
    // Evitar insertar duplicados si ya existe un ItemList estático
    if (document.querySelector('script.ann-itemlist')) return;

    const filtered = products.filter(p => p.cat && p.cat.toLowerCase() === categoryName.toLowerCase());
    if (!filtered.length) return;

    const itemList = filtered.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Product",
            "name": p.name,
            "image": p.img,
            "description": p.desc ? p.desc : `${p.name} - ${categoryName} de calidad premium.`,
            "sku": String(p.id),
            "offers": {
                "@type": "Offer",
                "priceCurrency": "PEN",
                "price": parseFloat(p.price).toFixed(2)
            },
            "url": `https://your-domain.example/${categoryName.toLowerCase()}.html#p${p.id}`
        }
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `${categoryName} - Annalex Store` ,
        "itemListElement": itemList
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.className = 'ann-itemlist';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}