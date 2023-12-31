import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import React, {useState, memo} from 'react';
import HeaderView from './HeaderView';
import BodyView from './BodyView';
import {UserContextProvider} from '../../contexts/UserContext';

const PropDrillingPractice = () => {
  const [sampleText, setSampleText] = useState('');
  const [userObject, setUserObject] = useState({
    firstName: 'Firdous',
    lastName: 'Ali',
    age: 35,
    gender: 'male',
    address: 'some area',
    phone: 'xxxxxxxx',
    city: 'Karachi',
    country: 'Pakistan',
    email: 'dfdf@sdfdf.dd',
    degree: 'BE',
    university: 'NEDUET',
    favCars: [
      {brand: 'Cultus', model: '2019', color: 'Silver'},
      {brand: 'Passo', model: '2020', color: 'Black'},
      {brand: 'Cuore', model: '2012', color: 'White'},
      {brand: 'Civic', model: '2022', color: 'White'},
      {brand: 'Corolla', model: '2023', color: 'Red'},
    ],
  });

  console.log('Root view rendered');

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={sampleText}
        onChangeText={ct => {
          setSampleText(ct);
        }}
      />
      <UserContextProvider
        userObject={userObject}
        setSampleText={setSampleText}>
        <HeaderView />
        <BodyView />
      </UserContextProvider>

      <Button
        title={'Change Age'}
        onPress={() => {
          const userObjectCopy = {...userObject};
          userObjectCopy.age = 36;

          setUserObject(userObjectCopy);
        }}
      />
    </View>
  );
};

export default memo(PropDrillingPractice);

const styles = StyleSheet.create({});
