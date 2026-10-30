// ===== PARTIE À MODIFIER : réglages de l'entreprise =====
const WHATSAPP_NUMBER = "261349164249"; // 034 91 642 49 en format international
const TEL_AFFICHE = "034 91 642 49"; // numéro affiché aux clients
const DELIVERY_FEE = 3000,
  NOM = "Love Food",
  OPEN_H = 10,
  CLOSE_H = 20;

// DERNIÈRE MODIFICATION : prix des offres et tacos imposé (à changer ici)
const PRIX_OFFRE_2_TACOS = 22000,
  PRIX_OFFRE_PANINI = 22000,
  TACOS_OFFRE = "Tacos carnivore",
  TACOS_OFFRE1 = "2 Tacos carnivore";
// Gestion manuelle : ajoutez ici les identifiants des produits épuisés.
// Exemple : "pi1" = Margherita, "ta1" = Tacos poulet, "d3" = Jus naturel.
const PRODUITS_EPUISES = new Set(["pi7"]);
const estEpuise = (id) => PRODUITS_EPUISES.has(id);

// DERNIÈRE MODIFICATION : chemins corrigés (sans "/" au début) + images des offres o1 et o2
// Les images sont dans le dossier "photos" à côté de index.html.
// Si l'extension ne correspond pas (.jpg / .png), le site essaie automatiquement les autres.
// ATTENTION : respectez les majuscules (Jus.jpg et non jus.jpg) quand la page est en ligne.
const PHOTOS = {
  o1: "photos/o1.jpg",
  o2: "photos/o2.jpg",
  pi1: "photos/pi1.jpg",
  pi2: "photos/pi2.jpg",
  pi3: "photos/pi3.jpg",
  pi4: "photos/pi4.jpg",
  pi5: "photos/pi5.jpg",
  pi6: "photos/pi6.jpg",
  pi7: "photos/pi7.jpg",
  ta1: "photos/ta1.jpg",
  ta2: "photos/ta2.jpg",
  ta3: "photos/ta3.jpg",
  ta4: "photos/ta4.jpg",
  ta5: "photos/ta5.png",
  ta6: "photos/ta6.png",
  ta7: "photos/ta7.png",
  pa1: "photos/pa1.png",
  pa2: "photos/pa2.png",
  pa3: "photos/pa3.png",
  pa4: "photos/pa4.png",
  pa5: "photos/pa5.png",
  bu1: "photos/bu1.png",
  bu2: "photos/bu2.png",
  bu3: "photos/bu3.png",
  bu4: "photos/bu4.png",
  bu5: "photos/bu5.png",
  sa1: "photos/sa1.jpg",
  sa2: "photos/sa2.jpg",
  sa3: "photos/sa3.png",
  sa4: "photos/sa4.png",
  d1: "photos/eau.png",
  d2: "photos/coca.png",
  d3: "photos/Jus.jpg",
  d4: "photos/milk.jpg",
};

// DERNIÈRE MODIFICATION : si une image ne se charge pas, on essaie les autres extensions
const EXTS = ["jpg", "png", "jpeg", "webp"];
function imgErr(el) {
  const base = el.dataset.base;
  const i = +(el.dataset.i || 0);
  if (i < EXTS.length) {
    el.dataset.i = i + 1;
    el.src = base + "." + EXTS[i];
  } else {
    el.remove();
  }
}

// DERNIÈRE MODIFICATION : catégorie "Offres" et "Pao et Pf" ajoutées, Sandwichs avant Pao et Pf
const COL = {
  Offres: ["#ffd0d0", "#ff6b6b"],
  Pizzas: ["#ffd9a8", "#ff9a5a"],
  Tacos: ["#ffe9a8", "#f2b33d"],
  "Paninis et Gratin": ["#f6d9b4", "#c98a4b"],
  Sandwichs: ["#d7ecc4", "#7fb55a"],
  "Pao et Pf": ["#ffcfb0", "#d9692b"],
  Boissons: ["#cfe8f7", "#6fb1da"],
};
const CATS = ["Tous", "Pizzas", "Tacos", "Paninis et Gratin", "Sandwichs", "Pao et Pf"];
// DERNIÈRE MODIFICATION : emojis des onglets
const TAB_EMO = {
  Tous: "🍽️",
  Pizzas: "🍕",
  Tacos: "🌮",
  "Paninis et Gratin": "🥪",
  Sandwichs: "🥖",
  "Pao et Pf": "🍔",
};
const M = (c, pre, e, list) =>
  list.map((x, i) => ({
    id: pre + (i + 1),
    c,
    e,
    n: x[0],
    d: x[1],
    p: x[2],
    b: x[3] || "",
  }));

