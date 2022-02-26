import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskList :[],

        }
    }
    componentDidMount(){
        this.fetchTasks()
    }
    fetchTasks = async ()=>{
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress = {()=>{
                    this.props.navigation.navigate("NewTask")
                }}>
                  <Text>Add NewTask</Text>
                </TouchableOpacity>

                <FlatList data={this.state.taskList} />

                
            </View>
        )
    }
}