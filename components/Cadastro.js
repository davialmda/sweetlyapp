import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const API_URL = 'http://localhost:3000'; // substitua por seu IP se necessário

export default function Cadastro({ onNavigate }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerCadastro = async () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name: nome.trim(), email: email.trim(), password: senha }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Sucesso', `Cadastro realizado! Bem-vindo, ${nome}`);
        onNavigate('login');
      } else {
        Alert.alert('Erro', data.error || 'Erro ao cadastrar');
      }
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#f77ca9"
      />
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

      <TouchableOpacity style={styles.button} onPress={fazerCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('login')}>
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
    backgroundColor: '#f7a8b8',
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#fff' },
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
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '600' },
});
