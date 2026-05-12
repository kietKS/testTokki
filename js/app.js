// ===== STATE =====
let currentIdx = 0;           // index into shuffledOrder
let historyStack = [];        // save previous indices for Back button
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
  historyStack.push(currentIdx);
  updateBackButton();
  currentIdx = (currentIdx + 1) % shuffledOrder.length;
  renderQuestion();
}

function updateBackButton() {
  const btnPrev = document.getElementById('btnPrev');
  if (btnPrev) {
    btnPrev.style.display = historyStack.length > 0 ? 'block' : 'none';
  }
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
    members.forEach(m => {
      (m.synonymPatterns || []).forEach(p => allPatternsInGroup.add(p));
    });
    (grammarItem.synonymPatterns || []).forEach(p => allPatternsInGroup.add(p));

    // Lọc bỏ: chính ngữ pháp hiện tại, và các pattern đã có trong members (đã được thể hiện bằng nút ➔)
    memberGrammars.add(grammarItem.grammar);
    const uniquePatterns = [...allPatternsInGroup].filter(p => !memberGrammars.has(p));

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
        ${uniquePatterns.map(p => `<li style="display: flex; justify-content: space-between; align-items: center;">
          <span>${p}</span>
          <button class="btn-copy-list" data-copy="${p.replace(/"/g, '&quot;')}" title="Copy ngữ pháp" style="background: none; border: none; cursor: pointer; color: var(--text2); font-size: 0.9rem; padding: 4px;">📋</button>
        </li>`).join('')}
        ${members.map(m => `<li style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${m.grammar}</span>
            <button class="btn-copy-list" data-copy="${m.grammar.replace(/"/g, '&quot;')}" title="Copy ngữ pháp" style="background: none; border: none; cursor: pointer; color: var(--text2); font-size: 0.9rem; padding: 4px;">📋</button>
          </div>
          <button class="btn-jump" data-target-id="${m.id}" title="Chuyển đến ngữ pháp này" style="background: none; border: none; cursor: pointer; color: var(--accent); font-size: 1.2rem; padding: 4px; display: flex; align-items: center; justify-content: center;">➔</button>
        </li>`).join('')}
      </ul>
      ${nuancesHtml}
    </div>`;
  }).join('');
  openModal(`Đồng nghĩa: ${grammarItem.grammar}`, allGroups);

  setTimeout(() => {
    document.querySelectorAll('.btn-jump').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = parseInt(btn.dataset.targetId);
        const targetGlobalIdx = grammarData.findIndex(g => g.id === targetId);
        const targetShuffledIdx = shuffledOrder.indexOf(targetGlobalIdx);
        if (targetShuffledIdx >= 0) {
          historyStack.push(currentIdx);
          currentIdx = targetShuffledIdx;
          closeModal();
          renderQuestion();
          updateBackButton();
        }
      });
    });

    document.querySelectorAll('.btn-copy-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.dataset.copy;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const oldContent = btn.innerHTML;
            btn.innerHTML = '✅';
            setTimeout(() => btn.innerHTML = oldContent, 1000);
          });
        }
      });
    });
  }, 50);
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
  const searchHtml = `<div class="search-wrap" style="margin-bottom: 16px; position: sticky; top: 0; z-index: 10; background: var(--bg2); padding-bottom: 10px;">
    <input type="text" id="grammarSearchInput" placeholder="Tìm kiếm ngữ pháp / tiếng Việt..." style="width: 100%; padding: 10px 14px; border: 1px solid var(--glass-border); border-radius: 8px; background: var(--surface); color: var(--text); font-size: 0.95rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--glass-border)'">
  </div>`;

  const listHtml = `<ul class="grammar-list" id="grammarListUl">${grammarData.map((g, i) => {
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

    const searchStr = (g.grammar + ' ' + g.senses.map(s => s.meaning).join(' ')).toLowerCase();

    return `<li data-goto="${i}" data-search="${searchStr.replace(/"/g, '&quot;')}">
      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="btn-copy-list" data-copy="${g.grammar.replace(/"/g, '&quot;')}" title="Copy ngữ pháp" style="background: none; border: none; cursor: pointer; color: var(--text2); font-size: 0.9rem; padding: 4px; z-index: 5;">📋</button>
        <div><span class="gl-name">${g.grammar}</span>
        <span class="gl-meaning">${g.senses.map(s => s.meaning).join(' / ')}</span></div>
      </div>
      <span class="gl-status ${cls}" style="font-size: 0.85rem; font-weight: 600;">${label}</span>
    </li>`;
  }).join('')}</ul>`;

  openModal('Danh sách ngữ pháp', searchHtml + listHtml);

  setTimeout(() => {
    // List item click listener
    document.querySelectorAll('#grammarListUl li[data-goto]').forEach(li => {
      li.addEventListener('click', () => {
        // Jump to this grammar's position in shuffledOrder
        const grammarIdx = parseInt(li.dataset.goto);
        const posInOrder = shuffledOrder.indexOf(grammarIdx);
        if (posInOrder >= 0 && posInOrder !== currentIdx) {
          historyStack.push(currentIdx);
          updateBackButton();
        }
        currentIdx = posInOrder >= 0 ? posInOrder : 0;
        closeModal();
        renderQuestion();
      });
    });

    // Search input listener
    const searchInput = document.getElementById('grammarSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('#grammarListUl li[data-goto]').forEach(li => {
          const searchStr = li.dataset.search;
          if (searchStr.includes(term)) {
            li.style.display = '';
          } else {
            li.style.display = 'none';
          }
        });
      });
    }

    document.querySelectorAll('.btn-copy-list').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.dataset.copy;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const oldContent = btn.innerHTML;
            btn.innerHTML = '✅';
            setTimeout(() => btn.innerHTML = oldContent, 1000);
          });
        }
      });
    });
  }, 50);
}

function showHelp() {
  const kbdStyle = "display: inline-block; background: rgba(255,255,255,0.15); padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; font-family: monospace; border: 1px solid var(--glass-border); color: var(--text);";
  const html = `
    <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text);">
      <p style="margin-bottom: 8px;"><b>1. Lật thẻ (Xem nghĩa):</b></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li>Bấm vào thẻ bất kỳ hoặc nhấn phím <kbd style="${kbdStyle}">Space</kbd>.</li>
      </ul>

      <p style="margin-bottom: 8px;"><b>2. Chọn đáp án (4 thẻ nhỏ):</b></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li><b>Trên máy tính:</b> Nhấn phím từ <kbd style="${kbdStyle}">1</kbd> đến <kbd style="${kbdStyle}">4</kbd> hoặc click đúp chuột vào thẻ.</li>
        <li><b>Trên điện thoại:</b> Chạm 2 lần liên tiếp (double-tap) vào thẻ.</li>
      </ul>

      <p style="margin-bottom: 8px;"><b>3. Chuyển câu tiếp theo:</b></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li>Bấm nút "Tiếp theo" ở góc dưới hoặc nhấn phím <kbd style="${kbdStyle}">5</kbd> hoặc <kbd style="${kbdStyle}">→</kbd>.</li>
      </ul>

      <p style="margin-bottom: 8px;"><b>4. Quay lại câu trước:</b></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li>Bấm nút "Quay lại" ở góc dưới bên trái hoặc nhấn phím <kbd style="${kbdStyle}">←</kbd>.</li>
      </ul>

      <p style="margin-bottom: 8px;"><b>5. Các tính năng mở rộng:</b></p>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li style="margin-bottom: 8px;"><b style="color:var(--accent); font-size: 1.1rem;">➔</b> <b>Nhảy nhanh:</b> Trong danh sách đồng nghĩa, bấm vào mũi tên để nhảy sang thẻ của ngữ pháp đó. Có thể bấm nút <b>"⬅ Quay lại"</b> để trở về.</li>
        <li style="margin-bottom: 8px;"><b>📋 Copy:</b> Bấm để sao chép nhanh tên ngữ pháp hoặc nghĩa tiếng Việt.</li>
        <li style="margin-bottom: 8px;"><b>Hiện CĐ / Hiện ĐA:</b> Công tắc bật/tắt hiển thị Chủ đề (nhóm) hoặc tự động hiện đáp án đúng khi bạn chọn sai.</li>
      </ul>
    </div>
  `;
  openModal('Hướng dẫn sử dụng', html);
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
  document.getElementById('cardA').addEventListener('click', function () {
    this.classList.toggle('flipped');
  });

  // Card B: single click = flip, double click = select (mobile)
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cardB${i}`).addEventListener('click', function (e) {
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

  // Copy buttons
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let textToCopy = '';
      if (btn.classList.contains('copy-btn-a')) {
        textToCopy = document.getElementById('mainGrammar').innerText;
      } else if (btn.classList.contains('copy-btn-a-back')) {
        textToCopy = document.getElementById('mainMeaning').innerText;
      } else if (btn.classList.contains('copy-btn-b')) {
        const idx = btn.dataset.idx;
        textToCopy = document.getElementById(`optG${idx}`).innerText;
      }

      if (textToCopy && textToCopy !== '—') {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const oldContent = btn.innerHTML;
          btn.innerHTML = '✅';
          setTimeout(() => btn.innerHTML = oldContent, 1000);
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
  document.getElementById('btnHelp').addEventListener('click', showHelp);
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
  showHelp();
});
