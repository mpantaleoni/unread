// Unread — English story data.
// Text can be a string, or { m: "...", a: "..." } for lines that differ when
// the player is Margot (m) or Anouk (a). {hero} and {sis} are replaced with names.
// Lines: "narration" | ["speaker", "dialogue"] | { if: condition, line: <line> }
window.STORY = window.STORY || {};
window.STORY.en = {
  ui: {
    title: "Unread",
    tagline: "A mystery at EUMETSAT Summer Camp",
    newGame: "New game",
    continue: "Continue",
    endings: "Endings",
    endingsFound: "{n}/{total} endings found",
    whoAreYou: "Who are you?",
    pickAvatar: "Pick your chat picture",
    start: "Start",
    next: "Continue",
    notebook: "Notebook",
    noClues: "Nothing yet. Keep your eyes open.",
    close: "Close",
    menu: "Menu",
    backToTitle: "Back to title",
    playAgain: "Play again",
    oneMore: "Wait… one more thing",
    endingUnlocked: "Ending unlocked",
    locked: "???",
    timeLeft: "Time before dinner",
    visited: "Visited",
    resetProgress: "Reset all progress",
    resetConfirm: "Erase saved game and all endings?",
    language: "Language",
    soon: "coming soon",
    tapToSkip: "Tap to skip",
    clueAdded: "New clue: {clue}",
    typing: "is typing…",
    introDay: "Wednesday",
    introFrom: "Unknown number",
    introNow: "now",
    introOpen: "Tap to open",
    introMsgs: ["Are you awake?", "Something is happening down at the lake.", "Look out the window. Now. 👀"],
    introReply: "who is this??",
    introLast: "You'll find out by Saturday. 🧺",
    introEarlier: "Three days earlier…",
    introContinue: "Tap to continue",
    skip: "Skip",
    sound: "Sound"
  },

  characters: {
    margot:   { name: "Margot",   emoji: "📚" },
    anouk:    { name: "Anouk",    emoji: "🎨" },
    julie:    { name: "Julie",    emoji: "👩‍🍳" },
    mauro:    { name: "Mauro",    emoji: "🧢" },
    keo:      { name: "Keo",      emoji: "😎" },
    johannes: { name: "Johannes", emoji: "🎧" },
    unknown:  { name: "Unknown",  emoji: "❔" }
  },

  heroes: {
    margot: { blurb: "Handball player. Reads a mystery novel a day." },
    anouk:  { blurb: "Basketball, knitting, painting, and impeccable style." }
  },

  avatars: ["📚", "🎨", "🤾‍♀️", "🏀", "🧶", "👗", "🌻", "🦊"],

  chatName: "Cabin 4 + friends 🏕️",

  clues: {
    outside:   { icon: "🌙", name: "Out in the storm",      text: "Someone heard Johannes come back soaking wet on the storm night." },
    canoe:     { icon: "🛶", name: "Canoe #7",              text: "Cracked and hidden under a tarp in the boathouse. Someone hit rocks in the dark." },
    prints:    { icon: "👟", name: "Star-sole footprints",  text: "From the boathouse to the shop's back door. Keo's sneakers have stars on the soles." },
    whistle:   { icon: "🎵", name: "The whistled tune",     text: "Julie heard the thief whistling. Keo whistles that tune every morning." },
    pricelist: { icon: "📄", name: "Canoe price list",      text: "Torn from a catalog, €480 circled in red. Found in the trash next to Keo's bunk." },
    jacket:    { icon: "🧥", name: "Johannes's wet jacket", text: "Navy and still damp. But his yellow poncho was never unfolded." },
    alibi:     { icon: "📞", name: "Johannes's secret",     text: "He was up on the hill calling home during the storm. He's homesick." },
    silence:   { icon: "🔕", name: "Lunch-rush silence",    text: "Unknown went quiet exactly when the kitchen was busiest." },
    picnic:    { icon: "🧺", name: "The basket",            text: "Unknown signs every message with 🧺. So does the 'Picnic Friday' whiteboard." },
    phone:     { icon: "📱", name: "The spare phone",       text: "The camp's spare phone, in the kitchen lost & found, logged into your group chat." }
  },
  keyClues: ["canoe", "prints", "whistle", "pricelist"],
  secretClues: ["silence", "picnic", "phone"],

  endings: {
    detective: { icon: "🔍", title: "The Detective" },
    wrong:     { icon: "💔", title: "Wrong Accusation" },
    second:    { icon: "🤝", title: "Second Chance" },
    lonewolf:  { icon: "🐺", title: "Lone Wolf" },
    secret:    { icon: "🧺", title: "It Was Julie" }
  },

  start: "c1_campfire",

  scenes: {
    // ───────── Chapter 1: Last week at camp ─────────
    c1_campfire: {
      art: "🔥", place: "Campfire circle · Sunday night",
      lines: [
        "It's the last week of EUMETSAT Summer Camp, and the campfire is crackling like it knows.",
        { m: "Margot has spent the summer winning handball matches on the sports field and reading mystery novels under the big pine tree. She's on her third one this week.",
          a: "Anouk has spent the summer shooting hoops on the old basketball court, painting the lake at sunset, and knitting a scarf nobody needs in July." },
        "Her sister {sis} is squeezed next to her on the log bench, stealing her marshmallows.",
        ["mauro", "Okay, campers! Big announcement!"],
        "Mauro, the camp counselor, climbs onto a tree stump. It wobbles. He pretends it didn't.",
        ["mauro", "Saturday night is… LANTERN NIGHT! Music, food, and a hundred lanterns over the lake!"],
        "Everyone cheers. Keo, who is friends with literally everybody, starts a drumroll on a cooler.",
        ["keo", "Best. Night. Of. The. Summer!"],
        "At the edge of the circle, Johannes, here for his first summer, smiles quietly and pulls his hoodie tighter. He mostly keeps to himself.",
        ["mauro", "Also: the satellites say a storm is coming this week. The satellites are never wrong. I am often wrong. Listen to the satellites."],
        ["sis", "{hero}. This is going to be the best week ever."]
      ],
      go: "c1_breakfast"
    },

    c1_breakfast: {
      art: "🥞", place: "Mess hall · Monday morning",
      lines: [
        "Breakfast in the mess hall is loud, sticky, and smells like pancakes.",
        "Julie runs the kitchen and the little camp shop at the back. She's strict about muddy shoes and hilarious about everything else.",
        ["julie", "Today's pancakes are shaped like satellites. Do not tell me they look like potatoes. I know."],
        "Then: CRASH. A whole tray of pancakes slides off the counter and onto the floor. A few campers laugh. Somebody claps."
      ],
      choices: [
        { t: "Help Julie pick them up", fx: { kindness: 1, julie: 1 }, go: "c1_breakfast_help" },
        { t: "Laugh along with everyone", go: "c1_breakfast_laugh" }
      ]
    },
    c1_breakfast_help: {
      art: "🥞", place: "Mess hall · Monday morning",
      lines: [
        "{hero} kneels down and starts stacking pancakes back onto the tray.",
        ["julie", "Thank you, my dear. You have a bright future in pancake rescue."],
        "She winks and slides an extra pancake onto {hero}'s plate.",
        ["julie", "Kitchen rule: helpers get seconds. And on Friday: PICNIC. I'm already planning the basket."]
      ],
      go: "c1_lake"
    },
    c1_breakfast_laugh: {
      art: "🥞", place: "Mess hall · Monday morning",
      lines: [
        "{hero} laughs. It IS kind of funny.",
        "Julie raises one eyebrow, sweeps up the pancakes, and doesn't say a word. But cooks remember faces. Cooks always remember faces."
      ],
      go: "c1_lake"
    },

    c1_lake: {
      art: "🏊", place: "The lake · Monday afternoon",
      lines: [
        "The afternoon is hot and the lake is glittering. Everyone is on the wooden dock.",
        "Keo has left his sneakers by the ladder: bright white, with little stars on the soles. Nobody else at camp has shoes like that.",
        ["keo", "Okay! Who's brave enough to swim to the far raft? Last one there carries the lanterns on Saturday!"],
        ["sis", "Uh… that raft is really far. Want to just swim here by the dock?"]
      ],
      choices: [
        { t: { m: "Race to the raft (handball legs don't get tired)", a: "Race to the raft (basketball legs don't get tired)" }, fx: { courage: 1 }, go: "c1_lake_race" },
        { t: "Stay with {sis}", fx: { bond: 1 }, go: "c1_lake_stay" }
      ]
    },
    c1_lake_race: {
      art: "🏊", place: "The lake · Monday afternoon",
      lines: [
        "{hero} dives in. The water is freezing for exactly three seconds, then perfect.",
        "She slaps the raft one second after Keo, who is laughing and completely out of breath.",
        ["keo", "Okay, okay, you're fast. Don't tell anyone you almost beat me."],
        "Back on the dock, {sis} waves. She looks a little alone."
      ],
      go: "c1_chat"
    },
    c1_lake_stay: {
      art: "🏊", place: "The lake · Monday afternoon",
      lines: [
        "{hero} stays by the dock with {sis}. They float on their backs and watch clouds that look suspiciously like pancakes.",
        ["sis", "Thanks for staying. Keo's races always end with someone swallowing half the lake."],
        "Out on the raft, Keo is cheering for himself."
      ],
      go: "c1_chat"
    },

    c1_chat: {
      type: "chat", art: "📱", place: "Monday evening",
      msgs: [
        ["keo", "LANTERN NIGHT COMMITTEE 🏮 who's in"],
        ["sis", "meeee"],
        ["johannes", "I can help carry stuff"],
        ["keo", "johannes speaks!! 🎉"],
        ["sis", { m: "{hero} you're on decorations. and NO bringing a book to the party 📚", a: "{hero} you're on decorations obviously. paint the lanterns pls 🎨" }],
        ["keo", "btw satellites say storm tomorrow night ⛈️"],
        ["keo", "mauro said 'listen to the satellites' like 4 times today 😂"]
      ],
      choices: [
        { t: "count me in 🏮", go: "c2_storm" },
        { t: "the satellites are never wrong 🛰️", go: "c2_storm" }
      ]
    },

    // ───────── Chapter 2: The storm ─────────
    c2_storm: {
      art: "⛈️", place: "Cabin 4 · Tuesday, midnight",
      lines: [
        "The satellites were right.",
        "Around midnight, thunder shakes the whole cabin. Rain hammers the roof. Then — click. The lights go out across the entire camp.",
        "{hero} sits up in her bunk. Somewhere outside, a door bangs.",
        "Her phone buzzes on the pillow. Unknown number: “Look out the window.”",
        "{sis} is still asleep. Somehow."
      ],
      choices: [
        { t: "Wake up {sis}", fx: { bond: 1 }, go: "c2_window_together" },
        { t: "Go to the window alone", fx: { courage: 1 }, go: "c2_window_alone" }
      ]
    },
    c2_window_together: {
      art: "⛈️", place: "Cabin 4 · Tuesday, midnight",
      lines: [
        ["sis", "Mmmh… what… is it morning?"],
        ["hero", "Shh. Look."],
        "The two of them press their noses to the cold glass. Lightning flashes —",
        "— and for one second they see someone running across the field toward the lake, in one of the yellow camp ponchos.",
        ["sis", "Who's out in THIS?"],
        { m: "Margot frowns. In her books, nobody runs into a storm at midnight for a good reason.",
          a: "Anouk squints. Every camper got the same yellow poncho on day one. It could be anyone." },
        "Then it's dark again, and the figure is gone."
      ],
      go: "c2_morning"
    },
    c2_window_alone: {
      art: "⛈️", place: "Cabin 4 · Tuesday, midnight",
      lines: [
        "{hero} slides out of her bunk and tiptoes to the window. The glass is cold. Lightning flashes —",
        "— and for one second she sees someone running across the field toward the lake, in one of the yellow camp ponchos.",
        { m: "Margot frowns. In her books, nobody runs into a storm at midnight for a good reason.",
          a: "Anouk squints. Every camper got the same yellow poncho on day one. It could be anyone." },
        "Then it's dark again. She stands there a long time, but the figure doesn't come back."
      ],
      go: "c2_morning"
    },

    c2_morning: {
      art: "📣", place: "Mess hall · Wednesday morning",
      fx: { clue: "outside" },
      lines: [
        "In the morning the sky is washed clean, but nobody is smiling. Mauro is standing on a chair. Julie is behind him with her arms crossed.",
        ["mauro", "Campers. Last night, during the storm, someone took the cash box from the camp shop."],
        "A gasp goes around the room.",
        ["mauro", "That money was for Lantern Night. The lanterns. The food. The music. Without it…"],
        ["julie", "…there is no Lantern Night. And I had a VERY good picnic menu planned."],
        ["mauro", "If the money is back by Saturday, no questions asked. Otherwise, Lantern Night is cancelled."],
        "Silence. Then someone whispers, just loud enough for everyone to hear:",
        "“Johannes was outside last night. I heard him come back soaking wet.”",
        "Every head turns. Johannes goes red and stares into his cereal.",
        ["johannes", "I… I didn't take anything."],
        "Nobody looks convinced. Except maybe Keo, who suddenly finds his orange juice very, very interesting."
      ],
      go: "c2_chat"
    },

    c2_chat: {
      type: "chat", art: "📱", place: "Wednesday morning",
      msgs: [
        ["system", "Unknown joined the group"],
        ["unknown", "I was awake during the storm. I saw who went into the shop. 👀"],
        ["keo", "uhh who is this"],
        ["sis", "??? who added this number"],
        ["unknown", "Don't let Lantern Night die. Look closer. 🧺"]
      ],
      choices: [
        { t: "who ARE you?!", fx: { courage: 1 }, go: "c2_chat_brave" },
        { t: "please help us. what did you see?", fx: { kindness: 1 }, go: "c2_chat_kind" },
        { t: "📸 Screenshot it and show {sis}", fx: { bond: 1 }, say: false, go: "c2_chat_sister" }
      ]
    },
    c2_chat_brave: {
      type: "chat", art: "📱", place: "Wednesday morning",
      msgs: [["unknown", "Someone brave. I like it. Start where the water is. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_kind: {
      type: "chat", art: "📱", place: "Wednesday morning",
      msgs: [["unknown", "Kindness gets you far at this camp. Start where the water is. 🧺"]],
      go: "c3_intro"
    },
    c2_chat_sister: {
      type: "chat", art: "📱", place: "Wednesday morning",
      msgs: [
        ["sis", "ok this is SO creepy"],
        ["sis", "and SO exciting"],
        ["sis", "we're solving this. together."],
        ["unknown", "Start where the water is. 🧺"]
      ],
      go: "c3_intro"
    },

    // ───────── Chapter 3: Investigation ─────────
    c3_intro: {
      art: "🔎", place: "Cabin 4 · Wednesday",
      lines: [
        { m: "Back in the cabin, Margot grabs a notebook. Every detective in every book she's ever read has a notebook.",
          a: "Back in the cabin, Anouk grabs a notebook and draws a magnifying glass on the cover. If you're going to investigate, you should look good doing it." },
        ["sis", "Okay. We have until dinner before Mauro checks on us. That's time for three places, maybe."],
        "Four places could hold answers: the boathouse, the mess hall, the forest trail, and Cabin 7, where Johannes and Keo sleep.",
        "Three before dinner. Choose carefully."
      ],
      go: "hub"
    },

    hub: {
      type: "hub", art: "🗺️", place: "Camp map · Wednesday",
      lines: ["Where to next?"],
      slots: 3,
      interrupt: { after: 1, go: "c3_chat" },
      after: "c3_sister",
      places: [
        { id: "boathouse", icon: "🛶", t: "Boathouse",    go: "b1" },
        { id: "messhall",  icon: "🍳", t: "Mess hall",    go: "m1" },
        { id: "forest",    icon: "🌲", t: "Forest trail", go: "f1" },
        { id: "cabin7",    icon: "🛖", t: "Cabin 7",      go: "c7" }
      ]
    },

    // Boathouse
    b1: {
      art: "🛶", place: "Boathouse",
      lines: [
        "The boathouse smells like wet wood and sunscreen. Paddles hang on the walls. The canoes sit in a neat row, numbered 1 to 8.",
        "Except number 7 isn't in the row. It's in the corner, under a heavy blue tarp.",
        "Fresh mud on the floor leads right to it."
      ],
      choices: [
        { t: "Pull the tarp off", go: [{ if: { min: { courage: 2 } }, go: "b_tarp" }, { go: "b_scared" }] }
      ]
    },
    b_tarp: {
      art: "🛶", place: "Boathouse",
      fx: { clue: "canoe" },
      lines: [
        "{hero} grabs a corner and pulls. The tarp slides off with a heavy whump.",
        "Canoe #7 has a long crack down its side and a dent in the front, like it hit a rock. Hard. In the dark, maybe. During a storm.",
        { m: "“Chapter one,” Margot whispers. “The damaged boat.”",
          a: "Anouk crouches down. There's a scrape of yellow plastic on the dent, like a poncho rubbed against it." },
        "Someone hid this. Someone who didn't want anyone to know canoe #7 was broken."
      ],
      go: "hub"
    },
    b_scared: {
      art: "🛶", place: "Boathouse",
      lines: [
        "{hero} reaches for the tarp, and hears footsteps on the dock outside.",
        "Her heart jumps. She ducks behind the paddle rack just as Mauro walks in, whistling, grabs a life jacket, and walks out again.",
        "By the time her heart slows down, she's too rattled to try again. Maybe if she'd been a little braver this week…"
      ],
      go: "hub"
    },

    // Mess hall
    m1: {
      art: "🍳", place: "Mess hall",
      lines: [
        "The mess hall is empty except for Julie, who is wiping tables and humming.",
        "The shop shelf at the back is bare where the cash box used to be. On the whiteboard, in Julie's handwriting: PICNIC FRIDAY! 🧺 (if Lantern Night survives)",
        ["julie", "Ah. A detective. I can tell by the notebook."]
      ],
      choices: [
        { t: "Tell her a joke first", fx: { julie: 1 }, go: "m_joke" },
        { t: "Ask what she saw on the storm night", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_joke: {
      art: "🍳", place: "Mess hall",
      lines: [
        { m: "“Why did the book join the handball team?” Margot asks. “It wanted to be a real page-turner.”",
          a: "“Why did the basketball player bring yarn to the game?” Anouk asks. “She wanted to work on her knit-picking.”" },
        "Julie snorts so hard she has to sit down.",
        ["julie", "Terrible. Wonderful. Sit, sit. What do you want to know?"]
      ],
      choices: [
        { t: "Ask what she saw on the storm night", go: [{ if: { min: { julie: 2 } }, go: "m_witness" }, { go: "m_busy" }] }
      ]
    },
    m_witness: {
      art: "🍳", place: "Mess hall",
      fx: { clue: "whistle" },
      lines: [
        ["julie", "Between us? I was here during the storm, checking the freezer when the power went out."],
        ["julie", "I heard the shop door. I didn't see a face, just a yellow poncho, like everybody has. But whoever it was… they were whistling."],
        ["julie", "That silly little tune. Da-da-dee-da-DUM. You know the one."],
        "{hero} knows the one. Keo whistles it every single morning on the way to breakfast.",
        ["julie", "I'm not saying anything. I'm a cook. I just hear things."]
      ],
      go: "m_end"
    },
    m_busy: {
      art: "🍳", place: "Mess hall",
      lines: [
        ["julie", "Hmm. I have eighty lunches to make, sweetheart. Ask me another time."],
        "She turns back to her giant pot. Maybe if {hero} had been a bit nicer to her this week…"
      ],
      go: "m_end"
    },
    m_end: {
      art: "🍳", place: "Mess hall",
      lines: ["On the way out, {hero} passes the whiteboard and the lost & found box by the kitchen door."],
      choices: [
        { t: "Read the whiteboard more closely", if: { not: { clue: "picnic" } }, go: "m_board" },
        { t: "Dig through the lost & found box", if: { not: { clue: "phone" } }, go: "m_box" },
        { t: "Leave the mess hall", go: "hub" }
      ]
    },
    m_board: {
      art: "🧺", place: "Mess hall",
      fx: { clue: "picnic" },
      lines: [
        "PICNIC FRIDAY! 🧺, in Julie's loopy handwriting, with a little drawing of a basket.",
        "{hero} stares at it. That basket. She's seen that emoji somewhere very recently…",
        "The Unknown number signs every single message with 🧺."
      ],
      go: "m_end"
    },
    m_box: {
      art: "📱", place: "Mess hall",
      fx: { clue: "phone" },
      lines: [
        "Lost & found: one flip-flop, three water bottles, somebody's retainer (gross)… and a phone.",
        "It's the camp's spare phone, the one counselors lend to campers who lose theirs. Its screen lights up: 1 new message in “Cabin 4 + friends 🏕️”.",
        "Why is the camp's spare phone in the kitchen? And why is it in their group chat?"
      ],
      go: "m_end"
    },

    // Forest trail
    f1: {
      art: "🌲", place: "Forest trail",
      fx: { clue: "prints" },
      lines: [
        "The forest trail runs from the boathouse, past the mess hall, and up the hill to the camp's old weather station.",
        "The storm turned it into mud, and the mud remembers everything.",
        "Fresh footprints. Big sneakers, with little stars pressed into each print. They go from the boathouse… straight to the back door of the shop.",
        { m: "Margot crouches like a detective on a book cover. Stars. She's seen those stars before, on the dock.",
          a: "Anouk knows shoes. Those are limited-edition star soles. Exactly one person at camp wears them: Keo." },
        "Further up the hill, someone is sitting alone on a rock by the weather station. Johannes."
      ],
      choices: [
        { t: "Sit down next to him and ask if he's okay", fx: { kindness: 1 }, go: [{ if: { min: { kindness: 2 } }, go: "f_alibi" }, { go: "f_closed" }] },
        { t: "Ask him straight out what he was doing last night", go: "f_closed" }
      ]
    },
    f_alibi: {
      art: "🌲", place: "Forest trail",
      fx: { clue: "alibi" },
      lines: [
        "Johannes is quiet for a long time. Then:",
        ["johannes", "Up here's the only place with phone signal. Last night I came up to call my mom. During the storm. Stupid, I know."],
        ["johannes", "It's my first time away from home this long. I… miss them. I didn't want anyone to know."],
        "That's why he came back soaking wet. Not the shop. The hill.",
        ["johannes", "Please don't tell everyone."],
        ["hero", "I won't. Promise."]
      ],
      go: "hub"
    },
    f_closed: {
      art: "🌲", place: "Forest trail",
      lines: [
        ["johannes", "Why does everyone think it was me?"],
        "He gets up and walks off down the hill before {hero} can say anything else.",
        "Maybe she came on a little too strong."
      ],
      go: "hub"
    },

    // Cabin 7
    c7: {
      art: "🛖", place: "Cabin 7",
      lines: [
        "Cabin 7 smells like socks and bug spray. Johannes's bunk is neat. Keo's bunk is… not.",
        "Johannes is inside, reading on his bed. He looks up, nervous."
      ],
      choices: [
        { t: "Ask Johannes politely if you can look around", fx: { kindness: 1 }, go: "c7_polite" },
        { t: "Wait until he leaves, then snoop", fx: { kindness: -1 }, go: "c7_snoop" }
      ]
    },
    c7_polite: {
      art: "🛖", place: "Cabin 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        ["johannes", "Uh… sure. I've got nothing to hide."],
        "Hanging on his bunk is a navy jacket, still damp. Not a yellow poncho. His poncho is folded in his cubby, bone dry.",
        { m: "Margot writes it down. In a good mystery, the obvious suspect is almost never the one who did it.",
          a: "Anouk notices instantly: his poncho has never even been unfolded. It still has the store creases." },
        "Next to Keo's bunk, in the trash bin, there's a crumpled page torn from a catalog. A canoe. A price circled in red marker: €480.",
        ["johannes", "That's Keo's. He's been weird about money all week."]
      ],
      go: "hub"
    },
    c7_snoop: {
      art: "🛖", place: "Cabin 7",
      fx: { clue: ["jacket", "pricelist"] },
      lines: [
        "{hero} waits behind the cabin until Johannes leaves for the showers, then slips inside.",
        "His navy jacket is hanging on the bunk, still damp. He was definitely out in the storm.",
        "In the trash bin next to Keo's bunk: a crumpled catalog page. A canoe, with a price circled in red: €480.",
        "Footsteps! {hero} climbs out the back window just in time. Her heart is pounding. That didn't feel great."
      ],
      go: "hub"
    },

    c3_chat: {
      type: "chat", art: "📱", place: "Wednesday, lunchtime",
      msgs: [
        ["keo", "anyone want to play cards before lunch? 🃏"],
        ["sis", "we're busy 🕵️‍♀️"],
        ["hero", "@Unknown any more hints?"],
        ["system", "2 hours later"],
        ["unknown", "Sorry. Lunch rush. Look at the boats. 🧺"]
      ],
      choices: [
        { t: "lunch rush?? what does that mean 🤔", fx: { clue: "silence" }, go: "c3_chat_notice" },
        { t: "ok thanks!", go: "hub" }
      ]
    },
    c3_chat_notice: {
      type: "chat", art: "📱", place: "Wednesday, lunchtime",
      msgs: [
        ["unknown", "…nothing. Busy with stuff. 🧺"],
        ["sis", "suspicious 👀"]
      ],
      go: "hub"
    },

    c3_sister: {
      art: "🌅", place: "Cabin 4 · Wednesday evening",
      lines: [
        "The sun is going down. The notebook is full of scribbles and arrows.",
        ["sis", "{hero}… are we doing this together? Like, actually together? Because the campfire is in an hour, and Mauro wants answers."]
      ],
      choices: [
        { t: "“Together. Always.”", fx: { bond: 1 }, go: "c3_sister_yes" },
        { t: "“I've got this. I'll handle it.”", fx: { bond: -1 }, go: "c3_sister_no" }
      ]
    },
    c3_sister_yes: {
      art: "🌅", place: "Cabin 4 · Wednesday evening",
      lines: [
        ["sis", "Good. Because I wasn't going to let you do it alone anyway."],
        "{sis} bumps her shoulder. They walk to the campfire side by side."
      ],
      go: "c4_campfire"
    },
    c3_sister_no: {
      art: "🌅", place: "Cabin 4 · Wednesday evening",
      lines: [
        ["sis", "…Oh. Okay. Sure."],
        "{sis} goes quiet and walks ahead to the campfire without waiting."
      ],
      go: "c4_campfire"
    },

    // ───────── Chapter 4: Confrontation ─────────
    c4_campfire: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        "Mauro calls an emergency campfire. Everyone is there. Nobody is roasting marshmallows.",
        ["mauro", "Okay. Last chance before I cancel the lanterns. Does anyone have anything to say?"],
        "Johannes stares at the fire. Keo starts whistling his little tune, then stops. Quickly.",
        "{hero} looks down at her notebook.",
        { if: { min: { bond: 3 } }, line: ["sis", "Whatever you decide, I'm right here."] }
      ],
      choices: [
        { t: "Stand up and accuse Johannes", go: "c4_johannes" },
        { t: "Stand up and accuse Keo", go: [{ if: { keyClues: 3 }, go: "c4_keo_proof" }, { go: "c4_keo_weak" }] },
        { t: "Quietly ask Keo to talk, away from the fire", if: { min: { kindness: 3 }, clue: "canoe" }, go: "c5_private" }
      ]
    },
    c4_johannes: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        "{hero} stands up and points across the fire.",
        ["hero", "It was Johannes. He was outside during the storm. Everybody knows it."],
        "Johannes looks at her like she just pushed him into the lake.",
        { if: { clue: "alibi" }, line: "And the worst part? She knows exactly why he was outside. She promised not to tell." },
        ["johannes", "I didn't… I…"],
        "He gets up and walks away into the dark."
      ],
      go: "end_wrong"
    },
    c4_keo_weak: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        ["hero", "It was Keo."],
        "Keo laughs, a big easy laugh.",
        ["keo", "Me? Come on. I was asleep. Ask anyone."],
        "{hero} opens her notebook… but there isn't enough in it. A hunch isn't proof.",
        "Slowly, everyone's eyes slide back to Johannes."
      ],
      go: "end_wrong"
    },
    c4_keo_proof: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        ["hero", "It was Keo."],
        "Keo laughs. But {hero} doesn't stop.",
        { if: { clue: "canoe" },     line: ["hero", "Canoe #7 is cracked and hidden under a tarp in the boathouse."] },
        { if: { clue: "prints" },    line: ["hero", "Star-sole footprints go from the boathouse straight to the shop. You're the only one with those sneakers."] },
        { if: { clue: "whistle" },   line: ["hero", "Someone heard the thief whistling. Your tune."] },
        { if: { clue: "pricelist" }, line: ["hero", "And there's a canoe price list in your trash. €480."] },
        "The laugh fades. Keo looks at the ground for a long, long moment.",
        ["keo", "…I took canoe #7 out on Tuesday night. Before the storm hit. I just wanted to see the lake at night. Then the wind came and I hit the rocks."],
        ["keo", "I panicked. I thought if I could buy a new one before anyone noticed… I'm sorry. The money's in my duffel bag. All of it."]
      ],
      go: [{ if: { min: { bond: 3 } }, go: "c5_detective" }, { go: "c5_lonewolf" }]
    },

    // ───────── Chapter 5: Resolutions ─────────
    c5_detective: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        ["mauro", "Thank you for telling the truth, Keo. We'll talk about the canoe tomorrow. Together."],
        ["sis", "{hero}. You did it. WE did it."],
        "Mauro climbs back onto the stump. It wobbles. He pretends it didn't.",
        ["mauro", "Lantern Night… is ON!"]
      ],
      go: "end_detective"
    },
    c5_lonewolf: {
      art: "🔥", place: "Campfire circle · Wednesday night",
      lines: [
        ["mauro", "Thank you for telling the truth, Keo. Lantern Night is back on."],
        "Everyone cheers. People pat {hero} on the back.",
        "But when she turns around to celebrate with {sis}, her sister has already gone back to the cabin."
      ],
      go: "end_lonewolf"
    },
    c5_private: {
      art: "🌙", place: "The dock · Wednesday night",
      lines: [
        "{hero} catches Keo's sleeve and nods toward the dark end of the dock, away from the fire.",
        ["hero", "I saw canoe #7. I know it was an accident."],
        "Keo's shoulders drop, like he's been holding them up all week.",
        ["keo", "I just wanted to see the lake at night. Then the storm came, and I hit the rocks, and… I panicked. I thought if I could pay for a new one, nobody would ever know."],
        ["hero", "Mauro tells terrible jokes, but he's fair. Tell him yourself. I'll come with you."],
        "Keo takes a deep breath. They walk back to the fire together.",
        ["keo", "Mauro? I need to tell you something."],
        "Later, Mauro decides Keo will spend the last days of camp repairing canoe #7 with him, and every cent goes straight back to Lantern Night.",
        ["mauro", "Honesty and a canoe repair kit. Best combination there is."]
      ],
      go: "end_second"
    },

    // ───────── Endings ─────────
    end_detective: {
      type: "ending", ending: "detective", art: "🏮", place: "Lantern Night · Saturday",
      lines: [
        "Saturday night. A hundred lanterns rise over the lake, glowing orange against the dark sky.",
        { m: "Margot didn't bring a book. Well, she brought one. But she doesn't open it once.",
          a: "Anouk painted every single lantern. A few of them have tiny satellites on them." },
        "{hero} and {sis} light the first lantern together and let it go.",
        "Johannes is laughing with the others. Keo waves from the boathouse, already sanding canoe #7.",
        "Case closed."
      ],
      secret: true
    },
    end_wrong: {
      type: "ending", ending: "wrong", art: "💔", place: "Lantern Night · Saturday",
      lines: [
        "Lantern Night happens after all. On Friday, the money mysteriously turns up in the lost & found box.",
        "But Johannes spends the whole party sitting alone on the end of the dock. He doesn't talk to {hero} again for the rest of the summer.",
        "Somewhere in the crowd, Keo is laughing just a little too loudly.",
        "Maybe she missed something…"
      ]
    },
    end_second: {
      type: "ending", ending: "second", art: "🤝", place: "Lantern Night · Saturday",
      lines: [
        "Saturday night. The lanterns float up over the lake, and on the water below, a freshly patched canoe #7 glides by, with Keo and Mauro paddling and arguing about who's steering.",
        "{hero}, {sis} and Johannes sit on the dock with their feet in the water.",
        ["keo", "Hey! Thanks. For not making it a big show."],
        "Sometimes solving a mystery isn't about catching someone. It's about helping them come back."
      ],
      secret: true
    },
    end_lonewolf: {
      type: "ending", ending: "lonewolf", art: "🐺", place: "Lantern Night · Saturday",
      lines: [
        "Lantern Night is saved. Everyone says {hero} is a genius.",
        "But when the lanterns rise, {sis} is watching from the far end of the dock. Alone.",
        "{hero} solved the case. She just doesn't have anyone to share it with.",
        "Maybe next time… together?"
      ]
    },

    secret_1: {
      art: "🧺", place: "Kitchen · Saturday morning",
      lines: [
        "There's still one mystery left. Who was Unknown?",
        "{hero} and {sis} push open the kitchen door. Julie is packing an ENORMOUS picnic basket.",
        "{hero} takes out her phone and types into the group chat: “Nice basket, Unknown. 🧺”",
        "Somewhere in the kitchen, a phone buzzes. The camp's spare phone, half-hidden under a tea towel.",
        "Julie freezes. Then she slowly turns around, grinning.",
        ["julie", "Okay. You got me."],
        ["julie", "I saw Keo on the storm night. But I thought: if I just tell Mauro, Keo gets in trouble and learns nothing. If you two figure it out… maybe everybody learns something."],
        ["julie", "Also, I have always wanted to be a mysterious stranger. It was VERY fun."],
        ["sis", "You are ridiculous."],
        ["julie", "Thank you. Now help me carry this basket. It's picnic day."]
      ],
      go: "end_secret"
    },
    end_secret: {
      type: "ending", ending: "secret", art: "🧺", place: "Picnic by the lake",
      lines: [
        "That afternoon, everyone eats Julie's picnic on the grass by the lake. The sandwiches are shaped like satellites. They look like potatoes.",
        "Julie raises her lemonade.",
        ["julie", "To the best detectives EUMETSAT Summer Camp has ever had!"],
        "You found the secret ending. 🧺"
      ]
    }
  }
};
