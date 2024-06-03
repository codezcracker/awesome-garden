#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "your_SSID";        // Replace with your Wi-Fi SSID
const char* password = "your_PASSWORD"; // Replace with your Wi-Fi password

const char* serverName = "https://awesome-garden-test.vercel.app/api/data"; // Your API endpoint

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName); // Specify the URL

    int httpCode = http.GET(); // Make the request

    if (httpCode > 0) { // Check for the returning code
      String payload = http.getString();
      Serial.println(httpCode);
      Serial.println(payload);
    } else {
      Serial.println("Error on HTTP request");
    }

    http.end(); // Free the resources
  } else {
    Serial.println("WiFi not connected");
  }

  delay(10000); // Send a request every 10 seconds
}
