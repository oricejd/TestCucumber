package selenium;

import static util.CaptureScreenshotUtil.captureScreenshot;
import static util.PropertiesFilesUtil.getElementIdentifier;
import static util.PropertiesFilesUtil.getProperty;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.openqa.selenium.Platform.ANY;

import java.net.MalformedURLException;
import java.net.URL;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import selenium.WebDriverExtended;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

@SuppressWarnings("all")
public class CucumberScenarioDefinitionSetup {

	public static Logger LOG = Logger.getLogger("testLogger");
	public static Logger LOG_TIME = Logger.getLogger("timeLogger");
	public static WebDriverExtended driver;

	private String baseUrl;
	private long startTime;
	private String childClassName = this.getClass().getName();

	@Before
	public void setUp() {

		startTime = System.currentTimeMillis();
		String grid = "no";//System.getProperty("grid");

		FirefoxProfile ffProfile = new FirefoxProfile();
		WebDriver baseWebDriver = null;
		try {
			DesiredCapabilities dc = DesiredCapabilities.firefox();
			dc.setCapability("platform", ANY);
			if ("yes".equalsIgnoreCase(grid)) {
				dc.setBrowserName(DesiredCapabilities.firefox().getBrowserName());
				baseWebDriver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), dc);
			} else {
				baseWebDriver = new FirefoxDriver(ffProfile);
			}

			baseWebDriver.manage().window().maximize();
			((JavascriptExecutor) baseWebDriver).executeScript("window.focus();");
			baseUrl = getElementIdentifier("url");

			driver = new WebDriverExtended(baseWebDriver, baseUrl);
			driver.manage().timeouts().implicitlyWait(10, SECONDS);
			driver.manage().timeouts().pageLoadTimeout(10, SECONDS);

		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
	}

	@After()
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			captureScreenshot(driver, childClassName);
		}
		driver.close();
		LOG_TIME.info(System.currentTimeMillis() - startTime);
	}
}
