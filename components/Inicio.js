<<<<<<< HEAD
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inicio({ onNavigate }) {
  // Função para ir para CriarPedido passando o tipo de doce
  const handleEscolhaDoce = (doce) => {
    // você pode usar params se quiser mostrar o doce na tela de pedido
    onNavigate('pedido'); // navega para CriarPedido
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Doce!</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Cookies')}>
        <Text style={styles.buttonText}>Cookies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Açai')}>
        <Text style={styles.buttonText}>Açaí</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Sorvetes')}>
        <Text style={styles.buttonText}>Sorvetes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Bolos')}>
        <Text style={styles.buttonText}>Bolos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7a8b8', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 40, textAlign: 'center' },
  button: { backgroundColor: '#f77ca9', width: '80%', paddingVertical: 20, borderRadius: 25, marginVertical: 15, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  buttonText: { fontSize: 20, color: '#fff', fontWeight: '600' },
});
=======
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inicio({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Doce!</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('cookies')}>
        <Text style={styles.buttonText}>Cookies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('acai')}>
        <Text style={styles.buttonText}>Açaí</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('sorbets')}>
        <Text style={styles.buttonText}>Sorbets</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('bolos')}>
        <Text style={styles.buttonText}>Bolos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencher a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7a8b8', // Rosa pastel
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // Cor de texto branca para bom contraste
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f77ca9', // Cor de fundo suave dos botões
    width: '80%',
    paddingVertical: 20,
    borderRadius: 25,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff', // Cor do texto do botão
    fontWeight: '600',
  },
});
>>>>>>> 6c681d2d254d7ba9617edcfed392fe72e8276b35
