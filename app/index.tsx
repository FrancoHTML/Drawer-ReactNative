import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./images/gato-oculos.png')}
      />
      <Text style = {styles.titulo}>CatsFunny</Text>
      <Text style = {styles.paragrafo}>Gosta de ver gatos em momentos inesperados e engraçados ?
        estas no lugar certo. Seu gato fez algo assim ? pode nos enviar. 
      </Text>
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
    bottom: 90,
  },

  logo:{
    justifyContent: 'center',
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    bottom: 100,
  },
  paragrafo:{
    width: 300,
    fontSize: 18,
  }
});