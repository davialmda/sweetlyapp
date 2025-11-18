import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Cadastro({ onNavigate }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const fazerCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.7:3000/api/cadastro', {
        name: nome,
        email,
        password: senha
      });
      
      if (response.data.user) {
        Alert.alert('Sucesso', `Cadastro realizado! Bem-vindo, ${nome}`);
        onNavigate('opcoes');
      }
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.error || 'Falha na conexão');
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
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        placeholderTextColor="#f77ca9"
      />

      <TouchableOpacity style={styles.button} onPress={fazerCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
