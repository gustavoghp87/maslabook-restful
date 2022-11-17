"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeScreenshot = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
//import PCR from 'puppeteer-chromium-resolver'
// export const getScreenshot = async (url: string, selector: string): Promise<string|Buffer|null> => {
//     axios.get('181.229.237.51')
// }
const takeScreenshot = async (url) => {
    let image = null;
    const selector = '#contentArea';
    // const options = {
    //     cacheRevisions: 2,
    //     defaultHosts: [],
    //     detectionPath: "",
    //     folderName: ".chromium-browser-snapshots",
    //     hosts: [],
    //     retry: 3,
    //     revision: "",
    //     silent: true
    // }
    console.log("URL: " + url);
    try {
        //const stats = await PCR(options)
        //const stats = PCR.getStats()
        // const browser = await stats.puppeteer.launch({
        //     args: ["--fast-start", "--disable-extensions", "--no-sandbox", "--disable-setuid-sandbox"],
        //     executablePath: stats.executablePath,
        //     headless: true,
        //     ignoreHTTPSErrors: true
        // })
        const browser = await puppeteer_1.default.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector(selector);
        const element = await page.$(selector);
        if (element) {
            page.addStyleTag({ content: '#headerArea{display: none;}' });
            image = await element.screenshot({ encoding: 'base64', type: 'jpeg' });
        }
        await page.close();
        await browser.close();
        return image;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};
exports.takeScreenshot = takeScreenshot;
