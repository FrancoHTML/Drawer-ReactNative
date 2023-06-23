import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import index from './app/index';
import TelaA from './app/TelaA';
import cadastro from './app/Cadastro';
import fotos from './app/fotos';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={index} />
      <Drawer.Screen name="Sobre" component={TelaA} />
      <Drawer.Screen name="Cadastro" component={cadastro} />
      <Drawer.Screen name="fotos" component={fotos} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

''