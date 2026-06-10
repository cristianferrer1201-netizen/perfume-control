const PRODUCTS = [
  ["P001","212","Carolina Herrera","Esencias Mujer",18,45,12],
  ["P002","Good Girl","Carolina Herrera","Esencias Mujer",20,50,3],
  ["P003","Coco Mademoiselle","Chanel","Esencias Mujer",22,55,8],
  ["P004","La Vie Est Belle","Lancôme","Esencias Mujer",20,52,5],
  ["P005","Cloud","Ariana Grande","Esencias Mujer",18,45,9],
  ["P006","Very Good Girl","Carolina Herrera","Esencias Mujer",22,55,4],
  ["P007","J'Adore","Dior","Esencias Mujer",22,55,7],
  ["P008","Bombshell","Victoria's Secret","Esencias Mujer",18,45,2],
  ["P009","Fantasy","Britney Spears","Esencias Mujer",17,42,11],
  ["P010","Prada Candy","Prada","Esencias Mujer",20,50,6],
  ["P011","1 Million","Paco Rabanne","Esencias Hombre",20,50,14],
  ["P012","Sauvage","Dior","Esencias Hombre",22,55,3],
  ["P013","Bleu","Chanel","Esencias Hombre",22,55,8],
  ["P014","Aqua Di Gio","Giorgio Armani","Esencias Hombre",20,50,10],
  ["P015","Invictus","Paco Rabanne","Esencias Hombre",20,50,5],
  ["P016","Eros","Versace","Esencias Hombre",20,50,7],
  ["P017","Le Male Elixir","Jean Paul Gaultier","Esencias Hombre",22,55,4],
  ["P018","Polo Blue","Ralph Lauren","Esencias Hombre",18,45,9],
  ["P019","Y Eau de Parfum","Yves Saint Laurent","Esencias Hombre",22,55,2],
  ["P020","Scandal Pour Homme","Jean Paul Gaultier","Esencias Hombre",22,55,6],
  ["P021","Club de Nuit Intense","Armaf","Árabes Hombre",85,145,4],
  ["P022","9PM","Afnan","Árabes Hombre",90,155,7],
  ["P023","Asad","Lattafa","Árabes Hombre",72,125,8],
  ["P024","Khamrah","Lattafa","Árabes Hombre",95,165,3],
  ["P025","Asad Bourbon","Lattafa","Árabes Hombre",88,150,5],
  ["P026","Yara","Lattafa","Árabes Mujer",75,135,12],
  ["P027","Yara Candy","Lattafa","Árabes Mujer",82,145,6],
  ["P028","Eclaire","Lattafa","Árabes Mujer",95,170,2],
  ["P029","Her Confession","Lattafa","Árabes Mujer",105,180,5],
  ["P030","Noble Blush","Lattafa","Árabes Mujer",88,155,4],
  ["P031","Nebras","Lattafa","Árabes Unisex",90,160,6],
  ["P032","Bade'e Al Oud Sublime","Lattafa","Árabes Unisex",85,150,3],
  ["P033","Amber Rouge","Orientica","Árabes Unisex",135,220,4],
  ["P034","9AM Dive","Afnan","Árabes Unisex",92,160,7],
  ["P035","Affection Love","Lattafa","Árabes Unisex",95,165,5]
].map(([id,name,brand,category,cost,price,stock], i) => ({
  id, name, brand, category, cost, price, stock,
  ml: category.includes("Esencias") ? 30 : 100,
  minStock: 4,
  sold: [18,11,15,9,14,6,5,17,8,7,24,19,16,13,20,21,12,8,10,9,15,18,22,17,8,26,14,23,10,9,16,7,11,13,8][i],
  active: true
}));

const DEMO_SALES = [
  {id:"V-1048", date:new Date().toISOString(), client:"María López", total:185, cost:92, status:"Pagado", method:"Yape", delivery:false, items:["Yara","Good Girl"]},
  {id:"V-1047", date:new Date(Date.now()-86400000).toISOString(), client:"Andrea Ruiz", total:160, cost:90, status:"Abono", method:"Efectivo", delivery:true, items:["Nebras"]},
  {id:"V-1046", date:new Date(Date.now()-2*86400000).toISOString(), client:"José Ramos", total:155, cost:90, status:"Pagado", method:"Plin", delivery:true, items:["9PM"]},
  {id:"V-1045", date:new Date(Date.now()-3*86400000).toISOString(), client:"Luis Vega", total:105, cost:42, status:"Pendiente", method:"Transferencia", delivery:false, items:["Sauvage","Aqua Di Gio"]},
  {id:"V-1044", date:new Date(Date.now()-5*86400000).toISOString(), client:"Carla Díaz", total:220, cost:135, status:"Pagado", method:"BCP", delivery:false, items:["Amber Rouge"]}
];

const DEMO_CLIENTS = [
  {id:"C001",name:"María López",phone:"987 456 321",address:"Los Olivos, Lima",birthday:"1994-08-12",purchases:8,total:940,lastBuy:"2026-06-10"},
  {id:"C002",name:"Andrea Ruiz",phone:"956 234 118",address:"San Martín de Porres",birthday:"1990-11-03",purchases:5,total:635,lastBuy:"2026-06-09"},
  {id:"C003",name:"José Ramos",phone:"944 337 220",address:"Comas, Lima",birthday:"1988-04-18",purchases:6,total:810,lastBuy:"2026-06-08"},
  {id:"C004",name:"Luis Vega",phone:"912 876 345",address:"Independencia, Lima",birthday:"1996-06-10",purchases:3,total:305,lastBuy:"2026-06-07"},
  {id:"C005",name:"Carla Díaz",phone:"932 147 085",address:"Callao",birthday:"1992-09-22",purchases:9,total:1280,lastBuy:"2026-06-05"}
];

const DEMO_ORDERS = [
  {id:"PED-031",client:"Andrea Ruiz",date:"2026-06-10",total:160,status:"Delivery",paid:80,products:"1 × Nebras",address:"San Martín de Porres"},
  {id:"PED-030",client:"Luis Vega",date:"2026-06-09",total:105,status:"Pendiente",paid:0,products:"1 × Sauvage, 1 × Aqua Di Gio",address:"Recojo en tienda"},
  {id:"PED-029",client:"Rosa Medina",date:"2026-06-08",total:170,status:"Preparando",paid:170,products:"1 × Eclaire",address:"Comas, Lima"}
];

const state = {
  products: load("pc_products", PRODUCTS),
  sales: load("pc_sales", DEMO_SALES),
  clients: load("pc_clients", DEMO_CLIENTS),
  orders: load("pc_orders", DEMO_ORDERS),
  expenses: load("pc_expenses", [{id:"G001",date:"2026-06-08",description:"Publicidad Facebook",amount:120},{id:"G002",date:"2026-06-09",description:"Delivery",amount:35}]),
  purchaseOrders: load("pc_purchase_orders", [{
    id:"OC-008", supplier:"Fragancias E&L", supplierPhone:"51927962831",
    date:"2026-06-08", total:720, status:"En tránsito",
    notes:"Confirmar disponibilidad antes del envío.",
    items:[
      {productId:"P026",name:"Yara",brand:"Lattafa",qty:4,unitCost:75},
      {productId:"P023",name:"Asad",brand:"Lattafa",qty:3,unitCost:72},
      {productId:"P022",name:"9PM",brand:"Afnan",qty:2,unitCost:90}
    ]
  }]),
  cart: [],
  view: "dashboard",
  inventorySearch: "",
  inventoryCategory: "Todas",
  selectedProducts: new Set()
};

state.products = state.products.map(product => ({
  ...product,
  ml: Number(product.ml) || (product.category.includes("Esencias") ? 30 : 100)
}));

function articleKey(article) {
  return `${article.name}|${article.category}|${article.ml}`.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9|]/g,"").toLowerCase();
}

if(!localStorage.getItem("pc_extra_import_v1")){
  const knownArticleKeys=new Set(state.products.map(articleKey));
  IMPORTED_ARTICLES.forEach(article=>{
    const key=articleKey(article);
    if(knownArticleKeys.has(key)) return;
    const highest=state.products.reduce((max,product)=>Math.max(max,Number(String(product.id).replace(/\D/g,""))||0),0);
    state.products.push({
      id:`P${String(highest+1).padStart(3,"0")}`,
      ...article,
      cost:0, price:0, stock:0, minStock:4, sold:0, active:true
    });
    knownArticleKeys.add(key);
  });
  localStorage.setItem("pc_products",JSON.stringify(state.products));
  localStorage.setItem("pc_extra_import_v1","done");
}

if (!localStorage.getItem("pc_stock_reset_v1")) {
  state.products.forEach(product => product.stock = 0);
  localStorage.setItem("pc_stock_reset_v1","done");
  localStorage.setItem("pc_products",JSON.stringify(state.products));
}

state.purchaseOrders = state.purchaseOrders.map(order => ({
  supplierPhone: "",
  notes: "",
  ...order,
  items: Array.isArray(order.items)
    ? order.items.map(item => {
        const product=state.products.find(product=>product.id===item.productId);
        return {...item,ml:Number(item.ml)||product?.ml||100};
      })
    : String(order.items || "").split(",").filter(Boolean).map((text, index) => {
        const parts = text.trim().split(/\s*[×x]\s*/);
        const product=PRODUCTS.find(item=>item.name.toLowerCase()===String(parts[0]||"").toLowerCase());
        return {productId:product?.id||`LEGACY-${index}`,name:parts[0] || "Producto",brand:product?.brand||"",ml:product?.ml||100,qty:Number(parts[1]) || 1,unitCost:product?.cost||0};
      })
}));

