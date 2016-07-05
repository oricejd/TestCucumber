package util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

public class PropertiesFilesUtil {

	/**
	 * Creates/overwrites a properties file
	 * 
	 * @param fileName
	 *            string containing the name of the properties file which will
	 *            be created/overwritten
	 * @param propName
	 *            string containing the property name
	 * @param propValue
	 *            string containing the property value
	 */
	public static void writePropertiesFile(String fileName, String propName, String propValue) {
		try {
			Properties properties = new Properties();
			properties.setProperty(propName, propValue);
			File file = new File("properties/" + fileName + ".properties");
			FileOutputStream fileOut = new FileOutputStream(file);
			properties.store(fileOut, "Temporary properties");
			fileOut.close();
		} catch (FileNotFoundException e) {
			Logger.getLogger(PropertiesFilesUtil.class.getName()).log(Level.ERROR, null, e);
		} catch (IOException e) {
			Logger.getLogger(PropertiesFilesUtil.class.getName()).log(Level.FATAL, null, e);
		}
	}

	/**
	 * Returns a specific property value from a specific properties file
	 * 
	 * @param fileName
	 *            string containing the properties file name
	 * @param propName
	 *            string containing the specific property name
	 * @return string containing the specific property value for the requested
	 *         property name
	 */
	public static String getProperty(String fileName, String propName) {
		String propertyValue = "";
		try (FileReader reader = new FileReader("properties/" + fileName + ".properties")) {
			Properties properties = new Properties();
			properties.load(reader);
			propertyValue = properties.getProperty(propName);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return propertyValue;
	}

	public static String getProperty(String propName) {
		return getProperty("HRS", propName);
	}

	/**
	 * Returns a specific element id, class name, css selector xpath etc
	 * 
	 * @param fileName
	 *            string containing the properties file name
	 * @param identifier
	 *            string containing the specific element identifier
	 * @return string containing the specific element identifier for the
	 *         requested property name
	 */
	public static String getElementIdentifier(String fileName, String identifier) {
		String propertyValue = "";
		try (FileReader reader = new FileReader("properties/" + fileName + ".identifiers")) {
			Properties properties = new Properties();
			properties.load(reader);
			propertyValue = properties.getProperty(identifier);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return propertyValue;
	}

	public static String getElementIdentifier(String identifier) {
		return getElementIdentifier("pageElements", identifier);
	}
}