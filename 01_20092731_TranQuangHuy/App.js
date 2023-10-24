import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen01 from './screens/Screen01';
import Screen02 from './screens/Screen02';
import Screen03 from './screens/Screen03';
import Screen04 from './screens/temp.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen03' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
        <Stack.Screen name="Screen03" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

// import Screen01 from './screens/Screen01';
// import Screen02 from './screens/Screen02';
// import Screen03 from './screens/Screen03';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName='Screen01' screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Screen01" component={Screen01} 
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ focused, color, size }) => (
//               <Image
//                 source={focused ? require('./assets/Data/clarity_home-solid.png') : require('./assets/Data/clarity_home-solid.png')}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ),
            
//           }}
          
//         />
//         <Tab.Screen name="Screen02" component={Screen02} 
//           options={{
//             tabBarLabel: 'Search',
//             tabBarIcon: ({ focused, color, size }) => (
//               <Image
//                 source={focused ? require('./assets/Data/search.png') : require('./assets/Data/search.png')}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen name="Screen03" component={()=>{}} 
//           options={{
//             tabBarLabel: "Favorities",
//             tabBarIcon:(focused, color, size )=>(
//               <Image
//                 source={focused ? require('./assets/Data/mdi_heart-outline.png') : require('./assets/Data/mdi_heart-outline.png')}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen name="Screen04" component={()=>{}} 
//           options={{
//             tabBarLabel: "Inbox",
//             tabBarIcon:(focused)=>(
//               <Image
//                 source={focused ? require('./assets/Data/solar_inbox-outline.png') : require('./assets/Data/solar_inbox-outline.png')}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
