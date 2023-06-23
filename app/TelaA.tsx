import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default function TelaA() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./images/gato-oculos.png')}
      />
      <Text style = {styles.titulo}>CatsFunny</Text>
      <Text style = {styles.paragrafo}>Somos uma empresa pequena, esse aplicativo foi feito para pessoas
      amantes de felinos, esse aplicativo já ajudou muitas pessoas em dias ruins, esse é o nosso objetivo.
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