// ===== STATE =====
let currentIdx = 0;
let historyStack = [];
let shuffledOrder = [];
let currentSenseGroupId = null;
let currentOptions = [];
let answered = false;
let progress = JSON.parse(localStorage.getItem('topik_progress') || '{}');
if (Object.values(progress).some(v => typeof v === 'string')) {
  progress = {};
  localStorage.setItem('topik_progress', JSON.stringify(progress));
}
let lastTapTime = [0, 0, 0, 0];

// ===== STAR STATE =====
let starred = JSON.parse(localStorage.getItem('topik_starred') || '[]'); // array of grammar IDs
let starMode = false;          // are we in star-only mode?
let starModeOrder = [];        // shuffled indices of starred grammars
let starModeIdx = 0;

function saveStarred() {
  localStorage.setItem('topik_starred', JSON.stringify(starred));
}
function isStarred(grammarId) {
  return starred.includes(grammarId);
}
function toggleStar(grammarId) {
  const idx = starred.indexOf(grammarId);
  if (idx >= 0) starred.splice(idx, 1);
  else starred.push(grammarId);
  saveStarred();
  updateStarCount();
}
function updateStarCount() {
  document.getElementById('starCount').textContent = starred.length;
  // Update star mode button appearance
  const btn = document.getElementById('btnStarMode');
  if (starMode) btn.classList.add('active');
  else btn.classList.remove('active');
  // Update current card A star button
  const g = grammarData[shuffledOrder[currentIdx]];
  if (g) syncStarButtonA(g.id);
}

function syncStarButtonA(grammarId) {
  const btn = document.getElementById('btnStarA');
  if (!btn) return;
  btn.textContent = isStarred(grammarId) ? '⭐' : '☆';
  btn.classList.toggle('starred', isStarred(grammarId));
}

function syncStarButtonOpt(optIdx) {
  const btn = document.querySelector(`.btn-star-opt[data-idx="${optIdx}"]`);
  if (!btn) return;
  const opt = currentOptions[optIdx];
  if (!opt || opt.grammar.id < 0) { btn.textContent = '☆'; btn.classList.remove('starred'); return; }
  const st = isStarred(opt.grammar.id);
  btn.textContent = st ? '⭐' : '☆';
  btn.classList.toggle('starred', st);
}

// ===== STAR MODE =====
function buildStarModeOrder() {
  // Map starred IDs → grammarData indices, then find position in shuffledOrder
  starModeOrder = [];
  starred.forEach(id => {
    const globalIdx = grammarData.findIndex(g => g.id === id);
    if (globalIdx >= 0) starModeOrder.push(globalIdx);
  });
  starModeOrder = shuffle(starModeOrder);
  starModeIdx = 0;
}

function toggleStarMode() {
  if (starred.length === 0) {
    alert('Chưa có ngữ pháp nào được đánh sao! Hãy bấm ☆ trên thẻ để thêm.');
    return;
  }
  starMode = !starMode;
  const btn = document.getElementById('btnStarMode');
  const banner = document.getElementById('starModeBanner');

  if (starMode) {
    btn.classList.add('active');
    document.getElementById('starModeLabel').textContent = 'Thoát sao';
    banner.classList.add('visible');
    buildStarModeOrder();
    // Inject star order into shuffledOrder position mechanism
    jumpToGlobalIdx(starModeOrder[0]);
  } else {
    btn.classList.remove('active');
    document.getElementById('starModeLabel').textContent = 'Ôn sao';
    banner.classList.remove('visible');
    updateStarCount();
  }
}

function jumpToGlobalIdx(globalIdx) {
  const pos = shuffledOrder.indexOf(globalIdx);
  if (pos >= 0) {
    historyStack.push(currentIdx);
    currentIdx = pos;
  } else {
    // Not in shuffled order — insert at next position
    shuffledOrder.splice(currentIdx + 1, 0, globalIdx);
    historyStack.push(currentIdx);
    currentIdx = currentIdx + 1;
  }
  updateBackButton();
  renderQuestion();
}

function nextInStarMode() {
  if (!starMode) return false;
  starModeIdx++;
  if (starModeIdx >= starModeOrder.length) {
    // Finished all starred — reshuffle and restart
    buildStarModeOrder();
    const banner = document.getElementById('starModeBanner');
    banner.textContent = `⭐ Đã ôn xong ${starred.length} từ sao — bắt đầu lại!`;
    setTimeout(() => {
      banner.textContent = `⭐ Chế độ ôn sao (${starred.length} từ)`;
    }, 2500);
  }
  jumpToGlobalIdx(starModeOrder[starModeIdx]);
  return true;
}

