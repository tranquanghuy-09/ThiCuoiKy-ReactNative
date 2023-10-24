import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen02 from './Screen02';

const Tab = createBottomTabNavigator();



export default function App({navigation}) {
  return (
      <Tab.Navigator initialRouteName='Screen022' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Screen02" component={Screen02} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('../assets/Data/clarity_home-solid.png') : require('../assets/Data/clarity_home-solid.png')}
                style={{ width: "25px", height: "25px" }}
              />
            ),
          }}
          
        />
        <Tab.Screen name="Screen09" component={Screen01} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={focused ? require('../assets/Data/search.png') : require('../assets/Data/search.png')}
                style={{ width: "25px", height: "25px" }}
              />
            ),
          }}
        />
        <Tab.Screen name="Screen003" component={()=>{}} 
          options={{
            tabBarLabel: "Favorities",
            tabBarIcon:(focused, color, size )=>(
              <Image
                source={focused ? require('../assets/Data/mdi_heart-outline.png') : require('../assets/Data/mdi_heart-outline.png')}
                style={{ width: "25px", height: "25px" }}
              />
            ),
          }}
        />
        <Tab.Screen name="Screen04" component={()=>{}} 
          options={{
            tabBarLabel: "Inbox",
            tabBarIcon:(focused)=>(
              <Image
                source={focused ? require('../assets/Data/solar_inbox-outline.png') : require('../assets/Data/solar_inbox-outline.png')}
                style={{ width: "25px", height: "25px" }}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

function Screen01() {
    return (
        <View>
          <View style={{
              flexDirection: 'row',
              width: "100%",
              alignItems: 'center',
              height: 50,
              marginTop: 0,
              paddingHorizontal: 10,
              backgroundColor: 'white',
          }}>
            {/* Thêm các phần tử UI của bạn ở đây */}
          </View>
          <Text>Home Screen</Text>
          {/* Thêm nội dung màn hình chính ở đây */}
        </View>
      );
}
