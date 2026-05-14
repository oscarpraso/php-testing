function $(e) {
    return document.getElementById(e)
}
function closeError() {
    const e = $("errorPopup");
    e && (e.style.display = "none")
}
(function() {
    if (!window.HOTSPOT_CONFIG)
        return;
    const e = HOTSPOT_CONFIG
      , t = $("appLogo");
    if (t && e.header) {
        if (t.innerHTML = "",
        "image" === e.header.logoType && e.header.logoImage) {
            const n = document.createElement("img");
            n.src = e.header.logoImage,
            n.alt = e.header.title || "Logo",
            n.style.width = "100%",
            n.style.height = "100%",
            n.style.objectFit = "contain",
            t.appendChild(n)
        }
        "text" === e.header.logoType && e.header.logoText && (t.innerText = e.header.logoText)
    }
    $("appTitle") && ($("appTitle").innerText = e.header?.title || ""),
    $("appSubTitle") && ($("appSubTitle").innerText = e.header?.subtitle || ""),
    $("loginBtn") && ($("loginBtn").innerText = e.loginMode?.loginButton || ""),
    $("voucherInput") && ($("voucherInput").placeholder = e.loginMode?.voucher?.placeholder || ""),
    $("tabVoucher") && ($("tabVoucher").innerText = e.loginMode?.voucher?.label || ""),
    $("tabMember") && ($("tabMember").innerText = e.loginMode?.member?.label || ""),
    $("memberUser") && ($("memberUser").placeholder = e.loginMode?.member?.usernamePlaceholder || ""),
    $("memberPass") && ($("memberPass").placeholder = e.loginMode?.member?.passwordPlaceholder || ""),
    $("footerInfo") && ($("footerInfo").innerText = e.text?.footer?.info || "")
}
)(),
function() {
    if (!window.HOTSPOT_RAW_ERROR || !HOTSPOT_CONFIG?.text?.error)
        return;
    const e = String(window.HOTSPOT_RAW_ERROR).toLowerCase()
      , t = HOTSPOT_CONFIG.text.error;
    let n = t.default;
    if (t.map)
        for (const o in t.map)
            if (e.includes(o.toLowerCase())) {
                n = t.map[o];
                break
            }
    n === t.default && (e.includes("invalid") ? n = t.map.invalid || n : e.includes("expired") ? n = t.map.expired || n : e.includes("simult") ? n = t.map.simultaneous || n : e.includes("trial") ? n = t.map.novalid || n : e.includes("radius") ? n = t.map.radius || n : e.includes("limit") && (n = t.map.limited || n));
    const o = $("errorTitle")
      , a = $("errorBtn")
      , i = $("errorMessage");
    o && (o.innerText = t.title),
    a && (a.innerText = t.button),
    i && (i.innerText = n)
}(),
function() {
    const e = HOTSPOT_CONFIG?.menu;
    e && e.forEach(e => {
        const t = document.querySelector(`.nav-item[data-key="${e.key}"]`)
          , n = document.querySelector(`span[data-menu="${e.key}"]`);
        e.show || !t ? n && (n.innerText = e.label) : t.style.display = "none"
    }
    )
}(),
function() {
    const e = document.querySelector('.nav-item[data-key="account"]');
    if (!e)
        return;
    const t = location.pathname.split("/").pop().toLowerCase();
    e.style.display = "login.html" === t || "" === t ? "none" : "flex"
}(),
function() {
    const e = location.pathname.split("/").pop() || "login.html";
    document.querySelectorAll(".nav-item").forEach(t => {
        t.classList.remove("active"),
        ("login.html" === e && "home" === t.dataset.key || "status.html" === e && "account" === t.dataset.key || e === t.getAttribute("href")) && t.classList.add("active")
    }
    )
}(),
function() {
    if (!window.HOTSPOT_CONFIG?.text?.alogin)
        return;
    const e = HOTSPOT_CONFIG.text.alogin;
    $("aloginTitle") && ($("aloginTitle").innerText = e.header.title),
    $("aloginSubtitle") && ($("aloginSubtitle").innerText = e.header.subtitle),
    $("labelUser") && ($("labelUser").innerText = e.info.username),
    $("labelIP") && ($("labelIP").innerText = e.info.ip),
    $("labelMAC") && ($("labelMAC").innerText = e.info.mac),
    $("btnContinue") && ($("btnContinue").innerText = e.action.continue),
    $("footerNote") && ($("footerNote").innerText = e.footer.note)
}(),
function() {
    const e = HOTSPOT_CONFIG?.text?.errorPage;
    if (!e)
        return;
    const t = HOTSPOT_CONFIG?.contact;
    if (!t)
        return;
    $("errorPageTitle") && ($("errorPageTitle").innerText = e.header?.title || ""),
    $("errorPageSubtitle") && ($("errorPageSubtitle").innerText = e.header?.subtitle || ""),
    $("errorPageAdminTitle") && ($("errorPageAdminTitle").innerText = t.contactlabel?.title || ""),
    $("errorPageLabelName") && ($("errorPageLabelName").innerText = t.contactlabel?.nama || ""),
    $("errorPageLabelTelepon") && ($("errorPageLabelTelepon").innerText = t.contactlabel?.telepon || ""),
    $("errorPageLabelEmail") && ($("errorPageLabelEmail").innerText = t.contactlabel?.email || ""),
    $("errorPageLabelAlamat") && ($("errorPageLabelAlamat").innerText = t.contactlabel?.alamat || "");
    let n = e.defaultMessage || "";
    window.HOTSPOT_RAW_ERROR && e.map && (n = e.map[window.HOTSPOT_RAW_ERROR] || n),
    $("errorPageMessage") && ($("errorPageMessage").innerText = n),
    $("btnRetry") && ($("btnRetry").innerText = e.action?.retry || "Kembali")
}(),
function() {
    const e = HOTSPOT_CONFIG?.contact;
    e && ($("adminName") && ($("adminName").innerText = e.owner || "-"),
    $("adminPhone") && ($("adminPhone").innerText = e.phone || "-"),
    $("adminEmail") && ($("adminEmail").innerText = e.email || "-"),
    $("adminAddress") && ($("adminAddress").innerText = e.address || "-"))
}(),
function() {
    if (!window.HOTSPOT_CONFIG?.text.paket || !HOTSPOT_CONFIG.contact)
        return;
    const e = HOTSPOT_CONFIG.contact.phone
      , t = document.getElementById("memberList")
      , n = document.getElementById("voucherList");
    if (!t || !n)
        return;
    const o = HOTSPOT_CONFIG.text.paket.Label || {
        recom: "Rekomendasi",
        best: "Terlaris",
        labelPesanWa: "Halo admin, saya ingin pesan paket "
    };
    function a(t, n, a) {
        a.innerHTML = "",
        t.forEach(t => {
            const i = document.createElement("div");
            i.className = "package-item";
            let l = "";
            t.recom && (l += `<span class="pkg-badge recom">${o.recom}</span>`),
            t.best && (l += `<span class="pkg-badge best">${o.best}</span>`),
            i.innerHTML = `\n                ${l}\n                <h3 class="pkg-title">${t.name}</h3>\n                <div class="package-meta">${t.duration} • ${t.device}</div>\n                <div class="package-meta">${t.bandwidth}</div>\n                <div class="package-price">${t.price}</div>\n            `,
            i.onclick = () => {
                const a = `${o.labelPesanWa}${t.name}\nJenis: ${n.toUpperCase()}\n${t.duration}\n${t.price}`
                  , i = `https://wa.me/${e}?text=${encodeURIComponent(a)}`;
                window.open(i, "_blank")
            }
            ,
            a.appendChild(i)
        }
        )
    }
    a(HOTSPOT_CONFIG.text.paket.member.memberList, "member", t),
    a(HOTSPOT_CONFIG.text.paket.voucher.voucherList, "voucher", n),
    function() {
        const e = window.HOTSPOT_CONFIG?.text.paket?.Label;
        e && (document.getElementById("pckgTitle") && (pckgTitle.innerText = e.title || ""),
        document.getElementById("pckgSubTitle") && (pckgSubTitle.innerText = e.subTitle || ""),
        document.getElementById("memberBtn") && (memberBtn.innerText = e.buttonLabel.member || ""),
        document.getElementById("voucherBtn") && (voucherBtn.innerText = e.buttonLabel.voucher || ""))
    }(),
    document.querySelectorAll(".package-tabs button").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelectorAll(".package-tabs button").forEach(e => e.classList.remove("active")),
            e.classList.add("active"),
            t.style.display = "member" === e.dataset.tab ? "grid" : "none",
            n.style.display = "voucher" === e.dataset.tab ? "grid" : "none"
        }
        )
    }
    ),
    document.querySelectorAll(".package-tabs button").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelectorAll(".package-tabs button").forEach(e => e.classList.remove("active")),
            e.classList.add("active"),
            t.style.display = "member" === e.dataset.tab ? "grid" : "none",
            n.style.display = "voucher" === e.dataset.tab ? "grid" : "none"
        }
        )
    }
    )
}(),
function() {
    const e = window.HOTSPOT_CONFIG?.contact;
    if (!e)
        return;
    const t = window.HOTSPOT_CONFIG?.text?.kontak;
    if (!t)
        return;
    document.getElementById("contactOwner") && (contactOwner.innerText = e.owner || "-"),
    document.getElementById("contactAddress") && (contactAddress.innerText = e.address || "-"),
    document.getElementById("contactPhone") && (contactPhone.innerText = e.phone || "-"),
    document.getElementById("contactEmail") && (contactEmail.innerText = e.email || "-"),
    document.getElementById("contctTitle") && (contctTitle.innerText = t.label.title || "-"),
    document.getElementById("contctSubTitle") && (contctSubTitle.innerText = t.label.subTitle || "-"),
    document.getElementById("btnWhatsapp") && (btnWhatsapp.innerText = t.label.buttonLabel || "-");
    const n = document.getElementById("btnWhatsapp");
    if (n && e.phone) {
        const o = encodeURIComponent(t.label.labelPesanWaKontak || "");
        n.href = `https://wa.me/${e.phone}?text=${o}`
    }
}(),
function() {
    const e = HOTSPOT_CONFIG?.text?.faq
      , t = HOTSPOT_CONFIG?.contact;
    if (!e || !t)
        return;
    const n = document.getElementById("faqTitle")
      , o = document.getElementById("faqSubTitle")
      , a = document.getElementById("faqList")
      , i = document.getElementById("btnFaqWhatsapp");
    if (n && (n.innerText = e.label?.title || ""),
    o && (o.innerText = e.label?.subTitle || ""),
    a && e.voucherList && (a.innerHTML = "",
    e.voucherList.forEach( (e, t) => {
        const n = document.createElement("div");
        n.className = "faq-item",
        n.innerHTML = `\n                <div class="faq-question">\n                    <span>${e.q}</span>\n                    <span class="faq-icon">+</span>\n                </div>\n                <div class="faq-answer">${e.a}</div>\n            `,
        n.querySelector(".faq-question").onclick = () => {
            n.classList.toggle("open")
        }
        ,
        a.appendChild(n)
    }
    )),
    i) {
        i.innerText = e.label?.buttonLabel || "Hubungi Admin";
        const n = e.label?.labelPesanWaKontak || ""
          , o = `https://wa.me/${t.phone}?text=${encodeURIComponent(n)}`;
        i.onclick = e => {
            e.preventDefault(),
            window.open(o, "_blank")
        }
    }
}(),
function() {
    const e = HOTSPOT_CONFIG?.text?.status;
    e && ($("statusTitle") && ($("statusTitle").innerText = e.header?.title || ""),
    $("statusSubTitle") && ($("statusSubTitle").innerText = e.header?.subtitle || ""),
    $("labelUsername") && ($("labelUsername").innerText = e.labels.username),
    $("labelIP") && ($("labelIP").innerText = e.labels.ip),
    $("labelUptime") && ($("labelUptime").innerText = e.labels.uptime),
    $("labelUsage") && ($("labelUsage").innerText = e.labels.usage),
    $("labelRemaining") && ($("labelRemaining").innerText = e.labels.remaining),
    $("btnRefresh") && ($("btnRefresh").innerText = e.button.refresh,
    $("btnRefresh").onclick = () => location.reload()),
    $("btnLogout") && ($("btnLogout").innerText = e.button.logout,
    $("btnLogout").onclick = () => {
        $("logoutPopup").style.display = "flex"
    }
    ),
    $("statusFooter") && ($("statusFooter").innerText = e.footer?.info || ""),
    $("logoutTitle") && ($("logoutTitle").innerText = e.confirmLogout.title),
    $("logoutMessage") && ($("logoutMessage").innerText = e.confirmLogout.message),
    $("btnCancel") && ($("btnCancel").innerText = e.confirmLogout.cancel,
    $("btnCancel").onclick = () => {
        $("logoutPopup").style.display = "none"
    }
    ),
    $("btnConfirm") && ($("btnConfirm").innerText = e.confirmLogout.confirm,
    $("btnConfirm").onclick = () => {
        location.href = "logout.html"
    }
    ))
}(),
function() {
    const e = HOTSPOT_CONFIG?.text?.logout;
    e && (document.getElementById("logoutTitle") && (logoutTitle.innerText = e.header?.title || ""),
    document.getElementById("logoutSubtitle") && (logoutSubtitle.innerText = e.header?.subtitle || ""),
    document.getElementById("logoutSummaryTitle") && (logoutSummaryTitle.innerText = e.summary?.title || ""),
    document.getElementById("logoutUptimeLabel") && (logoutUptimeLabel.innerText = e.summary?.uptime || ""),
    document.getElementById("logoutUsageLabel") && (logoutUsageLabel.innerText = e.summary?.usage || ""),
    document.getElementById("logoutRemainingLabel") && (logoutRemainingLabel.innerText = e.summary?.remaining || ""),
    document.getElementById("btnRelogin") && (btnRelogin.innerText = e.action?.relogin || "Login"),
    document.getElementById("logoutPromo") && (logoutPromo.innerText = e.promo?.message || ""))
}(),
function() {
    if ("login.html" !== location.pathname.split("/").pop())
        return;
    const e = document.querySelector(".bottom-nav");
    if (!e)
        return;
    const t = window.innerHeight;
    window.addEventListener("resize", () => {
        const n = window.innerHeight;
        e.style.display = n < t - 150 ? "none" : "flex"
    }
    )
}();
