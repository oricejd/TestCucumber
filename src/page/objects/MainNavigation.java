package page.objects;

import static util.Util.waitForElementIsDisplayed;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MainNavigation {
	
	/**
	 * Returns the web element for find a store dropdown 
	 * @param driver new instance of WebDriver
	 * @return specific web element*/
	public static WebElement searchStoreElem(WebDriver driver) {
	//	return driver.findElement(By.xpath(".//p[contains(@data-search-term,'" + item + "')]"));
		return waitForElementIsDisplayed(driver, By.linkText("#todo-store-locator"));
	}

}
