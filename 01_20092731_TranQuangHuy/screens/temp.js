// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Screen01 from './screens/Screen01';
// import Screen02 from './screens/Screen02';
// import Screen03 from './screens/Screen03';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Screen03' screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Screen01" component={Screen01} />
//         <Stack.Screen name="Screen02" component={Screen02} />
//         <Stack.Screen name="Screen03" component={Screen03} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function App({navigation}) {
  return (
      <Tab.Navigator initialRouteName='Screen02' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Screen02" component={Screen01} 
          options={{
            tabBarLabel: 'Home',
            
          }}
          
        />
        <Tab.Screen name="Screen09" component={()=>{}} 
          options={{
            tabBarLabel: 'Search',
            
          }}
        />
        <Tab.Screen name="Screen03" component={()=>{}} 
          options={{
            tabBarLabel: "Favorities",
            
          }}
        />
        <Tab.Screen name="Screen04" component={()=>{}} 
          options={{
            tabBarLabel: "Inbox",
            
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
