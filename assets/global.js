/**
 * IRAYA — Global Front-end Controller
 * Supports: Shopify Section Rendering API + Local Standalone Preview Mode
 */

class IrayaApp {
  constructor() {
    this.cart = {
      items: [
        {
          id: 101,
          title: "The Aahana Filigree Choker",
          variant: "Solid 925 Silver / 16-inch",
          price: 185.00,
          quantity: 1,
          image: "assets/images/cat-necklaces.jpg"
        }
      ],
      currency: "USD",
      freeShippingThreshold: 100.00
    };

    this.init();
  }

  init() {
    this.initHeaderScroll();
    this.initMobileDrawer();
    this.initCartDrawer();
    this.initFilterDrawer();
    this.initStickyMobileBar();
    this.initAccordions();
    this.initModals();
    this.initSwatches();
    this.renderCartUI();
  }

  /* Sticky Header on Scroll */
  initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* Mobile Navigation Drawer */
  initMobileDrawer() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const drawer = document.getElementById('MobileDrawer');
    const closeBtn = document.querySelector('.mobile-drawer__close');
    const overlay = document.getElementById('SiteOverlay');

    if (!drawer) return;

    const openDrawer = () => {
      drawer.classList.add('is-open');
      overlay?.classList.add('is-visible');
      document.body.classList.add('overflow-hidden');
    };

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      overlay?.classList.remove('is-visible');
      document.body.classList.remove('overflow-hidden');
    };

    toggle?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', () => {
      closeDrawer();
      this.closeCartDrawer();
      this.closeFilterDrawer();
      this.closeModal();
    });

    // Submenu accordion toggles in mobile drawer
    document.querySelectorAll('.mobile-nav__toggle-sub').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const subnav = btn.closest('.mobile-nav__item').querySelector('.mobile-subnav');
        subnav?.classList.toggle('is-expanded');
      });
    });
  }

  /* Cart Drawer Controller */
  initCartDrawer() {
    const triggers = document.querySelectorAll('[data-cart-trigger]');
    const closeBtn = document.querySelector('.cart-drawer__close');
    const drawer = document.getElementById('CartDrawer');
    const overlay = document.getElementById('SiteOverlay');

    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCartDrawer();
      });
    });

    closeBtn?.addEventListener('click', () => this.closeCartDrawer());

    // In-Cart Gift Wrap Toggle
    const giftCheckbox = document.getElementById('GiftWrapCheckbox');
    const giftMsgBox = document.getElementById('GiftMessageBox');
    giftCheckbox?.addEventListener('change', (e) => {
      if (e.target.checked) {
        giftMsgBox?.classList.add('is-visible');
      } else {
        giftMsgBox?.classList.remove('is-visible');
      }
      this.renderCartUI();
    });
  }

  openCartDrawer() {
    const drawer = document.getElementById('CartDrawer');
    const overlay = document.getElementById('SiteOverlay');
    if (!drawer) return;
    drawer.classList.add('is-open');
    overlay?.classList.add('is-visible');
    document.body.classList.add('overflow-hidden');
  }

  closeCartDrawer() {
    const drawer = document.getElementById('CartDrawer');
    const overlay = document.getElementById('SiteOverlay');
    if (!drawer) return;
    drawer.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    document.body.classList.remove('overflow-hidden');
  }

  /* Faceted Filter Drawer Controller */
  initFilterDrawer() {
    const trigger = document.querySelector('[data-filter-trigger]');
    const drawer = document.getElementById('FilterDrawer');
    const closeBtn = document.querySelector('.filter-drawer__close');
    const overlay = document.getElementById('SiteOverlay');

    trigger?.addEventListener('click', () => {
      drawer?.classList.add('is-open');
      overlay?.classList.add('is-visible');
      document.body.classList.add('overflow-hidden');
    });

    closeBtn?.addEventListener('click', () => this.closeFilterDrawer());
  }

  closeFilterDrawer() {
    const drawer = document.getElementById('FilterDrawer');
    const overlay = document.getElementById('SiteOverlay');
    drawer?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    document.body.classList.remove('overflow-hidden');
  }

  /* Sticky Mobile Action Bar IntersectionObserver */
  initStickyMobileBar() {
    const mainBuyBtn = document.getElementById('MainProductCTA');
    const stickyBar = document.getElementById('StickyMobileBar');

    if (!mainBuyBtn || !stickyBar) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When main buy button scrolls out of view toward top, show sticky bar
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          stickyBar.classList.add('is-visible');
        } else {
          stickyBar.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(mainBuyBtn);
  }

  /* Accordion Controller */
  initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const isActive = item.classList.contains('is-active');
        
        // Optional: close other accordions or allow multi-expand
        item.classList.toggle('is-active', !isActive);
      });
    });
  }

  /* Modals (Size Guide) */
  initModals() {
    const openBtns = document.querySelectorAll('[data-modal-open]');
    const closeBtns = document.querySelectorAll('[data-modal-close]');
    const overlay = document.getElementById('SiteOverlay');

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-modal-open');
        const modal = document.getElementById(targetId);
        if (modal) {
          modal.classList.add('is-open');
          overlay?.classList.add('is-visible');
          document.body.classList.add('overflow-hidden');
        }
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });
  }

  closeModal() {
    document.querySelectorAll('.modal-dialog.is-open').forEach(modal => {
      modal.classList.remove('is-open');
    });
  }

  /* Size Swatches */
  initSwatches() {
    document.querySelectorAll('.size-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        const container = swatch.closest('.size-swatches');
        container?.querySelectorAll('.size-swatch').forEach(s => s.classList.remove('is-selected'));
        swatch.classList.add('is-selected');

        const selectedVal = swatch.getAttribute('data-value');
        const display = document.getElementById('SelectedSizeDisplay');
        if (display && selectedVal) display.textContent = selectedVal;
      });
    });
  }

  /* Cart Logic & DOM Updates */
  addItem(item) {
    const existing = this.cart.items.find(i => i.id === item.id && i.variant === item.variant);
    if (existing) {
      existing.quantity += (item.quantity || 1);
    } else {
      this.cart.items.push({
        id: item.id || Date.now(),
        title: item.title,
        variant: item.variant || "One Size",
        price: parseFloat(item.price),
        quantity: item.quantity || 1,
        image: item.image || "assets/images/cat-necklaces.jpg"
      });
    }

    this.renderCartUI();
    this.openCartDrawer();
  }

  updateItemQty(index, delta) {
    if (this.cart.items[index]) {
      this.cart.items[index].quantity += delta;
      if (this.cart.items[index].quantity <= 0) {
        this.cart.items.splice(index, 1);
      }
      this.renderCartUI();
    }
  }

  removeItem(index) {
    this.cart.items.splice(index, 1);
    this.renderCartUI();
  }

  renderCartUI() {
    const container = document.getElementById('CartItemsList');
    const subtotalEl = document.getElementById('CartSubtotalValue');
    const badgeEls = document.querySelectorAll('.cart-count-badge');
    const shippingBar = document.getElementById('CartShippingBar');
    const giftCheckbox = document.getElementById('GiftWrapCheckbox');

    const totalQty = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    badgeEls.forEach(badge => {
      badge.textContent = totalQty;
    });

    let subtotal = this.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (giftCheckbox && giftCheckbox.checked) {
      subtotal += 5.00; // $5 gift wrap fee
    }

    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toFixed(2)} USD`;
    }

    // Free shipping progress calculation
    if (shippingBar) {
      const remaining = this.cart.freeShippingThreshold - subtotal;
      const progressPercent = Math.min(100, Math.max(0, (subtotal / this.cart.freeShippingThreshold) * 100));
      const track = shippingBar.querySelector('.cart-shipping-bar__progress');
      const text = shippingBar.querySelector('.cart-shipping-bar__text');

      if (track) track.style.width = `${progressPercent}%`;

      if (text) {
        if (remaining <= 0) {
          text.innerHTML = `<strong>✨ Congratulations!</strong> You have unlocked Free US Shipping!`;
        } else {
          text.innerHTML = `You're only <strong>$${remaining.toFixed(2)} USD</strong> away from Free US Shipping!`;
        }
      }
    }

    if (!container) return;

    if (this.cart.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <svg class="cart-empty__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h4 class="cart-empty__title">Your bag is empty</h4>
          <p class="text-sm text-muted">Discover handcrafted heirloom silver pieces designed for everyday elegance.</p>
          <a href="#shop" class="btn btn--primary btn--sm" onclick="window.Iraya.closeCartDrawer()">Explore Bestsellers</a>
        </div>
      `;
      return;
    }

    container.innerHTML = this.cart.items.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item__image-wrap">
          <img src="${item.image}" alt="${item.title}" class="cart-item__image" />
        </div>
        <div class="cart-item__details">
          <h4 class="cart-item__title">${item.title}</h4>
          <span class="cart-item__meta">${item.variant}</span>
          <span class="cart-item__price">$${(item.price * item.quantity).toFixed(2)} USD</span>
          <div class="cart-item__actions">
            <div class="quantity-selector">
              <button type="button" class="quantity-btn" onclick="window.Iraya.updateItemQty(${index}, -1)" aria-label="Decrease quantity">−</button>
              <input type="text" class="quantity-input" value="${item.quantity}" readonly />
              <button type="button" class="quantity-btn" onclick="window.Iraya.updateItemQty(${index}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-item__remove" onclick="window.Iraya.removeItem(${index})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.Iraya = new IrayaApp();
});
