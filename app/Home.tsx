import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./logo.png')} style={styles.imagem} />
      <Text style={styles.titulo}>Computers</Text>
      <Link href="/index">Voltar para Index</Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate ex eum exercitationem illum libero suscipit vero laudantium doloremque veritatis soluta aperiam, natus asperiores, quia ullam ea repudiandae consequatur voluptate.</p>
      
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

