/**
 * HILATURA CARACAS - JAVASCRIPT ENGINE
 * 1. Three.js Interactive 3D Spool (Carrete 3D 360°)
 * 2. Product Catalog (11 Colores) & Live Meter Pricing
 * 3. Hero Quick Calculator
 * 4. Slide-Over Cart Panel & Direct WhatsApp Integration
 * 5. Polaroid Gallery & Lightbox
 * 6. Toast Notifications & LocalStorage Persistence
 */

// ==========================================================================
// 1. DATA DEFINITIONS: 11 COLORS OF BRAIDED COTTON CORDS WITH CORE
// ==========================================================================
const BASE_PRICE_PER_METER = 0.50; // $0.50 USD per meter

const CORD_COLORS = [
  {
    id: 'negro',
    name: 'Negro Azabache',
    tone: 'Profundo / Formal',
    hex: '#1A1A1A',
    category: 'neutros',
    description: 'El esencial universal. Elegancia absoluta y máxima resistencia al uso diario en calzado formal, casual y prendas deportivas de alto rango.',
    uses: ['Calzado Formal', 'Joggers', 'Urbano'],
    image: 'assets/rope_negro_naranja_vinotinto.jpg',
    threeColor: 0x1A1A1A
  },
  {
    id: 'naranja',
    name: 'Naranja Intenso',
    tone: 'Vibrante / Energético',
    hex: '#E8650A',
    category: 'vivos',
    description: 'Color de alto impacto visual para prendas deportivas, calzado de trail running, bisutería juvenil y accesorios streetwear.',
    uses: ['Calzado Deportivo', 'Streetwear', 'Bisutería'],
    image: 'assets/rope_negro_naranja_vinotinto.jpg',
    threeColor: 0xE8650A
  },
  {
    id: 'vinotinto',
    name: 'Vinotinto Jacquard',
    tone: 'Borgoña / Elegante',
    hex: '#7B1D35',
    category: 'calidos',
    description: 'Color estrella de la paleta Jacquard. Sofisticado, prémium y rico, armoniza a la perfección con cuero, calzado artesanal y bisutería.',
    uses: ['Calzado Cuero', 'Bisutería', 'Marroquinería'],
    image: 'assets/rope_negro_naranja_vinotinto.jpg',
    threeColor: 0x7B1D35
  },
  {
    id: 'gris',
    name: 'Gris Perla',
    tone: 'Urbano / Neutro',
    hex: '#9E9E9E',
    category: 'neutros',
    description: 'Tono neutro moderno y equilibrado. Ideal para joggers técnicos, capuchas minimalistas y calzado contemporáneo de moda urbana.',
    uses: ['Joggers', 'Confección', 'Calzado'],
    image: 'assets/rope_gris_plomo.jpg',
    threeColor: 0x9E9E9E
  },
  {
    id: 'gris_plomo',
    name: 'Gris Plomo',
    tone: 'Oscuro / Industrial',
    hex: '#616161',
    category: 'neutros',
    description: 'Tono gris oscuro de acabado industrial y urbano. Perfecto para calzado técnico, prendas outerwear y accesorios masculinos.',
    uses: ['Calzado Técnico', 'Outerwear', 'Masculino'],
    image: 'assets/rope_gris_plomo.jpg',
    threeColor: 0x616161
  },
  {
    id: 'amarillo',
    name: 'Amarillo Solar',
    tone: 'Luminoso / Alegre',
    hex: '#F5C800',
    category: 'vivos',
    description: 'Máxima luminosidad y alegría. Esencial para calzado infantil, accesorios de verano, bisutería artesanal y prendas llamativas.',
    uses: ['Infantil', 'Verano', 'Accesorios'],
    image: 'assets/rope_amarillo_futsea_verde.jpg',
    threeColor: 0xF5C800
  },
  {
    id: 'futsea',
    name: 'Fucsia Neón',
    tone: 'Impactante / Moderno',
    hex: '#E91E8C',
    category: 'vivos',
    description: 'Color tendencia de alta moda. Perfecto para calzado femenino, accesorios artísticos, bisutería de diseñador y prendas Y2K.',
    uses: ['Moda Femenina', 'Bisutería Autor', 'Y2K'],
    image: 'assets/rope_amarillo_futsea_verde.jpg',
    threeColor: 0xE91E8C
  },
  {
    id: 'verde',
    name: 'Verde Bosque',
    tone: 'Natural / Orgánico',
    hex: '#2E7D32',
    category: 'vivos',
    description: 'Conexión con la naturaleza. Ideal para calzado outdoor, tapices de macramé boho, bisutería artesanal y prendas eco-fashion.',
    uses: ['Outdoor', 'Macramé', 'Eco-Fashion'],
    image: 'assets/rope_amarillo_futsea_verde.jpg',
    threeColor: 0x2E7D32
  },
  {
    id: 'beige',
    name: 'Beige Natural',
    tone: 'Crudo / Lino',
    hex: '#E6DAC8',
    category: 'neutros',
    description: 'El favorito clásico para macramé, alpargatas y moda bohemia. Tono lino puro que combina con cualquier textura orgánica.',
    uses: ['Macramé', 'Alpargatas', 'Prendas Lino'],
    image: 'assets/rope_beige_marron_marronoscuro.jpg',
    threeColor: 0xE6DAC8
  },
  {
    id: 'marron',
    name: 'Marrón Caramelo',
    tone: 'Cálido / Natural',
    hex: '#A07855',
    category: 'calidos',
    description: 'Tono orgánico por excelencia. Imita el color de las suelas de yute y cuero natural, ideal para espadrilles y accesorios boho.',
    uses: ['Espadrilles', 'Yute', 'Accesorios Boho'],
    image: 'assets/rope_beige_marron_marronoscuro.jpg',
    threeColor: 0xA07855
  },
  {
    id: 'marron_oscuro',
    name: 'Marrón Chocolate',
    tone: 'Moka / Rústico',
    hex: '#3E2010',
    category: 'calidos',
    description: 'Cálido, terroso y noble. Perfecto para calzado de aventura, botas de cuero, marroquinería y tapices de telar rústico artesanal.',
    uses: ['Botas', 'Cuero', 'Telar Rústico'],
    image: 'assets/rope_beige_marron_marronoscuro.jpg',
    threeColor: 0x3E2010
  }
];

