import {TextInput, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen(){

    const [number, setNumber] = useState(0);

    function onChangeNumber(text){
        if(Number.parseInt(text) !== 0){ // we turn from a String to a Number first for comparison
            setNumber(text);
        }
        console.log(text);
    }

    function onConfirm(){
        if(number <= 0){
            // show error
            return;
        }

    }

    function onReset(){
        setNumber(0); // zero is just blank
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onChangeNumber}
        value={number}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
            </View>
            
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        shadowOffset:{height:3,width:3}, // this is an IOS-specific property. It doesn't work
        // with Android. (All props starting with "shadow", and not only the offSet prop)
        shadowColor:'black',
        shadowRadius: 6,
        shadowOpacity:0.25,
        elevation:4, // this is an android-specific property, meaning it only works with
        // android. Because it is translated to a native component on android that adds
        // a shadow.
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#72063c',
    },
    numberInput:{
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        fontSize:32,
        marginVertical:30,
        fontWeight:'bold',
        textAlign:'center',

    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    buttonContainer:{
        alignItems:'stretch',
    }
})

export default StartGameScreen;