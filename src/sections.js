// editor, preview and markdown export all read from this file
// CORE_BLOCKS: the one-pager, always open
// GROUPS: full GDD sections, each opened by its checkbox question

const t = (tr, en) => ({ tr, en });

export const loc = (obj, lang) => (obj ? obj[lang] || obj.en || '' : '');

export const CORE_BLOCKS = [
  {
    id: 'identity',
    title: t('Kimlik', 'Identity'),
    fields: [
      {
        id: 'title', line: true,
        label: t('Oyun adı', 'Working title'),
        ph: t('Oyun adı', 'Game title')
      },
      {
        id: 'mantra', line: true,
        label: t('Oyun kimliği', 'Game identity'),
        hint: t('Tasarım kararlarına yön verecek tek cümle.', 'One sentence you will use to settle design arguments.'),
        ph: t('Stilize bir aksiyon platformer: yemek masasına karşı bir köfte.', 'Stylized action platformer about a meatball fighting the dinner table.')
      },
      {
        id: 'pillars', line: true,
        label: t('Tasarım direkleri', 'Design pillars'),
        hint: t('Oyuncuya hissettirmek istediğin en fazla 3 his ya da kelime.', 'Up to three words or phrases for the feeling you want players to have.'),
        ph: t('Hızlı. Aksiyon dolu. Kaos.', 'Fast. Action-packed. Mayhem.')
      }
    ]
  },
  {
    id: 'game',
    title: t('Oyun', 'The game'),
    fields: [
      {
        id: 'summary', rows: 3,
        label: t('Özet', 'Summary'),
        hint: t('Oyun ne anlatıyor, nasıl oynanıyor? Tür, hikaye ve mekanik bir arada, 75 kelimeyi geçmesin.', 'What is it about and how does it play? Genre, story and mechanics in under 75 words.')
      },
      {
        id: 'genrePlatform', line: true,
        label: t('Tür ve platform', 'Genre and platform'),
        ph: t('Co-op Survival / PC (Steam)', 'Co-op Survival / PC (Steam)')
      },
      {
        id: 'audience', rows: 2,
        label: t('Hedef kitle', 'Audience'),
        hint: t('Kimler oynayacak, hangi oyunları seviyorlar? Bunu nereden biliyorsun?', 'Who plays it, and what else do they play? How do you know they would buy it?')
      },
      {
        id: 'coreLoop', rows: 2,
        label: t('Ana oyun döngüsü', 'Core loop'),
        hint: t('Oyuncunun tekrar tekrar yaptığı temel eylemler.', 'The handful of actions the player repeats.'),
        ph: t('Keşfet → Topla → Dön → Geliştir', 'Explore → Collect → Return → Upgrade')
      },
      {
        id: 'features', rows: 3,
        label: t('Öne çıkan özellikler', 'Features'),
        hint: t('Oyunu farklı kılan 3-5 şey.', 'The three to five things that make it different.')
      }
    ]
  },
  {
    id: 'feel',
    title: t('Hissiyat', 'Look and feel'),
    fields: [
      {
        id: 'interface', rows: 2,
        label: t('Kontroller ve arayüz', 'Controls and interface'),
        hint: t('Giriş yöntemi, tuşlar, oyuncu oyunla nasıl konuşuyor?', 'Input method, bindings, how the player talks to the game.')
      },
      {
        id: 'art', rows: 2,
        label: t('Sanat stili', 'Art style'),
        hint: t('Benzer estetiğe sahip oyun ve görsellere referans ver.', 'Point at games and images with the aesthetic you want.')
      },
      {
        id: 'music', rows: 2,
        label: t('Müzik ve ses', 'Music and sound'),
        hint: t('Hedeflediğin ses dünyası ve uyandırmasını istediğin duygu.', 'The sound you are after and the emotion it should trigger.')
      }
    ]
  },
  {
    id: 'plan',
    title: t('Plan', 'Plan'),
    fields: [
      {
        id: 'roadmap', rows: 3,
        label: t('Yol haritası ve çıkış kriterleri', 'Roadmap and launch criteria'),
        hint: t('Kilometre taşları ve tarihleri. Lansman için neyin hazır olması gerekiyor?', 'Milestones with dates. What has to be true before you ship?')
      }
    ]
  }
];

