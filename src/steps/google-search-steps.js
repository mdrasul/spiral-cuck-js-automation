import { log } from "../support/logger-utils"
import GoogleHomePage from "../page-objects/googlehomepage"
import Googlesearchresultpage from "../page-objects/googlesearchresultpage"


const { When, And, Then, Before } = require("cucumber")


When(/^I perform a search for "([^"]*)" on google home page$/, async function (searchKey) {
	await GoogleHomePage.searchByKey(searchKey)
})


Then(/^I expect that the title is( not)* "([^"]*)?"$/, async function (falseCase,expectedTitle) {
	const title = await Googlesearchresultpage.getPageTitle();
	if (falseCase) {
        expect(title).not.toEqual(expectedTitle,`Expected title not to be "${expectedTitle}"`);
    } else {
        expect(title).toEqual(expectedTitle,`Expected title to be "${expectedTitle}" but found "${title}"`);
    }
})

Then(/^I expect that the result is( not)* "([^"]*)?"$/, async function (falseCase,expcount) {

	const resultCount = await Googlesearchresultpage.getSearchResultCount();
	log(resultCount)

	if (falseCase) {
        expect(resultCount).not.toEqual(expcount,`Expected count not to be "${expcount}"`);
    } else {
        expect(resultCount).toEqual(expcount,`Expected count to be "${expcount}" but found "${resultCount}"`);
    }

})

Then(/^I expect all result item contains "([^"]*)?"$/, async function (expText) {

	log(`\nExpected Text in all result: ${expText}`)
	log("___________________________________________________")
	
	const searchRestls = await Googlesearchresultpage.getAllSearchResultTitlesFor(expText) // this is an array of all result title 
	//log (`Actual Text Array from UI ${searchRestls}`) //==>> Keep For Future Debugging 

	for( let i=0;i<searchRestls.length;i++){
		// log (`Actual Text from UI ${searchRestls[i]}`) //==>> Keep For Future Debugging 
		expect(searchRestls[i].toLowerCase()).toContain(expText.toLowerCase(), `Search Result [${i}]: "${searchRestls[i]}" not contains text "${expText}"`)
	}
})