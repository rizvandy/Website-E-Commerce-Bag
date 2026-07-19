/* ===========================
   MyBag — Shared App Logic
   =========================== */

// ===== Product Data =====
const PRODUCTS = [
  {id:1, name:'Classic Tote', price:1250000, cat:'daily', img:'../assets/images/Hand Bag depan.png', desc:'Tote bag klasik dari kulit pilihan. Sempurna untuk aktivitas sehari-hari.'},
  {id:2, name:'Heritage Backpack', price:2100000, cat:'travel', img:'../assets/images/Ransel Bag depan.png', desc:'Ransel kulit warisan dengan desain timeless. Ideal untuk petualangan dan kerja.'},
  {id:3, name:'Slim Crossbody', price:980000, cat:'daily', img:'../assets/images/Sling Bag depan.png', desc:'Tas selempang ramping dan elegan. Ringkas namun cukup untuk essentials Anda.'},
];

// ===== Format Rupiah =====
function formatRupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

// ===== Cart Store (localStorage) =====
const CartStore = {
  _key: 'mybag_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this._key) || '[]'); }
    catch(e) { return []; }
  },

  save(cart) {
    localStorage.setItem(this._key, JSON.stringify(cart));
    updateCartBadge();
  },

  add(product) {
    const cart = this.get();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
    }
    this.save(cart);
    showToast(product.name + ' ditambahkan ke keranjang!', 'bi-bag-check-fill', 'success');
  },

  remove(id) {
    const cart = this.get().filter(item => item.id !== id);
    this.save(cart);
  },

  updateQty(id, qty) {
    let cart = this.get();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty = qty;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
      this.save(cart);
    }
  },

  getCount() {
    return this.get().reduce((sum, item) => sum + item.qty, 0);
  },

  getSubtotal() {
    return this.get().reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  clear() {
    localStorage.removeItem(this._key);
    updateCartBadge();
  }
};

// ===== Wishlist Store (localStorage) =====
const WishlistStore = {
  _key: 'mybag_wishlist',

  get() {
    try { return JSON.parse(localStorage.getItem(this._key) || '[]'); }
    catch(e) { return []; }
  },

  save(wishlist) {
    localStorage.setItem(this._key, JSON.stringify(wishlist));
    updateWishlistBadge();
  },

  toggle(product) {
    let wishlist = this.get();
    const index = wishlist.findIndex(item => item.id === product.id);
    let added = false;
    if (index !== -1) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push({ id: product.id, name: product.name, price: product.price, img: product.img, cat: product.cat, desc: product.desc });
      added = true;
    }
    this.save(wishlist);
    return added;
  },

  has(id) {
    return this.get().some(item => item.id === id);
  },

  remove(id) {
    const wishlist = this.get().filter(item => item.id !== id);
    this.save(wishlist);
  },

  getCount() {
    return this.get().length;
  }
};

// ===== Wishlist Badge =====
function updateWishlistBadge() {
  var badge = document.getElementById('wishlistBadge');
  if (badge) {
    var count = WishlistStore.getCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ===== Toast System =====
function showToast(message, icon, type) {
  icon = icon || 'bi-check-circle-fill';
  type = type || '';
  var container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  var toast = document.createElement('div');
  toast.className = 'toast-item ' + type;
  toast.innerHTML = '<i class="bi ' + icon + '"></i><span>' + message + '</span>';
  container.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('toast-out');
    setTimeout(function() { toast.remove(); }, 300);
  }, 3000);
}

// ===== Cart Badge =====
function updateCartBadge() {
  var badge = document.getElementById('cartBadge');
  if (badge) {
    var count = CartStore.getCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ===== Active Nav Link =====
function setActiveNavLink() {
  var currentPage = window.location.pathname.split('/').pop() || 'beranda.html';
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
    var href = links[i].getAttribute('href');
    if (href === currentPage) {
      links[i].classList.add('active');
    }
  }
}

// ===== Search Overlay =====
function initSearch() {
  var searchIcon = document.querySelector('.search-trigger');
  var overlay = document.getElementById('searchOverlay');
  var input = document.getElementById('searchOverlayInput');
  var closeBtn = document.getElementById('searchCloseBtn');
  var resultsContainer = document.getElementById('searchResults');

  if (!searchIcon || !overlay) return;

  searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(function() { input.focus(); }, 300);
  });

  closeBtn.addEventListener('click', function() {
    overlay.classList.remove('active');
    input.value = '';
    resultsContainer.innerHTML = '<p class="search-hint"><i class="bi bi-search me-2"></i>Ketik untuk mencari produk...</p>';
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      input.value = '';
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      input.value = '';
    }
  });

  input.addEventListener('input', function() {
    var query = input.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '<p class="search-hint"><i class="bi bi-search me-2"></i>Ketik untuk mencari produk...</p>';
      return;
    }

    var results = PRODUCTS.filter(function(p) {
      return p.name.toLowerCase().includes(query) ||
             p.cat.toLowerCase().includes(query) ||
             p.desc.toLowerCase().includes(query);
    });

    if (results.length === 0) {
      resultsContainer.innerHTML = '<p class="search-no-results"><i class="bi bi-emoji-frown d-block mb-2" style="font-size:1.5rem;"></i>Tidak ada produk yang cocok.</p>';
      return;
    }

    resultsContainer.innerHTML = results.map(function(p) {
      return '<a href="detail-produk.html?id=' + p.id + '" class="search-result-item">' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
        '<div class="info"><h6>' + p.name + '</h6><span>' + formatRupiah(p.price) + '</span></div>' +
        '</a>';
    }).join('');
  });
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length === 0) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(function(el) { observer.observe(el); });
}

// ===== Counter Animation =====
function initCounterAnimation() {
  var sections = document.querySelectorAll('.counter-section');
  if (sections.length === 0) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(function(counter) {
          var target = parseInt(counter.dataset.count);
          var suffix = counter.dataset.suffix || '';
          var duration = 2000;
          var startTime = performance.now();

          function update(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(function(el) { observer.observe(el); });
}

// ===== Scroll-to-Top =====
function initScrollTop() {
  var btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Load Navbar =====
function loadNavbar() {
  var navContainer = document.getElementById('navbar');
  if (!navContainer) return;

  fetch('../component/navbar.html')
    .then(function(r) { return r.text(); })
    .then(function(data) {
      navContainer.innerHTML = data;
      setActiveNavLink();
      updateCartBadge();
      updateWishlistBadge();
      initSearch();

      var nav = document.querySelector('.navbar-custom');
      if (nav) {
        window.addEventListener('scroll', function() {
          if (window.scrollY > 20) {
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            nav.style.background = 'rgba(250,250,250,0.95)';
          } else {
            nav.style.boxShadow = '0 1px 10px rgba(0,0,0,0.04)';
            nav.style.background = 'rgba(250,250,250,0.85)';
          }
        });
      }
    });
}

// ===== Load Footer =====
function loadFooter() {
  var footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  fetch('../component/footer.html')
    .then(function(r) { return r.text(); })
    .then(function(data) {
      footerContainer.innerHTML = data;
      initScrollTop();
    });
}

// ===== Init on DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
  setTimeout(initScrollReveal, 100);
  setTimeout(initCounterAnimation, 200);
});
