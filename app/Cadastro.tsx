import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./logo.png')} style={styles.imagem} />
      <Text style={styles.titulo}>Computers</Text>
      <Link href="/Home">Ir para tela Home</Link>
      <label htmlFor="">Nome</label>
      <input type="text" placeholder = "Digite seu Nome completo" />
      <label htmlFor="">E-mail</label>
      <input type="text" placeholder = "Digite seu E-mail"/>
      <label htmlFor="">Data de Nascimento</label>
      <input type="date" />
      <label htmlFor="">CPF</label>
      <input type="text" placeholder = "Digite seu CPF" />
      <label htmlFor="">Senha</label>
      <input type="password" placeholder = "Digite sua senha" />

      <TouchableOpacity style={styles.botaoSalvar}>
      <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar}>
      <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
      
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
  },
  botaoSalvar: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,

  },
  botaoTexto: {
    color: '#ffff',
  },
  botaoVoltar: {
    backgroundColor:"purple",
    padding: 5,
    borderRadius: 5,
  }
});


