const { exec } = require('child_process');
const fs = require('fs');

for (var i = 0; i < 10000; i++) {
  fs.writeFileSync("./README.md", "Hello World " + i);
  exec(`git add README.md && git commit -am "${i} commit"`);
}
