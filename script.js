<!doctype html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SunMotion Radio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Great+Vibes&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="bg"></div>
  <div class="shade"></div>

  <header class="topbar">
    <a class="brand" href="#home" data-route="home" aria-label="SunMotion Radio Home">
      <span class="coin">SM</span>
      <span class="brand-script">SunMotionRadio</span>
    </a>
    <nav class="nav" aria-label="Main menu">
      <a href="#home" data-route="home" class="active">HOME</a>
      <a href="#listen-live" data-route="listen-live">LISTEN LIVE</a>
      <a href="#shadows" data-route="shadows">SHADOWS</a>
      <a href="#djs" data-route="djs">DJs</a>
      <a href="https://xat.com/SunMotion_Radio" target="_blank" rel="noopener">CHAT</a>
      <a href="#podcast" data-route="podcast">PODCAST</a>
      <a href="#news" data-route="news">NEWS</a>
      <a href="#about" data-route="about">ABOUT</a>
      <a href="#contact" data-route="contact">CONTACT</a>
    </nav>
  </header>

  <main>
    <section id="page-home" class="page active-page hero">
      <div class="logo-mark" aria-label="SunMotion Radio logo">
        <div class="sun">☀</div>
        <div class="script">SunMotion</div>
        <div class="radio">RADIO</div>
        <div class="beat"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <p class="tagline">Live Music, good vibes &amp; non-stop energy <span>♡</span></p>

      <div class="player glass" id="mainPlayer">
        <button class="play" id="playBtn" aria-label="Play radio"><span id="playIcon">▶</span></button>
        <div class="trackbox">
          <div class="label">NOW PLAYING</div>
          <div class="track" id="trackTitle">Se încarcă piesa...</div>
          <div class="station">SunMotion Radio Live</div>
        </div>
        <div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="volume-wrap">
          <span class="speaker">🔊</span>
          <input type="range" id="volume" min="0" max="1" step="0.01" value="0.75" aria-label="Volume" />
        </div>
        <div class="live-dot"><b></b> LIVE</div>
      </div>

      <div class="cards">
        <a class="card" href="#listen-live" data-route="listen-live"><span>🎧</span><b>LISTEN LIVE</b></a>
        <a class="card" href="https://xat.com/SunMotion_Radio" target="_blank" rel="noopener"><span>💬</span><b>LIVE CHAT</b></a>
        <a class="card" href="#djs" data-route="djs"><span>🎙</span><b>DJs</b></a>
        <a class="card" href="#news" data-route="news"><span>📰</span><b>NEWS</b></a>
      </div>
    </section>

    <section id="page-listen-live" class="page inner">
      <h1>Listen Live</h1>
      <div class="mini-player glass">
        <button class="play small" id="playBtn2" aria-label="Play radio"><span id="playIcon2">▶</span></button>
        <div><div class="label">NOW PLAYING</div><div class="track mini" id="trackTitle2">Se încarcă piesa...</div></div>
        <div class="live-dot"><b></b> LIVE</div>
      </div>
    </section>
    <section id="page-shadows" class="page inner empty"><h1>Shadows</h1></section>
    <section id="page-djs" class="page inner empty"><h1>DJs</h1></section>
    <section id="page-podcast" class="page inner empty"><h1>Podcast</h1></section>
    <section id="page-news" class="page inner empty"><h1>News</h1></section>
    <section id="page-about" class="page inner empty"><h1>About</h1></section>
    <section id="page-contact" class="page inner empty"><h1>Contact</h1></section>
  </main>

  <footer>
    <div class="onair">🎙 ON AIR 24/7</div>
    <small>© 2026 SunMotion Radio. All rights reserved.</small>
  </footer>

  <audio id="radioAudio" preload="none" crossorigin="anonymous">
    <source src="https://sunmotionradioonline.duckdns.org/listen/sunmotionradio/radio.mp3" type="audio/mpeg" />
  </audio>
  <script src="script.js"></script>
</body>
</html>