// ===== STAR LIST MODAL =====
function showStarList() {
  if (starred.length === 0) {
    openModal('Danh sách đã đánh sao ⭐', `<div class="star-list-empty">⭐<p>Chưa có từ nào được đánh sao.<br>Bấm ☆ trên thẻ để thêm vào đây.</p></div>`);
    return;
  }

  const listHtml = `<ul class="grammar-list" id="starListUl">${starred.map(id => {
    const g = grammarData.find(gd => gd.id === id);
    if (!g) return '';
    const globalIdx = grammarData.findIndex(gd => gd.id === id);
    return `<li data-goto="${globalIdx}" data-grammar-id="${id}" style="display:flex; justify-content:space-between; align-items:center;">
      <div style="display:flex;align-items:center;gap:8px;flex:1;">
        <button class="btn-star-list starred" data-grammar-id="${id}" title="Bỏ sao">⭐</button>
        <div style="flex:1;"><span class="gl-name">${g.grammar}</span>
        <span class="gl-meaning">${g.senses.map(s => s.meaning).join(' / ')}</span></div>
      </div>
      <button class="btn-copy-list" data-copy="${g.grammar.replace(/"/g, '&quot;')}" title="Copy">📋</button>
    </li>`;
  }).join('')}</ul>`;

  openModal(`Danh sách đã đánh sao ⭐ (${starred.length} từ)`, listHtml);

  setTimeout(() => {
    document.querySelectorAll('#starListUl li[data-goto]').forEach(li => {
      li.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const globalIdx = parseInt(li.dataset.goto);
        jumpToGlobalIdx(globalIdx);
        closeModal();
      });
    });

    document.querySelectorAll('#starListUl .btn-star-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.grammarId);
        toggleStar(id);
        // Remove from list UI
        const li = btn.closest('li');
        li.style.transition = 'opacity 0.2s';
        li.style.opacity = '0';
        setTimeout(() => {
          li.remove();
          const remaining = document.querySelectorAll('#starListUl li').length;
          document.getElementById('modalTitle').textContent = `Danh sách đã đánh sao ⭐ (${remaining} từ)`;
          if (remaining === 0) {
            document.getElementById('modalBody').innerHTML = `<div class="star-list-empty">⭐<p>Danh sách trống.</p></div>`;
          }
        }, 200);
      });
    });

    document.querySelectorAll('#starListUl .btn-copy-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
          const old = btn.innerHTML; btn.innerHTML = '✅';
          setTimeout(() => btn.innerHTML = old, 1000);
        });
      });
    });
  }, 50);
}

// ===== UTILS =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRelatedIds(grammarItem) {
  const relatedIds = new Set();
  grammarItem.senses.forEach(s => {
    const group = synonymGroups.find(g => g.id === s.groupId);
    if (group) group.grammarIds.forEach(id => relatedIds.add(id));
  });
  return relatedIds;
}

function generateOptions(mainGrammar, senseGroupId) {
  const group = synonymGroups.find(g => g.id === senseGroupId);
  const correctCandidateIds = group
    ? group.grammarIds.filter(id => id !== mainGrammar.id)
    : [];

  const excludeIds = getRelatedIds(mainGrammar);
  excludeIds.add(mainGrammar.id);

  const wrongPool = grammarData.filter(g => !excludeIds.has(g.id));

  let correctGrammar = null;
  if (correctCandidateIds.length > 0) {
    const cid = correctCandidateIds[Math.floor(Math.random() * correctCandidateIds.length)];
    correctGrammar = grammarData.find(g => g.id === cid);
  } else {
    const pattern = (mainGrammar.synonymPatterns && mainGrammar.synonymPatterns.length > 0)
      ? mainGrammar.synonymPatterns[0]
      : "(Không có đồng nghĩa)";
    correctGrammar = {
      id: -2, grammar: pattern,
      senses: [{ meaning: group ? group.label : "Đồng nghĩa" }],
      synonymPatterns: [], examples: [], ownExamples: []
    };
  }

  const wrongItems = shuffle(wrongPool).slice(0, correctGrammar ? 3 : 4);
  let options = [];
  if (correctGrammar) {
    options = shuffle([
      { grammar: correctGrammar, isCorrect: true },
      ...wrongItems.map(g => ({ grammar: g, isCorrect: false }))
    ]);
  } else {
    options = wrongItems.map(g => ({ grammar: g, isCorrect: false }));
  }
  while (options.length < 4) {
    options.push({ grammar: { id: -1, grammar: '—', senses: [{ meaning: '—' }], synonymPatterns: [], examples: [], ownExamples: [] }, isCorrect: false });
  }
  return options.slice(0, 4);
}

