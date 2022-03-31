import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import Routes from './src/routes/index.js';
import AppLoading from "expo-app-loading";
import  { useFonts } from 'expo-font'
export default function App() {
  const [fontsLoadeds] = useFonts({ 
      'SF Pro Display' : require("./assets/fonts/sf-pro-display-regular.ttf"),
      'SF Pro Display Bold' : require('./assets/fonts/sf-pro-display-bold.ttf'),
      'SF Pro Display Medium' : require('./assets/fonts/sf-pro-display-medium.ttf'),
   })
    if(!fontsLoadeds) return <AppLoading /> 
  return (
      <Routes />
  );
}
