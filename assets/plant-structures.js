(() => {
  const $ = (s) => document.querySelector(s);
  const topics = [
    {id:'roots',name:'Roots',group:'root',sub:'The plant’s underground anchor',desc:'Roots usually grow below the soil. They anchor the plant, absorb water and dissolved minerals, and can store food in some species.',fn:'A healthy root system keeps the plant stable and supplies water and minerals to the shoot.'},
    {id:'root-hairs',name:'Root hairs',group:'root',sub:'Tiny extensions of root epidermal cells',desc:'Root hairs are microscopic, hair-like extensions near the tips of young roots. Their large combined surface area contacts more soil water.',fn:'They increase the surface area available for absorbing water and mineral ions.'},
    {id:'taproot',name:'Taproot system',group:'root',sub:'One main root with smaller side roots',desc:'A taproot system has a dominant primary root that grows downward, with lateral roots branching from it. It is common in many dicot plants, such as a carrot or bean plant.',fn:'The deep main root anchors the plant and may store food.'},
    {id:'fibrous',name:'Fibrous root system',group:'root',sub:'A network of similarly sized roots',desc:'A fibrous system is made of many thin roots of similar size that spread out from the base of the stem. It is common in grasses and many monocots.',fn:'The wide network absorbs water near the soil surface and helps hold soil in place.'},
    {id:'stem',name:'Stem',group:'shoot',sub:'The plant’s central support and transport axis',desc:'The stem supports leaves, branches, flowers and fruits. Inside it, vascular tissues transport water and minerals upward and sugars to growing or storage regions.',fn:'It holds photosynthetic organs toward the light and connects roots with the rest of the plant.'},
    {id:'branches',name:'Branches',group:'shoot',sub:'Side shoots growing from the main stem',desc:'Branches extend the shoot system and carry additional leaves and flowers. They arise from buds, often near nodes.',fn:'They spread leaves into the light and create more sites for flowers and fruits.'},
    {id:'nodes',name:'Nodes and internodes',group:'shoot',sub:'Junctions and the stem sections between them',desc:'A node is the point on a stem where a leaf or branch attaches. An internode is the length of stem between two neighbouring nodes.',fn:'Nodes are important growth and branching points; internode length affects plant form.'},
    {id:'leaves',name:'Leaves',group:'leaf',sub:'The main photosynthetic organs',desc:'Leaves are specialised organs that capture light and exchange gases with the air. Their shape and arrangement vary with the plant species and habitat.',fn:'They manufacture sugars through photosynthesis and help regulate water loss.'},
    {id:'blade',name:'Leaf blade',group:'leaf',sub:'The broad, flat part of a typical leaf',desc:'The leaf blade, or lamina, is the expanded surface of a leaf. Its thin form helps light reach photosynthetic cells and supports gas exchange.',fn:'A broad surface captures light efficiently for photosynthesis.'},
    {id:'veins',name:'Midrib and veins',group:'leaf',sub:'The leaf’s branching transport network',desc:'The midrib is the prominent central vein in many leaves. Smaller veins branch through the blade and contain vascular tissues.',fn:'Veins bring water and minerals to leaf tissues, carry sugars away, and help support the blade.'},
    {id:'petiole',name:'Petiole',group:'leaf',sub:'The stalk connecting leaf blade to stem',desc:'The petiole joins the leaf blade to the stem. Some leaves have a long petiole; others are attached directly to the stem.',fn:'It positions the blade toward light and provides a route for transport.'},
    {id:'stomata',name:'Stomata',group:'leaf',sub:'Microscopic pores on the leaf surface',desc:'Stomata are tiny openings in the epidermis, usually controlled by a pair of guard cells. They are far too small to see clearly on this whole-plant model.',fn:'They allow carbon dioxide to enter and water vapour and oxygen to move out; guard cells regulate the opening.'},
    {id:'flowers',name:'Flowers',group:'flower',sub:'Reproductive structures of flowering plants',desc:'A flower contains specialised structures involved in sexual reproduction. Depending on the species, it may have sepals, petals, stamens and one or more carpels.',fn:'Flowers enable pollination and, after fertilisation, can develop seeds and often fruit.'},
    {id:'sepals',name:'Sepals',group:'flower',sub:'The protective outer floral whorl',desc:'Sepals are often green, leaf-like structures that surround and protect a developing flower bud before it opens.',fn:'They help protect the developing flower.'},
    {id:'petals',name:'Petals',group:'flower',sub:'Often colourful parts of the flower',desc:'Petals form the corolla. Their colour, shape, scent and markings can help attract pollinators, though some flowers have small or absent petals.',fn:'In many species, they help attract animals that transfer pollen.'},
    {id:'stamen',name:'Stamen',group:'flower',sub:'The pollen-producing male floral organ',desc:'A stamen consists of an anther supported by a filament. A flower may contain several stamens.',fn:'It produces and presents pollen, which carries the male gametophytes.'},
    {id:'anther',name:'Anther',group:'flower',sub:'The pollen-bearing tip of a stamen',desc:'The anther contains pollen sacs in which pollen grains develop. Mature anthers release pollen when ready.',fn:'It produces and releases pollen for transfer during pollination.'},
    {id:'filament',name:'Filament',group:'flower',sub:'The stalk that supports an anther',desc:'The filament is the slender stalk of a stamen. Its length and position help place the anther where pollen can be transferred.',fn:'It positions the anther for effective pollen release.'},
    {id:'pistil',name:'Pistil',group:'flower',sub:'The female reproductive structure',desc:'The pistil is commonly made up of stigma, style and ovary. It may consist of one carpel or fused carpels, depending on the flower.',fn:'It receives pollen and contains ovules that may become seeds after fertilisation.'},
    {id:'stigma',name:'Stigma',group:'flower',sub:'The pollen-receiving surface',desc:'The stigma sits at the top of the pistil and is often sticky or textured, helping pollen grains attach and germinate.',fn:'It receives compatible pollen and supports pollen-tube growth.'},
    {id:'style',name:'Style',group:'flower',sub:'The connection between stigma and ovary',desc:'The style is the stalk-like region between the stigma and the ovary. A pollen tube can grow through its tissues toward an ovule.',fn:'It provides the route for the pollen tube to reach the ovary.'},
    {id:'ovary',name:'Ovary',group:'flower',sub:'The basal region containing ovules',desc:'The ovary encloses one or more ovules. After fertilisation, the ovary often develops into a fruit, while the ovules develop into seeds.',fn:'It protects ovules and commonly develops into the fruit.'},
    {id:'ovules',name:'Ovules',group:'flower',sub:'Structures that can develop into seeds',desc:'Ovules are found inside the ovary and contain the female gametophyte. Following fertilisation, an ovule typically develops into a seed.',fn:'They contain the egg cell and become seeds after fertilisation.'},
    {id:'fruits',name:'Fruits',group:'seed',sub:'Mature ovaries, usually containing seeds',desc:'In flowering plants, a fruit typically develops from the ovary after fertilisation. Fruits vary widely in shape, texture and how they release or disperse seeds.',fn:'They protect seeds and can help disperse them.'},
    {id:'seeds',name:'Seeds',group:'seed',sub:'A young plant with a protective package',desc:'A seed usually contains an embryo, a protective seed coat, and a food supply stored in cotyledons or other tissue.',fn:'Seeds protect the embryo and help the next generation survive until conditions support germination.'},
    {id:'seedcoat',name:'Seed coat',group:'seed',sub:'The outer protective covering of a seed',desc:'The seed coat develops from tissues surrounding the ovule. Its thickness and texture vary among plant species.',fn:'It protects the embryo from physical damage and can reduce water loss.'},
    {id:'cotyledons',name:'Cotyledons',group:'seed',sub:'The embryo’s seed leaves',desc:'Cotyledons are part of the plant embryo. Depending on the species, they may store food or absorb nutrients from surrounding seed tissue.',fn:'They help nourish the young plant during early development.'},
    {id:'embryo',name:'Embryo',group:'seed',sub:'The young plant inside the seed',desc:'The embryo is the developing plant contained within a seed. It includes the embryonic shoot and root regions.',fn:'When conditions are suitable, it resumes growth during germination.'},
    {id:'plumule',name:'Plumule',group:'seed',sub:'The embryonic shoot',desc:'The plumule is the part of the embryo that develops into the shoot system, including the stem and first leaves.',fn:'It grows into the above-ground shoot.'},
    {id:'radicle',name:'Radicle',group:'seed',sub:'The embryonic root',desc:'The radicle is the embryonic root. During germination it is usually the first part of the embryo to emerge from the seed.',fn:'It establishes the young root system for anchorage and absorption.'}
  ];

  const viewer = $('#plant-viewer');
  const loading = $('#loading-state');
  const atlas = $('#atlas-grid');
  let activeTopic = topics[0], activeFilter = 'all', autoRotate = true, speed = 0.15, dragging = false, lastX = 0, lastY = 0, pointerMoved = false, focusRequested = false;
  const meshesByTopic = new Map();
  const pickables = [];
  let scene, camera, renderer, plant, rootSystem, shootSystem, flowerSystem, specimenGroup, raycaster, pointer, animationId, lastTime = 0;
  const mats = {};
  const mat = (key, color, roughness=.62, metalness=0, extra={}) => mats[key] || (mats[key] = new THREE.MeshStandardMaterial({color,roughness,metalness,...extra}));
  const addToTopic = (mesh, id) => { mesh.userData.topicId = id; mesh.userData.baseMaterial = mesh.material; pickables.push(mesh); if(!meshesByTopic.has(id)) meshesByTopic.set(id,[]); meshesByTopic.get(id).push(mesh); return mesh; };
  const mesh = (geometry, material, parent, id, pos) => { const m = new THREE.Mesh(geometry,material); if(pos)m.position.set(...pos); if(id)addToTopic(m,id); parent.add(m); return m; };
  const curveTube = (points, radius, material, parent, id, radial=7) => { const curve = new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))); return mesh(new THREE.TubeGeometry(curve,Math.max(16,points.length*7),radius,radial,false),material,parent,id); };
  const sphere = (parent,id,pos,scale,material,segments=12) => { const m=mesh(new THREE.SphereGeometry(1,segments,Math.max(8,segments-2)),material,parent,id,pos);m.scale.set(...scale);return m; };
  const cylinderBetween = (parent,id,a,b,r1,r2,material,radial=9) => { const A=new THREE.Vector3(...a),B=new THREE.Vector3(...b),d=B.clone().sub(A); const m=mesh(new THREE.CylinderGeometry(r2,r1,d.length(),radial,1),material,parent,id);m.position.copy(A.add(B).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m; };

  function buildPlant(){
    scene = new THREE.Scene(); scene.background = new THREE.Color('#091410'); scene.fog = new THREE.FogExp2('#091410',.027);
    camera = new THREE.PerspectiveCamera(37,viewer.clientWidth/viewer.clientHeight,.1,100); camera.position.set(8.5,5.2,12.5); camera.lookAt(0,2.9,0);
    renderer = new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'}); renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)); renderer.setSize(viewer.clientWidth,viewer.clientHeight); renderer.outputEncoding=THREE.sRGBEncoding; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.2; viewer.insertBefore(renderer.domElement, viewer.querySelector('.scene-wash'));
    scene.add(new THREE.HemisphereLight(0xc7f3ce,0x18291d,1.35)); const key=new THREE.DirectionalLight(0xd5ffd1,2.5);key.position.set(5,10,7);scene.add(key);const rim=new THREE.DirectionalLight(0x72d9a6,1.5);rim.position.set(-6,5,-5);scene.add(rim);const flowerLight=new THREE.PointLight(0xf5c4c6,1.2,10);flowerLight.position.set(0,6,2);scene.add(flowerLight);
    plant = new THREE.Group(); scene.add(plant); rootSystem=new THREE.Group();shootSystem=new THREE.Group();flowerSystem=new THREE.Group();specimenGroup=new THREE.Group();plant.add(rootSystem,shootSystem,flowerSystem,specimenGroup);
    const bark=mat('bark','#7b6744'), barkLight=mat('barkLight','#a28a5c'), rootMat=mat('root','#b69a6b'), rootHairMat=mat('rootHair','#d4c69a'), leafMat=mat('leaf','#3c985e',.48), leafLight=mat('leafLight','#63bd70',.43), veinMat=mat('vein','#b1d78a',.5), petalMat=mat('petal','#f2a4b0',.38,0,{side:THREE.DoubleSide}), petalLight=mat('petalLight','#ffcad0',.34,0,{side:THREE.DoubleSide}), sepalMat=mat('sepal','#438d55'), antherMat=mat('anther','#f4c75f',.4), filamentMat=mat('filament','#e7d6a0'), pistilMat=mat('pistil','#e9bd73'), ovuleMat=mat('ovule','#f5df9d'), fruitMat=mat('fruit','#cf8054',.38), seedMat=mat('seed','#8f6241'), shellMat=mat('shell','#d7b16f');
    // Soil disc and concentric scientific scan rings.
    const soil=mesh(new THREE.CylinderGeometry(3.5,3.65,.18,72),mat('soil','#18261b',.95),plant,null,[0,-.13,0]);soil.receiveShadow=true;
    for(let r=1.15;r<3.4;r+=.48){const ring=mesh(new THREE.TorusGeometry(r,.008,5,96),new THREE.MeshBasicMaterial({color:0x8db28a,transparent:true,opacity:.15}),plant,null,[0,-.025,0]);ring.rotation.x=Math.PI/2;}
    const grid=new THREE.GridHelper(18,36,0x385b43,0x203a2a);grid.position.y=-.235;grid.material.transparent=true;grid.material.opacity=.19;plant.add(grid);
    // Roots: a single dominant taproot and branching root network.
    curveTube([[0,.05,0],[.02,-.45,.03],[-.05,-1.05,.02],[.04,-1.72,-.03],[-.1,-2.2,0]],.105,rootMat,rootSystem,'taproot',10);
    const sideRoots=[[[0,-.38,0],[-.42,-.62,.08],[-.9,-.88,.12],[-1.28,-1.1,.25]],[[0,-.62,0],[.42,-.86,.08],[.85,-1.08,.18],[1.35,-1.18,.22]],[[0,-.9,0],[-.3,-1.2,-.12],[-.6,-1.5,-.2],[-.92,-1.68,-.28]],[[0,-1.15,0],[.28,-1.42,-.12],[.55,-1.72,-.22],[.7,-1.94,-.32]],[[0,-.48,0],[.05,-.7,.45],[.1,-.95,.82],[.22,-1.15,1.2]],[[0,-.52,0],[-.1,-.72,-.45],[-.25,-1,-.8],[-.3,-1.25,-1.15]]];
    sideRoots.forEach((pts,i)=>curveTube(pts,.045,rootMat,rootSystem,i<3?'taproot':'fibrous',7));
    // Fibrous root spray: many fine curving roots around the collar.
    for(let i=0;i<18;i++){const a=i*Math.PI*2/18;const endR=1.2+(i%4)*.12;const pts=[[.03,0,0],[Math.cos(a)*.35,-.28,Math.sin(a)*.35],[Math.cos(a+.16)*endR*.72,-.75-(i%3)*.08,Math.sin(a+.16)*endR*.72],[Math.cos(a+.27)*endR,-1.05-(i%4)*.08,Math.sin(a+.27)*endR]];curveTube(pts,.018,rootMat,rootSystem,'fibrous',5);}
    // Root hairs are fine pale side filaments along selected roots.
    for(let i=0;i<74;i++){const a=i*2.399;const t=.18+(i%12)/15;const x=Math.cos(a)*t*.85,z=Math.sin(a)*t*.85,y=-.35-(i%10)*.105;curveTube([[x,y,z],[x+Math.cos(a)*.10,y-.035,z+Math.sin(a)*.1],[x+Math.cos(a)*.16,y-.08,z+Math.sin(a)*.16]],.007,rootHairMat,rootSystem,'root-hairs',4);}
    // Main stem and branches.
    curveTube([[0,0,0],[.02,.8,0],[-.03,1.7,.02],[.04,2.6,0],[0,3.55,0],[.08,4.45,-.02],[.04,5.2,0]],.115,bark,shootSystem,'stem',10);
    const branchDefs=[{p:[-.02,1.35,0],q:[-1.1,2.15,.05],id:'branches'},{p:[.01,2.25,0],q:[1.18,2.95,.02],id:'branches'},{p:[.03,3.15,0],q:[-1.05,3.85,-.05],id:'branches'},{p:[.02,3.9,0],q:[.94,4.52,-.08],id:'branches'}];
    branchDefs.forEach((b,i)=>{curveTube([b.p,[(b.p[0]+b.q[0])*.45,b.p[1]+.2,(b.p[2]+b.q[2])*.5],b.q],.055,barkLight,shootSystem,'branches',8);const n=sphere(shootSystem,'nodes',b.p,[.14,.12,.14],barkLight,10);});
    [0.72,1.35,2.25,3.15,3.9,4.45].forEach((y,i)=>{const ring=mesh(new THREE.TorusGeometry(.118,.018,6,20),barkLight,shootSystem,'nodes',[i%2===0?0.015:0.005,y,0]);ring.rotation.x=Math.PI/2;});
    // Small internode collar cues between nodes.
    [1.0,1.78,2.7,3.55,4.18].forEach((y,i)=>{const m=sphere(shootSystem,'nodes',[i%2?-.01:.02,y,0],[.085,.085,.085],bark,8);});
    // Leaves: bespoke curved leaf surfaces with midrib and veins.
    function makeLeaf(origin,angle,length,id='blade',tone=0){const g=new THREE.Group();g.position.set(...origin);g.rotation.z=angle;shootSystem.add(g);const verts=[],idx=[],uv=[];const N=24;for(let i=0;i<=N;i++){const t=i/N;const w=Math.sin(Math.PI*t)*length*.28;const x=t*length;for(let s of [-1,1]){verts.push(x,w*s,.035*Math.sin(Math.PI*t));uv.push(t,(s+1)/2);}}for(let i=0;i<N;i++){const a=i*2,b=a+1,c=a+2,d=a+3;idx.push(a,c,b,b,c,d);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();const lm=mesh(geo,tone?leafLight:leafMat,g,id);lm.material.side=THREE.DoubleSide;
      curveTube(Array.from({length:17},(_,i)=>{const t=i/16;return [length*t,0,.05+Math.sin(Math.PI*t)*.025]}),.012,veinMat,g,'veins',5);
      for(let i=3;i<14;i+=2){const t=i/16;const w=Math.sin(Math.PI*t)*length*.26;curveTube([[length*t,0,.052],[length*(t+.055),w*.52,.055],[Math.min(length,length*(t+.12)),w,.05]],.005,veinMat,g,'veins',4);curveTube([[length*t,0,.052],[length*(t+.055),-w*.52,.055],[Math.min(length,length*(t+.12)),-w,.05]],.005,veinMat,g,'veins',4);}
      // Petiole is distinct and extends from the node into the blade base.
      curveTube([[-.34,0,0],[-.16,0,.015],[0,0,.035]],.035,barkLight,g,'petiole',6);
      // Stomata visual cues: visible stylised dots, not to scale.
      for(let i=0;i<9;i++){const t=.2+i*.075;const w=Math.sin(Math.PI*t)*length*.18;const st=sphere(g,'stomata',[t*length,w,.07],[.025,.012,.012],mat('stoma','#c7e7a1',.35),6);}
      return g;}
    makeLeaf([-.04,1.35,.02],2.62,1.2,'blade');makeLeaf([.02,2.25,.02],.42,1.25,'blade',1);makeLeaf([.02,3.15,-.04],2.78,1.22,'blade',1);makeLeaf([.02,3.9,-.06],.48,1.05,'blade');makeLeaf([-.02,1.95,.03],-2.72,.8,'blade',1);makeLeaf([.02,2.85,.02],-.38,.82,'blade');
    // Branch and stem labels also respond to direct clicks.
    // Flower: open bloom at top with distinct selectable whorls and reproductive parts.
    const bloom=new THREE.Group();bloom.position.set(.04,5.22,0);flowerSystem.add(bloom);
    curveTube([[.04,4.7,0],[.04,5.05,0],[.04,5.24,0]],.07,sepalMat,flowerSystem,'flowers',8);
    // sepals: green tapered leaves beneath petals
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const s=sphere(bloom,'sepals',[Math.cos(a)*.23,-.12,Math.sin(a)*.23],[.16,.07,.32],sepalMat,10);s.rotation.y=-a;s.rotation.z=.38;}
    // petals radiate in multiple overlapping rings, with gentle curl.
    for(let i=0;i<9;i++){const a=i*Math.PI*2/9;const p=sphere(bloom,'petals',[Math.cos(a)*.42,.02,Math.sin(a)*.42],[.31,.12,.48],i%3===0?petalLight:petalMat,14);p.rotation.y=-a;p.rotation.z=Math.cos(a)*.16;p.rotation.x=Math.sin(a)*.15;}
    for(let i=0;i<7;i++){const a=i*Math.PI*2/7+.22;const p=sphere(bloom,'petals',[Math.cos(a)*.23,.11,Math.sin(a)*.23],[.25,.11,.36],petalLight,12);p.rotation.y=-a;p.rotation.z=.18;}
    // pistil / carpel centre
    sphere(bloom,'ovary',[0,-.04,0],[.17,.19,.17],pistilMat,14);
    cylinderBetween(bloom,'style',[0,.02,0],[0,.49,0],.065,.045,filamentMat,9);
    sphere(bloom,'stigma',[0,.55,0],[.13,.09,.13],pistilMat,12);
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const o=sphere(bloom,'ovules',[Math.cos(a)*.09,-.08,Math.sin(a)*.09],[.045,.07,.045],ovuleMat,8);}
    // stamens around the central pistil, each with a gold anther
    for(let i=0;i<7;i++){const a=i*Math.PI*2/7+.2,x=Math.cos(a)*.24,z=Math.sin(a)*.24;curveTube([[x*.7,.02,z*.7],[x,.28,z],[x*1.18,.56,z*1.18]],.022,filamentMat,bloom,'filament',5);sphere(bloom,'anther',[x*1.18,.59,z*1.18],[.075,.105,.07],antherMat,10);}
    // Distinct fruit and seed specimens arranged to the right of the stem at soil level.
    const fruit=sphere(specimenGroup,'fruits',[1.55,.2,.45],[.43,.5,.4],fruitMat,20);fruit.rotation.z=-.22;
    curveTube([[1.55,.64,.45],[1.58,.8,.43],[1.66,.85,.4]],.035,sepalMat,specimenGroup,'fruits',6);
    // Cutaway seed displayed as a small study specimen beside the fruit.
    const seed=sphere(specimenGroup,'seeds',[2.18,.24,.45],[.34,.22,.22],shellMat,18);seed.rotation.z=.35;
    const cut=sphere(specimenGroup,'seedcoat',[2.18,.24,.45],[.31,.2,.205],mat('seedCut','#f0d9a0'),16);cut.scale.x=.76;cut.position.x+=.015;
    sphere(specimenGroup,'cotyledons',[2.2,.25,.45],[.19,.125,.16],mat('cotyledon','#e7b85d'),14);
    curveTube([[2.13,.24,.47],[2.18,.3,.47],[2.27,.36,.47]],.025,mat('embryoMat','#9a5e3d'),specimenGroup,'embryo',6);
    sphere(specimenGroup,'plumule',[2.27,.36,.47],[.05,.06,.05],mat('plumuleMat','#6e9853'),8);
    curveTube([[2.15,.23,.47],[2.12,.15,.47],[2.09,.1,.47]],.022,mat('radicleMat','#b88954'),specimenGroup,'radicle',5);
    // Decorative atmospheric motes
    const moteGeo=new THREE.BufferGeometry(), moteCount=180, motePositions=new Float32Array(moteCount*3);for(let i=0;i<moteCount;i++){const r=2.5+Math.random()*5,a=Math.random()*Math.PI*2;motePositions[i*3]=Math.cos(a)*r;motePositions[i*3+1]=Math.random()*7-1.5;motePositions[i*3+2]=Math.sin(a)*r;}moteGeo.setAttribute('position',new THREE.BufferAttribute(motePositions,3));const motes=new THREE.Points(moteGeo,new THREE.PointsMaterial({color:0x9ccf8c,size:.025,transparent:true,opacity:.5}));scene.add(motes);scene.userData.motes=motes;
    raycaster=new THREE.Raycaster();pointer=new THREE.Vector2();window.addEventListener('resize',resize);
    renderer.domElement.addEventListener('pointerdown',onDown);renderer.domElement.addEventListener('pointermove',onMove);renderer.domElement.addEventListener('pointerup',onUp);renderer.domElement.addEventListener('pointercancel',onUp);renderer.domElement.addEventListener('wheel',onWheel,{passive:false});renderer.domElement.addEventListener('click',onClick);
    loading.style.display='none';renderLoop(0);selectTopic('roots');
  }
  function resize(){if(!renderer)return;const w=viewer.clientWidth,h=viewer.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}
  function onDown(e){dragging=true;pointerMoved=false;lastX=e.clientX;lastY=e.clientY;viewer.setPointerCapture?.(e.pointerId);}
  function onMove(e){if(!dragging)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;if(Math.abs(dx)+Math.abs(dy)>2)pointerMoved=true;plant.rotation.y+=dx*.006;plant.rotation.x=Math.max(-.15,Math.min(.15,plant.rotation.x+dy*.001));lastX=e.clientX;lastY=e.clientY;}
  function onUp(){dragging=false;}
  function onWheel(e){e.preventDefault();const dist=camera.position.distanceTo(new THREE.Vector3(0,2.6,0));const next=Math.max(7,Math.min(20,dist+e.deltaY*.008));const dir=camera.position.clone().sub(new THREE.Vector3(0,2.6,0)).normalize();camera.position.copy(new THREE.Vector3(0,2.6,0).add(dir.multiplyScalar(next)));camera.lookAt(0,2.6,0);}
  function onClick(e){if(pointerMoved)return;const rect=renderer.domElement.getBoundingClientRect();pointer.x=((e.clientX-rect.left)/rect.width)*2-1;pointer.y=-((e.clientY-rect.top)/rect.height)*2+1;raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(pickables,false);if(hits.length){const id=hits[0].object.userData.topicId;const t=topics.find(x=>x.id===id);if(t)selectTopic(id);}}
  function renderLoop(t){animationId=requestAnimationFrame(renderLoop);const dt=Math.min(.05,(t-lastTime)/1000||0);lastTime=t;if(autoRotate&&!dragging&&plant)plant.rotation.y+=dt*speed*.35;if(scene?.userData.motes)scene.userData.motes.rotation.y+=dt*.008;renderer.render(scene,camera);}
  const topicAliases={roots:['taproot','fibrous','root-hairs'],leaves:['blade','veins','petiole','stomata'],flowers:['sepals','petals','anther','filament','stigma','style','ovary','ovules'],stamen:['anther','filament'],pistil:['stigma','style','ovary','ovules'],embryo:['embryo','plumule','radicle']};
  function relatedMeshes(){const ids=topicAliases[activeTopic.id]||[activeTopic.id];return [...new Set(ids.flatMap(id=>meshesByTopic.get(id)||[]))];}
  function focusPart(){if(!plant)return;const arr=relatedMeshes();if(!arr.length)return;const box=new THREE.Box3();arr.forEach(o=>box.expandByObject(o));if(box.isEmpty())return;const center=box.getCenter(new THREE.Vector3());const local=center.clone();plant.localToWorld(local);const target=new THREE.Vector3(local.x,local.y,local.z);const offset=camera.position.clone().sub(new THREE.Vector3(0,2.6,0)).normalize().multiplyScalar(7.5);camera.position.copy(target.clone().add(offset));camera.lookAt(target);}
  function selectTopic(id){const t=topics.find(x=>x.id===id);if(!t)return;activeTopic=t;pickables.forEach(o=>{if(o.userData.baseMaterial)o.material=o.userData.baseMaterial;});relatedMeshes().forEach(o=>{if(o.userData.baseMaterial){const glow=o.userData.baseMaterial.clone();if(glow.emissive){glow.emissive.set('#9bdc65');glow.emissiveIntensity=.52;}o.material=glow;}});$('#part-number').innerHTML=String(topics.indexOf(t)+1).padStart(2,'0')+'<span>/30</span>';$('#part-title').textContent=t.name;$('#part-subtitle').textContent=t.sub;$('#part-description').textContent=t.desc;$('#part-function').textContent=t.fn;$('#selected-tag strong').textContent=t.name;document.querySelectorAll('.atlas-card').forEach(c=>c.classList.toggle('selected',c.dataset.id===id));if(focusRequested)focusPart();}
  function renderAtlas(){atlas.innerHTML='';topics.forEach((t,i)=>{const b=document.createElement('button');b.type='button';b.className='atlas-card';b.dataset.id=t.id;b.dataset.group=t.group;b.innerHTML=`<span class="card-index">${String(i+1).padStart(2,'0')} / 30</span><span class="card-name">${t.name}</span><span class="card-category">${t.group==='root'?'ROOT SYSTEM':t.group==='shoot'?'SHOOT SYSTEM':t.group==='leaf'?'LEAF STRUCTURE':t.group==='flower'?'FLOWER': 'FRUIT & SEED'}</span><span class="card-arrow">↗</span>`;b.addEventListener('click',()=>selectTopic(t.id));atlas.appendChild(b);});}
  function filterAtlas(group){activeFilter=group;document.querySelectorAll('.atlas-filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===group));document.querySelectorAll('.atlas-card').forEach(c=>c.hidden=group!=='all'&&c.dataset.group!==group);}
  $('#auto-rotate').addEventListener('click',()=>{autoRotate=!autoRotate;const b=$('#auto-rotate');b.classList.toggle('active',autoRotate);b.setAttribute('aria-pressed',String(autoRotate));b.innerHTML=autoRotate?'<span>Ⅱ</span> Auto rotate':'<span>▶</span> Auto rotate';});
  $('#speed-down').addEventListener('click',()=>{speed=Math.max(0,speed-.05);$('#speed-value').textContent=speed.toFixed(2)+'×';if(speed===0){autoRotate=false;$('#auto-rotate').classList.remove('active');$('#auto-rotate').innerHTML='<span>▶</span> Auto rotate';}});
  $('#speed-up').addEventListener('click',()=>{speed=Math.min(.5,speed+.05);if(speed===0)speed=.05;$('#speed-value').textContent=speed.toFixed(2)+'×';});
  $('#reset-view').addEventListener('click',()=>{if(!plant)return;plant.rotation.set(0,0,0);camera.position.set(8.5,5.2,12.5);camera.lookAt(0,2.9,0);focusRequested=false;$('#focus-toggle').classList.remove('active');});
  $('#focus-toggle').addEventListener('click',()=>{focusRequested=!focusRequested;$('#focus-toggle').classList.toggle('active',focusRequested);if(focusRequested)focusPart();else{camera.position.set(8.5,5.2,12.5);camera.lookAt(0,2.9,0);}});
  document.querySelectorAll('.atlas-filter').forEach(b=>b.addEventListener('click',()=>filterAtlas(b.dataset.filter)));
  renderAtlas();
  if(window.THREE){try{buildPlant();}catch(err){console.error(err);loading.innerHTML='<span>THE SPECIMEN COULD NOT LOAD</span><small style="letter-spacing:0">Check your connection and refresh the page.</small>';}}else{loading.innerHTML='<span>3D ENGINE UNAVAILABLE</span><small style="letter-spacing:0">Connect to the internet and refresh to load the 3D library.</small>';}
})();
