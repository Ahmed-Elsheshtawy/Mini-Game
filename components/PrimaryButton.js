import {Pressable, View, Text, StyleSheet} from 'react-native'

function PrimaryButton({children}){ // an implicitely provided prop called "children" that stores the children under the component (the tree of components under this component)
    
    function pressHandler(){
        console.log("Pressed!");
    }

    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={pressHandler} 
            android_ripple={{ color:'#a58495ff', foreground:true}} // only for android
            style={({pressed})=>
                {if(pressed) return [styles.pressed,styles.buttonInnerContainer];
                return styles.buttonInnerContainer}}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        buttonOuterContainer:{
            borderRadius:28,
            margin: 4,
            overflow:'hidden', // ensures any styles from children inside this container is 
            // cut-off or clipped.
        },
        buttonInnerContainer:{
            backgroundColor:'#ca3b83ff',
            paddingVertical:8,
            paddingHorizontal:45,
            elevation:2,
        },
        buttonText:{
            color:'#ffffff',
            fontWeight:'900',
            textAlign:'center',
        },
        pressed:{
            opacity:0.75,
        }
    }
)

export default PrimaryButton;