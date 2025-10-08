import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inicio({ onNavigate }) {
  const handleEscolhaDoce = (doce) => {
    onNavigate('pedido', { doce });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Doce!</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Cookies')}>
        <Text style={styles.buttonText}>Cookies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleEscolhaDoce('Açaí')}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7a8b8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f77ca9',
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
    color: '#fff',
    fontWeight: '600',
  },
});
