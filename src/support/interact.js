import { log } from "./logger-utils"

export async function validateIfDynamicElementIsDisplayed(selector, displayedMessage, notDisplayedMessage, replacementText1, replacementText2 = "", replacementText3 = "") {
	const dynamicElement = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	await dynamicElement.isDisplayed()
		? log(displayedMessage)
		: issues.push(notDisplayedMessage)
	//await browser.highlightElementBackground(dynamicElement)
}

export async function validateIfStaticElementIsDisplayed(selector, displayedMessage = "", notDisplayedMessage = "") {
	const staticElement = await browser.$(selector)
	await staticElement.isDisplayed()
		? log(displayedMessage)
		: issues.push(notDisplayedMessage)
}

export async function validateIfDynamicElementIsExisting(selector, displayedMessage, notDisplayedMessage, replacementText1, replacementText2 = "", replacementText3 = "") {
	const dynamicElement = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	await dynamicElement.isExisting()
		? log(displayedMessage)
		: issues.push(notDisplayedMessage)
}

export async function validateIfStaticElementIsExisting(selector, displayedMessage = "", notDisplayedMessage = "") {
	const staticElement = await browser.$(selector)
	await staticElement.isExisting()
		? log(displayedMessage)
		: issues.push(notDisplayedMessage)
}

export async function isElementDisplayed(selector, displayedMessage = "", replacementText1 = "", replacementText2 = "", replacementText3 = "") {
	const element = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	log(displayedMessage)
	return await element.isDisplayed()
}

export async function isElementExisting(selector, replacementText1 = "", replacementText2 = "", replacementText3 = "") {
	const element = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	return await element.isExisting()
}

export async function clickDynamicElement(selector, displayedMessage, replacementText1, replacementText2 = "", replacementText3 = "") {
	const dynamicElement = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	await dynamicElement.click()
	log(displayedMessage)
}

export async function clickStaticElement(selector, displayedMessage) {
	const staticElement = await browser.$(selector)
	await staticElement.click()
	log(displayedMessage)
}

export async function typeOnStaticElement(selector, valueToType, displayedMessage) {
	const staticElement = await browser.$(selector)
	await staticElement.setValue(valueToType)
	log(displayedMessage)
}

export async function getElementText(selector, replacementText1 = "", replacementText2 = "", replacementText3 = "", displayedMessage = "") {
	const element = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	log(displayedMessage)
	return await element.getText()
}

export async function getStaticElementText(selector, displayedMessage = "") {
	const element = await browser.$(selector)
	log(displayedMessage)
	return await element.getText()
}

export async function getElementAttribute(selector, name, replacementText1 ="", replacementText2 = "", replacementText3 = "", displayedMessage = "") {
	const element = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	log(displayedMessage)
	return await element.getAttribute(name)
}

export async function scrollElementIntoView(selector, replacementText1 ="", replacementText2 = "", replacementText3 = "", displayedMessage = "") {
	const element = await browser.$(selector(replacementText1, replacementText2, replacementText3))
	await element.scrollIntoView()
	log(displayedMessage)
}

export async function scrollStaticElementIntoView(selector, displayedMessage = "") {
	const element = await browser.$(selector)
	log(displayedMessage)
	await element.scrollIntoView()
}

