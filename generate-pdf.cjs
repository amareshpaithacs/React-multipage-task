const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const HTML_PATH = path.resolve(__dirname, 'react-tutorial.html');
const PDF_PATH = path.resolve(__dirname, 'React-Complete-Tutorial.pdf');

async function generatePdf() {
  console.log('🚀 Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  console.log('📄 Loading HTML file...');
  await page.goto('file://' + HTML_PATH, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for fonts and styles to fully load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));

  console.log('📝 Generating PDF...');
  await page.pdf({
    path: PDF_PATH,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '12mm',
      right: '12mm'
    },
    displayHeaderFooter: true,
    headerTemplate: '<div style="width:100%; font-size:8px; color:#888; text-align:center; padding:5px; font-family:Segoe UI, sans-serif;">React Multi-Page Application — Complete Tutorial</div>',
    footerTemplate: '<div style="width:100%; font-size:8px; color:#888; text-align:center; padding:5px; font-family:Segoe UI, sans-serif;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
    preferCSSPageSize: true
  });

  console.log('✅ PDF generated successfully!');
  console.log(`📁 Saved to: ${PDF_PATH}`);

  await browser.close();
  console.log('🔒 Browser closed.');
}

generatePdf().catch(err => {
  console.error('❌ Error generating PDF:', err);
  process.exit(1);
});
