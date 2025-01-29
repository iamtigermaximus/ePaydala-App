import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { usePathname, useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const Index = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null); // Stores the authenticated user.
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null); // Stores the confirmation object.
  const [code, setCode] = useState(''); // Stores the verification code entered by the user.

  // States for country, SSN, and phone number
  const [country, setCountry] = useState('');
  const [ssn, setSsn] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1); // Manage step flow
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true); // Welcome screen state
  const [bankLinked, setBankLinked] = useState(false);
  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user); // Set the user state to the authenticated user.
    if (initializing) setInitializing(false); // Mark initialization as complete.
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // Listen to auth state changes.
    return subscriber; // Unsubscribe on unmount.
  }, []);

  useEffect(() => {
    if (pathname === '/firebaseauth/link') router.back(); // Navigate back if on a specific path.
  }, [pathname]);

  const hardcodedPhoneNumber = '+358402411651';

  // Initiate phone authentication
  async function signInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert('Failed to send confirmation code. Please try again.');
      console.error('Error during phone sign-in:', error);
    }
  }

  // Confirm the verification code
  async function confirmCode() {
    if (!confirm) {
      alert('No confirmation object available.');
      return;
    }

    try {
      await confirm.confirm(code);
      alert('Phone number verified successfully!');
    } catch (error) {
      alert('Invalid verification code. Please try again.');
      console.error('Invalid code:', error);
    }
  }

  // Function to link bank and initiate identity verification
  const startAuthFlow = async () => {
    try {
      // Call your backend to get the URL for Signicat OAuth
      // const response = await fetch('http://localhost:3000/auth/login');
      // const { authUrl } = await response.json();
      // Open the Signicat login page in a browser or WebView
      // Linking.openURL(authUrl);
    } catch (error) {
      console.error('Error starting auth flow', error);
    }
  };
  if (initializing) return <ActivityIndicator size="large" />; // Wait for initialization.

  if (!user) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {isWelcomeScreen ? (
            <View style={styles.welcomeScreen}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/images/ePaydala-navy-piclogo.png')} // Replace with the path to your logo
                  style={styles.logo}
                  resizeMode="contain" // Optional: Makes sure the image scales properly
                />
              </View>
              <Text style={styles.welcomeText}>Welcome to ePaydala</Text>
              <Text style={styles.descriptionText}>
                Let's get you started with your registration.
              </Text>
              <TouchableOpacity
                onPress={() => setIsWelcomeScreen(false)}
                style={styles.getStartedButton}
              >
                <Text style={styles.getStartedButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
              {step === 1 && (
                <View style={styles.countryScreenContainer}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.headLabel}>Mabuhay, Kabayan!</Text>
                    <Text style={styles.label}>Where do you live?</Text>
                    <TextInput
                      style={styles.input}
                      value={country}
                      onChangeText={setCountry}
                      placeholder="Enter country"
                      autoFocus
                    />
                    <Text style={styles.subText}>
                      Didn't find your country? Read why
                    </Text>
                  </View>
                  <View style={styles.nextButtonContainer}>
                    <TouchableOpacity
                      style={styles.nextButton}
                      onPress={() => setStep(2)}
                    >
                      <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {step === 2 && (
                <>
                  <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                      style={styles.backButton}
                      onPress={() => setStep(1)}
                    >
                      <Icon name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialSecurityScreenContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>
                        What is your Social Security Number?
                      </Text>
                      <Text style={styles.subText}>
                        We need this to make sure you are you.
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={ssn}
                        onChangeText={(text) => {
                          // Automatically add a hyphen after the first 6 digits
                          const formattedText = text.replace(
                            /(\d{6})(\d+)/,
                            '$1-$2'
                          );
                          setSsn(formattedText);
                        }}
                        placeholder="SSN (e.g., 123456-7890)"
                        keyboardType="phone-pad"
                      />
                    </View>
                    <View style={styles.nextButtonContainer}>
                      <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => setStep(3)}
                      >
                        <Text style={styles.nextButtonText}>Next</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}

              {step === 3 && (
                <>
                  <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                      style={styles.backButton}
                      onPress={() => setStep(2)}
                    >
                      <Icon name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bankVerificationContainer}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>Confirm your identity</Text>
                      <Text style={styles.subText}>
                        To continue you need to confirm your identity.
                      </Text>
                    </View>
                    <View style={styles.nextButtonContainer}>
                      <TouchableOpacity style={styles.nextButton}>
                        <Text
                          style={styles.nextButtonText}
                          // onPress={startAuthFlow}
                          onPress={() => setStep(4)}
                        >
                          Next
                        </Text>
                      </TouchableOpacity>
                      {loading && (
                        <ActivityIndicator size="small" color="#fff" />
                      )}
                    </View>
                  </View>
                </>
              )}

              {step === 4 && (
                <>
                  <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                      style={styles.backButton}
                      onPress={() => {
                        if (confirm) {
                          // Navigate back to phone number input if confirm exists
                          setConfirm(null); // Clear the confirmation object
                        } else {
                          setStep(3); // Navigate back to Social Security Number input
                        }
                      }}
                    >
                      <Icon name="arrow-back" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>

                  {confirm ? (
                    <View style={styles.phoneNumberScreenContainer}>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                          Enter Confirmation Code
                        </Text>
                        <TextInput
                          style={styles.input}
                          value={code}
                          onChangeText={(text) => setCode(text)}
                          keyboardType="numeric"
                          placeholder="Enter verification code"
                        />

                        <View style={styles.confirmButtonContainer}>
                          <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={confirmCode}
                            disabled={loading}
                          >
                            <Text style={styles.confirmButtonText}>
                              Confirm Code
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.phoneNumberScreenContainer}>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                          What is your phone number?
                        </Text>
                        <Text style={styles.subText}>
                          {/* Phone Number: {hardcodedPhoneNumber} */}
                          We will send you a text message with a code to confirm
                          your number.
                        </Text>
                        <TextInput
                          style={styles.input}
                          value={phoneNumber}
                          onChangeText={setPhoneNumber}
                          placeholder="Enter phone number"
                          autoFocus
                        />
                      </View>
                      <View style={styles.nextButtonContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            setLoading(true);
                            signInWithPhoneNumber(hardcodedPhoneNumber).finally(
                              () => setLoading(false)
                            );
                          }}
                          style={styles.nextButton}
                        >
                          <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>
                        {loading && (
                          <ActivityIndicator size="small" color="#000" />
                        )}
                      </View>
                    </View>
                  )}
                </>
              )}
            </KeyboardAvoidingView>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.phoneNumber}</Text>
      <Button title="Sign Out" onPress={() => auth().signOut()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#05122D',
    paddingHorizontal: 20,
  },

  welcomeScreen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#fff',
  },
  inputContainer: { marginTop: 50 },
  input: {
    marginVertical: 8,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  headLabel: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subText: {
    fontSize: 14,
    marginTop: 5,
    color: '#a1a1ce',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backButtonContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  backButton: {},
  backButtonText: {},
  getStartedButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#5a2bdb',
    marginTop: 10,
    borderRadius: 15,
  },
  getStartedButtonText: {
    color: '#fff',
  },
  nextButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#5a2bdb',
    marginTop: 10,
    borderRadius: 15,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  confirmButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  confirmButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#5a2bdb',
    marginTop: 10,
    borderRadius: 15,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoContainer: {
    marginBottom: 60,
  },
  logo: {
    width: 300,
    height: 300,
    // borderRadius: 150, // Makes the logo circular
  },
  countryScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  socialSecurityScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  phoneNumberScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  bankVerificationContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
});