state.orders = state.orders.map(order => ({
  ...order,
  items: Array.isArray(order.items)
    ? order.items
    : String(order.products || "").split(",").filter(Boolean).map((text,index)=>{
        const match=text.trim().match(/(\d+)\s*[×x]\s*(.+?)(?:\s+(\d+)\s*ml)?$/i);
        const name=(match?.[2]||text).trim();
        const product=state.products.find(item=>name.toLowerCase().includes(item.name.toLowerCase()));
        return {productId:product?.id||`ORDER-${index}`,name:product?.name||name,brand:product?.brand||"",ml:Number(match?.[3])||product?.ml||100,qty:Number(match?.[1])||1,price:product?.price||0};
      })
}));

const viewContainer = document.querySelector("#viewContainer");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalContent = document.querySelector("#modalContent");
const titles = {
  dashboard:"Buenos días, Cristian", articles:"Artículos", inventory:"Inventario", sales:"Registrar venta",
  orders:"Pedidos de clientes", clients:"Clientes", suppliers:"Pedidos a proveedores",
  finance:"Finanzas", reports:"Reportes"
};

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || structuredClone(fallback); }
  catch { return structuredClone(fallback); }
}
function persist() {
  localStorage.setItem("pc_products", JSON.stringify(state.products));
  localStorage.setItem("pc_sales", JSON.stringify(state.sales));
  localStorage.setItem("pc_clients", JSON.stringify(state.clients));
  localStorage.setItem("pc_orders", JSON.stringify(state.orders));
  localStorage.setItem("pc_expenses", JSON.stringify(state.expenses));
  localStorage.setItem("pc_purchase_orders", JSON.stringify(state.purchaseOrders));
}
const money = n => `S/ ${Number(n).toLocaleString("es-PE",{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const shortMoney = n => `S/ ${Number(n).toLocaleString("es-PE")}`;
const formatDate = date => new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(date));
const todayISO = () => new Date().toISOString().slice(0,10);
const initials = name => name.split(" ").slice(0,2).map(x=>x[0]).join("").toUpperCase();
const colorClass = category => category.includes("Mujer") ? "rose" : category.includes("Hombre") ? "dark" : "gold";

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=>toast.classList.remove("show"),2600);
}
function openModal(html) {
  document.querySelector(".modal").classList.remove("modal-wide","modal-document");
  modalContent.innerHTML = html;
  modalBackdrop.hidden = false;
}
function closeModal() { modalBackdrop.hidden = true; modalContent.innerHTML = ""; }

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-item").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===view));
  document.querySelector("#pageTitle").textContent = titles[view];
  document.querySelector("#sidebar").classList.remove("open");
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}

function dashboardView() {
  const today = todayISO();
  const todaySales = state.sales.filter(s=>s.date.slice(0,10)===today);
  const salesToday = todaySales.reduce((a,s)=>a+s.total,0);
  const profitToday = todaySales.reduce((a,s)=>a+(s.total-s.cost),0);
  const monthSales = state.sales.reduce((a,s)=>a+s.total,0);
  const lowStock = state.products.filter(p=>p.stock<=p.minStock);
  const top = [...state.products].sort((a,b)=>b.sold-a.sold).slice(0,3);
  const chartValues = [420,680,510,890,760,1120, salesToday || 640];
  const max = Math.max(...chartValues);
  return `
    <section class="hero">
      <div>
        <p class="eyebrow">Tu negocio, bajo control</p>
        <h2>Convierte cada aroma en una venta memorable.</h2>
        <p>Administra inventario, clientes, pedidos y ganancias desde un solo lugar.</p>
        <div class="hero-actions">
          <button class="primary-button" data-view-link="sales">Registrar una venta</button>
          <button class="secondary-button" data-view-link="inventory">Ver inventario</button>
        </div>
      </div>
      <div class="bottle-stage"><div class="stage-ring"></div><div class="stage-ring two"></div><div class="bottle"></div></div>
    </section>
    <section class="metrics-grid">
      ${metric("Ventas de hoy",shortMoney(salesToday || 640),"+12%","up","S/")}
      ${metric("Ganancia de hoy",shortMoney(profitToday || 285),"+8%","up","↗")}
      ${metric("Pedidos pendientes",state.orders.filter(o=>o.status!=="Entregado").length,"2 delivery","", "▣")}
      ${metric("Stock crítico",lowStock.length,"Requieren atención","down","!")}
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header"><div><h3>Ventas de la semana</h3><p class="panel-subtitle">Total acumulado: ${shortMoney(chartValues.reduce((a,b)=>a+b,0))}</p></div><span class="category-pill">Últimos 7 días</span></div>
        <div class="chart">${chartValues.map((v,i)=>`<div class="bar-wrap"><div class="bar" data-value="${money(v)}" style="height:${v/max*100}%"></div><span>${["Jue","Vie","Sáb","Dom","Lun","Mar","Hoy"][i]}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3>Stock crítico</h3><p class="panel-subtitle">${lowStock.length} productos por reponer</p></div><button class="text-button" data-view-link="suppliers">Crear pedido</button></div>
        <div class="alert-list">${lowStock.slice(0,4).map(p=>`
          <div class="alert-item"><div class="product-thumb ${colorClass(p.category)}">${initials(p.name)}</div><div><strong>${p.name}</strong><span>${p.brand}</span></div><span class="stock-pill low">${p.stock} un.</span></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3>Ventas recientes</h3><p class="panel-subtitle">Últimos movimientos del negocio</p></div><button class="text-button" data-view-link="reports">Ver todo</button></div>
        ${salesTable(state.sales.slice(0,5))}
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3>Más vendidos</h3><p class="panel-subtitle">Ranking del catálogo</p></div></div>
        <div class="ranking">${top.map((p,i)=>rankItem(p,i,top[0].sold)).join("")}</div>
      </div>
    </section>`;
}

function metric(label,value,trend,trendClass,icon) {
  return `<article class="metric"><div class="metric-top"><span class="metric-icon">${icon}</span><span class="trend ${trendClass}">${trend}</span></div><strong>${value}</strong><small>${label}</small></article>`;
}
function rankItem(p,i,max) {
  return `<div class="rank-item"><span class="rank-number">${i+1}</span><div><strong>${p.name}</strong><div class="rank-bar"><i style="width:${p.sold/max*100}%"></i></div></div><strong>${p.sold}</strong></div>`;
}
function salesTable(sales) {
  return `<div class="table-wrap"><table><thead><tr><th>Venta</th><th>Cliente</th><th>Productos</th><th>Total</th><th>Estado</th><th>Fecha</th></tr></thead><tbody>
  ${sales.map(s=>`<tr><td><strong>${s.id}</strong></td><td>${s.client}</td><td>${saleItemsLabel(s.items)}</td><td>${money(s.total)}</td><td>${statusPill(s.status)}</td><td>${formatDate(s.date)}</td></tr>`).join("")}
  </tbody></table></div>`;
}
function saleItemsLabel(items=[]) {
  return items.map(item=>typeof item==="string" ? item : `${item.name} ${item.ml} ml × ${item.qty}`).join(", ");
}
function statusPill(status) {
  const cls = status==="Pagado"||status==="Entregado" ? "paid" : status==="Abono"||status==="Preparando"||status==="En tránsito" ? "partial" : status==="Delivery" ? "delivery" : "pending";
  return `<span class="status-pill ${cls}">${status}</span>`;
}

function articlesView() {
  const categories=["Todas",...new Set(state.products.map(product=>product.category))];
  const filtered=state.products.filter(product=>
    (state.inventoryCategory==="Todas"||product.category===state.inventoryCategory) &&
    `${product.name} ${product.brand} ${product.id}`.toLowerCase().includes(state.inventorySearch.toLowerCase())
  );
  return `
    <div class="section-heading"><div><h2>Catálogo de artículos</h2><p>Registra aquí todo lo que vendes. Luego aparecerá en pedidos, compras e inventario.</p></div><button class="primary-button" id="addProduct">＋ Agregar artículo</button></div>
    <div class="toolbar"><input class="catalog-search" value="${state.inventorySearch}" placeholder="Buscar artículo..."><select id="categoryFilter">${categories.map(category=>`<option ${category===state.inventoryCategory?"selected":""}>${category}</option>`).join("")}</select></div>
    <div class="article-grid">${filtered.map(product=>`
      <article class="article-card">
        <div class="product-thumb ${colorClass(product.category)}">${initials(product.name)}</div>
        <div><span class="eyebrow">${product.id}</span><h3>${product.name}</h3><p>${product.brand} · ${product.ml} ml</p></div>
        <div class="article-card-meta"><span>${product.category}</span><strong>${money(product.price)}</strong><small>Stock: ${product.stock}</small></div>
        <div class="row-actions"><button class="mini-button" data-edit-product="${product.id}">Editar</button><button class="mini-button delete-product-button" data-delete-product="${product.id}">Eliminar</button></div>
      </article>`).join("")||`<div class="empty-state">No se encontraron artículos.</div>`}</div>`;
}

function inventoryView() {
  const categories = ["Todas",...new Set(state.products.map(p=>p.category))];
  const filtered = state.products.filter(p=>
    (state.inventoryCategory==="Todas"||p.category===state.inventoryCategory) &&
    `${p.name} ${p.brand} ${p.id}`.toLowerCase().includes(state.inventorySearch.toLowerCase())
  );
  const selectedCount=state.selectedProducts.size;
  return `
    <div class="section-heading"><div><h2>Inventario</h2><p>${state.products.length} productos registrados · ${state.products.reduce((a,p)=>a+p.stock,0)} unidades disponibles</p></div><div class="heading-actions"><button class="secondary-button" id="clearAllStock">Vaciar stock</button><button class="primary-button" id="addProduct">＋ Agregar producto</button></div></div>
    <div class="stat-strip">
      <div class="mini-stat"><span>Valor de inventario</span><strong>${money(state.products.reduce((a,p)=>a+p.cost*p.stock,0))}</strong></div>
      <div class="mini-stat"><span>Ganancia potencial</span><strong>${money(state.products.reduce((a,p)=>a+(p.price-p.cost)*p.stock,0))}</strong></div>
      <div class="mini-stat"><span>Productos con stock bajo</span><strong>${state.products.filter(p=>p.stock<=p.minStock).length}</strong></div>
    </div>
    <div class="toolbar"><input class="catalog-search" value="${state.inventorySearch}" placeholder="Buscar por nombre, marca o código"><select id="categoryFilter">${categories.map(c=>`<option ${c===state.inventoryCategory?"selected":""}>${c}</option>`).join("")}</select>${selectedCount?`<button class="danger-button" id="deleteSelectedProducts">Eliminar seleccionados (${selectedCount})</button>`:""}</div>
    <div class="table-wrap"><table><thead><tr><th><input type="checkbox" id="selectAllProducts" aria-label="Seleccionar todos" ${filtered.length&&filtered.every(p=>state.selectedProducts.has(p.id))?"checked":""}></th><th>Producto</th><th>Categoría</th><th>Costo</th><th>Precio</th><th>Margen</th><th>Stock</th><th></th></tr></thead><tbody>
      ${filtered.map(p=>`<tr class="${state.selectedProducts.has(p.id)?"selected-row":""}"><td><input type="checkbox" data-select-product="${p.id}" aria-label="Seleccionar ${p.name}" ${state.selectedProducts.has(p.id)?"checked":""}></td><td><div class="product-cell"><div class="product-thumb ${colorClass(p.category)}">${initials(p.name)}</div><div><strong>${p.name} · ${p.ml} ml</strong><span>${p.id} · ${p.brand}</span></div></div></td><td><span class="category-pill">${p.category}</span></td><td>${money(p.cost)}</td><td><strong>${money(p.price)}</strong></td><td>${Math.round((p.price-p.cost)/p.price*100)}%</td><td><span class="stock-pill ${p.stock<=p.minStock?"low":"ok"}">${p.stock} un.</span></td><td><div class="row-actions"><button class="mini-button" data-edit-product="${p.id}">Editar</button><button class="mini-button delete-product-button" data-delete-product="${p.id}">Eliminar</button></div></td></tr>`).join("") || `<tr><td colspan="8" class="empty-state">No se encontraron productos.</td></tr>`}
    </tbody></table></div>`;
}

function salesView() {
  const query = state.saleSearch || "";
  const products = state.products.filter(p=>p.stock>0 && `${p.name} ${p.brand}`.toLowerCase().includes(query.toLowerCase()));
  const subtotal = state.cart.reduce((a,item)=>a+item.price*item.qty,0);
  return `
    <div class="section-heading"><div><h2>Nueva venta</h2><p>Selecciona productos y registra el pago.</p></div></div>
    <div class="sales-layout">
      <section class="panel">
        <div class="toolbar"><input id="saleSearch" value="${query}" placeholder="Buscar perfume..."><select id="saleCategory"><option>Todas las categorías</option>${[...new Set(state.products.map(p=>p.category))].map(c=>`<option>${c}</option>`).join("")}</select></div>
        <div class="product-picker">${products.length ? products.map(p=>`
          <button class="product-card" data-add-cart="${p.id}">
            <div class="product-visual"><i></i></div><strong>${p.name}</strong><small>${p.brand} · ${p.ml} ml</small>
            <footer><b>${money(p.price)}</b><span class="stock-pill ${p.stock<=p.minStock?"low":"ok"}">${p.stock} un.</span></footer>
          </button>`).join("") : `<div class="empty-state product-empty">No hay productos con stock. Edita un producto en Inventario y agrega la cantidad disponible.</div>`}</div>
      </section>
      <aside class="panel cart">
        <div class="panel-header"><div><h3>Detalle de venta</h3><p class="panel-subtitle">${state.cart.reduce((a,i)=>a+i.qty,0)} productos</p></div><button class="text-button" id="clearCart">Limpiar</button></div>
        <div class="cart-list">${state.cart.length ? state.cart.map(item=>`
          <div class="cart-item"><div><p>${item.name} · ${item.ml} ml</p><small>${money(item.price)} c/u</small></div><div class="qty-controls"><button data-cart-minus="${item.id}">−</button><b>${item.qty}</b><button data-cart-plus="${item.id}">＋</button></div></div>`).join("") : `<div class="empty-state">Agrega un perfume para comenzar.</div>`}</div>
        <div class="cart-totals"><div class="total-line"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="total-line"><span>Delivery</span><span id="deliveryAmount">S/ 0.00</span></div><div class="total-line grand"><span>Total</span><span id="cartTotal">${money(subtotal)}</span></div></div>
        <div class="form-grid">
          <div class="form-group full"><label>Cliente</label><select id="saleClient"><option>Cliente ocasional</option>${state.clients.map(c=>`<option>${c.name}</option>`).join("")}</select></div>
          <div class="form-group"><label>Método de pago</label><select id="paymentMethod"><option>Efectivo</option><option>Yape</option><option>Plin</option><option>BCP</option><option>Interbank</option><option>Abono</option></select></div>
          <div class="form-group"><label>Tipo de entrega</label><select id="deliveryType"><option value="0">Recojo</option><option value="10">Delivery + S/ 10</option></select></div>
        </div>
        <button class="primary-button" id="completeSale">Confirmar venta · ${money(subtotal)}</button>
      </aside>
    </div>`;
}

function ordersView() {
  return `
    <div class="section-heading"><div><h2>Pedidos de clientes</h2><p>Seguimiento de pagos, preparación y entregas.</p></div><button class="primary-button" id="addOrder">＋ Nuevo pedido</button></div>
    <div class="stat-strip">
      <div class="mini-stat"><span>Pendientes</span><strong>${state.orders.filter(o=>o.status==="Pendiente").length}</strong></div>
      <div class="mini-stat"><span>En preparación / delivery</span><strong>${state.orders.filter(o=>["Preparando","Delivery"].includes(o.status)).length}</strong></div>
      <div class="mini-stat"><span>Por cobrar</span><strong>${money(state.orders.reduce((a,o)=>a+(o.total-o.paid),0))}</strong></div>
    </div>
    ${state.orders.map(o=>`<article class="order-card"><div class="order-top"><div><span class="eyebrow">${o.id}</span><h3>${o.client}</h3></div>${statusPill(o.status)}</div><div class="order-meta"><span>Fecha: ${formatDate(o.date)}</span><span>Total: <strong>${money(o.total)}</strong></span><span>Pagado: ${money(o.paid)}</span><span>Saldo: ${money(o.total-o.paid)}</span></div><p class="order-products"><strong>${orderItemsLabel(o.items)}</strong><br><small>${o.address}</small></p><div class="row-actions"><button class="mini-button" data-order-next="${o.id}">Avanzar estado</button><button class="mini-button" data-order-payment="${o.id}">Registrar abono</button></div></article>`).join("")}`;
}

function orderItemsLabel(items=[]) {
  return items.map(item=>`${item.name} · ${item.ml} ml · ${item.qty} un.`).join(", ");
}

function pendingDemand() {
  const demand=new Map();
  state.orders.filter(order=>order.status!=="Entregado").forEach(order=>{
    order.items.forEach(item=>{
      const key=`${item.productId}|${item.ml}`;
      const current=demand.get(key)||{...item,qty:0};
      current.qty+=item.qty;
      demand.set(key,current);
    });
  });
  return [...demand.values()].map(item=>{
    const exact=state.products.find(product=>product.id===item.productId&&product.ml===item.ml)
      || state.products.find(product=>product.name===item.name&&product.ml===item.ml);
    return {...item,stock:exact?.stock||0,toOrder:Math.max(item.qty-(exact?.stock||0),0)};
  }).filter(item=>item.toOrder>0);
}

function clientsView() {
  return `
    <div class="section-heading"><div><h2>Clientes</h2><p>Conoce a tus compradores y fortalece la recompra.</p></div><button class="primary-button" id="addClient">＋ Nuevo cliente</button></div>
    <div class="stat-strip"><div class="mini-stat"><span>Total clientes</span><strong>${state.clients.length}</strong></div><div class="mini-stat"><span>Clientes frecuentes</span><strong>${state.clients.filter(c=>c.purchases>=5).length}</strong></div><div class="mini-stat"><span>Ventas acumuladas</span><strong>${money(state.clients.reduce((a,c)=>a+c.total,0))}</strong></div></div>
    <div class="table-wrap"><table><thead><tr><th>Cliente</th><th>Contacto</th><th>Compras</th><th>Total comprado</th><th>Última compra</th><th>Segmento</th></tr></thead><tbody>
      ${state.clients.map(c=>`<tr><td><div class="product-cell"><div class="avatar">${initials(c.name)}</div><div><strong>${c.name}</strong><span>${c.address}</span></div></div></td><td>${c.phone}</td><td>${c.purchases}</td><td><strong>${money(c.total)}</strong></td><td>${formatDate(c.lastBuy)}</td><td><span class="category-pill">${c.purchases>=8?"VIP":c.purchases>=5?"Frecuente":"Nuevo"}</span></td></tr>`).join("")}
    </tbody></table></div>`;
}

function suppliersView() {
  const demand = pendingDemand();
  const suggested = demand.length ? demand : state.products.filter(p=>p.stock<=p.minStock).map(p=>({...p,toOrder:Math.max(6-p.stock,2),qty:0}));
  return `
    <div class="section-heading"><div><h2>Pedidos a proveedores</h2><p>Crea listas detalladas y compártelas por WhatsApp, imagen o PDF.</p></div><button class="primary-button" id="createPurchaseOrder">＋ Crear orden de compra</button></div>
    <div class="content-grid">
      <section class="panel"><div class="panel-header"><div><h3>Órdenes de compra</h3><p class="panel-subtitle">Historial y seguimiento</p></div></div>
        ${state.purchaseOrders.map(o=>`
          <article class="order-card">
            <div class="order-top"><div><span class="eyebrow">${o.id}</span><h3>${o.supplier}</h3></div>${statusPill(o.status)}</div>
            <div class="order-meta"><span>${formatDate(o.date)}</span><span>${o.items.reduce((sum,item)=>sum+item.qty,0)} unidades</span><span><strong>${money(o.total)}</strong></span></div>
            <div class="purchase-summary">${o.items.slice(0,3).map(item=>`<span>${item.name} · ${item.ml} ml · ${item.qty} un.</span>`).join("")}${o.items.length>3?`<span>+ ${o.items.length-3} productos</span>`:""}</div>
            <div class="order-actions">
              <button class="mini-button" data-view-purchase="${o.id}">Ver lista</button>
              <button class="mini-button" data-print-purchase="${o.id}">Imprimir</button>
              <button class="mini-button" data-image-purchase="${o.id}">Imagen</button>
              <button class="mini-button" data-pdf-purchase="${o.id}">PDF</button>
              <button class="whatsapp-button" data-share-purchase="${o.id}">WhatsApp</button>
              ${o.status!=="Recibido"?`<button class="mini-button" data-receive-order="${o.id}">Recibido</button>`:""}
            </div>
          </article>`).join("")}
      </section>
      <aside class="panel"><div class="panel-header"><div><h3>Compra sugerida</h3><p class="panel-subtitle">${demand.length?"Basada en pedidos pendientes":"Basada en stock mínimo"}</p></div></div><div class="alert-list">
        ${suggested.map(p=>`<div class="alert-item"><div class="product-thumb ${colorClass(p.category||"") }">${initials(p.name)}</div><div><strong>${p.name} · ${p.ml} ml</strong><span>${p.brand}${p.qty?` · pedidos: ${p.qty}`:""}</span></div><span class="stock-pill low">Pedir ${p.toOrder}</span></div>`).join("")}
      </div></aside>
    </div>`;
}

function financeView() {
  const income = state.sales.reduce((a,s)=>a+s.total,0);
  const costs = state.sales.reduce((a,s)=>a+s.cost,0);
  const expenses = state.expenses.reduce((a,e)=>a+e.amount,0);
  return `
    <div class="section-heading"><div><h2>Finanzas</h2><p>Ingresos, gastos y utilidad del negocio.</p></div><button class="primary-button" id="addExpense">＋ Registrar gasto</button></div>
    <div class="metrics-grid">${metric("Ingresos",money(income),"+12%","up","S/")}${metric("Costo de mercadería",money(costs),"","","◇")}${metric("Gastos operativos",money(expenses),"","","↓")}${metric("Utilidad neta",money(income-costs-expenses),`${Math.round((income-costs-expenses)/income*100)}% margen`,"up","↗")}</div>
    <section class="panel"><div class="panel-header"><div><h3>Movimientos</h3><p class="panel-subtitle">Ventas y gastos registrados</p></div></div>
      <div class="table-wrap"><table><thead><tr><th>Fecha</th><th>Descripción</th><th>Tipo</th><th>Monto</th></tr></thead><tbody>
        ${state.sales.map(s=>`<tr><td>${formatDate(s.date)}</td><td>Venta ${s.id} · ${s.client}</td><td><span class="status-pill paid">Ingreso</span></td><td><strong>${money(s.total)}</strong></td></tr>`).join("")}
        ${state.expenses.map(e=>`<tr><td>${formatDate(e.date)}</td><td>${e.description}</td><td><span class="status-pill pending">Gasto</span></td><td><strong>− ${money(e.amount)}</strong></td></tr>`).join("")}
      </tbody></table></div>
    </section>`;
}

function reportsView() {
  const top = [...state.products].sort((a,b)=>b.sold-a.sold).slice(0,10);
  const mostProfitable = [...state.products].sort((a,b)=>(b.price-b.cost)*b.sold-(a.price-a.cost)*a.sold).slice(0,5);
  return `
    <div class="section-heading"><div><h2>Reportes e inteligencia</h2><p>Indicadores para tomar mejores decisiones.</p></div><div><button class="secondary-button" id="exportCSV">Exportar Excel</button> <button class="primary-button" onclick="window.print()">Imprimir PDF</button></div></div>
    <div class="report-grid">
      <section class="panel"><div class="panel-header"><div><h3>Top 10 más vendidos</h3><p class="panel-subtitle">Unidades acumuladas</p></div></div><div class="ranking">${top.map((p,i)=>rankItem(p,i,top[0].sold)).join("")}</div></section>
      <section class="panel"><div class="panel-header"><div><h3>Mayor rentabilidad</h3><p class="panel-subtitle">Ganancia estimada por producto</p></div></div><div class="ranking">${mostProfitable.map((p,i)=>`<div class="rank-item"><span class="rank-number">${i+1}</span><div><strong>${p.name}</strong><small>${p.brand} · margen ${Math.round((p.price-p.cost)/p.price*100)}%</small></div><strong>${money((p.price-p.cost)*p.sold)}</strong></div>`).join("")}</div></section>
      <section class="panel"><div class="panel-header"><div><h3>Clasificación ABC</h3><p class="panel-subtitle">Productos según rotación</p></div></div>
        <div class="stat-strip"><div class="mini-stat"><span>A · Alta venta</span><strong>${state.products.filter(p=>p.sold>=18).length}</strong></div><div class="mini-stat"><span>B · Venta media</span><strong>${state.products.filter(p=>p.sold>=10&&p.sold<18).length}</strong></div><div class="mini-stat"><span>C · Venta baja</span><strong>${state.products.filter(p=>p.sold<10).length}</strong></div></div>
      </section>
      <section class="panel"><div class="panel-header"><div><h3>Proyección de meta</h3><p class="panel-subtitle">Objetivo mensual S/ 12,000</p></div></div>
        <h2>${money(Math.max(12000-state.sales.reduce((a,s)=>a+s.total,0),0))}</h2><p>Falta vender para alcanzar la meta. Equivale aproximadamente a <strong>${Math.ceil(Math.max(12000-state.sales.reduce((a,s)=>a+s.total,0),0)/120)} perfumes</strong> con ticket promedio de S/ 120.</p>
      </section>
    </div>`;
}

function render() {
  const views = {dashboard:dashboardView,articles:articlesView,inventory:inventoryView,sales:salesView,orders:ordersView,clients:clientsView,suppliers:suppliersView,finance:financeView,reports:reportsView};
  viewContainer.innerHTML = views[state.view]();
  bindViewEvents();
  updateGoal();
}

function productForm(product={}) {
  return `<h2>${product.id?"Editar":"Agregar"} producto</h2><form id="productForm" class="form-grid">
    <input type="hidden" name="id" value="${product.id||""}">
    <div class="form-group full"><label>Nombre</label><input name="name" required value="${product.name||""}"></div>
    <div class="form-group"><label>Marca</label><input name="brand" required value="${product.brand||""}"></div>
    <div class="form-group"><label>Categoría</label><select name="category">${["Esencias Mujer","Esencias Hombre","Árabes Mujer","Árabes Hombre","Árabes Unisex","Nicho"].map(c=>`<option ${c===product.category?"selected":""}>${c}</option>`).join("")}</select></div>
    <div class="form-group"><label>Presentación</label><select name="ml" required>${[30,50,60,100].map(ml=>`<option value="${ml}" ${Number(product.ml||30)===ml?"selected":""}>${ml} ml</option>`).join("")}</select></div>
    <div class="form-group"><label>Costo</label><input name="cost" type="number" step=".01" required value="${product.cost||""}"></div>
    <div class="form-group"><label>Precio de venta</label><input name="price" type="number" step=".01" required value="${product.price||""}"></div>
    <div class="form-group"><label>Stock actual</label><input name="stock" type="number" required value="${product.stock??""}"></div>
    <div class="form-group"><label>Stock mínimo</label><input name="minStock" type="number" required value="${product.minStock??4}"></div>
    <div class="modal-actions full"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button type="submit" class="primary-button">Guardar producto</button></div>
  </form>`;
}

function openProductForm(product={}) {
  openModal(productForm(product));
  const form=document.querySelector("#productForm");
  form.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    const data=Object.fromEntries(new FormData(form));
    if(data.id){
      const current=state.products.find(item=>item.id===data.id);
      if(!current) return showToast("No se encontró el producto para editar.");
      Object.assign(current,{...data,ml:+data.ml,cost:+data.cost,price:+data.price,stock:+data.stock,minStock:+data.minStock});
    } else {
      state.products.push({...data,id:`P${String(state.products.length+1).padStart(3,"0")}`,ml:+data.ml,cost:+data.cost,price:+data.price,stock:+data.stock,minStock:+data.minStock,sold:0,active:true});
    }
    persist();closeModal();render();
    showToast(data.id?"Producto actualizado correctamente.":"Producto agregado correctamente.");
  });
}

function bindViewEvents() {
  document.querySelectorAll("[data-view-link]").forEach(el=>el.onclick=()=>setView(el.dataset.viewLink));
  document.querySelector("#addProduct")?.addEventListener("click",()=>openProductForm());
  document.querySelectorAll("[data-edit-product]").forEach(el=>el.onclick=()=>{
    const product=state.products.find(p=>p.id===el.dataset.editProduct);
    if(!product) return showToast("No se encontró el producto.");
    openProductForm(product);
  });
  document.querySelectorAll("[data-select-product]").forEach(el=>el.onchange=()=>{
    el.checked ? state.selectedProducts.add(el.dataset.selectProduct) : state.selectedProducts.delete(el.dataset.selectProduct);
    render();
  });
  document.querySelector("#selectAllProducts")?.addEventListener("change",e=>{
    const visible=state.products.filter(p=>
      (state.inventoryCategory==="Todas"||p.category===state.inventoryCategory) &&
      `${p.name} ${p.brand} ${p.id}`.toLowerCase().includes(state.inventorySearch.toLowerCase())
    );
    visible.forEach(p=>e.target.checked?state.selectedProducts.add(p.id):state.selectedProducts.delete(p.id));
    render();
  });
  document.querySelectorAll("[data-delete-product]").forEach(el=>el.onclick=()=>deleteProducts([el.dataset.deleteProduct]));
  document.querySelector("#deleteSelectedProducts")?.addEventListener("click",()=>deleteProducts([...state.selectedProducts]));
  document.querySelector("#clearAllStock")?.addEventListener("click",clearAllStock);
  document.querySelector(".catalog-search")?.addEventListener("input",e=>{
    state.inventorySearch=e.target.value;
    clearTimeout(state.inventorySearchTimer);
    state.inventorySearchTimer=setTimeout(()=>{
      render();
      const search=document.querySelector(".catalog-search");
      const position=state.inventorySearch.length;
      search?.focus();
      search?.setSelectionRange(position,position);
    },180);
  });
  document.querySelector("#categoryFilter")?.addEventListener("change",e=>{state.inventoryCategory=e.target.value; render();});
  document.querySelector("#saleSearch")?.addEventListener("input",e=>{state.saleSearch=e.target.value; render(); document.querySelector("#saleSearch")?.focus();});
  document.querySelectorAll("[data-add-cart]").forEach(el=>el.onclick=()=>addToCart(el.dataset.addCart));
  document.querySelectorAll("[data-cart-minus]").forEach(el=>el.onclick=()=>changeQty(el.dataset.cartMinus,-1));
  document.querySelectorAll("[data-cart-plus]").forEach(el=>el.onclick=()=>changeQty(el.dataset.cartPlus,1));
  document.querySelector("#clearCart")?.addEventListener("click",()=>{state.cart=[];render();});
  document.querySelector("#deliveryType")?.addEventListener("change",updateSaleTotal);
  document.querySelector("#completeSale")?.addEventListener("click",completeSale);
  document.querySelector("#addClient")?.addEventListener("click",openClientForm);
  document.querySelector("#addExpense")?.addEventListener("click",openExpenseForm);
  document.querySelector("#addOrder")?.addEventListener("click",openOrderForm);
  document.querySelector("#createPurchaseOrder")?.addEventListener("click",openPurchaseOrderForm);
  document.querySelectorAll("[data-order-next]").forEach(el=>el.onclick=()=>advanceOrder(el.dataset.orderNext));
  document.querySelectorAll("[data-order-payment]").forEach(el=>el.onclick=()=>registerPayment(el.dataset.orderPayment));
  document.querySelectorAll("[data-receive-order]").forEach(el=>el.onclick=()=>receivePurchase(el.dataset.receiveOrder));
  document.querySelectorAll("[data-view-purchase]").forEach(el=>el.onclick=()=>viewPurchaseOrder(el.dataset.viewPurchase));
  document.querySelectorAll("[data-print-purchase]").forEach(el=>el.onclick=()=>printPurchaseOrder(el.dataset.printPurchase));
  document.querySelectorAll("[data-image-purchase]").forEach(el=>el.onclick=()=>downloadPurchaseImage(el.dataset.imagePurchase));
  document.querySelectorAll("[data-pdf-purchase]").forEach(el=>el.onclick=()=>downloadPurchasePDF(el.dataset.pdfPurchase));
  document.querySelectorAll("[data-share-purchase]").forEach(el=>el.onclick=()=>openSharePurchase(el.dataset.sharePurchase));
  document.querySelector("#exportCSV")?.addEventListener("click",exportCSV);
}

function deleteProducts(ids) {
  if(!ids.length) return;
  const names=state.products.filter(product=>ids.includes(product.id)).map(product=>product.name);
  if(!confirm(`¿Eliminar ${names.length} producto(s)? Esta acción no se puede deshacer.`)) return;
  state.products=state.products.filter(product=>!ids.includes(product.id));
  state.cart=state.cart.filter(item=>!ids.includes(item.id));
  ids.forEach(id=>state.selectedProducts.delete(id));
  persist();render();showToast(`${names.length} producto(s) eliminado(s).`);
}
function clearAllStock() {
  if(!confirm("¿Deseas colocar todo el inventario en stock 0?")) return;
  state.products.forEach(product=>product.stock=0);
  persist();render();showToast("Todo el inventario quedó en stock 0.");
}

function addToCart(id) {
  const product = state.products.find(p=>p.id===id);
  const current = state.cart.find(i=>i.id===id);
  if (current) { if(current.qty<product.stock) current.qty++; }
  else state.cart.push({id,name:product.name,ml:product.ml,price:product.price,cost:product.cost,qty:1});
  render();
}
function changeQty(id,delta) {
  const item=state.cart.find(i=>i.id===id);
  const product=state.products.find(p=>p.id===id);
  item.qty=Math.max(0,Math.min(product.stock,item.qty+delta));
  state.cart=state.cart.filter(i=>i.qty>0);
  render();
}
function updateSaleTotal() {
  const delivery=Number(document.querySelector("#deliveryType").value);
  const subtotal=state.cart.reduce((a,i)=>a+i.price*i.qty,0);
  document.querySelector("#deliveryAmount").textContent=money(delivery);
  document.querySelector("#cartTotal").textContent=money(subtotal+delivery);
  document.querySelector("#completeSale").textContent=`Confirmar venta · ${money(subtotal+delivery)}`;
}
function completeSale() {
  if(!state.cart.length) return showToast("Agrega al menos un producto.");
  const delivery=Number(document.querySelector("#deliveryType").value);
  const total=state.cart.reduce((a,i)=>a+i.price*i.qty,0)+delivery;
  const cost=state.cart.reduce((a,i)=>a+i.cost*i.qty,0);
  const method=document.querySelector("#paymentMethod").value;
  const client=document.querySelector("#saleClient").value;
  const id=`V-${1049+state.sales.length}`;
  state.sales.unshift({id,date:new Date().toISOString(),client,total,cost,status:method==="Abono"?"Abono":"Pagado",method,delivery:delivery>0,items:state.cart.map(i=>({name:i.name,ml:i.ml,qty:i.qty,price:i.price}))});
  state.cart.forEach(i=>{const p=state.products.find(p=>p.id===i.id);p.stock-=i.qty;p.sold+=i.qty;});
  if(delivery>0||method==="Abono") state.orders.unshift({id:`PED-${32+state.orders.length}`,client,date:todayISO(),total,status:delivery?"Delivery":"Pendiente",paid:method==="Abono"?Math.round(total/2):total,products:state.cart.map(i=>`${i.qty} × ${i.name} ${i.ml} ml`).join(", "),address:delivery?"Dirección por confirmar":"Recojo en tienda"});
  state.cart=[]; persist(); showToast(`Venta ${id} registrada correctamente.`); setView("dashboard");
}

function openClientForm() {
  openModal(`<h2>Nuevo cliente</h2><form id="clientForm" class="form-grid"><div class="form-group full"><label>Nombre completo</label><input name="name" required></div><div class="form-group"><label>Teléfono</label><input name="phone" required></div><div class="form-group"><label>Cumpleaños</label><input name="birthday" type="date"></div><div class="form-group full"><label>Dirección</label><input name="address"></div><div class="modal-actions full"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button class="primary-button">Guardar cliente</button></div></form>`);
}
function openExpenseForm() {
  openModal(`<h2>Registrar gasto</h2><form id="expenseForm" class="form-grid"><div class="form-group full"><label>Descripción</label><input name="description" required></div><div class="form-group"><label>Monto</label><input name="amount" type="number" step=".01" required></div><div class="form-group"><label>Fecha</label><input name="date" type="date" value="${todayISO()}" required></div><div class="modal-actions full"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button class="primary-button">Registrar gasto</button></div></form>`);
}
function openOrderForm() {
  if(!state.products.length) return showToast("Primero agrega artículos al catálogo.");
  openModal(`<h2>Nuevo pedido</h2><form id="orderForm" class="form-grid">
    <div class="form-group"><label>Cliente</label><input name="client" list="clientList" required><datalist id="clientList">${state.clients.map(client=>`<option value="${client.name}">`).join("")}</datalist></div>
    <div class="form-group"><label>Fecha</label><input name="date" type="date" value="${todayISO()}" required></div>
    <div class="form-group full"><div class="list-label"><label>Artículos solicitados</label><button type="button" class="link-button" id="addCustomerOrderRow">＋ Agregar artículo</button></div>
      <div class="customer-order-head"><span>Artículo</span><span>ML</span><span>Cantidad</span><span>Precio</span><span></span></div>
      <div class="customer-order-lines" id="customerOrderLines">${customerOrderLine()}</div>
    </div>
    <div class="form-group"><label>Total</label><input name="total" id="customerOrderTotal" type="number" step=".01" value="${state.products[0]?.price||0}" required></div>
    <div class="form-group"><label>Abono recibido</label><input name="paid" type="number" step=".01" value="0"></div>
    <div class="form-group full"><label>Dirección / entrega</label><input name="address" required></div>
    <div class="modal-actions full"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button type="submit" class="primary-button">Crear pedido</button></div>
  </form>`);
  document.querySelector(".modal").classList.add("modal-wide");
  document.querySelector("#addCustomerOrderRow").onclick=()=>{
    document.querySelector("#customerOrderLines").insertAdjacentHTML("beforeend",customerOrderLine());
    updateCustomerOrderTotal();
  };
  document.querySelector("#customerOrderLines").addEventListener("input",updateCustomerOrderTotal);
  document.querySelector("#customerOrderLines").addEventListener("change",e=>{
    if(e.target.matches("[name='orderProductId']")){
      const product=state.products.find(item=>item.id===e.target.value);
      const row=e.target.closest(".customer-order-line");
      row.querySelector("[name='orderMl']").value=product.ml;
      row.querySelector("[name='orderPrice']").value=product.price;
    }
    updateCustomerOrderTotal();
  });
  document.querySelector("#customerOrderLines").addEventListener("click",e=>{
    if(e.target.matches("[data-remove-order-line]")){e.target.closest(".customer-order-line").remove();updateCustomerOrderTotal();}
  });
}

function customerOrderLine(product=state.products[0]) {
  return `<div class="customer-order-line">
    <select name="orderProductId" required>${state.products.map(item=>`<option value="${item.id}" ${item.id===product.id?"selected":""}>${item.name} · ${item.brand}</option>`).join("")}</select>
    <select name="orderMl" required>${[30,50,60,100].map(ml=>`<option value="${ml}" ${ml===product.ml?"selected":""}>${ml} ml</option>`).join("")}</select>
    <input name="orderQty" type="number" min="1" value="1" aria-label="Cantidad" required>
    <input name="orderPrice" type="number" min="0" step=".01" value="${product.price}" aria-label="Precio" required>
    <button type="button" class="remove-line" data-remove-order-line>×</button>
  </div>`;
}
function updateCustomerOrderTotal() {
  const total=[...document.querySelectorAll(".customer-order-line")].reduce((sum,row)=>sum+(+row.querySelector("[name='orderQty']").value||0)*(+row.querySelector("[name='orderPrice']").value||0),0);
  const input=document.querySelector("#customerOrderTotal");
  if(input) input.value=total.toFixed(2);
}
function openPurchaseOrderForm() {
  const demand=pendingDemand();
  const suggested=demand.length
    ? demand.map(item=>({product:state.products.find(product=>product.id===item.productId)||state.products.find(product=>product.name===item.name),ml:item.ml,qty:item.toOrder})).filter(item=>item.product)
    : state.products.filter(p=>p.stock<=p.minStock).map(product=>({product,ml:product.ml,qty:Math.max(6-product.stock,2)}));
  openModal(`<h2>Nueva orden de compra</h2>
    <form id="purchaseForm" class="form-grid">
      <div class="form-group"><label>Proveedor</label><input name="supplier" value="Fragancias E&L" required></div>
      <div class="form-group"><label>WhatsApp del proveedor</label><input name="supplierPhone" value="51927962831" inputmode="tel" placeholder="51999999999"></div>
      <div class="form-group"><label>Fecha</label><input name="date" type="date" value="${todayISO()}" required></div>
      <div class="form-group"><label>Estado</label><select name="status"><option>Pendiente</option><option>En tránsito</option></select></div>
      <div class="form-group full">
        <div class="list-label"><label>Lista de productos</label><button type="button" class="link-button" id="addPurchaseRow">＋ Agregar fila</button></div>
        <div class="purchase-line-head"><span>Producto</span><span>ML</span><span>Cantidad</span><span>Precio unit.</span><span></span></div>
        <div class="purchase-lines" id="purchaseLines">
          ${(suggested.length?suggested.slice(0,8):[{product:state.products[0],ml:state.products[0]?.ml,qty:1}]).filter(item=>item.product).map(item=>purchaseLineRow(item.product,item.qty,item.ml)).join("")}
        </div>
      </div>
      <div class="form-group full"><label>Observaciones</label><textarea name="notes" placeholder="Presentación, condiciones de entrega, forma de pago..."></textarea></div>
      <div class="purchase-form-total full"><span>Total estimado</span><strong id="purchaseFormTotal">${money(0)}</strong></div>
      <div class="modal-actions full"><button type="button" class="secondary-button" data-close-modal>Cancelar</button><button class="primary-button">Generar orden</button></div>
    </form>`);
  document.querySelector(".modal").classList.add("modal-wide");
  document.querySelector("#addPurchaseRow").onclick=()=>addPurchaseLine();
  document.querySelector("#purchaseLines").addEventListener("input",updatePurchaseFormTotal);
  document.querySelector("#purchaseLines").addEventListener("change",e=>{
    if(e.target.matches("[name='productId']")) {
      const product=state.products.find(p=>p.id===e.target.value);
      const row=e.target.closest(".purchase-line");
      row.querySelector("[name='ml']").value=product?.ml||100;
      row.querySelector("[name='unitCost']").value=product?.cost||0;
    }
    updatePurchaseFormTotal();
  });
  document.querySelector("#purchaseLines").addEventListener("click",e=>{
    if(e.target.matches("[data-remove-line]")) { e.target.closest(".purchase-line").remove(); updatePurchaseFormTotal(); }
  });
  updatePurchaseFormTotal();
}

function purchaseLineRow(product=state.products[0], qty=1, selectedMl=product.ml) {
  return `<div class="purchase-line">
    <select name="productId" required>${state.products.map(p=>`<option value="${p.id}" ${p.id===product.id?"selected":""}>${p.name} · ${p.brand}</option>`).join("")}</select>
    <select name="ml" aria-label="Mililitros" required>${[30,50,60,100].map(ml=>`<option value="${ml}" ${Number(selectedMl)===ml?"selected":""}>${ml} ml</option>`).join("")}</select>
    <input name="qty" type="number" min="1" value="${qty}" aria-label="Cantidad" required>
    <input name="unitCost" type="number" min="0" step=".01" value="${product.cost}" aria-label="Costo unitario" required>
    <button type="button" class="remove-line" data-remove-line aria-label="Eliminar fila">×</button>
  </div>`;
}
function addPurchaseLine() {
  document.querySelector("#purchaseLines").insertAdjacentHTML("beforeend",purchaseLineRow());
  updatePurchaseFormTotal();
}
function updatePurchaseFormTotal() {
  const rows=[...document.querySelectorAll(".purchase-line")];
  const total=rows.reduce((sum,row)=>sum+(Number(row.querySelector("[name='qty']").value)||0)*(Number(row.querySelector("[name='unitCost']").value)||0),0);
  const target=document.querySelector("#purchaseFormTotal");
  if(target) target.textContent=money(total);
}

function advanceOrder(id) {
  const order=state.orders.find(o=>o.id===id);
  const flow=["Pendiente","Preparando","Delivery","Entregado"];
  order.status=flow[Math.min(flow.indexOf(order.status)+1,flow.length-1)];
  persist(); render(); showToast(`Pedido ${id}: ${order.status}.`);
}
function registerPayment(id) {
  const order=state.orders.find(o=>o.id===id);
  const amount=Number(prompt(`Saldo pendiente ${money(order.total-order.paid)}. Ingrese el abono:`));
  if(amount>0){order.paid=Math.min(order.total,order.paid+amount);persist();render();showToast("Abono registrado.");}
}
function receivePurchase(id) {
  const order=state.purchaseOrders.find(o=>o.id===id);
  if(!order||order.status==="Recibido") return;
  if(!confirm(`¿Confirmas la recepción de ${order.items.reduce((sum,item)=>sum+item.qty,0)} unidades? Se sumarán al inventario.`)) return;
  order.items.forEach(item=>{
    let product=state.products.find(current=>current.id===item.productId&&current.ml===item.ml)
      || state.products.find(current=>current.name===item.name&&current.brand===item.brand&&current.ml===item.ml);
    if(!product){
      const source=state.products.find(current=>current.id===item.productId)||{};
      product={...source,id:nextProductId(),name:item.name,brand:item.brand,ml:item.ml,cost:item.unitCost,price:source.price||item.unitCost,stock:0,minStock:4,sold:0,active:true};
      state.products.push(product);
    }
    product.stock+=item.qty;
    product.cost=item.unitCost;
  });
  order.status="Recibido";
  order.receivedAt=new Date().toISOString();
  persist(); render(); showToast(`Orden ${id} recibida y stock actualizado.`);
}
function nextProductId() {
  const highest=state.products.reduce((max,product)=>Math.max(max,Number(String(product.id).replace(/\D/g,""))||0),0);
  return `P${String(highest+1).padStart(3,"0")}`;
}

function getPurchaseOrder(id) {
  return state.purchaseOrders.find(order=>order.id===id);
}
function purchaseOrderDocument(order) {
  return `<div class="purchase-document" id="purchaseDocument">
    <header><div><span class="document-brand">PERFUME CONTROL</span><h2>ORDEN DE COMPRA</h2><p>Gestión y venta de perfumes</p></div><div class="document-number"><span>Número</span><strong>${order.id}</strong><span>Fecha</span><strong>${formatDate(order.date)}</strong></div></header>
    <section class="document-parties"><div><span>Proveedor</span><strong>${order.supplier}</strong><small>${order.supplierPhone?`WhatsApp: +${order.supplierPhone}`:""}</small></div><div><span>Solicitado por</span><strong>Cristian Ferrer</strong><small>Perfume Control</small></div></section>
    <table><thead><tr><th>#</th><th>Producto</th><th>Marca</th><th>ML</th><th>Cant.</th><th>Precio unit.</th><th>Subtotal</th></tr></thead><tbody>
      ${order.items.map((item,index)=>`<tr><td>${index+1}</td><td><strong>${item.name}</strong></td><td>${item.brand||"-"}</td><td><strong>${item.ml} ml</strong></td><td>${item.qty}</td><td>${money(item.unitCost)}</td><td>${money(item.qty*item.unitCost)}</td></tr>`).join("")}
    </tbody></table>
    <div class="document-bottom"><div><span>Observaciones</span><p>${order.notes||"Sin observaciones."}</p></div><div class="document-total"><span>Total estimado</span><strong>${money(order.total)}</strong></div></div>
    <footer>Por favor confirmar disponibilidad, precio final y fecha estimada de entrega.</footer>
  </div>`;
}
function viewPurchaseOrder(id) {
  const order=getPurchaseOrder(id);
  openModal(`${purchaseOrderDocument(order)}<div class="modal-actions purchase-preview-actions"><button class="secondary-button" data-print-purchase="${id}">Imprimir</button><button class="secondary-button" data-image-purchase="${id}">Descargar imagen</button><button class="secondary-button" data-pdf-purchase="${id}">Descargar PDF</button><button class="whatsapp-button" data-share-purchase="${id}">Compartir</button></div>`);
  document.querySelector(".modal").classList.add("modal-document");
  bindPurchasePreviewActions();
}
function bindPurchasePreviewActions() {
  modalContent.querySelector("[data-print-purchase]")?.addEventListener("click",e=>printPurchaseOrder(e.currentTarget.dataset.printPurchase));
  modalContent.querySelector("[data-image-purchase]")?.addEventListener("click",e=>downloadPurchaseImage(e.currentTarget.dataset.imagePurchase));
  modalContent.querySelector("[data-pdf-purchase]")?.addEventListener("click",e=>downloadPurchasePDF(e.currentTarget.dataset.pdfPurchase));
  modalContent.querySelector("[data-share-purchase]")?.addEventListener("click",e=>openSharePurchase(e.currentTarget.dataset.sharePurchase));
}
function printPurchaseOrder(id) {
  const order=getPurchaseOrder(id);
  const printWindow=window.open("","_blank","width=900,height=900");
  if(!printWindow) return showToast("Permite ventanas emergentes para imprimir.");
  const stylesheet=new URL("styles.css",window.location.href).href;
  printWindow.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${order.id}</title><link rel="stylesheet" href="${stylesheet}"><style>body{background:#fff;padding:30px}.purchase-document{max-width:820px;margin:auto;box-shadow:none;border:0}@media print{body{padding:0}}</style></head><body>${purchaseOrderDocument(order)}<script>window.onload=()=>window.print()<\/script></body></html>`);
  printWindow.document.close();
}
function purchaseOrderText(order) {
  const lines=order.items.map((item,index)=>`${index+1}. ${item.name} (${item.brand||"Sin marca"}) - ${item.ml} ml - ${item.qty} und. x ${money(item.unitCost)} = ${money(item.qty*item.unitCost)}`);
  return `ORDEN DE COMPRA ${order.id}\nProveedor: ${order.supplier}\nFecha: ${formatDate(order.date)}\n\n${lines.join("\n")}\n\nTOTAL: ${money(order.total)}\n${order.notes?`Observaciones: ${order.notes}\n`:""}Por favor confirmar disponibilidad y fecha de entrega.`;
}
function drawWrappedText(ctx,text,x,y,maxWidth,lineHeight) {
  const words=String(text).split(/\s+/); let line=""; const lines=[];
  words.forEach(word=>{const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word;}else line=test;});
  if(line) lines.push(line);
  lines.forEach((value,index)=>ctx.fillText(value,x,y+index*lineHeight));
  return y+lines.length*lineHeight;
}
async function createPurchaseImage(order) {
  const width=1200, padding=72, rowHeight=62;
  const height=430+order.items.length*rowHeight+(order.notes?100:40);
  const canvas=document.createElement("canvas"); canvas.width=width; canvas.height=height;
  const ctx=canvas.getContext("2d");
  ctx.fillStyle="#f8f5ef";ctx.fillRect(0,0,width,height);
  ctx.fillStyle="#171310";ctx.fillRect(0,0,width,190);
  ctx.fillStyle="#d5ad68";ctx.font="700 26px Arial";ctx.fillText("PERFUME CONTROL",padding,62);
  ctx.fillStyle="#fff";ctx.font="700 50px Georgia";ctx.fillText("ORDEN DE COMPRA",padding,128);
  ctx.font="700 25px Arial";ctx.fillText(order.id,width-300,70);
  ctx.font="20px Arial";ctx.fillText(formatDate(order.date),width-300,112);
  ctx.fillStyle="#171310";ctx.font="700 24px Arial";ctx.fillText(`Proveedor: ${order.supplier}`,padding,240);
  ctx.font="18px Arial";ctx.fillStyle="#71685f";ctx.fillText(order.supplierPhone?`WhatsApp: +${order.supplierPhone}`:"",padding,272);
  let y=325;
  ctx.fillStyle="#e9dfcf";ctx.fillRect(padding,y,width-padding*2,46);
  ctx.fillStyle="#171310";ctx.font="700 17px Arial";
  ctx.fillText("#",padding+18,y+29);ctx.fillText("PRODUCTO",padding+60,y+29);ctx.fillText("ML",710,y+29);ctx.fillText("CANT.",790,y+29);ctx.fillText("COSTO",890,y+29);ctx.fillText("SUBTOTAL",1020,y+29);
  y+=46;
  order.items.forEach((item,index)=>{
    ctx.fillStyle=index%2?"#f1ece4":"#fff";ctx.fillRect(padding,y,width-padding*2,rowHeight);
    ctx.fillStyle="#171310";ctx.font="18px Arial";ctx.fillText(String(index+1),padding+18,y+37);
    ctx.font="700 19px Arial";ctx.fillText(item.name,padding+60,y+27);
    ctx.font="16px Arial";ctx.fillStyle="#71685f";ctx.fillText(item.brand||"",padding+60,y+49);
    ctx.fillStyle="#171310";ctx.font="18px Arial";ctx.fillText(`${item.ml}`,710,y+37);ctx.fillText(String(item.qty),805,y+37);ctx.fillText(money(item.unitCost),890,y+37);ctx.font="700 18px Arial";ctx.fillText(money(item.qty*item.unitCost),1020,y+37);
    y+=rowHeight;
  });
  y+=34;ctx.fillStyle="#71685f";ctx.font="700 16px Arial";ctx.fillText("OBSERVACIONES",padding,y);
  ctx.fillStyle="#171310";ctx.font="18px Arial";y=drawWrappedText(ctx,order.notes||"Sin observaciones.",padding,y+30,680,25);
  ctx.fillStyle="#171310";ctx.font="700 24px Arial";ctx.fillText("TOTAL",870,y-24);ctx.font="700 30px Arial";ctx.fillText(money(order.total),990,y-24);
  return new Promise(resolve=>canvas.toBlob(resolve,"image/png",1));
}
function createPurchasePDF(order) {
  const clean=value=>String(value).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g,"");
  const escape=value=>clean(value).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");
  const pageSize=24;
  const pages=Array.from({length:Math.max(1,Math.ceil(order.items.length/pageSize))},(_,index)=>order.items.slice(index*pageSize,(index+1)*pageSize));
  const fontId=3+pages.length*2;
  const kids=pages.map((_,index)=>`${3+index*2} 0 R`).join(" ");
  const objects=["<< /Type /Catalog /Pages 2 0 R >>",`<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`];
  pages.forEach((items,pageIndex)=>{
    const commands=["BT","/F1 18 Tf","50 790 Td",`(${escape("PERFUME CONTROL - ORDEN DE COMPRA")}) Tj`,"/F1 10 Tf","0 -28 Td",`(${escape(`${order.id}  |  ${formatDate(order.date)}  |  Pagina ${pageIndex+1} de ${pages.length}`)}) Tj`,"0 -20 Td",`(${escape(`Proveedor: ${order.supplier}`)}) Tj`,"0 -28 Td",`(${escape("#  PRODUCTO / MARCA                    ML   CANT.   COSTO      SUBTOTAL")}) Tj`];
    items.forEach((item,index)=>{
      const itemNumber=pageIndex*pageSize+index+1;
      const name=`${item.name} ${item.brand?`/ ${item.brand}`:""}`.slice(0,33).padEnd(35," ");
      commands.push(`0 -22 Td (${escape(`${String(itemNumber).padStart(2,"0")} ${name} ${String(item.ml).padStart(3," ")}  ${String(item.qty).padStart(4," ")}   ${money(item.unitCost).padStart(9," ")}   ${money(item.qty*item.unitCost).padStart(10," ")}`)}) Tj`);
    });
    if(pageIndex===pages.length-1) commands.push("0 -32 Td",`(${escape(`TOTAL ESTIMADO: ${money(order.total)}`)}) Tj`,"0 -25 Td",`(${escape(`Observaciones: ${order.notes||"Sin observaciones."}`)}) Tj`,"0 -25 Td",`(${escape("Confirmar disponibilidad y fecha estimada de entrega.")}) Tj`);
    commands.push("ET");
    const stream=commands.join("\n");
    const pageId=3+pageIndex*2;
    const streamId=pageId+1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${streamId} 0 R >>`);
    objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  });
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>");
  let pdf="%PDF-1.4\n", offsets=[0];
  objects.forEach((object,index)=>{offsets.push(pdf.length);pdf+=`${index+1} 0 obj\n${object}\nendobj\n`;});
  const xref=pdf.length;pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map(offset=>String(offset).padStart(10,"0")+" 00000 n ").join("\n")}\ntrailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf],{type:"application/pdf"});
}
function downloadBlob(blob,fileName) {
  const link=document.createElement("a");link.href=URL.createObjectURL(blob);link.download=fileName;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
}
async function downloadPurchaseImage(id) {
  const order=getPurchaseOrder(id);downloadBlob(await createPurchaseImage(order),`${order.id}.png`);showToast("Imagen de la orden descargada.");
}
function downloadPurchasePDF(id) {
  const order=getPurchaseOrder(id);downloadBlob(createPurchasePDF(order),`${order.id}.pdf`);showToast("PDF de la orden descargado.");
}
function openSharePurchase(id) {
  const order=getPurchaseOrder(id);
  openModal(`<h2>Compartir ${order.id}</h2><p>Selecciona el formato que deseas enviar al proveedor por WhatsApp.</p><div class="share-options"><button class="share-card" id="shareOrderImage"><strong>Compartir imagen</strong><span>Ideal para verla directamente en el chat.</span></button><button class="share-card" id="shareOrderPDF"><strong>Compartir PDF</strong><span>Documento formal para guardar o imprimir.</span></button><button class="share-card" id="shareOrderText"><strong>Enviar solo texto</strong><span>Abre WhatsApp con la lista escrita.</span></button></div>`);
  document.querySelector("#shareOrderImage").onclick=()=>sharePurchaseFile(order,"image");
  document.querySelector("#shareOrderPDF").onclick=()=>sharePurchaseFile(order,"pdf");
  document.querySelector("#shareOrderText").onclick=()=>openWhatsApp(order);
}
async function sharePurchaseFile(order,type) {
  const blob=type==="image"?await createPurchaseImage(order):createPurchasePDF(order);
  const extension=type==="image"?"png":"pdf";
  const file=new File([blob],`${order.id}.${extension}`,{type:blob.type});
  if(navigator.canShare?.({files:[file]})) {
    try { await navigator.share({title:`Orden de compra ${order.id}`,text:`Orden para ${order.supplier}`,files:[file]}); return; }
    catch(error) { if(error.name==="AbortError") return; }
  }
  downloadBlob(blob,file.name);
  openWhatsApp(order,`He descargado el archivo ${file.name}. Adjúntalo en este chat.`);
}
function openWhatsApp(order,extra="") {
  const phone=String(order.supplierPhone||"").replace(/\D/g,"");
  const text=`${purchaseOrderText(order)}${extra?`\n\n${extra}`:""}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank");
}
function exportCSV() {
  const rows=[["Código","Producto","Marca","Categoría","ML","Costo","Precio","Stock","Vendidos"],...state.products.map(p=>[p.id,p.name,p.brand,p.category,p.ml,p.cost,p.price,p.stock,p.sold])];
  const blob=new Blob(["\ufeff"+rows.map(r=>r.map(v=>`"${v}"`).join(",")).join("\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="reporte_perfume_control.csv";a.click();URL.revokeObjectURL(a.href);
  showToast("Reporte exportado correctamente.");
}

document.addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target));
  if(e.target.id==="productForm"){
    if(data.id){
      const product=state.products.find(p=>p.id===data.id);
      if(!product) return showToast("No se encontró el producto para editar.");
      Object.assign(product,{...data,ml:+data.ml,cost:+data.cost,price:+data.price,stock:+data.stock,minStock:+data.minStock});
    }
    else state.products.push({...data,id:`P${String(state.products.length+1).padStart(3,"0")}`,ml:+data.ml,cost:+data.cost,price:+data.price,stock:+data.stock,minStock:+data.minStock,sold:0,active:true});
    persist();closeModal();render();showToast(data.id?"Producto actualizado correctamente.":"Producto agregado correctamente.");
  }
  if(e.target.id==="clientForm"){state.clients.push({id:`C${String(state.clients.length+1).padStart(3,"0")}`,...data,purchases:0,total:0,lastBuy:todayISO()});persist();closeModal();render();showToast("Cliente registrado.");}
  if(e.target.id==="expenseForm"){state.expenses.unshift({id:`G${String(state.expenses.length+1).padStart(3,"0")}`,...data,amount:+data.amount});persist();closeModal();render();showToast("Gasto registrado.");}
  if(e.target.id==="orderForm"){
    const formData=new FormData(e.target);
    const productIds=formData.getAll("orderProductId");
    const mls=formData.getAll("orderMl");
    const quantities=formData.getAll("orderQty");
    const prices=formData.getAll("orderPrice");
    if(!productIds.length) return showToast("Agrega al menos un artículo.");
    const items=productIds.map((productId,index)=>{
      const product=state.products.find(item=>item.id===productId);
      return {productId,name:product.name,brand:product.brand,ml:+mls[index],qty:+quantities[index],price:+prices[index]};
    });
    state.orders.unshift({id:`PED-${32+state.orders.length}`,client:data.client,date:data.date,total:+data.total,paid:+data.paid,address:data.address,status:"Pendiente",items});
    persist();closeModal();render();showToast("Pedido creado y agregado a la demanda de compra.");
  }
  if(e.target.id==="purchaseForm"){
    const formData=new FormData(e.target);
    const productIds=formData.getAll("productId");
    const milliliters=formData.getAll("ml");
    const quantities=formData.getAll("qty");
    const unitCosts=formData.getAll("unitCost");
    if(!productIds.length) return showToast("Agrega al menos un producto a la orden.");
    const items=productIds.map((productId,index)=>{
      const product=state.products.find(p=>p.id===productId);
      return {productId,name:product.name,brand:product.brand,ml:+milliliters[index],qty:+quantities[index],unitCost:+unitCosts[index]};
    });
    const total=items.reduce((sum,item)=>sum+item.qty*item.unitCost,0);
    state.purchaseOrders.unshift({
      id:`OC-${String(9+state.purchaseOrders.length).padStart(3,"0")}`,
      supplier:data.supplier, supplierPhone:data.supplierPhone, date:data.date,
      status:data.status, notes:data.notes, items, total
    });
    persist();closeModal();render();showToast("Orden de compra generada.");
  }
});

