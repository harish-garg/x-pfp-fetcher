const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();

app.use(cors());

const getAvatar = async (twitterUsername) => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(`https://twitter.com/${twitterUsername}`);
  await page.waitForSelector('a[href$="/photo"] img[src]');
  const url = await page.evaluate(() => document.querySelector('a[href$="/photo"] img').src);
  await browser.close();
  return url;
};

app.get('/avatar/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const url = await getAvatar(username);
    res.json({ username, url });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch avatar" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
