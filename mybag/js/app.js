/* ===========================
   MyBag — Shared App Logic & Multi-Language (i18n) Engine
   =========================== */

// ===== i18n Translation Dictionary =====
const TRANSLATIONS = {
  id: {
    // Nav
    nav_home: "Beranda",
    nav_products: "Produk",
    nav_about: "Tentang Kami",
    nav_contact: "Kontak",
    search_placeholder: "Cari produk...",
    search_hint: "Ketik untuk mencari produk...",
    search_no_results: "Tidak ada produk yang cocok.",

    // Footer
    footer_tagline: "Tas kulit premium yang dibuat untuk para penjelajah modern. Dirancang untuk bertahan, dibuat untuk menginspirasi.",
    footer_nav: "NAVIGASI",
    footer_contact: "KONTAK",
    footer_newsletter: "BERITA & PROMO",
    footer_newsletter_hint: "Dapatkan info koleksi terbaru.",
    footer_email_placeholder: "Email Anda",
    footer_copyright: "© 2026 MyBag. Hak Cipta Dilindungi.",
    footer_terms: "Syarat & Ketentuan",
    footer_privacy: "Kebijakan Privasi",

    // General & Buttons
    btn_add_to_cart: "Tambah ke Keranjang",
    btn_added: "Ditambahkan",
    btn_explore: "Jelajahi Produk",
    btn_learn_more: "Pelajari Lebih Lanjut",
    btn_send_message: "Kirim Pesan",
    btn_sign_in: "Masuk",
    btn_sign_up: "Daftar",
    btn_back_home: "Kembali ke Beranda",
    btn_checkout: "Lanjut ke Pembayaran",
    btn_apply: "Gunakan",
    btn_quick_view: "Lihat Cepat",

    // Beranda
    hero_badge: "Produk Kulit Premium",
    hero_title: "Bawa Petualangan Anda dengan Gaya",
    hero_desc: "Tas kulit premium yang dirancang untuk menemani setiap perjalanan Anda — elegan, tahan lama, dan penuh karakter.",
    why_eyebrow: "Kenapa MyBag",
    why_title: "Dibuat untuk Bertahan",
    feat_1_title: "Kualitas Premium",
    feat_1_desc: "Kulit pilihan dan jahitan tangan memastikan setiap produk tahan lama.",
    feat_2_title: "Desain Elegan",
    feat_2_desc: "Desain minimalis dan timeless yang cocok untuk segala suasana.",
    feat_3_title: "Pengiriman Aman",
    feat_3_desc: "Pengemasan aman dan pengiriman terpercaya ke seluruh Indonesia.",
    latest_eyebrow: "Koleksi Terbaru",
    latest_title: "Koleksi Kami",
    btn_view_all: "Lihat Semua Produk",

    // Produk
    prod_eyebrow: "Koleksi Kami",
    prod_title: "Jelajahi Koleksi",
    prod_subtitle: "Temukan tas kulit premium yang sesuai dengan gaya perjalanan Anda.",
    filter_all: "Semua",
    filter_travel: "Travel",
    filter_daily: "Harian",
    filter_premium: "Premium",
    prod_no_results: "Tidak ada produk yang cocok.",

    // Detail Produk
    detail_qty: "Jumlah:",
    detail_feat_1: "Kulit grade premium 100% asli",
    detail_feat_2: "Jahitan tangan oleh pengrajin berpengalaman",
    detail_feat_3: "Garansi kualitas 2 tahun",
    detail_feat_4: "Gratis ongkir untuk pembelian di atas Rp 2.000.000",
    detail_feat_5: "30 hari pengembalian mudah",
    related_eyebrow: "Produk Lainnya",
    related_title: "Anda Mungkin Juga Suka",

    // Tentang Kami
    about_story_eyebrow: "Tentang Kami",
    about_story_title: "Cerita Kami",
    about_p1: "MyBag lahir dari kecintaan terhadap kerajinan kulit tradisional dan gaya hidup modern yang selalu bergerak. Sejak 2018, kami merancang tas kulit premium yang menemani para penjelajah dalam setiap langkah perjalanan mereka — dari kota besar hingga jalur pegunungan.",
    about_p2: "Setiap produk dibuat oleh pengrajin berpengalaman menggunakan kulit pilihan, memadukan ketahanan dengan estetika yang timeless. Kami percaya sebuah tas bukan hanya aksesori, tetapi bagian dari cerita perjalanan Anda.",
    about_val_eyebrow: "Nilai Kami",
    about_val_title: "Prinsip & Nilai Kami",
    val_1_title: "Kualitas",
    val_1_desc: "Kami hanya menggunakan kulit grade premium dengan proses quality-control yang ketat pada setiap tahap produksi.",
    val_2_title: "Keberlanjutan",
    val_2_desc: "Berkomitmen pada proses produksi yang bertanggung jawab dan meminimalkan limbah di setiap prosesnya.",
    val_3_title: "Inovasi",
    val_3_desc: "Menggabungkan teknik tradisional dengan desain kontemporer untuk kebutuhan gaya hidup masa kini.",
    stat_eyebrow: "Pencapaian",
    stat_title: "Dalam Angka",
    stat_1_label: "Pelanggan",
    stat_2_label: "Produk",
    stat_3_label: "Kota",
    stat_4_label: "Kepuasan",
    cta_title: "Siap untuk Petualangan Berikutnya?",
    cta_desc: "Temukan tas kulit yang sempurna untuk menemani perjalanan Anda berikutnya.",

    // Kontak
    contact_eyebrow: "Hubungi Kami",
    contact_title: "Hubungi Penjelajah Modern",
    contact_addr_title: "Alamat",
    contact_addr_val: "Jl. Puncak Indah, Surabaya, Indonesia",
    contact_email_title: "Email",
    contact_phone_title: "Telepon",
    form_fullname: "Nama Lengkap",
    form_fullname_ph: "Nama lengkap Anda",
    form_email: "Alamat Email",
    form_email_ph: "nama@email.com",
    form_password: "Password",
    form_password_ph: "Masukkan password",
    form_subject: "Subjek",
    form_subject_ph: "Subjek pesan",
    form_message: "Pesan",
    form_message_ph: "Tulis pesan Anda...",
    err_name: "Nama wajib diisi.",
    err_email: "Masukkan email yang valid.",
    err_subject: "Subjek wajib diisi.",
    err_message: "Pesan wajib diisi.",
    toast_contact_success: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",

    // Keranjang Belanja
    cart_eyebrow: "Keranjang Belanja",
    cart_title: "Pesanan Saya",
    cart_subtitle: "Tinjau pesanan Anda sebelum melakukan checkout.",
    cart_th_product: "Produk",
    cart_th_price: "Harga",
    cart_th_qty: "Jumlah",
    cart_th_subtotal: "Subtotal",
    cart_th_action: "Aksi",
    cart_promo_ph: "Kode promo (misal: DISKON10)",
    cart_summary_title: "Ringkasan Pesanan",
    cart_subtotal_label: "Subtotal",
    cart_shipping_label: "Pengiriman",
    cart_shipping_val: "GRATIS",
    cart_discount_label: "Diskon",
    cart_total_label: "Total Pembayaran",
    cart_empty_title: "Keranjang Anda Kosong",
    cart_empty_desc: "Belum ada produk di keranjang belanja Anda.",

    // Wishlist
    wishlist_eyebrow: "Pilihan Anda",
    wishlist_title: "Wishlist Saya",
    wishlist_count_singular: "item tersimpan",
    wishlist_count_plural: "item tersimpan",
    wishlist_empty_title: "Wishlist Kosong",
    wishlist_empty_desc: "Belum ada produk yang Anda tambahkan ke wishlist.",
    btn_start_shopping: "Mulai Cari Produk",

    // Login & Register
    login_title: "Selamat Datang Kembali",
    login_subtitle: "Masuk ke akun MyBag Anda",
    login_divider: "atau masuk dengan email",
    login_remember: "Ingat saya",
    login_forgot: "Lupa kata sandi?",
    login_no_account: "Belum punya akun?",
    login_register_link: "Daftar sekarang",
    reg_title: "Buat Akun Baru",
    reg_subtitle: "Bergabung dengan komunitas MyBag",
    reg_pass_ph: "Buat password (min. 6 karakter)",
    reg_confirm_pass: "Konfirmasi Password",
    reg_confirm_pass_ph: "Ulangi password Anda",
    reg_agree: "Saya setuju dengan Syarat & Ketentuan",
    reg_has_account: "Sudah punya akun?",
    reg_login_link: "Masuk di sini",

    // Pesanan Berhasil
    success_title: "Pesanan Berhasil!",
    success_desc: "Terima kasih telah berbelanja di MyBag. Pesanan Anda sedang diproses.",
    success_order_id: "ID Pesanan:",
    success_est_delivery: "Estimasi Pengiriman: 2 - 4 Hari Kerja",
    success_summary_title: "Rincian Pesanan",

    // Toasts
    toast_added_cart: "ditambahkan ke keranjang!",
    toast_added_wishlist: "ditambahkan ke wishlist!",
    toast_removed_cart: "dihapus dari keranjang!",
    toast_removed_wishlist: "dihapus dari wishlist!",
    toast_newsletter_success: "Terima kasih! Anda berhasil berlangganan berita & promo MyBag."
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact",
    search_placeholder: "Search products...",
    search_hint: "Type to search products...",
    search_no_results: "No matching products found.",

    // Footer
    footer_tagline: "Premium leather goods crafted for modern explorers. Designed to last, made to inspire.",
    footer_nav: "NAVIGATION",
    footer_contact: "CONTACT",
    footer_newsletter: "NEWSLETTER",
    footer_newsletter_hint: "Get news on latest collections.",
    footer_email_placeholder: "Your email address",
    footer_copyright: "© 2026 MyBag. All rights reserved.",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",

    // General & Buttons
    btn_add_to_cart: "Add to Cart",
    btn_added: "Added",
    btn_explore: "Explore Products",
    btn_learn_more: "Learn More",
    btn_send_message: "Send Message",
    btn_sign_in: "Sign In",
    btn_sign_up: "Sign Up",
    btn_back_home: "Back to Home",
    btn_checkout: "Checkout Order",
    btn_apply: "Apply",
    btn_quick_view: "Quick View",

    // Beranda
    hero_badge: "Premium Leather Goods",
    hero_title: "Carry Your Adventure in Style",
    hero_desc: "Premium leather bags designed to accompany every step of your journey — elegant, durable, and full of character.",
    why_eyebrow: "Why MyBag",
    why_title: "Built to Last",
    feat_1_title: "Premium Quality",
    feat_1_desc: "Selected leather and hand stitching ensure every product is built to last.",
    feat_2_title: "Elegant Design",
    feat_2_desc: "Minimalist and timeless design suitable for any occasion.",
    feat_3_title: "Secure Delivery",
    feat_3_desc: "Safe packaging and trusted delivery across Indonesia.",
    latest_eyebrow: "Latest Collection",
    latest_title: "Our Collection",
    btn_view_all: "View All Products",

    // Produk
    prod_eyebrow: "Our Collection",
    prod_title: "Explore Collection",
    prod_subtitle: "Discover premium leather bags tailored to your journey.",
    filter_all: "All",
    filter_travel: "Travel",
    filter_daily: "Daily",
    filter_premium: "Premium",
    prod_no_results: "No matching products found.",

    // Detail Produk
    detail_qty: "Quantity:",
    detail_feat_1: "100% genuine premium grade leather",
    detail_feat_2: "Hand-stitched by experienced artisans",
    detail_feat_3: "2-year quality warranty",
    detail_feat_4: "Free shipping for orders over Rp 2.000.000",
    detail_feat_5: "30-day easy returns",
    related_eyebrow: "Other Products",
    related_title: "You May Also Like",

    // Tentang Kami
    about_story_eyebrow: "About Us",
    about_story_title: "Our Story",
    about_p1: "MyBag was born out of a passion for traditional leather craftsmanship and the active modern lifestyle. Since 2018, we have designed premium leather bags to accompany explorers — from bustling cities to mountain trails.",
    about_p2: "Every product is created by master artisans using premium leather, blending durability with timeless aesthetics. We believe a bag is not just an accessory, but a partner in your journey.",
    about_val_eyebrow: "Our Values",
    about_val_title: "What We Stand For",
    val_1_title: "Quality",
    val_1_desc: "We only use top-grade leather with strict quality control at every production stage.",
    val_2_title: "Sustainability",
    val_2_desc: "Committed to responsible manufacturing processes and minimizing waste.",
    val_3_title: "Innovation",
    val_3_desc: "Combining traditional techniques with contemporary design for modern living.",
    stat_eyebrow: "Milestones",
    stat_title: "In Numbers",
    stat_1_label: "Customers",
    stat_2_label: "Products",
    stat_3_label: "Cities",
    stat_4_label: "Satisfaction",
    cta_title: "Ready for Your Next Adventure?",
    cta_desc: "Find the perfect leather bag to accompany your next journey.",

    // Kontak
    contact_eyebrow: "Get in Touch",
    contact_title: "Contact Modern Explorers",
    contact_addr_title: "Address",
    contact_addr_val: "Jl. Puncak Indah, Surabaya, Indonesia",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    form_fullname: "Full Name",
    form_fullname_ph: "Your full name",
    form_email: "Email Address",
    form_email_ph: "name@email.com",
    form_password: "Password",
    form_password_ph: "Enter password",
    form_subject: "Subject",
    form_subject_ph: "Message subject",
    form_message: "Message",
    form_message_ph: "Write your message...",
    err_name: "Full name is required.",
    err_email: "Please enter a valid email address.",
    err_subject: "Subject is required.",
    err_message: "Message is required.",
    toast_contact_success: "Message sent successfully! We will contact you soon.",

    // Keranjang Belanja
    cart_eyebrow: "Shopping Cart",
    cart_title: "Your Orders",
    cart_subtitle: "Review your items before proceeding to checkout.",
    cart_th_product: "Product",
    cart_th_price: "Price",
    cart_th_qty: "Quantity",
    cart_th_subtotal: "Subtotal",
    cart_th_action: "Action",
    cart_promo_ph: "Promo code (e.g. DISKON10)",
    cart_summary_title: "Order Summary",
    cart_subtotal_label: "Subtotal",
    cart_shipping_label: "Shipping",
    cart_shipping_val: "FREE",
    cart_discount_label: "Discount",
    cart_total_label: "Total Payment",
    cart_empty_title: "Your Cart is Empty",
    cart_empty_desc: "There are no products in your shopping cart yet.",

    // Wishlist
    wishlist_eyebrow: "Your Saved Items",
    wishlist_title: "My Wishlist",
    wishlist_count_singular: "item saved",
    wishlist_count_plural: "items saved",
    wishlist_empty_title: "Wishlist is Empty",
    wishlist_empty_desc: "You haven't added any products to your wishlist yet.",
    btn_start_shopping: "Start Browsing",

    // Login & Register
    login_title: "Welcome Back",
    login_subtitle: "Sign in to your MyBag account",
    login_divider: "or sign in with email",
    login_remember: "Remember me",
    login_forgot: "Forgot password?",
    login_no_account: "Don't have an account?",
    login_register_link: "Sign up now",
    reg_title: "Create an Account",
    reg_subtitle: "Join the MyBag community",
    reg_pass_ph: "Create password (min. 6 characters)",
    reg_confirm_pass: "Confirm Password",
    reg_confirm_pass_ph: "Re-enter your password",
    reg_agree: "I agree to the Terms & Conditions",
    reg_has_account: "Already have an account?",
    reg_login_link: "Sign in here",

    // Pesanan Berhasil
    success_title: "Order Successful!",
    success_desc: "Thank you for shopping with MyBag. Your order is being processed.",
    success_order_id: "Order ID:",
    success_est_delivery: "Estimated Delivery: 2 - 4 Working Days",
    success_summary_title: "Order Breakdown",

    // Toasts
    toast_added_cart: "added to cart!",
    toast_added_wishlist: "added to wishlist!",
    toast_removed_cart: "removed from cart!",
    toast_removed_wishlist: "removed from wishlist!",
    toast_newsletter_success: "Thank you! You have successfully subscribed to MyBag newsletter & promos."
  }
};

