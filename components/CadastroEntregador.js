import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function CadastroEntregador({ onNavigate }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }
    Alert.alert('Sucesso', `Cadastro realizado! Bem-vindo, ${nome}`);
    onNavigate('loginEntregador');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Entregador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#f77ca9"
      />
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
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor="#f77ca9"
      />
      <TouchableOpacity style={styles.button} onPress={fazerCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#f1c0d6' }]} onPress={() => onNavigate('home')}>
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
