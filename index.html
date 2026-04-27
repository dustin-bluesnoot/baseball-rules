<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TABA Rulebook 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@300;400;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!--
    Pre-built DOM structure.
    In landing mode:  only #app is shown.
    In rulebook mode: #app is hidden, #sidebar + #main are shown.
    The renderer never needs to create or move elements — it just sets innerHTML.
  -->

  <!-- Landing / loading screen -->
  <div id="app">
    <div id="loading">
      <span class="load-icon">⚾</span>
      <p>Loading rulebook…</p>
    </div>
  </div>

  <!-- Rulebook shell — hidden until renderer fills it in -->
  <div id="sidebar" style="display:none"></div>
  <main id="main" style="display:none"></main>

  <!-- Data files must load before renderer -->
  <script src="js/bc-minor-rules.js"></script>
  <script src="js/taba-divisions.js"></script>
  <script src="js/renderer.js"></script>

  <script>
    try {
      var params   = new URLSearchParams(window.location.search);
      var division = params.get('division');
      window.Rulebook.init(division);
    } catch(err) {
      // Show the error visibly so we're never just stuck on the spinner
      document.getElementById('loading').innerHTML =
        '<span style="font-size:2rem">⚠️</span>' +
        '<p style="color:#c0392b;font-weight:bold;margin-top:.5rem">Failed to load rulebook</p>' +
        '<p style="font-size:.8rem;color:#666;max-width:400px;margin-top:.5rem">' + err.message + '</p>' +
        '<pre style="font-size:.65rem;color:#999;max-width:500px;white-space:pre-wrap;margin-top:.5rem">' + err.stack + '</pre>';
      console.error('Rulebook init failed:', err);
    }
  </script>

</body>
</html>