// ===== Bilingual Product Descriptions =====
const PRODUCTS_DATA_EN = {
  1: { name: 'Classic Tote', desc: 'Classic leather tote bag. Perfect for daily activities.' },
  2: { name: 'Heritage Backpack', desc: 'Heritage leather backpack with timeless design. Ideal for adventure and work.' },
  3: { name: 'Slim Crossbody', desc: 'Sleek and elegant crossbody bag. Compact yet spacious for your essentials.' }
};

// ===== i18n Store Engine =====
const I18nStore = {
  _key: 'mybag_lang',

  getLang() {
    return localStorage.getItem(this._key) || 'id';
  },

  setLang(lang) {
    if (lang !== 'id' && lang !== 'en') lang = 'id';
    localStorage.setItem(this._key, lang);
    this.applyTranslations();
  },

  toggle() {
    const current = this.getLang();
    const next = current === 'id' ? 'en' : 'id';
    this.setLang(next);
  },

  t(key) {
    const lang = this.getLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;
    return dict[key] || (TRANSLATIONS.id[key] || key);
  },

  getProduct(p) {
    const lang = this.getLang();
    const translatedP = Object.assign({}, p);

    if (lang === 'en') {
      if (PRODUCTS_DATA_EN[p.id]) {
        Object.assign(translatedP, PRODUCTS_DATA_EN[p.id]);
      }
      if (p.cat === 'daily') translatedP.cat = 'DAILY';
      else if (p.cat === 'travel') translatedP.cat = 'TRAVEL';
      else if (p.cat === 'premium') translatedP.cat = 'PREMIUM';
      else translatedP.cat = String(p.cat).toUpperCase();
    } else {
      if (p.cat === 'daily') translatedP.cat = 'HARIAN';
      else if (p.cat === 'travel') translatedP.cat = 'TRAVEL';
      else if (p.cat === 'premium') translatedP.cat = 'PREMIUM';
      else translatedP.cat = String(p.cat).toUpperCase();
    }
    return translatedP;
  },

  applyTranslations() {
    const lang = this.getLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;

    // Translate inner text for tagged elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        const icon = el.querySelector('i');
        if (icon) {
          el.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
              child.textContent = ' ' + dict[key] + ' ';
            }
          });
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    const searchOverlayInput = document.getElementById('searchOverlayInput');
    if (searchOverlayInput && dict.search_placeholder) {
      searchOverlayInput.setAttribute('placeholder', dict.search_placeholder);
    }
    const searchHintEl = document.querySelector('#searchResults .search-hint span');
    if (searchHintEl && dict.search_hint) {
      searchHintEl.textContent = dict.search_hint;
    }

    // Update active language badge buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      const textSpan = btn.querySelector('.lang-text') || btn.querySelector('#langText');
      if (textSpan) {
        textSpan.textContent = lang.toUpperCase();
      } else {
        btn.innerHTML = '<i class="bi bi-globe me-1"></i><span class="lang-text">' + lang.toUpperCase() + '</span>';
      }
      btn.title = lang === 'id' ? 'Switch to English (EN)' : 'Ganti ke Bahasa Indonesia (ID)';
    });

    // Re-render active page dynamic scripts if defined
    if (typeof render === 'function') render();
    if (typeof renderHomeProducts === 'function') renderHomeProducts();
    if (typeof renderWishlist === 'function') renderWishlist();
    if (typeof renderCartTable === 'function') renderCartTable();
  }
};

