import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Digite e-mail e senha');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.7:3000/api/login', {
        email,
        password: senha
      });
      
      if (response.data.user) {
        onNavigate('opcoes');
      }
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.error || 'Falha na conexão');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#f77ca9"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#f77ca9"
      />
      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f1c0d6' }]}
        onPress={() => onNavigate('home')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7a8b8', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#fff' },
  input: { width: '80%', padding: 15, marginVertical: 10, borderWidth: 1, borderColor: '#f1c0d6', borderRadius: 10, fontSize: 16, backgroundColor: '#fff', color: '#333' },
  button: { marginTop: 20, width: '80%', paddingVertical: 15, borderRadius: 25, backgroundColor: '#f77ca9', alignItems: 'center', justifyContent: 'center' },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '600' },
});
