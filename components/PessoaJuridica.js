import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function PessoaJuridica({ onNavigate }) {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');

  const fazerCadastroPJ = () => {
    Alert.alert('Cadastro PJ realizado!', `CNPJ: ${cnpj}, Razão Social: ${razaoSocial}`);
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Pessoa Jurídica</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        placeholderTextColor="#f77ca9"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
        placeholderTextColor="#f77ca9"
      />

      <TouchableOpacity style={styles.button} onPress={fazerCadastroPJ}>
        <Text style={styles.buttonText}>Cadastrar PJ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('home')}>
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
    shadowColor: '#000',
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
