/* ==========================================================
   迴歸分析知識庫：簡報共用程式
   - 在 <head> 以 <script src="theme/slides.js"></script> 載入（不要加 defer）
   - 自動加上：進度條、頁碼、上一頁／下一頁按鈕、講者備註面板
   - 操作：← → / 空白鍵 換頁、N 講者備註、F 全螢幕、Home / End
   - 繪圖小工具：window.SK（顏色、SVG 元素、亂數、座標軸）
   ========================================================== */
(function(){
  const NS = 'http://www.w3.org/2000/svg';

  /* ---------- 繪圖工具（配色與 theme/slides.css 一致） ---------- */
  const SK = window.SK = {
    C: { black:'#0e0e10', ink:'#1b1b1f', g700:'#3f3f46', g500:'#71717a', g400:'#a1a1aa',
         g300:'#d4d4d8', g200:'#e4e4e7', g100:'#f4f4f5', pink:'#ff2e7e', pinkInk:'#d6005c', pinkSoft:'#ffe3ee' },
    el(svg, tag, attrs, text){
      const e = document.createElementNS(NS, tag);
      for (const k in attrs) e.setAttribute(k, attrs[k]);
      if (text !== undefined) e.textContent = text;
      svg.appendChild(e); return e;
    },
    rng(seed){ return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; },
    gauss(r){ let u = 0, v = 0; while(!u) u = r(); while(!v) v = r(); return Math.sqrt(-2*Math.log(u)) * Math.cos(2*Math.PI*v); },
    axes(svg, x0, y0, x1, y1, xl, yl){
      const C = SK.C;
      SK.el(svg,'line',{x1:x0,y1:y0,x2:x1,y2:y0,stroke:C.g400,'stroke-width':1.5});
      SK.el(svg,'line',{x1:x0,y1:y0,x2:x0,y2:y1,stroke:C.g400,'stroke-width':1.5});
      if (xl) SK.el(svg,'text',{x:x1,y:y0+22,'text-anchor':'end','font-size':14,fill:C.g500},xl);
      if (yl) SK.el(svg,'text',{x:x0-8,y:y1+4,'text-anchor':'end','font-size':14,fill:C.g500},yl);
    }
  };

  /* ---------- 換頁引擎 ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    const deck = document.getElementById('deck');
    const slides = [...document.querySelectorAll('.slide')];
    if (!deck || !slides.length) return;

    document.body.insertAdjacentHTML('beforeend',
      '<div id="progress"></div>' +
      '<button class="navbtn" id="prev" aria-label="上一頁">‹</button>' +
      '<button class="navbtn" id="next" aria-label="下一頁">›</button>' +
      '<div id="counter"></div>' +
      '<div id="help">← → 換頁 · N 講者備註 · F 全螢幕</div>' +
      '<div id="notes-panel"><h4>講者備註</h4><div id="notes-body"></div></div>');

    slides.forEach((s, i) => {
      if (i === 0) return;
      const n = document.createElement('div');
      n.className = 'pageno';
      n.textContent = String(i + 1).padStart(2, '0');
      s.appendChild(n);
    });

    let cur = 0;
    const fit = () => { const s = Math.min(innerWidth / 1340, innerHeight / 770); deck.style.transform = `scale(${s})`; };
    const show = i => {
      cur = Math.max(0, Math.min(slides.length - 1, i));
      slides.forEach((s, k) => s.classList.toggle('active', k === cur));
      document.getElementById('counter').textContent = `${cur + 1} / ${slides.length}`;
      document.getElementById('progress').style.width = `${(cur + 1) / slides.length * 100}%`;
      const n = slides[cur].querySelector('.notes');
      document.getElementById('notes-body').textContent = n ? n.textContent.trim() : '（這一頁沒有備註）';
      try { history.replaceState(null, '', '#' + (cur + 1)); } catch (e) {}
    };
    const fromHash = () => (parseInt(location.hash.slice(1)) || 1) - 1;

    document.getElementById('prev').onclick = () => show(cur - 1);
    document.getElementById('next').onclick = () => show(cur + 1);
    addEventListener('keydown', e => {
      if (e.target.closest && e.target.closest('input,textarea')) return;
      if (['ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); show(cur + 1); }
      else if (['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); show(cur - 1); }
      else if (e.key === 'Home') show(0);
      else if (e.key === 'End') show(slides.length - 1);
      else if (e.key === 'n' || e.key === 'N') document.getElementById('notes-panel').classList.toggle('show');
      else if (e.key === 'f' || e.key === 'F') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    });
    let tx = null;
    addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
    addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); tx = null; });
    addEventListener('hashchange', () => { const n = fromHash(); if (n !== cur) show(n); });
    addEventListener('resize', fit);
    fit(); show(fromHash());
  });
})();