// POLAROID GALLERY DATA
const GALLERY_ITEMS = [
  {
    id: 'polaroid-1',
    category: 'calzado',
    title: 'Negro, Naranja & Vinotinto',
    subtitle: 'COLORES OSCUROS DE ALTO IMPACTO',
    desc: 'Tres de nuestros colores más solicitados en Caracas: Negro Azabache para calzado formal, Naranja Intenso para deportivos y Vinotinto Jacquard para marroquinería premium.',
    image: 'assets/rope_negro_naranja_vinotinto.jpg',
    tag: 'COLECCIÓN PREMIUM'
  },
  {
    id: 'polaroid-2',
    category: 'calzado',
    title: 'Gris Perla & Gris Plomo',
    subtitle: 'GRISES URBANOS EN 2 TONOS',
    desc: 'La dupla perfecta de neutros modernos. Gris Perla para streetwear y Gris Plomo industrial para calzado técnico y outerwear masculino de alta gama.',
    image: 'assets/rope_gris_plomo.jpg',
    tag: 'TONOS URBANOS'
  },
  {
    id: 'polaroid-3',
    category: 'macrame',
    title: 'Amarillo, Fucsia & Verde',
    subtitle: 'VIVOS & TENDENCIA',
    desc: 'Nuestra paleta más vibrante: Amarillo Solar para prendas de verano, Fucsia Neón para moda femenina y Verde Bosque para eco-fashion y macramé boho.',
    image: 'assets/rope_amarillo_futsea_verde.jpg',
    tag: 'COLORES TENDENCIA'
  },
  {
    id: 'polaroid-4',
    category: 'confeccion',
    title: 'Beige, Marrón & Chocolate',
    subtitle: 'PALETA NATURAL & TIERRA',
    desc: 'Los tonos cálidos y orgánicos de nuestra colección: Beige Natural para macramé, Marrón Caramelo para espadrilles y Chocolate oscuro para botas y marroquinería.',
    image: 'assets/rope_beige_marron_marronoscuro.jpg',
    tag: 'TONOS TIERRA'
  },
  {
    id: 'polaroid-5',
    category: 'confeccion',
    title: 'Colección Completa: 11 Colores',
    subtitle: 'STOCK INMEDIATO EN CARACAS',
    desc: 'Los 11 colores de la colección Hilatura Caracas disponibles en stock para despacho inmediato. Pedidos al mayor con descuentos especiales para fabricantes.',
    image: 'assets/rope_negro_naranja_vinotinto.jpg',
    tag: 'STOCK INMEDIATO'
  },
  {
    id: 'polaroid-6',
    category: 'bisuteria',
    title: 'Tonos Cálidos para Artesanía',
    subtitle: 'BEIGE & MARRÓN PARA BISUTERÍA',
    desc: 'Nuestros tonos tierra son los preferidos por artesanos y bisuteros caraqueños. El cordón mantiene su sección cilíndrica perfecta en cada nudo y entrelazado.',
    image: 'assets/rope_beige_marron_marronoscuro.jpg',
    tag: 'ACCESORIOS DE AUTOR'
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
class CartState {
  constructor() {
    this.items = this.loadFromStorage(); // { [colorId]: meters }
    this.listeners = [];
  }

  loadFromStorage() {
    try {
      const data = localStorage.getItem('hilatura_caracas_cart');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem('hilatura_caracas_cart', JSON.stringify(this.items));
    } catch (e) {}
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.saveToStorage();
    this.listeners.forEach(cb => cb(this.items));
  }

  add(colorId, meters) {
    meters = Math.max(1, parseInt(meters, 10) || 1);
    this.items[colorId] = (this.items[colorId] || 0) + meters;
    this.notify();
  }

  set(colorId, meters) {
    meters = parseInt(meters, 10);
    if (isNaN(meters) || meters <= 0) {
      delete this.items[colorId];
    } else {
      this.items[colorId] = meters;
    }
    this.notify();
  }

  remove(colorId) {
    delete this.items[colorId];
    this.notify();
  }

  clear() {
    this.items = {};
    this.notify();
  }

  getTotalMeters() {
    return Object.values(this.items).reduce((acc, curr) => acc + curr, 0);
  }

  getTotalUSD() {
    return this.getTotalMeters() * BASE_PRICE_PER_METER;
  }

  getItemCount() {
    return Object.keys(this.items).length;
  }
}

const appCart = new CartState();

// ==========================================================================
// 3. THREE.JS 3D INTERACTIVE SPOOL (HERO SECTION)
// ==========================================================================
let threeScene, threeCamera, threeRenderer, threeSpoolGroup, threeCordMaterial;
let threeControls;
let isAutoRotating = true;
let active3DColor = CORD_COLORS[0]; // Beige by default

function initThreeExperience() {
  const container = document.getElementById('canvas-3d-container');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene
  threeScene = new THREE.Scene();

  // Camera
  threeCamera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  threeCamera.position.set(0, 2.5, 12);

  // Renderer
  threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  threeRenderer.setSize(width, height);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.shadowMap.enabled = true;
  threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(threeRenderer.domElement);

  // OrbitControls
  if (typeof THREE.OrbitControls !== 'undefined') {
    threeControls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
    threeControls.enableDamping = true;
    threeControls.dampingFactor = 0.05;
    threeControls.enableZoom = true;
    threeControls.minDistance = 6;
    threeControls.maxDistance = 18;
    threeControls.maxPolarAngle = Math.PI / 2 + 0.3; // Prevent flipping under ground
  }

  // Lighting - Warm Artisan Loom Studio Atmosphere
  const ambientLight = new THREE.AmbientLight(0xFFF7EC, 0.85);
  threeScene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xFFFFFF, 1.1);
  keyLight.position.set(10, 15, 10);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  threeScene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xD4A373, 0.5);
  fillLight.position.set(-10, 6, -8);
  threeScene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xC86D51, 0.4);
  rimLight.position.set(0, -5, 10);
  threeScene.add(rimLight);

  // Build the Spool 3D Model
  createSpoolMesh();

  // Create HUD Color Swatches
  render3DColorSwatches();

  // Event Listeners for 3D HUD
  setup3DControls();

  // Handle Resize
  window.addEventListener('resize', () => {
    if (!container || !threeCamera || !threeRenderer) return;
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    threeCamera.aspect = newW / newH;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(newW, newH);
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    if (isAutoRotating && threeSpoolGroup) {
      threeSpoolGroup.rotation.y += 0.0075;
    }

    if (threeControls) {
      threeControls.update();
    }

    threeRenderer.render(threeScene, threeCamera);
  }
  animate();
}

