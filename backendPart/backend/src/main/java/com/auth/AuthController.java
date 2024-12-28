package com.auth;

import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private FirebaseAuthService firebaseAuthService;

    // Verify a Firebase ID token
    @PostMapping("/verify-token")
    public ResponseEntity<FirebaseToken> verifyToken(@RequestBody String idToken) {
        try {
            FirebaseToken token = firebaseAuthService.verifyIdToken(idToken);
            return ResponseEntity.ok(token);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.badRequest().body(null); // Handle invalid token scenario
        }
    }

    // Create a user in Firebase (alternative to /auth/register)
    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestParam String email, @RequestParam String password) {
        try {
            firebaseAuthService.createUser(email, password);
            return ResponseEntity.ok("User created successfully!");
        } catch (FirebaseAuthException e) {
            return ResponseEntity.badRequest().body("Error creating user: " + e.getMessage());
        }
    }

    // Register endpoint (recommended approach)
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegisterRequest request) {
        try {
            String userId = firebaseAuthService.createUser(request.getEmail(), request.getPassword());
            return ResponseEntity.ok("User registered successfully with ID: " + userId);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.badRequest().body("Error during registration: " + e.getMessage());
        }
    }
}
