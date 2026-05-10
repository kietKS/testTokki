const fs = require('fs');
const code = fs.readFileSync('js/data.js', 'utf8');
eval(code.replace('const synonymGroups', 'var synonymGroups').replace('const grammarData', 'var grammarData'));
grammarData.forEach(g => {
  if (!g.examples) return;
  const missing = g.examples.filter(e => !e.translation);
  if (missing.length > 0) {
    console.log('ID ' + g.id + ' [' + g.grammar + ']:');
    missing.forEach(e => console.log('  ' + JSON.stringify(e)));
  }
});
