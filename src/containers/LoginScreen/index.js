import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// import {PersistanceHelper} from '../../helpers';
// import {EventRegister} from 'react-native-event-listeners';
// import {useUserContext} from '../../contexts/UserContext';
import {useDispatch} from 'react-redux';
// import {login} from '../../features/user/userSlice';
import {kApiLogin} from '../../config/WebService';
import {request} from '../../features/user/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {
  //   actions: {setIsUserLoggedIn},
  // } = useUserContext();

  useEffect(() => {
    return () => {
      console.log('login screen unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('email or pas was changed');
  }, [email, password]);

  // useEffect(() => {
  //   console.log('password was changed');
  // }, [password]);

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        placeholder="Enter Email"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder="Enter Password"
        secureTextEntry
        style={styles.textInput}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={async () => {
          dispatch(
            request({url: kApiLogin, method: 'POST', data: {email, password}}),
          );
          // PersistanceHelper.setValue('userEmail', email);
          // EventRegister.emit('loginEvent', email);
          // PersistanceHelper.setObject('testObject', {
          //   car: 'Passo',
          //   mileage: 53000,
          //   color: 'black',
          // });
          // setIsUserLoggedIn(true);
          // dispatch(login({email, password}));
          // auth()
          //   .signInWithEmailAndPassword(email, password)
          //   .then(() => {
          //     console.log('Logged in successfully');
          //   })
          //   .catch(error => {
          //     if (error.code === 'auth/email-already-in-use') {
          //       console.log('That email address is already in use!');
          //     }
          //     if (error.code === 'auth/invalid-email') {
          //       console.log('That email address is invalid!');
          //     }
          //     console.error(error);
          //   });
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    borderRadius: 8,
    padding: 5,
  },
  submitButton: {
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
});
