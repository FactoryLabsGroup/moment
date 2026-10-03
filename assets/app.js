/* Moment — everything on the page that moves, and every word in both languages. */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Store links. Paste each one in once Moment is live there, and its
  // "Coming soon" half becomes a download link everywhere on the page.
  // ---------------------------------------------------------------------------
  var STORE = {
    appStore: '',
    googlePlay: ''
  };

  var root = document.documentElement;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SCENES = window.MOMENT_SCENES;

  // ---------------------------------------------------------------------------
  // Copy. English is the source; Georgian is written alongside it: polite
  // plural, no letter case, „…“ quotes. `*stars*` mark painted words and
  // `\n` breaks a line.
  // ---------------------------------------------------------------------------
  var STRINGS = {
    en: {
      page_title: 'Moment — Two halves. One moment.',
      skip: 'Skip to content',
      nav_a11y: 'Sections', nav_how: 'How it works', nav_deck: 'Challenges', nav_privacy: 'Privacy', nav_get: 'Get Moment',
      hero_a11y: 'Two halves. One moment.', hero_l: 'Two halves.', hero_r: 'One moment.',
      hero_mark_a11y: 'Show a duo',
      lede_l: 'A random friend, a random challenge, at a random moment.',
      lede_r: 'You each shoot your half — and nobody sees a thing until both are in.',
      hero_note: 'Just a username. No email, no password.',
      store_soon_small: 'Coming soon', store_apple_small: 'Download on the', store_google_small: 'Get it on',
      dare: 'Challenge',
      ping_label: 'The ping', ping_title: 'Same challenge.\nSame clock.',
      ping_text: "Sometime today, Moment picks a friend from your pool and sends you both the same challenge at the same moment. You won't know which friend — only that the clock has started.",
      ping_a11y: 'Deal another challenge',
      duo_with: 'Duo with', push_now: 'now', push_go: '%s minutes. Go.', push_go_one: 'One minute. Go.',
      sealed_label: 'Your half', sealed_title: 'Shoot your half.\nTheirs stays sealed.',
      sealed_text: "Open the camera wherever you are and retake as often as you like. Nobody sees a thing — not even who you're paired with — until both halves are in.",
      sealed_a11y: 'Shoot again', sealed_chip: 'Sealed', sealed_sent: 'Sent', sealed_wait: 'Waiting…', you: 'You',
      open_label: 'The moment', open_title: 'Both halves in.\nNow you see.',
      open_text: 'The second half lands and the two click into one photo — a memory that belongs to just the two of you. Only now do you find out who it was.',
      open_miss: 'Miss the clock, and both halves are deleted. Your partner stays a mystery for good.',
      open_a11y: 'Unlock another duo', unlocked: 'Unlocked',
      deck_label: 'The deck', deck_title: 'Some sweet.\nSome spicy.\n*Some deadly.*',
      deck_text: '150 challenges across faces, streets, food, pets, light and chaos — every one shootable wherever you happen to be. Some come with a look, like NOIR or X‑RAY, so both halves match.',
      levels_a11y: 'Level',
      lv_sweet: 'Sweet', lv_spicy: 'Spicy', lv_deadly: 'Deadly',
      lv_sweet_t: "Arm's reach — a face, something on your desk.",
      lv_spicy_t: "You'll have to move, or set something up.",
      lv_deadly_t: 'Needs another person, nerve, or timing.',
      lv_note: 'Levels open as you finish duos. Choose how far you’ll go on your profile.',
      deal_hint: 'Tap or swipe for another', card_a11y: '%s — next card',
      wall_label: 'Your wall', wall_title: 'Every duo that made it,\nhung on your wall.',
      wall_text: "Finished duos hang in both your galleries, side by side, each on a mat of its own colour. One reaction each — 🔥 😂 💀 👏 — and that's all.",
      pv_label: 'Just the two of you', pv_a11y: 'What Moment is not',
      no_1: 'No feed.', no_2: 'No likes.', no_3: 'No followers.', no_4: 'No streaks.', no_5: 'No ads.',
      no_end: 'Just two people and *one photo.*',
      pv1_t: 'No email, no password',
      pv1_x: "Pick a username — it's how friends find you. Connect Apple or Google, and a new phone signs straight back in.",
      pv2_t: 'Photos under lock',
      pv2_x: 'Each photo is encrypted on our server under its own key, stripped of location and camera data, and only ever sent to the two of you.',
      pv3_t: 'No ads, no trackers',
      pv3_x: 'No analytics, no ad SDKs, no third-party storage. A push carries one short line and nothing else.',
      pv4_t: 'Leave whenever you like',
      pv4_x: 'Delete a duo for both of you, or your whole account, right from the app — the photos go with it.',
      pv_link: 'Read the privacy policy',
      fq_label: 'Questions', fq_title: 'Good to know.', fq_more: 'Something else?', fq_support: 'Visit support',
      q1: "Can I choose who I'm paired with?",
      a1: "No — that's the fun. Moment picks someone from your pool, preferring whoever you were paired with least recently, so it keeps changing.",
      q2: 'Can my partner see my photo before they shoot?',
      a2: "No. Your half isn't sent to their phone until both halves are in. They can't even see that it's you.",
      q3: 'What if I miss a duo?',
      a3: 'Nothing dramatic. The clock runs out, both halves are deleted, your partner stays anonymous, and the next duo comes along later.',
      q4: 'How many duos will I get?',
      a4: "Four a day to start, one every hour or two. Change it to anything from one to ten on your profile, and set quiet hours for when you don't want any.",
      q5: 'Do my friends need the same phone as me?',
      a5: 'No. iPhone and Android share one Moment, so you can get duos with anyone.',
      q6: 'What happens when I change phones?',
      a6: "Connect Google — or Apple, on iPhone — in Settings → Connections. On the new phone, tap “I already have an account” and you're back, with every duo.",
      q7: 'Who can see my duos?',
      a7: "Only you and the friend you made each one with. There's no feed and no public profile — nothing for anyone to browse.",
      pool_a11y: 'Pick the other half',
      fi_title: 'A moment takes *two.*',
      fi_soon: 'Moment is coming to iPhone and Android. Bring a friend.',
      fi_live: 'Moment is on the App Store and Google Play. Bring a friend.',
      foot_a11y: 'More', footer_privacy: 'Privacy policy', footer_support: 'Support', footer_copy: '© 2026 Factory Labs',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    ka: {
      page_title: 'Moment — ორი ნახევარი. ერთი მომენტი.',
      skip: 'შინაარსზე გადასვლა',
      nav_a11y: 'სექციები', nav_how: 'როგორ მუშაობს', nav_deck: 'გამოწვევები', nav_privacy: 'კონფიდენციალურობა', nav_get: 'ჩამოტვირთვა',
      hero_a11y: 'ორი ნახევარი. ერთი მომენტი.', hero_l: 'ორი ნახევარი.', hero_r: 'ერთი მომენტი.',
      hero_mark_a11y: 'დუოს ჩვენება',
      lede_l: 'შემთხვევითი მეგობარი, შემთხვევითი გამოწვევა, შემთხვევით მომენტში.',
      lede_r: 'თქვენ თქვენს ნახევარს იღებთ, მეგობარი — თავისას. სანამ ორივე არ შემოვა, ვერავინ ვერაფერს ხედავს.',
      hero_note: 'მხოლოდ მომხმარებლის სახელი — არც ელფოსტა, არც პაროლი.',
      store_soon_small: 'მალე', store_apple_small: 'ჩამოტვირთეთ', store_google_small: 'ჩამოტვირთეთ',
      dare: 'გამოწვევა',
      ping_label: 'შეტყობინება', ping_title: 'იგივე გამოწვევა.\nიგივე დრო.',
      ping_text: 'დღის რომელიღაც მომენტში Moment თქვენი წრიდან ირჩევს მეგობარს და ორივეს ერთდროულად ერთსა და იმავე გამოწვევას უგზავნის. არ იცით, რომელი მეგობარია — მხოლოდ ის, რომ დრო უკვე მიდის.',
      ping_a11y: 'სხვა გამოწვევა',
      duo_with: 'პარტნიორი', push_now: 'ახლა', push_go: '%s წუთი. დროა.', push_go_one: 'ერთი წუთი. დროა.',
      sealed_label: 'თქვენი ნახევარი', sealed_title: 'გადაიღეთ თქვენი.\nმისი დალუქულია.',
      sealed_text: 'გახსენით კამერა, სადაც არ უნდა იყოთ, და გადაიღეთ იმდენჯერ, რამდენჯერაც გსურთ. ვერავინ ვერაფერს ხედავს — ვერც იმას, ვისთან ერთად ხართ — სანამ ორივე ნახევარი არ შემოვა.',
      sealed_a11y: 'თავიდან გადაღება', sealed_chip: 'დალუქულია', sealed_sent: 'გაიგზავნა', sealed_wait: 'მოლოდინში…', you: 'თქვენ',
      open_label: 'მომენტი', open_title: 'ორივე ნახევარი შემოვიდა.\nახლა ხედავთ.',
      open_text: 'მეორე ნახევარი შემოდის და ორივე ერთ ფოტოდ ერთიანდება — მოგონებად, რომელიც მხოლოდ თქვენ ორს გეკუთვნით. მხოლოდ ახლა იგებთ, ვინ იყო.',
      open_miss: 'თუ დრო ამოიწურა, ორივე ნახევარი წაიშლება, მეგობარი კი სამუდამოდ საიდუმლოდ დარჩება.',
      open_a11y: 'სხვა დუოს გახსნა', unlocked: 'გაიხსნა',
      deck_label: 'დასტა', deck_title: 'ზოგი ტკბილია.\nზოგი ცხარე.\n*ზოგი სასიკვდილო.*',
      deck_text: '150 გამოწვევა — სახეები, ქუჩები, საჭმელი, ცხოველები, სინათლე და ქაოსი. თითოეულის გადაღება იქვე შეგიძლიათ, სადაც ხართ. ზოგს თავისი იერი ახლავს — მაგალითად, NOIR ან X‑RAY — რომ ორივე ნახევარი ერთმანეთს ერგებოდეს.',
      levels_a11y: 'დონე',
      lv_sweet: 'ტკბილი', lv_spicy: 'ცხარე', lv_deadly: 'სასიკვდილო',
      lv_sweet_t: 'ხელის გაწვდენაზე — სახე, რაღაც თქვენს მაგიდაზე.',
      lv_spicy_t: 'მოგიწევთ ადგილიდან დაძვრა ან რაღაცის მომზადება.',
      lv_deadly_t: 'სჭირდება სხვა ადამიანი, გამბედაობა ან ზუსტი დრო.',
      lv_note: 'დონეები დუოების დასრულებასთან ერთად იხსნება. პროფილში აირჩიეთ, რამდენად შორს წახვალთ.',
      deal_hint: 'შეეხეთ ან გადაწიეთ', card_a11y: '%s — შემდეგი ბარათი',
      wall_label: 'თქვენი კედელი', wall_title: 'ყოველი დუო, რომელიც შედგა,\nთქვენს კედელზე კიდია.',
      wall_text: 'დასრულებული დუოები ორივეს გალერეაში კიდია, გვერდიგვერდ, თითოეული — თავისი ფერის პასპარტუზე. თითო რეაქცია — 🔥 😂 💀 👏 — და მეტი არაფერი.',
      pv_label: 'მხოლოდ თქვენ ორნი', pv_a11y: 'რა არ არის Moment',
      no_1: 'არანაირი ლენტა.', no_2: 'არანაირი ლაიქი.', no_3: 'არანაირი გამომწერი.', no_4: 'არანაირი სერია.', no_5: 'არანაირი რეკლამა.',
      no_end: 'მხოლოდ ორი ადამიანი და *ერთი ფოტო.*',
      pv1_t: 'არც ელფოსტა, არც პაროლი',
      pv1_x: 'აირჩიეთ მომხმარებლის სახელი — ამით გიპოვიან მეგობრები. დააკავშირეთ Apple ან Google და ახალ ტელეფონზე ყველაფერს დაიბრუნებთ.',
      pv2_t: 'ფოტოები დაცულია',
      pv2_x: 'ყოველი ფოტო ჩვენს სერვერზე საკუთარი გასაღებით არის დაშიფრული, მდებარეობისა და კამერის მონაცემები მოცილებულია და მხოლოდ თქვენ ორს მიეწოდება.',
      pv3_t: 'არც რეკლამა, არც თვალთვალი',
      pv3_x: 'არც ანალიტიკა, არც სარეკლამო SDK-ები, არც მესამე მხარის საცავი. შეტყობინება მხოლოდ ერთ მოკლე ფრაზას შეიცავს.',
      pv4_t: 'წასვლა ნებისმიერ დროს',
      pv4_x: 'წაშალეთ დუო ორივესთვის ან მთელი ანგარიში პირდაპირ აპიდან — ფოტოებიც მასთან ერთად წაიშლება.',
      pv_link: 'კონფიდენციალურობის პოლიტიკა',
      fq_label: 'კითხვები', fq_title: 'კარგია, რომ იცოდეთ.', fq_more: 'სხვა კითხვა გაქვთ?', fq_support: 'მხარდაჭერა',
      q1: 'შემიძლია ავირჩიო, ვისთან ვიქნები წყვილში?',
      a1: 'არა — სწორედ ესაა ხიბლი. Moment თქვენი წრიდან ირჩევს და უპირატესობას ანიჭებს მას, ვისთანაც ყველაზე დიდი ხანია წყვილში არ ყოფილხართ, ასე რომ, პარტნიორი სულ იცვლება.',
      q2: 'ხედავს თუ არა მეგობარი ჩემს ფოტოს, სანამ თავად გადაიღებს?',
      a2: 'არა. თქვენი ნახევარი მის ტელეფონზე არ იგზავნება, სანამ ორივე ნახევარი არ შემოვა. ისიც კი არ იცის, რომ თქვენ ხართ.',
      q3: 'რა მოხდება, თუ დუოს გავაცდენ?',
      a3: 'არაფერი განსაკუთრებული. დრო ამოიწურება, ორივე ნახევარი წაიშლება, მეგობარი ანონიმური დარჩება, შემდეგი დუო კი მოგვიანებით მოვა.',
      q4: 'რამდენი დუო მომივა?',
      a4: 'თავიდან დღეში ოთხი, ყოველ ერთ-ორ საათში ერთი. პროფილში შეგიძლიათ შეცვალოთ ერთიდან ათამდე და დააყენოთ წყნარი საათები, როცა არ გსურთ შეტყობინებები.',
      q5: 'მეგობრებს იგივე ტელეფონი უნდა ჰქონდეთ?',
      a5: 'არა. iPhone-იც და Android-იც ერთ Moment-ს იყენებენ, ასე რომ, დუო ნებისმიერთან შეგიძლიათ.',
      q6: 'რა მოხდება, ტელეფონს რომ შევცვლი?',
      a6: 'დააკავშირეთ Google — ან iPhone-ზე Apple — პარამეტრებში, „კავშირებში“. ახალ ტელეფონზე შეეხეთ „უკვე მაქვს ანგარიში“ და ყველა დუოსთან ერთად დაბრუნდებით.',
      q7: 'ვინ ხედავს ჩემს დუოებს?',
      a7: 'მხოლოდ თქვენ და მეგობარი, ვისთანაც თითოეული შექმენით. არ არსებობს ლენტა ან საჯარო პროფილი — დასათვალიერებელი არაფერია.',
      pool_a11y: 'მეორე ნახევრის არჩევა',
      fi_title: 'მომენტს *ორი* სჭირდება.',
      fi_soon: 'Moment მალე გამოვა iPhone-სა და Android-ზე. მოიყვანეთ მეგობარი.',
      fi_live: 'Moment უკვე App Store-სა და Google Play-ზეა. მოიყვანეთ მეგობარი.',
      foot_a11y: 'მეტი', footer_privacy: 'კონფიდენციალურობის პოლიტიკა', footer_support: 'მხარდაჭერა', footer_copy: '© 2026 Factory Labs',
      months: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ']
    }
  };

  // ---------------------------------------------------------------------------
  // The deck's colours (DeckHues.swift), and the ink that reads best on each.
  // ---------------------------------------------------------------------------
  var HUES = [
    { name: 'ember', base: '#E4633D', glow: '#FF9A73' },
    { name: 'honey', base: '#E8A33A', glow: '#F5C66E' },
    { name: 'moss', base: '#9AAE3F', glow: '#C4D46E' },
    { name: 'emerald', base: '#1B6E50', glow: '#4FBF94' },
    { name: 'lagoon', base: '#136F72', glow: '#4DBCC0' },
    { name: 'cobalt', base: '#3A5BD9', glow: '#8EA6FF' },
    { name: 'indigo', base: '#5A48C8', glow: '#A596FF' },
    { name: 'orchid', base: '#9147A8', glow: '#D08BE6' },
    { name: 'berry', base: '#A8346A', glow: '#F07FB0' },
    { name: 'sunset', base: '#C23A45', glow: '#FF8A8A' }
  ];
  var hueByName = {};
  HUES.forEach(function (h, i) { h.index = i; hueByName[h.name] = h; });

  function luminance(hex) {
    var v = parseInt(hex.slice(1), 16);
    function ch(c) { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
    return 0.2126 * ch((v >> 16) & 255) + 0.7152 * ch((v >> 8) & 255) + 0.0722 * ch(v & 255);
  }
  // Ivory on the deep solids, near-black on the light ones: whichever contrasts more (Colors.swift).
  function inkOn(hex) {
    var own = luminance(hex), light = luminance('#F4ECDD'), dark = luminance('#1A1411');
    return (light + 0.05) / (own + 0.05) >= (own + 0.05) / (dark + 0.05) ? '#F4ECDD' : '#1A1411';
  }
  HUES.forEach(function (h) { h.ink = inkOn(h.base); });

  // The next card's colour: never one already on the deck, and at least three
  // steps round the wheel from the last (DeckHues.next).
  function nextHue(onDeck, last) {
    var free = HUES.filter(function (h) { return onDeck.indexOf(h) < 0; });
    if (!free.length) free = HUES.filter(function (h) { return h !== last; });
    var far = last ? free.filter(function (h) { var d = Math.abs(h.index - last.index); return Math.min(d, HUES.length - d) >= 3; }) : free;
    var pool = far.length ? far : free;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ---------------------------------------------------------------------------
  // Real challenges from the deck, with the app's framing and tip.
  // ---------------------------------------------------------------------------
  var CATEGORY = {
    HUNT: ['Hunt', 'ძებნა'], FACES: ['Faces', 'სახეები'], STREET: ['Street', 'ქუჩა'], ANGLES: ['Angles', 'კუთხეები'],
    REFLECT: ['Reflect', 'ანარეკლი'], PETS: ['Pets', 'ცხოველები'], CHAOS: ['Chaos', 'ქაოსი'], FOOD: ['Food', 'საჭმელი'],
    MOTION: ['Motion', 'მოძრაობა'], BRAVE: ['Brave', 'სიმამაცე'], NATURE: ['Nature', 'ბუნება'], STEALTH: ['Stealth', 'ჩუმად'],
    LIGHT: ['Light', 'სინათლე']
  };
  var LEVEL = { EASY: ['🍭', 'lv_sweet'], MEDIUM: ['🌶️', 'lv_spicy'], HARD: ['💀', 'lv_deadly'] };

  var CHALLENGES = [
    { e: '🍅', c: 'HUNT', l: 'EASY', s: 180,
      t: ['Something red.', 'რაღაც წითელი.'],
      f: ['One red object, centred, plain backdrop.', 'ერთი წითელი საგანი, ცენტრში, სადა ფონზე.'],
      p: ['Brighter light makes the red pop.', 'რაც მეტი შუქია, მით უფრო ანათებს წითელი.'] },
    { e: '😉', c: 'FACES', l: 'EASY', s: 90,
      t: ['Wink like you own a yacht.', 'ჩაუკარით თვალი ისე, თითქოს იახტის პატრონი იყოთ.'],
      f: ['Face fills the frame.', 'სახე მთელ კადრს ავსებს.'],
      p: ['Chin up. Yachts are owned from the chin.', 'ნიკაპი მაღლა. იახტის პატრონი ნიკაპით ჩანს.'] },
    { e: '🫥', c: 'REFLECT', l: 'MEDIUM', s: 160, fx: 'NOIR',
      t: ['Your shadow, doing something.', 'თქვენი ჩრდილი, რაღაცას რომ აკეთებს.'],
      f: ['Shadow fills the frame. You stay out of it.', 'ჩრდილი მთელ კადრს ავსებს, თქვენ კი კადრს გარეთ რჩებით.'],
      p: ['Low sun or a lamp on the floor.', 'დაბალი მზე ან იატაკზე დადებული ლამპა.'] },
    { e: '☁️', c: 'STREET', l: 'EASY', s: 110,
      t: ['The sky, and only the sky.', 'ცა და მხოლოდ ცა.'],
      f: ['No buildings, no trees, no edges.', 'არც შენობები, არც ხეები, არც კიდეები.'],
      p: ['Grey sky is a photo too.', 'ნაცრისფერი ცაც ფოტოა.'] },
    { e: '💎', c: 'CHAOS', l: 'HARD', s: 220, fx: 'GOLD',
      t: ['Make an ordinary thing look expensive.', 'ჩვეულებრივი ნივთი ძვირფასად აჩვენეთ.'],
      f: ['One object, clean background, careful light.', 'ერთი საგანი, სუფთა ფონი, ფრთხილი შუქი.'],
      p: ['A window and a dark surface is the whole trick.', 'ფანჯარა და მუქი ზედაპირი — ეს არის მთელი ხრიკი.'] },
    { e: '🐕', c: 'PETS', l: 'MEDIUM', s: 200,
      t: ['A pet ignoring you.', 'შინაური ცხოველი, რომელიც ყურადღებას არ გაქცევთ.'],
      f: ['Whole animal, face turned away.', 'მთელი ცხოველი, სახე სხვაგან აქვს მიბრუნებული.'],
      p: ['Do not call its name. That ruins it.', 'სახელით ნუ დაუძახებთ. ყველაფერს გააფუჭებთ.'] },
    { e: '🦸', c: 'MOTION', l: 'EASY', s: 150,
      t: ['Your best superhero landing.', 'თქვენი საუკეთესო სუპერგმირული დაშვება.'],
      f: ['Full body, one knee down, fist on the floor.', 'მთელი ტანი, ერთი მუხლი დაბლა, მუშტი იატაკზე.'],
      p: ['Look up at the lens like it owes you.', 'ობიექტივს ქვემოდან ისე ახედეთ, თითქოს ვალში გყავთ.'] },
    { e: '🙃', c: 'ANGLES', l: 'EASY', s: 120, fx: 'NEGATIVE',
      t: ['Shoot it upside down.', 'გადაიღეთ თავდაყირა.'],
      f: ['Flip the phone fully. Do not rotate it after.', 'ტელეფონი ბოლომდე გადააბრუნეთ. მერე აღარ შეატრიალოთ.'],
      p: ['Pick something with a clear top and bottom.', 'აირჩიეთ ის, რასაც აშკარა ზედა და ქვედა მხარე აქვს.'] },
    { e: '🤳', c: 'BRAVE', l: 'HARD', s: 900,
      t: ['A selfie with a stranger. Ask first.', 'სელფი უცნობთან. ჯერ ჰკითხეთ.'],
      f: ['Both faces in frame, both looking at the lens.', 'ორივე სახე კადრშია, ორივე ობიექტივს უყურებს.'],
      p: ['Say it straight: “I’m doing a photo challenge — would you be in it?”', 'პირდაპირ უთხარით: „ფოტოგამოწვევას ვასრულებ — ხომ არ ჩამიდგებით კადრში?“'] },
    { e: '🍕', c: 'FOOD', l: 'MEDIUM', s: 150,
      t: ['The last bite of something.', 'რაღაცის ბოლო ლუკმა.'],
      f: ['The remains centred on the plate.', 'ნარჩენები თეფშის ცენტრში.'],
      p: ['Crumbs count as composition.', 'ნამცეცებიც კომპოზიციის ნაწილია.'] },
    { e: '🔌', c: 'HUNT', l: 'MEDIUM', s: 180,
      t: ['Something with a face that is not a face.', 'რაღაც, რასაც სახე აქვს, მაგრამ სახე არ არის.'],
      f: ['Centre the ‘face’ and fill the frame.', '„სახე“ ცენტრში მოაქციეთ და კადრი შეავსეთ.'],
      p: ['Sockets, cars, buildings, bags.', 'როზეტები, მანქანები, შენობები, ჩანთები.'] },
    { e: '🌀', c: 'CHAOS', l: 'EASY', s: 100, fx: 'DREAM',
      t: ['Close your eyes. Spin once. Shoot.', 'დახუჭეთ თვალები. ერთხელ დატრიალდით. გადაიღეთ.'],
      f: ['Whatever is in front of you when you stop.', 'რაც წინ დაგხვდებათ, როცა გაჩერდებით.'],
      p: ['One spin. No adjusting after.', 'ერთი ბრუნი. მერე აღარაფერი გაასწოროთ.'] },
    { e: '☁️', c: 'NATURE', l: 'EASY', s: 120,
      t: ['A cloud that looks like something.', 'ღრუბელი, რომელიც რაღაცას ჰგავს.'],
      f: ['Mostly sky.', 'უმეტესად ცა.'],
      p: ["Tell your partner what it is. They won't see it.", 'უთხარით მეგობარს, რას ჰგავს. მაინც ვერ დაინახავს.'] },
    { e: '🍝', c: 'FOOD', l: 'MEDIUM', s: 160, fx: 'VIVID',
      t: ['Food, photographed badly on purpose.', 'საჭმელი, განზრახ ცუდად გადაღებული.'],
      f: ['Too close, bad angle, worse light.', 'ზედმეტად ახლოს, ცუდი კუთხით, უარესი შუქით.'],
      p: ['Flash on. Always flash on.', 'ჩართეთ ფლეში. ყოველთვის ჩართეთ ფლეში.'] },
    { e: '🫶', c: 'STEALTH', l: 'EASY', s: 150,
      t: ['Someone you love, doing nothing special.', 'ვინმე, ვინც გიყვართ, როცა არაფერს განსაკუთრებულს აკეთებს.'],
      f: ['As they are.', 'ისეთი, როგორიც არის.'],
      p: ["Don't ask them to pose.", 'ნუ სთხოვთ პოზირებას.'] },
    { e: '🕴️', c: 'LIGHT', l: 'HARD', s: 200, fx: 'NOIR',
      t: ['Someone or something in silhouette.', 'ვინმე ან რაღაც სილუეტად.'],
      f: ['Subject fully black against a bright background.', 'ობიექტი მთლიანად შავია ნათელ ფონზე.'],
      p: ['Put the light behind them and expose for it.', 'სინათლე უკან მოაქციეთ და ექსპოზიცია მასზე დააყენეთ.'] },
    { e: '🥷', c: 'STEALTH', l: 'MEDIUM', s: 180, fx: 'NIGHT VISION',
      t: ['Photograph a friend before they notice.', 'გადაუღეთ მეგობარს, სანამ შეგამჩნევთ.'],
      f: ['Them in frame, unposed, however it lands.', 'ის კადრშია, უპოზოდ, როგორც გამოვა.'],
      p: ['Shoot from the hip — lifting the phone gives you away.', 'წელიდან გადაიღეთ — აწეული ტელეფონი გაგცემთ.'] },
    { e: '🌅', c: 'NATURE', l: 'HARD', s: 1800,
      t: ['The sun touching something: a roof, a tree, the sea.', 'მზე, რომელიც რაღაცას ეხება: სახურავს, ხეს, ზღვას.'],
      f: ['Sun low in the frame.', 'მზე კადრის ქვედა ნაწილში.'],
      p: ['Never look at it; look at what it touches.', 'მზეს ნუ უყურებთ — უყურეთ იმას, რასაც ეხება.'] },
    { e: '🗿', c: 'HUNT', l: 'EASY', s: 150,
      t: ['The ugliest object within ten steps.', 'ყველაზე უშნო საგანი ათი ნაბიჯის მანძილზე.'],
      f: ['Object centred, shot like it is beautiful.', 'საგანი ცენტრში, ისე გადაღებული, თითქოს ლამაზია.'],
      p: ['Good light on an ugly thing is the joke.', 'კარგი შუქი უშნო საგანზე — ესაა მთელი ხუმრობა.'] },
    { e: '🚪', c: 'STREET', l: 'MEDIUM', s: 180,
      t: ['A door you have never opened.', 'კარი, რომელიც არასდროს გაგიღიათ.'],
      f: ['Whole door in frame, straight on.', 'მთელი კარი კადრში, პირდაპირ.'],
      p: ['Square up to it. Wonky doors need straight framing.', 'პირდაპირ დადექით. მრუდე კარს სწორი კადრი სჭირდება.'] }
  ];

  // ---------------------------------------------------------------------------
  // The filters, exactly as the phones bake them (moment-android docs/FILTERS.md).
  // Rows R G B A; columns R G B A offset, offsets on a 0–255 scale.
  // ---------------------------------------------------------------------------
  var FILTERS = [
    { key: 'NOIR', vig: 0.55, lines: false, m: [0.4335, 0.8511, 0.1653, 0, -65.6, 0.4335, 0.8511, 0.1653, 0, -65.6, 0.4335, 0.8511, 0.1653, 0, -65.6],
      line: ['Every shot is a clue.', 'ყოველი კადრი — სამხილია.'], from: 2 },
    { key: 'NIGHT VISION', vig: 0.6, lines: true, m: [0.1308, 0.2568, 0.0499, 0, -14, 0.3737, 0.7337, 0.1425, 0, -14, 0.1682, 0.3302, 0.0641, 0, -14],
      line: ['Lights off. Eyes on.', 'შუქი ჩამქრალია. თვალები — ღია.'], from: 16 },
    { key: 'CCTV', vig: 0.35, lines: true, m: [0.4834, 0.5967, 0.1159, 0, -44.4, 0.3304, 0.8436, 0.126, 0, -44.4, 0.3139, 0.6162, 0.3049, 0, -44.4],
      line: ['You are being recorded.', 'მიმდინარეობს ჩაწერა.'], fromText: ['Photograph a coworker.', 'გადაუღეთ კოლეგას.'] },
    { key: '1974', vig: 0.3, lines: false, m: [0.653, 0.1778, 0.0345, 0, 38, 0.0838, 0.6854, 0.032, 0, 38, 0.0671, 0.1317, 0.4422, 0, 38],
      line: ['Printed, faded, found in a drawer.', 'დაბეჭდილი, გაცრეცილი, უჯრაში ნაპოვნი.'], fromText: ['Something older than you.', 'რაღაც, რაც თქვენზე ძველია.'] },
    { key: 'GOLD', vig: 0.2, lines: false, m: [1.3041, -0.1039, -0.0202, 0, 10, -0.0457, 1.0832, -0.0174, 0, 10, -0.0323, -0.0634, 0.8157, 0, 10],
      line: ['Everything looks expensive in this light.', 'ამ შუქზე ყველაფერი ძვირად გამოიყურება.'], from: 4 },
    { key: 'ICE', vig: 0.2, lines: false, m: [0.7123, 0.1588, 0.0308, 0, -12.8, 0.0957, 0.9348, 0.0365, 0, -12.8, 0.1184, 0.2325, 0.9691, 0, -12.8],
      line: ['Cold. Very cold.', 'ცივა. ძალიან ცივა.'], fromText: ['Take a selfie without smiling.', 'გადაიღეთ სელფი ღიმილის გარეშე.'] },
    { key: 'X-RAY', vig: 0.45, lines: false, m: [-0.3027, -0.5943, -0.1154, 0, 213.3875, -0.3633, -0.7132, -0.1385, 0, 265.025, -0.4037, -0.7924, -0.1539, 0, 299.45],
      line: ['Nothing to declare.', 'სადეკლარაციო არაფერი მაქვს.'], fromText: ["Your work bag's contents, tipped out.", 'სამსახურის ჩანთის შიგთავსი, გადმოყრილი.'] },
    { key: 'NEGATIVE', vig: 0, lines: false, m: [-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255],
      line: ['The world, inside out.', 'სამყარო, პირიქით.'], from: 7 },
    { key: 'VIVID', vig: 0, lines: false, m: [1.7949, -0.54, -0.1049, 0, -19.2, -0.2751, 1.53, -0.1049, 0, -19.2, -0.2751, -0.54, 1.9651, 0, -19.2],
      line: ['Turned all the way up.', 'ბოლომდე აწეული.'], from: 13 },
    { key: 'DREAM', vig: 0, lines: false, m: [0.6182, 0.0844, 0.0164, 0, 58.0736, 0.0405, 0.6216, 0.0154, 0, 54.7232, 0.0447, 0.0877, 0.6144, 0, 60.3072],
      line: ['Half awake.', 'ნახევრად ფხიზელი.'], from: 11 },
    { key: 'PHOTOCOPY', vig: 0.15, lines: false, m: [0.5681, 1.1153, 0.2166, 0, -95.2, 0.5567, 1.093, 0.2123, 0, -92.896, 0.5113, 1.0038, 0.1949, 0, -83.68],
      line: ['A copy of a copy of a copy.', 'ასლის ასლის ასლი.'], fromText: ['Make something expensive look cheap.', 'ძვირფასი ნივთი იაფად აჩვენეთ.'] }
  ];
  function filterId(key) { return 'f-' + key.toLowerCase().replace(/[^a-z0-9]+/g, ''); }

  // The prints on the wall: two halves each, made for the same challenge.
  var PRINTS = [
    { a: ['apple', 0], b: ['balloon', 0], hue: 'honey', t: 0, who: 1, d: [2, 9], r: '🔥😂' },
    { a: ['sky', 0], b: ['sky', 1], hue: 'cobalt', t: 3, who: 0, d: [28, 8], r: '👏' },
    { a: ['sea', 0], b: ['sea', 1], hue: 'ember', t: 17, who: 2, d: [21, 8], r: '🔥' },
    { a: ['shadow', 0], b: ['shadow', 1], hue: 'sunset', t: 2, who: 3, d: [14, 8], r: '💀', fx: 'NOIR' },
    { a: ['cat', 0], b: ['cat', 1], hue: 'indigo', t: 5, who: 4, d: [9, 8], r: '😂👏' },
    { a: ['pizza', 0], b: ['pizza', 1], hue: 'berry', t: 9, who: 5, d: [30, 7], r: '😂' },
    { a: ['plant', 0], b: ['flower', 0], hue: 'emerald', text: ['Something green and alive.', 'რაღაც მწვანე და ცოცხალი.'], who: 6, d: [22, 7], r: '👏' },
    { a: ['door', 0], b: ['door', 1], hue: 'lagoon', t: 19, who: 7, d: [14, 7], r: '🔥' },
    { a: ['lamp', 0], b: ['lamp', 1], hue: 'orchid', text: ['Point the camera at a light source.', 'კამერა სინათლის წყაროს მიუშვირეთ.'], who: 8, d: [5, 7], r: '🔥👏', fx: 'GOLD' },
    { a: ['stairs', 0], b: ['stairs', 1], hue: 'moss', text: ['The nearest staircase.', 'უახლოესი კიბე.'], who: 9, d: [27, 6], r: '' },
    { a: ['coffee', 0], b: ['coffee', 1], hue: 'honey', text: ['Whatever you last drank.', 'ის, რაც ბოლოს დალიეთ.'], who: 0, d: [18, 6], r: '😂' },
    { a: ['silhouette', 0], b: ['silhouette', 1], hue: 'cobalt', t: 15, who: 2, d: [6, 6], r: '🔥💀' },
    { a: ['mountain', 0], b: ['mountain', 1], hue: 'lagoon', text: ['The view from the highest point you can reach nearby.', 'ხედი უახლოესი უმაღლესი წერტილიდან.'], who: 3, d: [29, 5], r: '👏' },
    { a: ['flower', 0], b: ['flower', 1], hue: 'berry', text: ['A flower so close the petals fill the frame.', 'ყვავილი ისე ახლოდან, რომ ფურცლები მთელ კადრს ავსებს.'], who: 1, d: [17, 5], r: '🔥' }
  ];
  var NAMES = [['Mari', 'მარი'], ['Nika', 'ნიკა'], ['Dato', 'დათო'], ['Ana', 'ანა'], ['Giorgi', 'გიორგი'], ['Salome', 'სალომე'], ['Luka', 'ლუკა'], ['Tamta', 'თამთა'], ['Sandro', 'სანდრო'], ['Nino', 'ნინო']];

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  var lang = root.lang === 'ka' ? 'ka' : 'en';
  function L() { return lang === 'ka' ? 1 : 0; }
  function t(key) { var s = STRINGS[lang][key]; return s != null ? s : STRINGS.en[key]; }
  function fill(template, value) { return String(template).replace('%s', value); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function clock(secs) { secs = Math.max(0, Math.round(secs)); return Math.floor(secs / 60) + ':' + ('0' + (secs % 60)).slice(-2); }
  function shuffle(list) { for (var i = list.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = list[i]; list[i] = list[j]; list[j] = x; } return list; }
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var r = Math.imul(seed ^ seed >>> 15, 1 | seed);
      r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r;
      return ((r ^ r >>> 14) >>> 0) / 4294967296;
    };
  }
  // "*painted* words" → <em>, and "\n" → a line break.
  function painted(text) {
    return String(text).split('\n').map(function (line) {
      return line.split(/(\*[^*]+\*)/).map(function (part) {
        return part.charAt(0) === '*' ? '<em>' + esc(part.slice(1, -1)) + '</em>' : esc(part);
      }).join('');
    }).join('<br>');
  }
  // A drawn photo, with a challenge's filter run through it when it has one.
  function scene(name, v, fx) {
    var html = SCENES[name](v || 0);
    var open = html.indexOf('>') + 1, close = html.lastIndexOf('</svg>');
    return html.slice(0, open) + '<g' + (fx ? ' filter="url(#' + filterId(fx) + ')"' : '') + '>' + html.slice(open, close) + '</g></svg>';
  }
  // The same, placed inside another drawing at x, y, w, h.
  function sceneAt(name, v, fx, box) {
    return scene(name, v, fx).replace('<svg ', '<svg x="' + box[0] + '" y="' + box[1] + '" width="' + box[2] + '" height="' + box[3] + '" ');
  }
  function fxLayers(fx) {
    var f = fx && FILTERS.filter(function (x) { return x.key === fx; })[0];
    if (!f) return '';
    return (f.vig ? '<i class="fx-vig" style="opacity:' + f.vig + '"></i>' : '') + (f.lines ? '<i class="fx-lines"></i>' : '');
  }
  var MARK_L = 'M45.5 4.5A40.5 40.5 0 0 0 45.5 85.5Z';
  var MARK_R = 'M54.5 14.5A40.5 40.5 0 0 1 54.5 95.5Z';
  function markSvg() { return '<svg class="mark" viewBox="0 0 100 100" aria-hidden="true"><path class="mark__l" d="' + MARK_L + '"/><path class="mark__r" d="' + MARK_R + '"/></svg>'; }
  var SEAM = '<div class="seam" aria-hidden="true"><i class="seam__line"></i><i class="seam__disc">' +
    '<svg viewBox="0 0 100 100"><path d="' + MARK_L + '" fill="#E4633D"/><path d="' + MARK_R + '" fill="#4A68E8"/></svg></i></div>';

  // Run `start` while an element is on screen, and `stop` when it leaves.
  function whileVisible(el, start, stop, margin) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { start(); return; }
    var on = false;
    new IntersectionObserver(function (entries) {
      var now = entries[entries.length - 1].isIntersecting;
      if (now === on) return;
      on = now;
      if (on) start(); else if (stop) stop();
    }, { rootMargin: margin || '0px', threshold: 0.2 }).observe(el);
  }
  function restart(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function play(el, frames, opts) { return el && el.animate && !still ? el.animate(frames, opts) : null; }

  // The filters as SVG: the phones' own matrices, offsets moved to a 0–1 scale.
  $('#filterDefs').innerHTML = FILTERS.map(function (f) {
    var v = [];
    for (var r = 0; r < 3; r++) v.push(f.m[r * 5], f.m[r * 5 + 1], f.m[r * 5 + 2], f.m[r * 5 + 3], +(f.m[r * 5 + 4] / 255).toFixed(5));
    v.push(0, 0, 0, 1, 0);
    return '<filter id="' + filterId(f.key) + '" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%"><feColorMatrix type="matrix" values="' + v.join(' ') + '"/></filter>';
  }).join('');

  // ---------------------------------------------------------------------------
  // Language
  // ---------------------------------------------------------------------------
  var onLanguage = [];
  function applyStrings() {
    document.title = t('page_title');
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-p]').forEach(function (el) { el.innerHTML = painted(t(el.getAttribute('data-i18n-p'))); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    onLanguage.forEach(function (fn) { fn(); });
  }
  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    root.lang = next;
    try { localStorage.setItem('moment.lang', next); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has('lang')) { url.searchParams.set('lang', next); history.replaceState(null, '', url); }
    } catch (e) {}
    applyStrings();
  }
  $$('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLanguage(b.getAttribute('data-lang')); });
  });

  // ---------------------------------------------------------------------------
  // The stores, as a pair: the App Store is your half, Google Play theirs.
  // ---------------------------------------------------------------------------
  var APPLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27z"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00D7FE" d="M3.6 2.3c-.3.3-.4.8-.4 1.3v16.8c0 .5.1 1 .4 1.3l.1.1 9.4-9.4v-.2L3.7 2.2z"/><path fill="#FFCE00" d="m16.2 15.5-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1z"/><path fill="#FF3A44" d="M16.3 15.4 13.1 12.3l-9.5 9.4c.4.4.9.4 1.6.1l11.1-6.4"/><path fill="#00F076" d="M16.3 9.2 5.2 2.8c-.7-.4-1.2-.3-1.6.1l9.5 9.4z"/></svg>';
  function storeHalf(side, url, glyph, small, name) {
    var inner = glyph + '<span><small>' + esc(url ? small : t('store_soon_small')) + '</small>' + name + '</span>';
    return url
      ? '<a class="pair__half pair__half--' + side + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + inner + '</a>'
      : '<span class="pair__half pair__half--' + side + '">' + inner + '</span>';
  }
  function renderStores() {
    var html = storeHalf('l', STORE.appStore, APPLE, t('store_apple_small'), 'App Store') +
      storeHalf('r', STORE.googlePlay, PLAY, t('store_google_small'), 'Google Play') +
      '<i class="pair__seam" aria-hidden="true">' + markSvg() + '</i>';
    $$('[data-stores]').forEach(function (el) { el.innerHTML = html; });
    var live = !!(STORE.appStore && STORE.googlePlay);
    $('#finaleText').textContent = t(live ? 'fi_live' : 'fi_soon');
  }
  onLanguage.push(renderStores);

  // ---------------------------------------------------------------------------
  // The bar firms up once the page moves.
  // ---------------------------------------------------------------------------
  var bar = $('#bar');
  function onScroll() { bar.classList.toggle('is-solid', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------------------------------------------------------------------------
  // The burst (HalvesBurst): halves and quarters thrown out from a point —
  // a quick push out, a slow drift down, gone in under two seconds.
  // ---------------------------------------------------------------------------
  var BURST_COLOURS = ['#E4633D', '#E8A33A', '#4A68E8', '#22A273', '#9147A8', '#F2B8A6', '#F4ECDD'];
  function burst(host, reach, count, scale) {
    if (still || !host || !host.animate) return;
    scale = scale || 1;
    for (var i = 0; i < (count || 46); i++) {
      var quarter = Math.random() < 0.35;
      var size = (9 + Math.random() * 14) * scale;
      var w = quarter ? size * 0.8 : size / 2, h = quarter ? size * 0.8 : size;
      var el = document.createElement('i');
      el.style.width = w + 'px';
      el.style.height = h + 'px';
      el.style.margin = (-h / 2) + 'px 0 0 ' + (-w / 2) + 'px';
      var colour = BURST_COLOURS[Math.floor(Math.random() * BURST_COLOURS.length)];
      el.innerHTML = quarter
        ? '<svg viewBox="0 0 100 100"><path d="M0 0H100A100 100 0 0 1 0 100Z" fill="' + colour + '"/></svg>'
        : '<svg viewBox="0 0 50 100"><path d="M50 0A50 50 0 0 0 50 100Z" fill="' + colour + '"/></svg>';
      host.appendChild(el);
      var a = Math.random() * Math.PI * 2, d = reach * (0.3 + Math.random() * 0.7);
      var x = Math.cos(a) * d, y = Math.sin(a) * d, spin = (Math.random() - 0.5) * 540, fall = reach * (0.05 + Math.random() * 0.15);
      var r0 = Math.random() * 360;
      el.animate([
        { transform: 'translate(0,0) rotate(' + r0 + 'deg) scale(.3)', opacity: 1 },
        { transform: 'translate(' + x * 0.82 + 'px,' + y * 0.82 + 'px) rotate(' + (r0 + spin * 0.45) + 'deg) scale(1)', opacity: 1, offset: 0.3 },
        { transform: 'translate(' + x + 'px,' + (y + fall) + 'px) rotate(' + (r0 + spin) + 'deg) scale(.85)', opacity: 0 }
      ], { duration: 1500 + Math.random() * 400, easing: 'cubic-bezier(.12,.75,.3,1)' }).onfinish = (function (node) { return function () { node.remove(); }; })(el);
    }
  }

  // ---------------------------------------------------------------------------
  // Hero: the mark glides together, and now and then (or on a tap) develops
  // a duo — two photos of the same challenge, one in each half.
  // ---------------------------------------------------------------------------
  var DUOS = [
    { a: ['apple', 0], b: ['balloon', 0], c: 0, who: 1 },
    { a: ['sky', 0], b: ['sky', 1], c: 3, who: 9 },
    { a: ['cat', 0], b: ['cat', 1], c: 5, who: 3 },
    { a: ['sea', 0], b: ['sea', 1], c: 17, who: 0 },
    { a: ['shadow', 0], b: ['shadow', 1], c: 2, fx: 'NOIR', who: 6 },
    { a: ['pizza', 0], b: ['pizza', 1], c: 9, who: 5 },
    { a: ['door', 0], b: ['door', 1], c: 19, who: 7 },
    { a: ['silhouette', 0], b: ['silhouette', 1], c: 15, fx: 'NOIR', who: 2 }
  ];
  (function hero() {
    var section = $('#top'), mark = $('#heroMark'), dare = $('#heroDare');
    var photoL = $('#heroPhotoL'), photoR = $('#heroPhotoR');
    var halves = $$('.bigmark__half', mark), host = $('.burst', mark);
    var k = 0, current = null, auto = null, hide = null;
    var GLARE = '<rect class="glare" width="100" height="100"/>';

    function caption() {
      if (current) dare.innerHTML = '<b>' + esc(t('dare')) + '</b>' + esc(CHALLENGES[current.c].t[L()]);
    }
    function develop() {
      current = DUOS[k % DUOS.length]; k++;
      photoL.innerHTML = sceneAt(current.a[0], current.a[1], current.fx, [5, 4.5, 40.5, 81]) + GLARE;
      photoR.innerHTML = sceneAt(current.b[0], current.b[1], current.fx, [54.5, 14.5, 40.5, 81]) + GLARE;
      caption();
      restart(mark, 'is-photo');
      play($('.glare', photoL), [{ opacity: 0.92 }, { opacity: 0 }], { duration: 1500, easing: 'ease-out', fill: 'both' });
      play($('.glare', photoR), [{ opacity: 0.92 }, { opacity: 0 }], { duration: 1500, delay: 260, easing: 'ease-out', fill: 'both' });
      // The halves clap together, and a few of the mark's pieces puff out of the join.
      play(halves[0], [{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)', offset: 0.4 }, { transform: 'translateX(0)' }], { duration: 560, easing: 'cubic-bezier(.5,0,.3,1)' });
      play(halves[1], [{ transform: 'translateX(0)' }, { transform: 'translateX(5px)', offset: 0.4 }, { transform: 'translateX(0)' }], { duration: 560, easing: 'cubic-bezier(.5,0,.3,1)' });
      setTimeout(function () { burst(host, mark.offsetWidth * 0.75, 34, mark.offsetWidth / 420); }, 330);
      clearTimeout(hide);
      hide = setTimeout(function () { mark.classList.remove('is-photo'); }, 4200);
    }
    function loop() { clearInterval(auto); auto = setInterval(develop, 7000); }

    mark.addEventListener('click', function () { develop(); loop(); });
    mark.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); develop(); loop(); }
    });
    whileVisible(mark, function () {
      clearTimeout(auto);
      auto = setTimeout(function () { develop(); loop(); }, k ? 1200 : 2800);
    }, function () { clearTimeout(auto); clearInterval(auto); });
    onLanguage.push(caption);

    requestAnimationFrame(function () { requestAnimationFrame(function () { section.classList.add('is-in'); }); });
  })();

  // ---------------------------------------------------------------------------
  // 01 — The ping: the push, and the duo's clock as a ring that empties with it.
  // ---------------------------------------------------------------------------
  (function ping() {
    var fig = $('#ping'), arc = $('#pingArc');
    var emoji = $('#pingEmoji'), dareEl = $('#pingDare'), clockEl = $('#pingClock');
    var pushTitle = $('#pushTitle'), pushText = $('#pushText');
    var ORDER = [0, 3, 9, 5, 18, 1, 11, 13, 6, 10, 14, 12];
    var k = 0, c = null, secs = 0, timer = null, started = false;

    function paint() {
      emoji.textContent = c.e;
      dareEl.textContent = c.t[L()];
      var minutes = Math.floor(c.s / 60);
      pushTitle.textContent = minutes <= 1 ? t('push_go_one') : fill(t('push_go'), minutes);
      pushText.textContent = c.t[L()];
    }
    function tick() {
      clockEl.textContent = clock(secs);
      arc.style.strokeDasharray = (secs / c.s * 100).toFixed(3) + ' 100';
    }
    function deal(first) {
      c = CHALLENGES[ORDER[k % ORDER.length]]; k++;
      secs = c.s;
      function apply() {
        paint();
        tick();
        fig.classList.remove('is-swapping');
        restart(fig, 'is-pinged');
      }
      if (first || still) { apply(); return; }
      fig.classList.add('is-swapping', 'is-dealing');
      fig.classList.remove('is-pinged');
      setTimeout(apply, 380);
      setTimeout(function () { fig.classList.remove('is-dealing'); }, 1300);
    }
    function run() {
      clearInterval(timer);
      timer = setInterval(function () {
        secs -= 1;
        if (secs <= 0) { deal(false); return; }
        tick();
      }, 1000);
    }
    deal(true);
    fig.classList.remove('is-pinged');
    whileVisible(fig, function () {
      if (!started) { started = true; setTimeout(function () { fig.classList.add('is-pinged'); }, 350); }
      run();
    }, function () { clearInterval(timer); });
    function next() { deal(false); run(); }
    fig.addEventListener('click', next);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } });
    onLanguage.push(function () { if (c) paint(); });
  })();

  // ---------------------------------------------------------------------------
  // 02 — Your half: the shutter, the picture coming up, and the seal.
  // Theirs stays hatching, breathing, the way everything waiting does.
  // ---------------------------------------------------------------------------
  (function sealed() {
    var fig = $('#sealed'), photo = $('#sealedPhoto'), flash = $('.sheet__flash', fig);
    var SHOTS = [['apple', 0], ['coffee', 0], ['cat', 0], ['lamp', 0], ['plant', 0], ['door', 0]];
    var k = 0, shot = false, seal = null;
    function shoot() {
      var s = SHOTS[k % SHOTS.length]; k++;
      clearTimeout(seal);
      fig.classList.remove('is-sealed');
      photo.innerHTML = scene(s[0], s[1]) + '<i class="glare"></i>';
      if (still) { photo.style.opacity = 1; fig.classList.add('is-sealed'); return; }
      if (photo.getAnimations) photo.getAnimations().forEach(function (a) { a.cancel(); });
      photo.style.opacity = 0;
      play(flash, [{ opacity: 0 }, { opacity: 0.95, offset: 0.12 }, { opacity: 0 }], { duration: 650, easing: 'ease-out' });
      play(photo, [{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: 140, easing: 'ease-out', fill: 'both' });
      play($('.glare', photo), [{ opacity: 0.9 }, { opacity: 0 }], { duration: 1700, delay: 140, easing: 'ease-out', fill: 'both' });
      seal = setTimeout(function () { fig.classList.add('is-sealed'); }, 1700);
    }
    whileVisible(fig, function () {
      if (!shot) { shot = true; setTimeout(shoot, 500); }
    });
    fig.addEventListener('click', shoot);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shoot(); } });
  })();

  // ---------------------------------------------------------------------------
  // 03 — The moment: the second half lands, the two meet at the seam, and
  // the name that never showed finally does.
  // ---------------------------------------------------------------------------
  (function joined() {
    var fig = $('#joined'), left = $('#joinedL'), right = $('#joinedR');
    var who = $('#joinedWho'), dareEl = $('#joinedDare'), host = $('.burst', fig);
    var PAIRS = [DUOS[0], DUOS[3], DUOS[2], DUOS[6], DUOS[5]];
    var k = 0, d = null, busy = false, ran = false, revealed = false, timers = [];

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function caption() {
      if (!d) return;
      dareEl.innerHTML = esc(t('unlocked')) + ' · ' + esc(CHALLENGES[d.c].t[L()]);
      if (revealed) { who.textContent = NAMES[d.who][L()]; who.classList.remove('is-hidden'); }
    }
    function scramble(name, done) {
      var letters = lang === 'ka' ? 'აბგდევზთიკლმნოპრსტუფქღყშჩცძწჭხჯჰ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var n = 0;
      who.classList.remove('is-hidden');
      var iv = setInterval(function () {
        n += 1;
        var out = '';
        for (var i = 0; i < name.length; i++) out += i < n / 3 ? name.charAt(i) : letters.charAt(Math.floor(Math.random() * letters.length));
        who.textContent = out;
        if (n / 3 >= name.length) { clearInterval(iv); who.textContent = name; if (done) done(); }
      }, 34);
    }
    function run() {
      if (busy) return;
      busy = true;
      timers.forEach(clearTimeout); timers = [];
      d = PAIRS[k % PAIRS.length]; k++;
      revealed = false;
      left.innerHTML = scene(d.a[0], d.a[1], d.fx) + fxLayers(d.fx);
      right.innerHTML = scene(d.b[0], d.b[1], d.fx) + fxLayers(d.fx) + '<i class="glare"></i>';
      who.textContent = '? ? ? ? ?';
      who.classList.add('is-hidden');
      caption();
      if (still) { revealed = true; caption(); busy = false; return; }
      fig.classList.remove('is-landed');
      fig.classList.add('is-apart');
      later(function () {
        fig.classList.add('is-landed');
        play($('.glare', right), [{ opacity: 0.92 }, { opacity: 0 }], { duration: 1500, easing: 'ease-out', fill: 'both' });
      }, 700);
      later(function () { fig.classList.remove('is-apart', 'is-landed'); }, 1900);
      later(function () { burst(host, Math.min(fig.offsetWidth * 0.62, 460), 46, Math.max(0.8, fig.offsetWidth / 640)); }, 2250);
      later(function () {
        scramble(NAMES[d.who][L()], function () { revealed = true; busy = false; });
      }, 2350);
    }
    // Before it's seen, the duo waits apart, the right half still hatching.
    d = PAIRS[0];
    left.innerHTML = scene(d.a[0], d.a[1]);
    right.innerHTML = scene(d.b[0], d.b[1]) + '<i class="glare"></i>';
    caption();
    if (!still) fig.classList.add('is-apart');
    whileVisible(fig, function () { if (!ran) { ran = true; k = 0; setTimeout(run, 250); } }, null, '0px 0px -15% 0px');
    fig.addEventListener('click', run);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); } });
    onLanguage.push(caption);
  })();

  // ---------------------------------------------------------------------------
  // The deck: real challenges, each card painted by the deck's colour rule,
  // with one figure cut from a circle pressed into it.
  // ---------------------------------------------------------------------------
  (function deck() {
    var stack = $('#dealerStack'), levelsEl = $('#levels'), lineEl = $('#levelLine');
    var level = null, queue = [], last = null, seed = 0, flying = false;
    var RING = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="2.4"/>' +
      '<circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" pathLength="100" stroke-dasharray="100 100"/></svg>';

    function refill() {
      queue = shuffle(CHALLENGES.map(function (c, i) { return i; }).filter(function (i) { return !level || CHALLENGES[i].l === level; }));
    }
    function draw() {
      if (!queue.length) refill();
      return queue.shift();
    }
    function cardHtml(c) {
      var lv = LEVEL[c.l];
      return '<i class="dcard__orn dcard__orn--' + (seed % 3) + '"></i>' +
        '<div class="dcard__top"><span class="dcard__level"><span aria-hidden="true">' + lv[0] + '</span>' + esc(t(lv[1])) + '</span>' +
        '<span class="dcard__cat">' + esc(CATEGORY[c.c][L()]) + '</span></div>' +
        '<p class="dcard__emoji" aria-hidden="true">' + c.e + '</p>' +
        '<p class="dcard__dare">' + esc(c.t[L()]) + '</p>' +
        '<p class="dcard__framing">' + esc(c.f[L()]) + '</p>' +
        '<div class="dcard__foot"><span class="dcard__clock">' + RING + clock(c.s) + '</span>' +
        '<span class="dcard__tip">' + esc(c.p[L()]) + '</span>' + (c.fx ? '<span class="dcard__fx">' + esc(c.fx) + '</span>' : '') + '</div>';
    }
    function make(pos) {
      var i = draw(), c = CHALLENGES[i];
      var onDeck = $$('.dcard', stack).map(function (el) { return HUES[+el.getAttribute('data-hue')]; });
      var hue = nextHue(onDeck, last);
      last = hue;
      seed += 1;
      var el = document.createElement('div');
      el.className = 'dcard';
      el.setAttribute('data-i', i);
      el.setAttribute('data-hue', hue.index);
      el.setAttribute('data-pos', pos);
      el.style.setProperty('--hue', hue.base);
      el.style.setProperty('--ink', hue.ink);
      el.innerHTML = cardHtml(c);
      stack.insertBefore(el, stack.firstChild);
      return el;
    }
    function label() {
      $$('.dcard', stack).forEach(function (el) {
        var top = el.getAttribute('data-pos') === '0';
        el.tabIndex = top ? 0 : -1;
        el.setAttribute('role', 'button');
        el.setAttribute('aria-hidden', String(!top));
        el.setAttribute('aria-label', fill(t('card_a11y'), CHALLENGES[+el.getAttribute('data-i')].t[L()]));
      });
    }
    function deal() {
      stack.innerHTML = '';
      // make() slips each new card in underneath, so the top one is made first.
      make(0); make(1); make(2);
      label();
    }
    function next(dir) {
      if (flying) return;
      var top = $('.dcard[data-pos="0"]', stack);
      if (!top) return;
      flying = true;
      var hadFocus = document.activeElement === top;
      dir = dir || 1;
      top.style.transition = 'transform .55s cubic-bezier(.3,.6,.3,1), opacity .45s ease';
      top.style.transform = 'translate(' + dir * 125 + '%, -6%) rotate(' + dir * 22 + 'deg)';
      top.style.opacity = '0';
      $$('.dcard', stack).forEach(function (el) {
        var p = +el.getAttribute('data-pos');
        if (p > 0) el.setAttribute('data-pos', p - 1);
      });
      var fresh = make(3);
      requestAnimationFrame(function () { requestAnimationFrame(function () { fresh.setAttribute('data-pos', 2); }); });
      setTimeout(function () {
        top.remove();
        flying = false;
        label();
        if (hadFocus) { var now = $('.dcard[data-pos="0"]', stack); if (now) now.focus({ preventScroll: true }); }
      }, still ? 0 : 480);
    }

    // Drag the top card aside, or tap it.
    var drag = null;
    stack.addEventListener('pointerdown', function (e) {
      var top = e.target.closest('.dcard[data-pos="0"]');
      if (!top || flying) return;
      drag = { el: top, x: e.clientX, dx: 0, id: e.pointerId };
      top.style.transition = 'none';
    });
    stack.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x;
      if (Math.abs(drag.dx) > 4 && !drag.captured) { drag.captured = true; try { drag.el.setPointerCapture(e.pointerId); } catch (x) {} }
      drag.el.style.transform = 'translateX(' + drag.dx + 'px) rotate(' + drag.dx / 18 + 'deg)';
    });
    function release(e) {
      if (!drag || e.pointerId !== drag.id) return;
      var d = drag; drag = null;
      if (Math.abs(d.dx) > 80) { next(d.dx > 0 ? 1 : -1); return; }
      d.el.style.transition = '';
      d.el.style.transform = '';
      if (Math.abs(d.dx) < 6 && e.type === 'pointerup') next(1);
    }
    stack.addEventListener('pointerup', release);
    stack.addEventListener('pointercancel', release);
    stack.addEventListener('keydown', function (e) {
      if (!e.target.classList.contains('dcard')) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); next(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); next(-1); }
    });

    function levelLine() {
      lineEl.textContent = level ? t({ EASY: 'lv_sweet_t', MEDIUM: 'lv_spicy_t', HARD: 'lv_deadly_t' }[level]) : t('lv_note');
      $$('button', levelsEl).forEach(function (b) {
        var on = b.getAttribute('data-level') === level;
        b.setAttribute('aria-checked', String(on));
      });
    }
    levelsEl.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      var lv = b.getAttribute('data-level');
      level = level === lv ? null : lv;
      levelLine();
      refill();
      stack.style.opacity = '0';
      setTimeout(function () { deal(); stack.style.opacity = ''; }, still ? 0 : 220);
    });
    stack.style.transition = 'opacity .22s ease';
    refill();
    onLanguage.push(function () {
      $$('.dcard', stack).forEach(function (el) { el.innerHTML = cardHtml(CHALLENGES[+el.getAttribute('data-i')]); });
      label();
      levelLine();
    });
    deal();
  })();

  // ---------------------------------------------------------------------------
  // The wall (GalleryScreen): prints hung in columns with every other one
  // dropped, so neighbours never line up — a wall, not a table. Each sways
  // on its nail when it's touched.
  // ---------------------------------------------------------------------------
  (function wall() {
    var host = $('#prints'), width = 0;
    var ROWS = 3;
    function print(p, n) {
      var hue = hueByName[p.hue];
      var text = p.text ? p.text[L()] : CHALLENGES[p.t].t[L()];
      var r = rng(n * 7919 + 13);
      var tilt = ((r() - 0.5) * 2.6).toFixed(2);
      return '<figure class="print" style="--hue:' + hue.base + ';--ink:' + hue.ink + ';--tilt:' + tilt + 'deg">' +
        '<i class="print__nail" aria-hidden="true"></i><div class="print__body">' +
        '<div class="print__pair"><div>' + scene(p.a[0], p.a[1], p.fx) + fxLayers(p.fx) + '</div><div>' + scene(p.b[0], p.b[1], p.fx) + fxLayers(p.fx) + '</div>' +
        SEAM + (p.fx ? '<span class="print__fx">' + esc(p.fx) + '</span>' : '') + (p.r ? '<span class="print__react">' + p.r + '</span>' : '') + '</div>' +
        '<figcaption><p class="print__text">' + esc(text) + '</p><p class="print__meta">' + esc(NAMES[p.who][L()]) + ' · ' + p.d[0] + ' ' + esc(t('months')[p.d[1] - 1]) + '</p></figcaption>' +
        '</div></figure>';
    }
    function render() {
      width = window.innerWidth;
      var phone = width <= 600;
      var cw = phone ? width * 0.43 : width <= 920 ? 230 : 252;
      var gap = phone ? 14 : width <= 920 ? 32 : 48;
      var cols = Math.ceil((width + gap) / (cw + gap));
      // An odd count hangs a print dead centre; on a phone, an even one hangs two side by side.
      if (cols % 2 !== (phone ? 0 : 1)) cols += 1;
      var html = '';
      for (var c = 0; c < cols; c++) {
        html += '<div class="wall__col">';
        for (var r = 0; r < ROWS; r++) {
          var n = (c * ROWS + r + Math.floor(cols / 2) * 4) % PRINTS.length;
          html += print(PRINTS[n], c * ROWS + r);
        }
        html += '</div>';
      }
      host.innerHTML = html;
    }
    function sway(body) {
      if (still || body.getAnimations && body.getAnimations().length) return;
      var tilt = parseFloat(body.parentNode.style.getPropertyValue('--tilt')) || 0;
      var dir = Math.random() < 0.5 ? -1 : 1;
      body.animate([0, 3.4, -2.6, 1.6, -0.9, 0.4, 0].map(function (a) { return { transform: 'rotate(' + (tilt + dir * a) + 'deg)' }; }),
        { duration: 2200, easing: 'cubic-bezier(.3,.1,.3,1)' });
    }
    host.addEventListener('pointerover', function (e) {
      var body = e.target.closest('.print__body');
      if (body && e.pointerType === 'mouse' && !body.contains(e.relatedTarget)) sway(body);
    });
    host.addEventListener('click', function (e) {
      var body = e.target.closest('.print__body');
      if (body) sway(body);
    });
    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { if (window.innerWidth !== width) render(); }, 200);
    });
    onLanguage.push(render);
  })();

  // ---------------------------------------------------------------------------
  // The end (PoolArt): your half in your colour, an empty outline beside it,
  // and the halves of everyone who could fill it drifting round. A pick lifts
  // one, swoops it over and turns it into place; the mark is whole for a
  // moment, a ring goes out in their colour, and it floats home again.
  // ---------------------------------------------------------------------------
  (function pool() {
    var frame = $('#pool'), othersEl = $('#poolOthers'), markEl = $('#poolMark'), ring = $('.pool__ring', markEl);
    var empty = $('.pool__empty', markEl);
    // x and y as shares of the frame, size, quarter turns, colour.
    var OTHERS = [
      [0.12, 0.3, 1.15, 1, '#E8A33A'], [0.27, 0.78, 0.85, 3, '#22A273'], [0.33, 0.13, 0.7, 2, '#14787B'],
      [0.69, 0.17, 0.8, 0, '#5A48C8'], [0.8, 0.72, 1.1, 2, '#9147A8'], [0.9, 0.3, 0.85, 1, '#B23A6F'],
      [0.06, 0.74, 0.7, 0, '#4A68E8'], [0.63, 0.86, 0.65, 3, '#F2B8A6']
    ];
    othersEl.innerHTML = OTHERS.map(function (o, i) {
      return '<div class="pool__other" data-c="' + o[4] + '" data-q="' + o[3] + '" style="left:' + o[0] * 100 + '%;top:' + o[1] * 100 + '%;--k:' + o[2] + ';--q:' + o[3] * 90 + 'deg;--c:' + o[4] +
        '"><div class="pool__bob" style="--d:' + (4 + (i % 3) * 1.3) + 's;--dl:' + (-i * 0.9) + 's"><svg viewBox="0 0 50 100" aria-hidden="true"><path d="M0 0A50 50 0 0 1 0 100Z"/></svg></div></div>';
    }).join('');
    var others = $$('.pool__other', othersEl);
    var order = [0, 4, 2, 5, 1, 3, 7, 6], k = 0, busy = false, auto = null;

    function pick() {
      if (busy) return;
      busy = true;
      var el = others[order[k % order.length]]; k++;
      var colour = el.getAttribute('data-c');
      ring.style.setProperty('--ring', colour);
      if (still || !el.animate) {
        empty.style.fill = colour; empty.style.strokeOpacity = '0';
        frame.classList.add('is-full');
        setTimeout(function () { empty.style.fill = ''; empty.style.strokeOpacity = ''; frame.classList.remove('is-full'); busy = false; }, 1800);
        return;
      }
      var a = el.getBoundingClientRect(), m = markEl.getBoundingClientRect();
      var dx = (m.left + m.width * 0.7475) - (a.left + a.width / 2);
      var dy = (m.top + m.height * 0.55) - (a.top + a.height / 2);
      var s = (m.width * 0.405) / a.width;
      var q = +el.getAttribute('data-q') * 90;
      var turn = 360 - q;
      el.classList.add('is-picked');
      var flight = el.animate([
        { transform: 'translate(0,0) rotate(0deg) scale(1)' },
        { transform: 'translate(0,-18px) rotate(' + (-12) + 'deg) scale(1.18)', offset: 0.2 },
        { transform: 'translate(' + dx * 0.5 + 'px,' + (dy * 0.5 - Math.max(60, Math.abs(dx) * 0.22)) + 'px) rotate(' + turn * 0.6 + 'deg) scale(' + (1 + s) / 2 + ')', offset: 0.62 },
        { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + turn + 'deg) scale(' + s + ')' }
      ], { duration: 1250, easing: 'cubic-bezier(.45,0,.25,1)', fill: 'forwards' });
      setTimeout(function () { frame.classList.add('is-full'); }, 1050);
      flight.onfinish = function () {
        markEl.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.07)' }, { transform: 'scale(1)' }], { duration: 520, easing: 'cubic-bezier(.3,.7,.3,1)' });
        ring.animate([{ transform: 'scale(.95)', opacity: 0.9 }, { transform: 'scale(1.9)', opacity: 0 }], { duration: 1000, easing: 'cubic-bezier(.2,.7,.3,1)' });
        var cx = m.left + m.width / 2, cy = m.top + m.height / 2;
        others.forEach(function (o) {
          if (o === el) return;
          var r = o.getBoundingClientRect();
          var ox = r.left + r.width / 2 - cx, oy = r.top + r.height / 2 - cy, len = Math.sqrt(ox * ox + oy * oy) || 1;
          o.animate([{ transform: 'translate(0,0)' }, { transform: 'translate(' + ox / len * 16 + 'px,' + oy / len * 16 + 'px)' }, { transform: 'translate(0,0)' }],
            { duration: 900, delay: Math.min(400, len * 0.5), easing: 'cubic-bezier(.3,.7,.3,1)' });
        });
        setTimeout(function () {
          frame.classList.remove('is-full');
          flight.reverse();
          flight.onfinish = function () { flight.cancel(); el.classList.remove('is-picked'); busy = false; };
        }, 1700);
      };
    }
    function loop() { clearInterval(auto); auto = setInterval(pick, 5200); }
    whileVisible(frame, function () { clearTimeout(auto); auto = setTimeout(function () { pick(); loop(); }, 900); }, function () { clearTimeout(auto); clearInterval(auto); });
    frame.addEventListener('click', function () { pick(); loop(); });
    frame.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); loop(); } });
  })();

  // ---------------------------------------------------------------------------
  // Things settle into place as they arrive.
  // ---------------------------------------------------------------------------
  (function reveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window) || still) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  })();

  applyStrings();
  root.classList.remove('i18n-pending');
  window.momentReady = true;
})();
