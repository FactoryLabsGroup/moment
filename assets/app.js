(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Store links. Paste each one in once Moment is live there, and its
  // "Coming soon" badge becomes a download link everywhere on the page.
  // ---------------------------------------------------------------------------
  var STORE = {
    appStore: '',   // e.g. 'https://apps.apple.com/app/id0000000000'
    googlePlay: ''  // e.g. 'https://play.google.com/store/apps/details?id=app.imoment'
  };

  var root = document.documentElement;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia('(max-width: 920px)');
  var SCENES = window.MOMENT_SCENES;

  // ---------------------------------------------------------------------------
  // Copy. English is the source; Georgian is written alongside it: polite
  // plural, no letter case, „…“ quotes. Where the app already has a Georgian
  // line (the tour, the username screen, Connections), it is used word for word.
  // `*stars*` mark painted words.
  // ---------------------------------------------------------------------------
  var STRINGS = {
    en: {
      page_title: 'Moment — Two halves. One moment.',
      skip: 'Skip to content',
      nav_how: 'How it works', nav_challenges: 'Challenges', nav_filters: 'Filters', nav_privacy: 'Privacy', nav_get: 'Get Moment',
      hero_kicker: 'For iPhone and Android',
      hero_random: 'Random', hero_w1: 'friend.', hero_w2: 'challenge.', hero_w3: 'moment.',
      hero_title_a11y: 'Random friend. Random challenge. Random moment.',
      hero_lede: 'Moment pairs you with a friend at a random moment and gives you both the same challenge and the same short clock. You each shoot your half — and nobody sees a thing until both are in.',
      hero_note: 'Just a username. No email, no password.',
      store_apple_small: 'Download on the', store_google_small: 'Get it on', store_soon: 'Coming soon to', store_soon_label: '%s — coming soon',
      mosaic_hint: 'Tap the mosaic', mosaic_a11y: 'Shuffle the mosaic',
      push_time: 'now', push_title: '5 minutes. Go.', push_body: 'Duo with someone',
      ticker_a11y: 'Challenges from the deck',
      how_kicker: 'How it works', how_title: 'One duo, <em>three beats.</em>',
      step_1: 'Dealt', step_2: 'Shoot', step_3: 'Unlock', steps_a11y: 'Steps',
      s1_title: 'A friend and a challenge, <em>at a random moment.</em>',
      s1_text: "Sometime today, Moment picks a friend from your pool and a challenge neither of you has had lately, and tells you both at once. You won't know which friend it is — you both get the same challenge, and the same clock.",
      s2_title: 'Shoot <em>your half.</em> They shoot <em>theirs.</em>',
      s2_text: "Open the camera before the clock runs out and retake as often as you like. Nobody sees a thing — not even who you're paired with — until both halves are in.",
      s3_title: 'Two <em>halves.</em> One <em>moment.</em>',
      s3_text: 'The moment the second half lands, the duo unlocks for both of you: two photos clicked into one — a memory that belongs to just the two of you. Now you see who it was.',
      how_miss: "And if one of you doesn't make it in time? Both halves are deleted, and your partner stays anonymous — for good.",
      tour_dealt: ['*Random* friend.', '*Random* challenge.', '*Random* moment.'],
      tour_dealt_msg: "You won't know which friend it is. You both get the same challenge.",
      tour_shoot: 'Shoot *your half.*\nThey shoot *theirs.*',
      tour_shoot_msg: "Nobody sees a thing — not even who you're paired with — until both halves are in.",
      tour_unlock: 'Two *halves.*\nOne *moment.*',
      tour_unlock_msg: 'They click into one photo — a memory that belongs to just the two of you.',
      tour_next: 'Next', tour_start: 'Get started',
      tour_dare: 'Something red.', tour_dare_label: 'Challenge', tour_you: 'You', tour_partner: 'Nika',
      tour_unlocked: 'Unlocked', tour_names: 'You & Nika', tour_push_sub: 'Duo with someone',
      rule_kicker: 'The one rule',
      rule_title: 'Nobody sees a thing <em>until both halves are in.</em>',
      rule_lede: "That's the whole product. Everything else in Moment is there to keep that promise.",
      card_duo_with: 'Duo with', card_someone: 'Someone', card_example: 'Example', card_shoot: 'Shoot your half',
      card_how: 'How to shoot it', card_framing: 'Framing', card_tip: 'Tip', card_back: 'Back to the card', card_you: 'Y',
      card_a11y: '%s — tap to see how to shoot it',
      r1_title: 'Anonymous until the unlock',
      r1_text: "Your partner shows as ? ? ? ? ? — no name, no photo, not even an initial. Their half isn't even sent to your phone until the duo unlocks.",
      r2_title: 'Missed means gone',
      r2_text: "If the clock runs out first, both halves are deleted from our server — not hidden, deleted. Whoever didn't shoot stays a mystery for good.",
      r3_title: 'Only people you said yes to',
      r3_text: 'Every duo comes from your own pool: friends who asked and were accepted, both ways. Nobody browses you, nobody follows you.',
      r4_title: "With one friend, it's them — by name",
      r4_text: "Anonymity needs someone to hide among. With a single friend, every duo is with them and the card says so. From two friends on, it's a surprise.",
      ch_kicker: 'The challenges',
      ch_title: 'Say <em>yes</em> to the <em>weird</em> challenge.',
      ch_lede: "Faces, streets, food, pets, light, chaos. Every challenge can be shot wherever you happen to be, and it's worth seeing twice: once as your half, once as theirs.",
      lv_sweet: 'Sweet', lv_spicy: 'Spicy', lv_deadly: 'Deadly',
      lv_sweet_t: "Arm's reach — a face, something on your desk.",
      lv_spicy_t: "You'll have to move, or set something up.",
      lv_deadly_t: 'Needs another person, nerve, or timing.',
      lv_note: "Levels open as you finish duos. Choose how far you'll go on your profile.",
      deal_next: 'Deal another', deal_hint: 'Tap a card to see how to shoot it',
      st_challenges: 'challenges', st_categories: 'categories', st_levels: 'levels to earn', st_filters: 'filters',
      fl_kicker: 'Filters',
      fl_title: 'Some challenges come with <em>a look.</em>',
      fl_lede: "It's the challenge's, not a choice: both halves are shot through the same one, so the pair matches. You see it live in the camera, and it's baked into the photo on your phone.",
      fl_from: 'Handed out by', fl_none: 'No filter', fl_none_line: 'Most challenges come as they are.', fl_none_from: 'most of the deck',
      du_kicker: 'Your duos',
      du_title: 'Every duo is a tiny <em>time capsule.</em>',
      du_lede: "Finished duos hang in both your galleries, stitched side by side. Look back and you'll find a year of small, odd, perfect moments — each one with a different friend.",
      du_p1: "One reaction each — 🔥 😂 💀 👏 — and that's all",
      du_p2: 'Save the stitched pair to your photos, or share it',
      du_p3: 'Either of you can delete a duo, for both of you',
      pa_kicker: 'Pacing',
      pa_title: 'It fits around <em>your day.</em>',
      pa_lede: 'A duo comes every hour or two, at a random moment — never a flood. Start with four a day and choose anything from one to ten. Quiet hours keep your nights yours.',
      pa_per_day: 'Duos a day', pa_fewer: 'Fewer', pa_more: 'More', pa_shuffle: 'Another day', pa_quiet: 'Quiet hours',
      pa_hours: 'hours', pa_hours_short: 'h',
      pa_f1: 'between duos, at random',
      pa_f2: 'duos a day — four to start, you choose',
      pa_f3: 'quiet hours by default, or your own range',
      pa_f4: "only friends who've opened Moment lately — a duo needs two",
      no_kicker: 'What Moment is not',
      no_1: 'No feed.', no_2: 'No likes.', no_3: 'No followers.', no_4: 'No streaks.', no_5: 'No ads.',
      no_end: 'Just two people and <em>one photo.</em>',
      no_sub: 'No browsing, no discovery, no scores. A friend exists here only through the duos you two finished.',
      pv_kicker: 'Your account',
      pv_title: 'Just a username. <em>No password.</em>',
      pv1_t: 'No email, no password',
      pv1_x: "Pick a username — it's how friends find you. Connect Apple or Google, and a new phone signs straight back in.",
      pv2_t: 'Photos under lock',
      pv2_x: 'Each photo is encrypted on our server under its own key, stripped of location and camera data, and only ever sent to the two of you, through links that expire.',
      pv3_t: 'No ads, no trackers',
      pv3_x: 'No analytics, no ad SDKs, no third-party storage. A push carries one short line and nothing else.',
      pv4_t: 'Leave whenever you like',
      pv4_x: 'Delete a duo for both of you, or your whole account, right from the app — the photos go with it.',
      pv_link: 'Read the privacy policy',
      fq_kicker: 'Questions', fq_title: 'Good to <em>know.</em>', fq_more: 'Something else?', fq_support: 'Visit support',
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
      fi_title: 'Somewhere, a friend is about to <em>smile.</em>',
      fi_text_soon: 'Moment is coming to iPhone and Android.',
      fi_text_live: 'Moment is on the App Store and Google Play.',
      footer_privacy: 'Privacy policy', footer_support: 'Support', footer_copy: '© 2026 Factory Labs',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      deck_lines: [
        'Two *halves.*\nOne *moment.*',
        'Laugh first.\n*Explain later.*',
        'Some memories only\ncome in *pairs.*',
        'Half the fun is\n*not knowing.*',
        'Say *yes* to\nthe *weird* challenge.',
        'Two cameras.\nOne *inside joke.*',
        'Good *friends.*\nBetter *stories.*',
        'Every duo is a\ntiny *time capsule.*',
        "It's always more fun\n*with two.*"
      ]
    },
    ka: {
      page_title: 'Moment — ორი ნახევარი. ერთი მომენტი.',
      skip: 'შინაარსზე გადასვლა',
      nav_how: 'როგორ მუშაობს', nav_challenges: 'გამოწვევები', nav_filters: 'ფილტრები', nav_privacy: 'კონფიდენციალურობა', nav_get: 'ჩამოტვირთვა',
      hero_kicker: 'iPhone-სა და Android-ზე',
      hero_random: 'შემთხვევითი', hero_w1: 'მეგობარი.', hero_w2: 'გამოწვევა.', hero_w3: 'მომენტი.',
      hero_title_a11y: 'შემთხვევითი მეგობარი. შემთხვევითი გამოწვევა. შემთხვევითი მომენტი.',
      hero_lede: 'Moment შემთხვევით მომენტში გაწყვილებთ მეგობართან და ორივეს ერთსა და იმავე გამოწვევას გაძლევთ — ერთი და იმავე მოკლე დროით. თქვენ თქვენს ნახევარს გადაიღებთ, მეგობარი — თავისას, და სანამ ორივე არ შემოვა, ვერავინ ვერაფერს ხედავს.',
      hero_note: 'მხოლოდ მომხმარებლის სახელი — არც ელფოსტა, არც პაროლი.',
      store_apple_small: 'ჩამოტვირთეთ', store_google_small: 'ჩამოტვირთეთ', store_soon: 'მალე', store_soon_label: '%s — მალე',
      mosaic_hint: 'შეეხეთ მოზაიკას', mosaic_a11y: 'მოზაიკის არევა',
      push_time: 'ახლა', push_title: '5 წუთი. დროა.', push_body: 'ვიღაცასთან ერთად',
      ticker_a11y: 'გამოწვევები დასტიდან',
      how_kicker: 'როგორ მუშაობს', how_title: 'ერთი დუო, <em>სამი ნაბიჯი.</em>',
      step_1: 'შერჩევა', step_2: 'გადაღება', step_3: 'გახსნა', steps_a11y: 'ნაბიჯები',
      s1_title: 'მეგობარი და გამოწვევა — <em>შემთხვევით მომენტში.</em>',
      s1_text: 'დღის რომელიღაც მომენტში Moment თქვენი წრიდან ირჩევს მეგობარს და ისეთ გამოწვევას, რომელიც ბოლო დროს არცერთს არ შეგხვედრიათ, და ორივეს ერთდროულად გატყობინებთ. არ იცით, რომელი მეგობარია — ორივე ერთსა და იმავე გამოწვევას და ერთსა და იმავე დროს იღებთ.',
      s2_title: '<em>თქვენი</em> ნახევარი. <em>მისი</em> ნახევარი.',
      s2_text: 'გახსენით კამერა, სანამ დრო ამოიწურება, და გადაიღეთ იმდენჯერ, რამდენჯერაც გსურთ. ვერავინ ვერაფერს ხედავს — ვერც იმას, ვისთან ერთად ხართ — სანამ ორივე ნახევარი არ შემოვა.',
      s3_title: 'ორი <em>ნახევარი.</em> ერთი <em>მომენტი.</em>',
      s3_text: 'როგორც კი მეორე ნახევარი შემოვა, დუო ორივესთვის იხსნება: ორი ფოტო ერთად ერთიანდება — მოგონებად, რომელიც მხოლოდ თქვენ ორს გეკუთვნით. ახლა უკვე ხედავთ, ვინ იყო.',
      how_miss: 'და თუ რომელიმე ვერ მოასწრებს? ორივე ნახევარი წაიშლება, მეგობარი კი სამუდამოდ ანონიმური დარჩება.',
      tour_dealt: ['*შემთხვევითი* მეგობარი.', '*შემთხვევითი* გამოწვევა.', '*შემთხვევითი* მომენტი.'],
      tour_dealt_msg: 'არ იცით, რომელი მეგობარია. ორივე ერთსა და იმავე გამოწვევას იღებთ.',
      tour_shoot: '*თქვენი* ნახევარი.\n*მისი* ნახევარი.',
      tour_shoot_msg: 'ვერავინ ვერაფერს ხედავს — ვერც იმას, ვისთან ერთად ხართ — სანამ ორივე ნახევარი არ შემოვა.',
      tour_unlock: 'ორი *ნახევარი.*\nერთი *მომენტი.*',
      tour_unlock_msg: 'ნახევრები ერთ ფოტოდ ერთიანდება — მოგონებად, რომელიც მხოლოდ თქვენ ორს გეკუთვნით.',
      tour_next: 'შემდეგი', tour_start: 'დაწყება',
      tour_dare: 'რაღაც წითელი.', tour_dare_label: 'გამოწვევა', tour_you: 'თქვენ', tour_partner: 'ნიკა',
      tour_unlocked: 'გაიხსნა', tour_names: 'თქვენ და ნიკა', tour_push_sub: 'ვიღაცასთან ერთად',
      rule_kicker: 'ერთადერთი წესი',
      rule_title: 'ვერავინ ვერაფერს ხედავს, <em>სანამ ორივე ნახევარი არ შემოვა.</em>',
      rule_lede: 'ეს არის მთელი აპი. Moment-ში ყველაფერი დანარჩენი ამ დაპირების შესანარჩუნებლად არსებობს.',
      card_duo_with: 'დუო', card_someone: 'ვიღაცასთან', card_example: 'მაგალითი', card_shoot: 'გადაიღეთ თქვენი ნახევარი',
      card_how: 'როგორ გადავიღოთ', card_framing: 'კადრი', card_tip: 'რჩევა', card_back: 'ბარათზე დაბრუნება', card_you: 'თ',
      card_a11y: '%s — შეეხეთ და ნახეთ, როგორ გადაიღოთ',
      r1_title: 'ანონიმური გახსნამდე',
      r1_text: 'მეგობარი ასე ჩანს: ? ? ? ? ? — არც სახელი, არც ფოტო, არც ინიციალი. მისი ნახევარი თქვენს ტელეფონზე არც კი იგზავნება, სანამ დუო არ გაიხსნება.',
      r2_title: 'გაცდენილი — წაშლილია',
      r2_text: 'თუ დრო ადრე ამოიწურა, ორივე ნახევარი ჩვენი სერვერიდან იშლება — არა იმალება, იშლება. ვინც ვერ გადაიღო, სამუდამოდ საიდუმლოდ რჩება.',
      r3_title: 'მხოლოდ ისინი, ვისაც დათანხმდით',
      r3_text: 'ყოველი დუო თქვენი წრიდან მოდის: ადამიანებიდან, რომლებმაც მოთხოვნა გამოგიგზავნეს და დაეთანხმეთ, ან პირიქით. ვერავინ გათვალიერებთ და ვერავინ გამოგიწერთ.',
      r4_title: 'ერთ მეგობართან — სახელით',
      r4_text: 'ანონიმურობისთვის რამდენიმე ადამიანი მაინც უნდა იყოს. თუ ერთი მეგობარი გყავთ, ყველა დუო მასთანაა და ბარათზე მისი სახელიც წერია. ორი მეგობრიდან უკვე სიურპრიზია.',
      ch_kicker: 'გამოწვევები',
      ch_title: 'უთხარით <em>დიახ</em> <em>უცნაურ</em> გამოწვევას.',
      ch_lede: 'სახეები, ქუჩები, საჭმელი, ცხოველები, სინათლე, ქაოსი. ყოველი გამოწვევის გადაღება იქვე შეგიძლიათ, სადაც ხართ, და მისი ორჯერ ნახვა ღირს: ერთხელ — თქვენი ნახევრით, ერთხელ — მეგობრისით.',
      lv_sweet: 'ტკბილი', lv_spicy: 'ცხარე', lv_deadly: 'სასიკვდილო',
      lv_sweet_t: 'ხელის გაწვდენაზე — სახე, რაღაც თქვენს მაგიდაზე.',
      lv_spicy_t: 'მოგიწევთ ადგილიდან დაძვრა ან რაღაცის მომზადება.',
      lv_deadly_t: 'სჭირდება სხვა ადამიანი, გამბედაობა ან ზუსტი დრო.',
      lv_note: 'დონეები დუოების დასრულებასთან ერთად იხსნება. პროფილში აირჩიეთ, რამდენად შორს წახვალთ.',
      deal_next: 'სხვა გამოწვევა', deal_hint: 'შეეხეთ ბარათს და ნახეთ, როგორ გადაიღოთ',
      st_challenges: 'გამოწვევა', st_categories: 'კატეგორია', st_levels: 'გასახსნელი დონე', st_filters: 'ფილტრი',
      fl_kicker: 'ფილტრები',
      fl_title: 'ზოგ გამოწვევას <em>თავისი იერი</em> აქვს.',
      fl_lede: 'ფილტრი გამოწვევას ეკუთვნის და არა თქვენს არჩევანს: ორივე ნახევარი ერთი და იმავე ფილტრით იღება, რომ წყვილი ერთმანეთს ერგებოდეს. მას კამერაშივე ხედავთ და ფოტოს თქვენსავე ტელეფონზე ედება.',
      fl_from: 'გამოწვევა:', fl_none: 'ფილტრის გარეშე', fl_none_line: 'გამოწვევების უმეტესობა ფილტრის გარეშეა.', fl_none_from: 'დასტის უმეტესობა',
      du_kicker: 'თქვენი დუოები',
      du_title: 'ყოველი დუო — პატარა <em>დროის კაფსულაა.</em>',
      du_lede: 'დასრულებული დუოები ორივეს გალერეაში ჩნდება, გვერდიგვერდ შეკრული. გადახედავთ და დაინახავთ მთელ წელს, სავსეს პატარა, უცნაური, სრულყოფილი მომენტებით — თითოეული სხვადასხვა მეგობართან.',
      du_p1: 'თითო რეაქცია — 🔥 😂 💀 👏 — და მეტი არაფერი',
      du_p2: 'შეინახეთ შეკრული წყვილი ფოტოებში ან გააზიარეთ',
      du_p3: 'დუოს წაშლა ორივეს შეუძლია — ორივესთვის',
      pa_kicker: 'რიტმი',
      pa_title: 'ის <em>თქვენს დღეს</em> ერგება.',
      pa_lede: 'დუო ყოველ ერთ-ორ საათში, შემთხვევით მომენტში მოდის — არასდროს ერთბაშად. დაიწყეთ დღეში ოთხით და აირჩიეთ ნებისმიერი რაოდენობა ერთიდან ათამდე. წყნარი საათები ღამეს თქვენვე გიტოვებთ.',
      pa_per_day: 'დუო დღეში', pa_fewer: 'ნაკლები', pa_more: 'მეტი', pa_shuffle: 'სხვა დღე', pa_quiet: 'წყნარი საათები',
      pa_hours: 'საათი', pa_hours_short: 'სთ',
      pa_f1: 'დუოებს შორის, შემთხვევით',
      pa_f2: 'დუო დღეში — თავიდან ოთხი, მერე თქვენ ირჩევთ',
      pa_f3: 'წყნარი საათები ნაგულისხმევად, ან თქვენი შუალედი',
      pa_f4: 'მხოლოდ მეგობრები, ვინც ახლახან შემოვიდა Moment-ში — დუოს ორი სჭირდება',
      no_kicker: 'რა არ არის Moment',
      no_1: 'არანაირი ლენტა.', no_2: 'არანაირი ლაიქი.', no_3: 'არანაირი გამომწერი.', no_4: 'არანაირი სერია.', no_5: 'არანაირი რეკლამა.',
      no_end: 'მხოლოდ ორი ადამიანი და <em>ერთი ფოტო.</em>',
      no_sub: 'არც დათვალიერება, არც ქულები. მეგობარი აქ მხოლოდ იმ დუოებით არსებობს, რომლებიც ერთად დაასრულეთ.',
      pv_kicker: 'თქვენი ანგარიში',
      pv_title: 'მხოლოდ სახელი. <em>პაროლის გარეშე.</em>',
      pv1_t: 'არც ელფოსტა, არც პაროლი',
      pv1_x: 'აირჩიეთ მომხმარებლის სახელი — ამით გიპოვიან მეგობრები. დააკავშირეთ Apple ან Google და ახალ ტელეფონზე ყველაფერს დაიბრუნებთ.',
      pv2_t: 'ფოტოები დაცულია',
      pv2_x: 'ყოველი ფოტო ჩვენს სერვერზე საკუთარი გასაღებით არის დაშიფრული, მდებარეობისა და კამერის მონაცემები მოცილებულია და მხოლოდ თქვენ ორს მიეწოდება ბმულებით, რომლებსაც ვადა გასდის.',
      pv3_t: 'არც რეკლამა, არც თვალთვალი',
      pv3_x: 'არც ანალიტიკა, არც სარეკლამო SDK-ები, არც მესამე მხარის საცავი. შეტყობინება მხოლოდ ერთ მოკლე ფრაზას შეიცავს.',
      pv4_t: 'წასვლა ნებისმიერ დროს',
      pv4_x: 'წაშალეთ დუო ორივესთვის ან მთელი ანგარიში პირდაპირ აპიდან — ფოტოებიც მასთან ერთად წაიშლება.',
      pv_link: 'კონფიდენციალურობის პოლიტიკა',
      fq_kicker: 'კითხვები', fq_title: 'კარგია, <em>რომ იცოდეთ.</em>', fq_more: 'სხვა კითხვა გაქვთ?', fq_support: 'მხარდაჭერა',
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
      fi_title: 'სადღაც მეგობარს ახლა <em>გაეღიმება.</em>',
      fi_text_soon: 'Moment მალე გამოვა iPhone-სა და Android-ზე.',
      fi_text_live: 'Moment უკვე App Store-სა და Google Play-ზეა.',
      footer_privacy: 'კონფიდენციალურობის პოლიტიკა', footer_support: 'მხარდაჭერა', footer_copy: '© 2026 Factory Labs',
      months: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
      deck_lines: [
        'ორი *ნახევარი.*\nერთი *მომენტი.*',
        'ჯერ *იცინეთ.*\nახსნა *მერე.*',
        'ზოგი მოგონება\nმხოლოდ *წყვილად* მოდის.',
        'მთელი ხიბლი\n*არცოდნაშია.*',
        'უთხარით *დიახ*\n*უცნაურ* გამოწვევას.',
        'ორი კამერა.\nერთი *საერთო ხუმრობა.*',
        'კარგი *მეგობრები.*\nუკეთესი *ამბები.*',
        'ყოველი დუო —\nპატარა *დროის კაფსულა.*',
        'ორად ყოველთვის\n*უფრო სახალისოა.*'
      ]
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
  var L = function () { return lang === 'ka' ? 1 : 0; };
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
  // "*painted* words" → <em>, line breaks kept; each word wrapped so it can rise on its own.
  function painted(text, words) {
    return text.split('\n').map(function (line) {
      var out = [], parts = line.split(/(\*[^*]+\*)/);
      parts.forEach(function (part) {
        if (!part) return;
        var em = part.charAt(0) === '*';
        var body = em ? part.slice(1, -1) : part;
        if (!words) { out.push(em ? '<em>' + esc(body) + '</em>' : esc(body)); return; }
        body.split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) { out.push(' '); return; }
          out.push('<span class="w">' + (em ? '<em>' + esc(w) + '</em>' : esc(w)) + '</span>');
        });
      });
      return out.join('');
    }).join('<br>');
  }
  function staggerWords(el, base, step) {
    $$('.w', el).forEach(function (w, i) { w.style.animationDelay = (base + i * step) + 'ms'; });
  }
  function scene(name, v, fx) {
    var html = SCENES[name](v || 0);
    var open = html.indexOf('>') + 1, close = html.lastIndexOf('</svg>');
    return html.slice(0, open) + '<g class="fx"' + (fx ? ' filter="url(#' + filterId(fx) + ')"' : '') + '>' + html.slice(open, close) + '</g></svg>';
  }
  var MARK_L = 'M45.5 4.5A40.5 40.5 0 0 0 45.5 85.5Z';
  var MARK_R = 'M54.5 14.5A40.5 40.5 0 0 1 54.5 95.5Z';
  function markSvg() { return '<svg class="mark" viewBox="0 0 100 100" aria-hidden="true"><path class="mark__l" d="' + MARK_L + '"/><path class="mark__r" d="' + MARK_R + '"/></svg>'; }

  // ---------------------------------------------------------------------------
  // Language
  // ---------------------------------------------------------------------------
  var onLanguage = [];
  function applyStrings() {
    document.title = t('page_title');
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    onLanguage.forEach(function (fn) { fn(); });
  }
  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    root.lang = lang;
    try { localStorage.setItem('moment.lang', lang); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has('lang')) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }
    } catch (e) {}
    applyStrings();
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLanguage(b.dataset.lang); }); });

  // ---------------------------------------------------------------------------
  // Store badges
  // ---------------------------------------------------------------------------
  var APPLE_GLYPH = '<svg class="store__glyph" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27z"/></svg>';
  var PLAY_GLYPH = '<svg class="store__glyph" viewBox="0 0 24 24" aria-hidden="true"><path fill="#00D7FE" d="M3.6 2.3c-.3.3-.4.8-.4 1.3v16.8c0 .5.1 1 .4 1.3l.1.1 9.4-9.4v-.2L3.7 2.2z"/><path fill="#FFCE00" d="m16.2 15.5-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1z"/><path fill="#FF3A44" d="M16.3 15.4 13.1 12.3l-9.5 9.4c.4.4.9.4 1.6.1l11.1-6.4"/><path fill="#00F076" d="M16.3 9.2 5.2 2.8c-.7-.4-1.2-.3-1.6.1l9.5 9.4z"/></svg>';
  function storeBadge(url, glyph, small, name) {
    if (url) {
      return '<a class="store" href="' + esc(url) + '" target="_blank" rel="noopener">' + glyph +
        '<span class="store__text"><small>' + esc(small) + '</small><strong>' + name + '</strong></span></a>';
    }
    return '<span class="store is-soon" role="img" aria-label="' + esc(fill(t('store_soon_label'), name)) + '">' + glyph +
      '<span class="store__text" aria-hidden="true"><small>' + esc(t('store_soon')) + '</small><strong>' + name + '</strong></span></span>';
  }
  function renderStores() {
    var html = storeBadge(STORE.appStore, APPLE_GLYPH, t('store_apple_small'), 'App Store') +
      storeBadge(STORE.googlePlay, PLAY_GLYPH, t('store_google_small'), 'Google Play');
    $$('[data-stores]').forEach(function (el) { el.innerHTML = html; });
    var live = STORE.appStore && STORE.googlePlay;
    var finale = $('#finaleText');
    finale.setAttribute('data-i18n', live ? 'fi_text_live' : 'fi_text_soon');
    finale.textContent = t(live ? 'fi_text_live' : 'fi_text_soon');
  }
  onLanguage.push(renderStores);

  // ---------------------------------------------------------------------------
  // Nav
  // ---------------------------------------------------------------------------
  var nav = $('#nav');
  function onScroll() { nav.classList.toggle('is-solid', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Run a callback while an element is on screen, and stop it when it leaves.
  function whileVisible(el, start, stop, margin) {
    if (!('IntersectionObserver' in window)) { start(); return; }
    var on = false;
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !on) { on = true; start(); }
        else if (!en.isIntersecting && on) { on = false; stop(); }
      });
    }, { rootMargin: margin || '0px' }).observe(el);
  }

  // ---------------------------------------------------------------------------
  // Hero: "Random" stays, the word after it takes turns (TourTurns).
  // ---------------------------------------------------------------------------
  (function heroTurns() {
    var slot = $('#heroSlot');
    var keys = ['hero_w1', 'hero_w2', 'hero_w3'];
    var at = 0, timer = null;
    function paint() { slot.innerHTML = '<span class="turns__word is-on">' + esc(t(keys[at])) + '</span>'; }
    function turn() {
      var old = $('.turns__word.is-on', slot);
      at = (at + 1) % keys.length;
      var word = document.createElement('span');
      word.className = 'turns__word';
      word.textContent = t(keys[at]);
      slot.appendChild(word);
      if (old) { old.classList.remove('is-on'); old.classList.add('is-off'); setTimeout(function () { old.remove(); }, 400); }
      requestAnimationFrame(function () { requestAnimationFrame(function () { word.classList.add('is-on'); }); });
    }
    function start() { stop(); timer = setTimeout(function loop() { turn(); timer = setTimeout(loop, 2200); }, 2600); }
    function stop() { clearTimeout(timer); }
    onLanguage.push(paint);
    whileVisible($('#heroTitle'), start, stop);
  })();

  // The floating clock beside the mosaic.
  (function heroClock() {
    var label = $('#heroClock'), arc = $('.clock-chip__arc');
    var left = 299, timer = null;
    function tick() {
      left = left <= 0 ? 300 : left - 1;
      label.textContent = clock(left);
      arc.style.strokeDashoffset = String(100 - (left / 300) * 100);
    }
    whileVisible(label, function () { timer = setInterval(tick, 1000); }, function () { clearInterval(timer); });
  })();

  // ---------------------------------------------------------------------------
  // The mosaic (HalvesMosaic): solid tiles, each with one figure cut from a
  // circle. Now and then a tile turns a quarter. A tap blows it apart and the
  // next deal swirls back in, while the line under it changes.
  // ---------------------------------------------------------------------------
  (function mosaic() {
    var el = $('#mosaic');
    var COLS = 5, ROWS = 5, ANCHOR = 12;
    var INKS = ['#E4633D', '#E8A33A', '#4A68E8', '#1B6E50', '#9147A8', '#F2B8A6', '#F4ECDD'];
    var IVORY = '#F4ECDD', CHARCOAL = '#1B1A19';
    var near = [ANCHOR - 1, ANCHOR + 1, ANCHOR - COLS, ANCHOR + COLS];
    var deal = 7, busy = false;
    var lineAt = 0, lineOrder = null;
    var clip = document.createElement('div');
    clip.className = 'mosaic__clip';
    el.appendChild(clip);

    function tiles(seed) {
      var r = rng(seed), list = [], last = null;
      for (var i = 0; i < COLS * ROWS; i++) {
        var bg = r() < 0.18 ? CHARCOAL : INKS[Math.floor(r() * INKS.length)];
        if (bg === last) bg = INKS[(i * 3 + 1) % INKS.length];
        if (near.indexOf(i) >= 0 && bg === IVORY) bg = INKS.filter(function (c) { return c !== IVORY && c !== last; })[0];
        last = bg;
        var ink = INKS[Math.floor(r() * INKS.length)];
        if (ink === bg) ink = INKS[(INKS.indexOf(ink) + 2) % INKS.length];
        var roll = r();
        list.push({
          bg: bg, ink: ink,
          fig: roll < 0.4 ? 'half' : roll < 0.75 ? 'quarter' : roll < 0.9 ? 'circle' : 'none',
          turns: Math.floor(r() * 4), period: 7 + r() * 11, phase: r() * 18
        });
      }
      return list;
    }
    function figure(tile) {
      var shape = tile.fig === 'half' ? '<path d="M50 0A50 50 0 0 0 50 100Z"/>'
        : tile.fig === 'quarter' ? '<path d="M0 0H100A100 100 0 0 1 0 100Z"/>'
        : tile.fig === 'circle' ? '<circle cx="50" cy="50" r="46"/>' : '';
      return '<svg viewBox="0 0 100 100" style="transform:rotate(' + (tile.turns * 90) + 'deg)" fill="' + tile.ink + '">' + shape + '</svg>';
    }
    var cells = [];
    function paint(list) {
      if (!cells.length) {
        for (var i = 0; i < COLS * ROWS; i++) {
          var c = document.createElement('div');
          c.className = 'tile-m' + (i === ANCHOR ? ' tile-m--mark' : '');
          var rad = '0';
          if (i === 0) rad = '34px 0 0 0';
          else if (i === COLS - 1) rad = '0 34px 0 0';
          else if (i === COLS * (ROWS - 1)) rad = '0 0 0 34px';
          else if (i === COLS * ROWS - 1) rad = '0 0 34px 0';
          c.style.borderRadius = rad;
          clip.appendChild(c);
          cells.push(c);
        }
      }
      list.forEach(function (tile, i) {
        var c = cells[i];
        tile.at = tile.turns;
        if (i === ANCHOR) { c.innerHTML = markSvg(); return; }
        c.style.background = tile.bg;
        c.innerHTML = figure(tile);
      });
    }
    var current = tiles(deal);
    paint(current);

    // Idle: one tile at a time catches a draught and turns a quarter.
    var idle = null;
    function startIdle() {
      stopIdle();
      var t0 = performance.now() / 1000;
      idle = setInterval(function () {
        if (busy || still) return;
        var now = performance.now() / 1000 - t0;
        current.forEach(function (tile, i) {
          if (i === ANCHOR || tile.fig === 'none' || tile.fig === 'circle') return;
          var due = Math.floor((now + tile.phase) / tile.period);
          if (tile.seen == null) { tile.seen = due; return; }
          if (due > tile.seen) {
            tile.seen = due;
            tile.at += 1;
            var svg = cells[i].firstElementChild;
            if (svg) svg.style.transform = 'rotate(' + (tile.at * 90) + 'deg)';
          }
        });
      }, 250);
    }
    function stopIdle() { clearInterval(idle); }
    whileVisible(el, startIdle, stopIdle);

    // The line under the mosaic.
    var lineEl = $('#deckLine');
    function lines() { return t('deck_lines'); }
    function showLine(animate) {
      var text = lines()[lineAt];
      lineEl.innerHTML = painted(text, true);
      if (animate) staggerWords(lineEl, 0, 70);
      else $$('.w', lineEl).forEach(function (w) { w.style.animation = 'none'; w.style.opacity = 1; w.style.transform = 'none'; });
    }
    function nextLine() {
      if (!lineOrder || !lineOrder.length) {
        lineOrder = shuffle(lines().map(function (_, i) { return i; }).filter(function (i) { return i !== lineAt; }));
      }
      lineAt = lineOrder.shift();
      lineEl.classList.add('is-leaving');
      setTimeout(function () { lineEl.classList.remove('is-leaving'); showLine(true); }, 260);
    }
    onLanguage.push(function () { showLine(false); });

    function blast(ox, oy) {
      if (busy) return;
      deal += 1;
      var next = tiles(deal);
      if (still) { current = next; paint(current); nextLine(); return; }
      busy = true;
      var box = el.getBoundingClientRect();
      var reach = Math.max(window.innerWidth, window.innerHeight) * 1.1;
      var side = box.width / COLS;
      var r = rng(deal * 31 + 7);
      el.classList.add('is-blasting', 'is-charge');
      var flights = cells.map(function (c, i) {
        var cx = (i % COLS + 0.5) * side, cy = (Math.floor(i / COLS) + 0.5) * side;
        var dx = cx - ox, dy = cy - oy, dist = Math.hypot(dx, dy) || 1;
        var angle = Math.atan2(dy, dx) + (r() * 2 - 1) * 0.32;
        return {
          dist: dist, angle: angle, pace: 0.85 + r() * 0.3,
          spinOut: (r() < 0.5 ? 1 : -1) * (140 + r() * 300), grow: 1.1 + r() * 0.45,
          swirl: 0.7 + r() * 0.5, spinIn: 90 + r() * 180,
          home: Math.hypot(cx - box.width / 2, cy - box.height / 2)
        };
      });
      var maxDist = Math.max.apply(null, flights.map(function (f) { return f.dist; }));
      var maxHome = Math.max.apply(null, flights.map(function (f) { return f.home; })) || 1;

      setTimeout(function () {
        el.classList.remove('is-charge');
        el.classList.add('is-apart');
        cells.forEach(function (c, i) {
          if (i === ANCHOR) return;
          var f = flights[i];
          var x = Math.cos(f.angle) * reach, y = Math.sin(f.angle) * reach;
          c.style.zIndex = 5;
          c.animate([
            { transform: 'none' },
            { transform: 'translate(' + x + 'px,' + y + 'px) rotate(' + f.spinOut + 'deg) scale(' + f.grow + ')' }
          ], { duration: 700 * f.pace, delay: (f.dist / maxDist) * 180, easing: 'cubic-bezier(.45,0,.8,.4)', fill: 'forwards' });
        });
      }, 160);

      setTimeout(nextLine, 760);

      setTimeout(function () {
        current = next;
        cells.forEach(function (c, i) {
          if (i === ANCHOR) return;
          var tile = current[i];
          tile.at = tile.turns;
          c.style.background = tile.bg;
          c.innerHTML = figure(tile);
          c.getAnimations().forEach(function (a) { a.cancel(); });
          var f = flights[i];
          var from = f.angle + f.swirl;
          var x = Math.cos(from) * reach, y = Math.sin(from) * reach;
          c.animate([
            { transform: 'translate(' + x + 'px,' + y + 'px) rotate(' + (-f.spinIn) + 'deg) scale(1.3)' },
            { transform: 'none' }
          ], { duration: 760, delay: (f.home / maxHome) * 240, easing: 'cubic-bezier(.16,.84,.3,1.04)', fill: 'backwards' });
        });
      }, 1250);

      setTimeout(function () {
        el.classList.remove('is-apart');
        el.animate([{ transform: 'scale(1)' }, { transform: 'scale(.985)' }, { transform: 'scale(1)' }], { duration: 300, easing: 'ease-out' });
      }, 1900);

      setTimeout(function () {
        cells.forEach(function (c) { c.style.zIndex = ''; c.getAnimations().forEach(function (a) { a.cancel(); }); });
        el.classList.remove('is-blasting');
        busy = false;
      }, 2300);
    }

    el.addEventListener('click', function (e) {
      var box = el.getBoundingClientRect();
      var x = e.clientX ? e.clientX - box.left : box.width / 2;
      var y = e.clientY ? e.clientY - box.top : box.height / 2;
      blast(x, y);
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); var b = el.getBoundingClientRect(); blast(b.width / 2, b.height / 2); }
    });
    showLine(true);
  })();

  // ---------------------------------------------------------------------------
  // The ticker of challenges
  // ---------------------------------------------------------------------------
  (function ticker() {
    var rows = $$('[data-ticker]');
    var dots = ['#E4633D', '#E8A33A', '#4A68E8', '#22A273', '#9147A8', '#F2B8A6', '#14787B', '#B23A6F'];
    function render() {
      var list = CHALLENGES.map(function (c) { return c.t[L()]; });
      rows.forEach(function (row, r) {
        var half = list.slice(r ? 10 : 0, r ? 20 : 10);
        if (r) half = half.concat(list.slice(0, 3));
        var items = half.map(function (text, i) {
          var c = dots[(i + r * 3) % dots.length];
          return '<span class="ticker__item"><i class="' + (i % 2 ? 'h' : '') + '" style="background:' + c + '"></i>' + esc(text) + '</span>';
        }).join('');
        row.innerHTML = items + items;
      });
    }
    onLanguage.push(render);
  })();

  // ---------------------------------------------------------------------------
  // How it works: the tour's picture, one duo in three beats (IntroTourView).
  // ---------------------------------------------------------------------------
  (function tour() {
    var screen = $('#tour'), stage = $('#stage');
    var titleEl = $('#tourTitle'), msgEl = $('#tourMsg'), btn = $('#tourNext');
    var steps = $$('#howSteps .step'), tabs = $$('.how__tabs button');
    var step = -1, timers = [], raf = 0, ticker = 0, turnTimer = 0, autoTimer = 0;
    var duoStart = 0, visible = false, touched = 0;
    var FRIENDS = ['#E8A33A', '#22A273', '#14787B', '#5A48C8', '#9147A8', '#B23A6F'];

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() {
      timers.forEach(clearTimeout); timers = [];
      cancelAnimationFrame(raf); clearInterval(ticker); clearTimeout(turnTimer); clearTimeout(autoTimer);
    }
    function secsLeft() { return 300 - (performance.now() - duoStart) / 1000; }

    function words(step) {
      titleEl.innerHTML = '';
      msgEl.style.opacity = 0;
      var title = step === 0 ? t('tour_dealt')[0] : step === 1 ? t('tour_shoot') : t('tour_unlock');
      titleEl.innerHTML = '<span>' + painted(title, true) + '</span>';
      staggerWords(titleEl, 140, 70);
      msgEl.textContent = t(step === 0 ? 'tour_dealt_msg' : step === 1 ? 'tour_shoot_msg' : 'tour_unlock_msg');
      setTimeout(function () { msgEl.style.transition = 'opacity .5s'; msgEl.style.opacity = 1; }, 300);
      btn.textContent = t(step === 2 ? 'tour_start' : 'tour_next');
      if (step === 0 && !still) {
        var at = 0;
        var phrases = t('tour_dealt');
        var loop = function () {
          at = (at + 1) % phrases.length;
          titleEl.innerHTML = '<span>' + painted(phrases[at], true) + '</span>';
          staggerWords(titleEl, 0, 60);
          turnTimer = setTimeout(loop, 2200);
        };
        turnTimer = setTimeout(loop, 2600);
      }
    }

    function pushEl() {
      var p = document.createElement('div');
      p.className = 'st st-push';
      p.innerHTML = markSvg() + '<p><b>' + esc(t('push_title')) + '<span>' + esc(t('push_time')) + '</span></b>' + esc(t('tour_push_sub')) + '</p>';
      return p;
    }

    // Page 1 · Dealt: the draw.
    function dealt() {
      var html = '<div class="st st-orbit"></div>' +
        '<div class="st st-ring"><svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="48" fill="none" stroke-width="2.6"/>' +
        '<circle class="arc" cx="50" cy="50" r="48" fill="none" stroke-width="2.6" stroke-linecap="round" pathLength="100" style="stroke-dashoffset:100"/></svg></div>' +
        '<div class="st st-mark"><svg viewBox="0 0 100 100"><defs><pattern id="stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="rgba(244,236,221,.03)"/><rect width="2" height="6" fill="rgba(244,236,221,.12)"/></pattern></defs>' +
        '<path d="' + MARK_L + '" fill="#E4633D"/><path class="st-slot" d="' + MARK_R + '"/></svg></div>' +
        '<div class="st st-ripple"></div>';
      FRIENDS.forEach(function (c, i) {
        html += '<div class="st st-friend" data-i="' + i + '" style="color:' + c + '"><svg viewBox="0 0 100 100"><path d="M50 0A50 50 0 0 0 50 100Z" fill="currentColor"/></svg></div>';
      });
      html += '<div class="st st-land" style="left:51.18%;top:40.96%;width:10.63%;aspect-ratio:1/2;opacity:0"><div class="st-pick__card">' +
        '<svg viewBox="0 0 50 100" preserveAspectRatio="none"><path d="M0 0A50 50 0 0 1 0 100Z" fill="#E8A33A"/></svg>' +
        '<svg class="back" viewBox="0 0 50 100" preserveAspectRatio="none"><path d="M0 0A50 50 0 0 1 0 100Z" fill="#4A68E8"/><text x="18" y="62" font-family="Source Serif 4, Georgia, serif" font-size="34" fill="#F4ECDD" text-anchor="middle">?</text></svg>' +
        '</div></div>' +
        '<div class="st st-chip">5:00</div>' +
        '<div class="st st-dare"><small>' + esc(t('tour_dare_label')) + '</small><b>' + esc(t('tour_dare')) + '</b></div>';
      stage.innerHTML = html;
      var push = pushEl();
      screen.appendChild(push);

      var friends = $$('.st-friend', stage);
      var land = $('.st-land', stage), ring = $('.st-ring .arc', stage), chip = $('.st-chip', stage);
      var dare = $('.st-dare', stage), ripple = $('.st-ripple', stage), orbit = $('.st-orbit', stage);
      var RX = 38.75, RY = 29.09, BASE = -81, SPEED = 20;
      // The light runs 10 steps, each slower, from friend 3 round to Saffron (0).
      var run = [], acc = 400;
      for (var k = 0; k < 10; k++) { run.push({ at: acc, i: (3 + k) % 6 }); acc += 55 + 170 * Math.pow(k / 9, 2); }
      var lit = -1, picked = false, t0 = performance.now();

      function place(now) {
        var t = (now - t0) / 1000;
        friends.forEach(function (f, i) {
          if (f.dataset.gone) return;
          var a = (BASE + i * 60 + SPEED * Math.min(t, 1.6)) * Math.PI / 180;
          var depth = (Math.sin(a) + 1) / 2;
          var scale = (0.82 + depth * 0.32) * (i === lit ? 1.3 : 1);
          f.style.left = (50 + RX * Math.cos(a)) + '%';
          f.style.top = (50 + RY * Math.sin(a)) + '%';
          f.style.transform = 'rotate(' + (a * 180 / Math.PI + 180) + 'deg) scale(' + scale.toFixed(3) + ')';
          f.style.opacity = lit < 0 ? (0.55 + depth * 0.45) : (i === lit ? 1 : 0.5);
          f.style.zIndex = Math.round(depth * 10);
          f.classList.toggle('is-lit', i === lit);
        });
      }

      function finish() {
        // Settled: the pick sits in the slot, face down, the clock running.
        friends.forEach(function (f) { f.style.opacity = 0; f.dataset.gone = 1; });
        orbit.style.opacity = 0;
        land.style.opacity = 1;
        $('.st-slot', stage).style.opacity = 0;
        land.classList.add('is-flipped');
        push.classList.add('is-on');
        $('.st-ring', stage).classList.add('is-on');
        ring.style.strokeDashoffset = '0';
        chip.classList.add('is-on');
        dare.classList.add('is-on');
        duoStart = performance.now();
        ticker = setInterval(function () {
          var s = secsLeft();
          chip.textContent = clock(s);
          ring.style.strokeDashoffset = String(100 - Math.max(0, s / 300) * 100);
        }, 1000);
      }

      if (still) {
        place(t0);
        later(finish, 900);
        later(done, 2400);
        return;
      }

      // Pop in, then the light runs round.
      friends.forEach(function (f, i) {
        f.animate([{ opacity: 0, scale: '0.2' }, { scale: '1' }], { duration: 420, delay: 60 * i, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' });
      });
      run.forEach(function (s) { later(function () { lit = s.i; }, s.at); });

      function frame(now) {
        if (!picked) place(now);
        raf = requestAnimationFrame(frame);
      }
      raf = requestAnimationFrame(frame);

      // 1605: it pops and twirls into the empty half, landing at 2185.
      later(function () {
        picked = true;
        cancelAnimationFrame(raf);
        var pick = friends[0];
        var from = { left: pick.style.left, top: pick.style.top, transform: pick.style.transform };
        friends.forEach(function (f, i) {
          if (i === 0) return;
          var a = (BASE + i * 60 + SPEED * 1.6) * Math.PI / 180;
          f.animate([{ opacity: f.style.opacity }, { opacity: 0, left: (50 + RX * 1.5 * Math.cos(a)) + '%', top: (50 + RY * 1.5 * Math.sin(a)) + '%' }],
            { duration: 520, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
        });
        orbit.style.opacity = 0;
        pick.classList.remove('is-lit');
        var anim = pick.animate([
          { left: from.left, top: from.top, transform: from.transform, offset: 0 },
          { left: from.left, top: from.top, transform: from.transform.replace(/scale\([^)]*\)/, 'scale(1.6)'), offset: 0.12 },
          { left: '64%', top: '18%', transform: 'rotate(40deg) scale(1.55)', offset: 0.55 },
          { left: '51.18%', top: '51.27%', transform: 'rotate(180deg) scale(1.7)', offset: 1 }
        ], { duration: 580, easing: 'cubic-bezier(.45,.05,.3,1)', fill: 'forwards' });
        anim.onfinish = function () {
          pick.style.opacity = 0;
          land.style.opacity = 1;
          $('.st-slot', stage).style.opacity = 0;
          land.animate([{ transform: 'scale(1.14)' }, { transform: 'scale(1)' }], { duration: 380, easing: 'cubic-bezier(.34,1.56,.64,1)' });
          ripple.classList.add('go');
          later(function () { land.classList.add('is-flipped'); }, 260);
          later(function () { push.classList.add('is-on'); }, 360);
          later(function () {
            $('.st-ring', stage).classList.add('is-on');
            ring.style.strokeDashoffset = '0';
            chip.classList.add('is-on');
            duoStart = performance.now();
            ticker = setInterval(function () {
              var s = secsLeft();
              chip.textContent = clock(s);
              ring.style.strokeDashoffset = String(100 - Math.max(0, s / 300) * 100);
            }, 1000);
          }, 410);
          later(function () { dare.classList.add('is-on'); }, 780);
          later(done, 3600);
        };
      }, 1605);
    }

    // Page 2 · Shoot: your half lands with a flash; theirs waits.
    function shoot() {
      if (!duoStart) duoStart = performance.now() - 24000;
      stage.innerHTML =
        '<div class="st st-head"><b>' + esc(t('tour_dare')) + '</b><span class="st-time">' + clock(secsLeft()) + '</span></div>' +
        '<div class="st st-pair">' +
          '<div class="st-half st-half--l"><div class="st-empty st-empty--you"></div><div class="st-photo" style="position:absolute;inset:0;opacity:0">' + scene('apple', 0) + '</div><div class="st-flash"></div><span class="st-tag">✓ ' + esc(t('tour_you')) + '</span></div>' +
          '<div class="st-half st-half--r"><div class="st-empty"><div class="st-wait"><span class="st-q">?</span><span class="st-dots"><i></i><i></i><i></i></span></div></div></div>' +
        '</div>';
      var pair = $('.st-pair', stage), time = $('.st-time', stage);
      ticker = setInterval(function () { time.textContent = clock(secsLeft()); }, 1000);
      if (!still) pair.animate([{ opacity: 0, transform: 'scale(.86)' }, { opacity: 1, transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
      later(function () {
        $('.st-flash', stage).classList.add('go');
        $('.st-photo', stage).style.opacity = 1;
        $('.st-tag', stage).classList.add('is-on');
      }, still ? 300 : 480);
      later(done, 3600);
    }

    // Page 3 · Unlock: steamed glass clears, the halves sign the join.
    function unlock() {
      stage.innerHTML =
        '<div class="st st-head st-head--dare"><b>' + esc(t('tour_dare')) + '</b></div>' +
        '<div class="st st-head st-head--unlocked"><small>' + esc(t('tour_unlocked')) + '</small><b>' + esc(t('tour_names')) + '</b></div>' +
        '<div class="st st-pair">' +
          '<div class="st-half st-half--l">' + scene('apple', 0) + '<span class="st-tag">' + esc(t('tour_you')) + '</span></div>' +
          '<div class="st-half st-half--r">' + scene('balloon', 0) + '<span class="st-tag st-tag--them">' + esc(t('tour_partner')) + '</span></div>' +
          '<div class="st-glass"></div>' +
          '<div class="st-seam"><i>' + markSvg() + '</i></div>' +
        '</div>' +
        '<div class="st st-react">🔥</div>' +
        '<div class="st-burst"></div>';
      var pair = $('.st-pair', stage);
      later(function () { pair.classList.add('is-closed'); }, still ? 0 : 120);
      later(function () { $('.st-glass', stage).classList.add('is-clear'); }, still ? 200 : 950);
      later(function () {
        pair.classList.add('is-signed');
        $('.st-head--dare', stage).style.opacity = 0;
        $('.st-head--unlocked', stage).classList.add('is-on');
        $$('.st-tag', stage).forEach(function (tg) { tg.classList.add('is-on'); });
        if (!still) burst($('.st-burst', stage));
      }, still ? 300 : 1300);
      later(function () { $('.st-react', stage).classList.add('is-on'); }, still ? 400 : 1700);
      later(done, 4200);
    }

    // Halves thrown out from the centre (HalvesBurst).
    function burst(host) {
      var colors = ['#E4633D', '#E8A33A', '#4A68E8', '#22A273', '#9147A8', '#F2B8A6', '#F4ECDD'];
      var r = rng(26);
      for (var i = 0; i < 46; i++) {
        var a = r() * Math.PI * 2, reach = 0.3 + r() * 0.7, size = 2.8 + r() * 4.4;
        var quarter = r() < 0.35, color = colors[Math.floor(r() * colors.length)];
        var spin = (r() - 0.5) * 540, fall = 0.05 + r() * 0.15;
        var piece = document.createElement('i');
        piece.style.width = piece.style.height = size + 'cqw';
        piece.style.marginLeft = piece.style.marginTop = (-size / 2) + 'cqw';
        piece.style.background = color;
        piece.style.borderRadius = quarter ? '0 0 100% 0' : '100% 0 0 100% / 50% 0 0 50%';
        if (!quarter) piece.style.width = (size / 2) + 'cqw';
        host.appendChild(piece);
        var x = Math.cos(a) * reach * 66, y = Math.sin(a) * reach * 66;
        piece.animate([
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          { transform: 'translate(' + (x * 0.8) + 'cqw,' + (y * 0.8 + fall * 20) + 'cqw) rotate(' + (spin * 0.6) + 'deg)', opacity: 1, offset: 0.55 },
          { transform: 'translate(' + x + 'cqw,' + (y + fall * 90) + 'cqw) rotate(' + spin + 'deg)', opacity: 0 }
        ], { duration: 1700, easing: 'cubic-bezier(.15,.7,.3,1)', fill: 'forwards' });
      }
    }

    function done() {
      // On a narrow screen the steps take turns on their own, unless someone is steering.
      if (!narrow.matches || !visible) return;
      if (performance.now() - touched < 9000) return;
      autoTimer = setTimeout(function () { setStep((step + 1) % 3); }, 1400);
    }

    function setStep(next, force) {
      if (next === step && !force) return;
      step = next;
      clearAll();
      $$('.st-push', screen).forEach(function (p) { p.remove(); });
      screen.dataset.step = String(step);
      steps.forEach(function (s, i) { s.classList.toggle('is-active', i === step); });
      tabs.forEach(function (b, i) { b.setAttribute('aria-selected', String(i === step)); b.tabIndex = i === step ? 0 : -1; });
      words(step);
      if (!visible) { stage.innerHTML = ''; return; }
      if (step === 0) { duoStart = 0; dealt(); } else if (step === 1) shoot(); else unlock();
    }

    tabs.forEach(function (b) {
      b.addEventListener('click', function () { touched = performance.now(); setStep(+b.dataset.go, true); });
    });
    btn.addEventListener('click', function () {
      touched = performance.now();
      if (step === 2) { $('#download').scrollIntoView({ behavior: still ? 'auto' : 'smooth' }); return; }
      if (narrow.matches) setStep(step + 1);
      else steps[step + 1].scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'center' });
    });

    // On a wide screen the page's scroll turns the pages.
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (narrow.matches) return;
        entries.forEach(function (en) { if (en.isIntersecting) setStep(+en.target.dataset.step); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(function (s) { io.observe(s); });
    }
    whileVisible(screen, function () { visible = true; setStep(step < 0 ? 0 : step, true); }, function () { visible = false; clearAll(); }, '0px 0px -10% 0px');
    onLanguage.push(function () { if (step >= 0) setStep(step, true); });
    words(0);
    screen.dataset.step = '0';
  })();

  // ---------------------------------------------------------------------------
  // The rule: the name that never shows.
  // ---------------------------------------------------------------------------
  (function who() {
    var el = $('#whoName');
    var letters = 'ABDEGIKLMNORSTაბგდევზთიკლმნოპრსტუფქღყშჩცძწჭხჯჰ';
    var timer = null;
    function scramble() {
      if (still) return;
      var n = 0;
      var iv = setInterval(function () {
        n += 1;
        var s = [];
        for (var i = 0; i < 5; i++) s.push(n > 8 + i * 2 ? '?' : letters.charAt(Math.floor(Math.random() * letters.length)));
        el.textContent = s.join(' ');
        if (n > 18) { clearInterval(iv); el.textContent = '? ? ? ? ?'; }
      }, 55);
    }
    whileVisible(el, function () { timer = setInterval(scramble, 3800); setTimeout(scramble, 700); }, function () { clearInterval(timer); });
  })();

  // ---------------------------------------------------------------------------
  // The dealer: real challenge cards, painted by the deck's colour rule.
  // ---------------------------------------------------------------------------
  (function dealer() {
    var host = $('#dealer');
    var order = shuffle(CHALLENGES.slice());
    var at = 0, cards = [], last = null, ticker = null;

    function ornament(seed) { return '<span class="ornament ornament--' + (seed % 3) + '"></span>'; }
    function front(c, hue, seed) {
      var lv = LEVEL[c.l];
      var filter = c.fx ? FILTERS.filter(function (f) { return f.key === c.fx; })[0] : null;
      return '<div class="dcard__face">' + ornament(seed) +
        '<div class="dcard__top"><div class="pair-faces"><span>' + esc(t('card_you')) + '</span><span>?</span></div>' +
        '<div class="dcard__who"><small>' + esc(t('card_duo_with')) + '</small><span>' + esc(t('card_someone')) + '</span></div>' +
        '<div class="ring"><svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="16.5" fill="none" stroke-width="2.4"/><circle class="arc" cx="18" cy="18" r="16.5" fill="none" stroke-width="2.4" pathLength="100" style="stroke-dashoffset:0"/></svg><span class="ring__t">' + clock(c.s) + '</span></div></div>' +
        '<p class="dcard__text">' + esc(c.t[L()]) + '</p>' +
        '<div class="dcard__meta"><span>' + c.e + '&nbsp; ' + esc(CATEGORY[c.c][L()]) + ' · ' + lv[0] + ' ' + esc(t(lv[1])) + '</span>' +
        '<span class="chip-ink"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 16l4-4 3 3 2-2 3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' + esc(t('card_example')) + '</span></div>' +
        (filter ? '<div class="dcard__filter"><span class="chip-ink">' + esc(filter.key) + '</span><span>' + esc(filter.line[L()]) + '</span></div>' : '') +
        '<div class="dcard__btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.8l1.4-2h4.6l1.4 2h1.8A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z" fill="currentColor"/><circle cx="12" cy="12.5" r="3.4" style="fill:var(--hue-ink)"/></svg>' + esc(t('card_shoot')) + '</div>' +
        '</div>';
    }
    function back(c, seed) {
      return '<div class="dcard__face dcard__face--back">' + ornament(seed + 1) +
        '<span class="dcard__emoji" aria-hidden="true">' + c.e + '</span>' +
        '<p class="dcard__back-title">' + esc(t('card_how')) + '</p>' +
        '<dl class="dcard__dl"><div><dt>' + esc(t('card_framing')) + '</dt><dd>' + esc(c.f[L()]) + '</dd></div>' +
        '<div><dt>' + esc(t('card_tip')) + '</dt><dd>' + esc(c.p[L()]) + '</dd></div></dl>' +
        '<div class="dcard__btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14l-4-4 4-4M5 10h9a5 5 0 0 1 0 10h-2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' + esc(t('card_back')) + '</div>' +
        '</div>';
    }
    function make() {
      var c = order[at % order.length];
      at += 1;
      var hue = nextHue(cards.map(function (k) { return k.hue; }), last);
      last = hue;
      var el = document.createElement('div');
      el.className = 'dcard';
      el.tabIndex = -1;
      el.setAttribute('role', 'button');
      el.style.setProperty('--hue', hue.base);
      el.style.setProperty('--hue-ink', hue.ink);
      el.style.color = hue.ink;
      var card = { el: el, c: c, hue: hue, seed: at, left: c.s };
      paint(card);
      el.addEventListener('click', function () { flip(card); });
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(card); } });
      return card;
    }
    function paint(card) {
      card.el.innerHTML = '<div class="dcard__inner">' + front(card.c, card.hue, card.seed) + back(card.c, card.seed) + '</div>';
      card.el.setAttribute('aria-label', fill(t('card_a11y'), card.c.t[L()]));
      tickCard(card);
    }
    function flip(card) {
      if (cards[0] !== card) return;
      card.el.classList.toggle('is-flipped');
    }
    function layout() {
      cards.forEach(function (card, i) {
        card.el.dataset.pos = String(i);
        card.el.tabIndex = i === 0 ? 0 : -1;
        card.el.setAttribute('aria-hidden', String(i !== 0));
      });
      fit();
    }
    // Every card as tall as the tallest on the deck, so the ones behind always show.
    function fit() {
      var tallest = 0;
      cards.forEach(function (card) { card.el.style.height = 'auto'; tallest = Math.max(tallest, card.el.offsetHeight); });
      cards.forEach(function (card) { card.el.style.height = tallest + 'px'; });
      host.style.height = (tallest + 48) + 'px';
    }
    var fitTimer = null;
    window.addEventListener('resize', function () { clearTimeout(fitTimer); fitTimer = setTimeout(fit, 120); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    function tickCard(card) {
      var label = $('.ring__t', card.el), arc = $('.ring .arc', card.el);
      if (!label) return;
      label.textContent = clock(card.left);
      arc.style.strokeDashoffset = String(100 - (card.left / card.c.s) * 100);
    }
    function dealNext() {
      var gone = cards.shift();
      if (gone) {
        gone.el.dataset.pos = 'gone';
        setTimeout(function () { gone.el.remove(); }, 700);
      }
      var fresh = make();
      fresh.el.dataset.pos = 'new';
      host.appendChild(fresh.el);
      cards.push(fresh);
      requestAnimationFrame(function () { requestAnimationFrame(layout); });
    }
    for (var i = 0; i < 3; i++) { var card = make(); cards.push(card); host.appendChild(card.el); }
    layout();
    $('#dealNext').addEventListener('click', dealNext);

    // The top card's clock runs; at zero the duo is gone and the next is dealt.
    whileVisible(host, function () {
      ticker = setInterval(function () {
        var top = cards[0];
        if (!top) return;
        top.left -= 1;
        if (top.left <= 0) { dealNext(); return; }
        tickCard(top);
      }, 1000);
    }, function () { clearInterval(ticker); });

    // Swipe the top card away.
    var sx = null;
    host.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    host.addEventListener('pointerup', function (e) {
      if (sx != null && Math.abs(e.clientX - sx) > 60) { e.preventDefault(); dealNext(); }
      sx = null;
    });

    onLanguage.push(function () { cards.forEach(function (c) { var flipped = c.el.classList.contains('is-flipped'); paint(c); c.el.classList.toggle('is-flipped', flipped); }); fit(); });
  })();

  // ---------------------------------------------------------------------------
  // Numbers that count up once
  // ---------------------------------------------------------------------------
  (function counts() {
    if (still || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, to = +el.dataset.count, t0 = performance.now();
        (function step(now) {
          var p = Math.min((now - t0) / 1200, 1);
          el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { el.textContent = '0'; io.observe(el); });
  })();

  // ---------------------------------------------------------------------------
  // The filter lab: the app's own colour matrices, vignettes and scanlines.
  // ---------------------------------------------------------------------------
  (function lab() {
    var defs = $('#filterDefs');
    defs.innerHTML = FILTERS.map(function (f) {
      var m = f.m.slice();
      var values = [];
      for (var r = 0; r < 3; r++) {
        values.push(m[r * 5], m[r * 5 + 1], m[r * 5 + 2], m[r * 5 + 3], +(m[r * 5 + 4] / 255).toFixed(5));
      }
      values.push(0, 0, 0, 1, 0);
      return '<filter id="' + filterId(f.key) + '" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%"><feColorMatrix type="matrix" values="' + values.join(' ') + '"/></filter>';
    }).join('');

    var pair = $('#labPair'), chipsEl = $('#labChips');
    var nameEl = $('#labName'), lineEl = $('#labTagline'), fromEl = $('#labFrom');
    $$('.duo__half', pair).forEach(function (half) {
      half.innerHTML = scene(half.dataset.scene, +half.dataset.v) +
        '<i class="fx-vig" style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(farthest-corner at 50% 50%,transparent 55%,#000 100%);opacity:0;transition:opacity .5s"></i>' +
        '<i class="fx-lines" style="position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.12) 0 1px,transparent 1px 3px);opacity:0;transition:opacity .5s"></i>';
    });
    var current = 0, auto = null, steered = false;
    function chips() {
      chipsEl.innerHTML = '<button type="button" class="fchip fchip--none" role="radio" data-i="-1">' + esc(t('fl_none')) + '</button>' +
        FILTERS.map(function (f, i) { return '<button type="button" class="fchip" role="radio" data-i="' + i + '">' + esc(f.key) + '</button>'; }).join('');
      mark();
    }
    function mark() {
      $$('.fchip', chipsEl).forEach(function (b) {
        var on = +b.dataset.i === current;
        b.setAttribute('aria-checked', String(on));
        b.tabIndex = on ? 0 : -1;
      });
    }
    function apply(i, animate) {
      current = i;
      var f = FILTERS[i];
      $$('.fx', pair).forEach(function (g) { if (f) g.setAttribute('filter', 'url(#' + filterId(f.key) + ')'); else g.removeAttribute('filter'); });
      $$('.fx-vig', pair).forEach(function (v) { v.style.opacity = f ? f.vig : 0; });
      $$('.fx-lines', pair).forEach(function (v) { v.style.opacity = f && f.lines ? 1 : 0; });
      nameEl.textContent = f ? f.key : t('fl_none').toUpperCase();
      if (lang === 'ka' && !f) nameEl.textContent = t('fl_none');
      lineEl.textContent = f ? f.line[L()] : t('fl_none_line');
      var from = !f ? t('fl_none_from') : f.from != null ? CHALLENGES[f.from].t[L()] : f.fromText[L()];
      fromEl.textContent = f ? '“' + from + '”' : from;
      if (lang === 'ka' && f) fromEl.textContent = '„' + from + '“';
      if (animate) { lineEl.classList.remove('is-swap'); void lineEl.offsetWidth; lineEl.classList.add('is-swap'); }
      mark();
    }
    chipsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.fchip');
      if (!b) return;
      steered = true; clearInterval(auto);
      apply(+b.dataset.i, true);
    });
    chipsEl.addEventListener('keydown', function (e) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(e.key) < 0) return;
      e.preventDefault();
      steered = true; clearInterval(auto);
      var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
      var n = current + d;
      if (n < -1) n = FILTERS.length - 1;
      if (n >= FILTERS.length) n = -1;
      apply(n, true);
      $('.fchip[data-i="' + n + '"]', chipsEl).focus();
    });
    whileVisible(pair, function () {
      if (steered || still) return;
      auto = setInterval(function () { apply(current + 1 >= FILTERS.length ? 0 : current + 1, true); }, 3200);
    }, function () { clearInterval(auto); });
    onLanguage.push(function () { chips(); apply(current, false); });
  })();

  // ---------------------------------------------------------------------------
  // The wall of prints (GalleryScreen's PrintWall), drifting.
  // ---------------------------------------------------------------------------
  (function wall() {
    var cols = $$('#wall .wall__col');
    function print(p) {
      var hue = hueByName[p.hue];
      var text = p.text ? p.text[L()] : CHALLENGES[p.t].t[L()];
      var who = NAMES[p.who][L()];
      var date = p.d[0] + ' ' + t('months')[p.d[1] - 1];
      return '<div class="print" style="--hue:' + hue.base + ';--hue-ink:' + hue.ink + '">' +
        '<div class="print__pair duo"><div class="duo__half photo">' + scene(p.a[0], p.a[1], p.fx) + '</div>' +
        '<div class="duo__half photo">' + scene(p.b[0], p.b[1], p.fx) + '</div><div class="duo__seam"><i></i></div>' +
        (p.r ? '<span class="print__react">' + p.r + '</span>' : '') + '</div>' +
        '<p class="print__text">' + esc(text) + '</p><p class="print__meta">' + esc(who) + ' · ' + esc(date) + '</p></div>';
    }
    function render() {
      var buckets = [[], [], []];
      PRINTS.forEach(function (p, i) { buckets[i % 3].push(print(p)); });
      cols.forEach(function (col, i) {
        var html = buckets[i].join('');
        col.innerHTML = html + html;
      });
    }
    onLanguage.push(render);
  })();

  // ---------------------------------------------------------------------------
  // A day of duos: quiet hours, and a duo every hour or two in between.
  // ---------------------------------------------------------------------------
  (function day() {
    var marks = $('#dayMarks'), out = $('#dayCount');
    var minus = $('#dayMinus'), plus = $('#dayPlus');
    var count = 4;
    var QUIET_END = 8 * 60, QUIET_START = 23 * 60;
    var glows = ['#FF9A73', '#F5C66E', '#4FBF94', '#4DBCC0', '#8EA6FF', '#A596FF', '#D08BE6', '#F07FB0', '#C4D46E', '#FF8A8A'];
    function deal() {
      var window_ = QUIET_START - QUIET_END - 10;
      var gaps = [];
      for (var i = 0; i < count - 1; i++) gaps.push(60 + Math.random() * 60);
      var used = gaps.reduce(function (a, b) { return a + b; }, 0);
      if (used > window_ - 60) { gaps = gaps.map(function (g) { return g * (window_ - 60) / used; }); used = window_ - 60; }
      var at = QUIET_END + 60 + Math.random() * Math.min(60, window_ - used - 60);
      var times = [Math.round(at)];
      gaps.forEach(function (g) { at += g; times.push(Math.round(at)); });
      var hues = shuffle(glows.slice());
      marks.innerHTML = times.map(function (m, i) {
        var hh = ('0' + Math.floor(m / 60)).slice(-2), mm = ('0' + (m % 60)).slice(-2);
        return '<div class="dmark" style="left:' + (m / 1440 * 100).toFixed(3) + '%;--glow:' + hues[i] + ';--d:' + (i * 0.07) + 's">' +
          '<span class="dmark__half"><svg viewBox="0 0 100 100"><path d="' + MARK_L + '" fill="' + hues[i] + '"/><path d="' + MARK_R + '" fill="' + hues[i] + '" opacity=".35"/></svg></span>' +
          '<span class="dmark__time">' + hh + ':' + mm + '</span></div>';
      }).join('');
      marks.classList.toggle('is-dense', count >= 6);
      out.textContent = String(count);
      minus.disabled = count <= 1;
      plus.disabled = count >= 10;
    }
    minus.addEventListener('click', function () { if (count > 1) { count -= 1; deal(); } });
    plus.addEventListener('click', function () { if (count < 10) { count += 1; deal(); } });
    $('#dayShuffle').addEventListener('click', deal);
    deal();
  })();

  // ---------------------------------------------------------------------------
  // Scroll reveal
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
