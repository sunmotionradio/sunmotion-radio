const STREAM_URL = 'https://sunmotionradioonline.duckdns.org/listen/sunmotionradio/radio.mp3';
const NOW_PLAYING_URL = 'https://sunmotionradioonline.duckdns.org/api/nowplaying/sunmotionradio';
const audio = document.getElementById('radioAudio');
const playBtn = document.getElementById('playBtn');
const playBtn2 = document.getElementById('playBtn2');
const playIcon = document.getElementById('playIcon');
const playIcon2 = document.getElementById('playIcon2');
const volume = document.getElementById('volume');
const trackTitle = document.getElementById('trackTitle');
const trackTitle2 = document.getElementById('trackTitle2');

audio.src = STREAM_URL;
audio.volume = Number(volume.value);

function setPlaying(isPlaying){
  playIcon.textContent = isPlaying ? 'Ⅱ' : '▶';
  playIcon2.textContent = isPlaying ? 'Ⅱ' : '▶';
}
async function togglePlay(){
  try{
    if(audio.paused){
      audio.load();
      await audio.play();
      setPlaying(true);
    }else{
      audio.pause();
      setPlaying(false);
    }
  }catch(e){
    alert('Browserul a blocat pornirea automată. Apasă încă o dată pe play.');
  }
}
playBtn.addEventListener('click', togglePlay);
playBtn2.addEventListener('click', togglePlay);
volume.addEventListener('input', e => audio.volume = Number(e.target.value));
audio.addEventListener('pause', () => setPlaying(false));
audio.addEventListener('playing', () => setPlaying(true));

async function updateNowPlaying(){
  try{
    const res = await fetch(NOW_PLAYING_URL, { cache: 'no-store' });
    if(!res.ok) throw new Error('No metadata');
    const data = await res.json();
    const song = data?.now_playing?.song;
    let text = song?.text || [song?.artist, song?.title].filter(Boolean).join(' - ');
    if(!text || text.trim() === '-') text = 'SunMotion Radio Live';
    trackTitle.textContent = text;
    trackTitle2.textContent = text;
  }catch(e){
    trackTitle.textContent = 'SunMotion Radio Live';
    trackTitle2.textContent = 'SunMotion Radio Live';
  }
}
updateNowPlaying();
setInterval(updateNowPlaying, 15000);

const pages = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('[data-route]')];
function showRoute(route){
  pages.forEach(p => p.classList.toggle('active-page', p.id === `page-${route}`));
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.route === route && a.closest('.nav')));
}
function handleHash(){
  const route = (location.hash || '#home').replace('#','');
  const allowed = ['home','listen-live','shadows','djs','podcast','news','about','contact'];
  showRoute(allowed.includes(route) ? route : 'home');
}
window.addEventListener('hashchange', handleHash);
handleHash();
