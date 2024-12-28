import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig"; // Ensure the correct path to firebaseConfig

const HomeScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login Function
    const login = async () => {
        const auth = getAuth(firebaseApp); // Get Firebase Auth instance
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken(); // Retrieve the ID token
            Alert.alert("Login Successful", `ID Token: ${idToken}`);
            console.log("ID Token:", idToken); // Log the token for Postman testing
        } catch (error) {
            Alert.alert("Login Failed", error.message);
            console.error("Login Error:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login to MyCreditScoreTool</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={login} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
});

export default HomeScreen;
