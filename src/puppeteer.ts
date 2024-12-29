import puppeteer from 'puppeteer'

const screenshot = async (url: string, name: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // iphone X
    // 100 * 178
    // await page.setViewport({height: 812, width: 375, deviceScaleFactor: 3})
    await page.setViewport({height: Math.round(178 * (4)), width: Math.round(100 * (4)), deviceScaleFactor: 3})
    await page.goto(url, {waitUntil: "networkidle2"});
    await page.screenshot({path: name + "-mobile.png"})
    console.log("33%")

    // ipad
    // 260 * 347
    // await page.setViewport({height: 1366, width: 1024, deviceScaleFactor: 2})
    await page.setViewport({height: Math.round(347 * (4)), width: Math.round(260 * (4)), deviceScaleFactor: 2})
    await page.goto(url, {waitUntil: "networkidle2"});
    await page.screenshot({path: name + "-ipad.png"})
    console.log("66%")

    // laptop 482 * 301

    // await page.setViewport({height: 1080, width: 1920,deviceScaleFactor: 2})
    await page.setViewport({height: Math.round(301 * (4)), width: Math.round(482 * (4)), deviceScaleFactor: 2})
    await page.goto(url, {waitUntil: "networkidle2"});
    await page.screenshot({path: name + "-laptop.png"})
    console.log("100%")

    await browser.close();
};

export default screenshot;