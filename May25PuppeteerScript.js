// const puppeteer = require('puppeteer'); // v13.0.0 or later

testscript = async function (page) {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1792,
            height: 530
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('https://www.evite.com/?gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF9j_VahYhs4SJsh2vQOthBmPkLPH1J5TSDppe6sIW635KqWIOe9plsaAna2EALw_wcB');
        await Promise.all(promises);
    }
    await page.close();
    return;
}
