import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

export default function CriarPedido({ onNavigate, adicionarPedido }) {
  const doces = ['Bolos', 'Sorvete', 'Cookies', 'Açaí']; 
  const [doceSelecionado, setDoceSelecionado] = useState(null);
  const [endereco, setEndereco] = useState('');

  const handleCriarPedido = () => {
    if (!doceSelecionado) {
      Alert.alert('Erro', 'Selecione um doce!');
      return;
    }
    if (!endereco) {
      Alert.alert('Erro', 'Preencha o endereço de entrega');
      return;
    }

    const novoPedido = { id: Date.now().toString(), item: doceSelecionado, endereco, status: 'pendente', entregador: null };
    adicionarPedido(novoPedido);
    setDoceSelecionado(null);
    setEndereco('');
    onNavigate('opcoes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Pedido</Text>

      <Text style={styles.label}>Selecione o doce:</Text>
      <View style={styles.optionsContainer}>
        {doces.map((doce) => (
          <TouchableOpacity
            key={doce}
            style={[
              styles.optionButton,
              doceSelecionado === doce && styles.optionButtonSelected
            ]}
            onPress={() => setDoceSelecionado(doce)}
          >
            <Text
              style={[
                styles.optionText,
                doceSelecionado === doce && styles.optionTextSelected
              ]}
            >
              {doce}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Endereço de entrega:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço completo"
        placeholderTextColor="#f77ca9"
      />

      <TouchableOpacity style={styles.button} onPress={handleCriarPedido}>
        <Text style={styles.buttonText}>Criar Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#f1c0d6' }]} onPress={() => onNavigate('opcoes')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f7a8b8' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  label: { fontSize: 18, color: '#fff', alignSelf: 'flex-start', marginLeft: '5%', marginBottom: 10, fontWeight: '600' },
  optionsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  optionButton: { width: '45%', paddingVertical: 15, marginVertical: 5, borderRadius: 15, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  optionButtonSelected: { backgroundColor: '#f77ca9' },
  optionText: { fontSize: 16, color: '#333', fontWeight: '600' },
  optionTextSelected: { color: '#fff' },
  input: { width: '90%', padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#f1c0d6', borderRadius: 10, backgroundColor: '#fff', fontSize: 16, color: '#333' },
  button: { width: '90%', paddingVertical: 15, borderRadius: 25, backgroundColor: '#f77ca9', alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
