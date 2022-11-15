//import puppeteer from 'puppeteer'
import PCR from 'puppeteer-chromium-resolver'

export const takeScreenshot = async (url: string): Promise<string|Buffer|null> => {
    let image: string|Buffer|null = null
    const selector = '#contentArea'
    const options = {
        cacheRevisions: 2,
        defaultHosts: [],
        detectionPath: "",
        folderName: ".chromium-browser-snapshots",
        hosts: [],
        retry: 3,
        revision: "",
        silent: true
    }
    try {
        const stats = await PCR(options)
        const browser = await stats.puppeteer.launch({
            args: ["--fast-start", "--disable-extensions", "--no-sandbox", "--disable-setuid-sandbox"],
            executablePath: stats.executablePath,
            headless: true,
            ignoreHTTPSErrors: true
        })
        //const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        await page.waitForSelector(selector)
        const element = await page.$(selector)
        if (element) {
            page.addStyleTag({ content: '#headerArea{display: none;}' })
            image = await element.screenshot({ encoding: 'base64', type: 'jpeg' })
        }
        await browser.close()
        return image
    } catch (e) {
        console.log(e)
        return null
    }
}
