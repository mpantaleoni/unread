// Unread — histoire en français. Même structure que en.js : seuls les textes changent.
window.STORY = window.STORY || {};
window.STORY.fr = {
  ui: {
    title: "Unread",
    tagline: "Un mystère à l'EUMETSAT Summer Camp",
    newGame: "Nouvelle partie",
    continue: "Continuer",
    endings: "Fins",
    endingsFound: "{n}/{total} fins trouvées",
    whoAreYou: "Qui es-tu ?",
    pickAvatar: "Choisis ta photo de profil",
    start: "Commencer",
    next: "Continuer",
    notebook: "Carnet",
    noClues: "Rien pour l'instant. Ouvre l'œil.",
    close: "Fermer",
    menu: "Menu",
    backToTitle: "Retour au titre",
    playAgain: "Rejouer",
    oneMore: "Attends… encore une chose",
    endingUnlocked: "Fin débloquée",
    locked: "???",
    timeLeft: "Temps avant le dîner",
    visited: "Visité",
    resetProgress: "Effacer toute la progression",
    resetConfirm: "Effacer la partie sauvegardée et toutes les fins ?",
    language: "Langue",
    soon: "bientôt",
    tapToSkip: "Touche pour passer",
    clueAdded: "Nouvel indice : {clue}",
    typing: "écrit…",
    introDay: "mercredi",
    introFrom: "Numéro inconnu",
    introNow: "maintenant",
    introOpen: "Touche pour ouvrir",
    introMsgs: ["Tu es réveillée ?", "Il se passe quelque chose au bord du lac.", "Regarde par la fenêtre. Maintenant. 👀"],
    introReply: "c'est qui ??",
    introLast: "Tu le sauras d'ici samedi. 🧺",
    introEarlier: "Trois jours plus tôt…",
    introContinue: "Touche pour continuer",
    skip: "Passer",
    sound: "Son"
  },

  characters: {
    margot:   { name: "Margot",   emoji: "📚" },
    anouk:    { name: "Anouk",    emoji: "🎨" },
    julie:    { name: "Julie",    emoji: "👩‍🍳" },
    mauro:    { name: "Mauro",    emoji: "🧢" },
    keo:      { name: "Keo",      emoji: "😎" },
    johannes: { name: "Johannes", emoji: "🎧" },
    unknown:  { name: "Inconnu",  emoji: "❔" }
  },

  heroes: {
    margot: { blurb: "Joue au handball. Lit un polar par jour." },
    anouk:  { blurb: "Basket, tricot, peinture et un style impeccable." }
  },

  avatars: ["📚", "🎨", "🤾‍♀️", "🏀", "🧶", "👗", "🌻", "🦊"],

  chatName: "Chalet 4 + amis 🏕️",

  clues: {
    outside:   { icon: "🌙", name: "Dehors pendant l'orage",     text: "Quelqu'un a entendu Johannes rentrer trempé la nuit de l'orage." },
    canoe:     { icon: "🛶", name: "Canoë n° 7",                 text: "Fissuré et caché sous une bâche dans le hangar à bateaux. Quelqu'un a heurté des rochers dans le noir." },
    prints:    { icon: "👟", name: "Empreintes étoilées",        text: "Du hangar à bateaux jusqu'à la porte de derrière de la boutique. Les baskets de Keo ont des étoiles sous la semelle." },
    whistle:   { icon: "🎵", name: "L'air sifflé",               text: "Julie a entendu le voleur siffler. Keo siffle cet air tous les matins." },
    pricelist: { icon: "📄", name: "Liste de prix des canoës",   text: "Arrachée d'un catalogue, 480 € entourés en rouge. Trouvée dans la poubelle à côté du lit de Keo." },
    jacket:    { icon: "🧥", name: "La veste mouillée de Johannes", text: "Bleu marine et encore humide. Mais son poncho jaune n'a jamais été déplié." },
    alibi:     { icon: "📞", name: "Le secret de Johannes",      text: "Pendant l'orage, il était sur la colline pour appeler chez lui. Sa famille lui manque." },
    silence:   { icon: "🔕", name: "Silence à l'heure du déjeuner", text: "L'Inconnu s'est tu pile quand la cuisine était la plus occupée." },
    picnic:    { icon: "🧺", name: "Le panier",                  text: "L'Inconnu signe chaque message avec 🧺. Comme le tableau « Pique-nique vendredi »." },
    phone:     { icon: "📱", name: "Le téléphone de secours",    text: "Le téléphone de secours du camp, dans les objets trouvés de la cuisine, connecté à votre groupe." }
  },
  keyClues: ["canoe", "prints", "whistle", "pricelist"],
  secretClues: ["silence", "picnic", "phone"],

  endings: {
    detective: { icon: "🔍", title: "La Détective" },
    wrong:     { icon: "💔", title: "La fausse accusation" },
    second:    { icon: "🤝", title: "Une seconde chance" },
    lonewolf:  { icon: "🐺", title: "Loup solitaire" },
    secret:    { icon: "🧺", title: "C'était Julie" }
  },

  start: "c1_campfire",

  scenes: {
    // ───────── Chapitre 1 : La dernière semaine au camp ─────────
    c1_campfire: {
      art: "🔥", place: "Feu de camp · dimanche soir",
      lines: [
        "C'est la dernière semaine de l'EUMETSAT Summer Camp, et le feu de camp crépite comme s'il le savait.",
        { m: "Margot a passé l'été à gagner des matchs de handball sur le terrain de sport et à lire des polars sous le grand pin. Elle en est déjà à son troisième cette semaine.",
          a: "Anouk a passé l'été à shooter sur le vieux terrain de basket, à peindre le lac au coucher du soleil et à tricoter une écharpe dont personne n'a besoin en juillet." },
        "Sa sœur {sis} est serrée contre elle sur le banc en rondins et lui pique ses marshmallows.",
        ["mauro", "Ok, tout le monde ! Grande annonce !"],
        "Mauro, l'animateur du camp, monte sur une souche. Elle vacille. Il fait comme si de rien n'était.",
        ["mauro", "Samedi soir, c'est… la NUIT DES LANTERNES ! De la musique, à manger, et cent lanternes au-dessus du lac !"],
        "Tout le monde applaudit. Keo, qui est ami avec littéralement tout le monde, fait un roulement de tambour sur une glacière.",
        ["keo", "La. Meilleure. Nuit. De. L'été !"],
        "Au bord du cercle, Johannes, dont c'est le premier été ici, sourit en silence et resserre son sweat. Il reste surtout dans son coin.",
        ["mauro", "Et aussi : les satellites annoncent un orage cette semaine. Les satellites ne se trompent jamais. Moi, souvent. Écoutez les satellites."],
        ["sis", "{hero}. Ça va être la meilleure semaine de tous les temps."]
      ],
      go: "c1_breakfast"
    },

    c1_breakfast: {
      art: "🥞", place: "Réfectoire · lundi matin",
      lines: [
        "Le petit-déjeuner au réfectoire est bruyant, collant, et sent les pancakes.",
        "Julie s'occupe de la cuisine et de la petite boutique du camp au fond de la salle. Elle est intraitable sur les chaussures boueuses et hilarante sur tout le reste.",
        ["julie", "Aujourd'hui, les pancakes ont la forme de satellites. Ne me dites pas qu'ils ressemblent à des patates. Je sais."],
        "Puis : CRASH. Tout un plateau de pancakes glisse du comptoir et s'écrase par terre. Quelques-uns rigolent. Quelqu'un applaudit."
      ],
      choices: [
        { t: "Aider Julie à les ramasser", fx: { kindness: 1, julie: 1 }, go: "c1_breakfast_help" },
        { t: "Rire avec les autres", go: "c1_breakfast_laugh" }
      ]
    },
    c1_breakfast_help: {
      art: "🥞", place: "Réfectoire · lundi matin",
      lines: [
        "{hero} s'agenouille et commence à empiler les pancakes sur le plateau.",
        ["julie", "Merci, ma chérie. Tu as un brillant avenir dans le sauvetage de pancakes."],
        "Elle fait un clin d'œil et glisse un pancake de plus dans l'assiette de {hero}.",
        ["julie", "Règle de la cuisine : ceux qui aident ont droit au rab. Et vendredi : PIQUE-NIQUE. Je prépare déjà le panier."]
      ],
      go: "c1_lake"
    },
    c1_breakfast_laugh: {
      art: "🥞", place: "Réfectoire · lundi matin",
      lines: [
        "{hero} rigole. C'est VRAI que c'est un peu drôle.",
        "Julie lève un sourcil, balaie les pancakes et ne dit pas un mot. Mais les cuisinières se souviennent des visages. Les cuisinières se souviennent toujours des visages."
      ],
      go: "c1_lake"
    },

    c1_lake: {
      art: "🏊", place: "Le lac · lundi après-midi",
      lines: [
        "L'après-midi est chaud et le lac scintille. Tout le monde est sur le ponton en bois.",
        "Keo a laissé ses baskets près de l'échelle : toutes blanches, avec de petites étoiles sous les semelles. Personne d'autre au camp n'a des chaussures comme ça.",
        ["keo", "Ok ! Qui a le courage de nager jusqu'au radeau là-bas ? Le dernier arrivé porte les lanternes samedi !"],
        ["sis", "Euh… ce radeau est super loin. On nage juste ici, près du ponton ?"]
      ],
      choices: [
        { t: { m: "Faire la course jusqu'au radeau (les jambes de handballeuse ne se fatiguent jamais)", a: "Faire la course jusqu'au radeau (les jambes de basketteuse ne se fatiguent jamais)" }, fx: { courage: 1 }, go: "c1_lake_race" },
        { t: "Rester avec {sis}", fx: { bond: 1 }, go: "c1_lake_stay" }
      ]
    },
    c1_lake_race: {
      art: "🏊", place: "Le lac · lundi après-midi",
      lines: [
        "{hero} plonge. L'eau est glaciale pendant exactement trois secondes, puis parfaite.",
        "Elle touche le radeau une seconde après Keo, qui rit, complètement essoufflé.",
        ["keo", "Ok, ok, t'es rapide. Ne dis à personne que tu m'as presque battu."],
        "Sur le ponton, {sis} fait signe de la main. Elle a l'air un peu seule."
      ],
      go: "c1_chat"
    },
    c1_lake_stay: {
      art: "🏊", place: "Le lac · lundi après-midi",
      lines: [
        "{hero} reste près du ponton avec {sis}. Elles font la planche et regardent des nuages qui ressemblent étrangement à des pancakes.",
        ["sis", "Merci d'être restée. Les courses de Keo finissent toujours avec quelqu'un qui avale la moitié du lac."],
        "Là-bas sur le radeau, Keo s'applaudit tout seul."
      ],
      go: "c1_chat"
    },

    c1_chat: {
      type: "chat", art: "📱", place: "Lundi soir",
      msgs: [
        ["keo", "COMITÉ NUIT DES LANTERNES 🏮 qui est partant"],
        ["sis", "moiii"],
        ["johannes", "je peux aider à porter des trucs"],
        ["keo", "johannes parle !! 🎉"],
        ["sis", { m: "{hero} tu t'occupes de la déco. et PAS de livre à la fête 📚", a: "{hero} tu t'occupes de la déco évidemment. peins les lanternes stp 🎨" }],
        ["keo", "au fait les satellites annoncent un orage demain soir ⛈️"],
        ["keo", "mauro a dit « écoutez les satellites » genre 4 fois aujourd'hui 😂"]
      ],
      choices: [
        { t: "je suis partante 🏮", go: "c2_storm" },
        { t: "les satellites ne se trompent jamais 🛰️", go: "c2_storm" }
      ]
    },

    // ───────── Chapitre 2 : L'orage ─────────
    c2_storm: {
      art: "⛈️", place: "Chalet 4 · mardi, minuit",
      lines: [
        "Les satellites avaient raison.",
        "Vers minuit, un coup de tonnerre fait trembler tout le chalet. La pluie martèle le toit. Puis : clic. Les lumières s'éteignent dans tout le camp.",
        "{hero} se redresse dans son lit. Quelque part dehors, une porte claque.",
        "Son téléphone vibre sur l'oreiller. Numéro inconnu : « Regarde par la fenêtre. »",
        "{sis} dort toujours. Comment, mystère."
      ],
      choices: [
        { t: "Réveiller {sis}", fx: { bond: 1 }, go: "c2_window_together" },
        { t: "Aller seule à la fenêtre", fx: { courage: 1 }, go: "c2_window_alone" }
      ]
    },
    c2_window_together: {
      art: "⛈️", place: "Chalet 4 · mardi, minuit",
      lines: [
        ["sis", "Mmmh… quoi… c'est déjà le matin ?"],
        ["hero", "Chut. Regarde."],
        "Elles collent toutes les deux le nez contre la vitre froide. Un éclair —",
        "— et pendant une seconde, elles voient quelqu'un courir à travers le pré vers le lac, dans un des ponchos jaunes du camp.",
        ["sis", "Qui est dehors par un temps PAREIL ?"],
        { m: "Margot fronce les sourcils. Dans ses livres, personne ne court sous l'orage à minuit pour une bonne raison.",
          a: "Anouk plisse les yeux. Tout le monde a reçu le même poncho jaune le premier jour. Ça pourrait être n'importe qui." },
        "Puis le noir revient, et la silhouette a disparu."
      ],
      go: "c2_morning"
    },
    c2_window_alone: {
      art: "⛈️", place: "Chalet 4 · mardi, minuit",
      lines: [
        "{hero} se glisse hors de son lit et va sur la pointe des pieds jusqu'à la fenêtre. La vitre est froide. Un éclair —",
        "— et pendant une seconde, elle voit quelqu'un courir à travers le pré vers le lac, dans un des ponchos jaunes du camp.",
        { m: "Margot fronce les sourcils. Dans ses livres, personne ne court sous l'orage à minuit pour une bonne raison.",
          a: "Anouk plisse les yeux. Tout le monde a reçu le même poncho jaune le premier jour. Ça pourrait être n'importe qui." },
        "Puis le noir revient. Elle reste là longtemps, mais la silhouette ne revient pas."
      ],
      go: "c2_morning"
    },

    c2_morning: {
      art: "📣", place: "Réfectoire · mercredi matin",
      fx: { clue: "outside" },
      lines: [
        "Le matin, le ciel est tout propre, mais personne ne sourit. Mauro est debout sur une chaise. Julie est derrière lui, les bras croisés.",
        ["mauro", "Tout le monde. Cette nuit, pendant l'orage, quelqu'un a pris la caisse de la boutique du camp."],
        "Un murmure parcourt la salle.",
        ["mauro", "Cet argent, c'était pour la Nuit des Lanternes. Les lanternes. La nourriture. La musique. Sans lui…"],
        ["julie", "…pas de Nuit des Lanternes. Et j'avais prévu un TRÈS bon menu de pique-nique."],
        ["mauro", "Si l'argent revient d'ici samedi, on ne pose pas de questions. Sinon, la Nuit des Lanternes est annulée."],
        "Silence. Puis quelqu'un chuchote, juste assez fort pour que tout le monde entende :",
        "« Johannes était dehors cette nuit. Je l'ai entendu rentrer trempé. »",
        "Toutes les têtes se tournent. Johannes devient tout rouge et fixe ses céréales.",
        ["johannes", "Je… je n'ai rien pris."],
        "Personne n'a l'air convaincu. Sauf peut-être Keo, qui trouve soudain son jus d'orange très, très intéressant."
      ],
      go: "c2_chat"
    },

    c2_chat: {
      type: "chat", art: "📱", place: "Mercredi matin",
      msgs: [
        ["system", "Inconnu a rejoint le groupe"],
        ["unknown", "J'étais réveillé pendant l'orage. J'ai vu qui est entré dans la boutique. 👀"],
        ["keo", "euh c'est qui"],
        ["sis", "??? qui a ajouté ce numéro"],
        ["unknown", "Ne laissez pas mourir la Nuit des Lanternes. Regardez de plus près. 🧺"]
      ],
      choices: [
        { t: "mais QUI es-tu ?!", fx: { courage: 1 }, go: "c2_chat_brave" },
        { t: "aide-nous stp. qu'est-ce que tu as vu ?", fx: { kindness: 1 }, go: "c2_chat_kind" },
        { t: "📸 Faire une capture d'écran et la montrer à {sis}", fx: { bond: 1 }, say: false, go: "c2_chat_sister" }
      ]
    },
    c2_chat_brave: {
      type: "chat", art: "📱", place: "Mercredi matin",
      msgs: [["unknown", "Quelqu'un de courageux. J'aime ça. Commencez là où il y a de l'eau. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_kind: {
      type: "chat", art: "📱", place: "Mercredi matin",
      msgs: [["unknown", "Dans ce camp, la gentillesse mène loin. Commencez là où il y a de l'eau. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_sister: {
      type: "chat", art: "📱", place: "Mercredi matin",
      msgs: [
        ["sis", "ok c'est TROP flippant"],
        ["sis", "et TROP excitant"],
        ["sis", "on va résoudre ça. ensemble."],
        ["unknown", "Commencez là où il y a de l'eau. 🧺"]
      ],
      go: "c3_intro"
    },

    // ───────── Chapitre 3 : L'enquête ─────────
    c3_intro: {
      art: "🔎", place: "Chalet 4 · mercredi",
      lines: [
        { m: "De retour au chalet, Margot attrape un carnet. Chaque détective de chaque livre qu'elle a lu a un carnet.",
          a: "De retour au chalet, Anouk attrape un carnet et dessine une loupe sur la couverture. Quitte à enquêter, autant le faire avec style." },
        ["sis", "Ok. On a jusqu'au dîner avant que Mauro vienne vérifier. Ça laisse le temps pour trois endroits, peut-être."],
        "Quatre endroits pourraient cacher des réponses : le hangar à bateaux, le réfectoire, le sentier de la forêt et le Chalet 7, où dorment Johannes et Keo.",
        "Trois avant le dîner. Choisis bien."
      ],
      go: "hub"
    },

    hub: {
      type: "hub", art: "🗺️", place: "Plan du camp · mercredi",
      lines: ["On va où maintenant ?"],
      slots: 3,
      interrupt: { after: 1, go: "c3_chat" },
      after: "c3_sister",
      places: [
        { id: "boathouse", icon: "🛶", t: "Hangar à bateaux", go: "b1" },
        { id: "messhall",  icon: "🍳", t: "Réfectoire",       go: "m1" },
        { id: "forest",    icon: "🌲", t: "Sentier de la forêt", go: "f1" },
        { id: "cabin7",    icon: "🛖", t: "Chalet 7",         go: "c7" }
      ]
    },

    // Hangar à bateaux
    b1: {
      art: "🛶", place: "Hangar à bateaux",
      lines: [
        "Le hangar sent le bois mouillé et la crème solaire. Des pagaies sont accrochées aux murs. Les canoës sont alignés, numérotés de 1 à 8.",
        "Sauf que le numéro 7 n'est pas dans la rangée. Il est dans le coin, sous une lourde bâche bleue.",
        "De la boue fraîche sur le sol mène droit vers lui."
      ],
      choices: [
        { t: "Retirer la bâche", go: [{ if: { min: { courage: 2 } }, go: "b_tarp" }, { go: "b_scared" }] }
      ]
    },
    b_tarp: {
      art: "🛶", place: "Hangar à bateaux",
      fx: { clue: "canoe" },
      lines: [
        "{hero} attrape un coin et tire. La bâche glisse avec un bruit sourd.",
        "Le canoë n° 7 a une longue fissure sur le côté et un enfoncement à l'avant, comme s'il avait heurté un rocher. Fort. Dans le noir, peut-être. Pendant un orage.",
        { m: "« Chapitre un », chuchote Margot. « Le bateau abîmé. »",
          a: "Anouk s'accroupit. Il y a une trace de plastique jaune sur l'enfoncement, comme si un poncho avait frotté contre." },
        "Quelqu'un l'a caché. Quelqu'un qui ne voulait pas qu'on sache que le canoë n° 7 était cassé."
      ],
      go: "hub"
    },
    b_scared: {
      art: "🛶", place: "Hangar à bateaux",
      lines: [
        "{hero} tend la main vers la bâche, et entend des pas sur le ponton dehors.",
        "Son cœur fait un bond. Elle se cache derrière le râtelier à pagaies juste au moment où Mauro entre en sifflotant, prend un gilet de sauvetage et ressort.",
        "Quand son cœur se calme, elle est trop secouée pour réessayer. Si seulement elle avait été un peu plus courageuse cette semaine…"
      ],
      go: "hub"
    },

    // Réfectoire
    m1: {
      art: "🍳", place: "Réfectoire",
      lines: [
        "Le réfectoire est vide, à part Julie, qui essuie les tables en fredonnant.",
        "L'étagère de la boutique, au fond, est vide là où se trouvait la caisse. Sur le tableau, de l'écriture de Julie : PIQUE-NIQUE VENDREDI ! 🧺 (si la Nuit des Lanternes survit)",
        ["julie", "Ah. Une détective. Ça se voit au carnet."]
      ],
      choices: [
        { t: "Lui raconter une blague d'abord", fx: { julie: 1 }, go: "m_joke" },
        { t: "Lui demander ce qu'elle a vu la nuit de l'orage", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_joke: {
      art: "🍳", place: "Réfectoire",
      lines: [
        { m: "« Pourquoi le livre s'est-il inscrit au handball ? » demande Margot. « Parce qu'il voulait enfin tourner la page… et marquer ! »",
          a: "« Que fait une basketteuse avec de la laine ? » demande Anouk. « Elle tricote un panier ! »" },
        "Julie éclate de rire si fort qu'elle doit s'asseoir.",
        ["julie", "Affreux. Merveilleux. Assieds-toi, assieds-toi. Qu'est-ce que tu veux savoir ?"]
      ],
      choices: [
        { t: "Lui demander ce qu'elle a vu la nuit de l'orage", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_witness: {
      art: "🍳", place: "Réfectoire",
      fx: { clue: "whistle" },
      lines: [
        ["julie", "Entre nous ? J'étais ici pendant l'orage, je vérifiais le congélateur quand le courant a sauté."],
        ["julie", "J'ai entendu la porte de la boutique. Je n'ai pas vu de visage, juste un poncho jaune, comme tout le monde. Mais la personne… sifflait."],
        ["julie", "Ce petit air idiot. Da-da-di-da-DOUM. Tu vois lequel."],
        "{hero} voit très bien lequel. Keo le siffle chaque matin en allant au petit-déjeuner.",
        ["julie", "Moi, je ne dis rien. Je suis cuisinière. J'entends des choses, c'est tout."]
      ],
      go: "m_end"
    },
    m_busy: {
      art: "🍳", place: "Réfectoire",
      lines: [
        ["julie", "Hmm. J'ai quatre-vingts déjeuners à préparer, ma puce. Demande-moi une autre fois."],
        "Elle retourne à sa marmite géante. Si seulement {hero} avait été un peu plus gentille avec elle cette semaine…"
      ],
      go: "m_end"
    },
    m_end: {
      art: "🍳", place: "Réfectoire",
      lines: ["En sortant, {hero} passe devant le tableau et la boîte des objets trouvés près de la porte de la cuisine."],
      choices: [
        { t: "Lire le tableau de plus près", if: { not: { clue: "picnic" } }, go: "m_board" },
        { t: "Fouiller dans les objets trouvés", if: { not: { clue: "phone" } }, go: "m_box" },
        { t: "Quitter le réfectoire", go: "hub" }
      ]
    },
    m_board: {
      art: "🧺", place: "Réfectoire",
      fx: { clue: "picnic" },
      lines: [
        "PIQUE-NIQUE VENDREDI ! 🧺, de l'écriture toute ronde de Julie, avec un petit dessin de panier.",
        "{hero} le fixe. Ce panier. Elle a vu cet emoji quelque part très récemment…",
        "L'Inconnu signe chacun de ses messages avec 🧺."
      ],
      go: "m_end"
    },
    m_box: {
      art: "📱", place: "Réfectoire",
      fx: { clue: "phone" },
      lines: [
        "Objets trouvés : une tong, trois gourdes, l'appareil dentaire de quelqu'un (beurk)… et un téléphone.",
        "C'est le téléphone de secours du camp, celui que les animateurs prêtent à ceux qui perdent le leur. L'écran s'allume : 1 nouveau message dans « Chalet 4 + amis 🏕️ ».",
        "Pourquoi le téléphone de secours du camp est-il dans la cuisine ? Et pourquoi est-il dans leur groupe ?"
      ],
      go: "m_end"
    },

    // Sentier de la forêt
    f1: {
      art: "🌲", place: "Sentier de la forêt",
      fx: { clue: "prints" },
      lines: [
        "Le sentier de la forêt part du hangar à bateaux, passe derrière le réfectoire et monte sur la colline jusqu'à la vieille station météo du camp.",
        "L'orage l'a transformé en boue, et la boue se souvient de tout.",
        "Des empreintes fraîches. De grandes baskets, avec de petites étoiles imprimées dans chaque trace. Elles vont du hangar… droit à la porte de derrière de la boutique.",
        { m: "Margot s'accroupit comme une détective sur une couverture de livre. Des étoiles. Ces étoiles, elle les a déjà vues, sur le ponton.",
          a: "Anouk s'y connaît en chaussures. Ce sont des semelles étoilées en édition limitée. Une seule personne au camp en porte : Keo." },
        "Plus haut sur la colline, quelqu'un est assis seul sur un rocher près de la station météo. Johannes."
      ],
      choices: [
        { t: "T'asseoir à côté de lui et lui demander si ça va", fx: { kindness: 1 }, go: [{ if: { min: { kindness: 2 } }, go: "f_alibi" }, { go: "f_closed" }] },
        { t: "Lui demander directement ce qu'il faisait cette nuit", go: "f_closed" }
      ]
    },
    f_alibi: {
      art: "🌲", place: "Sentier de la forêt",
      fx: { clue: "alibi" },
      lines: [
        "Johannes se tait longtemps. Puis :",
        ["johannes", "Ici, c'est le seul endroit où il y a du réseau. Cette nuit, je suis monté appeler ma mère. Pendant l'orage. C'est bête, je sais."],
        ["johannes", "C'est la première fois que je pars aussi longtemps de chez moi. Ils… me manquent. Je ne voulais pas que quelqu'un le sache."],
        "Voilà pourquoi il est rentré trempé. Pas la boutique. La colline.",
        ["johannes", "S'il te plaît, ne le dis pas à tout le monde."],
        ["hero", "Je ne dirai rien. Promis."]
      ],
      go: "hub"
    },
    f_closed: {
      art: "🌲", place: "Sentier de la forêt",
      lines: [
        ["johannes", "Pourquoi tout le monde pense que c'est moi ?"],
        "Il se lève et redescend la colline avant que {hero} puisse ajouter quoi que ce soit.",
        "Elle a peut-être été un peu trop directe."
      ],
      go: "hub"
    },

    // Chalet 7
    c7: {
      art: "🛖", place: "Chalet 7",
      lines: [
        "Le Chalet 7 sent les chaussettes et l'anti-moustique. Le lit de Johannes est bien fait. Celui de Keo… pas du tout.",
        "Johannes est à l'intérieur, en train de lire sur son lit. Il lève les yeux, nerveux."
      ],
      choices: [
        { t: "Demander poliment à Johannes si tu peux jeter un œil", fx: { kindness: 1 }, go: "c7_polite" },
        { t: "Attendre qu'il parte, puis fouiller", fx: { kindness: -1 }, go: "c7_snoop" }
      ]
    },
    c7_polite: {
      art: "🛖", place: "Chalet 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        ["johannes", "Euh… d'accord. Je n'ai rien à cacher."],
        "Accrochée à son lit, il y a une veste bleu marine, encore humide. Pas un poncho jaune. Son poncho est plié dans son casier, sec comme tout.",
        { m: "Margot le note. Dans un bon polar, le suspect évident n'est presque jamais le coupable.",
          a: "Anouk le remarque tout de suite : son poncho n'a même jamais été déplié. Il a encore les plis du magasin." },
        "À côté du lit de Keo, dans la poubelle, il y a une page froissée arrachée d'un catalogue. Un canoë. Un prix entouré au feutre rouge : 480 €.",
        ["johannes", "C'est à Keo. Il est bizarre avec l'argent depuis le début de la semaine."]
      ],
      go: "hub"
    },
    c7_snoop: {
      art: "🛖", place: "Chalet 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        "{hero} attend derrière le chalet que Johannes parte aux douches, puis se faufile à l'intérieur.",
        "Sa veste bleu marine est accrochée au lit, encore humide. Il était bien dehors pendant l'orage.",
        "Dans la poubelle à côté du lit de Keo : une page de catalogue froissée. Un canoë, avec un prix entouré en rouge : 480 €.",
        "Des pas ! {hero} sort par la fenêtre de derrière juste à temps. Son cœur bat à toute allure. Ce n'était pas une sensation agréable."
      ],
      go: "hub"
    },

    c3_chat: {
      type: "chat", art: "📱", place: "Mercredi, midi",
      msgs: [
        ["keo", "quelqu'un veut jouer aux cartes avant le déjeuner ? 🃏"],
        ["sis", "on est occupées 🕵️‍♀️"],
        ["hero", "@Inconnu d'autres indices ?"],
        ["system", "2 heures plus tard"],
        ["unknown", "Désolé. Le coup de feu du déjeuner. Regardez les bateaux. 🧺"]
      ],
      choices: [
        { t: "le coup de feu du déjeuner ?? ça veut dire quoi 🤔", fx: { clue: "silence" }, go: "c3_chat_notice" },
        { t: "ok merci !", go: "hub" }
      ]
    },
    c3_chat_notice: {
      type: "chat", art: "📱", place: "Mercredi, midi",
      msgs: [
        ["unknown", "…rien. J'étais occupé. 🧺"],
        ["sis", "suspect 👀"]
      ],
      go: "hub"
    },

    c3_sister: {
      art: "🌅", place: "Chalet 4 · mercredi soir",
      lines: [
        "Le soleil se couche. Le carnet est rempli de gribouillis et de flèches.",
        ["sis", "{hero}… on le fait ensemble ? Genre vraiment ensemble ? Parce que le feu de camp est dans une heure, et Mauro veut des réponses."]
      ],
      choices: [
        { t: "« Ensemble. Toujours. »", fx: { bond: 1 }, go: "c3_sister_yes" },
        { t: "« Je gère. Je m'en occupe seule. »", fx: { bond: -1 }, go: "c3_sister_no" }
      ]
    },
    c3_sister_yes: {
      art: "🌅", place: "Chalet 4 · mercredi soir",
      lines: [
        ["sis", "Tant mieux. De toute façon, je n'allais pas te laisser faire ça toute seule."],
        "{sis} lui donne un petit coup d'épaule. Elles vont au feu de camp côte à côte."
      ],
      go: "c4_campfire"
    },
    c3_sister_no: {
      art: "🌅", place: "Chalet 4 · mercredi soir",
      lines: [
        ["sis", "…Ah. Ok. Bien sûr."],
        "{sis} se tait et part devant vers le feu de camp sans l'attendre."
      ],
      go: "c4_campfire"
    },

    // ───────── Chapitre 4 : La confrontation ─────────
    c4_campfire: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        "Mauro organise un feu de camp d'urgence. Tout le monde est là. Personne ne fait griller de marshmallows.",
        ["mauro", "Ok. Dernière chance avant que j'annule les lanternes. Quelqu'un a quelque chose à dire ?"],
        "Johannes fixe le feu. Keo commence à siffler son petit air, puis s'arrête. Vite.",
        "{hero} baisse les yeux sur son carnet.",
        { if: { min: { bond: 3 } }, line: ["sis", "Quoi que tu décides, je suis là."] }
      ],
      choices: [
        { t: "Te lever et accuser Johannes", go: "c4_johannes" },
        { t: "Te lever et accuser Keo", go: [{ if: { keyClues: 3 }, go: "c4_keo_proof" }, { go: "c4_keo_weak" }] },
        { t: "Demander discrètement à Keo de parler à l'écart du feu", if: { min: { kindness: 3 }, clue: "canoe" }, go: "c5_private" }
      ]
    },
    c4_johannes: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        "{hero} se lève et pointe du doigt de l'autre côté du feu.",
        ["hero", "C'est Johannes. Il était dehors pendant l'orage. Tout le monde le sait."],
        "Johannes la regarde comme si elle venait de le pousser dans le lac.",
        { if: { clue: "alibi" }, line: "Et le pire ? Elle sait exactement pourquoi il était dehors. Elle avait promis de ne rien dire." },
        ["johannes", "Je n'ai pas… je…"],
        "Il se lève et s'éloigne dans le noir."
      ],
      go: "end_wrong"
    },
    c4_keo_weak: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        ["hero", "C'est Keo."],
        "Keo éclate d'un grand rire décontracté.",
        ["keo", "Moi ? Arrête. Je dormais. Demande à n'importe qui."],
        "{hero} ouvre son carnet… mais il n'y a pas assez dedans. Un soupçon, ce n'est pas une preuve.",
        "Lentement, tous les regards reviennent vers Johannes."
      ],
      go: "end_wrong"
    },
    c4_keo_proof: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        ["hero", "C'est Keo."],
        "Keo rigole. Mais {hero} ne s'arrête pas.",
        { if: { clue: "canoe" },     line: ["hero", "Le canoë n° 7 est fissuré et caché sous une bâche dans le hangar à bateaux."] },
        { if: { clue: "prints" },    line: ["hero", "Des empreintes étoilées vont du hangar droit à la boutique. Tu es le seul à avoir ces baskets."] },
        { if: { clue: "whistle" },   line: ["hero", "Quelqu'un a entendu le voleur siffler. Ton air."] },
        { if: { clue: "pricelist" }, line: ["hero", "Et il y a une liste de prix de canoës dans ta poubelle. 480 €."] },
        "Le rire s'éteint. Keo regarde le sol pendant un long, très long moment.",
        ["keo", "…J'ai pris le canoë n° 7 mardi soir. Avant que l'orage arrive. Je voulais juste voir le lac de nuit. Puis le vent s'est levé et j'ai heurté les rochers."],
        ["keo", "J'ai paniqué. Je me suis dit que si j'en achetais un neuf avant que quelqu'un remarque… Je suis désolé. L'argent est dans mon sac. Tout."]
      ],
      go: [{ if: { min: { bond: 3 } }, go: "c5_detective" }, { go: "c5_lonewolf" }]
    },

    // ───────── Chapitre 5 : Le dénouement ─────────
    c5_detective: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        ["mauro", "Merci d'avoir dit la vérité, Keo. On parlera du canoë demain. Ensemble."],
        ["sis", "{hero}. Tu as réussi. ON a réussi."],
        "Mauro remonte sur la souche. Elle vacille. Il fait comme si de rien n'était.",
        ["mauro", "La Nuit des Lanternes… est MAINTENUE !"]
      ],
      go: "end_detective"
    },
    c5_lonewolf: {
      art: "🔥", place: "Feu de camp · mercredi soir",
      lines: [
        ["mauro", "Merci d'avoir dit la vérité, Keo. La Nuit des Lanternes est maintenue."],
        "Tout le monde applaudit. On tape dans le dos de {hero}.",
        "Mais quand elle se retourne pour fêter ça avec {sis}, sa sœur est déjà rentrée au chalet."
      ],
      go: "end_lonewolf"
    },
    c5_private: {
      art: "🌙", place: "Le ponton · mercredi soir",
      lines: [
        "{hero} attrape Keo par la manche et lui montre d'un signe de tête le bout sombre du ponton, loin du feu.",
        ["hero", "J'ai vu le canoë n° 7. Je sais que c'était un accident."],
        "Les épaules de Keo s'affaissent, comme s'il les tenait levées depuis le début de la semaine.",
        ["keo", "Je voulais juste voir le lac de nuit. Puis l'orage est arrivé, j'ai heurté les rochers et… j'ai paniqué. Je me disais que si je le remboursais, personne ne saurait jamais."],
        ["hero", "Mauro raconte des blagues affreuses, mais il est juste. Dis-le-lui toi-même. Je viens avec toi."],
        "Keo prend une grande inspiration. Ils retournent au feu ensemble.",
        ["keo", "Mauro ? Il faut que je te dise quelque chose."],
        "Plus tard, Mauro décide que Keo passera les derniers jours du camp à réparer le canoë n° 7 avec lui, et chaque centime retourne directement à la Nuit des Lanternes.",
        ["mauro", "L'honnêteté et un kit de réparation de canoë. La meilleure combinaison qui soit."]
      ],
      go: "end_second"
    },

    // ───────── Fins ─────────
    end_detective: {
      type: "ending", ending: "detective", art: "🏮", place: "Nuit des Lanternes · samedi",
      lines: [
        "Samedi soir. Cent lanternes s'élèvent au-dessus du lac, orange contre le ciel sombre.",
        { m: "Margot n'a pas apporté de livre. Bon, elle en a apporté un. Mais elle ne l'ouvre pas une seule fois.",
          a: "Anouk a peint chaque lanterne. Sur certaines, il y a de minuscules satellites." },
        "{hero} et {sis} allument la première lanterne ensemble et la laissent s'envoler.",
        "Johannes rit avec les autres. Keo fait signe depuis le hangar, déjà en train de poncer le canoë n° 7.",
        "Affaire classée."
      ],
      secret: true
    },
    end_wrong: {
      type: "ending", ending: "wrong", art: "💔", place: "Nuit des Lanternes · samedi",
      lines: [
        "La Nuit des Lanternes a lieu malgré tout. Vendredi, l'argent réapparaît mystérieusement dans les objets trouvés.",
        "Mais Johannes passe toute la fête seul au bout du ponton. Il ne reparle plus à {hero} de tout l'été.",
        "Quelque part dans la foule, Keo rit un peu trop fort.",
        "Elle a peut-être raté quelque chose…"
      ]
    },
    end_second: {
      type: "ending", ending: "second", art: "🤝", place: "Nuit des Lanternes · samedi",
      lines: [
        "Samedi soir. Les lanternes montent au-dessus du lac, et sur l'eau glisse le canoë n° 7 fraîchement réparé, avec Keo et Mauro qui pagaient en se disputant pour savoir qui dirige.",
        "{hero}, {sis} et Johannes sont assis sur le ponton, les pieds dans l'eau.",
        ["keo", "Hé ! Merci. De ne pas en avoir fait tout un spectacle."],
        "Parfois, résoudre un mystère, ce n'est pas attraper quelqu'un. C'est l'aider à revenir."
      ],
      secret: true
    },
    end_lonewolf: {
      type: "ending", ending: "lonewolf", art: "🐺", place: "Nuit des Lanternes · samedi",
      lines: [
        "La Nuit des Lanternes est sauvée. Tout le monde dit que {hero} est un génie.",
        "Mais quand les lanternes s'envolent, {sis} regarde depuis l'autre bout du ponton. Seule.",
        "{hero} a résolu l'affaire. Elle n'a juste personne avec qui la partager.",
        "Peut-être la prochaine fois… ensemble ?"
      ]
    },

    secret_1: {
      art: "🧺", place: "Cuisine · samedi matin",
      lines: [
        "Il reste un dernier mystère. Qui était l'Inconnu ?",
        "{hero} et {sis} poussent la porte de la cuisine. Julie remplit un ÉNORME panier de pique-nique.",
        "{hero} sort son téléphone et écrit dans le groupe : « Joli panier, l'Inconnu. 🧺 »",
        "Quelque part dans la cuisine, un téléphone vibre. Le téléphone de secours du camp, à moitié caché sous un torchon.",
        "Julie se fige. Puis elle se retourne lentement, avec un grand sourire.",
        ["julie", "Ok. Vous m'avez eue."],
        ["julie", "J'ai vu Keo la nuit de l'orage. Mais je me suis dit : si je le dis juste à Mauro, Keo a des ennuis et n'apprend rien. Si vous deux, vous trouvez… peut-être que tout le monde apprendra quelque chose."],
        ["julie", "Et puis j'ai toujours rêvé d'être une mystérieuse inconnue. C'était TRÈS amusant."],
        ["sis", "Tu es ridicule."],
        ["julie", "Merci. Maintenant, aidez-moi à porter ce panier. C'est jour de pique-nique."]
      ],
      go: "end_secret"
    },
    end_secret: {
      type: "ending", ending: "secret", art: "🧺", place: "Pique-nique au bord du lac",
      lines: [
        "Cet après-midi-là, tout le monde mange le pique-nique de Julie sur l'herbe au bord du lac. Les sandwichs ont la forme de satellites. Ils ressemblent à des patates.",
        "Julie lève sa limonade.",
        ["julie", "Aux meilleures détectives que l'EUMETSAT Summer Camp ait jamais eues !"],
        "Tu as trouvé la fin secrète. 🧺"
      ]
    }
  }
};