/**
 * Generate a procedural paper label texture based on the real imported packaging in Caracas
 * Matches the white paper sleeve from the reference photograph with "ECO-FRIENDLY BRAIDED ROPE 6.0"
 */
function createPaperLabelTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // 1. Off-white textured paper background
  ctx.fillStyle = '#FAF8F5';
  ctx.fillRect(0, 0, 1024, 512);

  // Subtle paper grain/speckles
  ctx.fillStyle = 'rgba(62, 39, 35, 0.025)';
  for (let i = 0; i < 3000; i++) {
    const rx = Math.random() * 1024;
    const ry = Math.random() * 512;
    ctx.fillRect(rx, ry, 1.5, 1.5);
  }

  // 2. Decorative border lines along top and bottom edges
  ctx.strokeStyle = '#2B1B17';
  ctx.lineWidth = 3;
  ctx.strokeRect(8, 8, 1008, 496);

  ctx.strokeStyle = 'rgba(200, 109, 81, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(14, 14, 996, 484);

  // Helper to draw the label artwork on a given horizontal center (front & back)
  function drawLabelSection(centerX) {
    ctx.save();
    ctx.translate(centerX, 256);

    // Circular Logo Emblem (interlaced braid loop from photo)
    ctx.strokeStyle = '#2B1B17';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(0, -125, 42, 0, Math.PI * 2);
    ctx.stroke();

    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, -125, 37, 0, Math.PI * 2);
    ctx.stroke();

    // S-curve braid inside logo
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#C86D51';
    ctx.beginPath();
    ctx.arc(-8, -132, 14, -Math.PI * 0.2, Math.PI * 0.9);
    ctx.arc(8, -118, 14, Math.PI * 0.8, -Math.PI * 0.3, true);
    ctx.stroke();

    // Text: ECO-FRIENDLY
    ctx.fillStyle = '#2B1B17';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '5px';
    ctx.fillText('ECO-FRIENDLY', 0, -52);

    // Main Title: BRAIDED ROPE 6.0
    ctx.font = '800 46px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('BRAIDED ROPE 6.0', 0, 0);

    // Thin separator line
    ctx.strokeStyle = '#C86D51';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-160, 20);
    ctx.lineTo(160, 20);
    ctx.stroke();

    // Subtitle: 100% Cotton with Inner Core
    ctx.fillStyle = '#5D4037';
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('CORDÓN DE ALGODÓN CON ALMA', 0, 50);

    // Badge / Brand
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#2B1B17';
    ctx.fillText('HILATURA CARACAS · CALIDAD DE IMPORTACIÓN', 0, 95);

    // Technical mini-spec box
    ctx.strokeStyle = 'rgba(62, 39, 35, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(-120, 120, 240, 42);
    ctx.font = '600 13px monospace';
    ctx.fillStyle = '#5D4037';
    ctx.fillText('CAL: 6.0mm · NÚCLEO ALTA TENACIDAD', 0, 146);

    ctx.restore();
  }

  // Draw front side (centered at U=0.25 -> X=256)
  drawLabelSection(256);
  // Draw back side (centered at U=0.75 -> X=768)
  drawLabelSection(768);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedural diamond-braid cotton texture (16-carrier weave)
 */
function createBraidedTextureMap() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  const step = 28;
  for (let x = -512; x < 1024; x += step) {
    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 512, 512);
    ctx.stroke();

    ctx.strokeStyle = '#282828';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(x + 6, 0);
    ctx.lineTo(x + 518, 512);
    ctx.stroke();
  }

  for (let x = -512; x < 1024; x += step) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(x + 512, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();

    ctx.strokeStyle = '#202020';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(x + 518, 0);
    ctx.lineTo(x + 6, 512);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(18, 4);
  return texture;
}

/**
 * Generate soft contact shadow texture under the bundle
 */
function createShadowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
  gradient.addColorStop(0, 'rgba(43, 27, 23, 0.45)');
  gradient.addColorStop(0.5, 'rgba(43, 27, 23, 0.18)');
  gradient.addColorStop(1, 'rgba(43, 27, 23, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Assemble the realistic Braided Cord Hank / Bundle (Based on the actual product photo)
 */
function createSpoolMesh() {
  threeSpoolGroup = new THREE.Group();

  // Braided Cotton Material
  const bumpTex = createBraidedTextureMap();
  threeCordMaterial = new THREE.MeshStandardMaterial({
    color: active3DColor.threeColor,
    roughness: 0.88,
    metalness: 0.02,
    bumpMap: bumpTex,
    bumpScale: 0.075
  });

  // 1. Generate Organic Hank Looped Strands (36 interlaced loops)
  const strandCount = 36;
  const cordRadius = 0.165; // Proportional 6.0 mm scale

  for (let i = 0; i < strandCount; i++) {
    // 3 radial layers: inner core, middle body, outer surface
    let layerRadiusY, layerRadiusZ;
    if (i < 8) {
      // Inner core filler
      layerRadiusY = 0.35 + (i % 3) * 0.12;
      layerRadiusZ = 0.25 + (i % 2) * 0.14;
    } else if (i < 22) {
      // Middle ring
      layerRadiusY = 0.65 + ((i * 7) % 5) * 0.06;
      layerRadiusZ = 0.50 + ((i * 3) % 4) * 0.06;
    } else {
      // Outer visible strands
      layerRadiusY = 0.95 + ((i * 11) % 4) * 0.07;
      layerRadiusZ = 0.72 + ((i * 5) % 4) * 0.07;
    }

    const angle = (i / strandCount) * Math.PI * 2 + (i * 0.25);
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const yEnd = layerRadiusY * cosA;
    const zEnd = layerRadiusZ * sinA;

    // Natural length jitter on ends so loops stagger realistically like real cloth
    const leftLen = 3.9 + Math.sin(i * 1.8) * 0.35;
    const rightLen = 3.9 + Math.cos(i * 2.1) * 0.35;

    // Center compression factor (waist pinched by white paper band)
    const pinchY = 0.76;
    const pinchZ = 0.68;

    // 8 points forming a continuous smooth looped curve
    const pts = [
      new THREE.Vector3(-leftLen, yEnd * 1.15, zEnd * 1.15),
      new THREE.Vector3(-2.2, yEnd * 1.02, zEnd * 1.02),
      new THREE.Vector3(0, yEnd * pinchY, zEnd * pinchZ),
      new THREE.Vector3(2.2, yEnd * 1.02, zEnd * 1.02),
      new THREE.Vector3(rightLen, -yEnd * 1.15, -zEnd * 1.15),
      new THREE.Vector3(2.2, -yEnd * 1.02, -zEnd * 1.02),
      new THREE.Vector3(0, -yEnd * pinchY, -zEnd * pinchZ),
      new THREE.Vector3(-2.2, -yEnd * 1.02, -zEnd * 1.02)
    ];

    const curve = new THREE.CatmullRomCurve3(pts, true);
    const tubeGeom = new THREE.TubeGeometry(curve, 52, cordRadius, 9, true);
    const tubeMesh = new THREE.Mesh(tubeGeom, threeCordMaterial);
    tubeMesh.castShadow = true;
    tubeMesh.receiveShadow = true;
    threeSpoolGroup.add(tubeMesh);
  }

  // 2. White Paper Label Sleeve in the Center ("ECO-FRIENDLY BRAIDED ROPE 6.0")
  const labelTex = createPaperLabelTexture();
  const labelMaterial = new THREE.MeshStandardMaterial({
    map: labelTex,
    roughness: 0.72,
    metalness: 0.02,
    side: THREE.DoubleSide
  });

  // Oval sleeve wrapped around center waist
  const labelGeom = new THREE.CylinderGeometry(1.08, 1.08, 2.25, 48, 1, true);
  labelGeom.rotateZ(Math.PI / 2); // Orient horizontally along X
  const labelMesh = new THREE.Mesh(labelGeom, labelMaterial);
  labelMesh.scale.set(1.0, 0.88, 0.75); // Elliptical wrap hugging the rope bundle
  labelMesh.castShadow = true;
  labelMesh.receiveShadow = true;
  threeSpoolGroup.add(labelMesh);

  // Subtle paper edge trim rings at label borders to give physical paper thickness
  const paperTrimMat = new THREE.MeshStandardMaterial({ color: 0xE6E0D4, roughness: 0.8 });
  const trimGeom1 = new THREE.TorusGeometry(1.08, 0.02, 8, 36);
  trimGeom1.rotateY(Math.PI / 2);
  const trim1 = new THREE.Mesh(trimGeom1, paperTrimMat);
  trim1.scale.set(0.75, 0.88, 1.0);
  trim1.position.x = -1.12;
  threeSpoolGroup.add(trim1);

  const trim2 = trim1.clone();
  trim2.position.x = 1.12;
  threeSpoolGroup.add(trim2);

  // 3. Loose Sample Strand Unfurling with Visible White Core ("Con Alma")
  const samplePts = [
    new THREE.Vector3(0.6, 0.15, 0.65),
    new THREE.Vector3(1.6, -0.25, 1.1),
    new THREE.Vector3(2.5, -0.9, 1.6),
    new THREE.Vector3(3.3, -1.6, 2.0)
  ];
  const sampleCurve = new THREE.CatmullRomCurve3(samplePts, false);
  const sampleGeom = new THREE.TubeGeometry(sampleCurve, 32, cordRadius, 10, false);
  const sampleMesh = new THREE.Mesh(sampleGeom, threeCordMaterial);
  sampleMesh.castShadow = true;
  threeSpoolGroup.add(sampleMesh);

  // Exposed White Inner Core ("Alma de poliéster multifilamento")
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xFAFAFA,
    roughness: 0.45,
    metalness: 0.05
  });
  const coreGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.45, 16);
  const coreMesh = new THREE.Mesh(coreGeom, coreMat);
  coreMesh.position.set(3.48, -1.78, 2.18);
  coreMesh.rotation.x = 0.6;
  coreMesh.rotation.z = -0.55;
  threeSpoolGroup.add(coreMesh);

  // 4. Studio Contact Ground Shadow Plane
  const shadowTex = createShadowTexture();
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.7,
    depthWrite: false
  });
  const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(11, 4.5), shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -1.45;
  threeSpoolGroup.add(shadowPlane);

  // Dynamic 3/4 Studio angle for dramatic product presentation
  threeSpoolGroup.rotation.x = 0.18;
  threeSpoolGroup.rotation.y = -0.32;
  threeSpoolGroup.rotation.z = 0.04;
  threeSpoolGroup.position.y = 0.15;

  threeScene.add(threeSpoolGroup);
}

