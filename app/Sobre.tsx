import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./logo.png')} style={styles.imagem} />
      <Text style={styles.titulo}>Sobre</Text>
      <Link href="/Cadastro">Ir para tela de Cadastro</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maiores. Soluta dolorem atque repudiandae. Quasi expedita, modi perferendis temporibus cupiditate eos necessitatibus itaque cum nobis veniam exercitationem consequatur maxime quisquam.</p>
      
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
    height: 200,
    resizeMode: 'contain',
  }
});