document.querySelectorAll(".nav-item").forEach(btn=>btn.onclick=()=>setView(btn.dataset.view));
document.querySelectorAll("[data-open-sale]").forEach(btn=>btn.onclick=()=>setView("sales"));
document.querySelector("#menuButton").onclick=()=>document.querySelector("#sidebar").classList.toggle("open");
document.querySelector("#modalClose").onclick=closeModal;
modalBackdrop.addEventListener("click",e=>{if(e.target===modalBackdrop)closeModal();});
document.addEventListener("click",e=>{if(e.target.matches("[data-close-modal]"))closeModal();});
document.querySelector("#notificationButton").onclick=()=>openModal(`<h2>Notificaciones</h2><div class="alert-list"><div class="alert-item"><div class="metric-icon">!</div><div><strong>Stock bajo</strong><span>Quedan 2 unidades de Eclaire.</span></div></div><div class="alert-item"><div class="metric-icon">♙</div><div><strong>Cumpleaños</strong><span>Hoy cumple años Luis Vega.</span></div></div><div class="alert-item"><div class="metric-icon">↗</div><div><strong>Resumen diario</strong><span>Las ventas de hoy superan en 12% al promedio.</span></div></div></div>`);
document.querySelector("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"){state.inventorySearch=e.target.value;setView("inventory");}});

function updateGoal(){
  const monthly=state.sales.reduce((a,s)=>a+s.total,0);
  const pct=Math.min(monthly/12000*100,100);
  document.querySelector("#goalProgress").style.width=`${pct}%`;
  document.querySelector("#goalText").textContent=`${Math.round(pct)}% alcanzado · faltan ${shortMoney(Math.max(12000-monthly,0))}`;
}
document.querySelector("#todayLabel").textContent=new Intl.DateTimeFormat("es-PE",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
render();
