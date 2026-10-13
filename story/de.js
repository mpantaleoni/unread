// Unread — Geschichte auf Deutsch. Gleiche Struktur wie en.js, nur die Texte sind übersetzt.
window.STORY = window.STORY || {};
window.STORY.de = {
  ui: {
    title: "Unread",
    tagline: "Ein Rätsel im EUMETSAT Summer Camp",
    newGame: "Neues Spiel",
    continue: "Weiterspielen",
    endings: "Enden",
    endingsFound: "{n}/{total} Enden gefunden",
    whoAreYou: "Wer bist du?",
    pickAvatar: "Wähle dein Chat-Bild",
    start: "Los geht's",
    next: "Weiter",
    notebook: "Notizbuch",
    noClues: "Noch nichts. Halt die Augen offen.",
    close: "Schließen",
    menu: "Menü",
    backToTitle: "Zurück zum Titel",
    playAgain: "Nochmal spielen",
    oneMore: "Moment… eine Sache noch",
    endingUnlocked: "Ende freigeschaltet",
    locked: "???",
    timeLeft: "Zeit bis zum Abendessen",
    visited: "Besucht",
    resetProgress: "Gesamten Fortschritt löschen",
    resetConfirm: "Gespeichertes Spiel und alle Enden löschen?",
    language: "Sprache",
    soon: "bald verfügbar",
    tapToSkip: "Tippen zum Überspringen",
    clueAdded: "Neuer Hinweis: {clue}",
    typing: "schreibt…"
  },

  characters: {
    margot:   { name: "Margot",   emoji: "📚" },
    anouk:    { name: "Anouk",    emoji: "🎨" },
    julie:    { name: "Julie",    emoji: "👩‍🍳" },
    mauro:    { name: "Mauro",    emoji: "🧢" },
    keo:      { name: "Keo",      emoji: "😎" },
    johannes: { name: "Johannes", emoji: "🎧" },
    unknown:  { name: "Unbekannt", emoji: "❔" }
  },

  heroes: {
    margot: { blurb: "Spielt Handball. Liest jeden Tag einen Krimi." },
    anouk:  { blurb: "Basketball, Stricken, Malen und ein perfekter Stil." }
  },

  avatars: ["📚", "🎨", "🤾‍♀️", "🏀", "🧶", "👗", "🌻", "🦊"],

  chatName: "Hütte 4 + Freunde 🏕️",

  clues: {
    outside:   { icon: "🌙", name: "Draußen im Sturm",          text: "Jemand hat gehört, wie Johannes in der Sturmnacht klatschnass zurückkam." },
    canoe:     { icon: "🛶", name: "Kanu Nr. 7",                text: "Gerissen und unter einer Plane im Bootshaus versteckt. Jemand ist im Dunkeln gegen Felsen gefahren." },
    prints:    { icon: "👟", name: "Fußspuren mit Sternen",     text: "Vom Bootshaus bis zur Hintertür des Ladens. Keos Turnschuhe haben Sterne auf der Sohle." },
    whistle:   { icon: "🎵", name: "Die gepfiffene Melodie",    text: "Julie hat den Dieb pfeifen hören. Keo pfeift diese Melodie jeden Morgen." },
    pricelist: { icon: "📄", name: "Kanu-Preisliste",           text: "Aus einem Katalog gerissen, 480 € rot eingekreist. Gefunden im Mülleimer neben Keos Bett." },
    jacket:    { icon: "🧥", name: "Johannes' nasse Jacke",     text: "Dunkelblau und noch feucht. Aber sein gelber Poncho wurde nie ausgepackt." },
    alibi:     { icon: "📞", name: "Johannes' Geheimnis",       text: "Er war während des Sturms auf dem Hügel und hat zu Hause angerufen. Er hat Heimweh." },
    silence:   { icon: "🔕", name: "Funkstille zur Mittagszeit", text: "Unbekannt war genau dann still, als in der Küche am meisten los war." },
    picnic:    { icon: "🧺", name: "Der Korb",                  text: "Unbekannt unterschreibt jede Nachricht mit 🧺. Genau wie die Tafel mit 'Picknick am Freitag'." },
    phone:     { icon: "📱", name: "Das Ersatzhandy",           text: "Das Ersatzhandy des Camps, in der Fundkiste der Küche, eingeloggt in eurem Gruppenchat." }
  },
  keyClues: ["canoe", "prints", "whistle", "pricelist"],
  secretClues: ["silence", "picnic", "phone"],

  endings: {
    detective: { icon: "🔍", title: "Die Detektivin" },
    wrong:     { icon: "💔", title: "Falscher Verdacht" },
    second:    { icon: "🤝", title: "Eine zweite Chance" },
    lonewolf:  { icon: "🐺", title: "Einzelgängerin" },
    secret:    { icon: "🧺", title: "Es war Julie" }
  },

  start: "c1_campfire",

  scenes: {
    // ───────── Kapitel 1: Die letzte Campwoche ─────────
    c1_campfire: {
      art: "🔥", place: "Lagerfeuer · Sonntagabend",
      lines: [
        "Es ist die letzte Woche im EUMETSAT Summer Camp, und das Lagerfeuer knistert, als wüsste es das.",
        { m: "Margot hat den Sommer damit verbracht, auf dem Sportplatz Handballspiele zu gewinnen und unter der großen Kiefer Krimis zu lesen. Diese Woche ist sie schon beim dritten.",
          a: "Anouk hat den Sommer damit verbracht, auf dem alten Basketballplatz Körbe zu werfen, den See im Sonnenuntergang zu malen und einen Schal zu stricken, den im Juli niemand braucht." },
        "Ihre Schwester {sis} sitzt eng neben ihr auf der Baumstammbank und klaut ihr die Marshmallows.",
        ["mauro", "Okay, Leute! Große Ankündigung!"],
        "Mauro, der Betreuer, klettert auf einen Baumstumpf. Der wackelt. Er tut so, als ob nicht.",
        ["mauro", "Samstagabend ist… LATERNENNACHT! Musik, Essen und hundert Laternen über dem See!"],
        "Alle jubeln. Keo, der mit buchstäblich jedem befreundet ist, trommelt einen Wirbel auf einer Kühlbox.",
        ["keo", "Beste. Nacht. Des. Sommers!"],
        "Am Rand des Kreises lächelt Johannes, der seinen ersten Sommer hier verbringt, still vor sich hin und zieht seinen Hoodie enger. Er bleibt meistens für sich.",
        ["mauro", "Und: Die Satelliten sagen für diese Woche einen Sturm voraus. Die Satelliten irren sich nie. Ich irre mich oft. Hört auf die Satelliten."],
        ["sis", "{hero}. Das wird die beste Woche überhaupt."]
      ],
      go: "c1_breakfast"
    },

    c1_breakfast: {
      art: "🥞", place: "Speisesaal · Montagmorgen",
      lines: [
        "Das Frühstück im Speisesaal ist laut, klebrig und riecht nach Pfannkuchen.",
        "Julie leitet die Küche und den kleinen Camp-Laden hinten im Saal. Bei matschigen Schuhen ist sie streng, bei allem anderen urkomisch.",
        ["julie", "Die Pfannkuchen haben heute die Form von Satelliten. Sagt mir nicht, dass sie wie Kartoffeln aussehen. Ich weiß es."],
        "Dann: KRACH. Ein ganzes Tablett Pfannkuchen rutscht von der Theke auf den Boden. Ein paar lachen. Jemand klatscht."
      ],
      choices: [
        { t: "Julie beim Aufsammeln helfen", fx: { kindness: 1, julie: 1 }, go: "c1_breakfast_help" },
        { t: "Mit den anderen lachen", go: "c1_breakfast_laugh" }
      ]
    },
    c1_breakfast_help: {
      art: "🥞", place: "Speisesaal · Montagmorgen",
      lines: [
        "{hero} kniet sich hin und stapelt die Pfannkuchen zurück aufs Tablett.",
        ["julie", "Danke, meine Liebe. Du hast eine glänzende Zukunft in der Pfannkuchenrettung."],
        "Sie zwinkert und legt {hero} einen extra Pfannkuchen auf den Teller.",
        ["julie", "Küchenregel: Wer hilft, kriegt Nachschlag. Und am Freitag: PICKNICK. Ich plane schon den Korb."]
      ],
      go: "c1_lake"
    },
    c1_breakfast_laugh: {
      art: "🥞", place: "Speisesaal · Montagmorgen",
      lines: [
        "{hero} lacht. Es IST ja auch irgendwie lustig.",
        "Julie hebt eine Augenbraue, fegt die Pfannkuchen zusammen und sagt kein Wort. Aber Köchinnen merken sich Gesichter. Köchinnen merken sich immer Gesichter."
      ],
      go: "c1_lake"
    },

    c1_lake: {
      art: "🏊", place: "Der See · Montagnachmittag",
      lines: [
        "Der Nachmittag ist heiß und der See glitzert. Alle sind auf dem Holzsteg.",
        "Keo hat seine Turnschuhe an der Leiter stehen lassen: strahlend weiß, mit kleinen Sternen auf den Sohlen. Niemand sonst im Camp hat solche Schuhe.",
        ["keo", "Okay! Wer traut sich, bis zum Floß da hinten zu schwimmen? Der Letzte trägt am Samstag die Laternen!"],
        ["sis", "Äh… das Floß ist echt weit weg. Wollen wir nicht einfach hier am Steg schwimmen?"]
      ],
      choices: [
        { t: { m: "Wettschwimmen zum Floß (Handballbeine werden nicht müde)", a: "Wettschwimmen zum Floß (Basketballbeine werden nicht müde)" }, fx: { courage: 1 }, go: "c1_lake_race" },
        { t: "Bei {sis} bleiben", fx: { bond: 1 }, go: "c1_lake_stay" }
      ]
    },
    c1_lake_race: {
      art: "🏊", place: "Der See · Montagnachmittag",
      lines: [
        "{hero} springt hinein. Das Wasser ist genau drei Sekunden lang eiskalt, dann perfekt.",
        "Sie schlägt eine Sekunde nach Keo am Floß an, der lacht und völlig außer Atem ist.",
        ["keo", "Okay, okay, du bist schnell. Sag keinem, dass du mich fast geschlagen hast."],
        "Auf dem Steg winkt {sis}. Sie sieht ein bisschen allein aus."
      ],
      go: "c1_chat"
    },
    c1_lake_stay: {
      art: "🏊", place: "Der See · Montagnachmittag",
      lines: [
        "{hero} bleibt mit {sis} am Steg. Sie treiben auf dem Rücken und schauen Wolken an, die verdächtig nach Pfannkuchen aussehen.",
        ["sis", "Danke, dass du geblieben bist. Keos Wettrennen enden immer damit, dass jemand den halben See schluckt."],
        "Draußen auf dem Floß jubelt Keo sich selbst zu."
      ],
      go: "c1_chat"
    },

    c1_chat: {
      type: "chat", art: "📱", place: "Montagabend",
      msgs: [
        ["keo", "LATERNENNACHT-KOMITEE 🏮 wer ist dabei"],
        ["sis", "iiiich"],
        ["johannes", "ich kann beim tragen helfen"],
        ["keo", "johannes spricht!! 🎉"],
        ["sis", { m: "{hero} du machst die deko. und KEINE bücher auf der party 📚", a: "{hero} du machst natürlich die deko. mal die laternen an pls 🎨" }],
        ["keo", "übrigens satelliten sagen sturm morgen nacht ⛈️"],
        ["keo", "mauro hat heute so 4 mal 'hört auf die satelliten' gesagt 😂"]
      ],
      choices: [
        { t: "bin dabei 🏮", go: "c2_storm" },
        { t: "die satelliten irren sich nie 🛰️", go: "c2_storm" }
      ]
    },

    // ───────── Kapitel 2: Der Sturm ─────────
    c2_storm: {
      art: "⛈️", place: "Hütte 4 · Dienstag, Mitternacht",
      lines: [
        "Die Satelliten hatten recht.",
        "Gegen Mitternacht lässt ein Donner die ganze Hütte beben. Regen trommelt aufs Dach. Dann: klick. Im ganzen Camp geht das Licht aus.",
        "{hero} setzt sich in ihrem Bett auf. Irgendwo draußen knallt eine Tür.",
        "{sis} schläft immer noch. Irgendwie."
      ],
      choices: [
        { t: "{sis} wecken", fx: { bond: 1 }, go: "c2_window_together" },
        { t: "Allein zum Fenster gehen", fx: { courage: 1 }, go: "c2_window_alone" }
      ]
    },
    c2_window_together: {
      art: "⛈️", place: "Hütte 4 · Dienstag, Mitternacht",
      lines: [
        ["sis", "Mmmh… was… ist schon Morgen?"],
        ["hero", "Psst. Schau mal."],
        "Die beiden drücken die Nasen an das kalte Glas. Ein Blitz —",
        "— und für eine Sekunde sehen sie jemanden über die Wiese zum See rennen, in einem der gelben Camp-Ponchos.",
        ["sis", "Wer ist denn bei DEM Wetter draußen?"],
        { m: "Margot runzelt die Stirn. In ihren Büchern rennt niemand um Mitternacht aus gutem Grund in einen Sturm.",
          a: "Anouk kneift die Augen zusammen. Alle haben am ersten Tag denselben gelben Poncho bekommen. Es könnte jeder sein." },
        "Dann ist es wieder dunkel, und die Gestalt ist verschwunden."
      ],
      go: "c2_morning"
    },
    c2_window_alone: {
      art: "⛈️", place: "Hütte 4 · Dienstag, Mitternacht",
      lines: [
        "{hero} rutscht aus dem Bett und schleicht auf Zehenspitzen zum Fenster. Das Glas ist kalt. Ein Blitz —",
        "— und für eine Sekunde sieht sie jemanden über die Wiese zum See rennen, in einem der gelben Camp-Ponchos.",
        { m: "Margot runzelt die Stirn. In ihren Büchern rennt niemand um Mitternacht aus gutem Grund in einen Sturm.",
          a: "Anouk kneift die Augen zusammen. Alle haben am ersten Tag denselben gelben Poncho bekommen. Es könnte jeder sein." },
        "Dann ist es wieder dunkel. Sie steht lange da, aber die Gestalt kommt nicht zurück."
      ],
      go: "c2_morning"
    },

    c2_morning: {
      art: "📣", place: "Speisesaal · Mittwochmorgen",
      fx: { clue: "outside" },
      lines: [
        "Am Morgen ist der Himmel wie frisch gewaschen, aber niemand lächelt. Mauro steht auf einem Stuhl. Julie steht hinter ihm, mit verschränkten Armen.",
        ["mauro", "Leute. Letzte Nacht, während des Sturms, hat jemand die Geldkassette aus dem Camp-Laden genommen."],
        "Ein Raunen geht durch den Saal.",
        ["mauro", "Das Geld war für die Laternennacht. Die Laternen. Das Essen. Die Musik. Ohne das Geld…"],
        ["julie", "…gibt es keine Laternennacht. Und ich hatte ein SEHR gutes Picknick-Menü geplant."],
        ["mauro", "Wenn das Geld bis Samstag zurück ist, stellen wir keine Fragen. Sonst fällt die Laternennacht aus."],
        "Stille. Dann flüstert jemand, gerade laut genug, dass alle es hören:",
        "„Johannes war letzte Nacht draußen. Ich hab gehört, wie er klatschnass zurückkam.“",
        "Alle Köpfe drehen sich um. Johannes wird rot und starrt in sein Müsli.",
        ["johannes", "Ich… ich hab nichts genommen."],
        "Niemand sieht überzeugt aus. Außer vielleicht Keo, der seinen Orangensaft plötzlich sehr, sehr interessant findet."
      ],
      go: "c2_chat"
    },

    c2_chat: {
      type: "chat", art: "📱", place: "Mittwochmorgen",
      msgs: [
        ["system", "Unbekannt ist der Gruppe beigetreten"],
        ["unknown", "Ich war während des Sturms wach. Ich habe gesehen, wer in den Laden gegangen ist. 👀"],
        ["keo", "äh wer ist das"],
        ["sis", "??? wer hat diese nummer hinzugefügt"],
        ["unknown", "Lasst die Laternennacht nicht sterben. Schaut genauer hin. 🧺"]
      ],
      choices: [
        { t: "WER bist du?!", fx: { courage: 1 }, go: "c2_chat_brave" },
        { t: "bitte hilf uns. was hast du gesehen?", fx: { kindness: 1 }, go: "c2_chat_kind" },
        { t: "📸 Screenshot machen und {sis} zeigen", fx: { bond: 1 }, say: false, go: "c2_chat_sister" }
      ]
    },
    c2_chat_brave: {
      type: "chat", art: "📱", place: "Mittwochmorgen",
      msgs: [["unknown", "Jemand Mutiges. Gefällt mir. Fangt da an, wo das Wasser ist. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_kind: {
      type: "chat", art: "📱", place: "Mittwochmorgen",
      msgs: [["unknown", "Mit Freundlichkeit kommt man in diesem Camp weit. Fangt da an, wo das Wasser ist. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_sister: {
      type: "chat", art: "📱", place: "Mittwochmorgen",
      msgs: [
        ["sis", "ok das ist SO gruselig"],
        ["sis", "und SO spannend"],
        ["sis", "wir lösen das. zusammen."],
        ["unknown", "Fangt da an, wo das Wasser ist. 🧺"]
      ],
      go: "c3_intro"
    },

    // ───────── Kapitel 3: Die Ermittlung ─────────
    c3_intro: {
      art: "🔎", place: "Hütte 4 · Mittwoch",
      lines: [
        { m: "Zurück in der Hütte schnappt sich Margot ein Notizbuch. Jede Detektivin in jedem Buch, das sie je gelesen hat, hat ein Notizbuch.",
          a: "Zurück in der Hütte schnappt sich Anouk ein Notizbuch und malt eine Lupe auf den Umschlag. Wenn man schon ermittelt, dann bitte mit Stil." },
        ["sis", "Okay. Wir haben bis zum Abendessen, bevor Mauro nach uns schaut. Das reicht für drei Orte, vielleicht."],
        "Vier Orte könnten Antworten haben: das Bootshaus, der Speisesaal, der Waldweg und Hütte 7, wo Johannes und Keo schlafen.",
        "Drei vor dem Abendessen. Wähl gut."
      ],
      go: "hub"
    },

    hub: {
      type: "hub", art: "🗺️", place: "Lageplan · Mittwoch",
      lines: ["Wohin als Nächstes?"],
      slots: 3,
      interrupt: { after: 1, go: "c3_chat" },
      after: "c3_sister",
      places: [
        { id: "boathouse", icon: "🛶", t: "Bootshaus",  go: "b1" },
        { id: "messhall",  icon: "🍳", t: "Speisesaal", go: "m1" },
        { id: "forest",    icon: "🌲", t: "Waldweg",    go: "f1" },
        { id: "cabin7",    icon: "🛖", t: "Hütte 7",    go: "c7" }
      ]
    },

    // Bootshaus
    b1: {
      art: "🛶", place: "Bootshaus",
      lines: [
        "Das Bootshaus riecht nach nassem Holz und Sonnencreme. Paddel hängen an den Wänden. Die Kanus liegen ordentlich in einer Reihe, nummeriert von 1 bis 8.",
        "Nur Nummer 7 liegt nicht in der Reihe. Es liegt in der Ecke, unter einer schweren blauen Plane.",
        "Frischer Matsch auf dem Boden führt direkt dorthin."
      ],
      choices: [
        { t: "Die Plane wegziehen", go: [{ if: { min: { courage: 2 } }, go: "b_tarp" }, { go: "b_scared" }] }
      ]
    },
    b_tarp: {
      art: "🛶", place: "Bootshaus",
      fx: { clue: "canoe" },
      lines: [
        "{hero} packt eine Ecke und zieht. Die Plane rutscht mit einem dumpfen Plumps herunter.",
        "Kanu Nr. 7 hat einen langen Riss an der Seite und vorne eine Delle, als wäre es gegen einen Felsen gefahren. Heftig. Im Dunkeln vielleicht. Während eines Sturms.",
        { m: "„Kapitel eins“, flüstert Margot. „Das beschädigte Boot.“",
          a: "Anouk hockt sich hin. An der Delle klebt ein Kratzer gelbes Plastik, als hätte ein Poncho daran gescheuert." },
        "Jemand hat das versteckt. Jemand, der nicht wollte, dass irgendwer erfährt, dass Kanu Nr. 7 kaputt ist."
      ],
      go: "hub"
    },
    b_scared: {
      art: "🛶", place: "Bootshaus",
      lines: [
        "{hero} greift nach der Plane und hört Schritte draußen auf dem Steg.",
        "Ihr Herz macht einen Sprung. Sie duckt sich hinter das Paddelregal, genau als Mauro pfeifend hereinkommt, eine Schwimmweste nimmt und wieder geht.",
        "Als ihr Herz sich beruhigt, ist sie zu durcheinander, um es noch mal zu versuchen. Wäre sie diese Woche nur ein bisschen mutiger gewesen…"
      ],
      go: "hub"
    },

    // Speisesaal
    m1: {
      art: "🍳", place: "Speisesaal",
      lines: [
        "Der Speisesaal ist leer, bis auf Julie, die summend die Tische abwischt.",
        "Das Regal des Ladens hinten ist leer, wo früher die Geldkassette stand. Auf der Tafel, in Julies Handschrift: PICKNICK AM FREITAG! 🧺 (falls die Laternennacht überlebt)",
        ["julie", "Ah. Eine Detektivin. Das sieht man am Notizbuch."]
      ],
      choices: [
        { t: "Ihr erst einen Witz erzählen", fx: { julie: 1 }, go: "m_joke" },
        { t: "Fragen, was sie in der Sturmnacht gesehen hat", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_joke: {
      art: "🍳", place: "Speisesaal",
      lines: [
        { m: "„Warum ist das Buch in die Handballmannschaft gegangen?“, fragt Margot. „Es wollte endlich mal einen spannenden Wurf… äh, Entwurf!“",
          a: "„Was macht eine Basketballerin mit Wolle?“, fragt Anouk. „Sie strickt einen Korb!“" },
        "Julie prustet so laut, dass sie sich hinsetzen muss.",
        ["julie", "Furchtbar. Wunderbar. Setz dich, setz dich. Was willst du wissen?"]
      ],
      choices: [
        { t: "Fragen, was sie in der Sturmnacht gesehen hat", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_witness: {
      art: "🍳", place: "Speisesaal",
      fx: { clue: "whistle" },
      lines: [
        ["julie", "Unter uns? Ich war während des Sturms hier und hab nach der Tiefkühltruhe gesehen, als der Strom ausfiel."],
        ["julie", "Ich hab die Ladentür gehört. Ein Gesicht hab ich nicht gesehen, nur einen gelben Poncho, wie ihn alle haben. Aber wer auch immer das war… hat gepfiffen."],
        ["julie", "Diese alberne kleine Melodie. Da-da-di-da-DUM. Du weißt, welche."],
        "{hero} weiß genau, welche. Keo pfeift sie jeden einzelnen Morgen auf dem Weg zum Frühstück.",
        ["julie", "Ich sag gar nichts. Ich bin Köchin. Ich höre nur Sachen."]
      ],
      go: "m_end"
    },
    m_busy: {
      art: "🍳", place: "Speisesaal",
      lines: [
        ["julie", "Hmm. Ich muss achtzig Mittagessen machen, Schätzchen. Frag mich ein andermal."],
        "Sie dreht sich wieder zu ihrem riesigen Topf um. Wäre {hero} diese Woche nur ein bisschen netter zu ihr gewesen…"
      ],
      go: "m_end"
    },
    m_end: {
      art: "🍳", place: "Speisesaal",
      lines: ["Auf dem Weg nach draußen kommt {hero} an der Tafel und an der Fundkiste neben der Küchentür vorbei."],
      choices: [
        { t: "Die Tafel genauer lesen", if: { not: { clue: "picnic" } }, go: "m_board" },
        { t: "In der Fundkiste wühlen", if: { not: { clue: "phone" } }, go: "m_box" },
        { t: "Den Speisesaal verlassen", go: "hub" }
      ]
    },
    m_board: {
      art: "🧺", place: "Speisesaal",
      fx: { clue: "picnic" },
      lines: [
        "PICKNICK AM FREITAG! 🧺, in Julies runder Schrift, mit einem kleinen gemalten Korb.",
        "{hero} starrt darauf. Dieser Korb. Dieses Emoji hat sie erst vor Kurzem irgendwo gesehen…",
        "Unbekannt unterschreibt jede einzelne Nachricht mit 🧺."
      ],
      go: "m_end"
    },
    m_box: {
      art: "📱", place: "Speisesaal",
      fx: { clue: "phone" },
      lines: [
        "Fundkiste: ein Flip-Flop, drei Trinkflaschen, irgendjemandes Zahnspange (igitt)… und ein Handy.",
        "Es ist das Ersatzhandy des Camps, das die Betreuer verleihen, wenn jemand seins verliert. Der Bildschirm leuchtet auf: 1 neue Nachricht in „Hütte 4 + Freunde 🏕️“.",
        "Warum liegt das Ersatzhandy des Camps in der Küche? Und warum ist es in ihrem Gruppenchat?"
      ],
      go: "m_end"
    },

    // Waldweg
    f1: {
      art: "🌲", place: "Waldweg",
      fx: { clue: "prints" },
      lines: [
        "Der Waldweg führt vom Bootshaus am Speisesaal vorbei und den Hügel hinauf zur alten Wetterstation des Camps.",
        "Der Sturm hat ihn in Matsch verwandelt, und der Matsch merkt sich alles.",
        "Frische Fußspuren. Große Turnschuhe, mit kleinen Sternen in jedem Abdruck. Sie führen vom Bootshaus… direkt zur Hintertür des Ladens.",
        { m: "Margot hockt sich hin wie eine Detektivin auf einem Buchcover. Sterne. Diese Sterne hat sie schon mal gesehen, auf dem Steg.",
          a: "Anouk kennt sich mit Schuhen aus. Das sind Sternsohlen in limitierter Auflage. Genau eine Person im Camp trägt die: Keo." },
        "Weiter oben auf dem Hügel sitzt jemand allein auf einem Felsen neben der Wetterstation. Johannes."
      ],
      choices: [
        { t: "Dich neben ihn setzen und fragen, ob alles okay ist", fx: { kindness: 1 }, go: [{ if: { min: { kindness: 2 } }, go: "f_alibi" }, { go: "f_closed" }] },
        { t: "Ihn direkt fragen, was er letzte Nacht gemacht hat", go: "f_closed" }
      ]
    },
    f_alibi: {
      art: "🌲", place: "Waldweg",
      fx: { clue: "alibi" },
      lines: [
        "Johannes schweigt lange. Dann:",
        ["johannes", "Hier oben ist der einzige Ort mit Handyempfang. Letzte Nacht bin ich hochgegangen, um meine Mutter anzurufen. Während des Sturms. Dumm, ich weiß."],
        ["johannes", "Ich bin zum ersten Mal so lange von zu Hause weg. Ich… vermisse sie. Ich wollte nicht, dass das jemand weiß."],
        "Deshalb kam er klatschnass zurück. Nicht der Laden. Der Hügel.",
        ["johannes", "Bitte erzähl es nicht allen."],
        ["hero", "Mach ich nicht. Versprochen."]
      ],
      go: "hub"
    },
    f_closed: {
      art: "🌲", place: "Waldweg",
      lines: [
        ["johannes", "Warum denken alle, dass ich es war?"],
        "Er steht auf und geht den Hügel hinunter, bevor {hero} noch etwas sagen kann.",
        "Vielleicht war sie ein bisschen zu direkt."
      ],
      go: "hub"
    },

    // Hütte 7
    c7: {
      art: "🛖", place: "Hütte 7",
      lines: [
        "Hütte 7 riecht nach Socken und Mückenspray. Johannes' Bett ist ordentlich. Keos Bett ist… es nicht.",
        "Johannes ist drinnen und liest auf seinem Bett. Er schaut nervös auf."
      ],
      choices: [
        { t: "Johannes höflich fragen, ob du dich umsehen darfst", fx: { kindness: 1 }, go: "c7_polite" },
        { t: "Warten, bis er geht, und dann herumschnüffeln", fx: { kindness: -1 }, go: "c7_snoop" }
      ]
    },
    c7_polite: {
      art: "🛖", place: "Hütte 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        ["johannes", "Äh… klar. Ich hab nichts zu verbergen."],
        "An seinem Bett hängt eine dunkelblaue Jacke, noch feucht. Kein gelber Poncho. Sein Poncho liegt gefaltet in seinem Fach, knochentrocken.",
        { m: "Margot schreibt es auf. In einem guten Krimi ist der offensichtliche Verdächtige fast nie der Täter.",
          a: "Anouk sieht es sofort: Sein Poncho wurde noch nie ausgepackt. Er hat noch die Falten aus dem Laden." },
        "Neben Keos Bett, im Mülleimer, liegt eine zerknüllte Seite aus einem Katalog. Ein Kanu. Ein Preis, mit rotem Filzstift eingekreist: 480 €.",
        ["johannes", "Das ist von Keo. Der ist die ganze Woche schon komisch, wenn's um Geld geht."]
      ],
      go: "hub"
    },
    c7_snoop: {
      art: "🛖", place: "Hütte 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        "{hero} wartet hinter der Hütte, bis Johannes zum Duschen geht, dann schlüpft sie hinein.",
        "Seine dunkelblaue Jacke hängt am Bett, noch feucht. Er war definitiv draußen im Sturm.",
        "Im Mülleimer neben Keos Bett: eine zerknüllte Katalogseite. Ein Kanu, mit einem rot eingekreisten Preis: 480 €.",
        "Schritte! {hero} klettert gerade noch rechtzeitig durchs hintere Fenster. Ihr Herz rast. Das hat sich nicht gut angefühlt."
      ],
      go: "hub"
    },

    c3_chat: {
      type: "chat", art: "📱", place: "Mittwoch, Mittagszeit",
      msgs: [
        ["keo", "jemand lust auf karten vorm mittagessen? 🃏"],
        ["sis", "wir sind beschäftigt 🕵️‍♀️"],
        ["hero", "@Unbekannt noch mehr hinweise?"],
        ["system", "2 Stunden später"],
        ["unknown", "Sorry. Mittagsansturm. Schaut euch die Boote an. 🧺"]
      ],
      choices: [
        { t: "mittagsansturm?? was soll das heißen 🤔", fx: { clue: "silence" }, go: "c3_chat_notice" },
        { t: "ok danke!", go: "hub" }
      ]
    },
    c3_chat_notice: {
      type: "chat", art: "📱", place: "Mittwoch, Mittagszeit",
      msgs: [
        ["unknown", "…nichts. Hatte zu tun. 🧺"],
        ["sis", "verdächtig 👀"]
      ],
      go: "hub"
    },

    c3_sister: {
      art: "🌅", place: "Hütte 4 · Mittwochabend",
      lines: [
        "Die Sonne geht unter. Das Notizbuch ist voller Kritzeleien und Pfeile.",
        ["sis", "{hero}… machen wir das zusammen? Also wirklich zusammen? Denn in einer Stunde ist Lagerfeuer, und Mauro will Antworten."]
      ],
      choices: [
        { t: "„Zusammen. Immer.“", fx: { bond: 1 }, go: "c3_sister_yes" },
        { t: "„Ich krieg das hin. Ich mach das allein.“", fx: { bond: -1 }, go: "c3_sister_no" }
      ]
    },
    c3_sister_yes: {
      art: "🌅", place: "Hütte 4 · Mittwochabend",
      lines: [
        ["sis", "Gut. Ich hätte dich das sowieso nicht allein machen lassen."],
        "{sis} stupst sie mit der Schulter an. Sie gehen Seite an Seite zum Lagerfeuer."
      ],
      go: "c4_campfire"
    },
    c3_sister_no: {
      art: "🌅", place: "Hütte 4 · Mittwochabend",
      lines: [
        ["sis", "…Oh. Okay. Klar."],
        "{sis} wird still und geht vor zum Lagerfeuer, ohne zu warten."
      ],
      go: "c4_campfire"
    },

    // ───────── Kapitel 4: Die Konfrontation ─────────
    c4_campfire: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        "Mauro ruft ein Notfall-Lagerfeuer zusammen. Alle sind da. Niemand röstet Marshmallows.",
        ["mauro", "Okay. Letzte Chance, bevor ich die Laternen absage. Hat jemand etwas zu sagen?"],
        "Johannes starrt ins Feuer. Keo fängt an, seine kleine Melodie zu pfeifen, und hört dann auf. Schnell.",
        "{hero} schaut auf ihr Notizbuch.",
        { if: { min: { bond: 3 } }, line: ["sis", "Egal, wie du dich entscheidest, ich bin da."] }
      ],
      choices: [
        { t: "Aufstehen und Johannes beschuldigen", go: "c4_johannes" },
        { t: "Aufstehen und Keo beschuldigen", go: [{ if: { keyClues: 3 }, go: "c4_keo_proof" }, { go: "c4_keo_weak" }] },
        { t: "Keo leise bitten, abseits vom Feuer zu reden", if: { min: { kindness: 3 }, clue: "canoe" }, go: "c5_private" }
      ]
    },
    c4_johannes: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        "{hero} steht auf und zeigt über das Feuer.",
        ["hero", "Es war Johannes. Er war während des Sturms draußen. Das weiß jeder."],
        "Johannes sieht sie an, als hätte sie ihn gerade in den See geschubst.",
        { if: { clue: "alibi" }, line: "Und das Schlimmste? Sie weiß genau, warum er draußen war. Sie hatte versprochen, es niemandem zu sagen." },
        ["johannes", "Ich hab nicht… ich…"],
        "Er steht auf und geht in die Dunkelheit."
      ],
      go: "end_wrong"
    },
    c4_keo_weak: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        ["hero", "Es war Keo."],
        "Keo lacht, ein großes, lässiges Lachen.",
        ["keo", "Ich? Ach komm. Ich hab geschlafen. Frag, wen du willst."],
        "{hero} schlägt ihr Notizbuch auf… aber es steht nicht genug drin. Ein Verdacht ist kein Beweis.",
        "Langsam wandern alle Blicke zurück zu Johannes."
      ],
      go: "end_wrong"
    },
    c4_keo_proof: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        ["hero", "Es war Keo."],
        "Keo lacht. Aber {hero} hört nicht auf.",
        { if: { clue: "canoe" },     line: ["hero", "Kanu Nr. 7 ist gerissen und liegt versteckt unter einer Plane im Bootshaus."] },
        { if: { clue: "prints" },    line: ["hero", "Fußspuren mit Sternen führen vom Bootshaus direkt zum Laden. Nur du hast diese Turnschuhe."] },
        { if: { clue: "whistle" },   line: ["hero", "Jemand hat den Dieb pfeifen hören. Deine Melodie."] },
        { if: { clue: "pricelist" }, line: ["hero", "Und in deinem Mülleimer liegt eine Kanu-Preisliste. 480 €."] },
        "Das Lachen verschwindet. Keo schaut lange, sehr lange auf den Boden.",
        ["keo", "…Ich hab Kanu Nr. 7 am Dienstagabend genommen. Bevor der Sturm kam. Ich wollte nur mal den See bei Nacht sehen. Dann kam der Wind, und ich bin gegen die Felsen gefahren."],
        ["keo", "Ich bin in Panik geraten. Ich dachte, wenn ich ein neues kaufe, bevor es jemand merkt… Es tut mir leid. Das Geld ist in meiner Reisetasche. Alles."]
      ],
      go: [{ if: { min: { bond: 3 } }, go: "c5_detective" }, { go: "c5_lonewolf" }]
    },

    // ───────── Kapitel 5: Die Auflösung ─────────
    c5_detective: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        ["mauro", "Danke, dass du die Wahrheit gesagt hast, Keo. Über das Kanu reden wir morgen. Zusammen."],
        ["sis", "{hero}. Du hast es geschafft. WIR haben es geschafft."],
        "Mauro klettert wieder auf den Baumstumpf. Der wackelt. Er tut so, als ob nicht.",
        ["mauro", "Die Laternennacht… FINDET STATT!"]
      ],
      go: "end_detective"
    },
    c5_lonewolf: {
      art: "🔥", place: "Lagerfeuer · Mittwochabend",
      lines: [
        ["mauro", "Danke, dass du die Wahrheit gesagt hast, Keo. Die Laternennacht findet statt."],
        "Alle jubeln. Leute klopfen {hero} auf die Schulter.",
        "Aber als sie sich umdreht, um mit {sis} zu feiern, ist ihre Schwester schon zur Hütte zurückgegangen."
      ],
      go: "end_lonewolf"
    },
    c5_private: {
      art: "🌙", place: "Der Steg · Mittwochabend",
      lines: [
        "{hero} hält Keo am Ärmel fest und nickt zum dunklen Ende des Stegs, weg vom Feuer.",
        ["hero", "Ich hab Kanu Nr. 7 gesehen. Ich weiß, dass es ein Unfall war."],
        "Keos Schultern sinken, als hätte er sie die ganze Woche hochgehalten.",
        ["keo", "Ich wollte nur den See bei Nacht sehen. Dann kam der Sturm, ich bin gegen die Felsen gefahren und… bin in Panik geraten. Ich dachte, wenn ich ein neues bezahle, erfährt es nie jemand."],
        ["hero", "Mauro erzählt furchtbare Witze, aber er ist fair. Sag es ihm selbst. Ich komm mit."],
        "Keo atmet tief durch. Sie gehen zusammen zurück zum Feuer.",
        ["keo", "Mauro? Ich muss dir was sagen."],
        "Später beschließt Mauro, dass Keo die letzten Camptage damit verbringt, mit ihm zusammen Kanu Nr. 7 zu reparieren, und jeder Cent geht direkt zurück an die Laternennacht.",
        ["mauro", "Ehrlichkeit und ein Kanu-Reparaturset. Die beste Kombination, die es gibt."]
      ],
      go: "end_second"
    },

    // ───────── Enden ─────────
    end_detective: {
      type: "ending", ending: "detective", art: "🏮", place: "Laternennacht · Samstag",
      lines: [
        "Samstagabend. Hundert Laternen steigen über dem See auf und leuchten orange vor dem dunklen Himmel.",
        { m: "Margot hat kein Buch mitgebracht. Na gut, eins hat sie dabei. Aber sie schlägt es kein einziges Mal auf.",
          a: "Anouk hat jede einzelne Laterne bemalt. Auf ein paar davon sind winzige Satelliten." },
        "{hero} und {sis} zünden gemeinsam die erste Laterne an und lassen sie los.",
        "Johannes lacht mit den anderen. Keo winkt vom Bootshaus, wo er schon Kanu Nr. 7 abschleift.",
        "Fall gelöst."
      ],
      secret: true
    },
    end_wrong: {
      type: "ending", ending: "wrong", art: "💔", place: "Laternennacht · Samstag",
      lines: [
        "Die Laternennacht findet trotzdem statt. Am Freitag taucht das Geld auf mysteriöse Weise in der Fundkiste auf.",
        "Aber Johannes sitzt die ganze Party über allein am Ende des Stegs. Für den Rest des Sommers redet er kein Wort mehr mit {hero}.",
        "Irgendwo in der Menge lacht Keo ein bisschen zu laut.",
        "Vielleicht hat sie etwas übersehen…"
      ]
    },
    end_second: {
      type: "ending", ending: "second", art: "🤝", place: "Laternennacht · Samstag",
      lines: [
        "Samstagabend. Die Laternen schweben über den See, und unten auf dem Wasser gleitet das frisch geflickte Kanu Nr. 7 vorbei, mit Keo und Mauro, die paddeln und darüber streiten, wer lenkt.",
        "{hero}, {sis} und Johannes sitzen auf dem Steg und lassen die Füße ins Wasser hängen.",
        ["keo", "Hey! Danke. Dass du keine große Show draus gemacht hast."],
        "Manchmal geht es beim Lösen eines Rätsels nicht darum, jemanden zu erwischen. Sondern darum, ihm zu helfen, zurückzufinden."
      ],
      secret: true
    },
    end_lonewolf: {
      type: "ending", ending: "lonewolf", art: "🐺", place: "Laternennacht · Samstag",
      lines: [
        "Die Laternennacht ist gerettet. Alle sagen, {hero} sei ein Genie.",
        "Aber als die Laternen aufsteigen, schaut {sis} vom anderen Ende des Stegs aus zu. Allein.",
        "{hero} hat den Fall gelöst. Sie hat nur niemanden, mit dem sie es teilen kann.",
        "Vielleicht nächstes Mal… zusammen?"
      ]
    },

    secret_1: {
      art: "🧺", place: "Küche · Samstagmorgen",
      lines: [
        "Ein Rätsel ist noch übrig. Wer war Unbekannt?",
        "{hero} und {sis} drücken die Küchentür auf. Julie packt einen RIESIGEN Picknickkorb.",
        "{hero} nimmt ihr Handy und schreibt in den Gruppenchat: „Schöner Korb, Unbekannt. 🧺“",
        "Irgendwo in der Küche vibriert ein Handy. Das Ersatzhandy des Camps, halb versteckt unter einem Geschirrtuch.",
        "Julie erstarrt. Dann dreht sie sich langsam um und grinst.",
        ["julie", "Okay. Ihr habt mich erwischt."],
        ["julie", "Ich hab Keo in der Sturmnacht gesehen. Aber ich dachte: Wenn ich es einfach Mauro sage, kriegt Keo Ärger und lernt nichts. Wenn ihr zwei es herausfindet… lernen vielleicht alle etwas."],
        ["julie", "Außerdem wollte ich schon immer mal eine geheimnisvolle Unbekannte sein. Das hat SEHR viel Spaß gemacht."],
        ["sis", "Du bist unmöglich."],
        ["julie", "Danke. Und jetzt helft mir, den Korb zu tragen. Heute ist Picknick."]
      ],
      go: "end_secret"
    },
    end_secret: {
      type: "ending", ending: "secret", art: "🧺", place: "Picknick am See",
      lines: [
        "Am Nachmittag essen alle Julies Picknick auf der Wiese am See. Die Sandwiches haben die Form von Satelliten. Sie sehen aus wie Kartoffeln.",
        "Julie hebt ihre Limonade.",
        ["julie", "Auf die besten Detektivinnen, die das EUMETSAT Summer Camp je hatte!"],
        "Du hast das geheime Ende gefunden. 🧺"
      ]
    }
  }
};
