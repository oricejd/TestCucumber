package ctest.features;

import static page.objects.Page.email;
import static page.objects.Page.goButton;
import static page.objects.Page.loginFailedIconPresent;
import static page.objects.Page.password;
import static page.objects.Page.searchNoResultsFound;
import static page.objects.Page.searchResultsFound;
import static page.objects.Page.searchStore;
import static page.objects.Page.signInButtonConfirm;
import static page.objects.Page.signInConfirmationWelcome;
import static page.objects.Page.signInConfirmationWelcomePresent;
import static page.objects.Page.switchToLoginiFrame;
import static page.objects.TopMenu.signInButton;
import static util.Util.sleep;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import selenium.WebDriverExtended;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import selenium.AbstractWebDriverSetup;
//import selenium.WebDriverExtended;

public class StepDefinitions extends AbstractWebDriverSetup{

//	WebDriver baseWebDriver = null;
//	WebDriverExtended driver = null;

//	@Before
//	public void setUp() {
//		baseWebDriver = new FirefoxDriver();
//	}
//
//	@After
//	public void tearDown() {
//		driver.close();
//	}
	
	WebDriverExtended driver = getWebDriverExtended();
	
	

	// /*
	@Given("^go to \"([^\"]*)\"$")
	public void goToUrl(String url) throws Throwable {
		System.out.println("#### Go To URL: " + url + " ###");
		// driver = new FirefoxDriver();
//		driver = new WebDriverExtended(baseWebDriver, url);
		driver.navigate().to(url);
		driver.manage().window().maximize();
		// throw new PendingException();
	};

	@When("^search for \"([^\"]*)\"$")
	public void searchForItem(String item) throws Throwable {
		System.out.println("#### Search for item: " + item + " ####");
		WebElement searchBox = searchStore(driver);
		searchBox.clear();
		searchBox.sendKeys(item);
		WebElement goButton = goButton(driver);
		goButton.click();
		sleep(3);

	};

	@Then("^verify found \"([^\"]*)\"$")
	public void verifyMatch(String match) throws Throwable {
		System.out.println("#### Do some validation ####");
		boolean searchResult = searchResultsFound(driver);
		Assert.assertTrue("Product not found", searchResult);
		// throw new PendingException();
		sleep(3);
	};

	@Then("^verify found items")
	public void verifyFoundItems() throws Throwable {
		System.out.println("#### Do some validation ####");
		boolean searchResult = searchResultsFound(driver);
		Assert.assertTrue("Product not found", searchResult);
		// throw new PendingException();
		sleep(3);
	};

	@Then("^verify not found items")
	public void verifyNotFoundItems() throws Throwable {
		System.out.println("#### Do some validation ####");
		boolean searchResult = searchNoResultsFound(driver);
		Assert.assertTrue("Product not found", searchResult);
		// throw new PendingException();
		sleep(3);
	};

	@Then("^verify not found \"([^\"]*)\"$")
	public void verifyNotFound(String match) throws Throwable {
		System.out.println("#### Do some validation ####");
		boolean searchResult = searchResultsFound(driver);
		Assert.assertTrue("Product not found", !searchResult);
		// throw new PendingException();
		sleep(3);
	};

	@When("^sign-in with credentials: \"([^\"]*)\" \"([^\"]*)\"$")
	public void verifyNotFound(String email, String password) throws Throwable {
		System.out.println("#### Sign-in ####");
		signInButton(driver).click();
		switchToLoginiFrame(driver);
		email(driver).sendKeys(email);
		password(driver).sendKeys(password);
		signInButtonConfirm(driver).click();
	};

	@Then("^verify sign-in")
	public void verifySignIn() throws Throwable {
		System.out.println("#### Verify sign in ####");
		Assert.assertTrue("Login failed", signInConfirmationWelcomePresent(driver));
	};

	@Then("^verify log in: \"([^\"]*)\"$")
	public void verifySignInAnsName(String test) throws Throwable {
		System.out.println("#### Verify sign in ####");
		Assert.assertTrue("Login failed", signInConfirmationWelcome(driver).getText().contains(test));
	};

	@Then("^verify log in failed")
	public void verifyLoginFailed() throws Throwable {
		System.out.println("#### Verify sign in ####");
//		switchToLoginiFrame(driver);
		Assert.assertTrue("Login failed", loginFailedIconPresent(driver));
	};
}