/**
 * Render color picker dots in the 3D HUD
 */
function render3DColorSwatches() {
  const container = document.getElementById('spool-swatches-container');
  if (!container) return;

  container.innerHTML = '';
  CORD_COLORS.forEach((color) => {
    const dot = document.createElement('button');
    dot.className = `spool-color-dot ${color.id === active3DColor.id ? 'active' : ''}`;
    dot.style.backgroundColor = color.hex;
    dot.title = `${color.name} ($0.50/m)`;
    dot.setAttribute('aria-label', `Seleccionar color ${color.name}`);

    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      set3DSpoolColor(color);
    });

    container.appendChild(dot);
  });
}

/**
 * Change the color of the 3D spool cord material
 */
function set3DSpoolColor(color) {
  active3DColor = color;
  if (threeCordMaterial) {
    threeCordMaterial.color.setHex(color.threeColor);
  }

  // Update active dot in HUD
  document.querySelectorAll('.spool-color-dot').forEach((dot, index) => {
    dot.classList.toggle('active', CORD_COLORS[index].id === color.id);
  });

  // Sync with Hero Quick Calculator selector
  const calcSelect = document.getElementById('hero-calc-color');
  if (calcSelect) {
    calcSelect.value = color.id;
    updateHeroCalculator();
  }
}

/**
 * Setup buttons for 3D controls (Pause, Reset)
 */
function setup3DControls() {
  const toggleBtn = document.getElementById('btn-spool-toggle-spin');
  const resetBtn = document.getElementById('btn-spool-reset-view');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isAutoRotating = !isAutoRotating;
      toggleBtn.innerHTML = isAutoRotating 
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
      toggleBtn.title = isAutoRotating ? 'Pausar rotación' : 'Reanudar rotación';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (threeControls && threeCamera && threeSpoolGroup) {
        threeControls.reset();
        threeCamera.position.set(0, 5, 14);
        threeSpoolGroup.rotation.set(0.28, 0, -0.15);
      }
    });
  }
}