const PLATS = [
  ...M("Pizzas", "pi", "🍕", [
    [
      "Pizza Margherita",
      "Sauce tomates, fromages locale, origan",
      17000,
      "Populaire",
    ],
    [
      "Pizza 4fromages",
      "Origan, fromage qui rit,Sauce tomate, fromages locale, cheddar,mozzarella",
      21000,
    ],
    [
      "Pizza Bolognaise",
      "Viande hachée, Sauce tomate, oignon, origan, fromage locale,",
      23000,
      "Nouveau",
    ],
    [
      "Pizza Fermière",
      "Sauce tomate, poulet, tomate, poivron, origan, fromage locale",
      22000,
    ],
    [
      "Pizza Carnivore",
      "Fromage locale, tomate, poivron, saucisse fumé, sauce tomate, charcuterie, origan",
      22000,
    ],
    [
      "Pizza Love Food",
      "Tomate, poivron, saucisse fumé, Fromage locale, sauce tomate, charcuterie, poulet, origan",
      26000,
    ],
    [
      "Pizza Fruit de mer",
      "Fromage locale, poivron, fruit de mer (thon), sauce tomate, origan, tomate",
      27000,
    ],
  ]),
  ...M("Tacos", "ta", "🌮", [
    ["Tacos poulet", "Poulet mariné, fromage locale, frites, sauce", 9000, "Populaire"],
    ["Tacos Carnivore", "Frites, sauce, fromage locale, Charcuterie bœuf", 9000],
    ["Tacos mixte", "Poulet et charcuterie bœuf,fites, sauce, fromage locale", 11000],
    ["Tacos 2fromages", "Sauce, Poulet/charcuterie bœuf , frites, fromage locale + fromage qui rit", 13000],
    ["Tacos 4 fromages", "Poulet et charcuterie bœuf , frites, sauce, fromage locale + fromage qui rit + cheddar +  mozzarella", 14000],
    ["Croque madame", "Pain de mie, œuf sur plat, charcuterie bœuf, fromage, sauce", 8500, "Nouveau"],
    ["Croque monsieur", "Pain de mie, charcuterie bœuf, fromage , sauce", 7000],
  ]),
  ...M("Paninis et Gratin", "pa", "🥪", [
    ["Panini Gourmande", "Charcuterie bœuf,  salade, fromage locale, tomate, sauce", 8000],
    ["Panini 2fromages", "Poulet, tomate, sauce, salade, charcuterie bœuf, fromage locale + fromage qui rit", 12000, "Populaire"],
    ["Gratin Macaroni", "Macaroni, charcuterie,fromage local, bechamel", 8000],
  ]),
  // DERNIÈRE MODIFICATION : Sandwichs placés avant "Pao et Pf" (ancien Burgers)
  ...M("Sandwichs", "sa", "🥖", [
    ["Sandwich Kebab", "Viande, tomate, salade, , fromage locale, oignon, mayonnaise", 9000],
    ["Sandwich poulet", "Poulet, tomate, salade, mayonnaise, oignon, fromage locale", 9000],
    ["Sandwich Mixte", "Tomate, salade, mayonnaise, oignon, fromage locale, Viande, poulet", 11000],
    ["Sandwich Géant", "Sandwich 1 mètre : Viande, nuggets poulet , salade, oignon, mayonnaise, poulet, fromage", 26000,"un jour avant"],
  ]),
  ...M("Pao et Pf", "bu", "🍔", [
    ["Pomme frite", "Frites, sauce, mayonnaise", 4000, "Populaire"],
    ["Nuggets poulet + Frite", "Nuggets poulet, mayonnaise, frites, sauce", 9000],
    ["Fromage Pané + Frite", "Frites, fromage Pané, sauce, mayonnaise", 9000],
    ["Pao au poulet", "Poulets, champignions, sauce", 2000, "Nouveau"],
    ["Pao au fromage", "Fromage locale, poulets, sauce, champignions", 2500, "Populaire"],
  ]),
];