export const GROUPS = [
  {
    id: 'story',
    title: t('Hikaye', 'Story'),
    question: t('Oyunda bir hikaye ya da anlatı var mı?', 'Does the game have a story?'),
    fields: [
      { id: 'lore', rows: 3, label: t('Arka plan ve evren', 'Backstory and universe'), hint: t('Dünya nasıl bu hale geldi? Oyuncu hikayeye nereden giriyor?', 'How did the world get here? Where does the player come in?') },
      { id: 'plot', rows: 3, label: t('Ana olay örgüsü', 'Main plot'), hint: t('Başı, ortası ve sonu. Dönüm noktaları neler?', 'Beginning, middle and end. What are the turning points?') },
      { id: 'cutscenes', rows: 2, label: t('Anlatım yöntemi', 'How it is told'), hint: t('Ara sahne, diyalog, çevresel anlatım ya da metin?', 'Cutscenes, dialogue, environmental storytelling, text?') }
    ]
  },
  {
    id: 'characters',
    title: t('Karakterler', 'Characters'),
    question: t('Karakterler, NPC\'ler ya da düşmanlar var mı?', 'Are there characters, NPCs or enemies?'),
    fields: [
      { id: 'player', rows: 3, label: t('Oyuncu karakteri', 'Player character'), hint: t('Oyuncu kim? Yetenekleri, sınıfları, görünümü.', 'Who is the player? Abilities, classes, looks.') },
      { id: 'npcs', rows: 3, label: t('Yan karakterler', 'Supporting characters'), hint: t('Oyuncunun karşılaştığı önemli NPC\'ler ve rolleri.', 'The NPCs that matter and what they do.') },
      { id: 'enemies', rows: 3, label: t('Düşmanlar ve patronlar', 'Enemies and bosses'), hint: t('Tipleri, davranışları, oyuncuya sorduğu soru.', 'Types, behavior, and the question each one asks the player.') }
    ]
  },
  {
    id: 'world',
    title: t('Dünya ve bölümler', 'World and levels'),
    question: t('Birden fazla mekan, bölüm ya da keşfedilecek bir dünya var mı?', 'Are there several locations, levels or a world to explore?'),
    fields: [
      { id: 'setting', rows: 2, label: t('Mekan ve zaman', 'Setting'), hint: t('Oyun nerede ve ne zaman geçiyor?', 'Where and when does it take place?') },
      { id: 'worldStructure', rows: 2, label: t('Dünya yapısı', 'World structure'), hint: t('Doğrusal bölümler mi, açık dünya mı, merkez ve görevler mi?', 'Linear levels, open world, hub and missions?') },
      { id: 'levels', rows: 3, label: t('Lokasyonlar ve bölümler', 'Locations and levels'), hint: t('Her birinin amacı ve kendine özgü mekaniği.', 'What each one is for and what is unique about it.') }
    ]
  },
  {
    id: 'progression',
    title: t('İlerleme ve zorluk', 'Progression and difficulty'),
    question: t('Oyuncu ilerliyor mu (hedefler, seviyeler, artan zorluk)?', 'Does the player progress (goals, levels, rising difficulty)?'),
    fields: [
      { id: 'objectives', rows: 2, label: t('Hedefler', 'Objectives'), hint: t('Ana hedef ve ikincil hedefler.', 'The main goal and the secondary ones.') },
      { id: 'progression', rows: 3, label: t('İlerleme', 'Progression'), hint: t('Oyuncu bir sonraki alana nasıl geçer, güçlenme dünyayı nasıl etkiler?', 'How does the player move on, and how does getting stronger change the world?') },
      { id: 'difficulty', rows: 2, label: t('Zorluk', 'Difficulty'), hint: t('Zorluk nasıl artar? Zorluk seçenekleri var mı?', 'How does it ramp up? Are there difficulty settings?') }
    ]
  },
  {
    id: 'mechanics',
    title: t('Mekanikler', 'Mechanics'),
    question: t('Ayrıca anlatılması gereken özel mekanikler ya da kurallar var mı?', 'Are there mechanics or rules that need their own write-up?'),
    fields: [
      { id: 'rules', rows: 3, label: t('Kurallar ve sınırlar', 'Rules and limits'), hint: t('Oyuncunun yapabildikleri ve yapamadıkları.', 'What the player can and cannot do.') },
      { id: 'movement', rows: 2, label: t('Hareket', 'Movement'), hint: t('Oyuncunun dünyada hareket aralığı, fizik hissi.', 'How the player moves, and how the physics feel.') },
      { id: 'interaction', rows: 3, label: t('Etkileşim ve özel sistemler', 'Interaction and special systems'), hint: t('Neyle etkileşilir? Savaş, envanter, üretim gibi sistemler.', 'What can be interacted with? Combat, inventory, crafting.') }
    ]
  },
  {
    id: 'economy',
    title: t('Ekonomi', 'Economy'),
    question: t('Para birimi, kaynak ya da üretim sistemi var mı?', 'Is there currency, resources or crafting?'),
    fields: [
      { id: 'economy', rows: 4, label: t('Para birimleri ve kaynaklar', 'Currencies and resources'), hint: t('Neler var, nasıl kazanılıp harcanıyor, denge nasıl korunuyor?', 'What exists, how is it earned and spent, how is it balanced?') }
    ]
  },
  {
    id: 'multiplayer',
    title: t('Çok oyunculu', 'Multiplayer'),
    question: t('Birden fazla oyuncu aynı anda oynuyor mu?', 'Do several players play at once?'),
    fields: [
      { id: 'coop', rows: 4, label: t('Çok oyunculu tasarım', 'Multiplayer design'), hint: t('Oyuncu sayısı, iletişim, roller, ölüm ve geri dönüş kuralları.', 'Player count, communication, roles, death and revival rules.') }
    ]
  },
  {
    id: 'risk',
    title: t('Risk ve ödül', 'Risk and reward'),
    question: t('Ölüm, kayıp ya da risk-ödül dengesi oyunun önemli parçası mı?', 'Do death, loss or risk-versus-reward matter to the design?'),
    fields: [
      { id: 'risk', rows: 4, label: t('Risk ve ödül', 'Risk and reward'), hint: t('Başarısızlığın bedeli ne? Risk almak neden cazip?', 'What does failure cost? Why is taking the risk tempting?') }
    ]
  },
  {
    id: 'visuals',
    title: t('Görsel ve ses detayı', 'Visual and audio detail'),
    question: t('Görsel ve ses tasarımını ayrıntılı yazmak istiyor musun?', 'Do you want to spell out visual and audio design in detail?'),
    fields: [
      { id: 'visualSystem', rows: 3, label: t('Görsel sistem', 'Visual system'), hint: t('Renk paleti, animasyon, kamera, efektler.', 'Palette, animation, camera, effects.') },
      { id: 'audioSystem', rows: 3, label: t('Ses sistemi', 'Audio system'), hint: t('Müzik yapısı, ses efektleri, seslendirme, adaptif ses.', 'Music structure, sound effects, voice, adaptive audio.') }
    ]
  },
  {
    id: 'ui',
    title: t('Menüler ve HUD', 'Menus and HUD'),
    question: t('Menüler ve arayüz ayrıca tasarlanacak mı?', 'Will menus and interface be designed in their own right?'),
    fields: [
      { id: 'ui', rows: 4, label: t('Menüler ve HUD', 'Menus and HUD'), hint: t('Menü akışı, ekrandaki göstergeler, erişilebilirlik seçenekleri.', 'Menu flow, on-screen readouts, accessibility options.') }
    ]
  },
  {
    id: 'assets',
    title: t('Varlık listesi', 'Asset list'),
    question: t('Varlık (asset) listesi çıkarmak ister misin?', 'Do you want an asset list?'),
    fields: [
      { id: 'assets', rows: 4, label: t('Varlık listesi', 'Asset list'), hint: t('Gereken model, sprite ve sesler; kim üretecek, hazır paket mi?', 'Models, sprites and sounds needed. Who makes them, or are they bought?') }
    ]
  },
  {
    id: 'business',
    title: t('İş modeli', 'Business model'),
    question: t('Satış ya da gelir modelini planlıyor musun?', 'Are you planning how the game earns money?'),
    fields: [
      { id: 'monetization', rows: 4, label: t('Gelir modeli', 'Monetization'), hint: t('Premium, F2P, reklam, DLC? Fiyat ve beklentiler.', 'Premium, F2P, ads, DLC? Price and expectations.') }
    ]
  },
  {
    id: 'tech',
    title: t('Teknik', 'Technical'),
    question: t('Teknik gereksinimleri belirtmek istiyor musun?', 'Do you want to pin down technical requirements?'),
    fields: [
      { id: 'techSpecs', rows: 4, label: t('Teknik özellikler', 'Technical specs'), hint: t('Motor, hedef platformlar, minimum sistem, bilinen teknik riskler.', 'Engine, target platforms, minimum specs, known technical risks.') }
    ]
  },
  {
    id: 'marketing',
    title: t('Pazarlama', 'Marketing'),
    question: t('Pazarlama ve lansman planı yazacak mısın?', 'Will you write a marketing and launch plan?'),
    fields: [
      { id: 'marketing', rows: 4, label: t('Pazarlama ve lansman', 'Marketing and launch'), hint: t('Konumlandırma, wishlist stratejisi, demo, topluluk.', 'Positioning, wishlist strategy, demo, community.') }
    ]
  }
];

