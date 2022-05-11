const { exec } = require('child_process');
const fs = require('fs');

for (var i = 0; i < 10000; i++) {
  fs.writeFile("./README.md", "Hello World " + i, () => {
    exec(`git add README.md && git commit -am "${i} commit"`)
      .on('stdout', (data) => {
        console.log(`${i} commit: ${data}`);
      })
      .on('exit', () => {
        console.log(`We have ${i} commits`);
      });
  })
}
