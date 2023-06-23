import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function fotos() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./images/gato-oculos.png')}
      />
      <Text style = {styles.titulo}>CatsFunny</Text>
      <Image
        style={styles.logo1}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo2}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo3}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo4}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo5}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo6}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo7}
        source={require('./images/gato-paz.png')}
      />
      <Image
        style={styles.logo8}
        source={require('./images/gato-paz.png')}
      />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 2,
  },

  logo:{
    justifyContent: 'center',
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    bottom: 10,
  },
  paragrafo:{
    width: 300,
    fontSize: 18,
  },
  logo1:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 0,
    top: 40,
    right: 50,
  },
  logo2:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 10,
    left: 60,
  },
  logo3:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 0,
    right: 50,
    top: 10,
  },
  logo4:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 40,
    left: 60,
  },
  logo5:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 20,
    right: 50,
  },
  logo6:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 70,
    left: 60,
  },
  logo7:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 50,
    right: 50,
  },
  logo8:{
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    bottom: 100,
    left: 60,
  },
});