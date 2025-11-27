// App.js is the first file to be loaded by react native, by default. So this will be the root of your app, and it should render all other components. Like a root base.
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
    colors={['#a32d68ff', '#ddb52f']} 
      style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')}
      style={styles.rootScreen}
      resizeMode='cover'
      imageStyle={styles.backgroundImage}
      >
        <StartGameScreen/>
      </ImageBackground>  
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
      flex:1,
    },
    backgroundImage:{
      opacity:0.15,
    }
});
