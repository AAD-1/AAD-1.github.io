(function() {
  'use strict';

  const PROMPT_LIBRARY = [
    `A brown horse is trotting along a dirt path leading towards a small village surrounded by rolling hills and lush green fields. The horse has a determined look, with its ears pricked forward and its tail swishing behind. It carries a large bundle of hay tied to its side with a rope. In the background, there are glimpses of quaint houses and smoke rising from chimneys. The sun is casting a warm glow over the landscape. The horse moves gracefully, its hooves kicking up small clouds of dust. Mid-shot, focusing on the horse as it approaches the village.`,
    `A child, approximately 8 years old, sits at a desk in front of a computer, actively engaged in programming. The child wears casual clothes and has an expression of concentration and determination. They type on the keyboard, use a mouse, and occasionally glance at the screen. The room has a modern setup with posters of science and technology on the walls. The background includes bookshelves filled with books and educational toys. The video should capture the child's hands moving smoothly over the keyboard and mouse, interspersed with close-ups of the code on the screen. Medium shot focusing on the child and their interaction with the computer.`,
    `A close-up shot of a bottle of wine on a wooden table. Slowly, the camera pans to the right, revealing a glass being filled with the wine from the bottle. The bottle has a classic Bordeaux shape with a dark label, and the wine pours smoothly into the clear glass, creating gentle ripples as it fills up. The lighting highlights the rich color of the wine, casting subtle reflections on the glass surface. The scene is static, focusing on the pouring process and the interaction between the bottle and the glass.`,
    `A cozy wooden cabin interior with a warm, crackling fireplace at the center. The room is dimly lit, with soft ambient lighting casting gentle shadows. In front of the fireplace, a fluffy cat is sound asleep on a woven rug, its fur blending into the rustic colors of the cabin. The walls are adorned with wooden panels, and there are logs stacked near the fireplace. The camera captures a medium shot of the fireplace area, focusing on the serene atmosphere and the peaceful sleeping cat. The scene is static, emphasizing the tranquil environment.`,
    `A cybernetic terminator in a corporate office environment providing IT support. The terminator has a sleek, metallic body with visible mechanical joints and a human-like face. It wears a casual business outfit, including a grey t-shirt and jeans. The terminator is sitting at a desk, leaning forward, with one hand gesturing towards a computer screen and the other holding a mouse. The room has modern office furniture and equipment, including monitors, keyboards, and printed documents scattered on the desk. The background shows coworkers working at their desks, adding to the realistic office atmosphere. Medium shot focusing on the terminator and the interaction with the computer.`,
    `A dramatic and epic scene depicting three colossal ancient giants battling a massive dragon in a dense, primeval forest. The giants, towering over the trees, are adorned with intricate carvings and armor made from ancient metals, giving them a fearsome and majestic appearance. One giant wields a massive club, another uses a sword, and the third employs a shield. The dragon, with shimmering scales and leathery wings, breathes fire and emits a deafening roar as it attempts to fend off the giants. The forest around them is engulfed in chaos, with trees being uprooted and flames spreading across the ground. The scene is captured in a wide shot, emphasizing the scale and intensity of the battle.`,
    `A dramatic animated battle scene between a hero named BootsMan and a villain made entirely of ink. BootsMan, clad in a sleek black suit with vibrant orange boots and a determined expression, fights fiercely against the ink villain. The villain, fluid and shapeless, moves sinuously, blending and reforming into various menacing shapes. The background is a dark urban alleyway at night, with flickering streetlights casting shadows. The scene emphasizes intense action and dynamic camera movements, capturing the clash between solid heroism and formless darkness.`,
    `A dramatic illustration of a catastrophic asteroid impact on Earth, showing the massive asteroid hurtling towards the planet's surface. The asteroid is depicted with jagged edges and a fiery trail, surrounded by smoke and debris. Upon impact, there is an explosion of dust and rock, creating a massive fireball and shockwave. In the aftermath, the landscape is devastated, with buildings collapsed, trees uprooted, and a vast crater formed. The sky is darkened by dust clouds and smoke. The scene should convey a sense of chaos and destruction, with a focus on the immediate effects of the impact.`,
    `A dramatic royal court scene in a medieval setting where a stern king stands up from his throne in a fit of anger. The king, dressed in lavish gold and crimson robes adorned with jewels, has a fierce expression with furrowed brows and clenched fists. His body language conveys intense emotion as he towers over the assembled nobles and advisors, who look up at him with a mix of fear and concern. The scene is set in a grand hall with detailed tapestries and chandeliers hanging from the ceiling. The lighting is dim, casting shadows that enhance the tense atmosphere. Static shot, focusing on the king's reaction.`,
    `A festive Christmas atmosphere in a Guatemalan town, where snow gently falls from the sky. The scene features traditional Guatemalan houses adorned with colorful lights and decorations. People are bundled up warmly, walking through the streets, some carrying bags of gifts. Children are playing in the snow, making snowballs and leaving footprints behind. The air is filled with the sounds of holiday music and laughter. The background showcases vibrant Guatemalan architecture and lush greenery covered in a thin layer of snow. The overall scene is warm and inviting, capturing the unique blend of Christmas and tropical charm. Wide shot, static scene.`,
    `A Freightliner semi-truck driving through the bustling streets of Chicago. The truck is painted in a sleek, modern white color with the company logo on both sides. The cityscape of Chicago provides a dynamic backdrop with skyscrapers towering in the distance and smaller buildings lining the road. The truck navigates through traffic, passing by pedestrians and other vehicles. The camera follows the truck from a mid-shot perspective, capturing the movement and interaction with the urban environment. No camera movement, just a smooth, static scene emphasizing the truck's journey through the city.`,
    `A futuristic neon cityscape at night, featuring towering skyscrapers with glowing neon signs and holographic advertisements. In the foreground, a cyborg with sleek metallic limbs and glowing red eyes walks confidently. The cyborg's human-like face shows determination. The environment is bustling with other cyborgs and humans moving about. The scene includes flying vehicles and elevated walkways illuminated by vibrant neon lights. The camera starts with a wide shot and then zooms in on the cyborg as they navigate through the crowded streets. Close-up shots highlight the intricate details of the cyborg's mechanical enhancements.`,
    `A grand, ancient Egyptian pyramid stands tall and majestic under the golden glow of the sunset. In the background, an ancient hero, adorned in ornate armor and wielding a gleaming sword, stands with a noble and determined posture. His armor is detailed with intricate hieroglyphics and gold accents, reflecting the fading sunlight. The hero's face is partially obscured by a helmet with a feathered crest, giving him an air of mystery and power. The pyramid's shadow stretches across the sandy desert, adding depth and drama to the scene. The background shows the vast expanse of the desert, dotted with smaller pyramids and sand dunes. Wide shot, static scene, capturing the grandeur of the ancient setting.`,
    `A hyper-realistic depiction of a young woman running through a bustling steampunk city. The girl has sleek, flowing hair and expressive, determined eyes. She wears a stylish, form-fitting outfit adorned with intricate gears and metallic accents, complementing her steampunk aesthetic. The cityscape is detailed, featuring towering structures with clockwork mechanisms, flying airships, and various mechanical contraptions. The environment is filled with steam and bustling crowds, adding to the dynamic atmosphere. The scene captures her in motion, with a cinematic camera angle that follows her as she runs, emphasizing her speed and determination. The setting is in 4K resolution, showcasing every detail in vivid clarity. Wide shot, tracking camera following the girl as she runs.`,
    `A lively scene featuring a brown and white dog energetically chasing after a sleek black cat through a grassy backyard. The dog is running with its tongue out, tail wagging, and ears perked up, while the cat is sprinting swiftly, occasionally glancing over its shoulder with alert eyes. Both animals exhibit natural, fluid motions as they navigate through the greenery. The background includes a wooden fence and a few scattered bushes. The camera maintains a medium shot to capture the full action, keeping the focus on the chase.`,
    `A magical pair of gold roller skates glowing softly under a moonlit night sky. The skates have intricate designs of swirling patterns and tiny sparkling gems embedded all over them. A young, adventurous girl with curly brown hair, wearing a vibrant red outfit, stands next to the skates, looking at them with excitement and wonder. She reaches down to touch the skates, causing them to emit a bright, golden light. The background is a serene, suburban street with houses and trees casting long shadows. Medium close-up shot focusing on the skates and the girl's hand reaching towards them.`,
    `A majestic old oak tree stands tall and strong in a fierce storm, its branches swaying wildly in the gusty winds. The tree's bark is rugged and textured, with deep grooves and patches of moss clinging to its trunk. Leaves rustle loudly as they dance around the tree, some breaking free and swirling away in the wind. Dark clouds loom overhead, casting dramatic shadows across the ground. The sky flashes with lightning, illuminating the powerful storm. The scene is captured from a mid-shot perspective, emphasizing the tree's resilience against the storm.`,
    `A man in a sharp blue suit stands confidently inside a soundproof recording studio booth, microphone in hand, his posture upright and his face illuminated with focused determination as he sings passionately. The studio is modern with large glass panels and professional recording equipment. The lighting is bright, highlighting the man's expressive face and animated gestures as he performs. Close-up view, emphasizing the man's facial expressions and the intimate connection with the audience through the camera lens.`,
    `A man in an advanced astronaut suit, with a sword strapped to his back, walks confidently across the lunar surface. His boots leave distinct footprints in the soft, powdery regolith. The man's helmet visor reflects the vast, star-studded galaxy beyond the moon's horizon. The scene is bathed in the soft, desaturated light typical of the moon's environment, creating a serene yet awe-inspiring atmosphere. Wide shot, capturing the expansive lunar landscape and the infinite expanse of stars behind him.`,
    `A medieval fantasy scene featuring large, intricate mechanical automatons inspired by transformers. These automatons are made of iron and wood, adorned with gears and armor, standing tall amidst a bustling medieval village square. They have human-like features with exaggerated proportions, such as oversized heads and limbs. The automatons are engaged in various tasks, such as repairing buildings and interacting with villagers. The background showcases cobblestone streets, wooden houses, and a towering castle in the distance. The scene has a warm, golden hue during sunset, capturing the essence of a quaint medieval town. Medium shot, static view.`,
    `A Minecraft Creeper running through a dense, futuristic forest in a Cyberpunk style. The Creeper is depicted with metallic, glowing green skin and cybernetic enhancements, including LED lights and circuit patterns. It moves swiftly with a menacing posture, limbs pumping as it runs. The forest is filled with neon-lit trees and holographic flora, creating a vibrant yet eerie atmosphere. The background showcases towering skyscrapers and glowing billboards, adding to the futuristic ambiance. The scene starts close to the Creeper and gradually zooms out to reveal the expansive, cyberpunk environment. Wide shot, capturing the Creeper in motion against the backdrop of the futuristic forest.`,
    `A misty, fog-covered sea with waves gently rolling. In the center of the frame, a tattered, abandoned ship drifts eerily, its sails torn and flapping listlessly in the wind. The ship's wooden planks are weathered and gray, with parts of the hull partially submerged. Seagulls circle overhead, their silhouettes visible against the dimly lit sky. The scene is set under a gray, overcast sky with sparse sunlight filtering through the clouds, casting a somber, melancholic mood. Wide shot, static scene.`,
    `A panoramic view of the city of Homestead at night, where the entire town is decorated with vibrant Christmas lights. The houses, streets, and public buildings are illuminated with strings of twinkling lights, creating a festive atmosphere. Snowflakes gently fall in the background, adding to the winter wonderland feel. The lights twinkle and shine brightly, casting a warm glow over the entire cityscape. Wide shot, capturing the full extent of the city's festive decoration.`,
    `A realistic depiction of a red Labrador dog leaping gracefully through tall, vibrant green grass. The wind tousles the dog's fur as it soars through the air, showcasing its powerful hind legs and sleek body. In the background, the sun shines brightly, casting a warm glow over the scene. A person stands nearby, arms raised, with a joyful smile on their face, clearly cheering on the dog. The background includes a cheerful, sunny day with lush greenery, emphasizing the dynamic action of the jumping dog. Wide shot, capturing both the dog mid-jump and the enthusiastic onlooker.`,
    `A romantic evening scene at a rooftop restaurant, featuring a couple enjoying drinks under the city lights. They are seated at a small table adorned with candles and a bottle of wine. The man is wearing a dark suit with a light-colored shirt and tie, while the woman is dressed in a elegant flowing dress. Both have warm, content expressions as they gaze into each other's eyes. The background showcases a panoramic view of the city skyline, with twinkling lights from buildings below. The setting sun casts a soft orange glow over the scene, creating a cozy atmosphere. Medium shot focusing on the couple, capturing their interaction and the surrounding ambiance.`,
    `A serene and enchanting woodland scene, where sunlight filters through a dense canopy of lush green trees, casting dappled shadows on the forest floor. The ground is covered in a soft layer of fallen leaves and moss, adding to the mystical atmosphere. Ferns and wildflowers peek out from beneath the towering trees, creating a vibrant yet tranquil environment. The camera remains static, capturing the peaceful interplay of light and shadow in this idyllic forest setting. Medium shot, focusing on the interaction between the sunlight and the forest floor.`,
    `A serene sunset over the pristine beaches of Cancun, Mexico. The sky is painted with vibrant hues of orange, pink, and purple, reflecting off the calm turquoise waters. Soft golden sand stretches out towards the horizon, dotted with the occasional palm tree swaying gently in the breeze. In the foreground, a few couples and families are enjoying the last moments of daylight, building sandcastles and playing in the shallow waves. The sun slowly dips below the horizon, casting long shadows and bathing everything in a warm, golden glow. Wide-angle shot capturing the expansive beach and the stunning sky.`,
    `A young woman is walking gracefully in slow motion across a vast, open landscape. The sky above is filled with soft, flowing clouds that drift lazily by, and in the distance, stars and galaxies swirl and shift, creating a mesmerizing backdrop. The camera follows her steadily, maintaining a medium shot to capture her serene expression and fluid movements. The scene combines elements of reality and cosmic wonder, blending earthly beauty with the awe-inspiring vastness of space.`,
    `In a vibrant jazz club, the atmosphere is electric with high-tempo jazz music. People are dancing energetically on the dance floor, their movements fluid and expressive under blue and purple lights. In the background, a man is playing a saxophone on stage, his face illuminated by the dim lighting, adding intensity to his performance. The scene is captured from a wide angle, showcasing the lively crowd and the musician on stage.`,
    `Pupshaw and Pushpaw, two charming anthropomorphic foxes, are having coffee together in a picturesque cafe.`
  ];

  const ONE_STEP_5S = [
    'a couple of boats floating on a body of water-1.mp4',
    'a couple of horses are running in the dirt-1.mp4',
    'a large waterfall in the middle of a lush green hillside-1.mp4',
    'a man and a woman are boxing in a boxing ring-1.mp4'
  ];

  const ONE_STEP_20S = [
    'a group of fish swimming over a coral reef-1.mp4',
    'two people scuba diving in the ocean-1.mp4'
  ];

  const COMP_PROMPTS = [
    'a dog carrying a soccer ball in its mouth',
    'a giraffe walking in a field',
    'a group of motorcyclists racing on a dirt track',
    'an older woman is drinking a bottle of water'
  ];

  const SOTA_COMPARISON_FILES = [
    'A futuristic neon cityscape at night, featuring towering skyscrapers with glowing neon signs and hol.mp4',
    'A dramatic illustration of a catastrophic asteroid impact on Earth.mp4',
    'A close-up shot of a bottle of wine on a wooden table. Slowly.mp4',
    'A Freightliner semi-truck driving through the bustling streets of Chicago. The truck is painted in.mp4',
    'A hyper-realistic depiction of a young woman running through a bustling steampunk city. The girl has.mp4',
    'A lively scene featuring a brown and white dog energetically chasing after a sleek black cat through.mp4',
    'A Tesla Robotaxi driving autonomously down a bustling, futuristic city street at night.mp4',
    'A Minecraft Creeper running through a dense, futuristic forest in a Cyberpunk style. The Creeper is.mp4'
  ];

  const ADDITIONAL_AAD_FILES_5S = [
    'A child, approximately 8 years old, sits at a desk in front of a computer, actively engaged in progr.mp4',
    'A cozy wooden cabin interior with a warm, crackling fireplace at the center. The room is dimly lit.mp4',
    'A cybernetic terminator in a corporate office environment providing IT support. The terminator has a.mp4',
    'A dramatic and epic scene depicting three colossal ancient giants battling a massive dragon in a den.mp4',
    'A dramatic animated battle scene between a hero named BootsMan and a villain made entirely of ink.mp4',
    'A dramatic royal court scene in a medieval setting where a stern king stands up from his throne in a.mp4',
    'A festive Christmas atmosphere in a Guatemalan town, where snow gently falls from the sky. The scene.mp4',
    'A romantic evening scene at a rooftop restaurant, featuring a couple enjoying drinks under the city.mp4',
    'A young woman is walking gracefully in slow motion across a vast, open landscape. The sky above is f.mp4',
    'In a vibrant jazz club, the atmosphere is electric with high-tempo jazz music. People are dancing en.mp4',
    'Pupshaw and Pushpaw, two charming anthropomorphic foxes, are having coffee together in a picturesqu.mp4'
  ];

  const ADDITIONAL_AAD_FILES_20S = [
    'A serene and enchanting woodland scene, where sunlight filters through a dense canopy of lush green.mp4'
  ];

  const STEP2_5S = [
    '001_A young, alluring Greek woman walks confidently down a bustling street in Athens.mp4',
    '002_A weary individual sitting at a desk, leaning back in a chair with their laptop.mp4',
    '003_a woman in a kimono holding an umbrella.mp4',
    '004_a woman with curly hair is drinking a beer.mp4',
    '005_an old man standing in the middle of a field holding a bunch of plants.mp4',
    '006_A close-up view of a pair of weathered hands gently planting a small tree saplin.mp4',
    '007_A vibrant animated sequence featuring Leslie Rose sprinting through a dimly lit.mp4',
    '008_a dog carrying a soccer ball in its mouth.mp4',
    '009_a giraffe walking in a field.mp4'
  ];

  const STEP2_20S = [
    '001_a lake surrounded by mountains and flowers.mp4',
    '002_a sandy beach with palm trees on the shore.mp4',
    '003_A group of four diverse high school students, two boys and two girls, are sittin.mp4',
    '004_a book on fire with flames coming out of it.mp4',
    '005_a large wave crashes into a lighthouse.mp4',
    '006_a large crowd of people walking in a shopping mall.mp4'
  ];

  function encodePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function normalizeText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function fileNameFromPath(path) {
    return String(path || '').split('/').pop() || '';
  }

  function promptFromFileName(name) {
    return fileNameFromPath(name)
      .replace(/\.mp4$/i, '')
      .replace(/^\s*\d+\s*_\s*/, '')
      .replace(/-(aad|sf|causvid|1)$/i, '')
      .replace(/_/g, ' ')
      .trim();
  }

  function findPrompt(path) {
    const prefix = normalizeText(promptFromFileName(path));
    const match = PROMPT_LIBRARY.find(prompt => normalizeText(prompt).startsWith(prefix));
    return match || promptFromFileName(path);
  }

  function makeGridVideos(baseDir, files, badge) {
    return files.map(file => ({
      path: baseDir + file,
      prompt: findPrompt(file),
      badge: badge
    }));
  }

  function makeCompItem(prompt) {
    return {
      prompt: prompt,
      files: {
        aad: `comp/${prompt}-aad.mp4`,
        sf: `comp/${prompt}-sf.mp4`,
        causvid: `comp/${prompt}-causvid.mp4`
      }
    };
  }

  function makeSotaItem(file) {
    return {
      prompt: findPrompt(file),
      files: {
        aad: `static/videos/supplementary/comparison_with_sota_methods/A/${file}`,
        sf: `static/videos/supplementary/comparison_with_sota_methods/B/${file}`,
        causvid: `static/videos/supplementary/comparison_with_sota_methods/C/${file}`
      }
    };
  }

  function seedFromString(value) {
    let hash = 0;
    const text = String(value || '');
    for (let i = 0; i < text.length; i++) {
      hash = ((hash * 31) + text.charCodeAt(i)) >>> 0;
    }
    return hash || 1;
  }

  function mulberry32(seed) {
    let value = seed >>> 0;
    return function() {
      value += 0x6D2B79F5;
      let t = value;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleItems(items, seed) {
    const shuffled = items.slice();
    const random = mulberry32(seedFromString(seed));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      const current = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = current;
    }
    return shuffled;
  }

  const VIDEO_SECTIONS = [
    {
      id: 'sota-comparison',
      title: 'SOTA Comparison',
      note: 'All AAD-1, Self-Forcing, and CausVid comparison videos are shown together.',
      type: 'comparison',
      columns: [
        { key: 'aad', label: 'AAD-1' },
        { key: 'sf', label: 'Self-Forcing' },
        { key: 'causvid', label: 'CausVid' }
      ],
      items: shuffleItems([
        ...COMP_PROMPTS.map(makeCompItem),
        ...SOTA_COMPARISON_FILES.map(makeSotaItem)
      ], 'sota-comparison')
    },
    {
      id: 'more-results-5s',
      title: 'More Results (5s)',
      note: '5-second one-step AAD-1 generations and additional AAD-1 examples.',
      type: 'grid',
      videos: shuffleItems([
        ...makeGridVideos('1step-5s/', ONE_STEP_5S, '1 step / 5s'),
        ...makeGridVideos('static/videos/supplementary/', ADDITIONAL_AAD_FILES_5S, 'AAD-1 / 5s')
      ], 'more-results-5s')
    },
    {
      id: 'more-results-20s',
      title: 'More Results (20s)',
      note: '20-second one-step AAD-1 generations and additional AAD-1 examples.',
      type: 'grid',
      videos: shuffleItems([
        ...makeGridVideos('1step-20s/', ONE_STEP_20S, '1 step / 20s'),
        ...makeGridVideos('static/videos/supplementary/', ADDITIONAL_AAD_FILES_20S, 'AAD-1 / 20s')
      ], 'more-results-20s')
    },
    {
      id: 'two-step-results',
      title: '2-step Results',
      note: 'All two-step generation videos are shown together.',
      type: 'grid',
      videos: shuffleItems([
        ...makeGridVideos('static/videos/2step/5s/', STEP2_5S, '2 step / 5s'),
        ...makeGridVideos('static/videos/2step/20s/', STEP2_20S, '2 step / 20s')
      ], 'two-step-results')
    }
  ];

  function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function restrictVideoEl(video) {
    video.setAttribute('controlslist', 'nodownload noremoteplayback noplaybackrate nofullscreen');
    video.setAttribute('disablepictureinpicture', '');
    video.setAttribute('playsinline', '');
    try { video.disablePictureInPicture = true; } catch (e) {}
    video.addEventListener('contextmenu', event => event.preventDefault(), { passive: false });
    video.addEventListener('dblclick', event => {
      event.preventDefault();
      event.stopPropagation();
    }, { passive: false });
  }

  function createVideo(path, label) {
    const video = createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', label || 'Video result');

    const source = createElement('source');
    source.type = 'video/mp4';
    source.src = encodePath(path);
    video.appendChild(source);
    restrictVideoEl(video);
    return video;
  }

  function createPrompt(prompt) {
    const wrap = createElement('div', 'video-prompt-wrap');
    const button = createElement('button', 'video-prompt-toggle');
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');

    const arrow = createElement('span', 'video-prompt-arrow', '\u25b6');
    const label = createElement('span', '', 'Click to Show Prompt');
    button.appendChild(arrow);
    button.appendChild(label);

    const promptEl = createElement('div', 'video-prompt', prompt);
    button.addEventListener('click', () => {
      const visible = promptEl.classList.toggle('is-visible');
      button.classList.toggle('is-active', visible);
      button.setAttribute('aria-expanded', String(visible));
      label.textContent = visible ? 'Click to Hide Prompt' : 'Click to Show Prompt';
    });

    wrap.appendChild(button);
    wrap.appendChild(promptEl);
    return wrap;
  }

  function renderGridSection(section, target) {
    const grid = createElement('div', 'video-grid');
    section.videos.forEach((item, index) => {
      const card = createElement('article', 'video-card');
      card.appendChild(createPrompt(item.prompt));

      const head = createElement('div', 'video-card-head');
      head.appendChild(createElement('span', '', `#${index + 1}`));
      head.appendChild(createElement('span', 'video-badge', item.badge || ''));
      card.appendChild(head);

      card.appendChild(createVideo(item.path, item.prompt));
      grid.appendChild(card);
    });
    target.appendChild(grid);
  }

  function renderComparisonSection(section, target) {
    section.items.forEach((item, index) => {
      const card = createElement('article', 'video-compare-card');
      const head = createElement('div', 'video-compare-head');
      head.appendChild(createElement('span', '', `#${index + 1}`));
      head.appendChild(createElement('span', 'video-badge', `${section.columns.length} views`));
      card.appendChild(head);
      card.appendChild(createPrompt(item.prompt));

      const grid = createElement('div', 'video-compare-grid');
      section.columns.forEach(column => {
        const col = createElement('div', 'video-compare-col');
        col.appendChild(createElement('div', 'video-col-head', column.label));
        col.appendChild(createVideo(item.files[column.key], `${item.prompt} - ${column.label}`));
        grid.appendChild(col);
      });

      card.appendChild(grid);
      target.appendChild(card);
    });
  }

  function renderSection(section, root) {
    const node = createElement('section', 'video-section');
    node.id = section.id;
    node.appendChild(createElement('h3', 'video-section-title', section.title));
    if (section.note) node.appendChild(createElement('p', 'video-section-note', section.note));

    if (section.type === 'comparison') {
      renderComparisonSection(section, node);
    } else {
      renderGridSection(section, node);
    }

    root.appendChild(node);
  }

  function renderNav(sections, nav) {
    sections.forEach(section => {
      const link = createElement('a', '', section.title);
      link.href = `#${section.id}`;
      nav.appendChild(link);
    });
  }

  function renderVideoGallery() {
    const root = document.getElementById('videoGalleryRoot');
    const nav = document.getElementById('videoGalleryNav');
    if (!root || !nav) return;

    root.innerHTML = '';
    nav.innerHTML = '';
    renderNav(VIDEO_SECTIONS, nav);
    VIDEO_SECTIONS.forEach(section => renderSection(section, root));
  }

  document.addEventListener('DOMContentLoaded', renderVideoGallery);
})();