// DERNIÈRE MODIFICATION : les deux offres (Offre 2 Tacos et Offre Panini)
const noms = (c) => PLATS.filter((x) => x.c === c).map((x) => [x.n]);

// DERNIÈRE MODIFICATION : pizzas interdites dans les offres (à modifier ici si besoin)
// Le client peut choisir toutes les autres pizzas pour les offres.
const PIZZAS_EXCLUES_OFFRE = ["Pizza Bolognaise", "Pizza Love Food"];
const nomsPizzaOffre = () =>
  PLATS.filter(
    (x) =>
      x.c === "Pizzas" &&
      !estEpuise(x.id) &&
      !PIZZAS_EXCLUES_OFFRE.includes(x.n),
  ).map((x) => [x.n]);

// DERNIÈRE MODIFICATION : dans l'Offre Panini, le client choisit seulement "Panini" ou "Sandwich" (plus de types)
const OFFRES = [
  {
    id: "o1",
    c: "Offres",
    e: "🍕🌮",
    n: "Offre 2 Tacos",
    d: "1 Pizza au choix + 2 Tacos",
    p: PRIX_OFFRE_2_TACOS,
    b: "Offre",
    fixe: TACOS_OFFRE1,
    g: [{ t: "Choisissez votre pizza", l: nomsPizzaOffre() }],
  },
  {
    id: "o2",
    c: "Offres",
    e: "🍕🌮🥪",
    n: "Offre Panini",
    d: "1 Pizza au choix + 1 Tacos + 1 Panini ou Sandwich",
    p: PRIX_OFFRE_PANINI,
    b: "Offre",
    fixe: TACOS_OFFRE,
    g: [
      { t: "Choisissez votre pizza", l: nomsPizzaOffre() },
      { t: "Panini ou Sandwich", l: [["Panini"], ["Sandwich"]] },
    ],
  },
];

// DERNIÈRE MODIFICATION : boissons avec choix (taille, type, parfum) ; Coca-Cola devient Boisson Star
const TAILLES_EAU = {
  t: "Taille",
  l: [
    ["Petite bouteille", 2000],
    ["1 L", 3000],
    ["1,5 L", 4500],
  ],
};
const BOISSONS = [
  { id: "d1", n: "Eau minérale", e: "💧", p: 0, from: 2000, g: [TAILLES_EAU] },
 {
    id: "d2",
    n: "Boisson Star",
    e: "🥤",
    p: 0,
    from: 2000,
    g: [
      {
        t: "Type de boisson",
        l: [["Cola"], ["Orange"], ["Citron"], ["Pomme"]],
      },
      {
        t: "Taille",
        l: [
          ["Petite bouteille", 2000],
          ["1,5 L", 4500],
        ],
      },
    ],
  },
  {
    id: "d3",
    n: "Jus naturel",
    e: "🍹",
    p: 3000,
    g: [
      {
        t: "Parfum du jus",
        l: [["Corossol"], ["Mangue"]],
      },
    ],
  },
  {
    id: "d4",
    n: "Milk Shake",
    e: "🧋",
    p: 6000,
    g: [{ t: "Parfum", l: [["Choco"]] }],
  },
].map((x) => ({ ...x, c: "Boissons", d: "", b: "" }));

const ALL = [...OFFRES, ...PLATS, ...BOISSONS.filter(x=>x.id!=="d1"&&x.id!=="d2")];
function disponible(x) {
  if (!x) return false;
  if (estEpuise(x.id)) return false;
  if (x.g && x.g.some((g) => g.l.length === 0)) return false;
  if (x.c === "Offres" && estEpuise("ta2")) return false; // Tacos carnivore inclus
  return true;
}

let cart = [],
  cat = "Tous",
  pos = null,
  cur = null;
const $ = (id) => document.getElementById(id);
const fmt = (n) =>
  n.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g, " ") + " Ar";
