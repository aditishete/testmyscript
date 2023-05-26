testscript = async function (page) {

    const extractedData = {};
    // Goto the Returns Page
    await page.goto('https://dashboard.happyreturns.com/p/returns');
    await isTableDisplayed(page);

    // Enter order expressCode
    await page.type("input[type='search']", expressCode);
    await page.keyboard.press('Enter');
    await page.waitForXPath(
      "//div[@id='app']/div/div[3]/div[2]/div/table/tbody/tr/td/span",
      {
        visible: true,
        timeout: 50000,
      },
    );

    // Click into the Detail page
    const elements = await page.$x(
      "//div[@id='app']/div/div[3]/div[2]/div/table/tbody/tr/td/span",
    );
    await elements[0].click();
    await page.waitForSelector('.Content-fcbmlX.bwCAAB', {
      visible: true,
      timeout: 50000,
    });

    // await page.screenshot({
    //   path: '/Users/aditi.shete/work/data/order' + expressCode + '.jpg',
    // });

    //Extract detail
    console.log('Extract Detail' + expressCode);
    const [descriptionEle] = await page.$x(
      "//div[@class='styles__ItemTitle-sc-bqe11l-20 fddCrs']",
    );
    extractedData['description'] = await this.evaluateElement(
      page,
      descriptionEle,
    );

    const [skuEle] = await page.$x(
      "//span[@class='styles__Sku-sc-bqe11l-27 dIUPxg']",
    );
    extractedData['sku'] = await this.evaluateElement(page, skuEle);

    extractedData['tracking'] = await page.$eval(
      "div[class='styles__FlexCol-sc-bqe11l-1 gtgoKI shipment-status tracking-number'] div a[class='styles__DetailAnchor-sc-bqe11l-25 bJvWls']",
      (el) => el.textContent,
    );

    const [refundStatus] = await page.$x(
      "(//span[@class='styles__StatusWrapper-sc-bqe11l-7 jNeSie'])[1]",
    );
    extractedData['refundStatus'] = await this.evaluateElement(
      page,
      refundStatus,
    );

    const [shipmentStatus] = await page.$x(
      '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[3]/div[1]/b[1]',
    );
    extractedData['shipmentStatus'] = await this.evaluateElement(
      page,
      shipmentStatus,
    );
    console.log("Extracted Data :" + extractedData)
    return extractedData;

    function isTableDisplayed(page) {
      await page.waitForSelector(
      "table[class='List__ListTable-sc-hzs485-0 ckEWGQ'] thead",
      {
        visible: true,
        timeout: 50000,
      },
    );
    }
}
