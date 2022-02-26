import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import NewTask from './screens/newTask'
import TaskDetail from './screens/taskDetail'

const Stack = createStackNavigator()

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name = "Home"component={HomeScreen} />
  <Stack.Screen name = "NewTask"component={NewTask} />
  <Stack.Screen name = "TaskDetails"component={TaskDetails} />
  </Stack.Navigator>
</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
