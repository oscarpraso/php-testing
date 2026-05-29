!function() {
    function e(t) {
        function n(e, t) {
            return e >>> t | e << 32 - t
        }
        var o, a, r = Math.pow, i = r(2, 32), l = "length", s = "", c = [], d = 8 * t[l], u = e.h = e.h || [], m = e.k = e.k || [], h = m[l];
        if (!h)
            for (var T = {}, O = 2; h < 64; O++)
                if (!T[O]) {
                    for (o = 0; o < 313; o += O)
                        T[o] = O;
                    u[h] = r(O, .5) * i | 0,
                    m[h++] = r(O, 1 / 3) * i | 0
                }
        for (t += ""; t[l] % 64 - 56; )
            t += "\0";
        for (o = 0; o < t[l]; o++) {
            if ((a = t.charCodeAt(o)) >> 8)
                return;
            c[o >> 2] |= a << (3 - o) % 4 * 8
        }
        for (c[c[l]] = d / i | 0,
        c[c[l]] = d,
        a = 0; a < c[l]; ) {
            var f = c.slice(a, a += 16)
              , g = u.slice(0);
            for (o = 0; o < 64; o++) {
                var y = f[o - 15]
                  , p = f[o - 2]
                  , b = u[0]
                  , I = u[4]
                  , S = u[7] + (n(I, 6) ^ n(I, 11) ^ n(I, 25)) + (I & u[5] ^ ~I & u[6]) + m[o] + (f[o] = o < 16 ? f[o] : f[o - 16] + (n(y, 7) ^ n(y, 18) ^ y >>> 3) + f[o - 7] + (n(p, 17) ^ n(p, 19) ^ p >>> 10) | 0);
                (u = [S + ((n(b, 2) ^ n(b, 13) ^ n(b, 22)) + (b & u[1] ^ b & u[2] ^ u[1] & u[2])) | 0].concat(u))[4] = u[4] + S | 0,
                u.pop()
            }
            for (o = 0; o < 8; o++)
                u[o] = u[o] + g[o] | 0
        }
        for (o = 0; o < 8; o++)
            for (a = 3; a + 1; a--) {
                var v = u[o] >> 8 * a & 255;
                s += (v < 16 ? "0" : "") + v.toString(16)
            }
        return s
    }
    !function() {
        if (window.HOTSPOT_CONFIG && HOTSPOT_CONFIG.license)
            try {
                var t = HOTSPOT_CONFIG.license;
                e(t.dns.toLowerCase().trim() + "|sduyey3728sedjierui").toUpperCase().substring(0, 16).match(/.{1,4}/g).join("-") !== t.key && location.replace("lic.html")
            } catch (e) {
                location.replace("lic.html")
            }
    }()
}(),
(function () {
  if (!window.HOTSPOT_CONFIG?.loginMode) {
    return;
  }
  const e = HOTSPOT_CONFIG.loginMode;
  const t = document.getElementById("loginUser");
  const n = document.getElementById("loginPass");
  const o = document.getElementById("passwordGroup");
  const a = document.getElementById("loginBtn");
  const i = document.querySelectorAll(".toggle-btn");
  const r = document.querySelector(".login-toggle");
  const l = document.getElementById("trialBtn");
  if (!t || !a) {
    return;
  }
  let s = "voucher";
  function c() {
    if (i.length) {
      i.forEach(t => {
        t.textContent = e[t.dataset.mode]?.label || "";
        t.classList.toggle("active", t.dataset.mode === s);
      });
    }
    a.value = e.loginButton || "Login";
    if (s === "voucher") {
      t.placeholder = e.voucher?.placeholder || "";
      if (o) {
        o.style.display = "none";
      }
      if (n) {
        n.value = t.value;
      }
    } else {
      t.placeholder = e.member?.usernamePlaceholder || "";
      if (n) {
        n.placeholder = e.member?.passwordPlaceholder || "";
      }
      if (o) {
        o.style.display = "flex";
      }
    }
  }
  if (e.type === 1) {
    s = "voucher";
    if (r) {
      r.style.display = "none";
    }
  }
  if (e.type === 2) {
    s = "member";
    if (r) {
      r.style.display = "none";
    }
  }
  if (e.type === 0 && r) {
    r.style.display = "flex";
  }
  const d = document.getElementById("loginInfo");
  if (d && !document.querySelector(".info.alert")) {
    d.innerText = e.textInfo || "";
  }
  if (t) {
    t.addEventListener("input", () => {
      if (s === "voucher" && n) {
        n.value = t.value;
      }
    });
  }
  if (i.length && e.type === 0) {
    i.forEach(e => {
      e.onclick = () => {
        s = e.dataset.mode;
        c();
      };
    });
  }
  if (l) {
    if (e.showTrial === 1) {
      l.style.display = "block";
      l.innerText = e.trialText || "Trial";
    } else {
      l.style.display = "none";
    }
  }
  c();
})();
(function () {
  if (!window.HOTSPOT_CONFIG || !HOTSPOT_CONFIG.text) {
    return;
  }
  const e = HOTSPOT_CONFIG.text;
  HOTSPOT_CONFIG.license;
  const t = document.getElementById("footerText");
  if (t && HOTSPOT_CONFIG.license?.dns) {
    t.textContent = "© " + new Date().getFullYear() + " " + HOTSPOT_CONFIG.license.dns;
  }
  const n = document.querySelector(".info.alert");
  if (!n || !e.error) {
    return;
  }
  const o = n.innerText || "";
  let a = "";
  if (/invalid/i.test(o)) {
    a = "invalid";
  } else if (/expired/i.test(o)) {
    a = "expired";
  } else if (/simultaneous/i.test(o)) {
    a = "simultaneous";
  } else if (/no valid|novalid/i.test(o)) {
    a = "novalid";
  } else if (/radius/i.test(o)) {
    a = "radius";
  }
  n.innerText = e.error.map && e.error.map[a] || e.error.default || o;
})();
const MENU_ICONS = {
  home: "\n  <svg viewBox=\"0 0 24 24\" fill=\"none\">\n    <path d=\"M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z\"\n      stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>\n  </svg>",
  paket: "\n  <svg viewBox=\"0 0 24 24\" fill=\"none\">\n    <rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"3\"\n      stroke=\"currentColor\" stroke-width=\"1.6\"/>\n    <path d=\"M3 9h18\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n  </svg>",
  kontak: "\n  <svg viewBox=\"0 0 24 24\" fill=\"none\">\n    <path d=\"M4 4h16v12H7l-3 4V4z\"\n      stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/>\n  </svg>",
  faq: "\n  <svg viewBox=\"0 0 24 24\" fill=\"none\">\n    <circle cx=\"12\" cy=\"12\" r=\"9\"\n      stroke=\"currentColor\" stroke-width=\"1.6\"/>\n    <path d=\"M9.5 9a2.5 2.5 0 1 1 4.5 1.5c-.7.6-1.5 1-1.5 2\"\n      stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\"/>\n  </svg>",
  account: "\n  <svg viewBox=\"0 0 24 24\" fill=\"none\">\n    <circle cx=\"12\" cy=\"8\" r=\"4\"\n      stroke=\"currentColor\" stroke-width=\"1.6\"/>\n    <path d=\"M4 21c0-4 4-7 8-7s8 3 8 7\"\n      stroke=\"currentColor\" stroke-width=\"1.6\"/>\n  </svg>"
};
(function () {
  if (!window.HOTSPOT_CONFIG || !HOTSPOT_CONFIG.menu) {
    return;
  }
  const e = document.getElementById("bottomNav");
  if (!e) {
    return;
  }
  const t = location.pathname.split("/").pop();
  HOTSPOT_CONFIG.menu.forEach(n => {
    if (!n.show) {
      return;
    }
    const o = document.createElement("a");
    let a = n.key + ".html";
    if (n.key === "home") {
      a = "login.html";
    }
    if (n.key === "account") {
      a = "status.html";
    }
    o.href = a;
    o.innerHTML = `\n    ${MENU_ICONS[n.key] || ""}\n    <span>${n.label}</span>\n  `;
    if (n.key === "home" && t === "login.html" || n.key === "account" && t === "status.html" || t === n.key + ".html") {
      o.classList.add("active");
    }
    e.appendChild(o);
  });
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.text?.paket) {
    return;
  }
  const e = document.getElementById("paketList");
  if (!e) {
    return;
  }
  const t = HOTSPOT_CONFIG.text.paket;
  const n = HOTSPOT_CONFIG.loginMode || {};
  const o = document.querySelectorAll(".paket-btn");
  const a = document.querySelector(".paket-toggle");
  let i = "member";
  if (n.type === 1) {
    i = "voucher";
    if (a) {
      a.style.display = "none";
    }
  }
  if (n.type === 2) {
    i = "member";
    if (a) {
      a.style.display = "none";
    }
  }
  if (n.type === 0 && a) {
    a.style.display = "flex";
  }
  const r = document.getElementById("paketTitle");
  const l = document.getElementById("paketSubTitle");
  function s() {
    e.innerHTML = "";
    (i === "member" ? t.member?.memberList || [] : t.voucher?.voucherList || []).forEach(n => {
      const o = document.createElement("div");
      o.className = "paket-card";
      if (n.recom) {
        o.classList.add("recom");
        o.dataset.badge = t.Label?.recom || "";
      }
      if (n.best) {
        o.classList.add("best");
        o.dataset.badge = t.Label?.best || "";
      }
      o.innerHTML = `\n        <div class="paket-name">${n.name}</div>\n        <div class="paket-info">${n.duration}</div>\n        <div class="paket-info">${n.device}</div>\n        <div class="paket-info">${n.bandwidth}</div>\n        <div class="paket-price">${n.price}</div>\n\n        <a class="paket-action"\n          href="https://wa.me/${HOTSPOT_CONFIG.contact?.phone || ""}?text=${encodeURIComponent((t.Label?.labelPesanWa || "") + n.name)}"\n          target="_blank">\n          Pesan Sekarang\n        </a>\n      `;
      e.appendChild(o);
    });
  }
  if (r) {
    r.innerText = t.Label?.title || "";
  }
  if (l) {
    l.innerText = t.Label?.subTitle || "";
  }
  if (o.length) {
    o.forEach(e => {
      const n = e.dataset.paket;
      if (t.Label?.buttonLabel?.[n]) {
        e.innerText = t.Label.buttonLabel[n];
      }
    });
  }
  if (o.length && n.type === 0) {
    o.forEach(e => {
      e.onclick = () => {
        o.forEach(e => e.classList.remove("active"));
        e.classList.add("active");
        i = e.dataset.paket;
        s();
      };
    });
  }
  s();
})();
(function () {
  if (!window.HOTSPOT_CONFIG || !HOTSPOT_CONFIG.text || !HOTSPOT_CONFIG.text.errorPage) {
    return;
  }
  const e = document.getElementById("errorPageTitle");
  if (!e) {
    return;
  }
  const t = HOTSPOT_CONFIG.text.errorPage;
  const n = HOTSPOT_CONFIG.contact || {};
  const o = document.getElementById("errorPageSubtitle");
  const a = document.getElementById("errorPageMessage");
  const i = document.getElementById("btnRetry");
  e.innerText = t.header.title;
  if (o) {
    o.innerText = t.header.subtitle;
  }
  let r = (window.HOTSPOT_RAW_ERROR || "").toLowerCase();
  let l = "";
  if (/invalid/.test(r)) {
    l = "invalid";
  } else if (/expired/.test(r)) {
    l = "expired";
  } else if (/simultaneous/.test(r)) {
    l = "simultaneous";
  } else if (/novalid|no valid/.test(r)) {
    l = "novalid";
  } else if (/radius/.test(r)) {
    l = "radius";
  } else if (/block/.test(r)) {
    l = "blocked";
  }
  if (a) {
    a.innerText = t.map && t.map[l] || t.defaultMessage || "Terjadi kesalahan.";
  }
  const s = (e, t) => {
    const n = document.getElementById(e);
    if (n && t) {
      n.innerText = t;
    }
  };
  s("adminName", n.owner);
  s("adminPhone", n.phone);
  s("adminEmail", n.email);
  s("adminAddress", n.address);
  s("errorPageAdminTitle", "Kontak Admin");
  s("errorPageLabelName", "Nama");
  s("errorPageLabelTelepon", "Telepon");
  s("errorPageLabelEmail", "Email");
  s("errorPageLabelAlamat", "Alamat");
  if (i && t.action && t.action.retry) {
    i.innerText = t.action.retry;
  }
})();
(function () {
  if (!window.HOTSPOT_CONFIG || !HOTSPOT_CONFIG.contact || !HOTSPOT_CONFIG.text || !HOTSPOT_CONFIG.text.kontak) {
    return;
  }
  if (!document.getElementById("contactOwner")) {
    return;
  }
  const e = HOTSPOT_CONFIG.contact;
  const t = HOTSPOT_CONFIG.text.kontak;
  const n = document.getElementById("kontakTitle");
  const o = document.getElementById("kontakSubTitle");
  if (n) {
    n.innerText = t.label.title;
  }
  if (o) {
    o.innerText = t.label.subTitle;
  }
  const a = (e, t) => {
    const n = document.getElementById(e);
    if (n) {
      n.innerText = t;
    }
  };
  a("contactLabelName", "Nama");
  a("contactLabelAddress", "Alamat");
  a("contactLabelPhone", "Telepon");
  a("contactLabelEmail", "Email");
  a("contactOwner", e.owner);
  a("contactAddress", e.address);
  a("contactPhone", e.phone);
  a("contactEmail", e.email);
  const i = document.getElementById("btnWhatsapp");
  if (i) {
    i.innerText = t.label.buttonLabel;
    i.href = "https://wa.me/" + e.phone + "?text=" + encodeURIComponent(t.label.labelPesanWaKontak);
    i.target = "_blank";
  }
  const r = document.getElementById("appTitle");
  const l = document.getElementById("appSubTitle");
  if (r && HOTSPOT_CONFIG.header) {
    r.innerText = HOTSPOT_CONFIG.header.title;
  }
  if (l && HOTSPOT_CONFIG.header) {
    l.innerText = HOTSPOT_CONFIG.header.subtitle;
  }
})();
(function () {
  if (!window.HOTSPOT_CONFIG || !HOTSPOT_CONFIG.contact) {
    return;
  }
  const e = HOTSPOT_CONFIG.header || {};
  const t = HOTSPOT_CONFIG.contact || {};
  const n = document.getElementById("brandName");
  const o = document.getElementById("brandTagline");
  if (n) {
    n.innerText = e.title || "";
  }
  if (o) {
    o.innerText = e.subtitle || "";
  }
  const a = document.getElementById("contactTitle");
  const i = document.getElementById("contactSubTitle");
  if (t.contactlabel) {
    if (a) {
      a.innerText = t.contactlabel.title || "";
    }
    if (i) {
      i.innerText = t.contactlabel.subTitle || "";
    }
  }
  const r = document.getElementById("contactOwner");
  const l = document.getElementById("contactAddress");
  const s = document.getElementById("contactPhone");
  const c = document.getElementById("contactEmail");
  if (r) {
    r.innerText = t.owner || "-";
  }
  if (l) {
    l.innerText = t.address || "-";
  }
  if (s) {
    s.innerText = t.phone || "-";
  }
  if (c) {
    c.innerText = t.email || "-";
  }
  const d = document.getElementById("btnWhatsapp");
  if (d && t.phone) {
    d.href = "https://wa.me/" + t.phone + "?text=" + encodeURIComponent(t.pesanWa || "");
    d.innerText = "Hubungi via Whatsapp";
    d.target = "_blank";
  }
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.text?.faq) {
    return;
  }
  const e = HOTSPOT_CONFIG.text.faq;
  const t = document.getElementById("faqList");
  const n = document.getElementById("faqTitle");
  const o = document.getElementById("faqSubTitle");
  if (!t || !n || !o) {
    return;
  }
  const a = document.getElementById("btnFaqWhatsapp");
  if (a && e.label?.buttonLabel && HOTSPOT_CONFIG.contact?.phone) {
    a.innerText = e.label.buttonLabel;
    a.href = "https://wa.me/" + HOTSPOT_CONFIG.contact.phone + "?text=" + encodeURIComponent(e.label.labelPesanWaKontak || "");
    a.target = "_blank";
  }
  n.innerText = e.label.title;
  o.innerText = e.label.subTitle;
  e.voucherList.forEach(e => {
    const n = document.createElement("div");
    n.className = "faq-item";
    n.innerHTML = `\n      <button class="faq-question">\n        <span>${e.q}</span>\n        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>\n      </button>\n      <div class="faq-answer"><p>${e.a}</p></div>\n    `;
    t.appendChild(n);
  });
  document.querySelectorAll(".faq-question").forEach(e => {
    e.onclick = () => {
      const t = e.parentElement;
      document.querySelectorAll(".faq-item").forEach(e => e.classList.remove("open"));
      t.classList.toggle("open");
    };
  });
})();
(function () {
  const e = window.innerHeight;
  window.addEventListener("resize", () => {
    if (window.innerHeight < e - 120) {
      document.body.classList.add("keyboard-open");
    } else {
      document.body.classList.remove("keyboard-open");
    }
  });
})();
(function () {
  if (!window.HOTSPOT_CONFIG) {
    return;
  }
  if (!document.querySelector(".ramadhan-header")) {
    return;
  }
  const e = HOTSPOT_CONFIG.header || {};
  HOTSPOT_CONFIG.greeting;
  const t = document.getElementById("headerLogo");
  const n = document.getElementById("headerTitle");
  const o = document.getElementById("headerSubtitle");
  document.getElementById("ramadhanGreeting");
  if (t && e.logoImage) {
    t.src = e.logoImage;
    t.style.display = "block";
    t.onerror = () => t.style.display = "none";
  }
  if (n) {
    n.textContent = e.title || "";
  }
  if (o) {
    o.textContent = e.subtitle || "";
  }
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.greeting) {
    return;
  }
  const e = HOTSPOT_CONFIG.greeting;
  if (e.show !== 1) {
    return;
  }
  const t = document.querySelector(".greeting-banner");
  const n = document.getElementById("greetArab");
  const o = document.getElementById("greetArti");
  if (!t || !n || !o || !e.items?.length) {
    return;
  }
  let a = 0;
  const i = e.interval || 3500;
  function r() {
    t.classList.remove("show");
    setTimeout(() => {
      n.textContent = e.items[a].ar;
      o.textContent = e.items[a].id;
      t.classList.add("show");
      a++;
      if (a >= e.items.length) {
        a = 0;
      }
    }, 300);
  }
  r();
  setInterval(r, i);
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.text?.status) {
    return;
  }
  if (!document.getElementById("statusTitle")) {
    return;
  }
  const e = HOTSPOT_CONFIG.text.status;
  const t = document.getElementById("statusTitle");
  const n = document.getElementById("statusSubTitle");
  if (t) {
    t.innerText = e.header?.title || "";
  }
  if (n) {
    n.innerText = e.header?.subtitle || "";
  }
  const o = (e, t) => {
    const n = document.getElementById(e);
    if (n) {
      n.innerText = t || "";
    }
  };
  o("statusLabelUser", e.labels?.username);
  o("statusLabelIP", e.labels?.ip);
  o("statusLabelUptime", e.labels?.uptime);
  o("statusLabelUsage", e.labels?.usage);
  o("btnRefresh", e.button?.refresh);
  o("btnLogout", e.button?.logout);
  o("statusFooter", e.footer?.info);
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.text?.alogin) {
    return;
  }
  if (!document.getElementById("aloginTitle")) {
    return;
  }
  const e = HOTSPOT_CONFIG.text.alogin;
  const t = (e, t) => {
    const n = document.getElementById(e);
    if (n && t !== undefined) {
      n.innerText = t;
    }
  };
  t("aloginTitle", e.header?.title);
  t("aloginSubTitle", e.header?.subtitle);
  t("aloginInfoTitle", e.info?.title);
  t("labelUser", e.info?.username);
  t("labelIP", e.info?.ip);
  t("labelMAC", e.info?.mac);
  t("btn-showStatus", e.action?.continue);
  t("footerNote", e.footer?.note);
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.prayerOffline) {
    return;
  }
  const e = HOTSPOT_CONFIG.prayerOffline;
  const t = document.querySelector(".prayer-box");
  if (!t) {
    return;
  }
  if (e.enable !== 1) {
    t.style.display = "none";
    return;
  }
  t.style.display = "block";
  const n = document.getElementById("city");
  if (n && e.location) {
    n.innerText = e.location;
  }
  const o = e.times || {};
  const a = (e, t) => {
    const n = document.getElementById(e);
    if (n && t) {
      n.innerText = t;
    }
  };
  a("imsak", o.imsak);
  a("subuh", o.subuh);
  a("dzuhur", o.dzuhur);
  a("ashar", o.ashar);
  a("maghrib", o.maghrib);
  a("isya", o.isya);
})();
(function () {
  const e = window.HOTSPOT_CONFIG || {};
  const t = e.greeting?.show === 1;
  const n = e.prayerOffline?.enable === 1;
  document.querySelectorAll(".section-divider").forEach(e => {
    const o = e.dataset.after;
    if (o === "header") {
      if (!t && !n) {
        e.style.display = "none";
      }
    }
    if (o === "greeting" && !t) {
      e.style.display = "none";
    }
    if (o === "prayer" && !n) {
      e.style.display = "none";
    }
  });
})();
(function () {
  if (!window.HOTSPOT_CONFIG?.prayerOffline) {
    return;
  }
  const e = HOTSPOT_CONFIG.prayerOffline;
  const t = document.querySelector(".prayer-box");
  const n = document.querySelector(".prayer-grid");
  if (!t || !n) {
    return;
  }
  if (e.enable !== 1) {
    t.style.display = "none";
    return;
  }
  t.style.display = "block";
  const o = {
    MWL: {
      fajr: 18,
      isha: 17
    },
    ISNA: {
      fajr: 15,
      isha: 15
    },
    Egypt: {
      fajr: 19.5,
      isha: 17.5
    },
    Makkah: {
      fajr: 18.5,
      isha: 90
    },
    Karachi: {
      fajr: 18,
      isha: 18
    }
  };
  const a = e.latitude;
  const i = e.longitude;
  const r = e.timezone;
  const l = o[e.method] || o.MWL;
  const s = e.asrMethod === "Hanafi" ? 2 : 1;
  const c = e.imsakOffset || 10;
  function d(e) {
    return e * Math.PI / 180;
  }
  function u(e) {
    return e * 180 / Math.PI;
  }
  function m(e) {
    e = (e + 24) % 24;
    const t = Math.floor(e);
    const n = Math.floor((e - t) * 60);
    return `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
  }
  const T = function () {
    const e = new Date();
    function t(e, t, n, o = false) {
      let i = (-Math.sin(d(e)) - Math.sin(d(t)) * Math.sin(d(a))) / (Math.cos(d(t)) * Math.cos(d(a)));
      if (i < -1) {
        i = -1;
      }
      if (i > 1) {
        i = 1;
      }
      const r = 1 / 15 * u(Math.acos(i));
      return n + (o ? -r : r);
    }
    const n = function (e) {
      const t = e - 2451545;
      const n = (357.529 + t * 0.98560028) % 360;
      const o = (280.459 + t * 0.98564736) % 360;
      const a = (o + Math.sin(d(n)) * 1.915 + Math.sin(d(n) * 2) * 0.02) % 360;
      const i = 23.439 - t * 3.6e-7;
      const r = u(Math.atan2(Math.cos(d(i)) * Math.sin(d(a)), Math.cos(d(a)))) / 15;
      return {
        decl: u(Math.asin(Math.sin(d(i)) * Math.sin(d(a)))),
        eqt: o / 15 - r
      };
    }(function (e, t, n) {
      if (t <= 2) {
        e--;
        t += 12;
      }
      const o = Math.floor(e / 100);
      const a = 2 - o + Math.floor(o / 4);
      return Math.floor((e + 4716) * 365.25) + Math.floor((t + 1) * 30.6001) + n + a - 1524.5;
    }(e.getFullYear(), e.getMonth() + 1, e.getDate()));
    const o = n.decl;
    const T = 12 + r - i / 15 - n.eqt;
    const h = t(l.fajr, o, T, true);
    t(0.833, o, T, true);
    const O = T;
    const g = function (e, n, o) {
      return t(-u(Math.atan(1 / (e + Math.tan(Math.abs(d(a - n)))))), n, o);
    }(s, o, T);
    const f = t(0.833, o, T);
    const y = typeof l.isha == "number" ? t(l.isha, o, T) : f + l.isha / 60;
    return {
      imsak: m(h - c / 60),
      subuh: m(h),
      dzuhur: m(O),
      ashar: m(g),
      maghrib: m(f),
      isya: m(y)
    };
  }();
  const h = document.getElementById("city");
  function O() {
    const t = new Date();
    let n = false;
    document.querySelectorAll(".prayer-item").forEach(e => e.classList.remove("next", "maghrib-active"));
    for (let o = 0; o < e.times.length; o++) {
      const a = e.times[o];
      const i = T[a.key];
      if (!i) {
        continue;
      }
      const [r, l] = i.split(":").map(Number);
      const s = new Date();
      s.setHours(r, l, 0, 0);
      if (t < s) {
        const e = document.querySelector(`.prayer-item[data-time="${a.key}"]`);
        if (!e) {
          continue;
        }
        e.classList.add(a.key === "maghrib" ? "maghrib-active" : "next");
        n = true;
        break;
      }
    }
    if (!n) {
      const e = document.querySelector(".prayer-item[data-time=\"subuh\"]");
      if (e) {
        e.classList.add("next");
      }
    }
  }
  if (h && e.location) {
    h.textContent = e.location;
  }
  n.innerHTML = "";
  e.times.forEach(e => {
    if (e.show === false) {
      return;
    }
    const t = document.createElement("div");
    t.className = "prayer-item";
    t.dataset.time = e.key;
    t.innerHTML = `\n      <small>${e.label}</small>\n      <span>${T[e.key] || "--:--"}</span>\n    `;
    n.appendChild(t);
  });
  O();
  setInterval(O, 60000);
})();
document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("countdown");
  if (e && window.HOTSPOT_CONFIG !== undefined && window.HOTSPOT_CONFIG.events?.status === 1) {
    const t = window.HOTSPOT_CONFIG.events.data;
    if (!t || t.length === 0) {
      return;
    }
    t.sort((e, t) => new Date(e.date).getTime() - new Date(t.date).getTime());
    if (!document.getElementById("style-countdown-kedip")) {
      const e = document.createElement("style");
      e.id = "style-countdown-kedip";
      e.innerHTML = "\n                @keyframes kilatBlink {\n                    0%, 49% { opacity: 1; }\n                    50%, 100% { opacity: 0; }\n                }\n                .efek-kedip {\n                    animation: kilatBlink 1s infinite;\n                }\n            ";
      document.head.appendChild(e);
    }
    (async function (t) {
      let n = 0;
      const o = (window.HOTSPOT_CONFIG.events.delay || 5) * 1000;
      while (true) {
        const a = t[n % t.length];
        const i = new Date().getTime();
        const r = new Date(a.date).getTime();
        const l = r - i;
        const s = 259200000;
        let c = "";
        let d = "";
        if (l > 0) {
          const e = Math.floor(l / 86400000).toString().padStart(2, "0");
          const t = Math.floor(l % 86400000 / 3600000).toString().padStart(2, "0");
          const n = Math.floor(l % 3600000 / 60000).toString().padStart(2, "0");
          const o = Math.floor(l % 60000 / 1000).toString().padStart(2, "0");
          c = parseInt(e) > 0 ? `${e} Hari ` : `${t}:${n}:${o} `;
          d = `Menuju ${a.name}`;
        } else {
          if (!(l <= 0) || !(i - r <= s)) {
            n++;
            if (n >= t.length) {
              e.innerHTML = "";
            }
            continue;
          }
          c = "";
          d = a.message || a.name;
        }
        e.innerHTML = `\n                    <span style="font-size: 0.90rem; font-family: sans-serif; font-weight: bold; color: #4caf50;">📅 \n                        <span class="efek-kedip" style="color: #ff9800; display: inline-block;">${c}</span>\n                        <span style="color: #00bcd4;">${d}</span>\n                    </span>\n                `;
        await new Promise(e => setTimeout(e, o));
        n++;
      }
    })(t);
  }
});
