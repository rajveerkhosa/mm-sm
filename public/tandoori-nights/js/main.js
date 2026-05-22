/* =============================================
   TANDOORI NIGHTS — Main JS
   ============================================= */

/* ── Dish name (normalized) → Wikipedia article slug ── */
var WIKI_MAP = {
  'samosa':                  'Samosa',
  'paneer pakora':           'Pakora',
  'veg pakora':              'Pakora',
  'fish pakora':             'Pakora',
  'aloo tikki':              'Aloo_tikki',
  'tandoori paneer tikka':   'Paneer_tikka',
  'dahi puri':               'Dahi_puri',
  'pani puri':               'Pani_puri',
  'chaat papri':             'Papri_chaat',
  'veg spring roll':         'Spring_roll',
  'tandoori chicken':        'Tandoori_chicken',
  'chicken tikka':           'Chicken_tikka',
  'tandoori fish tikka':     'Fish_tikka',
  'shahi paneer':            'Shahi_paneer',
  'paneer tikka masala':     'Paneer_tikka',
  'paneer butter masala':    'Paneer_butter_masala',
  'palak paneer':            'Palak_paneer',
  'tofu tikka masala':       'Tikka_masala',
  'tofu palak':              'Palak_paneer',
  'dal makhani':             'Dal_makhani',
  'dal tadka':               'Tadka_dal',
  'chana masala':            'Chana_masala',
  'aloo gobi':               'Aloo_gobi',
  'saag aloo':               'Saag_aloo',
  'baingan bharta':          'Baingan_bharta',
  'mixed vegetable curry':   'Vegetable_curry',
  'matar paneer':            'Mattar_paneer',
  'kadai paneer':            'Kadai_paneer',
  'rajma masala':            'Rajma',
  'malai kofta':             'Kofta',
  'navratan korma':          'Korma',
  'saag tofu':               'Saag',
  'kadai vegetables':        'Karahi',
  'butter chicken':          'Butter_chicken',
  'chicken tikka masala':    'Chicken_tikka_masala',
  'chicken curry':           'Chicken_curry',
  'saag chicken':            'Saag',
  'kadai chicken':           'Karahi',
  'chicken korma':           'Korma',
  'lamb curry':              'Mutton_curry',
  'lamb saag':               'Saag',
  'lamb rogan josh':         'Rogan_josh',
  'goat curry':              'Goat_curry',
  'fish curry':              'Fish_curry',
  'shrimp curry':            'Curry',
  'chicken vindaloo':        'Vindaloo',
  'lamb vindaloo':           'Vindaloo',
  'paneer bowl':             'Paneer',
  'dal bowl':                'Dal',
  'chana bowl':              'Chana_masala',
  'butter chicken bowl':     'Butter_chicken',
  'lamb bowl':               'Mutton',
  'basmati rice plate':      'Basmati',
  'jeera rice':              'Jeera_rice',
  'peas pulao':              'Pilaf',
  'vegetable biryani':       'Biryani',
  'chicken biryani':         'Chicken_biryani',
  'plain naan':              'Naan',
  'butter naan':             'Naan',
  'garlic naan':             'Naan',
  'cheese naan':             'Naan',
  'keema naan':              'Keema_naan',
  'tandoori roti':           'Roti',
  'plain parantha':          'Paratha',
  'aloo parantha':           'Aloo_paratha',
  'mint chutney':            'Chutney',
  'tamarind chutney':        'Tamarind_chutney',
  'raita':                   'Raita',
  'mango pickle':            'Mango_pickle',
  'papadum':                 'Papadum',
  'side salad':              'Kachumber',
  'gulab jamun':             'Gulab_jamun',
  'kheer':                   'Kheer',
  'rasmalai':                'Rasmalai',
  'kulfi':                   'Kulfi',
  'gajar halwa':             'Gajar_ka_halwa',
  'mango lassi':             'Lassi',
  'sweet lassi':             'Lassi',
  'salted lassi':            'Lassi',
  'masala chai':             'Masala_chai',
  'soft drinks':             'Soft_drink'
};