// ==========================================================================
// 4. HERO SECTION QUICK CALCULATOR
// ==========================================================================
function initHeroCalculator() {
  const colorSelect = document.getElementById('hero-calc-color');
  const metersInput = document.getElementById('hero-calc-meters');
  const stepMinus = document.getElementById('hero-calc-minus');
  const stepPlus = document.getElementById('hero-calc-plus');
  const addBtn = document.getElementById('hero-calc-add-btn');
  const quickPills = document.querySelectorAll('.hero-quick-pill');

  if (!colorSelect || !metersInput) return;

  // Populate color select options
  colorSelect.innerHTML = '';
  CORD_COLORS.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.name} (${c.tone})`;
    if (c.id === active3DColor.id) opt.selected = true;
    colorSelect.appendChild(opt);
  });

  colorSelect.addEventListener('change', () => {
    const selected = CORD_COLORS.find(c => c.id === colorSelect.value);
    if (selected) {
      set3DSpoolColor(selected);
    }
  });

  metersInput.addEventListener('input', () => {
    if (metersInput.value < 1) metersInput.value = 1;
    updateHeroCalculator();
  });

  if (stepMinus) {
    stepMinus.addEventListener('click', () => {
      let val = parseInt(metersInput.value, 10) || 1;
      metersInput.value = Math.max(1, val - 5);
      updateHeroCalculator();
    });
  }

  if (stepPlus) {
    stepPlus.addEventListener('click', () => {
      let val = parseInt(metersInput.value, 10) || 1;
      metersInput.value = val + 5;
      updateHeroCalculator();
    });
  }

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const addMeters = parseInt(pill.dataset.meters, 10);
      metersInput.value = addMeters;
      updateHeroCalculator();
    });
  });

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const colorId = colorSelect.value;
      const meters = parseInt(metersInput.value, 10) || 1;
      const colorObj = CORD_COLORS.find(c => c.id === colorId);

      appCart.add(colorId, meters);
      showToast(`¡Añadido! ${meters}m de Cordón ${colorObj ? colorObj.name : ''} ($${(meters * BASE_PRICE_PER_METER).toFixed(2)} USD)`);
      openCartDrawer();
    });
  }

  updateHeroCalculator();
}

function updateHeroCalculator() {
  const metersInput = document.getElementById('hero-calc-meters');
  const totalAmount = document.getElementById('hero-calc-total');
  if (!metersInput || !totalAmount) return;

  const meters = parseInt(metersInput.value, 10) || 1;
  const total = meters * BASE_PRICE_PER_METER;
  totalAmount.textContent = `$${total.toFixed(2)} USD`;
}

// ==========================================================================
// 5. PRODUCT CATALOG (11 COLORS) & LIVE CARD PRICING
// ==========================================================================
function renderProductCatalog(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = '';

  const query = searchQuery.trim().toLowerCase();

  const filtered = CORD_COLORS.filter(item => {
    const matchesCategory = (filterCategory === 'all' || item.category === filterCategory);
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.tone.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.uses.some(u => u.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--color-brown-medium);">
        <p style="font-size: 1.1rem; font-weight: 700;">No se encontraron cordones con ese criterio.</p>
        <button id="btn-reset-catalog-filter" class="filter-btn" style="margin-top: 1rem;">Ver todos los 11 colores</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-catalog-filter');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.getElementById('catalog-search-input').value = '';
        document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
        renderProductCatalog('all', '');
      });
    }
    return;
  }

  filtered.forEach(color => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.id = `card-prod-${color.id}`;

    card.innerHTML = `
      <div>
        <div class="product-card-media" style="width: 100%; height: 160px; border-radius: 10px; overflow: hidden; margin-bottom: 0.9rem; background: #f0f0f0;">
          <img src="${color.image}" alt="Cordón ${color.name}" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease;">
        </div>
        <div class="product-card-top">
          <div class="product-swatch-box" style="background-color: ${color.hex};" title="Tono ${color.name}"></div>
          <div class="product-info-head">
            <span class="product-badge-core">Con Alma Reforzada</span>
            <h3 class="product-color-name">${color.name}</h3>
            <span class="product-tone-tag">${color.tone}</span>
          </div>
        </div>

        <p class="product-body-desc">${color.description}</p>

        <div class="product-specs-list">
          <span class="spec-chip">Ø 5-6 mm</span>
          <span class="spec-chip">100% Algodón</span>
          ${color.uses.map(u => `<span class="spec-chip">${u}</span>`).join('')}
        </div>
      </div>

      <div>
        <div class="product-card-pricing">
          <div class="pricing-row-top">
            <span class="unit-price-label">Precio x Metro:</span>
            <span class="unit-price-tag">$0.50 USD</span>
          </div>

          <div class="meter-control-row">
            <button type="button" class="btn-meter-step card-minus" aria-label="Restar 5 metros">-</button>
            <input type="number" class="input-meters-card" value="10" min="1" step="1" aria-label="Metros de cordón ${color.name}">
            <button type="button" class="btn-meter-step card-plus" aria-label="Sumar 5 metros">+</button>
          </div>

          <div class="card-subtotal-display">
            <span class="subtotal-label">Subtotal:</span>
            <span class="subtotal-val card-subtotal-text">$5.00 USD</span>
          </div>
        </div>

        <button type="button" class="btn-add-product-cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span>Agregar al Carrito</span>
        </button>
      </div>
    `;

    // Internal card controls
    const inputMeters = card.querySelector('.input-meters-card');
    const subtotalText = card.querySelector('.card-subtotal-text');
    const btnMinus = card.querySelector('.card-minus');
    const btnPlus = card.querySelector('.card-plus');
    const btnAdd = card.querySelector('.btn-add-product-cart');

    function updateCardPrice() {
      let meters = parseInt(inputMeters.value, 10) || 1;
      if (meters < 1) { meters = 1; inputMeters.value = 1; }
      const subtotal = meters * BASE_PRICE_PER_METER;
      subtotalText.textContent = `$${subtotal.toFixed(2)} USD`;
    }

    inputMeters.addEventListener('input', updateCardPrice);

    btnMinus.addEventListener('click', () => {
      let val = parseInt(inputMeters.value, 10) || 1;
      inputMeters.value = Math.max(1, val - 5);
      updateCardPrice();
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(inputMeters.value, 10) || 1;
      inputMeters.value = val + 5;
      updateCardPrice();
    });

    btnAdd.addEventListener('click', () => {
      const meters = parseInt(inputMeters.value, 10) || 1;
      appCart.add(color.id, meters);
      showToast(`¡Añadido! ${meters}m de Cordón ${color.name} ($${(meters * BASE_PRICE_PER_METER).toFixed(2)} USD)`);
      
      // Pulse animation on button
      btnAdd.style.backgroundColor = 'var(--color-terracotta)';
      setTimeout(() => {
        btnAdd.style.backgroundColor = '';
      }, 350);
    });

    container.appendChild(card);
  });
}

function initCatalogToolbar() {
  const catButtons = document.querySelectorAll('.cat-filter-btn');
  const searchInput = document.getElementById('catalog-search-input');

  let currentCategory = 'all';

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      renderProductCatalog(currentCategory, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProductCatalog(currentCategory, searchInput.value);
    });
  }
}

// ==========================================================================
// 6. POLAROID GALLERY COLLAGE & LIGHTBOX
// ==========================================================================
function renderPolaroidGallery(category = 'all') {
  const container = document.getElementById('polaroid-board');
  if (!container) return;

  container.innerHTML = '';

  const filtered = GALLERY_ITEMS.filter(item => category === 'all' || item.category === category);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'polaroid-item';
    card.id = item.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalle de fotografía: ${item.title}`);

    card.innerHTML = `
      <div class="polaroid-photo-box">
        <img src="${item.image}" alt="${item.title} - Cordón de Algodón Trenzado con Alma" loading="lazy">
        <span class="photo-overlay-badge">${item.tag}</span>
      </div>
      <div class="polaroid-caption-area">
        <span class="polaroid-meta-subtitle">${item.subtitle}</span>
        <h3 class="polaroid-handwritten-title">${item.title}</h3>
        <p class="polaroid-description-text">${item.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });

    container.appendChild(card);
  });
}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPolaroidGallery(btn.dataset.category);
    });
  });
}

function openLightbox(item) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const subtitle = document.getElementById('lightbox-subtitle');
  const desc = document.getElementById('lightbox-desc');
  const actionBtn = document.getElementById('lightbox-order-btn');

  if (!modal || !img || !title) return;

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  subtitle.textContent = item.subtitle;
  desc.textContent = item.desc;

  if (actionBtn) {
    actionBtn.onclick = () => {
      closeLightbox();
      // Smooth scroll to catalog
      const catalogSec = document.getElementById('catalogo');
      if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });
    };
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 7. SLIDE-OVER CART PANEL & WHATSAPP GENERATION
// ==========================================================================
function initCartDrawer() {
  const triggerHeader = document.getElementById('header-cart-btn');
  const triggerMobile = document.getElementById('mobile-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const clearBtn = document.getElementById('clear-cart-btn');
  const whatsappBtn = document.getElementById('whatsapp-order-btn');

  if (triggerHeader) triggerHeader.addEventListener('click', openCartDrawer);
  if (triggerMobile) triggerMobile.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('¿Deseas vaciar tu carrito de cordones?')) {
        appCart.clear();
        showToast('Carrito vaciado con éxito');
      }
    });
  }

  // Intercept WhatsApp checkout to ensure legal consent is granted
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      const termsCheckbox = document.getElementById('cart-terms-checkbox');
      const wrap = document.querySelector('.cart-legal-consent-wrap');
      if (termsCheckbox && !termsCheckbox.checked) {
        e.preventDefault();
        showToast('⚠️ Debes autorizar los Términos y Condiciones para continuar con tu pedido.');
        if (wrap) {
          wrap.classList.add('alert-shake');
          setTimeout(() => wrap.classList.remove('alert-shake'), 450);
        }
      }
    });
  }

  // Subscribe to Cart State Changes
  appCart.subscribe(renderCartView);
  renderCartView(appCart.items);
}

function openCartDrawer() {
  const panel = document.getElementById('cart-slideover-panel');
  const backdrop = document.getElementById('cart-backdrop');
  if (panel) {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
  }
  if (backdrop && window.innerWidth <= 768) {
    // Only show full backdrop on mobile screens, keep catalog accessible on desktop!
    backdrop.classList.add('open');
  }
}

function closeCartDrawer() {
  const panel = document.getElementById('cart-slideover-panel');
  const backdrop = document.getElementById('cart-backdrop');
  if (panel) {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) {
    backdrop.classList.remove('open');
  }
}

/**
 * Render Cart Items, Counters & Build Exact WhatsApp Link
 */
function renderCartView(items) {
  const listContainer = document.getElementById('cart-items-container');
  const headerCount = document.getElementById('cart-badge-count');
  const mobileCount = document.getElementById('mobile-cart-badge-count');
  const totalMetersEl = document.getElementById('cart-summary-meters');
  const subtotalEl = document.getElementById('cart-summary-subtotal');
  const totalUsdEl = document.getElementById('cart-summary-total');
  const whatsappBtn = document.getElementById('whatsapp-order-btn');
  const emptyView = document.getElementById('cart-empty-view');
  const footerEl = document.getElementById('cart-footer-controls');

  const totalMeters = appCart.getTotalMeters();
  const totalUSD = appCart.getTotalUSD();
  const itemCount = appCart.getItemCount();

  // Badges
  if (headerCount) {
    headerCount.textContent = totalMeters > 0 ? `${totalMeters}m` : '0';
    headerCount.classList.add('pulse');
    setTimeout(() => headerCount.classList.remove('pulse'), 400);
  }
  if (mobileCount) {
    mobileCount.textContent = totalMeters > 0 ? `${totalMeters}m` : '0';
  }

  // Summaries
  if (totalMetersEl) totalMetersEl.textContent = `${totalMeters} m`;
  if (subtotalEl) subtotalEl.textContent = `$${totalUSD.toFixed(2)} USD`;
  if (totalUsdEl) totalUsdEl.textContent = `$${totalUSD.toFixed(2)} USD`;

  if (!listContainer) return;

  if (itemCount === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    listContainer.innerHTML = '';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  if (footerEl) footerEl.style.display = 'flex';

  listContainer.innerHTML = '';

  // Generate Items DOM
  Object.entries(items).forEach(([colorId, meters]) => {
    const color = CORD_COLORS.find(c => c.id === colorId);
    if (!color) return;

    const subtotal = meters * BASE_PRICE_PER_METER;

    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item-card';
    itemCard.innerHTML = `
      <div class="cart-item-swatch" style="background-color: ${color.hex};"></div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${color.name}</h4>
        <span class="cart-item-rate">$0.50 / m</span>
        <div class="cart-item-controls">
          <button type="button" class="cart-step-btn btn-cart-dec" title="Restar 5m">-</button>
          <span class="cart-qty-text">${meters}m</span>
          <button type="button" class="cart-step-btn btn-cart-inc" title="Sumar 5m">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-subtotal">$${subtotal.toFixed(2)}</span>
        <button type="button" class="btn-remove-item" title="Eliminar este color" aria-label="Eliminar ${color.name}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `;

    // Increment / Decrement / Remove Listeners
    itemCard.querySelector('.btn-cart-dec').addEventListener('click', () => {
      appCart.set(colorId, meters - 5);
    });

    itemCard.querySelector('.btn-cart-inc').addEventListener('click', () => {
      appCart.set(colorId, meters + 5);
    });

    itemCard.querySelector('.btn-remove-item').addEventListener('click', () => {
      appCart.remove(colorId);
    });

    listContainer.appendChild(itemCard);
  });

  // GENERATE EXACT REQUIRED WHATSAPP MESSAGE
  // "¡Hola! Quiero realizar un pedido de cordones de algodón trenzado:
  // - [Color]: [Metros]m ($[Subtotal])
  // - ...
  // Total a pagar: $[Total USD]"
  let msg = `¡Hola! Quiero realizar un pedido de cordones de algodón trenzado:\n`;
  Object.entries(items).forEach(([colorId, meters]) => {
    const color = CORD_COLORS.find(c => c.id === colorId);
    if (color) {
      const itemSubtotal = (meters * BASE_PRICE_PER_METER).toFixed(2);
      msg += `- ${color.name}: ${meters}m ($${itemSubtotal})\n`;
    }
  });
  msg += `Total a pagar: $${totalUSD.toFixed(2)} USD\n\n`;
  msg += `(Precios referenciales a liquidar a Tasa Oficial BCV del día. Acepto los Términos de Compra, Despacho y Políticas de Hilatura Caracas).`;

  const phone = '584141622157';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  if (whatsappBtn) {
    whatsappBtn.href = whatsappUrl;
  }
}

