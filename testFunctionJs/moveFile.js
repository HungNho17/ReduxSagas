const fs = require('fs');
const path = require('path');

async function moveFile(source, dest){
 await fs.readdir(source, async(err, files) => {
  for (const file of files) {
   const _source = path.join(source, `/${file}`);
   const _dest = path.join(dest,  `/${file}`);

   await fs.copyFile(_source, _dest, () => {});
   await fs.unlink(_source, () => {});
 }
 })
}

const test1 = path.join(__dirname, '/test1');
const test2 = path.join(__dirname, '/test2');

moveFile(test1, test2);