import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {color} from 'react-native-elements/dist/helpers';
import {useNavigation} from '@react-navigation/native';

const FirebaseSignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigation();
  const handleLogin = () => {
    // Implement Firebase authentication logic here
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B4B4B4"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B4B4B4"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={{marginTop: 30}} onPress={handleLogin}>
          <Text style={[styles.buttonText, {fontSize: 10}]}>
            If you have already signup then go to sign in page
          </Text>
          <Text
            style={[styles.buttonText, {color: '#3aceff', textAlign: 'center'}]}
            onPress={() => {
              navigate.navigate('FireBase Login');
            }}>
            {' '}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  title: {
    fontSize: 32,
    color: '#ECF0F1',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    backgroundColor: '#ECF0F1',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#34495E',
  },
  loginButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ECF0F1',
    fontSize: 16,
  },
});

export default FirebaseSignUp;
