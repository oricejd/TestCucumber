package ctest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/ctest-htmlreport","json:target/ctest-report.json"},
		features = {"src/ctest/"},
		glue = "ctest.features"
		)
public class CucumberRunner {

}