const store = {
  get: (k) => {
    try {
      return localStorage.getItem(k) || "";
    } catch (e) {
      return "";
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  },
};
const count = (id) =>
  cart.filter((l) => l.pid === id).reduce((s, l) => s + l.q, 0);

// DERNIÈRE MODIFICATION : l'image utilise imgErr pour essayer les autres extensions
function card(x) {
  const [g1, g2] = COL[x.c];
  const src = PHOTOS[x.id];
  const img = src
    ? `<img loading="lazy" alt="${x.n}" src="${src}" data-base="${src.replace(/\.\w+$/, "")}" onerror="imgErr(this)">`
    : "";
  const prix = (x.from ? "dès " : "") + fmt(x.from || x.p);
  return `<div class="item ${disponible(x) ? "" : "epuise"}"><div class="ph" style="--g1:${g1};--g2:${g2}">${x.e}${img}${!disponible(x) ? `<span class="badge stock-badge">ÉPUISÉ</span>` : x.b ? `<span class="badge">${x.b}</span>` : ""}</div>
 <div class="body"><h3>${x.n}</h3><div class="desc">${x.d}</div><div class="price">${prix}</div>
 <div class="qty"><button aria-label="Retirer ${x.n}" onclick="chg('${x.id}',-1)">−</button><span data-n="${x.id}">${count(x.id)}</span><button class="plus" ${!disponible(x) ? "disabled" : ""} aria-label="Ajouter ${x.n}" onclick="chg('${x.id}',1)">${disponible(x) ? "+" : "✕"}</button></div></div></div>`;
}

// DERNIÈRE MODIFICATION : carte "offre" en forme de barre
function cardOffre(x) {
  const src = PHOTOS[x.id];
  const img = src
    ? `<img loading="lazy" alt="${x.n}" src="${src}" data-base="${src.replace(/\.\w+$/, "")}" onerror="imgErr(this)">`
    : "";
  return `<div class="offre ${disponible(x) ? "" : "epuise"}"><div class="oph">${x.e}${img}</div>
 <div class="obody">${!disponible(x) ? `<span class="obadge stock-badge">ÉPUISÉ</span>` : x.b ? `<span class="obadge">🔥 ${x.b}</span>` : ""}<h3>${x.n}</h3><div class="desc">${x.d}</div><div class="price">${fmt(x.p)}</div></div>
 <div class="qty"><button aria-label="Retirer ${x.n}" onclick="chg('${x.id}',-1)">−</button><span data-n="${x.id}">${count(x.id)}</span><button class="plus" ${!disponible(x) ? "disabled" : ""} aria-label="Ajouter ${x.n}" onclick="chg('${x.id}',1)">${disponible(x) ? "+" : "✕"}</button></div></div>`;
}

// DERNIÈRE MODIFICATION : ligne parasite "88" et ancienne ligne commentée supprimées
function renderMenu() {
  $("tabs").innerHTML = CATS.map(
    (c) =>
      `<button class="tab" aria-pressed="${c === cat}" onclick="setCat('${c}')">${TAB_EMO[c] || ""} ${c}</button>`,
  ).join("");
  const s = $("q").value.trim().toLowerCase();
  $("offres").innerHTML =
    cat === "Tous" && !s
      ? `<h2 style="margin-top:6px">Offres</h2><div class="offres">${OFFRES.map(cardOffre).join("")}</div>`
      : "";
  const list = PLATS.filter(
    (x) =>
      (cat === "Tous" || x.c === cat) &&
      (!s || (x.n + " " + x.d).toLowerCase().includes(s)),
  );
  //const drinks = BOISSONS.filter((x) => !s || x.n.toLowerCase().includes(s));
  const drinks = BOISSONS.filter(
    x=>
      x.id !=="d1"&&
      x.id !=="d2"&&
      (!s|| x.n.toLowerCase().includes(s))
  );
  let h = "";
  if (cat === "Tous" && !s) {
    CATS.slice(1).forEach((c) => {
      h += `<h2>${c}</h2><div class="grid">${PLATS.filter((x) => x.c === c)
        .map(card)
        .join("")}</div>`;
    });
  } else {
    h +=
      `<h2>${cat === "Tous" ? "Résultats" : cat}</h2>` +
      (list.length
        ? `<div class="grid">${list.map(card).join("")}</div>`
        : `<div class="none">Aucun plat trouvé. Essayez un autre mot.</div>`);
  }
  if (drinks.length)
    h += `<h2>Boissons</h2><div class="grid">${drinks.map(card).join("")}</div>`;
  $("menu").innerHTML = h;
}

function totals() {
  const sub = cart.reduce((s, l) => s + l.price * l.q, 0);
  const fee = sub > 0 ? DELIVERY_FEE : 0;
  return { sub, fee, tot: sub + fee, n: cart.reduce((s, l) => s + l.q, 0) };
}

// DERNIÈRE MODIFICATION : lignes du panier en cartes (photo, nom, choix, boutons − / +, prix), panier vide accueillant, compteur, sauvegarde
function lineHTML(l, i) {
  const x = ALL.find((a) => a.id === l.pid) || { e: "🍽️", c: "Pizzas" };
  const [g1, g2] = COL[x.c] || COL.Pizzas;
  const src = PHOTOS[l.pid];
  const img = src
    ? `<img loading="lazy" alt="" src="${src}" data-base="${src.replace(/\.\w+$/, "")}" onerror="imgErr(this)">`
    : "";
  const mm = l.label.match(/^(.*?) \((.*)\)$/);
  const name = mm ? mm[1] : l.label,
    det = mm ? mm[2] : "";
  return `<div class="line"><div class="lph" style="--g1:${g1};--g2:${g2}">${x.e}${img}</div><div class="linfo"><div class="lt"><b>${name}</b><button aria-label="Supprimer ${name}" title="Supprimer" onclick="del(${i})">🗑️</button></div>${det ? `<small>${det}</small>` : ""}<div class="lb"><div class="lq"><button aria-label="Retirer un ${name}" onclick="cartQty(${i},-1)">−</button><span>${l.q}</span><button aria-label="Ajouter un ${name}" onclick="cartQty(${i},1)">+</button></div><span class="lp">${fmt(l.price * l.q)}</span></div></div></div>`;
}
function renderCart() {
  const t = totals();
  $("lines").innerHTML = cart.length
    ? cart.map(lineHTML).join("")
    : `<div class="empty"><div class="e-ico">🛒</div><b>Votre panier est vide</b><p>Ajoutez un plat pour commencer.</p><button class="e-btn" type="button" onclick="goMenu()">Voir le menu</button></div>`;
  $("st").textContent = fmt(t.sub);
  $("fee").textContent = fmt(t.fee);
  $("tot").textContent = fmt(t.tot);
  $("bn").textContent = t.n ? `Panier (${t.n})` : "Panier vide";
  $("bt").textContent = fmt(t.tot);
  $("cn").textContent = t.n;
  $("cn").style.display = t.n ? "" : "none";
  $("send").disabled = !cart.length;
  $("clear").style.display = cart.length ? "" : "none";
  store.set("cart", JSON.stringify(cart));
}
function cartQty(i, d) {
  cart[i].q += d;
  if (cart[i].q <= 0) cart.splice(i, 1);
  refresh();
}

function refresh() {
  renderMenu();
  renderCart();
}
function setCat(c) {
  cat = c;
  renderMenu();
}
function del(i) {
  cart.splice(i, 1);
  refresh();
}

// DERNIÈRE MODIFICATION : après l'ajout, petit rebond du compteur + message "Ajouté"
const toastEl = document.createElement("div");
toastEl.id = "toast";
toastEl.setAttribute("role", "status");
document.body.appendChild(toastEl);
let toastT;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove("show"), 1600);
}
function bump(pid) {
  document.querySelectorAll(`[data-n="${pid}"]`).forEach((e) => {
    e.classList.remove("bump");
    void e.offsetWidth;
    e.classList.add("bump");
  });
  const b = $("bar");
  b.classList.remove("pulse");
  void b.offsetWidth;
  b.classList.add("pulse");
}

