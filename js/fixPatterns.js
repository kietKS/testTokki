const fs = require('fs');
let c = fs.readFileSync('js/data.js', 'utf8');
// Fix 기 때문에(서) -> 기 때문에
c = c.split('\u00ecbb\u0094 \ub54c\ubb38\uc5d0(\uc11c)\u0022').join('\u00ecbb\u0094 \ub54c\ubb38\uc5d0\u0022');
fs.writeFileSync('js/data.js', c, 'utf8');
console.log('Fixed');