export default Index;
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import { usePathname, useRouter } from 'expo-router';

// const Index = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null); // Stores the authenticated user.
//   const [confirm, setConfirm] =
//     useState<FirebaseAuthTypes.ConfirmationResult | null>(null); // Stores the confirmation object.
//   const [code, setCode] = useState(''); // Stores the verification code entered by the user.

//   // Handle user state changes
//   function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
//     setUser(user); // Set the user state to the authenticated user.
//     if (initializing) setInitializing(false); // Mark initialization as complete.
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // Listen to auth state changes.
//     return subscriber; // Unsubscribe on unmount.
//   }, []);

//   useEffect(() => {
//     if (pathname === '/firebaseauth/link') router.back(); // Navigate back if on a specific path.
//   }, [pathname]);

//   // Initiate phone authentication
//   async function signInWithPhoneNumber(phoneNumber: string) {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation); // Store the confirmation object.
//     } catch (error) {
//       console.error('Error during phone sign-in:', error);
//     }
//   }

//   // Confirm the verification code
//   async function confirmCode() {
//     if (!confirm) {
//       console.error('No confirmation object available.');
//       return;
//     }

//     try {
//       await confirm.confirm(code); // Confirm the code.
//     } catch (error) {
//       console.error('Invalid code:', error);
//     }
//   }