function addLine(pid, label, price) {
  if (!disponible(ALL.find((x) => x.id === pid))) {
    toast("Ce produit est épuisé.");
    return;
  }
  const l = cart.find((x) => x.pid === pid && x.label === label);
  if (l) l.q++;
  else cart.push({ pid, label, price, q: 1 });
  refresh();
  bump(pid);
  toast("✅ Ajouté : " + label);
}

// DERNIÈRE MODIFICATION : le "+" ouvre la fenêtre de choix si l'article a des options
function chg(id, d) {
  const p = ALL.find((x) => x.id === id);
  if (d > 0) {
    if (!p || !disponible(p)) {
      toast("Ce produit est épuisé.");
      return;
    }
    if (p.g) openOpt(p);
    else addLine(id, p.n, p.p);
  } else {
    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i].pid === id) {
        if (--cart[i].q <= 0) cart.splice(i, 1);
        break;
      }
    }
    refresh();
  }
}

// DERNIÈRE MODIFICATION : affichage et validation de la fenêtre de choix
function openOpt(p) {
  if (!disponible(p)) return;
  cur = p;
  $("optT").textContent = p.n;
  $("optB").innerHTML =
    (p.fixe ? `<p class="note">Inclus : ${p.fixe}</p>` : "") +
    p.g
      .map(
        (g, i) =>
          `<b>${g.t}</b>` +
          g.l
            .map(
              (o, j) =>
                `<label class="o"><input type="radio" name="g${i}" value="${j}" onchange="pick()"> <span>${o[0]}</span>${o[1] ? ` <span class="price" style="margin-left:auto">${fmt(o[1])}</span>` : ""}</label>`,
            )
            .join(""),
      )
      .join("");
  $("opt").classList.add("show");
  pick();
}
function chosen() {
  return cur.g.map((g, i) => {
    const r = document.querySelector(`input[name="g${i}"]:checked`);
    return r ? g.l[+r.value] : null;
  });
}
function pick() {
  const c = chosen();
  const t = cur.p + c.reduce((s, o) => s + (o && o[1] ? o[1] : 0), 0);
  $("optAdd").textContent = "Ajouter · " + fmt(t);
  $("optAdd").disabled = c.includes(null);
}
$("optNo").onclick = () => $("opt").classList.remove("show");
$("optAdd").onclick = () => {
  const c = chosen();
  if (c.includes(null) || !disponible(cur)) return;
  if (
    cur.c === "Offres" &&
    c.some((o) => PLATS.some((p) => p.n === o[0] && estEpuise(p.id)))
  ) {
    toast("Une option est épuisée.");
    return;
  }
  const price = cur.p + c.reduce((s, o) => s + (o[1] || 0), 0);
  const det = c
    .map((o) => o[0])
    .concat(cur.fixe ? ["+ " + cur.fixe] : [])
    .join(", ");
  addLine(cur.id, `${cur.n} (${det})`, price);
  $("opt").classList.remove("show");
};

