import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StatusPedidos({ pedido, onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status do Pedido</Text>

      <Text style={styles.label}>Doce Selecionado:</Text>
      <Text style={styles.texto}>{pedido.item}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.texto}>{pedido.status || 'Em produção'}</Text>

      <Text style={styles.label}>Endereço de entrega:</Text>
      <Text style={styles.texto}>{pedido.endereco}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('meusPedidos')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7a8b8', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  label: { fontSize: 18, color: '#fff', marginTop: 15, fontWeight: '600' },
  texto: { fontSize: 16, color: '#fff', marginTop: 5 },
  button: {
    marginTop: 30,
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 18 },
});