function getOwnExamples(grammarItem) {
  if (grammarItem.ownExamples && grammarItem.ownExamples.length > 0) return grammarItem.ownExamples;
  if (grammarItem.examples && grammarItem.examples.length > 0) return [grammarItem.examples[0]];
  return [];
}

// ===== RENDER =====
function renderQuestion() {
  answered = false;
  lastTapTime = [0, 0, 0, 0];
  const g = grammarData[shuffledOrder[currentIdx]];

  const sense = g.senses[Math.floor(Math.random() * g.senses.length)];
  currentSenseGroupId = sense.groupId;

  document.getElementById('mainGrammar').textContent = g.grammar;
  document.getElementById('mainMeaning').textContent = sense.meaning;
  document.getElementById('mainNotes').textContent = g.notes || '';
  document.getElementById('cardA').classList.remove('flipped');

  const grp = synonymGroups.find(gr => gr.id === sense.groupId);
  const badge = document.getElementById('senseBadge');
  badge.textContent = grp ? grp.label : sense.meaning;
  if (document.getElementById('toggleTopic').checked) badge.classList.remove('hidden');
  else badge.classList.add('hidden');

  // Sync star button A
  syncStarButtonA(g.id);

  currentOptions = generateOptions(g, sense.groupId);
  currentOptions.forEach((opt, i) => {
    document.getElementById(`optG${i}`).textContent = opt.grammar.grammar;
    const m = opt.grammar.senses ? opt.grammar.senses.map(s => s.meaning).join(', ') : '';
    document.getElementById(`optM${i}`).textContent = m;
    document.getElementById(`cardB${i}`).classList.remove('flipped');
    const wrap = document.querySelectorAll('.option-wrap')[i];
    wrap.classList.remove('correct', 'wrong', 'reveal-correct');
    syncStarButtonOpt(i);
  });

  updateProgress();
}

function updateProgress() {
  const total = grammarData.length;
  let done = 0;
  grammarData.forEach(g => {
    const uniqueGroupIds = new Set(g.senses.map(s => s.groupId));
    if (progress[g.id] && progress[g.id].length >= uniqueGroupIds.size) done++;
  });
  document.getElementById('progressFill').style.width = `${(done / total) * 100}%`;
  document.getElementById('progressText').textContent = `${done} / ${total}`;
}

// ===== ANSWER =====
function selectAnswer(idx) {
  if (answered) return;
  const wraps = document.querySelectorAll('.option-wrap');
  if (wraps[idx].classList.contains('wrong')) return;

  const g = grammarData[shuffledOrder[currentIdx]];
  const revealMode = document.getElementById('toggleReveal').checked;

  if (currentOptions[idx].isCorrect) {
    answered = true;
    wraps[idx].classList.add('correct');
    if (!progress[g.id]) progress[g.id] = [];
    if (!progress[g.id].includes(currentSenseGroupId)) progress[g.id].push(currentSenseGroupId);
    localStorage.setItem('topik_progress', JSON.stringify(progress));
    updateProgress();
  } else {
    wraps[idx].classList.add('wrong');
    if (revealMode) {
      answered = true;
      currentOptions.forEach((opt, i) => {
        if (opt.isCorrect) wraps[i].classList.add('reveal-correct');
      });
      localStorage.setItem('topik_progress', JSON.stringify(progress));
      updateProgress();
    }
  }
}

function nextQuestion() {
  if (starMode && nextInStarMode()) return;
  historyStack.push(currentIdx);
  updateBackButton();
  currentIdx = (currentIdx + 1) % shuffledOrder.length;
  renderQuestion();
}

function updateBackButton() {
  const btnPrev = document.getElementById('btnPrev');
  if (btnPrev) btnPrev.style.display = historyStack.length > 0 ? 'block' : 'none';
}