// ==========================================================================
// 8. LEGAL COMPLIANCE, CONSENT BANNER & MODAL CONTROLLER
// ==========================================================================
function initLegalCompliance() {
  const modal = document.getElementById('legal-modal');
  const closeBtn = document.getElementById('close-legal-btn');
  const agreeBtn = document.getElementById('btn-modal-agree');
  const tabButtons = document.querySelectorAll('.legal-tab-btn');
  const tabPanels = document.querySelectorAll('.legal-tab-panel');
  const banner = document.getElementById('legal-consent-banner');
  const bannerAccept = document.getElementById('btn-banner-accept');
  const bannerOpenTerms = document.getElementById('btn-banner-open-terms');
  const cartOpenTerms = document.getElementById('link-open-terms-cart');
  const footerLinks = document.querySelectorAll('.footer-legal-link');
  const termsCheckbox = document.getElementById('cart-terms-checkbox');

  // 1. Show Consent Banner if not previously accepted
  const isAccepted = localStorage.getItem('hilatura_legal_consent');
  if (!isAccepted && banner) {
    setTimeout(() => {
      banner.classList.add('show');
    }, 1200);
  }

  // 2. Banner Accept Click
  if (bannerAccept) {
    bannerAccept.addEventListener('click', () => {
      localStorage.setItem('hilatura_legal_consent', 'accepted');
      if (banner) banner.classList.remove('show');
      if (termsCheckbox) termsCheckbox.checked = true;
      showToast('✓ Consentimiento y Términos aceptados');
    });
  }

  // 3. Tab Navigation
  function switchTab(targetTabId) {
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === targetTabId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // 4. Open Modal Function
  function openLegalModal(tabId = 'tab-terminos') {
    if (!modal) return;
    switchTab(tabId);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // 5. Close Modal Function
  function closeLegalModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // 6. Connect Open Triggers
  if (bannerOpenTerms) {
    bannerOpenTerms.addEventListener('click', () => openLegalModal('tab-terminos'));
  }

  if (cartOpenTerms) {
    cartOpenTerms.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('tab-terminos');
    });
  }

  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tab = link.dataset.openTab || 'tab-terminos';
      openLegalModal(tab);
    });
  });

  // 7. Connect Close Triggers
  if (closeBtn) closeBtn.addEventListener('click', closeLegalModal);
  if (agreeBtn) {
    agreeBtn.addEventListener('click', () => {
      localStorage.setItem('hilatura_legal_consent', 'accepted');
      if (banner) banner.classList.remove('show');
      if (termsCheckbox) termsCheckbox.checked = true;
      closeLegalModal();
      showToast('✓ Has aceptado los Términos y Condiciones de Hilatura Caracas');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLegalModal();
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeLegalModal();
    }
  });
}

// ==========================================================================
// 9. TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(text, duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--color-gold);"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${text}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}

// ==========================================================================
// 10. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Experience
  initThreeExperience();

  // 2. Initialize Hero Calculator
  initHeroCalculator();

  // 3. Initialize Polaroid Gallery
  renderPolaroidGallery('all');
  initGalleryFilters();

  // 4. Initialize Product Catalog
  renderProductCatalog('all');
  initCatalogToolbar();

  // 5. Initialize Slide-Over Cart
  initCartDrawer();

  // 6. Initialize Legal Compliance, Consent Banner & Modal
  initLegalCompliance();

  // 7. Lightbox Close handlers
  const closeLightBtn = document.getElementById('close-lightbox-btn');
  const lightModal = document.getElementById('lightbox-modal');
  if (closeLightBtn) closeLightBtn.addEventListener('click', closeLightbox);
  if (lightModal) {
    lightModal.addEventListener('click', (e) => {
      if (e.target === lightModal) closeLightbox();
    });
  }

  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeCartDrawer();
    }
  });

  console.log('✓ Hilatura Caracas initialized successfully with legal compliance, 11 colors, 3D spool, and WhatsApp cart integration.');
});
