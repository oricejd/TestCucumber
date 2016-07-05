package selenium;

import static selenium.CucumberScenarioDefinitionSetup.driver;

import selenium.WebDriverExtended;

public abstract class AbstractWebDriverSetup {

	public WebDriverExtended getWebDriverExtended() {
		return driver;
	}
}
