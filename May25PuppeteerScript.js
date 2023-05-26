testscript = function (browser, page) => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
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
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='searchCategory_Greeting_Cards']"
            ],
            [
                'xpath///*[@data-qa-id="searchCategory_Greeting_Cards"]'
            ],
            [
                "pierce/[data-qa-id='searchCategory_Greeting_Cards']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='searchCategory_Greeting_Cards']"
            ],
            [
                'xpath///*[@data-qa-id="searchCategory_Greeting_Cards"]'
            ],
            [
                "pierce/[data-qa-id='searchCategory_Greeting_Cards']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 111.5,
            y: 15.5,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Submit[role="searchbox"]'
            ],
            [
                '#autocomplete-5-input'
            ],
            [
                'xpath///*[@id="autocomplete-5-input"]'
            ],
            [
                'pierce/#autocomplete-5-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Submit[role="searchbox"]'
            ],
            [
                '#autocomplete-5-input'
            ],
            [
                'xpath///*[@id="autocomplete-5-input"]'
            ],
            [
                'pierce/#autocomplete-5-input'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 41.5,
            y: 9.75,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Submit[role="searchbox"]'
            ],
            [
                '#autocomplete-5-input'
            ],
            [
                'xpath///*[@id="autocomplete-5-input"]'
            ],
            [
                'pierce/#autocomplete-5-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Submit[role="searchbox"]'
            ],
            [
                '#autocomplete-5-input'
            ],
            [
                'xpath///*[@id="autocomplete-5-input"]'
            ],
            [
                'pierce/#autocomplete-5-input'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'girl')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'girl');
        } else {
          await changeElementValue(element, 'girl');
        }
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/girl'
            ],
            [
                '#autocomplete-5-item-0'
            ],
            [
                'xpath///*[@id="autocomplete-5-item-0"]'
            ],
            [
                'pierce/#autocomplete-5-item-0'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/girl'
            ],
            [
                '#autocomplete-5-item-0'
            ],
            [
                'xpath///*[@id="autocomplete-5-item-0"]'
            ],
            [
                'pierce/#autocomplete-5-item-0'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 66.5,
            y: 31,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/Birthday'
            ],
            [
                "[data-qa-id='birthdayInvitationsMeganavLink']"
            ],
            [
                'xpath///*[@data-qa-id="birthdayInvitationsMeganavLink"]'
            ],
            [
                "pierce/[data-qa-id='birthdayInvitationsMeganavLink']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Birthday'
            ],
            [
                "[data-qa-id='birthdayInvitationsMeganavLink']"
            ],
            [
                'xpath///*[@data-qa-id="birthdayInvitationsMeganavLink"]'
            ],
            [
                "pierce/[data-qa-id='birthdayInvitationsMeganavLink']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 43.421875,
            y: 12,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Free'
            ],
            [
                "[data-qa-id='gallery-filter-input_Free']"
            ],
            [
                'xpath///*[@data-qa-id="gallery-filter-input_Free"]'
            ],
            [
                "pierce/[data-qa-id='gallery-filter-input_Free']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Free'
            ],
            [
                "[data-qa-id='gallery-filter-input_Free']"
            ],
            [
                'xpath///*[@data-qa-id="gallery-filter-input_Free"]'
            ],
            [
                "pierce/[data-qa-id='gallery-filter-input_Free']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 15,
            y: 8,
          },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                "html > body > #main_content > #page > #gallery_root > div.gallery__body > div:nth-of-type(2) > [data-qa-id='galleryResultsGrid'] > [data-qa-id='gallery-templates__row'] > [data-qa-id='gallery-template__design'] > [data-qa-id='gallery-template__design__cta']"
            ],
            [
                'xpath///*[@data-qa-id="gallery-template__design__cta"]'
            ],
            [
                "pierce/html > body > #main_content > #page > #gallery_root > div.gallery__body > div:nth-of-type(2) > [data-qa-id='galleryResultsGrid'] > [data-qa-id='gallery-templates__row'] > [data-qa-id='gallery-template__design'] > [data-qa-id='gallery-template__design__cta']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "html > body > #main_content > #page > #gallery_root > div.gallery__body > div:nth-of-type(2) > [data-qa-id='galleryResultsGrid'] > [data-qa-id='gallery-templates__row'] > [data-qa-id='gallery-template__design'] > [data-qa-id='gallery-template__design__cta']"
            ],
            [
                'xpath///*[@data-qa-id="gallery-template__design__cta"]'
            ],
            [
                "pierce/html > body > #main_content > #page > #gallery_root > div.gallery__body > div:nth-of-type(2) > [data-qa-id='galleryResultsGrid'] > [data-qa-id='gallery-templates__row'] > [data-qa-id='gallery-template__design'] > [data-qa-id='gallery-template__design__cta']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 51.625,
            y: 72,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'canvas.upper-canvas'
            ],
            [
                'xpath///*[@id="create-container"]/div/div/div[2]/div[1]/div/canvas[2]'
            ],
            [
                'pierce/canvas.upper-canvas'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'canvas.upper-canvas'
            ],
            [
                'xpath///*[@id="create-container"]/div/div/div[2]/div[1]/div/canvas[2]'
            ],
            [
                'pierce/canvas.upper-canvas'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 911,
            y: 258,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 158.3984375,
            y: 22,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'Baby girl birthday')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'Baby girl birthday');
        } else {
          await changeElementValue(element, 'Baby girl birthday');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/Baby girl birthday'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/Baby girl birthday'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 71.3984375,
            y: 19,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                'text/PLEASE JOIN US!'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, "Baby girl's birthday")
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, "Baby girl's birthday");
        } else {
          await changeElementValue(element, "Baby girl's birthday");
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                "text/Baby girl's birthday"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "[data-qa-id='step1-texteditor-input']"
            ],
            [
                'xpath///*[@data-qa-id="step1-texteditor-input"]'
            ],
            [
                "pierce/[data-qa-id='step1-texteditor-input']"
            ],
            [
                "text/Baby girl's birthday"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 210.3984375,
            y: 26,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Event Details'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Event Details'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Event Details'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Event Details'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 328,
            y: 31,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Continue with Google'
            ],
            [
                "[data-qa-id='loginModalSocialGoogleLoginButton']"
            ],
            [
                'xpath///*[@data-qa-id="loginModalSocialGoogleLoginButton"]'
            ],
            [
                "pierce/[data-qa-id='loginModalSocialGoogleLoginButton']"
            ],
            [
                'text/Continue with Google'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Continue with Google'
            ],
            [
                "[data-qa-id='loginModalSocialGoogleLoginButton']"
            ],
            [
                'xpath///*[@data-qa-id="loginModalSocialGoogleLoginButton"]'
            ],
            [
                "pierce/[data-qa-id='loginModalSocialGoogleLoginButton']"
            ],
            [
                'text/Continue with Google'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 230,
            y: 28,
          },
        });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=25716523826-lvshesdmkt0t02s6rpspqc064o6fvqad.apps.googleusercontent.com&redirect_uri=https%3A//www.evite.com/services/extdata/oa2/callback&state=p%3Agoogle_plus%2Ca%3A%2Cr%3Alogin&scope=profile%20email', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'div.wLBAL'
            ],
            [
                'xpath///*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[1]/div/div[1]/div/div[2]/div[2]'
            ],
            [
                'pierce/div.wLBAL'
            ],
            [
                'text/aditi@simplr.ai'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div.wLBAL'
            ],
            [
                'xpath///*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[1]/div/div[1]/div/div[2]/div[2]'
            ],
            [
                'pierce/div.wLBAL'
            ],
            [
                'text/aditi@simplr.ai'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 170,
            y: 2.0078125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Gifting'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Gifting'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Gifting'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Gifting'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 61,
            y: 24,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Your event title'
            ],
            [
                "div.create-flow__options [data-qa-id='event-title']"
            ],
            [
                'xpath///*[@data-qa-id="event-title"]'
            ],
            [
                "pierce/div.create-flow__options [data-qa-id='event-title']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Your event title'
            ],
            [
                "div.create-flow__options [data-qa-id='event-title']"
            ],
            [
                'xpath///*[@data-qa-id="event-title"]'
            ],
            [
                "pierce/div.create-flow__options [data-qa-id='event-title']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 33,
            y: 35,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Your event title'
            ],
            [
                "div.create-flow__options [data-qa-id='event-title']"
            ],
            [
                'xpath///*[@data-qa-id="event-title"]'
            ],
            [
                "pierce/div.create-flow__options [data-qa-id='event-title']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Your event title'
            ],
            [
                "div.create-flow__options [data-qa-id='event-title']"
            ],
            [
                'xpath///*[@data-qa-id="event-title"]'
            ],
            [
                "pierce/div.create-flow__options [data-qa-id='event-title']"
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'Baby Birthday')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'Baby Birthday');
        } else {
          await changeElementValue(element, 'Baby Birthday');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Your event date'
            ],
            [
                "[data-qa-id='event-date']"
            ],
            [
                'xpath///*[@data-qa-id="event-date"]'
            ],
            [
                "pierce/[data-qa-id='event-date']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Your event date'
            ],
            [
                "[data-qa-id='event-date']"
            ],
            [
                'xpath///*[@data-qa-id="event-date"]'
            ],
            [
                "pierce/[data-qa-id='event-date']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 41,
            y: 32,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/May 25, 2023'
            ],
            [
                'span.today'
            ],
            [
                'xpath//html/body/div[7]/div[2]/div/div[2]/div/span[26]'
            ],
            [
                'pierce/span.today'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/May 25, 2023'
            ],
            [
                'span.today'
            ],
            [
                'xpath//html/body/div[7]/div[2]/div/div[2]/div/span[26]'
            ],
            [
                'pierce/span.today'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 23.609375,
            y: 22,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Gifting'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Gifting'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Gifting'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Gifting'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 152,
            y: 16,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Preview'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Preview'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Preview'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Preview'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 148,
            y: 30,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Add Guests'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Add Guests'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Add Guests'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Add Guests'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 39,
            y: 27,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Next: Review & Send'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Review'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Next: Review & Send'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Next: Review'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 141,
            y: 22.953125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Save & Send Later'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Save & Send Later'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Save & Send Later'
            ],
            [
                "[data-qa-id='nav-bottom-next']"
            ],
            [
                'xpath///*[@data-qa-id="nav-bottom-next"]'
            ],
            [
                "pierce/[data-qa-id='nav-bottom-next']"
            ],
            [
                'text/Save & Send Later'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 222.671875,
            y: 28,
          },
        });
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
      await element.select(value);
      await element.evaluateHandle((e) => {
        e.blur();
        e.focus();
      });
    }

    async function changeElementValue(element, value) {
      await element.focus();
      await element.evaluate((input, value) => {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
}
