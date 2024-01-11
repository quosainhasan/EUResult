const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://www.erauniversity.in/result/');
    const data = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('table a'));
        return anchors.map(anchor => {
            return {
                href: anchor.href,
                text: anchor.textContent.trim(),
            };
        });
    });
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    await browser.close();
})();

// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: "new" });
//     const page = await browser.newPage();
//     await page.goto('https://www.erauniversity.in/result/');
//     const data = await page.evaluate(() => {
//         const anchors = Array.from(document.querySelectorAll('table a'));
//         return anchors.map(anchor => {
//             return {
//                 href: anchor.href,
//                 text: anchor.textContent.trim(),
//             };
//         });
//     });
//     console.log(data);
//     await browser.close();
// })();