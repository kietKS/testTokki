// ===== STATE =====
let currentIdx = 0;
let currentSenseGroupId = null;
let currentOptions = []; // [{grammar, isCorrect}]
let answered = false;
let progress = JSON.parse(localStorage.getItem('topik_progress') || '{}');
// progress = { "1": "correct", "3": "wrong", ... }

// ===== UTILS =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Get all grammar IDs that share ANY group with a given grammar
function getRelatedIds(grammarItem) {
  const relatedIds = new Set();
  grammarItem.senses.forEach(s => {
    const group = synonymGroups.find(g => g.id === s.groupId);
    if (group) group.grammarIds.forEach(id => relatedIds.add(id));
  });
  return relatedIds;
}

// Pick correct answer + 3 wrong answers
function generateOptions(mainGrammar, senseGroupId) {
  // Find a correct answer from the same group (not the main grammar itself)
  const group = synonymGroups.find(g => g.id === senseGroupId);
  const correctCandidateIds = group
    ? group.grammarIds.filter(id => id !== mainGrammar.id)
    : [];

  // All IDs related to main grammar (across ALL senses) - these cannot be wrong answers
  const excludeIds = getRelatedIds(mainGrammar);
  excludeIds.add(mainGrammar.id);

  // Available wrong candidates
  const wrongPool = grammarData.filter(g => !excludeIds.has(g.id));

  // Pick 1 correct
  let correctGrammar = null;
  if (correctCandidateIds.length > 0) {
    const cid = correctCandidateIds[Math.floor(Math.random() * correctCandidateIds.length)];
    correctGrammar = grammarData.find(g => g.id === cid);
  }

  // Pick 3 wrong (or fill if not enough data)
  const wrongItems = shuffle(wrongPool).slice(0, correctGrammar ? 3 : 4);

  let options = [];
  if (correctGrammar) {
    options = shuffle([
      { grammar: correctGrammar, isCorrect: true },
      ...wrongItems.map(g => ({ grammar: g, isCorrect: false }))
    ]);
  } else {
    // No correct answer available (single grammar in group)
    options = wrongItems.map(g => ({ grammar: g, isCorrect: false }));
  }

  // Ensure exactly 4 options
  while (options.length < 4) {
    options.push({ grammar: { id: -1, grammar: '—', senses: [{ meaning: '—' }], synonymPatterns: [], examples: [] }, isCorrect: false });
  }

  return options.slice(0, 4);
}

// ===== RENDER =====
function renderQuestion() {
  answered = false;
  const g = grammarData[currentIdx];

  // Pick a random sense for this grammar
  const sense = g.senses[Math.floor(Math.random() * g.senses.length)];
  currentSenseGroupId = sense.groupId;

  // Card A
  document.getElementById('mainGrammar').textContent = g.grammar;
  document.getElementById('mainMeaning').textContent = sense.meaning;
  document.getElementById('mainNotes').textContent = g.notes || '';
  document.getElementById('cardA').classList.remove('flipped');

  // Sense badge
  const grp = synonymGroups.find(gr => gr.id === sense.groupId);
  document.getElementById('senseBadge').textContent = grp ? grp.label : sense.meaning;

  // Options
  currentOptions = generateOptions(g, sense.groupId);
  currentOptions.forEach((opt, i) => {
    document.getElementById(`optG${i}`).textContent = opt.grammar.grammar;
    const m = opt.grammar.senses ? opt.grammar.senses.map(s => s.meaning).join(', ') : '';
    document.getElementById(`optM${i}`).textContent = m;
    document.getElementById(`cardB${i}`).classList.remove('flipped');
    const wrap = document.querySelectorAll('.option-wrap')[i];
    wrap.classList.remove('correct', 'wrong', 'reveal-correct');
  });

  // Progress
  updateProgress();
}

function updateProgress() {
  const total = grammarData.length;
  const done = Object.keys(progress).length;
  document.getElementById('progressFill').style.width = `${(done / total) * 100}%`;
  document.getElementById('progressText').textContent = `${done} / ${total}`;
}

// ===== ANSWER =====
function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const g = grammarData[currentIdx];
  const wraps = document.querySelectorAll('.option-wrap');

  if (currentOptions[idx].isCorrect) {
    wraps[idx].classList.add('correct');
    progress[g.id] = 'correct';
  } else {
    wraps[idx].classList.add('wrong');
    // Reveal correct answer
    currentOptions.forEach((opt, i) => {
      if (opt.isCorrect) wraps[i].classList.add('reveal-correct');
    });
    progress[g.id] = progress[g.id] || 'wrong';
  }

  localStorage.setItem('topik_progress', JSON.stringify(progress));
  updateProgress();
}

function nextQuestion() {
  currentIdx = (currentIdx + 1) % grammarData.length;
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
    return `<div style="margin-bottom:12px">
      <div style="font-size:0.8rem;color:var(--text2);margin-bottom:4px">${s.meaning}</div>
      <ul class="syn-list">
        ${grammarItem.synonymPatterns.map(p => `<li>${p}</li>`).join('')}
        ${members.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </div>`;
  }).join('');
  openModal(`Đồng nghĩa: ${grammarItem.grammar}`, allGroups);
}

function showExamples(grammarItem) {
  const html = grammarItem.examples.map(e => `<p>${e.sentence}</p>`).join('');
  openModal(`Câu mẫu: ${grammarItem.grammar}`, html || '<p style="color:var(--text2)">Chưa có câu mẫu</p>');
}

function showGrammarList() {
  const html = `<ul class="grammar-list">${grammarData.map((g, i) => {
    const status = progress[g.id];
    const cls = status === 'correct' ? 'done' : 'todo';
    const label = status === 'correct' ? '✓' : status === 'wrong' ? '✗' : '—';
    return `<li data-goto="${i}">
      <div><span class="gl-name">${g.grammar}</span>
      <span class="gl-meaning">${g.senses.map(s=>s.meaning).join(' / ')}</span></div>
      <span class="gl-status ${cls}">${label}</span>
    </li>`;
  }).join('')}</ul>`;
  openModal('Danh sách ngữ pháp', html);

  // Attach click handlers
  setTimeout(() => {
    document.querySelectorAll('.grammar-list li[data-goto]').forEach(li => {
      li.addEventListener('click', () => {
        currentIdx = parseInt(li.dataset.goto);
        closeModal();
        renderQuestion();
      });
    });
  }, 50);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  // Card A flip
  document.getElementById('cardA').addEventListener('click', function() {
    this.classList.toggle('flipped');
  });

  // Card B flip (click only flips, does NOT select answer)
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cardB${i}`).addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  }

  // C/D buttons on card A
  document.getElementById('btnSynA').addEventListener('click', () => {
    showSynonyms(grammarData[currentIdx]);
  });
  document.getElementById('btnExA').addEventListener('click', () => {
    showExamples(grammarData[currentIdx]);
  });

  // C/D buttons on option cards
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
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
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

  // Start
  renderQuestion();
});