$("q").oninput = renderMenu;
// DERNIÈRE MODIFICATION : ouverture/fermeture du panier avec fond assombri, et glisser vers le bas pour fermer
const cartEl = $("cart"),
  ov = $("ov");
function openCart() {
  cartEl.classList.add("open");
  ov.classList.add("show");
  toastEl.classList.remove("show");
}
function closeCart() {
  cartEl.classList.remove("open");
  ov.classList.remove("show");
}
function goMenu() {
  closeCart();
  $("menu-start").scrollIntoView({ behavior: "smooth" });
}
$("bar").onclick = openCart;
$("close").onclick = closeCart;
ov.onclick = closeCart;
let sy = null,
  dyy = 0;
const grip = $("grip");
grip.addEventListener(
  "touchstart",
  (e) => {
    sy = e.touches[0].clientY;
    dyy = 0;
    cartEl.style.transition = "none";
  },
  { passive: true },
);
grip.addEventListener(
  "touchmove",
  (e) => {
    if (sy === null) return;
    dyy = Math.max(0, e.touches[0].clientY - sy);
    cartEl.style.transform = `translateY(${dyy}px)`;
  },
  { passive: true },
);
grip.addEventListener("touchend", () => {
  cartEl.style.transition = "";
  cartEl.style.transform = "";
  if (dyy > 80) closeCart();
  sy = null;
});
$("ok").onclick = () => $("done").classList.remove("show");
$("wa").href = "https://wa.me/" + WHATSAPP_NUMBER;

$("gps").onclick = () => {
  if (!navigator.geolocation) {
    $("err").textContent = "Le GPS n'est pas disponible sur cet appareil.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (p) => {
      pos = p.coords;
      $("gps").textContent = "✅ Position ajoutée";
      $("gps").classList.add("ok");
      $("err").textContent = "";
    },
    () => {
      $("err").textContent =
        "Impossible d'obtenir la position. Autorisez la localisation.";
    },
  );
};

