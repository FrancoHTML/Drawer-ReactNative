import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
    <Image
        style={styles.logo}
        source={require('./images/gato-oculos.png')}
      />

       <Text style={styles.catsfunny}>
        CatsFunny
      </Text>


      <Text style={styles.paragraph}>
        Momentos engracados de gatos
      </Text>


      <Text style={styles.acesse}>
        Acesse sua conta
      </Text>


      <Text> </Text>


      <TextInput style={styles.login}
        placeholder=" E-mail"
        underlineColorAndroid="transparent"
      />


      <TextInput style={styles.login}
        placeholder=" Senha"
        underlineColorAndroid="transparent"
      />
      <TextInput style={styles.login}
        placeholder=" Data de nascimento"
        underlineColorAndroid="transparent"
      />


      <TextInput style={styles.login}
        placeholder=" CPF"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity style={styles.button}  ><Text style={styles.letralogin}>Salvar</Text></TouchableOpacity>


      <Text style={styles.ainda}>
        Ou
      </Text>

      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
     
<TouchableOpacity style={styles.button2} ><Text style={styles.letralogin}>Voltar</Text></TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 11,
    color: 'gray',
    textAlign: 'center',
  },

  catsfunny: {
    textAlign:  'center',
    fontWeigth: 'bold',
    fontSize: 34,
  },


  logo: {
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    left: 170,
 
  },

  acesse: {
    textAlign: 'center',

  },


  login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },


  button:{
    backgroundColor: 'blue',
    alignItems: 'center',
    width: 310,
    left: 50,
    padding: 15,
    top: 40,

  },

  button2: {
    backgroundColor: 'blue',
    alignItems: 'center',
    width: 310,
    left: 50,
    padding: 15,
    bottom: 5,
  },
  
  ainda:{
    textAlign:  'center',
    top: 50,
  },


 letralogin:{
    color: '#fff'
  }

});
