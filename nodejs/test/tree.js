/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-24 15:25:06 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-25 00:54:49
 */

const [fs, path] = [require('fs'), require('path')];

const arg = process.argv[2] || './';
const targetPath = path.join(__dirname, arg);

const [tab1, tab2, tab3] = ['┣━ ', '┗━ ', '┃  '];

const printDir = (targetPath, level) => {
    const pre = new Array(level + 1).join(tab3);
    const dirList = fs.readdirSync(targetPath);
    let [dirs, files] = [[], []];
    dirList.forEach(item => {
        const list = fs.statSync(path.join(targetPath, item));
        if (list.isFile()) {
            files.push(item);
        } else {
            dirs.push(item);
        }
    });

    dirs.forEach(el => {
        console.log(`${pre}${tab1}${el}`);
        printDir(path.join(targetPath, el), level + 1);
    });

    let fileCount = files.length - 1;
    files.forEach(el => {
        // console.log(`*${pre}*`);

        console.log(`${pre}${fileCount-- === 0 ? tab2 : tab1}${el}`);
    });
}

printDir(targetPath, 0);

