// roadmaps assume a team of 1-3

const t = (tr, en) => ({ tr, en });

export const onePagers = {
  lethalCoop: {
    mantra: t("Kaotik, komik ve ürpertici bir hurda avı: kota dolmadan kimse eve dönmez.", "A chaotic, darkly funny scrap run where nobody goes home until the quota is met."),
    pillars: t("Gerilim. Takım kaosu. Açgözlülük.", "Tension. Squad chaos. Greed."),
    audience: t("Arkadaş grubuyla oynayan 18-30 yaş PC oyuncuları; Lethal Company, Content Warning ve Phasmophobia sevenler.", "PC players aged 18-30 who play in friend groups and enjoy Lethal Company, Content Warning and Phasmophobia."),
    features: t(
      "• 1-4 kişilik yakınlık ses sohbeti ve kısa menzilli telsiz\n• Her seferinde rastgele üretilen uydu haritaları\n• Zamanla kötüleşen tehdit seviyesi\n• Ölen oyuncunun eşyaları olduğu yerde kalır",
      "• 1-4 player proximity voice chat and short-range walkies\n• Procedurally generated moons every run\n• A threat level that worsens over time\n• A dead player's loot stays where they fell"
    ),
    art: t(
      "Düşük çözünürlüklü PS1 tarzı 3D, grenli filtre, loş fenerlerle aydınlanan koridorlar; sınırlı renk paleti (pas, soluk yeşil, kırmızı uyarı ışıkları).",
      "Low-resolution PS1-style 3D, film grain, corridors lit by dim flashlights; a limited palette of rust, sickly green and red warning lights."
    ),
    music: t(
      "Çoğunlukla sessizlik ve ortam sesi: metal gıcırtıları, uzak adımlar, kalp atışı. Müzik yalnızca tehlike anında yükselir; sessizlik gerilimin kendisidir.",
      "Mostly silence and ambience: creaking metal, distant footsteps, a heartbeat. Music only swells when danger arrives; the silence is the tension."
    ),
    roadmap: t(
      "2-3 kişilik ekip varsayımıyla. Ay 1-2: Tek uydu, tek tehdit, 2 oyunculu prototip. Ay 3-5: 3 uydu, ekipman, yükseltmeler, ağ kodunun oturması. Ay 6: Kapalı test (Steam Playtest); sonuca göre kapsamı kırp. Ay 7-9: Cilalama, Steam sayfası, wishlist kampanyası. Çıkış kriteri: yeterli wishlist olmadan lansman yok.",
      "Assumes a team of 2-3. Month 1-2: One moon, one threat, 2-player prototype. Month 3-5: 3 moons, gear, upgrades, stabilize netcode. Month 6: Closed test (Steam Playtest); cut scope based on results. Month 7-9: Polish, Steam page, wishlist campaign. Launch criterion: no launch without enough wishlists."
    )
  },

  actionPlatformer: {
    mantra: t("Her ölüm bir ders, her dash bir imza.", "Every death is a lesson, every dash is a signature."),
    pillars: t("Hız. Hassasiyet. Akış.", "Speed. Precision. Flow."),
    audience: t("Celeste, Hollow Knight ve Dead Cells oynayan, speedrun'a meraklı platformer oyuncuları.", "Platformer players who enjoy Celeste, Hollow Knight and Dead Cells and have a taste for speedrunning."),
    features: t(
      "• Milisaniye hassasiyetinde dash-kılıç sistemi\n• Her bölge sonunda boss ve S-D hız derecesi\n• Anında yeniden doğuş, yükleme ekranı yok\n• Speedrun için dahili zamanlayıcı ve hayalet kayıt",
      "• Millisecond-tight dash-and-slash system\n• A boss and an S-to-D speed grade at the end of every district\n• Instant respawn with no loading screens\n• Built-in timer and ghost replay for speedrunners"
    ),
    music: t(
      "Synthwave ve darkwave; müzik bölümün temposunu taşır, boss'ta katman ekleyerek yoğunlaşır. Dash ve vuruş sesleri ritmik hissettirir.",
      "Synthwave and darkwave; the music carries each level's tempo and adds layers in boss fights. Dash and hit sounds feel rhythmic."
    ),
    roadmap: t(
      "Ay 1-2: Hareket ve dash hissi tek odada cilalanır; bu oyunun kalbidir, hissi iyi değilse ilerlenmez. Ay 3-6: 3 bölge ve 3 boss. Ay 7: Demo ve Steam Next Fest hazırlığı. Ay 8-10: Kalan bölgeler, cilalama, lansman.",
      "Month 1-2: Polish movement and dash feel in a single room; this is the heart of the game, so don't move on until it feels right. Month 3-6: 3 districts and 3 bosses. Month 7: Demo and Steam Next Fest prep. Month 8-10: Remaining districts, polish, launch."
    )
  },

  survivalCraft: {
    mantra: t("Adadan çıkmanın tek yolu, kendi teknenizi elinizle inşa etmek.", "The only way off the island is to build your own boat, by hand."),
    pillars: t("Hayatta kalma. Keşif. Emek.", "Survival. Discovery. Effort."),
    audience: t("Valheim, Subnautica ve The Forest tarzı oyunları arkadaşlarıyla oynayan 16-35 yaş PC oyuncuları.", "PC players aged 16-35 who play Valheim, Subnautica and The Forest with friends."),
    features: t(
      "• Açlık, susuzluk ve sıcaklık dengesi\n• 2-4 kişilik ortak üs inşası\n• Gemi parçalarını bulup tekneyi aşama aşama onarma\n• Hava durumu ve gece-gündüz tehlikesi",
      "• Hunger, thirst and warmth to balance\n• Shared base building for 2-4 players\n• Find ship parts and repair the boat stage by stage\n• Weather and a day/night threat cycle"
    ),
    music: t(
      "Dalga, rüzgar ve kuş sesleri ana ses katmanı; müzik yalnızca keşif anlarında ve gemi aşamaları tamamlandığında, sade akustik gitarla.",
      "Waves, wind and birdsong are the main layer; music only appears during discovery and when a ship stage is finished, played on sparse acoustic guitar."
    ),
    roadmap: t(
      "Ay 1-3: Tek ada, temel üretim ve hayatta kalma döngüsü. Ay 4-6: Co-op ve üs inşası; ağ kodu en riskli parça, bu yüzden erken test edilir. Ay 7-9: Gemi onarım hedefi ve yaratıklar. Ay 10-12: Early Access hazırlığı.",
      "Month 1-3: One island, core crafting and survival loop. Month 4-6: Co-op and base building; netcode is the riskiest part, so test it early. Month 7-9: Ship repair goal and creatures. Month 10-12: Early Access prep."
    )
  },

  rpgAdventure: {
    mantra: t("Her seçim bir krallığın kaderini değiştirir.", "Every choice changes the fate of a kingdom."),
    pillars: t("Seçimin ağırlığı. Keşif. Siyasi entrika.", "Weight of choice. Exploration. Political intrigue."),
    audience: t("Disco Elysium, Pillars of Eternity ve Baldur's Gate gibi anlatı ağırlıklı RPG'leri sevenler.", "Players of story-heavy RPGs like Disco Elysium, Pillars of Eternity and Baldur's Gate."),
    features: t(
      "• 5 krallık ve karşılıklı hizip itibar sistemi\n• Ton bazlı diyalog çarkı\n• Geri dönüşü olmayan sonuçlar\n• İzometrik keşif ve yoldaş karakterler",
      "• Five kingdoms and a zero-sum faction reputation system\n• Tone-based dialogue wheel\n• Consequences that cannot be undone\n• Isometric exploration and companions"
    ),
    music: t(
      "Orkestral leitmotif sistemi: her hizbin kendi teması, seçimlere göre değişen yorumlarla. Savaşta tempo artar, diyalogda müzik sadeleşir.",
      "Orchestral leitmotifs: each faction has its own theme, reworked by your choices. Tempo rises in combat and thins out during dialogue."
    ),
    roadmap: t(
      "Ay 1-4: Prototip, diyalog sistemi ve hizip mantığı. Ay 5-8: İlk bölgenin tam içeriği (vertical slice). Ay 9: Oyuncu testi; sonuca göre bölge sayısını 5'ten 3'e indirmeyi değerlendir. Ay 10-24: Kalan bölgeler ve cilalama. Küçük ekip için içerik hacmi en büyük risktir.",
      "Month 1-4: Prototype, dialogue system and faction logic. Month 5-8: Full content for the first region (vertical slice). Month 9: Player testing; consider cutting from 5 regions to 3 based on results. Month 10-24: Remaining regions and polish. Content volume is the biggest risk for a small team."
    )
  },

  visualNovel: {
    mantra: t("Bir yazın içinde, eski dostlarla yeniden tanışmanın sessiz hikayesi.", "A quiet story about getting to know old friends again over one summer."),
    pillars: t("Sıcaklık. Nostalji. Seçimin duygusal bedeli.", "Warmth. Nostalgia. The emotional cost of choice."),
    audience: t("Slice-of-life görsel romanları ve karakter draması seven, hikaye odaklı oyuncular.", "Story-first players who like slice-of-life visual novels and character drama."),
    features: t(
      "• 3 karakter rotası ve çoklu son\n• Ruh haline göre değişen katmanlı sprite'lar\n• Geri sarma, hızlı geçiş ve seçim ağacı özeti\n• Haftalık zaman atlamasıyla ilerleyen yaz",
      "• Three character routes and multiple endings\n• Layered sprites that shift with mood\n• Rewind, fast-forward and a choice-tree summary\n• A summer that moves in weekly time-skips"
    ),
    music: t(
      "Akustik ve lo-fi ambient; yağmur ve deniz sesi katmanları. Her karakterin sade bir piyano ya da gitar teması var; duygusal sahnelerde müzik çekilir, yalnızca ortam sesi kalır.",
      "Acoustic and lo-fi ambient with layered rain and ocean sound. Each character has a simple piano or guitar theme; in emotional scenes the music drops out and only ambience remains."
    ),
    roadmap: t(
      "Ay 1: Senaryo iskeleti ve karakter rotaları. Ay 2-4: Yazım, sprite ve arka plan üretimi. Ay 5: Ücretsiz ilk bölüm demosu, itch.io ve Steam sayfası. Ay 6-8: Kalan bölümler ve ses. Ay 9: Lansman. İş yükünün çoğu yazı ve görsel üretimdir; ses en son bağlanır.",
      "Month 1: Script outline and character routes. Month 2-4: Writing, sprite and background production. Month 5: Free first-chapter demo, itch.io and Steam page. Month 6-8: Remaining chapters and audio. Month 9: Launch. Most of the workload is writing and art; audio is wired in last."
    )
  },

  strategy4x: {
    mantra: t("Galaksiyi fethetmenin yolu savaştan çok diplomasiden geçer.", "Conquering the galaxy takes more diplomacy than war."),
    pillars: t("Derinlik. Diplomasi. Uzun vadeli planlama.", "Depth. Diplomacy. Long-term planning."),
    audience: t("Stellaris, Civilization ve Endless Space oynayan, uzun oturumlardan hoşlanan strateji oyuncuları.", "Strategy players who play Stellaris, Civilization and Endless Space and enjoy long sessions."),
    features: t(
      "• Turn-based galaksi, koloniler ve üretim zincirleri\n• Diplomasi, anlaşma ve itibar sistemi\n• Teknoloji ağacı\n• Katmanlı harita ve rakip istihbarat raporu",
      "• Turn-based galaxy, colonies and production chains\n• Diplomacy, treaties and reputation\n• A tech tree\n• Layered map and rival intelligence briefing"
    ),
    art: t(
      "Temiz ve okunaklı 2D yıldız haritası; her imparatorluk için ayırt edilebilir renk ve sembol. Arayüz bilgi yoğun, sanat bilgiyi gölgelememeli.",
      "A clean, readable 2D star map with a distinct color and symbol per empire. The interface is information-dense and the art must never bury the information."
    ),
    music: t(
      "Ambient synth ve geniş pad'ler; keşifte sakin, savaşta daha ritmik. Müzik uzun oturumlarda yormamalı ve tur temposunu bozmamalı.",
      "Ambient synth and wide pads; calm while exploring, more rhythmic in war. Music must not tire players over long sessions or disturb the turn pace."
    ),
    roadmap: t(
      "Ay 1-4: Harita üretimi, tur sistemi ve temel ekonomi. Ay 5-9: Diplomasi, teknoloji ağacı ve rakip AI. Ay 10-14: Dengeleme ve geç oyun. Ay 15: Early Access. AI ve denge en pahalı kısımdır; küçük başla (az gezegen, az imparatorluk).",
      "Month 1-4: Map generation, turn system and core economy. Month 5-9: Diplomacy, tech tree and rival AI. Month 10-14: Balancing and late game. Month 15: Early Access. AI and balance are the costliest parts; start small (few planets, few empires)."
    )
  },

  puzzlePremium: {
    mantra: t("Tek kelime yok, sadece odanın kendi mantığı.", "Not a single word, only the logic of the room."),
    pillars: t("Sezgi. Sessizlik. Keşif sevinci.", "Intuition. Silence. The joy of figuring it out."),
    audience: t("The Witness, Superliminal ve Monument Valley sevenler; kısa ve sakin oturumlar arayanlar.", "Fans of The Witness, Superliminal and Monument Valley who want short, calm sessions."),
    features: t(
      "• Metin ve diyalog yok, yalnızca çevresel ipuçları\n• Her odanın kendine özgü kuralı\n• Üç kademeli, isteğe bağlı ipucu sistemi\n• Kısa oturumlara uygun odalar",
      "• No text or dialogue, only environmental clues\n• Every room has its own rule\n• A three-tier, optional hint system\n• Rooms sized for short sessions"
    ),
    music: t(
      "Neredeyse müziksiz: ortam sesi, nefes, tik-tak ve uzak yankılar. Oda çözüldüğünde tek bir temiz nota ödül olur.",
      "Almost no music: ambience, breathing, ticking and distant echoes. When a room is solved, a single clean note is the reward."
    ),
    roadmap: t(
      "Ay 1: 3 odalık prototip; kural fikrinin işe yaradığını test et. Ay 2-5: 15-20 oda. Ay 6: Test oyuncularıyla çözülebilirlik ve ipucu dengesi. Ay 7: Steam sayfası ve demo. Ay 8: Lansman. Her oda tek tek tasarlanıp test edilmeli; oda sayısı kaliteyi geçmemeli.",
      "Month 1: A 3-room prototype; test that the rule idea works. Month 2-5: 15-20 rooms. Month 6: Testers check solvability and hint balance. Month 7: Steam page and demo. Month 8: Launch. Each room is designed and tested individually; room count should never outrun quality."
    )
  },

  roguelike: {
    mantra: t("Her koşu yeni bir deste, her ölüm yeni bir ders.", "Every run is a new deck, every death a new lesson."),
    pillars: t("Tekrar oynanabilirlik. Taktik derinlik. Risk.", "Replayability. Tactical depth. Risk."),
    audience: t("Slay the Spire ve Balatro oynayan, deste kurmayı ve optimizasyonu seven oyuncular.", "Players of Slay the Spire and Balatro who love deckbuilding and optimizing."),
    features: t(
      "• Her koşuda yeniden karılan kart ve rölik havuzu\n• Dallanan kat haritası\n• Kalıcı meta ilerleme\n• Koşu sonu istatistik özeti",
      "• Cards and relics reshuffled every run\n• A branching floor map\n• Persistent meta-progression\n• End-of-run statistics"
    ),
    art: t(
      "Okunaklı kart tasarımı ve sade, güçlü ikonografi; stilize 2D karakter ve düşman illüstrasyonları. Kartlar tek bakışta anlaşılmalı.",
      "Readable card design and bold, simple iconography; stylized 2D character and enemy illustrations. A card must be understood at a glance."
    ),
    music: t(
      "Dinamik tempolu müzik: harita sakin, savaş ritmik, boss çok katmanlı. Kart oynama sesleri tatmin edici olmalı.",
      "Dynamic music: calm on the map, rhythmic in combat, layered for bosses. Playing a card has to sound satisfying."
    ),
    roadmap: t(
      "Ay 1: Kart ve savaş sistemi prototipi (önce kâğıt üzerinde de test et). Ay 2-4: İlk 3 boss, 40 kart, kat haritası. Ay 5: Kapalı beta ve dengeleme. Ay 6-8: 100 kart, ikinci karakter, meta ilerleme. Ay 9: Early Access.",
      "Month 1: Card and combat prototype (playtest it on paper first). Month 2-4: First 3 bosses, 40 cards, floor map. Month 5: Closed beta and balancing. Month 6-8: 100 cards, a second character, meta-progression. Month 9: Early Access."
    )
  },

  hyperCasualMobile: {
    mantra: t("Tek dokunuş, bir saniyelik karar, bitmeyen 'bir daha'.", "One tap, a one-second decision, and an endless 'one more try'."),
    pillars: t("Anında. Bağımlılık yapıcı. Paylaşılabilir.", "Instant. Compulsive. Shareable."),
    audience: t("13-35 yaş mobil oyuncular; kısa sürede oynayıp bırakanlar, TikTok'ta oyun klipleri izleyenler.", "Mobile players aged 13-35 who play in short bursts and watch gameplay clips on TikTok."),
    features: t(
      "• Tek parmak, tek dokunuş\n• Yükleme ekranı olmayan anında yeniden başlatma\n• Ödüllü reklamla devam etme\n• Otomatik üretilen skor paylaşım kartı",
      "• One finger, one tap\n• Instant restart with no loading screen\n• Continue after a rewarded ad\n• Auto-generated score-share card"
    ),
    art: t(
      "Düz renk, geometrik şekiller ve yüksek kontrast; küçük ekranda okunur. Ekran kaydında dikkat çekecek tek bir ayırt edici renk.",
      "Flat color, geometric shapes and high contrast that reads on a small screen. One signature color that stands out in screen recordings."
    ),
    music: t(
      "Kısa, akılda kalıcı bir döngü; her dokunuşta ritme oturan ses geri bildirimi. Ses kapalıyken de keyifli olmalı.",
      "A short, catchy loop with tap feedback that sits on the beat. It has to be fun with the sound off, too."
    ),
    roadmap: t(
      "Hafta 1-2: Çekirdek prototip ve tek mekanik testi. Hafta 3: Playtest ve UA testi (500-1000 kurulum). Hafta 4: Soft launch (1-2 pazar). Hafta 6: Sonuçlara göre global lansman ya da pivot kararı.",
      "Week 1-2: Core prototype and single-mechanic test. Week 3: Playtest and UA test (500-1,000 installs). Week 4: Soft launch (1-2 markets). Week 6: Global launch or pivot decision based on results."
    )
  },

  cozySim: {
    mantra: t("Acele yok, kaygı yok; küçük bir çiftlikte güzel bir gün.", "No rush, no worry, just a good day on a small farm."),
    pillars: t("Huzur. Sıcaklık. Küçük başarılar.", "Calm. Warmth. Small wins."),
    audience: t("Stardew Valley ve Animal Crossing sevenler; stres atmak için oynayan geniş bir yaş aralığı.", "Fans of Stardew Valley and Animal Crossing, across a wide age range, who play to unwind."),
    features: t(
      "• Zamanlayıcısız, baskısız gün döngüsü\n• Ekim, bakım ve hasat\n• Komşularla küçük etkileşimler\n• Ev ve çiftlik dekorasyonu",
      "• A timer-free, pressure-free day cycle\n• Planting, tending and harvesting\n• Small interactions with neighbors\n• Home and farm decoration"
    ),
    music: t(
      "Mevsime göre değişen piyano ve akustik parçalar, kuş ve rüzgar sesleri. Tekrar etse de yormayan kısa döngüler.",
      "Seasonal piano and acoustic pieces with birdsong and wind. Short loops that don't tire the ear when they repeat."
    ),
    roadmap: t(
      "Ay 1-3: Ekim ve hasat döngüsü, tek mevsim. Ay 4-8: Komşular, hediye sistemi, 4 mevsim. Ay 9-12: Dekorasyon, kayıt sistemi, cilalama. Ay 13: Lansman. İçerik hacmi büyüktür; ilk sürümde tek mevsim ve 3 komşu yeterli sayılabilir.",
      "Month 1-3: Planting and harvest loop, one season. Month 4-8: Neighbors, gifting, all 4 seasons. Month 9-12: Decoration, save system, polish. Month 13: Launch. Content volume is large; one season and 3 neighbors can be enough for a first release."
    )
  },

  idleClicker: {
    mantra: t("Ekran kapalıyken bile büyüyen bir şey.", "Something that keeps growing even when the screen is off."),
    pillars: t("Tatmin. Sürekli ilerleme. Büyüyen sayılar.", "Satisfaction. Constant progress. Growing numbers."),
    audience: t("Cookie Clicker, Adventure Capitalist ve Egg Inc. sevenler; gün içinde kısa kontrollerle oynayan mobil oyuncular.", "Fans of Cookie Clicker, Adventure Capitalist and Egg Inc. who play mobile in short check-ins during the day."),
    features: t(
      "• Çevrimdışı kazanç\n• Katmanlı yükseltme ağacı\n• Prestij: sıfırla ve kalıcı çarpanla güçlen\n• Kısa günlük hedefler",
      "• Offline earnings\n• A layered upgrade tree\n• Prestige: reset for a permanent multiplier\n• Short daily goals"
    ),
    interface: t(
      "Tek elle oynanabilen dikey arayüz; büyük dokunma alanları, tüm kritik bilgi tek ekranda.",
      "A one-handed portrait layout with large tap targets and all critical info on one screen."
    ),
    art: t(
      "Sade, canlı renkli vektör ikonlar; sayılar ve ilerleme çubukları öne çıkar. Her yükseltmede küçük ama tatmin edici bir animasyon.",
      "Simple, vivid vector icons with numbers and progress bars up front. Every upgrade gets a small but satisfying animation."
    ),
    music: t(
      "Rahatlatıcı ambient döngü; satın alma ve yükseltme seslerinde artan tonlar. Müzik ve ses efektleri ayrı kapatılabilir.",
      "A relaxing ambient loop with rising tones on purchases and upgrades. Music and sound effects can be muted separately."
    ),
    roadmap: t(
      "Hafta 1-2: Tek kaynak, 5 yükseltme, çevrimdışı kazanç. Hafta 3-4: Prestij ve denge tablosu (önce elektronik tabloda kur, sonra kodla). Hafta 5-6: Reklam entegrasyonu ve soft launch. Hafta 7+: D1/D7 retention sonuçlarına göre denge ve içerik.",
      "Week 1-2: One resource, 5 upgrades, offline earnings. Week 3-4: Prestige and a balance sheet (build it in a spreadsheet first, then code it). Week 5-6: Ad integration and soft launch. Week 7+: Balance and content driven by D1/D7 retention."
    )
  },

  gameJam: {
    mantra: t("Tek fikir, tek mekanik, bitmiş bir oyun.", "One idea, one mechanic, a finished game."),
    pillars: t("Basit. Net. Bitirilmiş.", "Simple. Clear. Finished."),
    audience: t("Jam katılımcıları ve itch.io oyuncuları; kısa, tek oturumluk deneyim arayanlar.", "Jam participants and itch.io players looking for a short, single-sitting experience."),
    features: t(
      "• Jam temasına yorum getiren tek bir mekanik\n• 5 dakikayı geçmeyen oynanış\n• Anlaşılır tek bir kontrol şeması",
      "• A single mechanic that comments on the jam theme\n• Under five minutes of play\n• One clear control scheme"
    ),
    interface: t(
      "Klavye ve fare ya da tek tuş. Eğitim ekranı yok; oyun kendini 10 saniyede anlatmalı.",
      "Keyboard and mouse, or a single button. No tutorial screen; the game has to explain itself in ten seconds."
    ),
    art: t(
      "Hazır paket ya da basit şekiller, tutarlı bir palet (4-5 renk). Sanata toplam 6 saatten fazla ayırma.",
      "A ready-made pack or simple shapes with a consistent 4-5 color palette. Don't spend more than six hours total on art."
    ),
    music: t(
      "Tek bir hazır ya da jam için üretilmiş döngü; ses efektleri bfxr/sfxr ile.",
      "One ready-made or jam-made loop; sound effects made with bfxr/sfxr."
    ),
    roadmap: t(
      "Saat 0-4: Tema, tek mekanik, kâğıt prototip. Saat 4-24: Oynanabilir çekirdek. Saat 24-40: Seviye, geri bildirim, ses. Saat 40-46: Hata ayıklama, itch.io sayfası, ekran görüntüleri. Saat 46-48: Yükle ve gönder. Kural: 24. saatte çekirdek eğlenceli değilse mekaniği değiştir.",
      "Hour 0-4: Theme, single mechanic, paper prototype. Hour 4-24: Playable core. Hour 24-40: Level, feedback, audio. Hour 40-46: Bug fixing, itch.io page, screenshots. Hour 46-48: Upload and submit. Rule: if the core isn't fun by hour 24, change the mechanic."
    )
  }
};
