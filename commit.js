const { exec } = require('child_process');
const fs = require('fs');

for (let i = 0; i < 10000; i++) {
  fs.writeFileSync(`./test.txt`, `test${i}`);
  exec(`git add .`);
  exec(`git commit -m "test${i}"`);
  console.log(`Committed ${i}`);
}