// ===== MODAL =====
function openModal(title, bodyHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalOverlay').classList.add('active');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

function showSynonyms(grammarItem) {
  const allGroups = grammarItem.senses.map(s => {
    const grp = synonymGroups.find(g => g.id === s.groupId);
    const members = grp ? grp.grammarIds
      .filter(id => id !== grammarItem.id)
      .map(id => grammarData.find(g => g.id === id))
      .filter(Boolean) : [];

    const memberGrammars = new Set(members.map(m => m.grammar));
    const allPatternsInGroup = new Set();
    members.forEach(m => { (m.synonymPatterns || []).forEach(p => allPatternsInGroup.add(p)); });
    (grammarItem.synonymPatterns || []).forEach(p => allPatternsInGroup.add(p));
    memberGrammars.add(grammarItem.grammar);
    const uniquePatterns = [...allPatternsInGroup].filter(p => !memberGrammars.has(p));

    let nuancesHtml = '';
    if (grp && grp.nuances && grp.nuances.length > 0) {
      nuancesHtml = `<div class="nuance-box">
        <div class="nuance-title">💡 Phân biệt & Lưu ý:</div>
        <ul>${grp.nuances.map(n => `<li>${n}</li>`).join('')}</ul>
      </div>`;
    }

    const makeStarBtn = (gId) => {
      const st = isStarred(gId);
      return `<button class="btn-star-list${st ? ' starred' : ''}" data-grammar-id="${gId}" title="${st ? 'Bỏ sao' : 'Đánh sao'}">${st ? '⭐' : '☆'}</button>`;
    };

    return `<div style="margin-bottom:12px">
      <div style="font-size:0.8rem;color:var(--text2);margin-bottom:4px">${s.meaning}</div>
      <ul class="syn-list">
        ${uniquePatterns.map(p => {
      const matchingGrammar = grammarData.find(g => g.grammar === p);
      if (matchingGrammar) {
        return `<li style="display:flex;justify-content:space-between;align-items:center;">
              <div style="display:flex;align-items:center;gap:6px;">
                ${makeStarBtn(matchingGrammar.id)}
                <span>${p}</span>
                <button class="btn-copy-list" data-copy="${p.replace(/"/g, '&quot;')}" title="Copy" style="background:none;border:none;cursor:pointer;color:var(--text2);font-size:0.9rem;padding:4px;">📋</button>
              </div>
              <button class="btn-jump" data-target-id="${matchingGrammar.id}" title="Nhảy đến" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:1.2rem;padding:4px;">➔</button>
            </li>`;
      } else {
        return `<li style="display:flex;justify-content:space-between;align-items:center;">
              <span>${p}</span>
              <button class="btn-copy-list" data-copy="${p.replace(/"/g, '&quot;')}" title="Copy" style="background:none;border:none;cursor:pointer;color:var(--text2);font-size:0.9rem;padding:4px;">📋</button>
            </li>`;
      }
    }).join('')}
        ${members.map(m => `<li style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:6px;">
            ${makeStarBtn(m.id)}
            <span>${m.grammar}</span>
            <button class="btn-copy-list" data-copy="${m.grammar.replace(/"/g, '&quot;')}" title="Copy" style="background:none;border:none;cursor:pointer;color:var(--text2);font-size:0.9rem;padding:4px;">📋</button>
          </div>
          <button class="btn-jump" data-target-id="${m.id}" title="Nhảy đến" style="background:none;border:none;cursor:pointer;color:var(--accent);font-size:1.2rem;padding:4px;">➔</button>
        </li>`).join('')}
      </ul>
      ${nuancesHtml}
    </div>`;
  }).join('');

  openModal(`Đồng nghĩa: ${grammarItem.grammar}`, allGroups);

  setTimeout(() => {
    // Star buttons in synonym list
    document.querySelectorAll('#modal .btn-star-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.grammarId);
        toggleStar(id);
        const st = isStarred(id);
        btn.textContent = st ? '⭐' : '☆';
        btn.classList.toggle('starred', st);
        // Also update card A if it's the same grammar
        const g = grammarData[shuffledOrder[currentIdx]];
        if (g && g.id === id) syncStarButtonA(id);
      });
    });

    document.querySelectorAll('.btn-jump').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = parseInt(btn.dataset.targetId);
        const targetGlobalIdx = grammarData.findIndex(g => g.id === targetId);
        if (targetGlobalIdx >= 0) {
          jumpToGlobalIdx(targetGlobalIdx);
          closeModal();
        }
      });
    });

    document.querySelectorAll('.btn-copy-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
          const old = btn.innerHTML; btn.innerHTML = '✅';
          setTimeout(() => btn.innerHTML = old, 1000);
        });
      });
    });
  }, 50);
}

