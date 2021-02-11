
import {
	clickStaticElement,
	typeOnStaticElement,
} from "../support/interact"

import { log } from "../support/logger-utils"

const GoogleHomePage = {

    getPageTitle: async () => {
		return await browser.getTitle()
	},


	// ####### calendar locators #######
    searchFiled: "//input[@name='q']",
    searchButton: "//following::*[@value='Google Search'][2]",

    searchByKey: async (key) => {
		await typeOnStaticElement(GoogleHomePage.searchFiled, key, `Search Key ${key} Entered !!`)
		await clickStaticElement(GoogleHomePage.searchButton, "Google Search Button Clicked. !!")
        await browser.pause(5000)
        log(`Successfully Performed Serch on Google Home Page with Search Key ${key}`)
	},

    
}

export default Object.assign({}, GoogleHomePage)

