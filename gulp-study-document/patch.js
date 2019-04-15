const fs = require('fs');
const path = require('path');
const xonokai = 'xonokai.css';
const {F_OK, COPYFILE_FICLONE} = fs.constants;

fs.access(xonokai, F_OK, (err) => {
  if(err) {
    console.error(`${xonokai} does not exist`)
  } else {
    let prismThemePath = path.dirname(require.resolve('prism-themes'));
    prismThemePath = path.join(prismThemePath, 'themes/prism-xonokai.css');
    fs.copyFile(xonokai, prismThemePath, COPYFILE_FICLONE, (err) => {
      if(err) {
        console.error(`${xonokai} does not copied to ${prismThemePath}`)
      } else {
        console.log(`${xonokai} was copied to ${prismThemePath}`)
      }
    });
  }
});