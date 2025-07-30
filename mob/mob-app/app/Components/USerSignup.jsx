import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebaseConfig from '../firebaseConfig';
import Botton from './Botton';
const app=firebaseConfig.app
const auth=firebaseConfig.auth
    // Make sure app is exported from firebaseConfig
        function UserSignup({ navigation }) {
        const [name, setName] = useState('');
        const [securityNo, setSecurityNo] = useState('');
        const [accountNo, setAccountNo] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [email, setEmail] = useState('');
        const [imageUri, setImageUri] = useState(null);

        // Image picker
        const pickImage = async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✅ Use the singular, not an array
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.7,
            });

            if (!result.canceled) {
                setImageUri(result.assets[0].uri);
            }
        };

 const handleSignup = async () => {
  if (!name || !securityNo || !accountNo || !email || !password || !confirmPassword) {
    Alert.alert("Error", "Please fill out all fields.");
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }

  if (!imageUri) {
    Alert.alert("Error", "Please select a profile image");
    return;
  }

  try {
    // 1. Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      type: "image/jpeg",
      name: "profile.jpg"
    });
    formData.append("upload_preset", "First_use_cloudinary"); // 🔁 Replace this
    formData.append("cloud_name", "djwrwtwr2"); // 🔁 Replace this

    const cloudinaryResponse = await fetch("https://api.cloudinary.com/v1_1/djwrwtwr2/image/upload", {
      method: "POST",
      body: formData,
    });

    const cloudinaryData = await cloudinaryResponse.json();
    const imageUrl = cloudinaryData.secure_url;

    // 2. Create Firebase user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 3. Save to Firebase Realtime DB
    await fetch(`https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/worker/${user.uid}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email: user.email,
        securityNo,
        accountNo,
        imageUrl,
        createdAt: new Date().toISOString()
      }),
    });

    Alert.alert("Success", "Worker registered successfully");
    navigation.navigate('WorkerLogin');

  } catch (error) {
    console.error("Signup error:", error);
    Alert.alert("Signup Failed", error.message);
  }
};


        return (
            <View className='flex-1 justify-center w-full items-center'>
                {/* Email */}
                <TextField label="Enter your Email" icon="email" onChangeText={setEmail} keyboardType="email-address" />
                {/* Name */}
                <TextField label="Enter your Full name" icon="person" onChangeText={setName} />
                {/* Security Number */}
                <TextField label="Enter your Security number" icon="security-update-warning" onChangeText={setSecurityNo} keyboardType="numeric" />
                {/* Account Number */}
                <TextField label="Enter your Account number" icon="account-balance" onChangeText={setAccountNo} keyboardType="numeric" />
                {/* Password */}
                <TextField label="Enter your Password" icon="password" onChangeText={setPassword} secureTextEntry />
                {/* Confirm Password */}
                <TextField label="Confirm Password" icon="confirmation-num" onChangeText={setConfirmPassword} secureTextEntry />

                {/* Image Picker */}
                <View className='flex-row items-center p-1 w-10/12'>
                    <Text>Upload Profile Image</Text>
                </View>
                <TouchableOpacity onPress={pickImage} className='my-2'>
                    <View style={{ borderColor: 'gray', borderWidth: 2, padding: 10, borderRadius: 10, width: 150, alignItems: 'center' }}>
                        <Text>Select Image</Text>
                    </View>
                </TouchableOpacity>

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
                )}

                <Botton color={'#0099ff'} data={'SignUp'} onPress={handleSignup} />
            </View>
        );
    };

// Reusable text field
const TextField = ({ label, icon, onChangeText, secureTextEntry, keyboardType = "default" }) => (
  <>
    <View className='flex-row items-center p-1 w-10/12'>
      <Text>{label}</Text>
    </View>
    <View className='flex-row border-2 items-center border-gray-700 p-2 rounded-lg bg-white my-2 w-10/12'>
      <MaterialIcons name={icon} size={24} color="gray" />
      <TextInput
        placeholder={label}
        className='text-gray-700 w-full border-0 p-1'
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  </>
);

export default UserSignup;
