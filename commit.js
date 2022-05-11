const { exec } = require('child_process');
const fs = require('fs');

for (let i = 0; i < 10000; i++) {
  console.log(i)
  fs.writeFile("./README.md", "Hello World " + i, () => {
    console.log("Successfully written to file: " + i);
    exec(`git add README.md && git commit -am "${i} commit"`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${i} commit`);
      }
    });
  })
}
