import puppeteer from 'puppeteer';

export default async (url, path) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36');
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.emulateMedia('screen');
  await page.pdf({
    path,
    printBackground: true,
    width: '1920px',
    height: '1080px',
  });
  await browser.close();
  return 0;
};
