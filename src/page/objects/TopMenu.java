package page.objects;

import static util.Util.isElementPresent;
import static util.Util.waitForElementIsDisplayed;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TopMenu {

	/**
	 * Returns the web element for find a store dropdown 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement searchStoreElem(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.linkText("#todo-store-locator"));
	}
	
	public static WebElement searchStoreBox(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.id("store-search"));
	}
	
	public static WebElement searchStoreButton(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.id("store-search"));
	}
	
	/**
	 * Returns the web element Help 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement help(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.linkText("http://help.marksandspencer.com/support"));
	}
	//
	
	/**
	 * Returns the web element SignIn 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement signInButton(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.xpath(".//*[@class='sign-link']"));
	}
}
