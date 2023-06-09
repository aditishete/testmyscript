testscript = async function (expressCode, page) {

    const extractedData = {};
    // Goto the Returns Page
    await page.goto('https://dashboard.happyreturns.com/p/returns');
    await isTableDisplayed(page);

    // Enter order expressCode
    await page.type("input[type='search']", expressCode);
    await page.keyboard.press('Enter');
    await page.waitForXPath(
      "//table[@class='List__ListTable-sc-hzs485-0 ckEWGQ']",
      {
        visible: true,
        timeout: 50000,
      },
    );

    // Click into the Detail page
    const elements = await page.$x(
      "(//td[@class='styles__RowColumn-sc-u7pdh4-1 izrvEm'])[1]",
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
    extractedData['description'] = await evaluateElement(
      page,
      descriptionEle,
    );

    const [skuEle] = await page.$x(
      "//span[@class='styles__Sku-sc-bqe11l-27 dIUPxg']",
    );
    extractedData['sku'] = await evaluateElement(page, skuEle);

    extractedData['tracking'] = await page.$eval(
      "div[class='styles__FlexCol-sc-bqe11l-1 gtgoKI shipment-status tracking-number'] div a[class='styles__DetailAnchor-sc-bqe11l-25 bJvWls']",
      (el) => el.textContent,
    );

    const [refundStatus] = await page.$x(
       "//span[@class='styles__StatusWrapper-sc-bqe11l-7 deftEj']",
    );
    extractedData['refundStatus'] = await evaluateElement(
      page,
      refundStatus,
    );

    const [shipmentStatus] = await page.$x(
            "//span[normalize-space()='Label Created']",
    );
    extractedData['shipmentStatus'] = await evaluateElement(
      page,
      shipmentStatus,
    );
    console.log("Extracted Data :" + extractedData)
    return extractedData;

    async function isTableDisplayed(page) {
      await page.waitForSelector(
      "table[class='List__ListTable-sc-hzs485-0 ckEWGQ'] thead",
      {
        visible: true,
        timeout: 50000,
      },
    );
    }
    
  async function evaluateElement(page, el) {
    return page.evaluate((el) => el.innerText, el);
  }

}