function showExamples(grammarItem) {
  const exs = getOwnExamples(grammarItem);
  const html = exs.map(e => {
    let block = `<p>${e.sentence}</p>`;
    if (e.translation) block += `<p class="ex-translation">→ ${e.translation}</p>`;
    return block;
  }).join('');
  openModal(`Câu mẫu: ${grammarItem.grammar}`, html || '<p style="color:var(--text2)">Chưa có câu mẫu</p>');
}

function showGrammarList() {
  const searchHtml = `<div class="search-wrap" style="margin-bottom:16px;position:sticky;top:0;z-index:10;background:var(--bg2);padding-bottom:10px;">
    <input type="text" id="grammarSearchInput" placeholder="Tìm kiếm ngữ pháp / tiếng Việt..." style="width:100%;padding:10px 14px;border:1px solid var(--glass-border);border-radius:8px;background:var(--surface);color:var(--text);font-size:0.95rem;outline:none;" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--glass-border)'">
  </div>`;

  const listHtml = `<ul class="grammar-list" id="grammarListUl">${grammarData.map((g, i) => {
    const uniqueGroupIds = new Set(g.senses.map(s => s.groupId));
    const totalSenses = uniqueGroupIds.size;
    const completedSenses = progress[g.id] ? progress[g.id].length : 0;
    let cls = 'todo', label = '—';
    if (completedSenses === totalSenses) { cls = 'done'; label = '✓'; }
    else if (completedSenses > 0) { cls = 'partial'; label = `(${completedSenses}/${totalSenses})`; }

    const st = isStarred(g.id);
    const searchStr = (g.grammar + ' ' + g.senses.map(s => s.meaning).join(' ')).toLowerCase();

    return `<li data-goto="${i}" data-search="${searchStr.replace(/"/g, '&quot;')}" style="display:flex; justify-content:space-between; align-items:center;">
      <div style="display:flex;align-items:center;gap:8px;flex:1;">
        <button class="btn-star-list${st ? ' starred' : ''}" data-grammar-id="${g.id}" title="${st ? 'Bỏ sao' : 'Đánh sao'}">${st ? '⭐' : '☆'}</button>
        <button class="btn-copy-list" data-copy="${g.grammar.replace(/"/g, '&quot;')}" title="Copy">📋</button>
        <div style="flex:1;"><span class="gl-name">${g.grammar}</span>
        <span class="gl-meaning">${g.senses.map(s => s.meaning).join(' / ')}</span></div>
      </div>
      <span class="gl-status ${cls}" style="font-size:0.85rem;font-weight:600;margin-left:8px;">${label}</span>
    </li>`;
  }).join('')}</ul>`;

  openModal('Danh sách ngữ pháp', searchHtml + listHtml);

  setTimeout(() => {
    document.querySelectorAll('#grammarListUl li[data-goto]').forEach(li => {
      li.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const grammarIdx = parseInt(li.dataset.goto);
        jumpToGlobalIdx(grammarIdx);
        closeModal();
      });
    });

    document.querySelectorAll('#grammarListUl .btn-star-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.grammarId);
        toggleStar(id);
        const st = isStarred(id);
        btn.textContent = st ? '⭐' : '☆';
        btn.classList.toggle('starred', st);
        const g = grammarData[shuffledOrder[currentIdx]];
        if (g && g.id === id) syncStarButtonA(id);
      });
    });

    const searchInput = document.getElementById('grammarSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('#grammarListUl li[data-goto]').forEach(li => {
          li.style.display = li.dataset.search.includes(term) ? '' : 'none';
        });
      });
    }

    document.querySelectorAll('#grammarListUl .btn-copy-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
          const old = btn.innerHTML; btn.innerHTML = '✅';
          setTimeout(() => btn.innerHTML = old, 1000);
        });
      });
    });
  }, 50);
}