// DERNIÈRE MODIFICATION : numéro de commande (changez "LF" pour un autre préfixe) et erreurs affichées sous chaque champ
const PREFIXE_COMMANDE = "LF";
function newOrderId() {
  const d = new Date(),
    p = (n) => String(n).padStart(2, "0");
  return (
    PREFIXE_COMMANDE +
    "-" +
    d.getFullYear() +
    p(d.getMonth() + 1) +
    p(d.getDate()) +
    "-" +
    p(d.getHours()) +
    p(d.getMinutes()) +
    "-" +
    Math.random().toString(36).slice(2, 6).toUpperCase()
  );
}
function fieldErr(id, msg) {
  $("f-" + id).classList.toggle("bad", !!msg);
  $("e-" + id).textContent = msg || "";
}
["nom", "adr", "tel"].forEach((id) =>
  $(id).addEventListener("input", () => fieldErr(id, "")),
);
$("clear").onclick = () => {
  if (confirm("Vider tout le panier ?")) {
    cart = [];
    refresh();
  }
};

// DERNIÈRE MODIFICATION : confirmation d'envoi WhatsApp, copie de la commande et rappel de la dernière commande
let lastOrder = null,
  remT = null;
function copyText(txt) {
  const fallback = () => {
    const a = document.createElement("textarea");
    a.value = txt;
    a.style.position = "fixed";
    a.style.opacity = "0";
    document.body.appendChild(a);
    a.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    a.remove();
  };
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(txt).catch(fallback);
  else fallback();
}
function copyBtn(btn) {
  if (!lastOrder) return;
  copyText(lastOrder.m);
  const old = btn.textContent;
  btn.textContent = "✅ Commande copiée";
  setTimeout(() => (btn.textContent = old), 2000);
}
function renderLast() {
  const o = lastOrder;
  $("last").innerHTML = !o
    ? ""
    : `<div class="lastc ${o.sent ? "ok" : "wait"}"><b>🧾 Dernière commande : ${o.oid}</b><span>${o.heure} · ${fmt(o.total)} · ${o.sent ? "✅ Envoyée" : "⚠️ Envoi non confirmé"}</span><div class="lacts">${o.sent ? "" : `<button type="button" onclick="reopen()">Rouvrir WhatsApp</button>`}<button type="button" onclick="copyBtn(this)">📋 Copier</button></div></div>`;
}
function showDone(mode) {
  clearTimeout(remT);
  const ask = mode === "ask";
  $("dn-ico").textContent = ask ? "💬" : "✅";
  $("dn-t").textContent = ask ? "WhatsApp est ouvert" : "Commande envoyée !";
  $("dn-p").innerHTML = ask
    ? "Votre commande n'est <b>pas encore envoyée</b> tant que vous n'appuyez pas sur <b>Envoyer</b> dans WhatsApp. Après l'envoi, revenez ici et confirmez."
    : "Merci ! Attendez notre confirmation dans la même conversation WhatsApp.";
  $("oid").textContent = "Numéro de commande : " + lastOrder.oid;
  $("dn-w").textContent = "";
  $("dn-acts").style.display = ask ? "" : "none";
  $("dn-help").style.display = ask ? "" : "none";
  $("ok").style.display = ask ? "none" : "";
  $("done").classList.add("show");
  if (ask)
    remT = setTimeout(() => {
      $("dn-w").textContent =
        "⏳ Pas encore confirmé ? Vérifiez dans WhatsApp : votre commande n'est envoyée que si vous avez appuyé sur Envoyer.";
    }, 30000);
}
function closeDone() {
  clearTimeout(remT);
  $("done").classList.remove("show");
}
function reopen() {
  if (!lastOrder) return;
  window.open(lastOrder.url, "_blank");
  showDone("ask");
}
$("yes").onclick = () => {
  lastOrder.sent = true;
  store.set("last", JSON.stringify(lastOrder));
  renderLast();
  cart = [];
  refresh();
  closeCart();
  showDone("ok");
};
$("again").onclick = () => window.open(lastOrder.url, "_blank");
$("copy").onclick = (e) => copyBtn(e.currentTarget);
$("done").addEventListener("click", (e) => {
  if (e.target === $("done")) closeDone();
});

