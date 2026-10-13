// Unread — storia in italiano. Stessa struttura di en.js: cambiano solo i testi.
window.STORY = window.STORY || {};
window.STORY.it = {
  ui: {
    title: "Unread",
    tagline: "Un mistero all'EUMETSAT Summer Camp",
    newGame: "Nuova partita",
    continue: "Continua",
    endings: "Finali",
    endingsFound: "{n}/{total} finali trovati",
    whoAreYou: "Chi sei?",
    pickAvatar: "Scegli la tua foto per la chat",
    start: "Inizia",
    next: "Continua",
    notebook: "Taccuino",
    noClues: "Ancora niente. Tieni gli occhi aperti.",
    close: "Chiudi",
    menu: "Menu",
    backToTitle: "Torna al titolo",
    playAgain: "Gioca ancora",
    oneMore: "Aspetta… un'ultima cosa",
    endingUnlocked: "Finale sbloccato",
    locked: "???",
    timeLeft: "Tempo prima di cena",
    visited: "Visitato",
    resetProgress: "Azzera tutti i progressi",
    resetConfirm: "Cancellare la partita salvata e tutti i finali?",
    language: "Lingua",
    soon: "in arrivo",
    tapToSkip: "Tocca per saltare",
    clueAdded: "Nuovo indizio: {clue}",
    typing: "sta scrivendo…",
    introDay: "mercoledì",
    introFrom: "Numero sconosciuto",
    introNow: "ora",
    introOpen: "Tocca per aprire",
    introMsgs: ["Sei sveglia?", "Sta succedendo qualcosa giù al lago.", "Guarda fuori dalla finestra. Adesso. 👀"],
    introReply: "chi sei??",
    introLast: "Lo scoprirai entro sabato. 🧺",
    introEarlier: "Tre giorni prima…",
    introContinue: "Tocca per continuare",
    skip: "Salta",
    sound: "Audio"
  },

  characters: {
    margot:   { name: "Margot",   emoji: "📚" },
    anouk:    { name: "Anouk",    emoji: "🎨" },
    julie:    { name: "Julie",    emoji: "👩‍🍳" },
    mauro:    { name: "Mauro",    emoji: "🧢" },
    keo:      { name: "Keo",      emoji: "😎" },
    johannes: { name: "Johannes", emoji: "🎧" },
    unknown:  { name: "Sconosciuto", emoji: "❔" }
  },

  heroes: {
    margot: { blurb: "Gioca a pallamano. Legge un giallo al giorno." },
    anouk:  { blurb: "Basket, maglia, pittura e uno stile impeccabile." }
  },

  avatars: ["📚", "🎨", "🤾‍♀️", "🏀", "🧶", "👗", "🌻", "🦊"],

  chatName: "Bungalow 4 + amici 🏕️",

  clues: {
    outside:   { icon: "🌙", name: "Fuori durante il temporale", text: "Qualcuno ha sentito Johannes rientrare fradicio la notte del temporale." },
    canoe:     { icon: "🛶", name: "Canoa n. 7",                 text: "Crepata e nascosta sotto un telo nella rimessa. Qualcuno ha sbattuto contro gli scogli al buio." },
    prints:    { icon: "👟", name: "Impronte con le stelle",     text: "Dalla rimessa alla porta sul retro dello spaccio. Le scarpe di Keo hanno le stelle sotto la suola." },
    whistle:   { icon: "🎵", name: "Il motivetto fischiato",     text: "Julie ha sentito il ladro fischiettare. Keo fischietta quel motivetto ogni mattina." },
    pricelist: { icon: "📄", name: "Listino delle canoe",        text: "Strappato da un catalogo, €480 cerchiati in rosso. Trovato nel cestino accanto al letto di Keo." },
    jacket:    { icon: "🧥", name: "La giacca bagnata di Johannes", text: "Blu scuro e ancora umida. Ma il suo poncho giallo non è mai stato aperto." },
    alibi:     { icon: "📞", name: "Il segreto di Johannes",     text: "Durante il temporale era sulla collina a telefonare a casa. Ha nostalgia." },
    silence:   { icon: "🔕", name: "Silenzio all'ora di pranzo", text: "Lo Sconosciuto è sparito proprio quando la cucina era più indaffarata." },
    picnic:    { icon: "🧺", name: "Il cestino",                 text: "Lo Sconosciuto firma ogni messaggio con 🧺. Proprio come la lavagna del 'Picnic venerdì'." },
    phone:     { icon: "📱", name: "Il telefono di riserva",     text: "Il telefono di riserva del campo, nella scatola degli oggetti smarriti in cucina, collegato alla vostra chat." }
  },
  keyClues: ["canoe", "prints", "whistle", "pricelist"],
  secretClues: ["silence", "picnic", "phone"],

  endings: {
    detective: { icon: "🔍", title: "La Detective" },
    wrong:     { icon: "💔", title: "L'accusa sbagliata" },
    second:    { icon: "🤝", title: "Una seconda possibilità" },
    lonewolf:  { icon: "🐺", title: "Lupo solitario" },
    secret:    { icon: "🧺", title: "Era Julie" }
  },

  start: "c1_campfire",

  scenes: {
    // ───────── Capitolo 1: L'ultima settimana al campo ─────────
    c1_campfire: {
      art: "🔥", place: "Falò · domenica sera",
      lines: [
        "È l'ultima settimana dell'EUMETSAT Summer Camp, e il falò scoppietta come se lo sapesse.",
        { m: "Margot ha passato l'estate a vincere partite di pallamano sul campo sportivo e a leggere gialli sotto il grande pino. Questa settimana è già al terzo.",
          a: "Anouk ha passato l'estate a tirare a canestro sul vecchio campo da basket, a dipingere il lago al tramonto e a fare a maglia una sciarpa che a luglio non serve a nessuno." },
        "Sua sorella {sis} è stretta accanto a lei sulla panca di tronchi e le ruba i marshmallow.",
        ["mauro", "Ok, ragazzi! Grande annuncio!"],
        "Mauro, l'animatore del campo, sale su un ceppo. Il ceppo traballa. Lui fa finta di niente.",
        ["mauro", "Sabato sera è… la NOTTE DELLE LANTERNE! Musica, cibo e cento lanterne sopra il lago!"],
        "Tutti esultano. Keo, che è amico letteralmente di chiunque, fa un rullo di tamburi su una borsa frigo.",
        ["keo", "La. Serata. Migliore. Dell'estate!"],
        "Ai margini del cerchio, Johannes, alla sua prima estate qui, sorride in silenzio e si stringe nella felpa. Di solito sta per conto suo.",
        ["mauro", "E poi: i satelliti dicono che questa settimana arriva un temporale. I satelliti non sbagliano mai. Io sbaglio spesso. Date retta ai satelliti."],
        ["sis", "{hero}. Sarà la settimana più bella di sempre."]
      ],
      go: "c1_breakfast"
    },

    c1_breakfast: {
      art: "🥞", place: "Mensa · lunedì mattina",
      lines: [
        "La colazione in mensa è rumorosa, appiccicosa e profuma di pancake.",
        "Julie gestisce la cucina e il piccolo spaccio del campo in fondo alla sala. È severissima sulle scarpe infangate e spassosissima su tutto il resto.",
        ["julie", "I pancake di oggi hanno la forma di satelliti. Non ditemi che sembrano patate. Lo so."],
        "Poi: CRASH. Un intero vassoio di pancake scivola dal bancone e finisce per terra. Qualcuno ride. Qualcuno applaude."
      ],
      choices: [
        { t: "Aiuta Julie a raccoglierli", fx: { kindness: 1, julie: 1 }, go: "c1_breakfast_help" },
        { t: "Ridi insieme agli altri", go: "c1_breakfast_laugh" }
      ]
    },
    c1_breakfast_help: {
      art: "🥞", place: "Mensa · lunedì mattina",
      lines: [
        "{hero} si inginocchia e comincia a rimettere i pancake sul vassoio.",
        ["julie", "Grazie, tesoro. Hai un futuro radioso nel salvataggio dei pancake."],
        "Le fa l'occhiolino e le mette un pancake in più nel piatto.",
        ["julie", "Regola della cucina: chi aiuta fa il bis. E venerdì: PICNIC. Sto già preparando il cestino."]
      ],
      go: "c1_lake"
    },
    c1_breakfast_laugh: {
      art: "🥞", place: "Mensa · lunedì mattina",
      lines: [
        "{hero} ride. In effetti È un po' buffo.",
        "Julie alza un sopracciglio, raccoglie i pancake e non dice una parola. Ma le cuoche si ricordano le facce. Le cuoche si ricordano sempre le facce."
      ],
      go: "c1_lake"
    },

    c1_lake: {
      art: "🏊", place: "Il lago · lunedì pomeriggio",
      lines: [
        "Il pomeriggio è caldo e il lago luccica. Sono tutti sul pontile di legno.",
        "Keo ha lasciato le scarpe da ginnastica vicino alla scaletta: bianchissime, con delle stelline sotto la suola. Nessun altro al campo ha scarpe così.",
        ["keo", "Ok! Chi ha il coraggio di nuotare fino alla zattera laggiù? L'ultimo che arriva porta le lanterne sabato!"],
        ["sis", "Ehm… quella zattera è lontanissima. Nuotiamo qui vicino al pontile?"]
      ],
      choices: [
        { t: { m: "Gareggia fino alla zattera (le gambe da pallamano non si stancano)", a: "Gareggia fino alla zattera (le gambe da basket non si stancano)" }, fx: { courage: 1 }, go: "c1_lake_race" },
        { t: "Resta con {sis}", fx: { bond: 1 }, go: "c1_lake_stay" }
      ]
    },
    c1_lake_race: {
      art: "🏊", place: "Il lago · lunedì pomeriggio",
      lines: [
        "{hero} si tuffa. L'acqua è gelida per esattamente tre secondi, poi è perfetta.",
        "Tocca la zattera un secondo dopo Keo, che ride senza fiato.",
        ["keo", "Ok, ok, sei veloce. Non dire a nessuno che mi hai quasi battuto."],
        "Sul pontile, {sis} saluta con la mano. Sembra un po' sola."
      ],
      go: "c1_chat"
    },
    c1_lake_stay: {
      art: "🏊", place: "Il lago · lunedì pomeriggio",
      lines: [
        "{hero} resta vicino al pontile con {sis}. Galleggiano a pancia in su e guardano nuvole che somigliano sospettosamente a pancake.",
        ["sis", "Grazie di essere rimasta. Le gare di Keo finiscono sempre con qualcuno che si beve mezzo lago."],
        "Sulla zattera, Keo si applaude da solo."
      ],
      go: "c1_chat"
    },

    c1_chat: {
      type: "chat", art: "📱", place: "Lunedì sera",
      msgs: [
        ["keo", "COMITATO NOTTE DELLE LANTERNE 🏮 chi c'è"],
        ["sis", "ioooo"],
        ["johannes", "posso aiutare a portare le cose"],
        ["keo", "johannes parla!! 🎉"],
        ["sis", { m: "{hero} tu fai le decorazioni. e NIENTE libri alla festa 📚", a: "{hero} tu fai le decorazioni ovviamente. dipingi le lanterne pls 🎨" }],
        ["keo", "comunque i satelliti dicono temporale domani notte ⛈️"],
        ["keo", "mauro oggi ha detto 'date retta ai satelliti' tipo 4 volte 😂"]
      ],
      choices: [
        { t: "ci sono anch'io 🏮", go: "c2_storm" },
        { t: "i satelliti non sbagliano mai 🛰️", go: "c2_storm" }
      ]
    },

    // ───────── Capitolo 2: Il temporale ─────────
    c2_storm: {
      art: "⛈️", place: "Bungalow 4 · martedì, mezzanotte",
      lines: [
        "I satelliti avevano ragione.",
        "Verso mezzanotte un tuono fa tremare tutto il bungalow. La pioggia martella il tetto. Poi: clic. Le luci si spengono in tutto il campo.",
        "{hero} si mette seduta nel letto. Da qualche parte, fuori, sbatte una porta.",
        "Il telefono vibra sul cuscino. Numero sconosciuto: “Guarda fuori dalla finestra.”",
        "{sis} dorme ancora. Chissà come."
      ],
      choices: [
        { t: "Sveglia {sis}", fx: { bond: 1 }, go: "c2_window_together" },
        { t: "Vai alla finestra da sola", fx: { courage: 1 }, go: "c2_window_alone" }
      ]
    },
    c2_window_together: {
      art: "⛈️", place: "Bungalow 4 · martedì, mezzanotte",
      lines: [
        ["sis", "Mmmh… cosa… è già mattina?"],
        ["hero", "Shh. Guarda."],
        "Tutte e due premono il naso contro il vetro freddo. Un lampo —",
        "— e per un secondo vedono qualcuno correre attraverso il prato verso il lago, con uno dei ponchi gialli del campo.",
        ["sis", "Chi è fuori con QUESTO tempo?"],
        { m: "Margot aggrotta la fronte. Nei suoi libri nessuno corre nel temporale a mezzanotte per un buon motivo.",
          a: "Anouk socchiude gli occhi. Il primo giorno tutti hanno ricevuto lo stesso poncho giallo. Potrebbe essere chiunque." },
        "Poi torna il buio, e la figura è sparita."
      ],
      go: "c2_morning"
    },
    c2_window_alone: {
      art: "⛈️", place: "Bungalow 4 · martedì, mezzanotte",
      lines: [
        "{hero} scivola giù dal letto e va in punta di piedi alla finestra. Il vetro è freddo. Un lampo —",
        "— e per un secondo vede qualcuno correre attraverso il prato verso il lago, con uno dei ponchi gialli del campo.",
        { m: "Margot aggrotta la fronte. Nei suoi libri nessuno corre nel temporale a mezzanotte per un buon motivo.",
          a: "Anouk socchiude gli occhi. Il primo giorno tutti hanno ricevuto lo stesso poncho giallo. Potrebbe essere chiunque." },
        "Poi torna il buio. Resta lì a lungo, ma la figura non ricompare."
      ],
      go: "c2_morning"
    },

    c2_morning: {
      art: "📣", place: "Mensa · mercoledì mattina",
      fx: { clue: "outside" },
      lines: [
        "Al mattino il cielo è pulito, ma nessuno sorride. Mauro è in piedi su una sedia. Dietro di lui c'è Julie, a braccia conserte.",
        ["mauro", "Ragazzi. Stanotte, durante il temporale, qualcuno ha preso la cassetta dei soldi dallo spaccio."],
        "Un mormorio attraversa la sala.",
        ["mauro", "Quei soldi erano per la Notte delle Lanterne. Le lanterne. Il cibo. La musica. Senza…"],
        ["julie", "…niente Notte delle Lanterne. E io avevo un menù da picnic MOLTO buono."],
        ["mauro", "Se i soldi tornano entro sabato, nessuna domanda. Altrimenti la Notte delle Lanterne è annullata."],
        "Silenzio. Poi qualcuno sussurra, abbastanza forte perché tutti sentano:",
        "“Johannes era fuori stanotte. L'ho sentito rientrare fradicio.”",
        "Tutte le teste si girano. Johannes diventa rosso e fissa i suoi cereali.",
        ["johannes", "Io… io non ho preso niente."],
        "Nessuno sembra convinto. Tranne forse Keo, che all'improvviso trova il suo succo d'arancia molto, molto interessante."
      ],
      go: "c2_chat"
    },

    c2_chat: {
      type: "chat", art: "📱", place: "Mercoledì mattina",
      msgs: [
        ["system", "Sconosciuto si è unito al gruppo"],
        ["unknown", "Ero sveglio durante il temporale. Ho visto chi è entrato nello spaccio. 👀"],
        ["keo", "ehm chi sei"],
        ["sis", "??? chi ha aggiunto questo numero"],
        ["unknown", "Non lasciate morire la Notte delle Lanterne. Guardate meglio. 🧺"]
      ],
      choices: [
        { t: "ma CHI SEI?!", fx: { courage: 1 }, go: "c2_chat_brave" },
        { t: "ti prego aiutaci. cosa hai visto?", fx: { kindness: 1 }, go: "c2_chat_kind" },
        { t: "📸 Fai uno screenshot e mostralo a {sis}", fx: { bond: 1 }, say: false, go: "c2_chat_sister" }
      ]
    },
    c2_chat_brave: {
      type: "chat", art: "📱", place: "Mercoledì mattina",
      msgs: [["unknown", "Una persona coraggiosa. Mi piace. Cominciate da dove c'è l'acqua. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_kind: {
      type: "chat", art: "📱", place: "Mercoledì mattina",
      msgs: [["unknown", "In questo campo la gentilezza porta lontano. Cominciate da dove c'è l'acqua. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_sister: {
      type: "chat", art: "📱", place: "Mercoledì mattina",
      msgs: [
        ["sis", "ok questa cosa è INQUIETANTISSIMA"],
        ["sis", "e TROPPO emozionante"],
        ["sis", "lo risolviamo. insieme."],
        ["unknown", "Cominciate da dove c'è l'acqua. 🧺"]
      ],
      go: "c3_intro"
    },

    // ───────── Capitolo 3: L'indagine ─────────
    c3_intro: {
      art: "🔎", place: "Bungalow 4 · mercoledì",
      lines: [
        { m: "Tornata al bungalow, Margot prende un taccuino. Ogni detective di ogni libro che ha letto ha un taccuino.",
          a: "Tornata al bungalow, Anouk prende un taccuino e disegna una lente d'ingrandimento sulla copertina. Se devi indagare, almeno fallo con stile." },
        ["sis", "Ok. Abbiamo tempo fino a cena prima che Mauro venga a controllarci. Bastano per tre posti, forse."],
        "Quattro posti potrebbero nascondere delle risposte: la rimessa delle barche, la mensa, il sentiero nel bosco e il Bungalow 7, dove dormono Johannes e Keo.",
        "Tre prima di cena. Scegli bene."
      ],
      go: "hub"
    },

    hub: {
      type: "hub", art: "🗺️", place: "Mappa del campo · mercoledì",
      lines: ["Dove andiamo adesso?"],
      slots: 3,
      interrupt: { after: 1, go: "c3_chat" },
      after: "c3_sister",
      places: [
        { id: "boathouse", icon: "🛶", t: "Rimessa",          go: "b1" },
        { id: "messhall",  icon: "🍳", t: "Mensa",            go: "m1" },
        { id: "forest",    icon: "🌲", t: "Sentiero nel bosco", go: "f1" },
        { id: "cabin7",    icon: "🛖", t: "Bungalow 7",       go: "c7" }
      ]
    },

    // Rimessa
    b1: {
      art: "🛶", place: "Rimessa",
      lines: [
        "La rimessa sa di legno bagnato e crema solare. Le pagaie sono appese alle pareti. Le canoe sono in fila ordinata, numerate da 1 a 8.",
        "Solo che la numero 7 non è in fila. È nell'angolo, sotto un pesante telo blu.",
        "Fango fresco sul pavimento porta dritto lì."
      ],
      choices: [
        { t: "Togli il telo", go: [{ if: { min: { courage: 2 } }, go: "b_tarp" }, { go: "b_scared" }] }
      ]
    },
    b_tarp: {
      art: "🛶", place: "Rimessa",
      fx: { clue: "canoe" },
      lines: [
        "{hero} afferra un angolo e tira. Il telo scivola via con un tonfo pesante.",
        "La canoa n. 7 ha una lunga crepa sul fianco e un'ammaccatura davanti, come se avesse colpito uno scoglio. Forte. Al buio, magari. Durante un temporale.",
        { m: "“Capitolo uno,” sussurra Margot. “La barca danneggiata.”",
          a: "Anouk si accovaccia. Sull'ammaccatura c'è un graffio di plastica gialla, come se un poncho ci avesse strisciato contro." },
        "Qualcuno l'ha nascosta. Qualcuno che non voleva che si sapesse che la canoa n. 7 era rotta."
      ],
      go: "hub"
    },
    b_scared: {
      art: "🛶", place: "Rimessa",
      lines: [
        "{hero} allunga la mano verso il telo, e sente dei passi sul pontile.",
        "Il cuore le salta in gola. Si nasconde dietro la rastrelliera delle pagaie proprio mentre Mauro entra fischiettando, prende un giubbotto salvagente ed esce di nuovo.",
        "Quando il cuore rallenta, è troppo scossa per riprovarci. Forse, se fosse stata un po' più coraggiosa questa settimana…"
      ],
      go: "hub"
    },

    // Mensa
    m1: {
      art: "🍳", place: "Mensa",
      lines: [
        "La mensa è vuota, tranne Julie, che pulisce i tavoli canticchiando.",
        "Lo scaffale dello spaccio in fondo è vuoto dove prima c'era la cassetta dei soldi. Sulla lavagna, con la calligrafia di Julie: PICNIC VENERDÌ! 🧺 (se la Notte delle Lanterne sopravvive)",
        ["julie", "Ah. Una detective. Si capisce dal taccuino."]
      ],
      choices: [
        { t: "Prima raccontale una barzelletta", fx: { julie: 1 }, go: "m_joke" },
        { t: "Chiedile cosa ha visto la notte del temporale", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_joke: {
      art: "🍳", place: "Mensa",
      lines: [
        { m: "“Perché il libro è entrato nella squadra di pallamano?” chiede Margot. “Perché voleva fare un bel lancio… editoriale.”",
          a: "“Cosa fa una giocatrice di basket con un gomitolo?” chiede Anouk. “Un tiro a maglia… da tre punti!”" },
        "Julie ride così forte che deve sedersi.",
        ["julie", "Terribile. Meravigliosa. Siediti, siediti. Cosa vuoi sapere?"]
      ],
      choices: [
        { t: "Chiedile cosa ha visto la notte del temporale", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_witness: {
      art: "🍳", place: "Mensa",
      fx: { clue: "whistle" },
      lines: [
        ["julie", "Detto tra noi? Durante il temporale ero qui, a controllare il congelatore quando è saltata la luce."],
        ["julie", "Ho sentito la porta dello spaccio. Non ho visto la faccia, solo un poncho giallo, come quelli di tutti. Ma chiunque fosse… fischiettava."],
        ["julie", "Quel motivetto sciocco. Da-da-dii-da-DUM. Sai quale."],
        "{hero} lo sa benissimo. Keo lo fischietta ogni singola mattina andando a colazione.",
        ["julie", "Io non dico niente. Sono una cuoca. Sento solo delle cose."]
      ],
      go: "m_end"
    },
    m_busy: {
      art: "🍳", place: "Mensa",
      lines: [
        ["julie", "Mmm. Ho ottanta pranzi da preparare, tesoro. Chiedimelo un'altra volta."],
        "Torna al suo pentolone gigante. Forse, se {hero} fosse stata un po' più gentile con lei questa settimana…"
      ],
      go: "m_end"
    },
    m_end: {
      art: "🍳", place: "Mensa",
      lines: ["Uscendo, {hero} passa davanti alla lavagna e alla scatola degli oggetti smarriti vicino alla porta della cucina."],
      choices: [
        { t: "Leggi meglio la lavagna", if: { not: { clue: "picnic" } }, go: "m_board" },
        { t: "Fruga nella scatola degli oggetti smarriti", if: { not: { clue: "phone" } }, go: "m_box" },
        { t: "Esci dalla mensa", go: "hub" }
      ]
    },
    m_board: {
      art: "🧺", place: "Mensa",
      fx: { clue: "picnic" },
      lines: [
        "PICNIC VENERDÌ! 🧺, con la calligrafia tondeggiante di Julie e un piccolo disegno di un cestino.",
        "{hero} la fissa. Quel cestino. Ha visto quell'emoji da qualche parte molto di recente…",
        "Lo Sconosciuto firma ogni singolo messaggio con 🧺."
      ],
      go: "m_end"
    },
    m_box: {
      art: "📱", place: "Mensa",
      fx: { clue: "phone" },
      lines: [
        "Oggetti smarriti: un'infradito, tre borracce, l'apparecchio per i denti di qualcuno (che schifo)… e un telefono.",
        "È il telefono di riserva del campo, quello che gli animatori prestano a chi perde il suo. Lo schermo si accende: 1 nuovo messaggio in “Bungalow 4 + amici 🏕️”.",
        "Perché il telefono di riserva del campo è in cucina? E perché è nella loro chat di gruppo?"
      ],
      go: "m_end"
    },

    // Sentiero nel bosco
    f1: {
      art: "🌲", place: "Sentiero nel bosco",
      fx: { clue: "prints" },
      lines: [
        "Il sentiero nel bosco va dalla rimessa, passa dietro la mensa e sale sulla collina fino alla vecchia stazione meteo del campo.",
        "Il temporale l'ha trasformato in fango, e il fango si ricorda tutto.",
        "Impronte fresche. Scarpe da ginnastica grandi, con delle stelline impresse in ogni orma. Vanno dalla rimessa… dritte alla porta sul retro dello spaccio.",
        { m: "Margot si accovaccia come una detective sulla copertina di un libro. Stelle. Quelle stelle le ha già viste, sul pontile.",
          a: "Anouk di scarpe se ne intende. Quelle sono suole con le stelle in edizione limitata. Al campo le porta una sola persona: Keo." },
        "Più su, sulla collina, qualcuno è seduto da solo su una roccia vicino alla stazione meteo. Johannes."
      ],
      choices: [
        { t: "Siediti accanto a lui e chiedigli se sta bene", fx: { kindness: 1 }, go: [{ if: { min: { kindness: 2 } }, go: "f_alibi" }, { go: "f_closed" }] },
        { t: "Chiedigli direttamente cosa faceva stanotte", go: "f_closed" }
      ]
    },
    f_alibi: {
      art: "🌲", place: "Sentiero nel bosco",
      fx: { clue: "alibi" },
      lines: [
        "Johannes resta zitto a lungo. Poi:",
        ["johannes", "Quassù è l'unico posto dove c'è campo. Stanotte sono salito per chiamare mia mamma. Durante il temporale. Che stupido, lo so."],
        ["johannes", "È la prima volta che sto via da casa così tanto. Mi… mancano. Non volevo che nessuno lo sapesse."],
        "Ecco perché è tornato fradicio. Non lo spaccio. La collina.",
        ["johannes", "Per favore, non dirlo a tutti."],
        ["hero", "Non lo dirò. Promesso."]
      ],
      go: "hub"
    },
    f_closed: {
      art: "🌲", place: "Sentiero nel bosco",
      lines: [
        ["johannes", "Perché tutti pensano che sia stato io?"],
        "Si alza e scende dalla collina prima che {hero} possa dire altro.",
        "Forse è stata un po' troppo diretta."
      ],
      go: "hub"
    },

    // Bungalow 7
    c7: {
      art: "🛖", place: "Bungalow 7",
      lines: [
        "Il Bungalow 7 sa di calzini e di antizanzare. Il letto di Johannes è in ordine. Quello di Keo… no.",
        "Johannes è dentro e legge sul letto. Alza lo sguardo, nervoso."
      ],
      choices: [
        { t: "Chiedi gentilmente a Johannes se puoi dare un'occhiata", fx: { kindness: 1 }, go: "c7_polite" },
        { t: "Aspetta che esca, poi curiosa in giro", fx: { kindness: -1 }, go: "c7_snoop" }
      ]
    },
    c7_polite: {
      art: "🛖", place: "Bungalow 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        ["johannes", "Ehm… certo. Non ho niente da nascondere."],
        "Appesa al suo letto c'è una giacca blu scuro, ancora umida. Non un poncho giallo. Il suo poncho è piegato nell'armadietto, asciuttissimo.",
        { m: "Margot se lo segna. In un buon giallo, il sospettato più ovvio non è quasi mai il colpevole.",
          a: "Anouk lo nota subito: il suo poncho non è mai stato nemmeno aperto. Ha ancora le pieghe del negozio." },
        "Accanto al letto di Keo, nel cestino, c'è una pagina accartocciata strappata da un catalogo. Una canoa. Un prezzo cerchiato col pennarello rosso: €480.",
        ["johannes", "È di Keo. È strano con i soldi da tutta la settimana."]
      ],
      go: "hub"
    },
    c7_snoop: {
      art: "🛖", place: "Bungalow 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        "{hero} aspetta dietro il bungalow finché Johannes va alle docce, poi sgattaiola dentro.",
        "La sua giacca blu scuro è appesa al letto, ancora umida. Era decisamente fuori durante il temporale.",
        "Nel cestino accanto al letto di Keo: una pagina di catalogo accartocciata. Una canoa, con un prezzo cerchiato in rosso: €480.",
        "Passi! {hero} esce dalla finestra sul retro appena in tempo. Il cuore le batte all'impazzata. Non è stata una bella sensazione."
      ],
      go: "hub"
    },

    c3_chat: {
      type: "chat", art: "📱", place: "Mercoledì, ora di pranzo",
      msgs: [
        ["keo", "qualcuno vuole giocare a carte prima di pranzo? 🃏"],
        ["sis", "siamo impegnate 🕵️‍♀️"],
        ["hero", "@Sconosciuto altri indizi?"],
        ["system", "2 ore dopo"],
        ["unknown", "Scusate. Il pienone del pranzo. Guardate le barche. 🧺"]
      ],
      choices: [
        { t: "pienone del pranzo?? che vuol dire 🤔", fx: { clue: "silence" }, go: "c3_chat_notice" },
        { t: "ok grazie!", go: "hub" }
      ]
    },
    c3_chat_notice: {
      type: "chat", art: "📱", place: "Mercoledì, ora di pranzo",
      msgs: [
        ["unknown", "…niente. Ero impegnato. 🧺"],
        ["sis", "sospetto 👀"]
      ],
      go: "hub"
    },

    c3_sister: {
      art: "🌅", place: "Bungalow 4 · mercoledì sera",
      lines: [
        "Il sole sta tramontando. Il taccuino è pieno di scarabocchi e frecce.",
        ["sis", "{hero}… lo facciamo insieme? Cioè, davvero insieme? Perché tra un'ora c'è il falò, e Mauro vuole delle risposte."]
      ],
      choices: [
        { t: "“Insieme. Sempre.”", fx: { bond: 1 }, go: "c3_sister_yes" },
        { t: "“Ci penso io. Me ne occupo da sola.”", fx: { bond: -1 }, go: "c3_sister_no" }
      ]
    },
    c3_sister_yes: {
      art: "🌅", place: "Bungalow 4 · mercoledì sera",
      lines: [
        ["sis", "Bene. Perché comunque non te l'avrei lasciato fare da sola."],
        "{sis} le dà una spallata. Vanno al falò fianco a fianco."
      ],
      go: "c4_campfire"
    },
    c3_sister_no: {
      art: "🌅", place: "Bungalow 4 · mercoledì sera",
      lines: [
        ["sis", "…Ah. Ok. Certo."],
        "{sis} si zittisce e va avanti verso il falò senza aspettarla."
      ],
      go: "c4_campfire"
    },

    // ───────── Capitolo 4: Il confronto ─────────
    c4_campfire: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        "Mauro convoca un falò d'emergenza. Ci sono tutti. Nessuno arrostisce marshmallow.",
        ["mauro", "Ok. Ultima possibilità prima che annulli le lanterne. Qualcuno ha qualcosa da dire?"],
        "Johannes fissa il fuoco. Keo comincia a fischiettare il suo motivetto, poi si ferma. In fretta.",
        "{hero} abbassa lo sguardo sul taccuino.",
        { if: { min: { bond: 3 } }, line: ["sis", "Qualunque cosa decidi, io sono qui."] }
      ],
      choices: [
        { t: "Alzati e accusa Johannes", go: "c4_johannes" },
        { t: "Alzati e accusa Keo", go: [{ if: { keyClues: 3 }, go: "c4_keo_proof" }, { go: "c4_keo_weak" }] },
        { t: "Chiedi piano a Keo di parlare lontano dal fuoco", if: { min: { kindness: 3 }, clue: "canoe" }, go: "c5_private" }
      ]
    },
    c4_johannes: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        "{hero} si alza e indica dall'altra parte del fuoco.",
        ["hero", "È stato Johannes. Era fuori durante il temporale. Lo sanno tutti."],
        "Johannes la guarda come se l'avesse appena spinto nel lago.",
        { if: { clue: "alibi" }, line: "E la cosa peggiore? Lei sa benissimo perché era fuori. Aveva promesso di non dirlo." },
        ["johannes", "Io non… io…"],
        "Si alza e si allontana nel buio."
      ],
      go: "end_wrong"
    },
    c4_keo_weak: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        ["hero", "È stato Keo."],
        "Keo ride, una risata grossa e rilassata.",
        ["keo", "Io? Ma dai. Dormivo. Chiedete a chiunque."],
        "{hero} apre il taccuino… ma non c'è abbastanza. Un sospetto non è una prova.",
        "Piano piano, gli sguardi di tutti tornano su Johannes."
      ],
      go: "end_wrong"
    },
    c4_keo_proof: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        ["hero", "È stato Keo."],
        "Keo ride. Ma {hero} non si ferma.",
        { if: { clue: "canoe" },     line: ["hero", "La canoa n. 7 è crepata e nascosta sotto un telo nella rimessa."] },
        { if: { clue: "prints" },    line: ["hero", "Ci sono impronte con le stelle dalla rimessa dritte allo spaccio. Sei l'unico con quelle scarpe."] },
        { if: { clue: "whistle" },   line: ["hero", "Qualcuno ha sentito il ladro fischiettare. Il tuo motivetto."] },
        { if: { clue: "pricelist" }, line: ["hero", "E nel tuo cestino c'è un listino delle canoe. €480."] },
        "La risata si spegne. Keo guarda per terra per un lungo, lunghissimo momento.",
        ["keo", "…Martedì notte ho preso la canoa n. 7. Prima che arrivasse il temporale. Volevo solo vedere il lago di notte. Poi è arrivato il vento e ho sbattuto contro gli scogli."],
        ["keo", "Sono andato nel panico. Pensavo che se ne compravo una nuova prima che qualcuno se ne accorgesse… Mi dispiace. I soldi sono nel mio borsone. Tutti."]
      ],
      go: [{ if: { min: { bond: 3 } }, go: "c5_detective" }, { go: "c5_lonewolf" }]
    },

    // ───────── Capitolo 5: Le conclusioni ─────────
    c5_detective: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        ["mauro", "Grazie per aver detto la verità, Keo. Della canoa parliamo domani. Insieme."],
        ["sis", "{hero}. Ce l'hai fatta. CE L'ABBIAMO fatta."],
        "Mauro risale sul ceppo. Traballa. Lui fa finta di niente.",
        ["mauro", "La Notte delle Lanterne… si FA!"]
      ],
      go: "end_detective"
    },
    c5_lonewolf: {
      art: "🔥", place: "Falò · mercoledì sera",
      lines: [
        ["mauro", "Grazie per aver detto la verità, Keo. La Notte delle Lanterne si fa."],
        "Tutti esultano. Le danno pacche sulle spalle.",
        "Ma quando si gira per festeggiare con {sis}, sua sorella è già tornata al bungalow."
      ],
      go: "end_lonewolf"
    },
    c5_private: {
      art: "🌙", place: "Il pontile · mercoledì sera",
      lines: [
        "{hero} prende Keo per la manica e indica con la testa il fondo buio del pontile, lontano dal fuoco.",
        ["hero", "Ho visto la canoa n. 7. So che è stato un incidente."],
        "Le spalle di Keo si abbassano, come se le avesse tenute su per tutta la settimana.",
        ["keo", "Volevo solo vedere il lago di notte. Poi è arrivato il temporale, ho sbattuto contro gli scogli e… sono andato nel panico. Pensavo che se la ripagavo, nessuno l'avrebbe mai saputo."],
        ["hero", "Mauro racconta barzellette terribili, ma è giusto. Diglielo tu. Vengo con te."],
        "Keo fa un respiro profondo. Tornano al fuoco insieme.",
        ["keo", "Mauro? Devo dirti una cosa."],
        "Più tardi, Mauro decide che Keo passerà gli ultimi giorni del campo a riparare con lui la canoa n. 7, e ogni centesimo torna dritto alla Notte delle Lanterne.",
        ["mauro", "Onestà e un kit per riparare le canoe. La combinazione migliore che ci sia."]
      ],
      go: "end_second"
    },

    // ───────── Finali ─────────
    end_detective: {
      type: "ending", ending: "detective", art: "🏮", place: "Notte delle Lanterne · sabato",
      lines: [
        "Sabato sera. Cento lanterne si alzano sopra il lago, arancioni contro il cielo scuro.",
        { m: "Margot non ha portato un libro. Beh, uno l'ha portato. Ma non lo apre neanche una volta.",
          a: "Anouk ha dipinto ogni singola lanterna. Su alcune ci sono dei minuscoli satelliti." },
        "{hero} e {sis} accendono insieme la prima lanterna e la lasciano andare.",
        "Johannes ride con gli altri. Keo saluta dalla rimessa, già intento a carteggiare la canoa n. 7.",
        "Caso chiuso."
      ],
      secret: true
    },
    end_wrong: {
      type: "ending", ending: "wrong", art: "💔", place: "Notte delle Lanterne · sabato",
      lines: [
        "La Notte delle Lanterne si fa comunque. Venerdì i soldi ricompaiono misteriosamente nella scatola degli oggetti smarriti.",
        "Ma Johannes passa tutta la festa da solo in fondo al pontile. Per il resto dell'estate non rivolge più la parola a {hero}.",
        "Da qualche parte tra la folla, Keo ride un po' troppo forte.",
        "Forse le è sfuggito qualcosa…"
      ]
    },
    end_second: {
      type: "ending", ending: "second", art: "🤝", place: "Notte delle Lanterne · sabato",
      lines: [
        "Sabato sera. Le lanterne salgono sopra il lago, e sull'acqua scivola la canoa n. 7 appena riparata, con Keo e Mauro che pagaiano e litigano su chi deve guidare.",
        "{hero}, {sis} e Johannes sono seduti sul pontile con i piedi nell'acqua.",
        ["keo", "Ehi! Grazie. Per non averne fatto uno spettacolo."],
        "A volte risolvere un mistero non vuol dire catturare qualcuno. Vuol dire aiutarlo a tornare."
      ],
      secret: true
    },
    end_lonewolf: {
      type: "ending", ending: "lonewolf", art: "🐺", place: "Notte delle Lanterne · sabato",
      lines: [
        "La Notte delle Lanterne è salva. Tutti dicono che {hero} è un genio.",
        "Ma quando le lanterne si alzano, {sis} guarda dall'altra parte del pontile. Da sola.",
        "{hero} ha risolto il caso. Solo che non ha nessuno con cui festeggiare.",
        "Forse la prossima volta… insieme?"
      ]
    },

    secret_1: {
      art: "🧺", place: "Cucina · sabato mattina",
      lines: [
        "Resta ancora un mistero. Chi era lo Sconosciuto?",
        "{hero} e {sis} spingono la porta della cucina. Julie sta riempiendo un ENORME cestino da picnic.",
        "{hero} prende il telefono e scrive nella chat di gruppo: “Bel cestino, Sconosciuto. 🧺”",
        "Da qualche parte in cucina, un telefono vibra. Il telefono di riserva del campo, mezzo nascosto sotto uno strofinaccio.",
        "Julie si blocca. Poi si gira lentamente, sorridendo.",
        ["julie", "Ok. Mi avete beccata."],
        ["julie", "Quella notte ho visto Keo. Ma ho pensato: se lo dico e basta a Mauro, Keo finisce nei guai e non impara niente. Se ci arrivate voi due… forse imparano tutti qualcosa."],
        ["julie", "E poi ho sempre sognato di essere una misteriosa sconosciuta. È stato MOLTO divertente."],
        ["sis", "Sei assurda."],
        ["julie", "Grazie. Adesso aiutatemi a portare questo cestino. Oggi c'è il picnic."]
      ],
      go: "end_secret"
    },
    end_secret: {
      type: "ending", ending: "secret", art: "🧺", place: "Picnic sul lago",
      lines: [
        "Quel pomeriggio tutti mangiano il picnic di Julie sull'erba vicino al lago. I panini hanno la forma di satelliti. Sembrano patate.",
        "Julie alza la sua limonata.",
        ["julie", "Alle migliori detective che l'EUMETSAT Summer Camp abbia mai avuto!"],
        "Hai trovato il finale segreto. 🧺"
      ]
    }
  }
};