/* ── Unsplash fallback pools by category ── */
var POOLS = {
  appetizer: ['photo-1567188040759-fb8a883dc6d8', 'photo-1551782450-a2132b4ba21d', 'photo-1517244683847-7456b63c5969'],
  curry:     ['photo-1585937421612-70a008356fbe', 'photo-1601050690597-df0568f70950', 'photo-1455619452474-d2be8b1e70cd', 'photo-1565299507177-b0ac66763828'],
  biryani:   ['photo-1631292784640-2b24be784d5d', 'photo-1668236543090-82eba5ee5976'],
  bread:     ['photo-1565557623262-b51c2513a641', 'photo-1610057099443-fde8c4d50f91', 'photo-1631452180519-c014fe946bc7'],
  paneer:    ['photo-1542367592-8849eb950fd8', 'photo-1574484284002-952d92456975', 'photo-1589302168068-964664d93dc0'],
  meat:      ['photo-1574894709920-11b28e7367e3', 'photo-1606491956689-2ea866880c84'],
  dessert:   ['photo-1633945274405-b6c8069047b0', 'photo-1589302168068-964664d93dc0'],
  drink:     ['photo-1565557623262-b51c2513a641']
};

function normalizeDish(name) {
  return name.toLowerCase().replace(/\s*\(.*?\)/g, '').trim();
}

function categoryOf(n) {
  if (/biryani|pulao|rice|basmati|jeera/.test(n)) return 'biryani';
  if (/naan|roti|paratha|parantha|kulcha|chapati|papadum/.test(n)) return 'bread';
  if (/lassi|chai|tea|drink|soda|juice/.test(n)) return 'drink';
  if (/gulab|jamun|kheer|kulfi|halwa|rasmalai|gajar|dessert/.test(n)) return 'dessert';
  if (/samosa|pakora|pakoda|bhaji|tikki|chaat|papri|puri|spring roll/.test(n)) return 'appetizer';
  if (/tandoori chicken|seekh|kabab|kebab|chicken tikka|fish tikka|fish pakora|shrimp tikka|malai tikka|wings/.test(n)) return 'meat';
  if (/paneer|cottage cheese/.test(n)) return 'paneer';
  if (/dal|chana|aloo gobi|baingan|saag|palak|matar|kadai|rajma|raita|chutney|salad|pickle|kofta|veg/.test(n)) return 'paneer';
  if (/butter chicken|tikka masala|curry|lamb|goat|vindaloo|korma|rogan|chicken|fish|shrimp|masala/.test(n)) return 'curry';
  return 'curry';
}

function hashStr(s) {
  var h = 0;
  for (var i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function fallbackPhotoUrl(name, width) {
  var n = normalizeDish(name);
  var pool = POOLS[categoryOf(n)] || POOLS.curry;
  var id = pool[hashStr(n) % pool.length];
  return 'https://images.unsplash.com/' + id + '?w=' + (width || 400) + '&q=80&fit=crop';
}

/* ── localStorage cache for Wikipedia thumbnail URLs ── */
var CACHE_PREFIX = 'tn_wiki_';
var CACHE_TTL = 30 * 86400000;  // 30 days

function cacheGet(slug) {
  try {
    var raw = localStorage.getItem(CACHE_PREFIX + slug);
    if (!raw) return null;
    var p = JSON.parse(raw);
    if (Date.now() - p.t > CACHE_TTL) return null;
    return p.u;  // empty string = known-missing
  } catch (e) { return null; }
}
function cacheSet(slug, url) {
  try { localStorage.setItem(CACHE_PREFIX + slug, JSON.stringify({ u: url || '', t: Date.now() })); } catch (e) {}
}

/* ── Per-slug deduped Wikipedia lookups ── */
var slugPromises = {};

function fetchWikiThumb(slug, widthHint) {
  if (slugPromises[slug]) return slugPromises[slug];

  var cached = cacheGet(slug);
  if (cached !== null) {
    slugPromises[slug] = Promise.resolve(cached || null);
    return slugPromises[slug];
  }

  slugPromises[slug] = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(slug))
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      var url = null;
      if (d && d.thumbnail && d.thumbnail.source) {
        // Upgrade thumbnail resolution by swapping the /XXXpx- token
        url = d.thumbnail.source.replace(/\/\d+px-/, '/' + (widthHint || 400) + 'px-');
      }
      cacheSet(slug, url);
      return url;
    })
    .catch(function () {
      cacheSet(slug, null);
      return null;
    });

  return slugPromises[slug];
}

function loadDishImage($img, name, width) {
  // Show fallback immediately so user never sees empty
  var fallback = fallbackPhotoUrl(name, width);
  $img.attr('src', fallback);

  var slug = WIKI_MAP[normalizeDish(name)];
  if (!slug) return;

  fetchWikiThumb(slug, width).then(function (url) {
    if (url) $img.attr('src', url);
  });
}

