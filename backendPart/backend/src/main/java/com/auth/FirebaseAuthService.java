package com.auth;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.auth.UserRecord;
import org.springframework.stereotype.Service;

@Service
public class FirebaseAuthService {

    private final FirebaseAuth firebaseAuth;

    public FirebaseAuthService() {
        this.firebaseAuth = FirebaseAuth.getInstance();
    }

    /**
     * Verifies the ID token received from the client.
     * @param idToken The token received from the frontend or mobile app.
     * @return The decoded FirebaseToken.
     * @throws FirebaseAuthException if the token is invalid or verification fails.
     */
    public FirebaseToken verifyIdToken(String idToken) throws FirebaseAuthException {
        return firebaseAuth.verifyIdToken(idToken);
    }

    /**
     * Creates a user with email and password.
     * @param email User email.
     * @param password User password.
     * @return The UID of the created user.
     * @throws FirebaseAuthException if user creation fails.
     */
    public String createUser(String email, String password) throws FirebaseAuthException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setPassword(password);

        UserRecord userRecord = firebaseAuth.createUser(request);
        return userRecord.getUid();
    }
}
