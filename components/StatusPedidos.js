import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StatusPedidos({ pedido, onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status do Pedido</Text>
      <Text style={styles.texto}>Doce: {pedido.item}</Text>
      <Text style={styles.texto}>Endereço: {pedido.endereco}</Text>

      <Text style={styles.status}>Pedido em análise para ser aceito!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => onNavigate('opcoes')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f7a8b8', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  texto: { fontSize: 18, color: '#fff', marginBottom: 10 },
  status: { fontSize: 18, fontWeight: '600', color: '#fff', marginVertical: 20, textAlign: 'center' },
  button: { 
    width: '80%', 
    paddingVertical: 15, 
    borderRadius: 25, 
    backgroundColor: '#f77ca9', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20 
  },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '600' },
});
