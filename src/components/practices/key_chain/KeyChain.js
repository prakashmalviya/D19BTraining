import React, { useState } from 'react';
import { Text, TextInput, Alert, View } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyChainStorageHelper } from '../../master/Helper';
const KeyChain = props => {
    const [email, setEmail] = useState('');
    const [u_password, setUPassword] = useState('');

    const isButtonDisabled = !email || !u_password;

    return (
        <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ padding: 5, width: '30%' }}>email</Text>
                <TextInput
                    placeholder="Email"
                    style={{ backgroundColor: '#FFFFFF', padding: 5, width: '70%' }}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                }}>
                <Text style={{ padding: 5, width: '30%' }}>password</Text>
                <TextInput
                    placeholder="Password"
                    style={{ backgroundColor: '#FFFFFF', padding: 5, width: '70%' }}
                    onChangeText={text => setUPassword(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    buttonStyle={{ width: 60, backgroundColor: '#d3be00', margin: 10 }}
                    title={'set'}
                    onPress={() => {
                        const dataToStore = { email, u_password };
                        console.log('KEY CHAIN');
                        KeyChainStorageHelper.setData(
                            'user_session',
                            JSON.stringify(dataToStore),
                        );
                    }}
                    disabled={isButtonDisabled}
                />
                <Button
                    onPress={() => {
                        const dataToStore = { email, u_password };
                        KeyChainStorageHelper.getData('user_session');
                    }}
                    buttonStyle={{ width: 60, backgroundColor: '#02090d', margin: 10 }}
                    title="get"
                />
            </View>
        </View>
    );
};

export default KeyChain;
