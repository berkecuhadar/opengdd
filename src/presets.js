import { onePagers } from './onePagers.js';

// category: action | narrative | strategy | puzzle | mobile | jam

const emptyModule = { tr: "", en: "" };

export const presets = {
  lethalCoop: {
    category: "action",
    icon: "☠️",
    title: {
      tr: "Kum Saati Protokolü (Extraction Looter Co-op)",
      en: "Hourglass Protocol (Extraction Looter Co-op)"
    },
    concept: {
      tr: "Terk edilmiş maden uydularında, tükenen oksijenle yarışıp korkunç varlıklardan kaçarak hurda toplayan ve kotayı doldurmaya çalışan 1-4 kişilik co-op hayatta kalma oyunu.",
      en: "A 1-4 player co-op survival game where crews race a dwindling oxygen supply and lurking entities to scavenge scrap from derelict mining moons and hit their corporate quota."
    },
    genrePlatform: { tr: "Co-op Survival Horror / PC (Steam)", en: "Co-op Survival Horror / PC (Steam)" },
    coreLoop: {
      tr: "Mekiği uyduya indir → Ekibi görevlere böl (tarama / taşıma / nöbet) → Hurdayı gemiye taşı → Zamanlayıcı bitmeden kalkışa geç → Şirket'e sat, ekipmanı yükselt, bir sonraki uyduya geç.",
      en: "Land the shuttle on a moon → Split the crew into roles (scouting / hauling / lookout) → Haul scrap back to the ship → Launch before the timer runs out → Sell to the Company, upgrade gear, move to the next moon."
    },
    activeModules: { lore: true, coop: true, risk: true, ui: true, assets: false, monetization: false, techSpecs: false, marketing: false, milestones: false },
    lore: {
      tr: "Oyuncular, 'Şirket' adlı isimsiz bir mega-kuruluşa borçlu, sözleşmeyle çalışan taşeron işçilerdir. Her kota dönemi borcu biraz azaltır; ölüm ise sözleşmeye yeni bir madde olarak eklenir. Uydular neden terk edildi, resmi kayıtlarda hiç yazmıyor.",
      en: "Players are indebted contract laborers working for a faceless mega-corp known only as The Company. Each quota cycle chips away at the debt; death just becomes a footnote in the next contract. Official records never explain why the moons were abandoned."
    },
    coop: {
      tr: "İletişim kısa menzilli el telsizleriyle sınırlı; gemiden uzaklaşan oyuncu sessizliğe gömülür. Ölen oyuncunun envanteri olduğu yerde kalır — takım arkadaşları riske girip geri almalı mı, yoksa yazmalı mı? Rol dağılımı (kapı bekçisi, haritacı, taşıyıcı) takımın hayatta kalma stratejisini belirler.",
      en: "Comms are limited to short-range walkies; stray too far from the ship and you go silent. A dead player's loot stays exactly where they fell — does the team risk a retrieval run or write it off? Informal roles (door-watcher, mapper, hauler) shape how each run survives."
    },
    risk: {
      tr: "Uydu içinde geçirilen her ekstra dakika, tehdit seviyesini bir kademe artırır. Ölünce üstünüzdeki tüm hurda kaybolur ve takımın kota açığı büyür; üç ardışık başarısız kota, sözleşmenin feshiyle (oyun sonu) sonuçlanır.",
      en: "Every extra minute spent on a moon ratchets the threat level up one notch. Dying drops all carried scrap and widens the team's quota gap; three consecutive missed quotas end the contract — and the game."
    },
    ui: {
      tr: "Minimalist HUD: ekranın köşesinde kalan oksijen ve zamanlayıcı, kalp atışı ile senkronize ekran titremesi, gemideki terminal üzerinden uydu seçimi ve kota takibi.",
      en: "Minimalist HUD: corner readouts for oxygen and mission timer, screen-shake synced to heartbeat audio, and an in-ship terminal for moon selection and quota tracking."
    },
    assets: emptyModule, monetization: emptyModule, techSpecs: emptyModule, marketing: emptyModule, milestones: emptyModule
  },

  actionPlatformer: {
    category: "action",
    icon: "⚔️",
    title: { tr: "Neon Kesik (Hızlı Aksiyon Platformer)", en: "Neon Severance (Fast Action Platformer)" },
    concept: {
      tr: "Zamanı milisaniyeler kadar hassas hale getiren dash mekaniği üzerine kurulu, cyberpunk bir yeraltı şehrinde geçen, tek can hakkı prensibiyle işleyen hızlı bir 2D aksiyon-platformer.",
      en: "A precision-dash 2D action platformer set in a cyberpunk underworld, built around millisecond-tight timing and a single-life-per-attempt structure."
    },
    genrePlatform: { tr: "Fast-Paced Action Platformer / PC, Switch", en: "Fast-Paced Action Platformer / PC, Switch" },
    coreLoop: {
      tr: "Bölüme gir → Dash-kılıç kombinasyonlarıyla engelleri ve düşmanları temizle → Checkpoint'lerde ritmi koru → Boss arenasında öğrenilen mekanikleri sına → Yeni yetenek kilidini aç, zaman rekorunu kır.",
      en: "Enter the level → Chain dash-and-slash combos through hazards and enemies → Hold the rhythm through checkpoints → Test what you've learned in the boss arena → Unlock a new ability and chase the speedrun clock."
    },
    activeModules: { lore: true, coop: false, risk: true, ui: true, assets: true, monetization: false, techSpecs: false, marketing: false, milestones: false },
    lore: {
      tr: "Şehri yöneten beş mega-şirketten biri tarafından 'hafızası silinen' eski bir suikastçı, gerçek kimliğini geri almak için şirket kulelerini teker teker düşürüyor. Her bölge, unutulan geçmişinden bir parçayı açığa çıkarıyor.",
      en: "A former assassin, memory-wiped by one of the five mega-corps ruling the city, tears through corporate towers one by one to reclaim their identity. Each district peels back a fragment of the past they were made to forget."
    },
    coop: emptyModule,
    risk: {
      tr: "Tek vuruşta ölüm, ama checkpoint'ler cömert; asıl bedel zaman kaybı. Ölümler bölge sonunda bir 'ölüm sayacı' olarak gösteriliyor — mükemmelci oyuncular için görünmez bir ikinci hedef.",
      en: "One hit ends the run, but checkpoints are generous — the real cost is time. Deaths tally into a visible death counter at each level's end, a quiet second objective for completionists."
    },
    ui: {
      tr: "Gamepad öncelikli tasarım, ekranda kalıcı olmayan minimal göstergeler (sadece dash cooldown'u), bölge sonu 'hız karnesi' (S-D arası derece).",
      en: "Gamepad-first design, near-invisible HUD (only a dash cooldown indicator persists), and an end-of-level speed grade from S to D."
    },
    assets: {
      tr: "El çizimi pixel-art karakter animasyonları, parallax neon şehir katmanları, sentetik/synthwave boss temaları, ekran-shake ve chromatic aberration efektleri.",
      en: "Hand-drawn pixel-art character animation, parallax neon cityscape layers, synthwave boss themes, screen-shake and chromatic aberration hit-feedback."
    },
    monetization: emptyModule, techSpecs: emptyModule, marketing: emptyModule, milestones: emptyModule
  },

  survivalCraft: {
    category: "action",
    icon: "🪓",
    title: { tr: "Kırık Kıyı (Açık Dünya Hayatta Kalma)", en: "Broken Shore (Open-World Survival Crafting)" },
    concept: {
      tr: "Fırtınanın parçaladığı bir gemiden karaya vuran hayatta kalanların, düşman bir adada barınak kurup teknelerini yeniden inşa etmeye çalıştığı açık dünya, üretim odaklı bir hayatta kalma oyunu.",
      en: "An open-world survival crafting game where shipwreck survivors wash up on a hostile island and must build shelter, gather resources, and rebuild their vessel to escape."
    },
    genrePlatform: { tr: "Open-World Survival Crafting / PC", en: "Open-World Survival Crafting / PC" },
    coreLoop: {
      tr: "Kaynak topla → Barınak ve alet üret → Açlık/susuzluk/sıcaklık dengesini yönet → Bölgeyi keşfederek gemi parçalarını bul → Teknenin bir parçasını daha tamamla ve daha derin bölgelere aç.",
      en: "Gather resources → Craft shelter and tools → Manage hunger, thirst, and temperature → Explore to find salvageable ship parts → Complete another section of the vessel and unlock deeper regions."
    },
    activeModules: { lore: false, coop: true, risk: true, ui: true, assets: true, monetization: false, techSpecs: false, marketing: false, milestones: false },
    lore: emptyModule,
    coop: {
      tr: "2-4 kişilik paylaşımlı dünya; envanter takas sistemi ve ortak barınak inşası var. Bir oyuncu bayılırsa diğerleri onu taşıyıp ateşe götürerek canlandırabilir.",
      en: "Shared world for 2-4 players with a resource-trading system and collaborative base building. If a player passes out, teammates can carry them to a fire to revive."
    },
    risk: {
      tr: "Gece sıcaklığı hızla düşer ve adanın iç kesimleri daha tehlikeli yaratıklarla dolu. Ölüm envanteri sıfırlamaz ama son konumda bir 'ölüm sandığı' bırakır — geri almak riskli bir yolculuk gerektirir.",
      en: "Nights drop temperature fast, and the island's interior hides increasingly dangerous creatures. Death doesn't wipe your inventory, but drops a 'death chest' at your last location — retrieving it is its own risky expedition."
    },
    ui: {
      tr: "Radial üretim menüsü, ihtiyaç çubukları (açlık/susuzluk/sıcaklık) ekranın altında sabit, harita üzerinde keşfedilen bölgeler sisle kaplı.",
      en: "Radial crafting wheel, persistent need bars (hunger/thirst/warmth) along the bottom edge, fog-of-war map that reveals as you explore."
    },
    assets: {
      tr: "Stilize düşük-poli doğa varlıkları, dinamik hava/gündüz-gece döngüsü shader'ları, ortam sesi katmanları (rüzgar, dalga, uzak yaratık sesleri).",
      en: "Stylized low-poly nature assets, dynamic weather and day/night cycle shaders, layered ambient audio (wind, waves, distant creature calls)."
    },
    monetization: emptyModule, techSpecs: emptyModule, marketing: emptyModule, milestones: emptyModule
  },

  rpgAdventure: {
    category: "narrative",
    icon: "🗡️",
    title: { tr: "Unutulan Kuleler (Anlatı Odaklı İzometrik RPG)", en: "Forgotten Spires (Narrative Isometric RPG)" },
    concept: {
      tr: "İç savaşla parçalanmış beş krallıkta geçen, diyalog seçimlerinin ittifakları ve dünyanın kaderini kalıcı olarak şekillendirdiği, keşfe dayalı bir izometrik rol yapma oyunu.",
      en: "An exploration-driven isometric RPG set across five kingdoms torn by civil war, where dialogue choices permanently shape alliances and the fate of the world."
    },
    genrePlatform: { tr: "Isometric RPG / PC, Mac", en: "Isometric RPG / PC, Mac" },
    coreLoop: {
      tr: "Bölgeyi keşfet → Yan görevler ve diyalog seçimleriyle itibar kazan/kaybet → Karakteri ve arkadaş grubunu geliştir → Ana hikaye düğümünde bir hizip seç → Seçimin sonuçlarıyla yeni bölgeye geç.",
      en: "Explore a region → Gain or lose standing through side quests and dialogue → Level up character and companions → Pick a faction at a story crossroads → Carry the consequences into the next region."
    },
    activeModules: { lore: true, coop: false, risk: true, ui: true, assets: true, monetization: false, techSpecs: true, marketing: false, milestones: true },
    lore: {
      tr: "Beş krallık, yüzlerce yıl önce yıkılan altıncı bir krallığın kalıntısı olan 'Kuleler'in kontrolü için birbirine düşmüş durumda. Oyuncu, kimseye bağlı olmayan bir gezgin olarak bu dengeyi bozacak ya da yeniden kuracak konumdadır.",
      en: "Five kingdoms are at war over control of the Spires — remnants of a sixth kingdom that fell centuries ago. The player, a wanderer beholden to none, is positioned to either topple or restore the balance."
    },
    coop: emptyModule,
    risk: {
      tr: "İtibar sistemi karşılıklıdır: bir hizipte güven kazanmak neredeyse her zaman başka birinde şüphe doğurur. Kalıcı ölüm yok, ama NPC'ler seçimlerinizi hatırlar ve bazı yollar geri dönüşü olmayan şekilde kapanır.",
      en: "Reputation is zero-sum: earning trust with one faction almost always breeds suspicion with another. No permadeath, but NPCs remember your choices, and some paths close permanently."
    },
    ui: {
      tr: "Radial diyalog çarkı (ton bazlı: diplomatik / alaycı / tehditkar), sürükle-bırak envanter ve teçhizat ekranı, harita üzerinde dinamik hizip nüfuz bölgeleri.",
      en: "Tone-based radial dialogue wheel (diplomatic / sarcastic / threatening), drag-and-drop inventory and gear screen, map overlay showing dynamic faction influence zones."
    },
    assets: {
      tr: "El boyaması karakter portreleri, izometrik tile setleri (5 farklı bölge biyomu), orkestral leitmotif müzik sistemi, seçmeli tam seslendirme.",
      en: "Hand-painted character portraits, isometric tile sets across 5 distinct region biomes, orchestral leitmotif music system, optional full voice acting."
    },
    monetization: emptyModule,
    techSpecs: {
      tr: "Unity (URP), hedef: Windows/Mac, minimum 8GB RAM ve entegre grafik kartı desteği, önerilen: ayrık GPU 4GB VRAM.",
      en: "Unity (URP), target: Windows/Mac, minimum 8GB RAM with integrated GPU support, recommended: discrete GPU with 4GB VRAM."
    },
    marketing: emptyModule
  },

  visualNovel: {
    category: "narrative",
    icon: "📖",
    title: { tr: "Yağmur Mektupları (İlişki Odaklı Görsel Roman)", en: "Letters in the Rain (Relationship-Driven Visual Novel)" },
    concept: {
      tr: "Küçük bir kıyı kasabasında geçen, bir yazı boyunca çocukluk arkadaşlarıyla yeniden bağ kurmayı konu alan, çoklu son seçeneklerine sahip sakin tempolu bir görsel roman.",
      en: "A slow-burn visual novel about reconnecting with childhood friends over one summer in a small coastal town, with multiple branching endings."
    },
    genrePlatform: { tr: "Visual Novel / PC, Mobile", en: "Visual Novel / PC, Mobile" },
    coreLoop: {
      tr: "Günün sahnesini oku → Kritik anlarda diyalog seçimi yap → Karakterlere yakınlık puanı işle → Haftalık zaman atlaması ile ilerle → Yazın sonunda seçimlerine göre bir son aç.",
      en: "Read the day's scene → Make dialogue choices at key beats → Affinity points shift toward different characters → Advance through weekly time-skips → Unlock an ending shaped by the summer's choices."
    },
    activeModules: { lore: true, coop: false, risk: false, ui: true, assets: true, monetization: false, techSpecs: false, marketing: true, milestones: false },
    lore: {
      tr: "Şehre üniversiteden dönen anlatıcı, on yıl önce ayrıldığı üç çocukluk arkadaşıyla karşılaşır; her biri kendi yüzleşmesi gereken bir dönüşümden geçmiştir. Kasaba, karakterlerin geçmişiyle yüzleşmesi için sessiz bir sahne görevi görür.",
      en: "A narrator returning from university reunites with three childhood friends they left behind a decade ago, each now carrying their own quiet reckoning. The town itself becomes a still backdrop for confronting the past."
    },
    coop: emptyModule, risk: emptyModule,
    ui: {
      tr: "Klasik VN metin kutusu, karakter ifadesine göre değişen katmanlı sprite sistemi, geri sarma/hızlı geçiş kontrolleri, çoklu kayıt yuvası ve seçim ağacı özeti.",
      en: "Classic VN textbox, layered sprite system that shifts with character mood, rewind/fast-forward controls, multiple save slots and a choice-tree summary."
    },
    assets: {
      tr: "Karakter başına 6-8 ifade varyasyonu içeren sprite setleri, elle boyanmış arka plan illüstrasyonları, akustik/lo-fi ambient müzik, yağmur ve deniz sesi katmanları.",
      en: "Sprite sets with 6-8 expression variants per character, hand-painted background illustrations, acoustic/lo-fi ambient score, layered rain and ocean sound design."
    },
    monetization: emptyModule, techSpecs: emptyModule,
    marketing: {
      tr: "Hedef kitle: slice-of-life ve karakter draması seven VN oyuncuları. Steam sayfası + ücretsiz ilk bölüm demosu ile wishlist kampanyası; itch.io'da devriye topluluk geri bildirimi.",
      en: "Target audience: slice-of-life and character-drama VN readers. Steam page + free first-chapter demo to drive a wishlist campaign; itch.io build for early community feedback."
    },
    milestones: emptyModule
  },

  strategy4x: {
    category: "strategy",
    icon: "🏰",
    title: { tr: "Hakimiyet Çağı (Uzay 4X Stratejisi)", en: "Age of Dominion (Space 4X Strategy)" },
    concept: {
      tr: "Keşfet, genişle, sömür, yok et prensibiyle çalışan; diplomasi, ekonomi ve savaşın iç içe geçtiği tur bazlı bir uzay imparatorluğu strateji oyunu.",
      en: "A turn-based space empire strategy game built on explore, expand, exploit, exterminate, where diplomacy, economy, and warfare are deeply intertwined systems."
    },
    genrePlatform: { tr: "Turn-Based Strategy (4X) / PC", en: "Turn-Based Strategy (4X) / PC" },
    coreLoop: {
      tr: "Yıldız sistemlerini keşfet → Koloni kur ve üretim zincirini planla → Teknoloji ağacında ilerle, ittifak/anlaşma kur → Sınır anlaşmazlıklarında savaş ya da diplomasi seç → Tur sonunda imparatorluk özetini değerlendirip stratejini ayarla.",
      en: "Scout star systems → Found colonies and plan production chains → Advance the tech tree and negotiate treaties → Choose war or diplomacy at border disputes → Review the end-of-turn empire summary and adjust strategy."
    },
    activeModules: { lore: true, coop: false, risk: true, ui: true, assets: false, monetization: false, techSpecs: true, marketing: false, milestones: true },
    lore: {
      tr: "Galaksiye dağılmış 'Kalıntı' teknolojileri, bin yıl önce çöken tek bir medeniyetin izleri. Her imparatorluk bu mirası kendi çıkarına kullanmaya çalışırken, kalıntıların neden terk edildiğine dair ipuçları yavaş yavaş ortaya çıkar.",
      en: "Scattered 'Relic' technologies across the galaxy are remnants of a single civilization that collapsed a thousand years ago. Every empire races to exploit this legacy, while clues to why it fell surface slowly over the campaign."
    },
    coop: emptyModule,
    risk: {
      tr: "Savaş nüfus ve üretim kaybına yol açar; anlaşma ihlalleri diğer imparatorluklar nezdinde itibarı düşürür. Ekonomik çöküş, isyanlara ve sistem kaybına yol açabilir — imparatorluk küçüle küçüle oyundan tamamen elenebilir.",
      en: "War drains population and production; broken treaties tank reputation with every other empire watching. Economic collapse can trigger rebellions and system loss — an empire can shrink itself entirely out of the game."
    },
    ui: {
      tr: "Katmanlı harita görünümü (kaynak / siyasi nüfuz / askeri konuşlanma), sürükle-bırak filo rota planlama, tur sonu özet paneli ve otomatik rakip istihbarat raporu.",
      en: "Layered map view (resources / political influence / military deployment), drag-and-drop fleet route planning, end-of-turn summary panel with automated rival intelligence briefing."
    },
    assets: emptyModule, monetization: emptyModule,
    techSpecs: {
      tr: "Unity ya da özel C++ motoru, hedef: Windows, orta-yüksek CPU gereksinimi (çok sayıda eşzamanlı AI turu hesaplaması), minimum 16GB RAM önerilir.",
      en: "Unity or custom C++ engine, target: Windows, mid-to-high CPU requirement (heavy simultaneous AI turn computation), 16GB RAM recommended."
    },
    marketing: emptyModule
  },

  puzzlePremium: {
    category: "puzzle",
    icon: "🧩",
    title: { tr: "Sessiz Odalar (Atmosferik Kaçış Bulmacası)", en: "Silent Rooms (Atmospheric Escape Puzzle)" },
    concept: {
      tr: "Her odanın kendine özgü bir mantık dili taşıdığı, diyalog ya da metin kullanmadan tamamen çevresel ipuçlarıyla anlatılan minimalist bir oda-kaçış bulmaca oyunu.",
      en: "A minimalist room-escape puzzle game told entirely through environmental storytelling — no dialogue or text — where each room speaks its own internal logic."
    },
    genrePlatform: { tr: "Puzzle / PC, Mobile, Console", en: "Puzzle / PC, Mobile, Console" },
    coreLoop: {
      tr: "Odaya gir → Çevresel ipuçlarını gözlemleyerek odanın kuralını çöz → Mekanizmayı tetikleyip kapıyı aç → Bir sonraki odada kuralın nasıl evrildiğini keşfet.",
      en: "Enter the room → Observe environmental clues to deduce the room's rule → Trigger the mechanism and open the door → Discover how the rule evolves in the next room."
    },
    activeModules: { lore: false, coop: false, risk: false, ui: true, assets: true, monetization: true, techSpecs: false, marketing: false, milestones: false },
    lore: emptyModule, coop: emptyModule, risk: emptyModule,
    ui: {
      tr: "Tamamen diegetic arayüz — hiçbir metin ya da menü yok; ipucu sistemi üç kademeli olarak sadece isteğe bağlı açılır (fısıltı → işaret → çözüm).",
      en: "Fully diegetic interface — no text or menus at all; a three-tier hint system unlocks only on request (whisper → gesture → solution)."
    },
    assets: {
      tr: "Low-poly minimalist 3D setler, ışık ve gölgeyle anlatılan mekanikler, katmanlı ambient ses tasarımı (nefes, tik-tak, uzak yankılar).",
      en: "Low-poly minimalist 3D sets, mechanics communicated through light and shadow, layered ambient sound design (breathing, ticking, distant echoes)."
    },
    monetization: {
      tr: "Premium tek seferlik satın alma (9-14 USD aralığı). İlk 3 oda ücretsiz demo olarak sunulur; ek 'oda paketleri' DLC olarak planlanıyor.",
      en: "Premium one-time purchase ($9-14 range). The first 3 rooms ship as a free demo; additional 'room pack' DLCs are planned post-launch."
    },
    techSpecs: emptyModule, marketing: emptyModule, milestones: emptyModule
  },

  roguelike: {
    category: "strategy",
    icon: "🎲",
    title: { tr: "Sonsuz İniş (Roguelike Deste İnşası)", en: "Endless Descent (Roguelike Deckbuilder)" },
    concept: {
      tr: "Her koşuda yeniden karılan kartlar ve rölikler üzerinden stratejinizi sıfırdan kurduğunuz, kalıcı ölümün merkezde olduğu bir zindan roguelike deste inşası oyunu.",
      en: "A permadeath-driven dungeon roguelike deckbuilder where your entire strategy is rebuilt from scratch each run through freshly shuffled cards and relics."
    },
    genrePlatform: { tr: "Roguelike Deckbuilder / PC, Mobile", en: "Roguelike Deckbuilder / PC, Mobile" },
    coreLoop: {
      tr: "Kata gir → Kart tabanlı taktik savaşı çöz → Ödül olarak kart/rölik/altın seç → Dallanan kat haritasında rota belirle → Boss'u yen ya da öl, meta-yükseltmelerle yeniden başla.",
      en: "Enter a floor → Resolve tactical card-based combat → Choose a card/relic/gold reward → Chart a route on the branching floor map → Beat the boss or die, then restart with meta-progression upgrades."
    },
    activeModules: { lore: false, coop: false, risk: true, ui: true, assets: false, monetization: true, techSpecs: false, marketing: false, milestones: true },
    lore: emptyModule, coop: emptyModule,
    risk: {
      tr: "Permadeath: ölünce koşu tamamen biter ve o koşuya özel tüm kart/rölik ilerlemesi silinir. Sadece meta-progression kalıcıdır (yeni başlangıç karakterleri, çekirdek kart havuzu genişlemeleri).",
      en: "Permadeath: dying ends the run completely, wiping all run-specific card and relic progress. Only meta-progression persists — new starting characters and expansions to the core card pool."
    },
    ui: {
      tr: "Kart eli görünümü ve enerji/mana göstergesi, sürükle-bırak hedefleme sistemi, node tabanlı kat haritası (savaş/olay/dükkan/dinlenme ikonlarıyla), koşu sonu istatistik özeti.",
      en: "Card hand view with energy/mana meter, drag-and-drop targeting system, node-based floor map (combat/event/shop/rest icons), end-of-run statistics summary."
    },
    assets: emptyModule,
    monetization: {
      tr: "Premium tek seferlik satın alma; kozmetik kart arkası ve karakter skin'leri isteğe bağlı DLC olarak, oynanışı etkilemeyen bir 'kozmetik pazar' modeli.",
      en: "Premium one-time purchase; cosmetic card-back skins and character outfits as optional DLC, following a purely cosmetic marketplace model that never touches gameplay."
    },
    techSpecs: emptyModule, marketing: emptyModule
  },

  hyperCasualMobile: {
    category: "mobile",
    icon: "📱",
    title: { tr: "Tek Dokunuş Kaçışı (Hyper-Casual)", en: "One-Tap Dash (Hyper-Casual)" },
    concept: {
      tr: "Tek parmakla, tek dokunuşla oynanan; oturumları genelde 30 saniyeden kısa süren, ekran kaydına ve viral paylaşıma göre tasarlanmış bir sonsuz koşu oyunu.",
      en: "A single-finger, one-tap endless runner with sessions typically under 30 seconds, designed from the ground up for screen recording and viral sharing."
    },
    genrePlatform: { tr: "Hyper-Casual / Mobile (iOS, Android)", en: "Hyper-Casual / Mobile (iOS, Android)" },
    coreLoop: {
      tr: "Dokun ve zıpla / şerit değiştir → Artan hızda engellerden kaçın, puan/kombo topla → Çarp ve öl → Ödüllü reklam izleyip devam et ya da anında tekrar başla.",
      en: "Tap to jump / switch lanes → Dodge obstacles at escalating speed, chain combos → Crash and die → Watch a rewarded ad to continue, or restart instantly."
    },
    activeModules: { lore: false, coop: false, risk: false, ui: true, assets: false, monetization: true, techSpecs: true, marketing: true, milestones: true },
    lore: emptyModule, coop: emptyModule, risk: emptyModule,
    ui: {
      tr: "Tek buton kontrol, sürtünmesiz anında yeniden başlatma (yükleme ekranı yok), her koşu sonunda otomatik oluşturulan skor paylaşım kartı.",
      en: "Single-button control, zero-friction instant restart (no loading screen), auto-generated score-share card at the end of every run."
    },
    assets: emptyModule,
    monetization: {
      tr: "Ödüllü reklamlar (canlanma ve günlük ödül), her 3 koşuda bir zorunlu geçiş reklamı, tek seferlik 'reklamları kaldır' IAP ve kozmetik karakter skin paketleri.",
      en: "Rewarded ads (revive and daily bonus), a forced interstitial every 3 runs, a one-time 'remove ads' IAP, and cosmetic character skin bundles."
    },
    techSpecs: {
      tr: "Unity, hedef derleme boyutu <150MB, düşük uçlu cihazlarda kararlı 60fps, minimum Android 8 / iOS 13, tek dokunuşluk giriş dışında kontrol şeması yok.",
      en: "Unity, target build size under 150MB, stable 60fps on low-end devices, minimum Android 8 / iOS 13, no control scheme beyond single-tap input."
    },
    marketing: {
      tr: "TikTok/Reels'te 10-15 saniyelik oynanış klipleriyle organik yayılma; UA testleri için Facebook/TikTok Ads, ilk hafta CPI ve D1 retention hedefleri belirlenip iterasyon yapılıyor.",
      en: "Organic reach via 10-15 second gameplay clips on TikTok/Reels; Facebook/TikTok Ads for UA testing, with CPI and D1 retention targets set and iterated on in week one."
    }
  },

  cozySim: {
    category: "puzzle",
    icon: "🌿",
    title: { tr: "Küçük Çiftlik Günlüğü (Rahatlatıcı Simülasyon)", en: "Little Farm Diary (Cozy Sim)" },
    concept: {
      tr: "Baskı hissi olmadan, kendi hızında ilerleyen; ekim, bakım ve komşularla küçük etkileşimler üzerine kurulu, rahatlatıcı bir çiftlik/yaşam simülasyonu.",
      en: "A pressure-free, self-paced cozy farm-life sim built around planting, tending, and small everyday interactions with neighbors."
    },
    genrePlatform: { tr: "Cozy Life Sim / Mobile, PC", en: "Cozy Life Sim / Mobile, PC" },
    coreLoop: {
      tr: "Güne başla, günlük görevleri gözden geçir → Ek, sula, hasat et → Kasabalıyla küçük bir etkileşim kur (hediye/sohbet) → Envanteri düzenle, evi/çiftliği özelleştir → Günü bitir, ilerlemeyi bir sonraki mevsime taşı.",
      en: "Start the day, check the daily to-dos → Plant, water, harvest → Have a small interaction with a townsperson (gift/chat) → Organize inventory, customize house/farm → End the day and carry progress into the next season."
    },
    activeModules: { lore: false, coop: false, risk: false, ui: true, assets: true, monetization: true, techSpecs: false, marketing: false, milestones: false },
    lore: emptyModule, coop: emptyModule, risk: emptyModule,
    ui: {
      tr: "Yumuşak geçişli menüler, sürükle-bırak envanter ve ev dekorasyonu, günlük görev listesi widget'ı, acele hissi yaratmayan zamanlayıcısız gün döngüsü.",
      en: "Soft-transition menus, drag-and-drop inventory and home decoration, a daily to-do widget, and a timer-free day cycle that never rushes the player."
    },
    assets: {
      tr: "Pastel renk paleti, el çizimi karakter portreleri, mevsimsel ortam müzikleri (piyano/akustik ağırlıklı), ambient kuş ve rüzgar sesleri.",
      en: "Pastel color palette, hand-drawn character portraits, seasonal ambient scores (piano/acoustic-led), ambient birdsong and wind sound design."
    },
    monetization: {
      tr: "Ücretsiz oynanış, isteğe bağlı kozmetik paketler (ev dekoru, kıyafet), reklamsız ve tüm içeriğe erişim sunan tek seferlik 'destek paketi' — oynanışı hiçbir şekilde etkilemeyen bir model.",
      en: "Free to play with optional cosmetic packs (home decor, outfits) and a one-time 'supporter pack' that removes ads and unlocks all content — a model that never touches gameplay balance."
    },
    techSpecs: emptyModule, marketing: emptyModule, milestones: emptyModule
  },

  idleClicker: {
    category: "mobile",
    icon: "⛏️",
    title: { tr: "Sessiz Maden (Idle / Artımlı Oyun)", en: "Quiet Mine (Idle / Incremental)" },
    concept: {
      tr: "Oyuncu kapalıyken de ilerleyen, katmanlı yükseltmeler ve prestij sistemiyle uzun vadeli ilerleme hissi veren bir mobil artımlı oyun.",
      en: "A mobile incremental game that keeps progressing while the player is away, with layered upgrades and a prestige system that sustains long-term progress."
    },
    genrePlatform: { tr: "Idle / Incremental / Mobile, Web", en: "Idle / Incremental / Mobile, Web" },
    coreLoop: {
      tr: "Dokun ya da bekle → Kaynak topla → Yükselt → Otomasyonu aç → Prestij ile sıfırla ve çarpanla güçlen.",
      en: "Tap or wait → Collect resources → Upgrade → Unlock automation → Prestige to reset and grow stronger with a multiplier."
    },
    activeModules: { lore: false, coop: false, risk: false, ui: false, assets: false, monetization: true, techSpecs: true, marketing: false, milestones: false },
    monetization: {
      tr: "Ödüllü reklamla 2x kazanç ve çevrimdışı ödülü katlama; tek seferlik 'reklamları kaldır'. Hız artırıcı IAP'ler dengeyi bozmayacak şekilde sınırlı tutulur.",
      en: "Rewarded ads for 2x earnings and doubled offline rewards, plus a one-time 'remove ads'. Speed-boost IAPs stay limited so they never break the balance."
    },
    techSpecs: {
      tr: "Unity ya da web (JS). Çevrimdışı ilerleme için yerel zaman hesabı, büyük sayıların biçimlendirilmesi (1.2e15) ve kayıt bütünlüğü ayrıca ele alınmalı.",
      en: "Unity or web (JS). Offline progress needs local-time handling, large-number formatting (1.2e15) and save integrity, which should be planned separately."
    }
  },

  gameJam: {
    category: "jam",
    icon: "⏱️",
    title: { tr: "48 Saat (Game Jam Prototipi)", en: "48 Hours (Game Jam Prototype)" },
    concept: {
      tr: "Tek bir mekaniğe odaklanan, 48 saatte bitirilebilecek kadar küçük bir oyun. Kapsamı kısıtlamak, bitirmenin tek yolu.",
      en: "A game small enough to finish in 48 hours, built around a single mechanic. Cutting scope is the only way to finish."
    },
    genrePlatform: { tr: "Prototip / Web, PC (itch.io)", en: "Prototype / Web, PC (itch.io)" },
    coreLoop: {
      tr: "Tek mekanik → Tek seviye → Tek başarı ya da başarısızlık durumu → Anında tekrar.",
      en: "One mechanic → One level → One win or fail state → Instant retry."
    },
    activeModules: { lore: false, coop: false, risk: false, ui: false, assets: false, monetization: false, techSpecs: false, marketing: false, milestones: false }
  }
};

// one-pager fields are in onePagers.js
Object.entries(onePagers).forEach(([key, extra]) => Object.assign(presets[key], extra));

// preset key -> editor field, where the names differ
const FIELD_MAP = { concept: 'summary', ui: 'interface', assets: 'art' };
// preset module -> group it opens
const MODULE_MAP = { lore: 'story', coop: 'multiplayer', risk: 'risk', monetization: 'business', techSpecs: 'tech', marketing: 'marketing' };
const SKIP = new Set(['category', 'icon', 'activeModules', 'milestones']);

// skeleton keeps only the genre line and opens the sections that fit
export function presetToState(preset, lang, skeleton = false) {
  const values = {};
  Object.entries(preset).forEach(([key, val]) => {
    if (SKIP.has(key)) return;
    if (skeleton && key !== 'genrePlatform') return;
    values[FIELD_MAP[key] || key] = val[lang] || val.en || '';
  });
  const enabled = {};
  Object.entries(MODULE_MAP).forEach(([mod, group]) => {
    const on = Boolean(preset.activeModules?.[mod]);
    enabled[group] = skeleton ? on : on && Boolean(preset[mod]?.[lang] || preset[mod]?.en);
  });
  return { values, enabled };
}
