import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App({navigation}) {
    const [data, setData] = useState([
        {key: '0', email: "h", password: "1"},
        {key: '1', email: "huy1@gmail.com", password: "123456"},
        {key: '2', email: "huy2@gmail.com", password: "123456"},
        {key: '3', email: "huy3@gmail.com", password: "123456"},
        {key: '4', email: "huy4@gmail.com", password: "123456"},
        {key: '5', email: "huy5@gmail.com", password: "123456"},
    ]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image source={require('../assets/images/logo.png')}
            style={{width: 100, height: 100}}
        />
        <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 15,
        }}>Hello Again!</Text>
        <Text style={{
            fontSize: 20,
            marginTop: 15,
        }}>Login into your account</Text>
      </View>
      <View style={styles.style2}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: '95%',
            height: 50,
            padding: 10,
            borderRadius: 10,
        }}>
            <Image source={require('../assets/images/iconmail.jpg')}
                style={{width: 40, height: 40}}
            />
            <TextInput
                placeholder='Enter your email address'
                style={{
                    fontSize: 20,
                    color: 'silver',
                }}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            width: '95%',
            height: 50,
            padding: 10,
            borderRadius: 10,
            marginTop: 40,
        }}>
            <Image source={require('../assets/images/iconpw.png')}
                style={{width: 30, height: 30, marginRight: 10}}
                resizeMode='contain'
            />
            <TextInput
                placeholder='Enter your password'
                style={{
                    fontSize: 20,
                    color: 'silver',
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Image source={require('../assets/images/iconmat.png')}
                style={{width: 30, height: 30, marginLeft: 60}}
                resizeMode='contain'
            />

        </View>
        <Text style={{
            fontSize: 18,
            color: 'blue',
            marginTop: 20,
            textAlign: 'right',
            width: '95%',
        }}>Forgot password?</Text>
        <TouchableOpacity style={{
            width: '95%',
            backgroundColor: "rgb(0, 195, 255)",
            height: 50, 
            marginTop: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }}
            onPress={() => {
                const user = data.find((item) => item.email === email && item.password === password);
                if(user){
                    setLoggedIn(true);
                }else{
                    alert('Invalid email or password');
                }
                if(loggedIn){
                    navigation.navigate('Screen03');
                }
            }}
        > 
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}>Continute</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.style3}>
            <Text>Or</Text>
            <View style={{flexDirection: "row", marginTop: 20}}>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "50%",
                    
                }}>
                    <Image source={require('../assets/images/icongoogle.png')}
                        style={{width: 30, height: 30, }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "50%",
                    marginLeft: 10,
                }}>
                    <Image source={require('../assets/images/iconfb.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "50%",
                    marginLeft: 10,
                }}>
                    <Image source={require('../assets/images/iconapple.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style1:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  style2:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  style3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
