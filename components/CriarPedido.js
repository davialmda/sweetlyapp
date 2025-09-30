import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CriarPedido({ onNavigate, doceSelecionado }) {
  const [item, setItem] = useState('');
  const [endereco, setEndereco] = useState('');

  // Preenche automaticamente o item com o doce selecionado
  useEffect(() => {
    if (doceSelecionado) {
      setItem(doceSelecionado);
    }
  }, [doceSelecionado]);

  const handleCriarPedido = async () => {
    if (!item || !endereco) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await fetch('http://192.168.X.X:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item, endereco }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', `Pedido de ${item} criado com sucesso!`);
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
      <Text style={styles.label}>Item selecionado:</Text>
      <TextInput
        style={styles.input}
        value={item}
        onChangeText={setItem}
        editable={false} // impede que o usuário altere o item
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço"
      />

      <TouchableOpacity style={styles.button} onPress={handleCriarPedido}>
        <Text style={styles.buttonText}>Criar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#aaa', borderRadius: 5, padding: 10, marginBottom: 15, backgroundColor: '#fff' },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