function showHelp() {
  const kbdStyle = "display:inline-block;background:rgba(255,255,255,0.15);padding:2px 6px;border-radius:4px;font-size:0.8rem;font-family:monospace;border:1px solid var(--glass-border);color:var(--text);";
  const html = `
    <div style="font-size:0.95rem;line-height:1.7;color:var(--text);">
      <p style="margin-bottom:8px;"><b>1. Lật thẻ (Xem nghĩa):</b></p>
      <ul style="margin-left:20px;margin-bottom:16px;"><li>Bấm vào thẻ hoặc nhấn <kbd style="${kbdStyle}">Space</kbd>.</li></ul>

      <p style="margin-bottom:8px;"><b>2. Chọn đáp án (4 thẻ nhỏ):</b></p>
      <ul style="margin-left:20px;margin-bottom:16px;">
        <li><b>Máy tính:</b> Nhấn phím <kbd style="${kbdStyle}">1</kbd>–<kbd style="${kbdStyle}">4</kbd> hoặc click đúp chuột.</li>
        <li><b>Điện thoại:</b> Chạm 2 lần (double-tap) vào thẻ.</li>
      </ul>

      <p style="margin-bottom:8px;"><b>3. Tiếp theo / Quay lại:</b></p>
      <ul style="margin-left:20px;margin-bottom:16px;">
        <li>Nút "Tiếp theo" hoặc phím <kbd style="${kbdStyle}">5</kbd> / <kbd style="${kbdStyle}">→</kbd>.</li>
        <li>Nút "Quay lại" hoặc phím <kbd style="${kbdStyle}">←</kbd>.</li>
      </ul>

      <p style="margin-bottom:8px;"><b>4. Hệ thống đánh sao ⭐:</b></p>
      <ul style="margin-left:20px;margin-bottom:16px;">
        <li>Bấm <b>☆</b> trên thẻ để đánh dấu, bấm lại để bỏ.</li>
        <li>Bấm nút <b>⭐ Ôn sao</b> để chỉ học các từ đã đánh sao. Học xong hết tự động lặp lại.</li>
        <li>Bấm nút <b>☆ 0</b> để xem và quản lý danh sách sao.</li>
        <li>Dấu sao cũng xuất hiện trong danh sách ngữ pháp và danh sách đồng nghĩa.</li>
      </ul>

      <p style="margin-bottom:8px;"><b>5. Tính năng khác:</b></p>
      <ul style="margin-left:20px;margin-bottom:16px;">
        <li><b style="color:var(--accent);font-size:1.1rem;">➔</b> <b>Nhảy nhanh:</b> Trong danh sách đồng nghĩa, bấm mũi tên để nhảy sang thẻ đó.</li>
        <li><b>📋 Copy:</b> Sao chép nhanh tên ngữ pháp hoặc nghĩa.</li>
        <li><b>Hiện CĐ / Hiện ĐA:</b> Bật/tắt hiển thị chủ đề hoặc tự động hiện đáp án đúng khi chọn sai.</li>
      </ul>
    </div>`;
  openModal('Hướng dẫn sử dụng', html);
}

