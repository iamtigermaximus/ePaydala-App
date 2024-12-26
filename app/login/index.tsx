import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

const LoginPage = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricAuthenticated, setIsBiometricAuthenticated] =
    useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check if biometrics are available
  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    };

    checkBiometricSupport();
  }, []);

  // Try biometric authentication
  const authenticateWithBiometrics = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Log in with Biometrics',
        fallbackLabel: 'Use PIN instead',
      });

      if (result.success) {
        setIsBiometricAuthenticated(true);
        router.push('/home'); // Navigate to the home screen
      } else {
        alert('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // PIN authentication
  const handlePinAuthentication = async () => {
    setLoading(true);
    try {
      const storedPin = await SecureStore.getItemAsync('userPin'); // Retrieve PIN from SecureStore
      if (storedPin && storedPin === pin) {
        setIsBiometricAuthenticated(true);
        router.push('/home'); // Navigate to the home screen
      } else {
        alert('Invalid PIN. Please try again.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Biometrics Authentication */}
      {isBiometricSupported && !isBiometricAuthenticated && (
        <TouchableOpacity
          style={styles.authButton}
          onPress={authenticateWithBiometrics}
        >
          <Text style={styles.authButtonText}>Log in with Biometrics</Text>
        </TouchableOpacity>
      )}

      {/* PIN Authentication Fallback */}
      {!isBiometricAuthenticated && (
        <>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={setPin}
            placeholder="Enter PIN"
            secureTextEntry
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.authButton}
            onPress={handlePinAuthentication}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.authButtonText}>Log in with PIN</Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  authButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginPage;
