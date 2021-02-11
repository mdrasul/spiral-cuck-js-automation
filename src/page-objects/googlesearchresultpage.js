
import {
	validateIfDynamicElementIsDisplayed,
	validateIfStaticElementIsDisplayed,
	scrollStaticElementIntoView,
	clickDynamicElement,
	clickStaticElement,
	typeOnStaticElement,
	getStaticElementText
} from "../support/interact"

import { log } from "../support/logger-utils"

const Googlesearchresultpage = {

	getPageTitle: async () => {
		return await browser.getTitle()
	},

	// ####### locators #######
    searchResultElement: "//div[@id='result-stats']",

	//div[@id='rso']//h3//span



	getSearchResultCount: async () => {

		const resultText = await getStaticElementText(Googlesearchresultpage.searchResultElement, "Result Details Retrevied !!")
		const onlyCountFromresultText = resultText.replace(/[^0-9]/g, '')
		return onlyCountFromresultText
	},

	getAllSearchResultTitlesFor: async (searchKey) => {
		var allTitle = []
		const elements = await browser.$$("//div[@id='rso']//h3//span")

		for( let i=0;i<elements.length;i++){
			let titleText = await elements[i].getText();

			if(!titleText==""){
				if(titleText.toLowerCase().includes(searchKey.toLowerCase())){
					log(`web search result[${i}] : ${titleText}`)
					allTitle.push(titleText)
				}
			}
		}
		return allTitle;
	},

}

export default Object.assign({}, Googlesearchresultpage)

