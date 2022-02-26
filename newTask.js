import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,TextInput,AsyncStorage } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
export default class NewTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:"",
            date:"",
        }
    }
    saveTask = async()=> {
        try{
            await AsyncStorage.setItem(this.state.title, this.state.description, this.state.date)
        }catch(error){
            console.log(error)
        }
    }
    render(){
        return(
            <View>
                <Text style = {styles.titleName}>Task Title</Text>
                <TextInput  placeholder="Task Name" style = {styles.title} value={this.state.title} onChangeText={(text)=>{this.setstate({
                    title:text,
                })}}>

                </TextInput>
                <Text style = {styles.titleName}>Task Description</Text>
                <TextInput multiline={true} numberOfLines={4} placeHolder="Task Details" onChangeText={(desc)=>{
                    this.setState({
                        description:desc,
                    })
                } }style = {styles.description}>

                </TextInput>
                <DateTimePicker value = {this.state.date} placeHolder="Enter Date" display = "default" is24Hour={true} onChange = {(event,date)=>{this.setState({
                    date:date,
                })}}>

                </DateTimePicker>
                <TouchableOpacity onPress = {()=>{
                    this.props.navigation.navigate("Home");
                    this.saveTask();
                }}>
                    <Text>Save Task</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        width:100,
        height:40,
        borderWidth:1,
        borderRadius:8,
        borderColor:"black",
    },
    titleName:{
        fontSize:30,
        colour:"gray",
        fontWeight:'bold',
    },
    description:{
        width:100,
        borderWidth:1,
        borderRadius:8,
        borderColor:"black",
    }
})