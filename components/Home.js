import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Sweetly</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onNavigate('cadastro')}
      >
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onNavigate('login')}
      >
        <Text style={styles.buttonText}>Login</Text>
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
    marginBottom: 40,
    color: '#fff',
  },
  button: {
    marginVertical: 15,
    width: '80%',
    paddingVertical: 20,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});