//   if (initializing) return null; // Wait for initialization.

//   if (!user) {
//     if (!confirm) {
//       return (
//         <SafeAreaView style={{ marginBottom: 30 }}>
//           <TouchableOpacity
//             onPress={() => signInWithPhoneNumber('+358402411651')} // Replace with user input for a dynamic phone number.
//             style={{
//               borderColor: 'red',
//               borderWidth: 1,
//               marginTop: 100,
//               padding: 20,
//             }}
//           >
//             <Text>Sign In</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       );
//     }

//     return (
//       <SafeAreaView>
//         <TextInput
//           value={code}
//           onChangeText={(text) => setCode(text)} // Update the entered code.
//           style={{ borderColor: 'red', borderWidth: 1, padding: 20 }}
//           placeholder="Enter verification code"
//         />
//         <Button title="Confirm Code" onPress={confirmCode} />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView>
//       <Text>Welcome, {user.phoneNumber}</Text>{' '}
//       {/* Display the user's phone number */}
//       <Button title="Sign Out" onPress={() => auth().signOut()} />
//     </SafeAreaView>
//   );
// };

// export default Index;

// import React, { useState } from 'react';
// import {
//   // Text,
//   View,
//   StyleSheet,
//   KeyboardAvoidingView,
//   TextInput,
//   Button,
//   ActivityIndicator,
// } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { FirebaseError } from 'firebase/app';