// ===== DOUBLE TAP =====
let tapTimers = [null, null, null, null];
function handleOptionTap(idx) {
  if (tapTimers[idx]) {
    clearTimeout(tapTimers[idx]);
    tapTimers[idx] = null;
    selectAnswer(idx);
  } else {
    tapTimers[idx] = setTimeout(() => {
      tapTimers[idx] = null;
      document.getElementById(`cardB${idx}`).classList.toggle('flipped');
    }, 200);
  }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Card A flip
  document.getElementById('cardA').addEventListener('click', function (e) {
    if (e.target.closest('button')) return;
    this.classList.toggle('flipped');
  });

  // Card B tap
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cardB${i}`).addEventListener('click', function (e) {
      if (e.target.closest('button')) return;
      handleOptionTap(i);
    });
  }

  // Star button on card A
  document.getElementById('btnStarA').addEventListener('click', (e) => {
    e.stopPropagation();
    const g = grammarData[shuffledOrder[currentIdx]];
    if (g) {
      toggleStar(g.id);
      syncStarButtonA(g.id);
    }
  });

  // Star buttons on option cards
  document.querySelectorAll('.btn-star-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = parseInt(btn.dataset.idx);
      const opt = currentOptions[i];
      if (!opt || opt.grammar.id < 0) return;
      toggleStar(opt.grammar.id);
      syncStarButtonOpt(i);
    });
  });

  // Synonym/Example on card A
  document.getElementById('btnSynA').addEventListener('click', () => {
    const g = grammarData[shuffledOrder[currentIdx]];
    if (g) showSynonyms(g);
  });
  document.getElementById('btnExA').addEventListener('click', () => {
    const g = grammarData[shuffledOrder[currentIdx]];
    if (g) showExamples(g);
  });

  // Synonym/Example on option cards
  document.querySelectorAll('.btn-sm').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      const opt = currentOptions[idx];
      if (!opt || opt.grammar.id === -1) return;
      if (btn.dataset.type === 'syn') showSynonyms(opt.grammar);
      else showExamples(opt.grammar);
    });
  });

  // Copy buttons on cards
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let text = '';
      if (btn.classList.contains('copy-btn-a')) text = document.getElementById('mainGrammar').innerText;
      else if (btn.classList.contains('copy-btn-a-back')) text = document.getElementById('mainMeaning').innerText;
      else if (btn.classList.contains('copy-btn-b')) text = document.getElementById(`optG${btn.dataset.idx}`).innerText;
      if (text && text !== '—') {
        navigator.clipboard.writeText(text).then(() => {
          const old = btn.innerHTML; btn.innerHTML = '✅';
          setTimeout(() => btn.innerHTML = old, 1000);
        });
      }
    });
  });

  // Back button
  const btnPrev = document.getElementById('btnPrev');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (historyStack.length > 0) {
        currentIdx = historyStack.pop();
        renderQuestion();
        updateBackButton();
      }
    });
  }

  // Next button
  document.getElementById('btnNext').addEventListener('click', nextQuestion);

  // Star mode button
  document.getElementById('btnStarMode').addEventListener('click', toggleStarMode);

  // Star list button
  document.getElementById('btnStarList').addEventListener('click', showStarList);

  // Mobile Settings Toggle
  const btnSettings = document.getElementById('btnSettings');
  const headerSettings = document.getElementById('headerSettings');
  if (btnSettings && headerSettings) {
    btnSettings.addEventListener('click', (e) => {
      e.stopPropagation();
      headerSettings.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!headerSettings.contains(e.target) && e.target !== btnSettings) {
        headerSettings.classList.remove('active');
      }
    });
  }

  // Mobile Nav Buttons
  document.getElementById('navPrev').addEventListener('click', () => {
    if (historyStack.length > 0) {
      currentIdx = historyStack.pop();
      renderQuestion();
      updateBackButton();
    }
  });
  document.getElementById('navNext').addEventListener('click', nextQuestion);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('modalOverlay').classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      return;
    }
    if (e.key >= '1' && e.key <= '4') selectAnswer(parseInt(e.key) - 1);
    if (e.key === '5' || e.key === 'ArrowRight') nextQuestion();
    if (e.key === 'ArrowLeft' && historyStack.length > 0) {
      currentIdx = historyStack.pop();
      renderQuestion();
      updateBackButton();
    }
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      document.getElementById('cardA').classList.toggle('flipped');
    }
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Toggles
  document.getElementById('toggleTopic').addEventListener('change', (e) => {
    const badge = document.getElementById('senseBadge');
    if (e.target.checked) badge.classList.remove('hidden');
    else badge.classList.add('hidden');
    // Mobile auto-close settings
    if (window.innerWidth <= 768) {
      const headerSettings = document.getElementById('headerSettings');
      if (headerSettings) headerSettings.classList.remove('active');
    }
  });

  document.getElementById('toggleReveal').addEventListener('change', () => {
    // Mobile auto-close settings
    if (window.innerWidth <= 768) {
      const headerSettings = document.getElementById('headerSettings');
      if (headerSettings) headerSettings.classList.remove('active');
    }
  });

  // Header buttons
  document.getElementById('btnGrammarList').addEventListener('click', showGrammarList);
  document.getElementById('btnHelp').addEventListener('click', showHelp);
  document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm('Reset toàn bộ tiến trình?')) {
      progress = {};
      localStorage.removeItem('topik_progress');
      updateProgress();
    }
  });

  // Init
  shuffledOrder = shuffle(grammarData.map((_, i) => i));
  currentIdx = 0;
  updateStarCount();
  renderQuestion();
  // showHelp(); // Tắt tự động hiện hướng dẫn
});