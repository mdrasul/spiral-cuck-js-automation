import { log } from "../support/logger-utils"
import { GET_APIData , GET_APIResponseCode } from "../support/api-utl"


const {Given, When, And, Then, Before } = require("cucumber")

let apiResponseCode

let apiResponse


Given(/^I send a get request to api "([^"]*)"$/, async function (url) {
	log(`API URL ${url}`)
	apiResponseCode = await GET_APIResponseCode(url)
	apiResponse = await GET_APIData(url)
})

Then(/^I expect response code is (-?\d+)$/, async function (expectedResponseCode) {
	log(`Expected Response Code ${parseInt(expectedResponseCode)}`)
	log(`Actual Response Code ${apiResponseCode}`)


	expect(apiResponseCode).toEqual(parseInt(expectedResponseCode),`Expected Response Code to be "${expectedResponseCode}" but found "${apiResponseCode}"`);
})