// ===== Product Data =====
const PRODUCTS = [
  {id:1, name:'Classic Tote', price:1250000, cat:'daily', img:'../assets/images/Hand Bag depan.png', desc:'Tote bag klasik dari kulit pilihan. Sempurna untuk aktivitas sehari-hari.'},
  {id:2, name:'Heritage Backpack', price:2100000, cat:'travel', img:'../assets/images/Ransel Bag depan.png', desc:'Ransel kulit warisan dengan desain timeless. Ideal untuk petualangan dan kerja.'},
  {id:3, name:'Slim Crossbody', price:980000, cat:'daily', img:'../assets/images/Sling Bag depan.png', desc:'Tas selempang ramping dan elegan. Ringkas namun cukup untuk essentials Anda.'},
];

// Helper to get translated products
function getTranslatedProducts() {
  return PRODUCTS.map(p => I18nStore.getProduct(p));
}

// ===== Render Home Page Products =====
function renderHomeProducts() {
  const container = document.getElementById('homeProductGrid');
  if (!container) return;

  const products = getTranslatedProducts();
  container.innerHTML = products.map((p, i) => {
    return `
      <div class="col-6 col-md-6 col-lg-4 reveal revealed" style="animation-delay:${i * 0.08}s;">
        <div class="product-card">
          <a href="detail-produk.html?id=${p.id}">
            <div class="img-wrap">
              <img src="${p.img}" alt="${p.name}" loading="lazy">
              <button class="wishlist-quick-btn" data-wishlist-id="${p.id}" onclick="toggleWishlistProduct(${p.id}, event);"><i class="bi bi-heart"></i></button>
              <button class="quick-view-btn" onclick="showQuickView(${p.id}, event);"><i class="bi bi-eye"></i> ${I18nStore.t('btn_quick_view')}</button>
            </div>
          </a>
          <div class="body">
            <p class="cat-tag mb-1">${p.cat}</p>
            <h6 class="fw-semibold mb-1">${p.name}</h6>
            <p class="price mb-2">${formatRupiah(p.price)}</p>
            <button class="btn-main w-100 justify-content-center" data-id="${p.id}" onclick="CartStore.add(PRODUCTS.find(pr=>pr.id===${p.id})); triggerButtonFeedback(this);">
              ${I18nStore.t('btn_add_to_cart')} <i class="bi bi-bag-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof updateWishlistButtons === 'function') {
    updateWishlistButtons();
  }
}
window.renderHomeProducts = renderHomeProducts;

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
    const pTrans = I18nStore.getProduct(product);
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: pTrans.name, price: pTrans.price, img: pTrans.img, qty: 1 });
    }
    this.save(cart);
    showToast(pTrans.name + ' ' + I18nStore.t('toast_added_cart'), 'bi-bag-check-fill', 'success');
  },

  remove(id) {
    let cart = this.get();
    cart = cart.filter(i => i.id !== id);
    this.save(cart);
  },

  updateQty(id, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save(cart);
    }
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

  has(id) {
    return this.get().some(i => i.id === id);
  },

  toggle(product) {
    let wishlist = this.get();
    const exists = wishlist.some(i => i.id === product.id);
    if (exists) {
      wishlist = wishlist.filter(i => i.id !== product.id);
      this.save(wishlist);
      return false; // removed
    } else {
      const pTrans = I18nStore.getProduct(product);
      wishlist.push({ id: product.id, name: pTrans.name, price: pTrans.price, img: pTrans.img, cat: pTrans.cat });
      this.save(wishlist);
      return true; // added
    }
  },

  remove(id) {
    let wishlist = this.get();
    wishlist = wishlist.filter(i => i.id !== id);
    this.save(wishlist);
  }
};

// ===== Update Badges =====
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const cart = CartStore.get();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (!badge) return;
  const wishlist = WishlistStore.get();
  const total = wishlist.length;
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function updateWishlistButtons() {
  const wishlist = WishlistStore.get();
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = Number(btn.getAttribute('data-wishlist-id'));
    const isSaved = wishlist.some(w => w.id === id);
    const icon = btn.querySelector('i');
    if (isSaved) {
      btn.classList.add('active');
      if (icon) icon.className = 'bi bi-heart-fill';
    } else {
      btn.classList.remove('active');
      if (icon) icon.className = 'bi bi-heart';
    }
  });
}

function toggleWishlistProduct(id, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const pTrans = I18nStore.getProduct(product);

  const added = WishlistStore.toggle(product);
  if (added) {
    showToast(pTrans.name + ' ' + I18nStore.t('toast_added_wishlist'), 'bi-heart-fill', 'success');
  } else {
    showToast(pTrans.name + ' ' + I18nStore.t('toast_removed_wishlist'), 'bi-heart', 'error');
  }
  updateWishlistButtons();
}

// ===== Toast Notification System =====
function showToast(message, iconClass = 'bi-check-circle-fill', type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
  }

  const toastId = 'toast_' + Date.now();
  const bgClass = type === 'error' ? 'bg-danger text-white' : type === 'info' ? 'bg-info text-white' : 'bg-dark text-white';
  
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true" style="border-radius:12px;">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2" style="font-size:0.9rem;font-weight:500;">
          <i class="bi ${iconClass} fs-5"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  const toastEl = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 2800 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}

// ===== Button Feedback Animation =====
function triggerButtonFeedback(btn) {
  if (!btn) return;
  const originalHtml = btn.innerHTML;
  btn.classList.add('btn-feedback-active');
  btn.innerHTML = '<i class="bi bi-check2"></i> ' + I18nStore.t('btn_added');
  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.classList.remove('btn-feedback-active');
  }, 1200);
}

// ===== Quick View Modal =====
function showQuickView(id, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const pTrans = I18nStore.getProduct(product);

  let modalEl = document.getElementById('quickViewModal');
  if (!modalEl) {
    const modalHtml = `
      <div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg" style="border-radius:24px;overflow:hidden;">
            <div class="modal-body p-0 position-relative">
              <button type="button" class="btn-close position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="row g-0">
                <div class="col-md-6">
                  <div style="aspect-ratio:1/1;overflow:hidden;background:#f8fafc;">
                    <img id="qvImage" src="" alt="" style="width:100%;height:100%;object-fit:cover;">
                  </div>
                </div>
                <div class="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                  <span class="badge bg-primary-subtle text-primary mb-2 align-self-start rounded-pill px-3 py-2" id="qvCat" style="font-size:0.75rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;"></span>
                  <h4 class="fw-bold mb-2" id="qvTitle"></h4>
                  <h5 class="text-primary fw-bold mb-3" id="qvPrice"></h5>
                  <p class="text-secondary mb-4" id="qvDesc" style="font-size:0.9rem;line-height:1.6;"></p>
                  <div class="d-flex gap-2">
                    <button class="btn-main flex-grow-1 justify-content-center" id="qvAddCartBtn">
                      <span data-i18n="btn_add_to_cart">Add to Cart</span> <i class="bi bi-bag-plus"></i>
                    </button>
                    <a href="#" class="btn-outline-main" id="qvDetailLink" style="padding:0.7rem 1.1rem;"><i class="bi bi-box-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    modalEl = document.getElementById('quickViewModal');
  }

  document.getElementById('qvImage').src = pTrans.img;
  document.getElementById('qvTitle').textContent = pTrans.name;
  document.getElementById('qvCat').textContent = pTrans.cat;
  document.getElementById('qvPrice').textContent = formatRupiah(pTrans.price);
  document.getElementById('qvDesc').textContent = pTrans.desc;
  document.getElementById('qvDetailLink').href = 'detail-produk.html?id=' + pTrans.id;

  const addBtn = document.getElementById('qvAddCartBtn');
  addBtn.onclick = function() {
    CartStore.add(product);
    triggerButtonFeedback(this);
  };

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

// ===== Search Overlay Logic =====
function initSearchOverlay() {
  const triggers = document.querySelectorAll('.search-trigger');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('searchCloseBtn');
  const input = document.getElementById('searchOverlayInput');
  const results = document.getElementById('searchResults');

  if (!overlay || !input || !results) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
      input.placeholder = I18nStore.t('search_placeholder');
      results.innerHTML = `<p class="search-hint"><i class="bi bi-search me-2"></i><span>${I18nStore.t('search_hint')}</span></p>`;
      setTimeout(() => input.focus(), 150);
    });
  });

  const closeSearch = () => {
    overlay.classList.remove('active');
    input.value = '';
    results.innerHTML = `<p class="search-hint"><i class="bi bi-search me-2"></i><span>${I18nStore.t('search_hint')}</span></p>`;
  };

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeSearch();
  });

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      results.innerHTML = `<p class="search-hint"><i class="bi bi-search me-2"></i><span>${I18nStore.t('search_hint')}</span></p>`;
      return;
    }

    const filtered = PRODUCTS.filter(p => {
      const pTrans = I18nStore.getProduct(p);
      return pTrans.name.toLowerCase().includes(query) || pTrans.cat.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      results.innerHTML = `<p class="search-hint text-danger"><i class="bi bi-emoji-frown me-2"></i><span>${I18nStore.t('search_no_results')}</span></p>`;
    } else {
      results.innerHTML = filtered.map(p => {
        const pTrans = I18nStore.getProduct(p);
        return `
          <a href="detail-produk.html?id=${p.id}" class="search-result-item d-flex align-items-center gap-3 p-2 text-decoration-none rounded-3 mb-2" style="background:#fff;border:1px solid var(--border);transition:all .2s ease;">
            <img src="${pTrans.img}" alt="${pTrans.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;">
            <div class="flex-grow-1">
              <h6 class="mb-0 fw-semibold text-dark" style="font-size:0.9rem;">${pTrans.name}</h6>
              <span class="text-primary fw-bold" style="font-size:0.82rem;">${formatRupiah(pTrans.price)}</span>
            </div>
            <span class="badge bg-light text-secondary border" style="font-size:0.7rem;">${pTrans.cat}</span>
          </a>
        `;
      }).join('');
    }
  });
}