$("send").onclick = () => {
  const nom = $("nom").value.trim(),
    adr = $("adr").value.trim(),
    tel = $("tel").value.trim(),
    rem = $("rem").value.trim();
  if (!cart.length) {
    $("err").textContent = "Ajoutez au moins un article.";
    return;
  }
  if (
    cart.some(
      (l) =>
        !disponible(ALL.find((x) => x.id === l.pid)) ||
        (l.pid.startsWith("o") &&
          PLATS.some((p) => estEpuise(p.id) && l.label.includes(p.n))),
    )
  ) {
    $("err").textContent =
      "Un article de votre panier est épuisé. Retirez-le avant de commander.";
    return;
  }
  const telChiffres = tel.replace(/\D/g, "");
  const eNom = nom ? "" : "Entrez votre nom.";
  const eAdr = adr ? "" : "Entrez votre adresse de livraison.";
  const eTel = !tel
    ? "Entrez votre numéro de téléphone."
    : telChiffres.length < 9 || telChiffres.length > 13
      ? "Numéro invalide (ex : 034 12 345 67)."
      : "";
  fieldErr("nom", eNom);
  fieldErr("adr", eAdr);
  fieldErr("tel", eTel);
  if (eNom || eAdr || eTel) {
    $(eNom ? "nom" : eAdr ? "adr" : "tel").focus();
    return;
  }
  $("err").textContent = "";
  store.set("nom", nom);
  store.set("adr", adr);
  store.set("tel", tel);
  const t = totals();
  const oid = newOrderId();
  const d0 = new Date(),
    p2 = (n) => String(n).padStart(2, "0");
  const heure = `${p2(d0.getDate())}/${p2(d0.getMonth() + 1)}/${d0.getFullYear()} à ${p2(d0.getHours())}h${p2(d0.getMinutes())}`;
  const pay = document.querySelector('input[name="pay"]:checked').value;
  // DERNIÈRE MODIFICATION : le message WhatsApp contient maintenant les choix (taille, parfum, pizza...) et le numéro de commande
  let m = `*🧾 Nouvelle commande - ${NOM}*\n*N° ${oid}*\n🕒 ${heure}\n\n`;
  m += cart
    .map((l) => `• ${l.q} x ${l.label} = ${fmt(l.price * l.q)}`)
    .join("\n");
  m += `\n\nSous-total : ${fmt(t.sub)}\nLivraison : ${fmt(t.fee)}\n*Total : ${fmt(t.tot)}*\n\n`;
  m += `Nom : ${nom}\nAdresse : ${adr}\n`;
  if (tel) m += `Autre numéro : ${tel}\n`;
  if (pos)
    m += `Position GPS : https://maps.google.com/?q=${pos.latitude},${pos.longitude}\n`;
  if (rem) m += `Remarques : ${rem}\n`;
  m += `\nPaiement : ${pay}`;
  const url =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(m);
  lastOrder = { oid, heure, total: t.tot, m, url, sent: false };
  store.set("last", JSON.stringify(lastOrder));
  renderLast();
  window.open(url, "_blank");
  showDone("ask");
};

const h = new Date().getHours();
if (h < OPEN_H || h >= CLOSE_H) {
  $("dot").classList.add("off");
  $("open").textContent = "Fermé";
}
$("nom").value = store.get("nom");
$("adr").value = store.get("adr");
$("tel").value = store.get("tel");
// DERNIÈRE MODIFICATION : le panier est retrouvé si le client recharge la page
try {
  cart = JSON.parse(store.get("cart") || "[]").filter(
    (l) =>
      l &&
      typeof l.price === "number" &&
      l.q > 0 &&
      ALL.some((a) => a.id === l.pid),
  );
} catch (e) {
  cart = [];
}
try {
  lastOrder = JSON.parse(store.get("last") || "null");
} catch (e) {
  lastOrder = null;
}
if (
  lastOrder &&
  (typeof lastOrder.oid !== "string" || typeof lastOrder.url !== "string")
)
  lastOrder = null;
renderLast();
$("dn-num").textContent = TEL_AFFICHE;
refresh();
