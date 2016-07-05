package page.objects;

import static util.Util.isElementPresent;
import static util.Util.waitForElementIsDisplayed;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class Page {
	
	/**
	 * Returns the web element for the main search box  
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement searchStore(WebDriver driver) {
		return driver.findElement(By.id("global-search"));
	}
	
	/**
	 * Returns the web element for the brand logo  
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement msBrandLogo(WebDriver driver) {
		return driver.findElement(By.id("brand-logo"));
	}
	
	/**
	 * Returns the web element for the search go button 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement goButton(WebDriver driver) {
		return driver.findElement(By.id("goButton"));
	}
	
	/**
	 * Returns the web element for the search results text 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement searchResults(WebDriver driver, String item) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
	}
	
	/**
	 * Returns the web element for no results section 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement noResultsElem(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.className("no-results"));
	}
	
	/**
	 * Returns the web element for the search results 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static boolean searchResultsFound(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return isElementPresent(driver,By.xpath(".//ol[@class='grid-view']/li"));
	}
	
	/**
	 * Returns the web element for the search results 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static boolean searchNoResultsFound(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return isElementPresent(driver,By.className("no-results"));
	}
	
	
	/**
	 * Returns the web element for the search results 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static boolean searchResultsTextFound(WebDriver driver, String str) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return isElementPresent(driver,By.xpath(".//*[@data-search-term='" + str + "']"));
	}
	
	/**
	 * Returns the web element for email text box
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement email(WebDriver driver) {
		return waitForElementIsDisplayed(driver, By.id("login-username"), 3);
	}

	/**
	 * Returns the web element for password box
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static WebElement password(WebDriver driver) {
		return waitForElementIsDisplayed(driver, By.id("login-password"), 3);
	}
	
	/**
	 * Returns the web element for sign in button
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static WebElement signInButtonConfirm(WebDriver driver) {
		return waitForElementIsDisplayed(driver, By.xpath(".//*[@name='submit-sign-in']"), 3);
	}
	//headerWelcomeMsg

	/**
	 * Returns the web element for welcome message after sign in
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static WebElement signInConfirmationWelcome(WebDriver driver) {
		return waitForElementIsDisplayed(driver, By.id("headerWelcomeMsg"), 3);
	}
	
	/**
	 * Returns the web element for welcome message after sign in element present
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static boolean signInConfirmationWelcomePresent(WebDriver driver) {
		return isElementPresent(driver, By.id("headerWelcomeMsg"));
	}
	
	/**
	 * Returns the true/false for login failed icon present or not present
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static boolean loginFailedIconPresent(WebDriver driver) {
		return isElementPresent(driver, By.xpath(".//*[@class='messaging error-msg']"));
	}
	
	/**
	 * Returns the true/false for login failed icon present or not present
	 * 
	 * @param driver
	 *            new instance of WebDriver
	 * @return specific web element
	 */
	public static void switchToLoginiFrame(WebDriver drv) {
		drv.switchTo().frame(drv.findElement(By.cssSelector("iframe[title='iframe content']")));
	}
}
