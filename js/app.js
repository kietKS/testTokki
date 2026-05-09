// ===== STATE =====
let currentIdx = 0;           // index into shuffledOrder
let shuffledOrder = [];       // randomized list of grammarData indices
let currentSenseGroupId = null;
let currentOptions = [];
let answered = false;
let progress = JSON.parse(localStorage.getItem('topik_progress') || '{}');
// Migration: if progress values are strings (old format), wipe to start fresh
if (Object.values(progress).some(v => typeof v === 'string')) {
  progress = {};
  localStorage.setItem('topik_progress', JSON.stringify(progress));
}
let lastTapTime = [0, 0, 0, 0];

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
    // FAKE a correct grammar so the user can pass senses that have no other IDs in their group
    const pattern = (mainGrammar.synonymPatterns && mainGrammar.synonymPatterns.length > 0)
      ? mainGrammar.synonymPatterns[0]
      : "(Không có đồng nghĩa)";
      
    correctGrammar = {
      id: -2,
      grammar: pattern,
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

// Get only the grammar's OWN examples (not synonym examples)
function getOwnExamples(grammarItem) {
  // If ownExamples exists, use it
  if (grammarItem.ownExamples && grammarItem.ownExamples.length > 0) {
    return grammarItem.ownExamples;
  }
  // Fallback: return only the first example (always the original grammar)
  if (grammarItem.examples && grammarItem.examples.length > 0) {
    return [grammarItem.examples[0]];
  }
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
  
  // Sync visibility with toggle
  if (document.getElementById('toggleTopic').checked) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }

  currentOptions = generateOptions(g, sense.groupId);
  currentOptions.forEach((opt, i) => {
    document.getElementById(`optG${i}`).textContent = opt.grammar.grammar;
    const m = opt.grammar.senses ? opt.grammar.senses.map(s => s.meaning).join(', ') : '';
    document.getElementById(`optM${i}`).textContent = m;
    document.getElementById(`cardB${i}`).classList.remove('flipped');
    const wrap = document.querySelectorAll('.option-wrap')[i];
    wrap.classList.remove('correct', 'wrong', 'reveal-correct');
  });

  updateProgress();
}

function updateProgress() {
  const total = grammarData.length;
  let done = 0;
  grammarData.forEach(g => {
    const uniqueGroupIds = new Set(g.senses.map(s => s.groupId));
    if (progress[g.id] && progress[g.id].length >= uniqueGroupIds.size) {
      done++;
    }
  });
  document.getElementById('progressFill').style.width = `${(done / total) * 100}%`;
  document.getElementById('progressText').textContent = `${done} / ${total}`;
}

// ===== ANSWER =====
function selectAnswer(idx) {
  if (answered) return;
  const wraps = document.querySelectorAll('.option-wrap');
  // Skip if this option was already marked wrong
  if (wraps[idx].classList.contains('wrong')) return;

  const g = grammarData[shuffledOrder[currentIdx]];
  const revealMode = document.getElementById('toggleReveal').checked;

  if (currentOptions[idx].isCorrect) {
    // Correct answer
    answered = true;
    wraps[idx].classList.add('correct');
    
    if (!progress[g.id]) progress[g.id] = [];
    if (!progress[g.id].includes(currentSenseGroupId)) {
      progress[g.id].push(currentSenseGroupId);
    }
    
    localStorage.setItem('topik_progress', JSON.stringify(progress));
    updateProgress();
  } else {
    // Wrong answer - always show red
    wraps[idx].classList.add('wrong');

    if (revealMode) {
      // Reveal mode ON: show correct answer immediately
      answered = true;
      currentOptions.forEach((opt, i) => {
        if (opt.isCorrect) wraps[i].classList.add('reveal-correct');
      });
      localStorage.setItem('topik_progress', JSON.stringify(progress));
      updateProgress();
    }
    // Reveal mode OFF: keep trying (answered stays false)
  }
}

function nextQuestion() {
  currentIdx = (currentIdx + 1) % shuffledOrder.length;
  renderQuestion();
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
      .filter(Boolean)
      .map(g => g.grammar) : [];
      
    // Lọc bỏ những chữ trong synonymPatterns đã tồn tại trong members (do nâng cấp ngữ pháp)
    const uniquePatterns = grammarItem.synonymPatterns.filter(p => !members.includes(p));

    let nuancesHtml = '';
    if (grp && grp.nuances && grp.nuances.length > 0) {
      nuancesHtml = `<div class="nuance-box">
        <div class="nuance-title">💡 Phân biệt & Lưu ý:</div>
        <ul>
          ${grp.nuances.map(n => `<li>${n}</li>`).join('')}
        </ul>
      </div>`;
    }

    return `<div style="margin-bottom:12px">
      <div style="font-size:0.8rem;color:var(--text2);margin-bottom:4px">${s.meaning}</div>
      <ul class="syn-list">
        ${uniquePatterns.map(p => `<li>${p}</li>`).join('')}
        ${members.map(m => `<li>${m}</li>`).join('')}
      </ul>
      ${nuancesHtml}
    </div>`;
  }).join('');
  openModal(`Đồng nghĩa: ${grammarItem.grammar}`, allGroups);
}

