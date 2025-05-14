import { useState } from "react";
import { View, TextImput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}) {

    const [enteredGoalText, setEnteredGoalText] = useState ('')
    
    function handleInputGoal(enteredText) {
        //console.log(enteredText
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={StyleSheet.inputContainer}>
        <TextInput
            style=(StyleSheet.textImput)
            placeholder='Your Goal'
            onChangeText=(handleInputGoal)
            value=(enteredGoalText)
            />
        <Button 
            title='Add Goal'
            color={#A3FFD06}
            onPress= {addGoalHandler}
            />
            </View>
    )
}

export default GoalInput

const styles =StyleSheet.create({
    inputContainer :{
        flex:1,
        flexDirection:'row',
        justifyContent:'space*between',
        aling
    }
})