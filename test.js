// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const { Client } = require('pg');

// const client = new Client({
//     user: 'default',
//     host: 'ep-morning-bonus-67651964-pooler.us-east-1.postgres.vercel-storage.com',
//     database: 'verceldb',
//     password: 't7MIjieKC4NQ',
//     port: 5432, // The default PostgreSQL port
//     ssl: {
//         rejectUnauthorized: false,
//     }
// });

// // Connect to the database
// client.connect();

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

//     for (let item of data) {
//         const query = {
//             text: 'INSERT INTO euresult(Href, Text) VALUES($1, $2)',
//             values: [item.href, item.text],
//         };

//         client.query(query, (err, res) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log('Data inserted successfully');
//             }
//         });
//     }

//     await browser.close();
//     client.end();
// })();



// const { Client } = require('pg');

const client = new Client({
  user: 'default',
  host: 'ep-morning-bonus-67651964-pooler.us-east-1.postgres.vercel-storage.com',
  database: 'verceldb',
  password: 't7MIjieKC4NQ',
  port: 5432, // The default PostgreSQL port
  ssl: {
    rejectUnauthorized: false,
  }
});

// Connect to the database
client.connect();

const dataToInsert = {
    value1: 'some value 1',
    value2: 'some value 2',
  };
  
  const query = {
    text: 'INSERT INTO euresult(Href, Text) VALUES($1, $2)',
    values: [dataToInsert.value1, dataToInsert.value2],
  };
  
  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data inserted successfully');
    }
  
    // Close the database connection after inserting data
    client.end();
  });
  