function showExamples(grammarItem) {
  const exs = getOwnExamples(grammarItem);
  const html = exs.map(e => {
    let block = `<p>${e.sentence}</p>`;
    if (e.translation) {
      block += `<p class="ex-translation">→ ${e.translation}</p>`;
    }
    return block;
  }).join('');
  openModal(`Câu mẫu: ${grammarItem.grammar}`, html || '<p style="color:var(--text2)">Chưa có câu mẫu</p>');
}

function showGrammarList() {
  const html = `<ul class="grammar-list">${grammarData.map((g, i) => {
    const uniqueGroupIds = new Set(g.senses.map(s => s.groupId));
    const totalSenses = uniqueGroupIds.size;
    const completedSenses = progress[g.id] ? progress[g.id].length : 0;
    
    let cls = 'todo';
    let label = '—';
    if (completedSenses === totalSenses) {
      cls = 'done';
      label = '✓';
    } else if (completedSenses > 0) {
      cls = 'partial';
      label = `(${completedSenses}/${totalSenses})`;
    }

    return `<li data-goto="${i}">
      <div><span class="gl-name">${g.grammar}</span>
      <span class="gl-meaning">${g.senses.map(s=>s.meaning).join(' / ')}</span></div>
      <span class="gl-status ${cls}" style="font-size: 0.85rem; font-weight: 600;">${label}</span>
    </li>`;
  }).join('')}</ul>`;
  openModal('Danh sách ngữ pháp', html);

    setTimeout(() => {
      document.querySelectorAll('.grammar-list li[data-goto]').forEach(li => {
        li.addEventListener('click', () => {
          // Jump to this grammar's position in shuffledOrder
          const grammarIdx = parseInt(li.dataset.goto);
          const posInOrder = shuffledOrder.indexOf(grammarIdx);
          currentIdx = posInOrder >= 0 ? posInOrder : 0;
          closeModal();
          renderQuestion();
        });
      });
    }, 50);
}

// ===== DOUBLE TAP HANDLER (mobile) =====
let tapTimers = [null, null, null, null];

function handleOptionTap(idx) {
  if (tapTimers[idx]) {
    // Second tap within 200ms → cancel flip, select answer
    clearTimeout(tapTimers[idx]);
    tapTimers[idx] = null;
    selectAnswer(idx);
  } else {
    // First tap → wait 200ms to see if double-tap
    tapTimers[idx] = setTimeout(() => {
      tapTimers[idx] = null;
      document.getElementById(`cardB${idx}`).classList.toggle('flipped');
    }, 200);
  }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Card A flip (click)
  document.getElementById('cardA').addEventListener('click', function() {
    this.classList.toggle('flipped');
  });

  // Card B: single click = flip, double click = select (mobile)
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cardB${i}`).addEventListener('click', function(e) {
      handleOptionTap(i);
    });
  }

  // Synonym/Example buttons on card A
  document.getElementById('btnSynA').addEventListener('click', () => {
    showSynonyms(grammarData[shuffledOrder[currentIdx]]);
  });
  document.getElementById('btnExA').addEventListener('click', () => {
    showExamples(grammarData[shuffledOrder[currentIdx]]);
  });

  // Synonym/Example buttons on option cards
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

  // Next button
  document.getElementById('btnNext').addEventListener('click', nextQuestion);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('modalOverlay').classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      return;
    }
    if (e.key >= '1' && e.key <= '4') selectAnswer(parseInt(e.key) - 1);
    if (e.key === '5') nextQuestion();
    // Spacebar flips card A
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
  });

  // Header buttons
  document.getElementById('btnGrammarList').addEventListener('click', showGrammarList);
  document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm('Reset toàn bộ tiến trình?')) {
      progress = {};
      localStorage.removeItem('topik_progress');
      updateProgress();
    }
  });

  // Start — shuffle grammar order for this session
  shuffledOrder = shuffle(grammarData.map((_, i) => i));
  currentIdx = 0;
  renderQuestion();
});