$(document).ready(function () {

  /* ── Dynamic footer year ── */
  $('.footer-copy').html(function (_, html) {
    return html.replace(/\b\d{4}\b/, new Date().getFullYear());
  });

  /* ── Magnific Popup lightbox (gallery page) ── */
  if ($('.image-popup-vertical-fit').length) {
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image</a> could not be loaded.',
      }
    });
  }

  /* ── Menu sticky tab nav ── */
  var tabs = $('.menu-tab');
  var categories = $('.menu-category');

  function stickyOffset() {
    var navH = $('.navbar').outerHeight() || 68;
    var tabH = $('.menu-tabs-outer').outerHeight() || 46;
    return navH + tabH + 12;
  }

  function updateActiveTab() {
    var activeId = '';
    var offset = stickyOffset();
    categories.each(function () {
      if ($(window).scrollTop() + offset >= $(this).offset().top) {
        activeId = $(this).attr('id');
      }
    });
    tabs.each(function () {
      var isActive = $(this).data('target') === activeId;
      $(this).toggleClass('active', isActive);
      if (isActive && $(window).width() <= 767) {
        var wrap = $('.menu-tabs-wrap')[0];
        var tabEl = this;
        if (wrap && tabEl) {
          var tabLeft = tabEl.offsetLeft;
          var tabWidth = tabEl.offsetWidth;
          var wrapWidth = wrap.offsetWidth;
          var scrollTarget = tabLeft - (wrapWidth / 2) + (tabWidth / 2);
          wrap.scrollLeft = scrollTarget;
        }
      }
    });
  }

  if (tabs.length) {
    tabs.on('click', function () {
      var target = $('#' + $(this).data('target'));
      if (target.length) {
        var offset = stickyOffset();
        $('html, body').animate({ scrollTop: target.offset().top - offset }, 400);
      }
    });
    $(window).on('scroll', updateActiveTab);
    updateActiveTab();
  }

  /* ── Scroll to top ── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollup').fadeIn(200);
    } else {
      $('.scrollup').fadeOut(200);
    }
  });

  $('.scrollup, .totop a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  /* ── Inject a photo into every menu item + make keyboard-accessible ── */
  $('.menu-item').each(function () {
    var name = $(this).find('.menu-item-name').text().trim();
    if (!name) return;
    // Make the card behave like a button for assistive tech and keyboard users
    $(this).attr('role', 'button')
           .attr('tabindex', '0')
           .attr('aria-label', 'View photo of ' + name);
    if ($(this).find('.menu-item-photo').length) return;
    var $img = $('<img class="menu-item-photo" alt="" aria-hidden="true" loading="lazy">');
    $(this).prepend($img);
    loadDishImage($img, name, 200);
  });

  // Keyboard activation (Enter/Space) for menu-item "buttons"
  $(document).on('keydown', '.menu-item', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });

  /* ── Dish photo modal ── */
  if ($('#dish-modal').length) {
    $(document).on('click', '.menu-item', function () {
      var dishName = $(this).find('.menu-item-name').text().trim();
      $('#dish-modal-name').text(dishName);
      var $img = $('#dish-modal-img');
      $img.attr('src', '').hide();
      $('.dish-modal-spinner').show();
      $('#dish-modal').addClass('open').attr('aria-hidden', 'false');
      $('body').css('overflow', 'hidden');

      // Use whatever the menu thumb resolved to, then upgrade resolution
      var $thumb = $(this).find('.menu-item-photo');
      var hi = ($thumb.attr('src') || '').replace(/\/200px-/, '/800px-').replace(/[?&]w=200/, '?w=800');
      var imgEl = new Image();
      imgEl.onload = function () { $img.attr('src', hi).show(); $('.dish-modal-spinner').hide(); };
      imgEl.onerror = function () { $img.attr('src', fallbackPhotoUrl(dishName, 800)).show(); $('.dish-modal-spinner').hide(); };
      imgEl.src = hi;
    });

    function closeModal() {
      $('#dish-modal').removeClass('open').attr('aria-hidden', 'true');
      $('body').css('overflow', '');
    }
    $(document).on('click', '.dish-modal-close', closeModal);
    $(document).on('click', '.dish-modal-overlay', function (e) {
      if ($(e.target).hasClass('dish-modal-overlay')) closeModal();
    });
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

});
