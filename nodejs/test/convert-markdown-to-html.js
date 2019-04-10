/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-26 00:08:55 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-27 01:12:18
 */

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');

let template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>{{{style}}}</style>
</head>
<body>
    {{{content}}}
</body>
</html>
`;
const targetMarkdown = path.join(__dirname, process.argv[2] || README.md);
const targetHtml = targetMarkdown.replace(path.extname(targetMarkdown), '.html');
const targetHtmlPath = path.dirname(targetHtml);
const targetHtmlName = path.basename(targetHtml);

// Start the server
browserSync({
    notify: false,
    server: targetHtmlPath,
    index: targetHtmlName
});

fs.watchFile(targetMarkdown, { interval: 200 }, (curr, prev) => {
    // console.log(`curr: ${curr.size}, prev: ${prev.size}`);
    if (curr.mtime === prev.mtime) {
        return false;
    }

    fs.readFile(targetMarkdown, 'utf8', (error, content) => {
        if (error) {
            throw error;
        }
        fs.readFile(path.join(__dirname, './github.css'), 'utf8', (error, css) => {
            if (error) {
                throw error;
            }
            let html = marked(content);
            html = template.replace('{{{content}}}', html).replace('{{{style}}}', css);
            fs.writeFile(targetHtml, html, 'utf8', (error) => {
                // Call methods like reload
                browserSync.reload(targetMarkdown);
                console.log(`Markdown has been converted to .html @ ${new Date()}`);
            });
        })
    })
})