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
  var badges = [document.getElementById('wishlistBadge'), document.getElementById('wishlistBadgeBottom')];
  var count = WishlistStore.getCount();
  badges.forEach(function(badge) {
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  });
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
  var badges = [document.getElementById('cartBadge'), document.getElementById('cartBadgeBottom')];
  var count = CartStore.getCount();
  badges.forEach(function(badge) {
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  });
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
      injectQuickViewModal();
      updateWishlistButtons();

      // bottom navigation active state sync
      var currentPage = window.location.pathname.split('/').pop() || 'beranda.html';
      var bottomLinks = document.querySelectorAll('.mobile-bottom-nav-item');
      bottomLinks.forEach(function(link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });

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
  setTimeout(updateWishlistButtons, 300);
});

// ===== Premium UX Helper Functions =====

function toggleWishlistProduct(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  var product = PRODUCTS.find(function(p){ return p.id === id; });
  if (!product) return;
  var added = WishlistStore.toggle(product);
  if (added) {
    showToast(product.name + ' ditambahkan ke wishlist!', 'bi-heart-fill', 'success');
  } else {
    showToast(product.name + ' dihapus dari wishlist!', 'bi-heart', 'error');
  }
  updateWishlistButtons();
}

function updateWishlistButtons() {
  var buttons = document.querySelectorAll('.wishlist-quick-btn');
  buttons.forEach(function(btn) {
    var id = Number(btn.dataset.wishlistId);
    var isSaved = WishlistStore.has(id);
    btn.classList.toggle('active', isSaved);
    var icon = btn.querySelector('i');
    if (icon) {
      if (isSaved) {
        icon.className = 'bi bi-heart-fill';
      } else {
        icon.className = 'bi bi-heart';
      }
    }
  });
}

function triggerButtonFeedback(button) {
  if (!button) return;
  button.disabled = true;
  button.classList.add('btn-success-feedback');
  var currentContent = button.innerHTML;
  button.innerHTML = 'Added <i class="bi bi-check2"></i>';
  setTimeout(function() {
    button.innerHTML = currentContent;
    button.classList.remove('btn-success-feedback');
    button.disabled = false;
  }, 1200);
}

function injectQuickViewModal() {
  if (document.getElementById('quickViewModal')) return;
  var modalHtml = 
    '<div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">' +
      '<div class="modal-dialog modal-dialog-centered modal-lg">' +
        '<div class="modal-content" style="border-radius:24px; border:none; overflow:hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">' +
          '<div class="modal-body p-0">' +
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="position:absolute; top:20px; right:20px; z-index:100; background-color:#fff; padding:10px; border-radius:50%; box-shadow:0 4px 10px rgba(0,0,0,0.05); border:none;"></button>' +
            '<div class="row g-0">' +
              '<div class="col-md-6">' +
                '<div class="img-wrap" style="aspect-ratio:3/4; width:100%; background:#fff;">' +
                  '<img id="qvImage" src="" alt="" style="width:100%; height:100%; object-fit:cover;">' +
                '</div>' +
              '</div>' +
              '<div class="col-md-6 d-flex flex-column justify-content-center p-4 p-md-5">' +
                '<span id="qvCat" class="mb-2" style="font-size:0.75rem; text-transform:uppercase; font-weight:600; color:var(--primary); background:var(--primary-light); padding:0.25rem 0.75rem; border-radius:50px; width:fit-content;"></span>' +
                '<h3 id="qvName" class="fw-bold mb-2"></h3>' +
                '<p id="qvPrice" class="price mb-3" style="color:var(--primary); font-weight:800; font-size:1.4rem;"></p>' +
                '<p id="qvDesc" class="text-secondary mb-4" style="font-size:0.92rem; line-height:1.6;"></p>' +
                '<div class="d-flex gap-3 align-items-center">' +
                  '<button id="qvAddToCartBtn" class="btn-main flex-grow-1" style="border-radius:50px; padding:0.75rem 1.5rem;">' +
                    'Add to Cart <i class="bi bi-bag-plus ms-1"></i>' +
                  '</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  var div = document.createElement('div');
  div.innerHTML = modalHtml;
  document.body.appendChild(div.firstElementChild);
}

function showQuickView(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  var product = PRODUCTS.find(function(p){ return p.id === id; });
  if (!product) return;
  
  injectQuickViewModal();
  
  document.getElementById('qvImage').src = product.img;
  document.getElementById('qvImage').alt = product.name;
  document.getElementById('qvCat').textContent = product.cat.toUpperCase();
  document.getElementById('qvName').textContent = product.name;
  document.getElementById('qvPrice').textContent = formatRupiah(product.price);
  document.getElementById('qvDesc').textContent = product.desc;
  
  var cartBtn = document.getElementById('qvAddToCartBtn');
  cartBtn.onclick = function() {
    CartStore.add(product);
    triggerButtonFeedback(cartBtn);
    setTimeout(function() {
      var modalEl = document.getElementById('quickViewModal');
      var modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }, 1200);
  };
  
  var modalEl = document.getElementById('quickViewModal');
  var modal = new bootstrap.Modal(modalEl);
  modal.show();
}
