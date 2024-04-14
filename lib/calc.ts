import puppeteer from 'puppeteer';

export async function automateCarbonCalculation(url: string): Promise<void> {
    // Launch a new headless browser
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://www.websitecarbon.com/');

    // Wait for the input field to appear and set the given URL
    await page.waitForSelector('input[name="wgd-cc-url"]');
    await page.type('input[name="wgd-cc-url"]', url);

    // Click the "Calculate" button
    await page.click('button[type="submit"]');

    // Wait for the results to appear
    await page.waitForSelector('.results');

    // Capture the results as text
    const results = await page.evaluate(() => {
        const resultsElement = document.querySelector('.results');
        return resultsElement ? resultsElement.textContent : '';
    });

    // Print the results
    console.log('Carbon calculation results:');
    console.log(results);

    // Close the browser
    await browser.close();
}

// Call the function with the desired URL to calculate
