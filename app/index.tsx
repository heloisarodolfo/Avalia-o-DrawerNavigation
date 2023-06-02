import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./logo.png')} style={styles.imagem} />
      <Text style={styles.titulo}>Computers</Text>
      <Link href="/Sobre">Ir para Sobre</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut ad odio minima vero in, ab quidem maxime error dolorem, doloribus eius tempora esse harum et molestias! Doloremque, dolores ad.</p>
      
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    heigth: 200,
    resizeMode: 'contain',
  }
});
