import puppeteer from 'puppeteer'

export const takeScreenshot = async (url: string): Promise<string|Buffer|null> => {
    const selector = '#contentArea'
    let image: string|Buffer|null = null
    try {
        const browser = await puppeteer.launch()
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
