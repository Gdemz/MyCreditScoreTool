package com.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class FirebaseConfig {

    public FirebaseConfig() throws IOException {
        // Path to your Firebase Admin SDK JSON file
        FileInputStream serviceAccount = new FileInputStream("src/main/resources/firebase-adminsdk.json");

        // Configure Firebase options
        FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://mycreditscoretool.firebaseio.com") // Correct Firebase Database URL
                .build();

        // Initialize the Firebase app
        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options);
            System.out.println("Firebase App Initialized Successfully!");
        } else {
            System.out.println("Firebase App already initialized!");
        }
    }
}