// const Index = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const signUp = async () => {
//     setLoading(true);
//     try {
//       await auth().createUserWithEmailAndPassword(email, password);
//       alert('Check your emails!');
//     } catch (e: any) {
//       const err = e as FirebaseError;
//       alert('Registration failed: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signIn = async () => {
//     setLoading(true);
//     try {
//       await auth().signInWithEmailAndPassword(email, password);
//     } catch (e: any) {
//       const err = e as FirebaseError;
//       alert('Sign in failed: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView behavior="padding">
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//           keyboardType="email-address"
//           placeholder="Email"
//         />
//         <TextInput
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholder="Password"
//         />
//         {loading ? (
//           <ActivityIndicator size={'small'} style={{ margin: 28 }} />
//         ) : (
//           <>
//             <Button onPress={signIn} title="Login" />
//             <Button onPress={signUp} title="Create account" />
//           </>
//         )}
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   input: {
//     marginVertical: 4,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
//   Button,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
// } from 'react-native';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import { useRouter, usePathname } from 'expo-router';

// const RegistrationFlow = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null); // Track user state
//   const [confirm, setConfirm] =
//     useState<FirebaseAuthTypes.ConfirmationResult | null>(null); // Store the confirmation object
//   const [phoneNumber, setPhoneNumber] = useState(''); // Store phone number
//   const [code, setCode] = useState(''); // Store verification code
//   const [country, setCountry] = useState(''); // Store country
//   const [ssn, setSsn] = useState(''); // Store SSN
//   const [step, setStep] = useState(1); // Track the current step

//   // Handle user authentication state change
//   function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // Unsubscribe on unmount
//   }, []);

//   useEffect(() => {
//     if (pathname === '/firebaseauth/link') router.back(); // Navigate back if on specific path
//   }, [pathname]);

//   // Step 1: Phone Authentication - Initiating Sign-In
//   async function signInWithPhoneNumber() {
//     if (phoneNumber) {
//       try {
//         const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//         setConfirm(confirmation); // Store confirmation
//         console.log('Phone sign-in started, confirmation:', confirmation);
//         setStep(4); // Move to phone code verification
//       } catch (error) {
//         console.error('Error during phone sign-in:', error);
//       }
//     } else {
//       console.error('Phone number is required');
//     }
//   }

//   // Step 2: Confirming the code sent to the phone number
//   async function confirmCode() {
//     if (confirm && code) {
//       try {
//         await confirm.confirm(code);
//         console.log('Phone number confirmed');
//         setStep(5); // Registration complete
//       } catch (error) {
//         console.error('Invalid code:', error);
//       }
//     } else {
//       console.error('Confirmation object or code is missing');
//     }
//   }

//   // Handle Country selection
//   function handleCountrySelection() {
//     if (country) {
//       setStep(3); // Move to the next step (SSN input)
//     } else {
//       console.error('Country is required');
//     }
//   }

//   // Handle SSN submission
//   function handleSSNSubmit() {
//     if (ssn) {
//       setStep(4); // Move to phone authentication step
//     } else {
//       console.error('SSN is required');
//     }
//   }

//   if (initializing) return null;

//   // Registration Steps: Handling flow based on step state
//   if (!user) {
//     return (
//       <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//         {/* Step 1: Welcome Screen */}
//         {step === 1 && (
//           <View style={{ flex: 1, alignItems: 'center' }}>
//             <Text style={{ fontSize: 20 }}>Welcome to MobilePay App</Text>
//             <Text style={{ fontSize: 16, marginVertical: 10 }}>
//               Let's get you started with your registration.
//             </Text>
//             <Button title="Get Started" onPress={() => setStep(2)} />
//           </View>
//         )}

//         {/* Step 2: Country Selection */}
//         {step === 2 && (
//           <View style={{ flex: 1 }}>
//             <Text style={{ fontSize: 20 }}>Step 2: Where do you live?</Text>
//             <TextInput
//               style={{
//                 borderColor: 'red',
//                 borderWidth: 1,
//                 padding: 10,
//                 marginVertical: 20,
//               }}
//               value={country}
//               onChangeText={setCountry}
//               placeholder="Enter country"
//               autoFocus
//             />
//             <Button title="Next" onPress={handleCountrySelection} />
//           </View>
//         )}

//         {/* Step 3: SSN Input */}
//         {step === 3 && (
//           <View style={{ flex: 1 }}>
//             <Text style={{ fontSize: 20 }}>
//               Step 3: Enter your Finnish Social Security Number
//             </Text>
//             <TextInput
//               style={{
//                 borderColor: 'red',
//                 borderWidth: 1,
//                 padding: 10,
//                 marginVertical: 20,
//               }}
//               value={ssn}
//               onChangeText={setSsn}
//               placeholder="SSN"
//               keyboardType="numeric"
//             />
//             <Button title="Next" onPress={handleSSNSubmit} />
//           </View>
//         )}

//         {/* Step 4: Phone Number Input */}
//         {step === 4 && (
//           <KeyboardAvoidingView
//             behavior="padding"
//             style={{ flex: 1 }}
//             keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
//           >
//             <Text style={{ fontSize: 20 }}>
//               Step 4: Enter your phone number
//             </Text>
//             <TextInput
//               value={phoneNumber}
//               onChangeText={setPhoneNumber}
//               placeholder="Phone Number"
//               style={{
//                 borderColor: 'red',
//                 borderWidth: 1,
//                 padding: 10,
//                 marginVertical: 20,
//               }}
//               keyboardType="phone-pad"
//             />
//             <Button title="Next" onPress={signInWithPhoneNumber} />
//           </KeyboardAvoidingView>
//         )}

//         {/* Step 5: Phone Number Verification Code */}
//         {step === 5 && (
//           <KeyboardAvoidingView
//             behavior="padding"
//             style={{ flex: 1 }}
//             keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
//           >
//             <Text style={{ fontSize: 20 }}>
//               Step 5: Enter the code sent to your phone
//             </Text>
//             <TextInput
//               value={code}
//               onChangeText={setCode}
//               placeholder="Verification Code"
//               style={{
//                 borderColor: 'red',
//                 borderWidth: 1,
//                 padding: 10,
//                 marginVertical: 20,
//               }}
//               keyboardType="numeric"
//             />
//             <Button title="Confirm Code" onPress={confirmCode} />
//           </KeyboardAvoidingView>
//         )}

//         {/* Final Step: Registration Complete */}
//         {step === 6 && (
//           <View
//             style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//           >
//             <Text style={{ fontSize: 20 }}>Registration Complete!</Text>
//             <Button
//               title="Proceed to Next Step"
//               onPress={() => router.push('/next-step')}
//             />
//           </View>
//         )}
//       </SafeAreaView>
//     );
//   }

//   // User is signed in
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//     >
//       <Text>Welcome, {user.phoneNumber}</Text>
//       <Button title="Sign Out" onPress={() => auth().signOut()} />
//     </SafeAreaView>
//   );
// };

// export default RegistrationFlow;

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   KeyboardAvoidingView,
//   TextInput,
//   Button,
//   ActivityIndicator,
//   Text,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Platform,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import { FirebaseError } from 'firebase/app';
// import PhoneInput from 'react-native-phone-number-input';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import { usePathname, useRouter } from 'expo-router';

// const Index = () => {
//   const [country, setCountry] = useState('');
//   const [ssn, setSsn] = useState<string>(''); // Explicitly typing ssn as string
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [confirmationCode, setConfirmationCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [verificationId, setVerificationId] = useState<string | null>(null); // Handling null value
//   const [step, setStep] = useState(1);
//   const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
//   const pathname = usePathname();
//   const router = useRouter();

//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
//   const [confirm, setConfirm] =
//     useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
//   const [code, setCode] = useState('');

//   function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   useEffect(() => {
//     if (pathname === '/firebaseauth/link') router.back();
//   }, [pathname]);

//   async function signInWithPhoneNumber(phoneNumber: string) {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation);
//       setVerificationId(confirmation.verificationId); // Now safely handles string | null
//     } catch (error) {
//       console.error('Error during phone sign-in:', error);
//     }
//   }

//   async function confirmCode() {
//     if (!confirm) {
//       console.error('No confirmation object available.');
//       return;
//     }

//     try {
//       await confirm.confirm(code);
//       setStep(5);
//     } catch (error) {
//       console.error('Invalid code:', error);
//       alert(
//         'The confirmation code you entered is incorrect. Please try again.'
//       );
//     }
//   }

//   const handleCountrySelection = () => {
//     if (country.toLowerCase() !== 'finland') {
//       alert('Sorry, this service is only available in Finland.');
//       return;
//     }
//     setStep(2);
//   };

//   const handleSSNInput = (input: string) => {
//     // Remove all non-numeric characters except for the hyphen and letters
//     let formattedSSN = input.replace(/[^0-9a-zA-Z-]/g, '');

//     // Only add a hyphen after the first 6 digits
//     if (formattedSSN.length > 6) {
//       // Check if the hyphen already exists
//       if (!formattedSSN.includes('-')) {
//         formattedSSN = formattedSSN.slice(0, 6) + '-' + formattedSSN.slice(6); // Add hyphen after 6th digit
//       }
//     }

//     setSsn(formattedSSN); // Update the state with the formatted SSN
//   };

//   // Validation function to allow letters in the last position after the hyphen
//   const validateSSN = (ssn: string) => {
//     const ssnRegex = /^[0-9]{6}-[0-9A-Za-z]{4}$/; // Allow letters A-Z and numbers
//     return ssnRegex.test(ssn);
//   };

//   const handleSSNSubmit = () => {
//     // Directly use the validateSSN function to check if it's correct
//     if (!ssn || !validateSSN(ssn)) {
//       alert('Please enter a valid Finnish Social Security Number.');
//       return;
//     }
//     setStep(3); // Proceed to next step if valid
//   };

//   const sendConfirmationCode = () => {
//     if (!phoneNumber || phoneNumber.length < 10) {
//       alert('Please enter a valid phone number.');
//       return;
//     }

//     setLoading(true);
//     signInWithPhoneNumber(phoneNumber);
//     setIsCodeSent(true);
//     setLoading(false);
//   };

//   const goToRegistration = () => {
//     setIsWelcomeScreen(false);
//   };

//   if (initializing) return <ActivityIndicator size="large" />;

//   if (!user) {
//     return (
//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         <View style={styles.container}>
//           {isWelcomeScreen ? (
//             <View style={styles.welcomeScreen}>
//               <Text style={styles.welcomeText}>Welcome to MobilePay App</Text>
//               <Text style={styles.descriptionText}>
//                 Let's get you started with your registration.
//               </Text>
//               <Button title="Get Started" onPress={goToRegistration} />
//             </View>
//           ) : (
//             <KeyboardAvoidingView
//               behavior="padding"
//               style={{ flex: 1 }}
//               keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
//             >
//               {step === 1 && (
//                 <>
//                   <Text style={styles.label}>Where do you live?</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={country}
//                     onChangeText={setCountry}
//                     placeholder="Enter country"
//                     autoFocus
//                   />
//                   <Button onPress={handleCountrySelection} title="Next" />
//                 </>
//               )}

//               {step === 2 && (
//                 <>
//                   <Text style={styles.label}>
//                     Enter your Finnish Social Security Number
//                   </Text>
//                   <TextInput
//                     style={styles.input}
//                     value={ssn}
//                     onChangeText={handleSSNInput} // Use handleSSNInput here
//                     placeholder="SSN"
//                     keyboardType="numeric"
//                   />
//                   <Button onPress={handleSSNSubmit} title="Next" />
//                 </>
//               )}

//               {step === 3 && (
//                 <>
//                   <Text style={styles.label}>Enter your phone number</Text>
//                   <PhoneInput
//                     defaultValue={phoneNumber}
//                     onChangeFormattedText={setPhoneNumber}
//                     placeholder="Enter phone number"
//                     defaultCode="FI"
//                     layout="first"
//                   />
//                   {loading ? (
//                     <ActivityIndicator size="small" style={{ margin: 28 }} />
//                   ) : (
//                     <Button
//                       onPress={sendConfirmationCode}
//                       title="Send Confirmation Code"
//                     />
//                   )}
//                 </>
//               )}

//               {step === 4 && isCodeSent && (
//                 <>
//                   <Text style={styles.label}>Enter Confirmation Code</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={confirmationCode}
//                     onChangeText={setConfirmationCode}
//                     keyboardType="numeric"
//                     placeholder="Enter code"
//                   />
//                   {loading ? (
//                     <ActivityIndicator size="small" style={{ margin: 28 }} />
//                   ) : (
//                     <Button onPress={confirmCode} title="Verify Phone Number" />
//                   )}
//                 </>
//               )}
//             </KeyboardAvoidingView>
//           )}
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome, {user.phoneNumber}</Text>
//       <Button title="Sign Out" onPress={() => auth().signOut()} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   welcomeScreen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   descriptionText: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   input: {
//     marginVertical: 8,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
// });

// export default Index;
