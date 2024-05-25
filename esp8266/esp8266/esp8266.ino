#include <Wire.h>
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>

char FIREBASE_AUTH [] = "AIzaSyDw8-WxV_7fmB320LDZdeuVtllguiPFfCY"; // Your Firebase Web API Key
char FIREBASE_HOST [] = "https://awesome-garden-default-rtdb.firebaseio.com"; // Your Firebase Host URL
char WIFI_SSID [] = "Charming";     // Your WIFI SSID
char WIFI_PASSWORD [] = "arshad786"; // Your WIFI Password
const int sensorPin = A0;
const int threshold = 5;
int previousValue = 0;

FirebaseData firebaseData;

void setup(){
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); 
}

void loop(){
  int sensorValue = analogRead(sensorPin);

  if(sensorValue >= 600){
    sensorValue = 600;
  }
  int result = sensorValue * 100 / 600;
  Serial.println(result);

  if (abs(result - previousValue) >= threshold) {
    Serial.println("Sending");
    Firebase.setString(firebaseData, "/data", String(result));
    previousValue = result; // Update the previous value
  }
 
 
  delay(1000);  
}