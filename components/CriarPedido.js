import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const API_URL = 'http://localhost:3000';

export default function CriarPedido({ onNavigate }) {
  const [item, setItem] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCriarPedido = async () => {
    if (!item.trim() || !endereco.trim()) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ item: item.trim(), endereco: endereco.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', `Pedido de ${item} criado com sucesso!`);
        setItem('');
        setEndereco('');
      } else {
        Alert.alert('Erro', data.error || 'Não foi possível criar o pedido');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão com o servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Pedido</Text>
      
      <TextInput
        style={styles.input}
        value={item}
        onChangeText={setItem}
        placeholder="Digite o item desejado"
        placeholderTextColor="#f77ca9"
      />

      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço de entrega"
        placeholderTextColor="#f77ca9"
      />

      <TouchableOpacity style={styles.button} onPress={handleCriarPedido}>
        <Text style={styles.buttonText}>Criar Pedido</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('inicio')}>
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
