package util;

import java.io.File;
import java.io.FileOutputStream;

import selenium.WebDriverExtended;

import static selenium.CucumberScenarioDefinitionSetup.LOG;

public class CaptureScreenshotUtil {

	public static void captureScreenshot(WebDriverExtended driver, String childClassName) {
		try {
			// Make sure that the directory is there
			new File("target/surefire-reports/").mkdirs();
			FileOutputStream out = new FileOutputStream(
					"target/surefire-reports/screenshot-" + childClassName + "_" + System.currentTimeMillis() + ".png");
			out.write(driver.getScreenshot());
			out.close();
		} catch (Exception e) {
//			LOG.info("Could not take the screenshot");
			e.printStackTrace();
		}
	}
}
