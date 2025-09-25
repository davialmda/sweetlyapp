import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = () => {
    if (email === 'usuario@example.com' && senha === '123456') {
      onNavigate('inicio'); // Navega para a tela de escolher o doce após o login
    } else {
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#f77ca9"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#f77ca9"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={fazerLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onNavigate('home')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7a8b8', // Rosa pastel
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f1c0d6',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    marginTop: 20,
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
