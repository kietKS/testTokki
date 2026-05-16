python3 << 'PYEOF'
with open('/tmp/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Xóa các ID đã bị remove khỏi grammarIds trong synonymGroups
fixes = {
    'contrast_unexpected':  ([181], []),
    'reason_command':       ([145], []),
    'reason_negative':      ([165], []),
    'reason_hearsay':       ([167, 168], []),
    'condition_intent':     ([120], []),
    'no_choice':            ([175, 186], []),
    'worry':                ([187], []),
    'intention':            ([170], []),
    'depend':               ([158], []),
    'obligation':           ([174], []),
    'opportune':            ([176], []),
    'future_result':        ([166], []),
    'preference':           ([140], []),
    'guess_concern':        ([132, 134], []),
}

import re

# Tìm và fix từng grammarIds array trong synonymGroups
def fix_grammar_ids(match):
    full = match.group(0)
    # Extract id string
    id_str = re.search(r'id: "([^"]+)"', full)
    if not id_str:
        return full
    group_id = id_str.group(1)
    if group_id not in fixes:
        return full
    ids_to_remove = fixes[group_id][0]
    # Find grammarIds array
    def remove_ids(m2):
        arr = m2.group(1)
        nums = [n.strip() for n in arr.split(',')]
        kept = [n for n in nums if int(n) not in ids_to_remove]
        return f'grammarIds: [{", ".join(kept)}]'
    fixed = re.sub(r'grammarIds: \[([^\]]+)\]', remove_ids, full)
    return fixed

# Match mỗi synonymGroup entry
pattern = re.compile(r'\{[^{]*?id: "[^"]+",.*?grammarIds: \[[^\]]+\].*?\}', re.DOTALL)
content = pattern.sub(fix_grammar_ids, content)

with open('/tmp/js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Đã fix grammarIds trong synonymGroups")

# Verify
import subprocess
result = subprocess.run(['node', '--input-type=module'], input='''
import { readFileSync } from 'fs';
const code = readFileSync('/tmp/js/data.js', 'utf8');
const fn = new Function(code + '\\nreturn { synonymGroups, grammarData };');
const { synonymGroups, grammarData } = fn();
const allIds = new Set(grammarData.map(g => g.id));
let broken = 0;
synonymGroups.forEach(grp => {
  grp.grammarIds.forEach(id => { if (!allIds.has(id)) { console.log('BROKEN:', grp.id, id); broken++; } });
});
if (broken === 0) console.log('✅ Tất cả grammarIds hợp lệ!');
console.log('grammarData entries:', grammarData.length);
''', capture_output=True, text=True)
print(result.stdout)
if result.stderr: print('ERR:', result.stderr[:200])
PYEOF