export const CORE_FIELD_IDS = CORE_BLOCKS.flatMap((b) => b.fields.map((f) => f.id));
export const GROUP_FIELD_IDS = GROUPS.flatMap((g) => g.fields.map((f) => f.id));
export const ALL_FIELD_IDS = [...CORE_FIELD_IDS, ...GROUP_FIELD_IDS];

export const EMPTY_VALUES = Object.fromEntries(ALL_FIELD_IDS.map((id) => [id, '']));
export const EMPTY_ENABLED = Object.fromEntries(GROUPS.map((g) => [g.id, false]));

// v2 drafts -> current ids
// old field -> new field
export const LEGACY_FIELD_MAP = {
  concept: 'summary',
  ui: 'interface',
  assets: 'art',
  milestones: 'roadmap'
};

// old module -> group (null = now part of the one-pager)
export const LEGACY_MODULE_MAP = {
  lore: 'story',
  coop: 'multiplayer',
  risk: 'risk',
  ui: null,
  assets: null,
  monetization: 'business',
  techSpecs: 'tech',
  marketing: 'marketing',
  milestones: null
};

export function migrateLegacy(oldForm = {}, oldModules = {}) {
  const values = { ...EMPTY_VALUES };
  Object.entries(oldForm).forEach(([key, val]) => {
    const id = LEGACY_FIELD_MAP[key] || key;
    if (id in values && typeof val === 'string') values[id] = val;
  });
  const enabled = { ...EMPTY_ENABLED };
  Object.entries(oldModules).forEach(([key, on]) => {
    const gid = LEGACY_MODULE_MAP[key];
    if (on && gid) enabled[gid] = true;
  });
  return { values, enabled };
}