// ===== Scroll Top Button =====
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Scroll Reveal Animation =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    reveals.forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}

// ===== Component Loader =====
function loadNavbar() {
  const navContainer = document.getElementById('navbar');
  if (!navContainer) return;

  fetch('../component/navbar.html')
    .then(r => r.text())
    .then(data => {
      navContainer.innerHTML = data;
      const currentPath = window.location.pathname.split('/').pop() || 'beranda.html';
      const links = navContainer.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
      });
      initSearchOverlay();
      initMobileDrawer();
      updateCartBadge();
      updateWishlistBadge();
      I18nStore.applyTranslations();
    })
    .catch(err => {
      console.warn('Navbar fetch warning:', err);
      I18nStore.applyTranslations();
    });
}

function initMobileDrawer() {
  const toggler = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const menu = document.getElementById('navMenu');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!toggler || !menu) return;

  const openDrawer = (e) => {
    if (e) e.preventDefault();
    menu.classList.add('show-drawer');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    menu.classList.remove('show-drawer');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggler.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  const links = menu.querySelectorAll('.nav-link');
  links.forEach(l => l.addEventListener('click', closeDrawer));
}

function loadFooter() {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  fetch('../component/footer.html')
    .then(r => r.text())
    .then(data => {
      footerContainer.innerHTML = data;
      initScrollTop();
      I18nStore.applyTranslations();
    })
    .catch(err => {
      console.warn('Footer fetch warning:', err);
      I18nStore.applyTranslations();
    });
}

