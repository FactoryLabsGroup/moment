/* Moment — the halves on this page.
   Real duos are private, so the page never shows one. Every "photo" here is
   drawn, the way the app draws its own stand-ins: a scene on a 120 × 160
   frame that crops cleanly to a half of any shape. Each call takes a unique
   id (gradients are per instance) and a variant, so two halves of the same
   challenge never look alike. */
(function () {
  'use strict';

  var n = 0;
  function uid() { n += 1; return 's' + n; }

  function svg(body, label) {
    return '<svg class="scene" viewBox="0 0 120 160" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"' +
      (label ? ' aria-label="' + label + '"' : '') + '>' + body + '</svg>';
  }
  function lin(id, stops, x2, y2) {
    return '<linearGradient id="' + id + '" x1="0" y1="0" x2="' + (x2 == null ? 0 : x2) + '" y2="' + (y2 == null ? 1 : y2) + '">' +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') +
      '</linearGradient>';
  }
  function rad(id, stops, cx, cy, r) {
    return '<radialGradient id="' + id + '" cx="' + (cx || '50%') + '" cy="' + (cy || '50%') + '" r="' + (r || '50%') + '">' +
      stops.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') +
      '</radialGradient>';
  }

  var S = {};

  // An apple on warm wood. Your half of "Something red."
  S.apple = function (v) {
    var i = uid();
    var wall = v ? ['#2C2421', '#4A3A30'] : ['#3A2A20', '#5E412D'];
    var wood = v ? ['#A7774B', '#6B4426'] : ['#93603A', '#5A3820'];
    return svg(
      '<defs>' + lin(i + 'w', [[0, wall[0]], [1, wall[1]]]) + lin(i + 't', [[0, wood[0]], [1, wood[1]]]) +
      rad(i + 'a', [[0, '#FF7A62'], [0.45, '#D9252B'], [1, '#7E0B12']], '38%', '30%', '70%') +
      rad(i + 's', [[0, '#000', 0.55], [1, '#000', 0]]) +
      lin(i + 'l', [[0, '#7FB34A'], [1, '#3E7A2C']], 1, 1) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'w)"/>' +
      '<path d="M84 0h36v120L48 100z" fill="#FFE9C8" opacity=".06"/>' +
      '<rect y="96" width="120" height="64" fill="url(#' + i + 't)"/>' +
      '<path d="M0 96h120" stroke="#C99666" stroke-width="1.4" opacity=".55"/>' +
      '<path d="M0 112c30-2 70 2 120-1M0 131c40 2 80-3 120 1M0 149c34-3 74 2 120-1" stroke="#3B2414" stroke-width=".7" fill="none" opacity=".45"/>' +
      '<path d="M18 120c6-2 12 0 16 3M86 140c7-3 14-1 18 2" stroke="#3B2414" stroke-width=".6" fill="none" opacity=".4"/>' +
      '<ellipse cx="62" cy="124" rx="30" ry="6.5" fill="url(#' + i + 's)"/>' +
      '<path d="M60 84c-12-8-30-1-29 17 1 17 13 26 24 23 3-1 7-1 10 0 11 3 23-6 24-23 1-18-17-25-29-17z" fill="url(#' + i + 'a)"/>' +
      '<ellipse cx="46" cy="98" rx="4.5" ry="8" transform="rotate(-18 46 98)" fill="#fff" opacity=".32"/>' +
      '<path d="M60 86c0-7 1-12 4-16" stroke="#4A2E1A" stroke-width="2.6" stroke-linecap="round" fill="none"/>' +
      '<path d="M63 74c6-8 16-8 20-4-6 7-14 8-20 4z" fill="url(#' + i + 'l)"/>'
    );
  };

  // A red balloon against the sky. Their half of "Something red."
  S.balloon = function (v) {
    var i = uid();
    var sky = v ? [['0', '#F08A5D'], ['1', '#FBD3A6']] : [['0', '#2F6FD6'], ['1', '#9CC8F2']];
    return svg(
      '<defs>' + lin(i + 'k', sky) +
      rad(i + 'b', [[0, '#FF7B6B'], [0.5, '#D7202B'], [1, '#86101A']], '36%', '30%', '72%') + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'k)"/>' +
      '<g fill="#fff" opacity=".92"><circle cx="6" cy="138" r="18"/><circle cx="28" cy="130" r="17"/><circle cx="50" cy="142" r="14"/><circle cx="66" cy="156" r="12"/><circle cx="20" cy="158" r="18"/><circle cx="44" cy="162" r="16"/></g>' +
      '<g fill="#fff" opacity=".7"><circle cx="96" cy="30" r="6"/><circle cx="104" cy="27" r="8"/><circle cx="113" cy="31" r="6"/></g>' +
      '<path d="M67 92c-3 12 6 22-2 34s3 22-4 34" stroke="#fff" stroke-width=".9" fill="none" opacity=".85"/>' +
      '<ellipse cx="67" cy="60" rx="23" ry="28" fill="url(#' + i + 'b)"/>' +
      '<path d="M64 88h6l-3 5z" fill="#A3141F"/>' +
      '<ellipse cx="58" cy="48" rx="5" ry="9" transform="rotate(-24 58 48)" fill="#fff" opacity=".35"/>'
    );
  };

  // Only the sky.
  S.sky = function (v) {
    var i = uid();
    var sky = v ? [[0, '#F2A07B'], [0.55, '#F7CBB0'], [1, '#B9CDEA']] : [[0, '#4F8FDB'], [1, '#CDE4F6']];
    var shade = v ? '#F0CDBE' : '#DDE8F3';
    return svg(
      '<defs>' + lin(i + 'k', sky) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'k)"/>' +
      '<g fill="' + shade + '"><circle cx="38" cy="100" r="17"/><circle cx="64" cy="96" r="21"/><circle cx="90" cy="104" r="15"/><circle cx="22" cy="108" r="11"/><circle cx="106" cy="110" r="10"/></g>' +
      '<g fill="#fff"><circle cx="38" cy="95" r="16"/><circle cx="64" cy="88" r="21"/><circle cx="90" cy="99" r="14"/><circle cx="52" cy="72" r="13"/><circle cx="74" cy="68" r="10"/><circle cx="22" cy="104" r="9"/><circle cx="106" cy="106" r="8"/></g>' +
      '<g fill="#fff" opacity=".75"><circle cx="20" cy="30" r="7"/><circle cx="30" cy="27" r="9"/><circle cx="40" cy="31" r="6"/></g>'
    );
  };

  // The sun touching the sea, or a roof.
  S.sea = function (v) {
    var i = uid();
    var land = v
      ? '<path d="M0 104h18v-14l8-8 8 8v14h10V92h22v12h8V78l10-10 10 10v26h26v56H0z" fill="#20152B"/><g fill="#FFC56B" opacity=".9"><rect x="52" y="97" width="4" height="4"/><rect x="88" y="84" width="4" height="4"/><rect x="88" y="94" width="4" height="4"/></g>'
      : '<rect y="104" width="120" height="56" fill="url(#' + i + 'w)"/><g fill="#FFD27A"><rect x="44" y="108" width="32" height="1.6" opacity=".9"/><rect x="48" y="113" width="24" height="1.4" opacity=".7"/><rect x="51" y="118" width="18" height="1.2" opacity=".55"/><rect x="54" y="124" width="12" height="1" opacity=".4"/><rect x="56" y="131" width="8" height="1" opacity=".3"/></g>';
    return svg(
      '<defs>' + lin(i + 'k', [[0, '#3B2B5A'], [0.55, '#E0705A'], [1, '#FFC06A']]) +
      lin(i + 'w', [[0, '#5A3466'], [1, '#1C1A3A']]) +
      rad(i + 'g', [[0, '#FFE7B0', 0.9], [1, '#FFB060', 0]]) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'k)"/>' +
      '<circle cx="60" cy="102" r="44" fill="url(#' + i + 'g)"/>' +
      '<circle cx="60" cy="102" r="15" fill="#FFF3CF"/>' + land
    );
  };

  // A figure in silhouette against the evening.
  S.silhouette = function (v) {
    var i = uid();
    var sky = v ? [[0, '#2D3C7A'], [0.6, '#7F7FD0'], [1, '#F2B8A6']] : [[0, '#5A3A7A'], [0.55, '#E85D5D'], [1, '#FFB36B']];
    return svg(
      '<defs>' + lin(i + 'k', sky) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'k)"/>' +
      '<circle cx="' + (v ? 30 : 88) + '" cy="72" r="11" fill="#FFF0D0" opacity=".85"/>' +
      '<path d="M0 128h16v-22h12v10h14V96h10v20h12v-8h20v20h36v32H0z" fill="#1A1420"/>' +
      '<g fill="#120E14"><circle cx="64" cy="84" r="7.5"/><path d="M52 128c0-18 4-30 12-32 8 2 12 14 12 32z"/><path d="M73 101c5-4 8-10 9-18l3 .6c-1 9-4 16-10 20z"/></g>'
    );
  };

  // Something green and alive.
  S.plant = function (v) {
    var i = uid();
    var wall = v ? ['#F1E2C8', '#D9C3A0'] : ['#E8DCC6', '#CDB894'];
    return svg(
      '<defs>' + lin(i + 'w', [[0, wall[0]], [1, wall[1]]]) + lin(i + 'p', [[0, '#D27A4E'], [1, '#9B4E2E']]) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'w)"/>' +
      '<path d="M10 0h44L30 110H0V20z" fill="#fff" opacity=".22"/>' +
      '<rect y="132" width="120" height="28" fill="#B79C76"/>' +
      '<g stroke="#2E5B3A" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M60 112c-2-20-12-34-22-44"/><path d="M60 112c1-24 6-44 18-58"/><path d="M60 112c0-14-2-26 0-40"/></g>' +
      '<g><path d="M38 68a16 16 0 0 1-22-22z" fill="#3F9A60"/><path d="M78 54a18 18 0 0 0 24-26z" fill="#2F7D4F"/><path d="M60 72a14 14 0 0 1 0-28z" fill="#1F6A42"/><path d="M60 72a14 14 0 0 0 0-28z" fill="#3F9A60" transform="translate(4 0)"/><path d="M47 90a12 12 0 0 1-20-6z" fill="#2F7D4F"/><path d="M73 86a12 12 0 0 0 20-8z" fill="#3F9A60"/></g>' +
      '<path d="M40 110h40l-5 32H45z" fill="url(#' + i + 'p)"/><rect x="37" y="106" width="46" height="7" rx="2" fill="#E08A5C"/>'
    );
  };

  // Whatever you last drank, from above.
  S.coffee = function (v) {
    var i = uid();
    var table = v ? ['#3A2A22', '#22180F'] : ['#E2DCD3', '#C9C1B5'];
    return svg(
      '<defs>' + lin(i + 't', [[0, table[0]], [1, table[1]]], 1, 1) +
      rad(i + 'c', [[0, '#9A6440'], [0.7, '#5A3218'], [1, '#3A1E0C']]) +
      rad(i + 's', [[0.7, '#000', 0.35], [1, '#000', 0]]) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 't)"/>' +
      (v ? '' : '<path d="M0 40c30 6 50-10 80 4s30 20 40 18M0 120c20-8 40 6 70-2" stroke="#fff" stroke-width="1" fill="none" opacity=".5"/>') +
      '<circle cx="62" cy="84" r="44" fill="url(#' + i + 's)"/>' +
      '<circle cx="60" cy="80" r="40" fill="#F6F2EA"/><circle cx="60" cy="80" r="34" fill="none" stroke="#E2DACB" stroke-width="1"/>' +
      '<rect x="84" y="74" width="20" height="12" rx="6" fill="#fff"/>' +
      '<circle cx="60" cy="80" r="28" fill="#fff"/>' +
      '<circle cx="60" cy="80" r="23" fill="url(#' + i + 'c)"/>' +
      '<path d="M60 92c-9-6-14-11-14-16a6 6 0 0 1 14-3 6 6 0 0 1 14 3c0 5-5 10-14 16z" fill="#EBD3B2" opacity=".95"/>'
    );
  };

  // A cat that is not interested in you.
  S.cat = function (v) {
    var i = uid();
    var night = v ? ['#122A3A', '#2E6A7A'] : ['#1D2A5A', '#43579A'];
    return svg(
      '<defs>' + lin(i + 'n', [[0, night[0]], [1, night[1]]]) + '</defs>' +
      '<rect width="120" height="160" fill="#171B2A"/>' +
      '<rect x="14" y="14" width="92" height="106" rx="3" fill="url(#' + i + 'n)"/>' +
      '<circle cx="84" cy="38" r="11" fill="#F3ECD0"/><circle cx="88" cy="35" r="10" fill="url(#' + i + 'n)" opacity="' + (v ? 0 : 1) + '"/>' +
      '<g fill="#fff" opacity=".8"><circle cx="30" cy="30" r=".9"/><circle cx="48" cy="44" r=".7"/><circle cx="62" cy="24" r="1"/><circle cx="34" cy="60" r=".6"/></g>' +
      '<path d="M60 14v106M14 66h92" stroke="#171B2A" stroke-width="3"/>' +
      '<rect x="6" y="118" width="108" height="8" fill="#2A2F45"/>' +
      '<g fill="#0B0D14"><ellipse cx="58" cy="104" rx="16" ry="16"/><circle cx="58" cy="80" r="11"/><path d="M48 74l2-12 7 8zM68 74l-2-12-7 8z"/><path d="M72 114c12 0 18-6 16-16-1-5 3-6 4-2 2 12-6 22-20 22z"/></g>'
    );
  };

  // The last bite.
  S.pizza = function (v) {
    var i = uid();
    var cloth = v ? '#2F6A7A' : '#C23A45';
    return svg(
      '<defs><pattern id="' + i + 'c" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#F6EFE4"/><rect width="10" height="10" fill="' + cloth + '" opacity=".85"/><rect x="10" y="10" width="10" height="10" fill="' + cloth + '" opacity=".85"/><rect x="10" width="10" height="10" fill="' + cloth + '" opacity=".35"/><rect y="10" width="10" height="10" fill="' + cloth + '" opacity=".35"/></pattern>' +
      rad(i + 's', [[0.75, '#000', 0.35], [1, '#000', 0]]) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'c)"/>' +
      '<circle cx="62" cy="84" r="46" fill="url(#' + i + 's)"/><circle cx="60" cy="80" r="42" fill="#FBFAF6"/><circle cx="60" cy="80" r="34" fill="none" stroke="#ECE6DA"/>' +
      (v
        ? '<path d="M40 70a22 22 0 1 0 40 6c-4 2-8 0-9-4-4 1-8-2-8-6-4 0-6-3-6-6-6 1-12 4-17 10z" fill="#E7A35A"/><circle cx="60" cy="80" r="6" fill="#FBFAF6"/><path d="M42 78c6-10 18-14 30-10" stroke="#F2B8C8" stroke-width="5" fill="none" stroke-linecap="round"/>'
        : '<path d="M44 64l34 8-24 30z" fill="#F7C948"/><path d="M44 64l34 8" stroke="#D99A3E" stroke-width="5" stroke-linecap="round"/><g fill="#C0392B"><circle cx="58" cy="76" r="4"/><circle cx="54" cy="88" r="3"/></g><g fill="#D99A3E"><circle cx="82" cy="96" r="1.4"/><circle cx="76" cy="102" r="1"/><circle cx="40" cy="96" r="1.2"/></g>')
    );
  };

  // The nearest staircase, from the bottom.
  S.stairs = function (v) {
    var i = uid();
    var tread = v ? '#E9E1D6' : '#F0C9A0';
    var riser = v ? '#B9AFA2' : '#D17A55';
    var wall = v ? '#8C9CB8' : '#F5DFC0';
    var steps = '';
    for (var k = 0; k < 9; k++) {
      var y = 160 - k * 15;
      var inset = k * 4.2;
      steps += '<path d="M' + (8 + inset) + ' ' + y + 'H' + (112 - inset) + 'l-2 -6H' + (10 + inset) + 'z" fill="' + tread + '"/>' +
        '<rect x="' + (10 + inset) + '" y="' + (y - 15) + '" width="' + (100 - inset * 2) + '" height="9" fill="' + riser + '"/>';
    }
    return svg(
      '<rect width="120" height="160" fill="' + wall + '"/>' + steps +
      '<path d="M0 160L120 40V0H70L0 90z" fill="#000" opacity=".16"/>' +
      '<path d="M104 150L82 30" stroke="#3A2A20" stroke-width="2"/>'
    );
  };

  // Point the camera at a light.
  S.lamp = function (v) {
    var i = uid();
    var shade = v ? '#4A68E8' : '#E8A33A';
    return svg(
      '<defs>' + lin(i + 'r', [[0, '#120D0B'], [1, '#2E2019']]) +
      rad(i + 'g', [[0, '#FFF6D6', 0.95], [0.25, '#FFD27A', 0.55], [1, '#FF9A40', 0]]) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'r)"/>' +
      '<path d="M60 0v52" stroke="#5A4A40" stroke-width="1.2"/>' +
      '<circle cx="60" cy="74" r="58" fill="url(#' + i + 'g)"/>' +
      '<path d="M42 70l-22 90h80L78 70z" fill="#FFE2A0" opacity=".08"/>' +
      '<path d="M36 72a24 24 0 0 1 48 0z" fill="' + shade + '"/>' +
      '<rect x="36" y="71" width="48" height="2.5" fill="#000" opacity=".25"/>' +
      '<circle cx="60" cy="76" r="6" fill="#FFFBEA"/>'
    );
  };

  // A shadow on a sunlit wall.
  S.shadow = function (v) {
    var i = uid();
    var wall = v ? ['#F5D7A6', '#E9B57A'] : ['#F2C46B', '#E39C46'];
    return svg(
      '<defs>' + lin(i + 'w', [[0, wall[0]], [1, wall[1]]], 1, 1) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'w)"/>' +
      '<rect y="128" width="120" height="32" fill="#B9763A" opacity=".7"/>' +
      '<g fill="#5A2E0C" opacity=".5">' +
      (v
        ? '<path d="M30 128c2-24 8-40 16-44l6-26c2-8 10-8 12 0l4 16 10-28c3-6 10-4 9 3l-9 34c6 6 8 20 8 45z"/>'
        : '<circle cx="62" cy="40" r="10"/><path d="M50 128l4-34-18-30 5-3 20 24h4l20-24 5 3-18 30 4 34h-6l-5-28h-4l-5 28z"/>') +
      '</g>' +
      '<g fill="#6A3A12" opacity=".22"><path d="M96 0c-6 20-2 30 10 40 4-14 2-28-10-40zM104 30c-10 10-10 22 0 30 6-10 6-20 0-30z"/></g>'
    );
  };

  // A view from up high.
  S.mountain = function (v) {
    var i = uid();
    var sky = v ? [[0, '#9FB8D8'], [1, '#F6D6B8']] : [[0, '#7EA6D6'], [1, '#E6EEF3']];
    return svg(
      '<defs>' + lin(i + 'k', sky) + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'k)"/>' +
      '<circle cx="86" cy="44" r="9" fill="#FFF4DC" opacity=".9"/>' +
      '<path d="M0 92l22-24 18 14 26-34 22 26 14-10 18 18v78H0z" fill="#9AAAD0"/>' +
      '<path d="M0 108l30-22 20 12 30-26 40 32v56H0z" fill="#6A7FB0"/>' +
      '<rect y="102" width="120" height="14" fill="#fff" opacity=".22"/>' +
      '<path d="M0 132l40-24 30 14 50-20v58H0z" fill="#33456E"/>' +
      '<path d="M0 148c30-6 60-8 120-2v14H0z" fill="#1F2B48"/>'
    );
  };

  // So close the petals fill the frame.
  S.flower = function (v) {
    var i = uid();
    var petal = v ? ['#FFD873', '#E8A33A'] : ['#F7B7C8', '#D9507E'];
    var heart = v ? '#5A3218' : '#F5C24A';
    var petals = '';
    for (var k = 0; k < 10; k++) {
      petals += '<ellipse cx="60" cy="48" rx="14" ry="34" fill="url(#' + i + 'p)" transform="rotate(' + (k * 36) + ' 60 82)"/>';
    }
    return svg(
      '<defs>' + lin(i + 'b', [[0, '#1F5E3C'], [1, '#2F7D4F']]) + rad(i + 'p', [[0, petal[0]], [1, petal[1]]], '50%', '20%', '90%') + '</defs>' +
      '<rect width="120" height="160" fill="url(#' + i + 'b)"/>' +
      '<g opacity=".95">' + petals + '</g>' +
      '<circle cx="60" cy="82" r="15" fill="' + heart + '"/>' +
      '<g fill="#000" opacity=".22"><circle cx="56" cy="78" r="1.4"/><circle cx="63" cy="80" r="1.4"/><circle cx="58" cy="86" r="1.4"/><circle cx="65" cy="87" r="1.2"/></g>'
    );
  };

  // A door you have never opened.
  S.door = function (v) {
    var i = uid();
    var wall = v ? '#F2D38A' : '#E9A3A8';
    var door = v ? '#3A5BD9' : '#14787B';
    var panel = v ? '#5878EA' : '#1E9599';
    return svg(
      '<rect width="120" height="160" fill="' + wall + '"/>' +
      '<g opacity=".12" fill="#000"><circle cx="18" cy="24" r="1"/><circle cx="102" cy="58" r="1.2"/><circle cx="12" cy="98" r="1"/><circle cx="106" cy="120" r="1"/></g>' +
      '<path d="M28 150V56a32 32 0 0 1 64 0v94z" fill="#F7EEE0"/>' +
      '<path d="M33 150V57a27 27 0 0 1 54 0v93z" fill="' + door + '"/>' +
      '<path d="M60 30v120" stroke="#000" stroke-width=".8" opacity=".3"/>' +
      '<g fill="' + panel + '"><rect x="38" y="70" width="18" height="30" rx="2"/><rect x="64" y="70" width="18" height="30" rx="2"/><rect x="38" y="108" width="18" height="34" rx="2"/><rect x="64" y="108" width="18" height="34" rx="2"/></g>' +
      '<circle cx="56" cy="104" r="2" fill="#E8C66A"/><circle cx="64" cy="104" r="2" fill="#E8C66A"/>' +
      '<rect x="20" y="150" width="80" height="10" fill="#9C8E80"/>'
    );
  };

  window.MOMENT_SCENES = S;
})();
