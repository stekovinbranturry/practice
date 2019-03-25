/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-25 22:48:57 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-25 23:58:26
 */

const mkdirs = (folderToMake, callback) => {
    const fs = require('fs');
    const path = require('path');
    // 1. get current path of file which call mkdirs.js first
    const currentPath = path.dirname(module.parent.filename);
    console.log(`currentPath: ${currentPath}`);
    // 2. get foler-to-make absolute path
    const absolutePath = path.isAbsolute(folderToMake) ? folderToMake : path.join(currentPath, folderToMake);
    console.log(`absolutePath: ${absolutePath}`);
    // 3. get foler-to-make relative path
    const relativePath = path.relative(currentPath, absolutePath);
    console.log(`relativePath: ${relativePath}`);
    // 4. splite relative path by '/'
    const folders = relativePath.split(path.sep);
    console.log(`folders: ${folders}`);
    // 5. make folder level by level
    try {
        let pre = '';
        folders.forEach(folder => {
            const makePath = path.join(currentPath, pre, folder);
            try {
                fs.statSync(makePath);  // resolve path length limitation issue in windows
            } catch (error) {
                fs.mkdirSync(makePath);
            }
            pre = path.join(pre, folder);
        });
    } catch (error) {
        callback && callback(error);
    }

}

module.exports = mkdirs;