// ===== Newsletter Submission Handler =====
function handleNewsletterSubmit(e) {
  if (e) e.preventDefault();
  const form = (e && e.target) ? (e.target.closest('.newsletter-form') || e.target) : document.querySelector('.newsletter-form');
  const input = form ? form.querySelector('input[type="email"]') : (document.getElementById('newsletterEmail') || document.querySelector('.newsletter-form input[type="email"]'));
  const email = input ? input.value.trim() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast(I18nStore.t('err_email'), 'bi-exclamation-circle-fill', 'error');
    return false;
  }

  showToast(I18nStore.t('toast_newsletter_success'), 'bi-check-circle-fill', 'success');
  if (input) input.value = '';
  return false;
}

window.handleNewsletterSubmit = handleNewsletterSubmit;

// ===== Global DOM Init =====
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
  initScrollReveal();
  I18nStore.applyTranslations();
});

// Event Delegation for Newsletter Submit & Click
document.addEventListener('submit', (e) => {
  if (e.target && (e.target.classList.contains('newsletter-form') || e.target.id === 'newsletterForm')) {
    e.preventDefault();
    handleNewsletterSubmit(e);
  }
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.newsletter-form button[type="submit"]');
  if (btn) {
    e.preventDefault();
    handleNewsletterSubmit(e);
  }
});
